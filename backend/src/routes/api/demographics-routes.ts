import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import {Document} from "mongodb";
const router = express.Router();


router.get("/:id",function(req,res) {
    console.log(`Starting route GET /demographics by id ${req.params.id}`);
    const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

    let projection = {
        projection: {
            _id: 1,
            lastSeen: 1,
            lastSeenBy: 1,
            dob: 1,
            dod: 1,
            gender:1,
            ethnicity: 1,
            countryofbirth: 1,
            created: 1,
            modified: 1,
            identifiers: 1,
            name: 1,
            flags: 1,
            warnings: 1,
            contact:1
        }
    };
    MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id:req.params.id}, projection).then((result: Document|null) => {
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





export = router;
