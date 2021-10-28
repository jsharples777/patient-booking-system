import express from 'express';
import debug from "debug";
import PatientsQLDelegate from "../../graphql/PatientsQLDelegate";
import {authenticateToken} from "../jwt";

const router = express.Router();

const logger = debug('route-patient-search');


router.get("/", authenticateToken,function (req, res) {
    logger("Starting route GET /patients for search");
    try {
        PatientsQLDelegate.getPatientSearchDetails().then((patients) => {
            res.json(patients);
            res.end();
        });
    } catch (err) {
        res.render('error', {
            message: err.message,
            error: err
        });
    }
});



export = router;
