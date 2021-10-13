import debug from "debug";
import {UserModel} from "../model/User";


const logger = debug('data-source-users-mongoose');

export default class UsersMongooseQLDelegate {
    private constructor() {
    }

    public static getUsers() {
        logger('Getting users');

        return new Promise((resolve, reject) => {
            UserModel.find().then((results) => {
                resolve(results);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
    });
    }



}
