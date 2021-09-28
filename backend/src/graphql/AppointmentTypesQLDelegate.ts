import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage} from "../socket/SocketTypes";
import socketManager from "../socket/SocketManager";
import moment from "moment";

const logger = debug('data-source-appointment-types');

export default class AppointmentTypesQLDelegate {
    private constructor() {
    }

    public static getAppointmentTypes() {
        logger('Getting appointment types');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENT_TYPES || 'pms-appt-types';

            let projection = { projection: {
                    _id: 1,
                    name:1,
                    colour:1,
                }
            };

            MongoDataSource.getInstance().getDatabase().collection(collection).find({},projection).toArray().then((results:Document[]) => {
                logger(results.length);
                resolve(results);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static addAppointmentType(_: any, data: any) {
        logger(`Adding Appointment Type`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENT_TYPES || 'pms-appt-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.apptType).then((value) => {
                logger(value);
                const message:DataMessage = {type:"create",stateName: "appointmentType",data:data.apptType, user:"-1",}
                socketManager.sendDataMessage(message);

                resolve(data);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static updateAppointmentType(_: any, data: any) {
        logger(`Updating appointment type`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENT_TYPES || 'pms-appt-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id:data.apptType._id},data.apptType).then((value) => {
                logger(value);
                const message:DataMessage = {type:"update",stateName: "appointmentType",data:data.apptType, user:"-1"}
                socketManager.sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static deleteAppointmentType(_: any, data: any) {
        logger(`Deleting appointment type with identifier`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_APPOINTMENT_TYPES || 'pms-appt-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id:data.id}).then((result:DeleteResult) => {
                // @ts-ignore
                const message:DataMessage = {type:"delete",stateName: "appointmentType",data:{ _id: data.id},user:"-1",}
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