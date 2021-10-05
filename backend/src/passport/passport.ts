import bCrypt from 'bcrypt-nodejs';
import socketManager from '../socket/SocketManager';
import {Request} from "express";
import debug from 'debug';
import {MongoDataSource} from "../db/MongoDataSource";
import {Db, Document} from "mongodb";
import {v4} from "uuid";

const logger = debug('my-passport');


// @ts-ignore
export function setupPassport(passport: any) {
    const LocalStrategy = require('passport-local').Strategy;


    // Register strategy
    passport.use('local-register', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req: Request, username: string, password: string, done: any) {
            const generateHash = function (password: string): string {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8));
            };
            const db: Db = MongoDataSource.getInstance().getDatabase();
            const collection = process.env.DB_COLLECTION_USERS || 'pms-users';
            const projection = {
                projection: {
                    _id: 1,
                    username: 1,
                    password: 1,
                    providerNo: 1,
                    isCurrent: 1,
                    isAdmin: 1
                }
            };

            db.collection(collection).findOne({username: username}, projection).then((user: Document | null) => {
                logger(user);
                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    const userPassword = generateHash(password);
                    const data =
                        {
                            _id: v4(),
                            username: username,
                            password: userPassword,
                            providerNo: '',
                            isCurrent: true,
                            isAdmin: false
                        } as Document;

                    db.collection(collection).insertOne(data).then((newUser) => {
                        db.collection(collection).findOne({_id: newUser.insertedId}).then((userDetails) => {
                            // @ts-ignore
                            let message = {type: "create", stateName: "users", data: userDetails, user: userDetails._id}
                            socketManager.sendDataMessage(message);
                            if (!userDetails) {
                                return done(null, false);
                            }
                            if (userDetails) {
                                return done(null, userDetails);
                            }
                        });
                    });
                }
            });
        }
    ));


    // Login strategy
    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req: Request, username: string, password: string, done: any) {

            const isValidPassword = function (hashedPassword: string, password: string): boolean {
                return bCrypt.compareSync(password, hashedPassword);
            }

            const db: Db = MongoDataSource.getInstance().getDatabase();
            const collection = process.env.DB_COLLECTION_USERS || 'pms-users';
            const projection = {
                projection: {
                    _id: 1,
                    username: 1,
                    password: 1,
                    providerNo: 1,
                    isCurrent: 1,
                    isAdmin: 1
                }
            };


            db.collection(collection).findOne({username: username, isCurrent:true}, projection).then((user: Document | null) => {
                logger(user);
                if (!user) {
                    return done(null, false, {
                        message: 'Username and/or password is incorrect'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Username and/or password is incorrect'
                    });
                }
                return done(null, user);
            }).catch(function (err: Error) {
                return done(err);
            });
        }
    ));

    //serialize
    passport.serializeUser(function (user: any, done: any) {
        done(null, user._id);
    });


    // deserialize user
    passport.deserializeUser(function (id: string, done: any) {
        const db: Db = MongoDataSource.getInstance().getDatabase();
        const collection = process.env.DB_COLLECTION_ACCOUNTS || 'pms-users';
        const projection = {
            projection: {
                _id: 1,
                username: 1,
                password: 1,
                providerNo: 1,
                isCurrent: 1,
                isAdmin: 1
            }
        };
        db.collection(collection).findOne({_id:id},projection).then((user) => {
            if (user) {
                done(null, user);
            } else {
                // @ts-ignore
                done("User not found", null);
            }

        });
    });
}

