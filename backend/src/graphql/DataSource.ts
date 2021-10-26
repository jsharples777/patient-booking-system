import debug from 'debug';
import fs from 'fs';
import {ApolloServer} from 'apollo-server-express';
import {Express} from 'express';
import AppointmentsQLDelegate from "./AppointmentsQLDelegate";
import PatientsQLDelegate from "./PatientsQLDelegate";
import AppointmentTypesQLDelegate from "./AppointmentTypesQLDelegate";
import ProvidersQLDelegate from "./ProvidersQLDelegate";
import AppointmentTemplatesQLDelegate from "./AppointmentTemplatesQLDelegate";
import UsersQLDelegate from "./UsersQLDelegate";
import PostCodesQLDelegate from "./PostCodesQLDelegate";
import AppointmentTypesMongooseQLDelegate from "./AppointmentTypesMongooseQLDelegate";

const dsLogger = debug('data-source');


export default class DataSource {
    protected apolloServer: ApolloServer;


    constructor(serverApp: Express) {

        let resolvers = {
            Query: {
                getAppointments: AppointmentsQLDelegate.getAppointments,
                getPatientSearchDetails: PatientsQLDelegate.getPatientSearchDetails,
                getAppointmentTypes: AppointmentTypesQLDelegate.getAppointmentTypes,
                //getAppointmentTypes: AppointmentTypesMongooseQLDelegate.getAppointmentTypes,
                getProviders: ProvidersQLDelegate.getProviders,
                getAppointmentTemplates: AppointmentTemplatesQLDelegate.getAppointmentTemplates,
                getPatient: PatientsQLDelegate.getPatient,
                getUsers:UsersQLDelegate.getUsers,
                getPostCodes:PostCodesQLDelegate.getPostCodes
            },
            Mutation: {
                addAppointment: AppointmentsQLDelegate.addAppointment,
                updateAppointment: AppointmentsQLDelegate.updateAppointment,
                deleteAppointment: AppointmentsQLDelegate.deleteAppointment,
                addAppointmentType: AppointmentTypesQLDelegate.addAppointmentType,
                //addAppointmentType: AppointmentTypesMongooseQLDelegate.addAppointmentType,
                updateAppointmentType: AppointmentTypesQLDelegate.updateAppointmentType,
                //updateAppointmentType: AppointmentTypesMongooseQLDelegate.updateAppointmentType,
                deleteAppointmentType: AppointmentTypesQLDelegate.deleteAppointmentType,
                addProvider: ProvidersQLDelegate.addProvider,
                updateProvider: ProvidersQLDelegate.updateProvider,
                deleteProvider: ProvidersQLDelegate.deleteProvider,
                addAppointmentTemplate: AppointmentTemplatesQLDelegate.addAppointmentTemplate,
                updateAppointmentTemplate: AppointmentTemplatesQLDelegate.updateAppointmentTemplate,
                deleteAppointmentTemplate: AppointmentTemplatesQLDelegate.deleteAppointmentTemplate,
                addPatient: PatientsQLDelegate.addPatient,
                updatePatient: PatientsQLDelegate.updatePatient,
                addUser: UsersQLDelegate.addUser,
                updateUser: UsersQLDelegate.updateUser,
            }
        };

        // @ts-ignore
        const typeDefBuffer: Buffer = fs.readFileSync(process.env.QL_SCHEMA, "utf-8");
        dsLogger(typeDefBuffer);
        const isDevelopment = (process.env.MODE === 'Development');

        this.apolloServer = new ApolloServer({
            playground: isDevelopment,
            typeDefs: typeDefBuffer.toString(),
            resolvers: resolvers
        });
        this.apolloServer.applyMiddleware({app: serverApp, path: "/graphql"});

    }

}

