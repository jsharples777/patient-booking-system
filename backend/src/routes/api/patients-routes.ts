import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import {Document} from "mongodb";
import debug from "debug";

const router = express.Router();

const logger = debug('route-patients');


router.get("/",function(req,res) {
    logger("Starting route GET /patients");
    try {
        MongoDataSource.getInstance().getPatientSearchDetails().then((jsonData) => {
            res.json(jsonData);
            res.end();
        });
    }
    catch (err) {
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});

router.get("/:id",function(req,res) {
    logger(`Starting route GET /patient by id ${req.params.id}`);
    const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

    MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id:req.params.id}).then((result: Document|null) => {
        logger(result);
        if (result) {
            result.results.forEach((pathology:any) => {
                if (isNaN(pathology.received)) {
                    pathology.received = -1;
                }

            });
        }
        res.json(result);
        res.end();
    })
        .catch((err) => {
            res.render('error', {
                message: err.message,
                error: err
            });
        });
});


router.get("/:id",function(req,res) {
    logger("Starting route GET /patient by legacy id");
    try {
        MongoDataSource.getInstance().getPatientById(req.params.id).then((jsonData) => {
            res.json(jsonData);
            res.end();
        });
    }
    catch (err) {
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});



export = router;
