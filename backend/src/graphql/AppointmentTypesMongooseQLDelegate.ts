import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document, ObjectId} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";
import {AppointmentTypeModel} from "../model/AppointmentType";

const logger = debug('data-source-appointment-types-mongoose');

export default class AppointmentTypesMongooseQLDelegate {
    private constructor() {
    }

    public static getAppointmentTypes() {
        logger('Getting appointment types');

        return new Promise((resolve, reject) => {
            AppointmentTypeModel.find().then((results) => {
                logger(results);
                resolve(results);
            }).catch((err) => {
                logger(err);
                reject(err);
            });

        });
    }

    public static addAppointmentType(_: any, data: any) {
        logger(`Adding Appointment Type`);
        logger(data);
        return new Promise((resolve, reject) => {
            AppointmentTypeModel.create(data.apptType).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "create",
                    stateName: "appointmentType",
                    data: data.apptType,
                    user: "-1",
                }
                SocketManager.getInstance().sendDataMessage(message);

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
            AppointmentTypeModel.replaceOne({_id: data.apptType._id}, data.apptType).then((value) => {
                logger(value);
                const message: DataMessage = {
                    type: "update",
                    stateName: "appointmentType",
                    data: data.apptType,
                    user: "-1"
                }
                SocketManager.getInstance().sendDataMessage(message);

                if (value.modifiedCount === 0) {
                    const objId = new ObjectId(data.apptType._id);
                    data.apptType._id = objId;
                    MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: objId}, data.apptType)
                }
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
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id: data.id}).then((result: DeleteResult) => {
                // @ts-ignore
                const message: DataMessage = {
                    type: "delete",
                    stateName: "appointmentType",
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
