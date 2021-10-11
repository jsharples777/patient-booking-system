import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";

const logger = debug('data-source-users');

export default class UsersQLDelegate {
    private constructor() {
    }

    public static getUsers() {
        logger('Getting users');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_USERS || 'pms-users';

            const projection = {
                projection: {
                    _id: 1,
                    username: 1,
                    isCurrent: 1,
                    providerNo:1,
                    isAdmin:1

                }
            };

            MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).toArray().then((results: Document[]) => {
                resolve(results);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static addUser(_: any, data: any) {
        logger(`Adding User`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_USERS || 'pms-users';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.user).then((value) => {
                logger(value);
                const message: DataMessage = {type: "create", stateName: "user", data: data.user, user: "-1",}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(data);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static updateUser(_: any, data: any) {
        logger(`Updating user`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_USERS || 'pms-users';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.user._id}, data.user).then((value) => {
                logger(value);
                const message: DataMessage = {type: "update", stateName: "user", data: data.user, user: "-1"}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(true);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }


}
