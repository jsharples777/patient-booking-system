import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";

const logger = debug('data-source-post-codes');

export default class PostCodesQLDelegate {
    private constructor() {
    }

    public static getPostCodes() {
        logger('Getting post codes');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_POSTCODES || 'pms-post-codes';


            MongoDataSource.getInstance().getDatabase().collection(collection).find({}).toArray().then((results: Document[]) => {
                logger(results.length);
                resolve(results);
            }).catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }


}
