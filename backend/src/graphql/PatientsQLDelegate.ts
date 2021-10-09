import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {Document} from "mongodb";
import {DataMessage} from "../socket/SocketTypes";
import socketManager from "../socket/SocketManager";

const logger = debug('data-source-patients');

export default class PatientsQLDelegate {
    private constructor() {
    }

    public static getPatientSearchDetails() {
        logger('Getting patients for search purposes');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

            let projection = {
                projection: {
                    _id: 1,
                    identifiers: {
                        legacyId: 1,
                    },
                    name: {
                        firstname: 1,
                        surname: 1,
                    },
                    flags: {
                        isInactive: 1,
                        hasWarnings: 1,
                    },
                    warnings: 1
                }
            };
            MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).sort({
                "name.surname": 1,
                "name.firstname": 1
            }).toArray().then((results: Document[]) => {
                logger(results.length);
                resolve(results);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });

    }

    public static getPatient(_: any, data: any) {
        logger(`Getting patient demographics for id ${data.id}`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id: data.id}).then((result: Document | null) => {
                logger(result);
                if (result) {
                    result.results.forEach((pathology: any) => {
                        if (isNaN(pathology.received)) {
                            pathology.received = -1;
                        }

                    });
                }
                resolve(result);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });

    }

    public static addPatient(_: any, data: any) {
        logger(`Adding Patient`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.patient).then((value) => {
                logger(value);
                const message: DataMessage = {type: "create", stateName: "patient", data: data.patient, user: "-1",}
                socketManager.sendDataMessage(message);

                resolve(data);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static updatePatient(_: any, data: any) {
        logger(`Updating Patient`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.patient._id}, data.patient).then((value) => {
                logger(value);
                const message: DataMessage = {type: "update", stateName: "patient", data: data.patient, user: "-1"}
                socketManager.sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }


}
