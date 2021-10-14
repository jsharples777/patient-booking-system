import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";

const logger = debug('data-source-providers');

export default class ProvidersQLDelegate {
    private constructor() {
    }

    public static getProviders() {
        logger('Getting providers');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PROVIDERS || 'pms-users';

            const agg = [
                {
                    '$match': {
                        'isCurrent': true,
                        'providerNo': {
                            '$exists': '',
                        }
                    }
                }, {
                    '$project': {
                        '_id': 1,
                        'name': '$username',
                        'providerNo': 1,
                        'isCurrent': 1
                    }
                }
            ];


            MongoDataSource.getInstance().getDatabase().collection(collection).aggregate(agg).toArray().then((results: Document[]) => {
                logger(results.length);
                resolve(results);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static addProvider(_: any, data: any) {
        logger(`Adding Provider`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PROVIDERS || 'pms-users';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.provider).then((value) => {
                logger(value);
                const message: DataMessage = {type: "create", stateName: "provider", data: data.provider, user: "-1",}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(data);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static updateProvider(_: any, data: any) {
        logger(`Updating provider`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PROVIDERS || 'pms-users';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.provider._id}, data.provider).then((value) => {
                logger(value);
                const message: DataMessage = {type: "update", stateName: "provider", data: data.provider, user: "-1"}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static deleteProvider(_: any, data: any) {
        logger(`Deleting provider with identifier`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PROVIDERS || 'pms-users';
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id: data.id}).then((result: DeleteResult) => {
                // @ts-ignore
                const message: DataMessage = {type: "delete", stateName: "provider", data: {_id: data.id}, user: "-1",}
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
