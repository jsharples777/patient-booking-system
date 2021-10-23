import express from 'express';
import passport from 'passport';
import debug from 'debug';
import {ensureAuthenticated} from "./auth";
import {MongoDataSource} from "../db/MongoDataSource";
import PatientsQLDelegate from "../graphql/PatientsQLDelegate";
import {v4} from "uuid";
import {Document} from "mongodb";

const router = express.Router();

const routeDebug = debug('route');


/* GET home page. */
router.get('/', ensureAuthenticated, (req, res, next) => {
    routeDebug(req.user);
    res.render('index', {user: req.user});
});

router.get('/register', (req, res) => {
    res.render('register', {layout: "login-register", user: req.user, error: req.flash()["error"]});
});

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
}));

router.get('/change-password', (req, res) => {
    res.render('change-password', {layout: "login-register", user: req.user, error: req.flash()["error"]});
});

router.post('/change-password', passport.authenticate('local-change-password', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/login', (req, res) => {
    res.render('login', {layout: "login-register", user: req.user, error: req.flash()["error"]});
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send('pong!');
});


router.get('/test', (req, res) => {
    console.log(`url: ${req.url}`);
    res.send('Hello World');
});

router.get('/postprocess', (req, res) => {
    console.log(`url: ${req.url}`);
    PatientsQLDelegate.postProcessAll().then(() => {
        res.send('Completed');

    });
});

router.get('/postprocesspostcodes', (req, res) => {
    console.log(`url: ${req.url}`);
    const collection = process.env.DB_COLLECTION_POSTCODES || 'pms-post-codes';

    MongoDataSource.getInstance().getDatabase().collection(collection).find({}).toArray().then((results) => {
        results.forEach((result) => {
            let postCode = {
                _id:v4(),
                suburb:result.suburb[0],
                postcode:parseInt(result.postcode[0]),
                state:result.state[0]
            } as Document;
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(postCode);
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne(result);
        });
        res.send('Completed');

    });

});


export = router;
