import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage} from "../socket/SocketTypes";
import socketManager from "../socket/SocketManager";
import moment from "moment";

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
            MongoDataSource.getInstance().getDatabase().collection(process.env.DB_COLLECTION_PATIENTS || 'pms-patients').find({}, projection).sort({
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


}
