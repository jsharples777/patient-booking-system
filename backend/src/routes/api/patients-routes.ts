import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import {Document} from "mongodb";
import debug from "debug";
import PatientsQLDelegate from "../../graphql/PatientsQLDelegate";
import {SocketManager} from "server-socket-framework-jps";

const router = express.Router();

const logger = debug('route-patients');


router.get("/", function (req, res) {
    logger("Starting route GET /patients");
    try {
        MongoDataSource.getInstance().getPatientSearchDetails().then((jsonData) => {
            res.json(jsonData);
            res.end();
        });
    } catch (err) {
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});

router.get("/:id", function (req, res) {
    logger(`Starting route GET /patient by id ${req.params.id}`);
    const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

    MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id: req.params.id}).then((result: Document | null) => {
        logger(result);
        if (result) {
            PatientsQLDelegate.getPatientContact(result.contact._id).then((contact) => {
                result.contact = contact;
                PatientsQLDelegate.demoise(result);
                res.json(result);
                res.end();
            });
        }
        else {
            res.json(result);
            res.end();
        }


    })
        .catch((err) => {
            res.render('error', {
                message: err.message,
                error: err
            });
        });
});

router.put('/', (req, res) => {
    logger(`Starting route PUT /patient by id ${req.body._id}`);
    const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
    MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id:req.body._id},req.body).then((result) => {
        // @ts-ignore
        //const message:DataMessage = {type:"update",stateName: "patient",data:req.body, user:req.body.modifiedBy}
        //SocketManager.getInstance().sendDataMessage(message);
        res.json(req.body);
    }).catch((err) => {
        logger(err);
        res.status(400).json(err);
    });
});



export = router;
