import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import debug from 'debug';
import {Document} from 'mongodb';

const router = express.Router();


const logger = debug('api-users');

// The `/api/users types` endpoint

router.get('/', (req, res) => {
    const collection = process.env.DB_COLLECTION_ACCOUNTS || 'accounts';
    const projection = {
        projection: {
            _id: 1,
            username: 1,
            isCurrent: 1,

        }
    };

    MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).toArray().then((results: Document[]) => {
        logger(results.length);
        res.json(results);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});


export = router;
