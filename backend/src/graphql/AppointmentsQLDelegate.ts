import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import moment from "moment";
import {DataMessage, SocketManager} from "server-socket-framework-jps";

const logger = debug('data-source-appointments');

export default class AppointmentsQLDelegate {
    private constructor() {
    }

    public static getAppointments() {
        logger('Getting appointments from up to three months ago');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENTS || 'pms-appts';
            const goBackThreeMonths = parseInt(moment().subtract(3, 'month').format('YYYYMMDD'));

            let projection = {
                projection: {
                    _id: 1,
                    _patient: 1,
                    start: 1,
                    time: 1,
                    duration: 1,
                    createdBy: 1,
                    isCancelled: 1,
                    isDNA: 1,
                    provider: 1,
                    note: 1,
                    type: 1,
                    name: 1,
                    status: 1,
                    created: 1,
                    modified: 1,
                    arrivalTime: 1,
                    readyForBilling: 1,
                    isBilled: 1,
                    billingItems: 1
                }
            };


            MongoDataSource.getInstance().getDatabase().collection(collection).find({start: {$gte: goBackThreeMonths}}, projection).sort({start: 1}).toArray().then((results: Document[]) => {
                logger(results.length);
                resolve(results);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static addAppointment(_: any, data: any) {
        logger(`Adding Appointment`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENTS || 'pms-appts';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.appt).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "create",
                    stateName: "appointment",
                    data: data.appt,
                    user: data.appt.createdBy
                }
                SocketManager.getInstance().sendDataMessage(message);

                resolve(data.appt);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static updateAppointment(_: any, data: any) {
        logger(`Updating appointment`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENTS || 'pms-appts';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.appt._id}, data.appt).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "update",
                    stateName: "appointment",
                    data: data.appt,
                    user: data.appt.createdBy
                }
                SocketManager.getInstance().sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static deleteAppointment(_: any, data: any) {
        logger(`Deleting item with identifier`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENTS || 'pms-appts';
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id: data.id}).then((result: DeleteResult) => {
                // @ts-ignore
                const message: DataMessage = {
                    type: "delete",
                    stateName: "appointment",
                    data: {_id: data.id},
                    user: "-1",
                }
                SocketManager.getInstance().sendDataMessage(message);
                logger(result);
                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

}
