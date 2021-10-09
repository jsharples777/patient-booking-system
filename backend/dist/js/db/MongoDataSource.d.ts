import {Db} from 'mongodb';

export declare class MongoDataSource {
    private static _instance;
    private client;
    private db;

    private constructor();

    static getInstance(): MongoDataSource;

    getNextId(name: string): Promise<any>;

    getDatabase(): Db;
}
