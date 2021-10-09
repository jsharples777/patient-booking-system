import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage} from "../socket/SocketTypes";
import socketManager from "../socket/SocketManager";


const logger = debug('data-source-appointment-templates');

export default class AppointmentTemplatesQLDelegate {
    private constructor() {
    }

    public static getAppointmentTemplates() {
        logger('Getting appointment templates');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPT_TEMPLATES || 'pms-appt-templates';

            let projection = {
                projection: {
                    _id: 1,
                    day: 1,
                    time: 1,
                    duration: 1,
                    createdBy: 1,
                    provider: 1,
                    type: 1,
                    created: 1,
                    modified: 1
                }
            };


            MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).toArray().then((results: Document[]) => {
                logger(results.length);
                resolve(results);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static addAppointmentTemplate(_: any, data: any) {
        logger(`Adding Appointment Template`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPT_TEMPLATES || 'pms-appt-templates';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.template).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "create",
                    stateName: "appointmentTemplate",
                    data: data.template,
                    user: data.template.createdBy,
                }
                socketManager.sendDataMessage(message);

                resolve(data.template);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static updateAppointmentTemplate(_: any, data: any) {
        logger(`Updating appointment template`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPT_TEMPLATES || 'pms-appt-templates';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.template._id}, data.template).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "update",
                    stateName: "appointmentTemplate",
                    data: data.template,
                    user: data.template.createdBy
                }
                socketManager.sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static deleteAppointmentTemplate(_: any, data: any) {
        logger(`Deleting item with identifier`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPT_TEMPLATES || 'pms-appt-templates';
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id: data.id}).then((result: DeleteResult) => {
                // @ts-ignore
                const message: DataMessage = {
                    type: "delete",
                    stateName: "appointmentTemplate",
                    data: {_id: data.id},
                    user: "-1",
                }
                socketManager.sendDataMessage(message);
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
