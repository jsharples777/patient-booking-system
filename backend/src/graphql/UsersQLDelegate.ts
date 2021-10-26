import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";
import {generateHash} from "../Utils";

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
                    isAdmin:1,
                    isProvider: {
                        $cond: {
                            if: { $ne: ["$providerNo",""]},
                            then: true,
                            else: false
                        }
                    }

                }
            };

            MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).toArray().then((results: Document[]) => {
                results.forEach((result) => {
                    let isProvider = false;
                    if (result.providerNo) {
                        if (result.providerNo.trim().length > 0) {
                            isProvider = true;
                        }
                    }
                    result.isProvider = isProvider;
                    result.resetPassword = false;
                    result.password = ''
                });
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
            data.user.password = generateHash(data.user.password);
            delete data.user.isProvider;
            delete data.user.resetPassword;

            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.user).then((value) => {
                logger(value);
                let isProvider = false;
                if (data.user.providerNo) {
                    if (data.user.providerNo.trim().length > 0) {
                        isProvider = true;
                    }
                }
                data.user.isProvider = isProvider;
                data.user.resetPassword = false;
                data.user.password = ''
                const message: DataMessage = {type: "create", stateName: "user", data: data.user, user: "-1",}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(data.user);
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
            if (data.user.resetPassword && data.user.password.trim().length > 0) {
                data.user.password = generateHash(data.user.password);
                MongoDataSource.getInstance().getDatabase().collection(collection).findOneAndUpdate({_id: data.user._id},{
                    $set: {
                        isAdmin: data.user.isAdmin,
                        isCurrent: data.user.isCurrent,
                        providerNo: data.user.providerNo,
                        password: data.user.password
                    }
                }).then((value) => {
                    logger(value);
                    data.user.password = '';
                    data.user.resetPassword = false;
                    let isProvider = false;
                    if (data.user.providerNo) {
                        if (data.user.providerNo.trim().length > 0) {
                            isProvider = true;
                        }
                    }
                    data.user.isProvider = isProvider;

                    const message: DataMessage = {type: "update", stateName: "user", data: data.user, user: "-1"}
                    SocketManager.getInstance().sendDataMessage(message);

                    resolve(true);
                })
                    .catch((err) => {
                        logger(err);
                        reject(err);
                    });
            }
            else {
                MongoDataSource.getInstance().getDatabase().collection(collection).findOneAndUpdate({_id: data.user._id},{
                    $set: {
                        isAdmin: data.user.isAdmin,
                        isCurrent: data.user.isCurrent,
                        providerNo: data.user.providerNo
                    }
                }).then((value) => {
                    logger(value);
                    data.user.password = '';
                    data.user.resetPassword = false;
                    let isProvider = false;
                    if (data.user.providerNo) {
                        if (data.user.providerNo.trim().length > 0) {
                            isProvider = true;
                        }
                    }
                    data.user.isProvider = isProvider;
                    const message: DataMessage = {type: "update", stateName: "user", data: data.user, user: "-1"}
                    SocketManager.getInstance().sendDataMessage(message);

                    resolve(true);
                })
                    .catch((err) => {
                        logger(err);
                        reject(err);
                    });

            }
        });
    }


}
