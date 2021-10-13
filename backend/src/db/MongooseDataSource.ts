import debug from "debug";
import { Schema, model, connect } from 'mongoose';

const logger = debug('mongoose-ds');

export class MongooseDataSource  {
    private static _instance: MongooseDataSource;

    public static getInstance(): MongooseDataSource {
        if (!(MongooseDataSource._instance)) {
            MongooseDataSource._instance = new MongooseDataSource();
        }
        return MongooseDataSource._instance;
    }

    private connection:any;

    private constructor() {
        logger("Mongoose connecting");
        const initialise = async () => {
            const url = process.env.DB_URL || 'mongodb://localhost/default';
            // @ts-ignore
            this.connection = await connect(url);
            logger("Mongoose connected");
        }
        initialise();
    }

}

