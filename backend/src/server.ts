// Configuration and Logging handlers
/* eslint-disable import/first */
//@ts-ignore
import {MongoDataSource} from "./db/MongoDataSource";

//require('dotenv').config();
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import debug from 'debug';


// HTTP handlers
import http from 'http';
import path from 'path';

// Express framework and additional middleware
import express from 'express';
import Handlebars from 'handlebars';
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access';
import expressHandlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import connectFlash from 'connect-flash';
import compression from 'compression';

// Sockets


// Authentication middleware
import passport from 'passport';


// WebRTC
import {ExpressPeerServer} from 'peer';
// routes
import routes from './routes';
import apiRoutes from './routes/api';
import DataSource from "./graphql/DataSource";
import {setupPassport} from "./passport/passport";
import {SocketManager} from "server-socket-framework-jps";
import {MongooseDataSource} from "./db/MongooseDataSource";
//dotenv.config({ path: __dirname+'/.env' });
dotenv.config();


const serverDebug = debug('server');

const isDevelopment = (process.env.MODE === 'Development');
const enableSockets = ((process.env.ENABLE_SOCKETS === 'Y') || true);
const enablePeer = ((process.env.ENABLE_PEER === 'Y') || true);


if (isDevelopment) {
    debug.enable('data-source-appointment-types-mongoose data-source-appointment-types my-passport data-source-appointments data-source-patients mongoose-ds server db api route socket mongo-data-source my-passport data-source-appointment-templates data-source-appointment-types');
} else {
    debug.enable('server api route');
}


serverDebug(`Is development mode ${isDevelopment}`);


// Create and configure the express app
const app = express();

// Express view/template engine setup
serverDebug('setting up templating engine');
let relPath = (isDevelopment) ? process.env.VIEW_RELATIVE_PATH_DEV : process.env.VIEW_RELATIVE_PATH;
serverDebug(`Base directory is: ${__dirname}`);
serverDebug(`Relative path is: ${relPath}`);
serverDebug(`${__dirname}${relPath}views`);
app.set('views', `${__dirname}${relPath}views`);
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'default',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

serverDebug('setting up templating engine - handlebars');
app.set('view engine', 'handlebars');
app.set('view cache', !isDevelopment); // view caching in production

// Express middlewares
app.use(compression()); // add compression support
app.use('/', express.static('./public')); // root directory of static content
app.use('/dist', express.static('./dist')); // root directory of static content
app.use(cookieParser()); // add cookie support
app.use(bodyParser.json({ limit: '50mb' })); // add POST JSON support
app.use(bodyParser.urlencoded({limit: '50mb',extended: true})); // and POST URL Encoded form support



app.use(session({
    secret: 'frankie',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
    proxy: true,
}));


app.use(connectFlash()); // flash messages
app.use(passport.initialize()); // initialise the authentication
app.use(passport.session()); // setup authentication to use cookie/sessions


/* Are we in Development or in Production? */
serverDebug('Setting up server side logging with Morgan');
if (isDevelopment) {
    app.use(morgan('dev')); /* log server calls with performance timing with development details */

    /* log call requests with body */
    app.use((request, response, next) => {
        serverDebug(`Received ${request.method} request for ${request.url} with/without body`);
        if (request.body) {
            if (process.env.SHOW_BODY) console.log(request.body);
        }
        next();
    });
} else {
    app.use(morgan('combined')); /* log server calls per standard combined Apache combined format */
}

// ensure the user is logged in with a path

serverDebug('Installing routes');
MongoDataSource.getInstance();
MongooseDataSource.getInstance();

app.use('/', routes);// add the middleware path routing

app.use('/api', apiRoutes);

// setup the QL server
serverDebug('Setting up Graph QL');
new DataSource(app);

// Setup authentication
serverDebug('Setting up User model and authentication with Passport');
setupPassport(passport);

// route for the env.js file being served to the client
serverDebug('Setting the environment variables for the browser to access');
const port = process.env.PORT || 3000;
const API_SERVER_URL = process.env.API_SERVER_URL || '';
let env: any = {serverURL: API_SERVER_URL};

app.get('/js/env.js', (req, res) => {
    let session = req.session;
    if (session.id) {
        env.sessionId = session.id;
    }
    if (req.user) {
        env.user = req.user;
    }
    res.send(`window.ENV = ${JSON.stringify(env)}`);
});

// construct the web server
serverDebug('Create HTTP Server');
//const httpServer = new https.Server({key: key, cert: cert },app);
const httpServer = new http.Server(app);

if (enableSockets) {
    // setup the sockets manager with the server
    serverDebug('Setting up Socket manager');
    SocketManager.getInstance().connectToServer(httpServer);

    // setup the WebRTC peer server
    // @ts-ignore
    if (enablePeer) {
        serverDebug('Setting up Peer middleware');
        // @ts-ignore
        const peerServer = ExpressPeerServer(httpServer, {debug: 2, allow_discovery: true});
        app.use('/peerjs', peerServer);
    }
}

// catch 404 and forward to error handler
serverDebug('Setting up 404 handler');
app.use((req, res, next) => {
    serverDebug('404 forwarder');
    const err = new Error('Not Found');
    // @ts-ignore
    err.status = 404;
    next(err);
});

// error handler
if (isDevelopment) {
    serverDebug('Setting up DEV 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
        });
    });
} else {
    serverDebug('Production 500 handler');
    // @ts-ignore
    app.use((err, req, res, next) => {
        serverDebug(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
        });
    });
}

httpServer.listen(port, () => {
    serverDebug(`Server started on port ${port}`);
    // start listening for socket events
    if (enableSockets) SocketManager.getInstance().listen();
});

