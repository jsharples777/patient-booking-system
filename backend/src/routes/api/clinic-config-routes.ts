import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import debug from 'debug';
import {Document} from 'mongodb';

const router = express.Router();


const logger = debug('api-clinic-config');

// The `/api/users types` endpoint

router.get('/', (req, res) => {
    const collection = process.env.DB_COLLECTION_CLINIC_CONFIG || 'clinic-config';

    MongoDataSource.getInstance().getDatabase().collection(collection).find({}).toArray().then((results: Document[]) => {
        logger(results.length);
        res.json(results);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});


export = router;
