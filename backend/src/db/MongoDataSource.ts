import {Db, MongoClient} from 'mongodb';
import debug from 'debug';
import moment from "moment";

const logger = debug('mongo-data-source');

export class MongoDataSource {
    private static _instance: MongoDataSource;
    // @ts-ignore
    private client: MongoClient;
    // @ts-ignore
    private db: Db;

    private constructor() {
        const initialise = async () => {
            let url = process.env.DB_URL || 'mongodb://localhost/default';
            // @ts-ignore
            this.client = new MongoClient(url, {useUnifiedTopology: true});
            await this.client.connect();
            logger("Mongo DB connected");
            this.db = this.client.db();
        }
        initialise();
    }

    public static getInstance(): MongoDataSource {
        if (!MongoDataSource._instance) {
            MongoDataSource._instance = new MongoDataSource();
        }
        return MongoDataSource._instance;
    }

    async getNextId(name: string) {
        logger("Getting next id with name " + name);
        const collection = process.env.DB_COLLECTION_ITEM_IDS || 'identifier';
        const result = await this.db.collection(collection).findOneAndUpdate(
            {_id: name},
            {$inc: {current: 1}},
        );
        // @ts-ignore
        logger(result.value.current);
        // @ts-ignore
        return result.value.current;
    }

    async getPatientSearchDetails() {
        logger("MongoDS: Getting Patient Search Details");
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
        let results = await this.db.collection(process.env.DB_COLLECTION_PATIENTS || 'pms-patients').find({}, projection).sort({
            "name.surname": 1,
            "name.firstname": 1
        }).toArray();
        logger(results.length);
        return results;
    }

    async getPatientById(id: string) {
        logger(`MongoDS: Getting Patient by id ${id}`);
        let results = await this.db.collection(process.env.DB_COLLECTION_PATIENTS || 'pms-patients').findOne({_id: id});
        logger(results);
        return results;
    }

    async getAppointments() {
        logger(`MongoDS: Getting appointments`);
        let projection = {
            projection: {
                _id: 1,
                _patient: 1,
                start: 1,
                time: 1,
                duration: 1,
                createdBy: 1,
                isCancelled: 1,
                isDNA: 1,
                provider: 1,
                note: 1,
                type: 1
            }
        };
        const goBackThreeMonths = parseInt(moment().subtract(3, 'month').format('YYYYMMDD'));
        let results = await this.db.collection(process.env.DB_COLLECTION_APPOINTMENTS || 'pms-appts').find({start: {$gte: goBackThreeMonths}}, projection).sort({start: 1});
        logger(results);
        return results;

    }


    getDatabase() {
        return this.db;
    }

}
