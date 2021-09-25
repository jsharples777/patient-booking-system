import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
const router = express.Router();


router.get("/api/patients",function(req,res) {
    console.log("Starting route GET /patients");
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

router.get("/api/patient/:id",function(req,res) {
    console.log("Starting route GET /patient by legacy id");
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
