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

    public static getPatientDemographics(_: any, data: any) {
        logger(`Getting patient demographics for id ${data.id}`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

            let projection = {
                projection: {
                    _id: 1,
                    lastSeen: 1,
                    lastSeenBy: 1,
                    dob: 1,
                    dod: 1,
                    gender:1,
                    ethnicity: 1,
                    countryofbirth: 1,
                    created: 1,
                    modified: 1,
                    identifiers: 1,
                    name: 1,
                    flags: 1,
                    warnings: 1,
                    contact:1
                }
            };
            MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id:data.id}, projection).then((result: Document|null) => {
                resolve(result);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });

    }


}
