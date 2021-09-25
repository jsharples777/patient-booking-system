
import debug from 'debug';
import fs from 'fs';
import {ApolloServer} from 'apollo-server-express';
import {Express} from 'express';
import ExampleQLDelegate from "./ExampleQLDelegate";

const dsLogger = debug('data-source');


export default class DataSource {
    protected apolloServer: ApolloServer;



    constructor(serverApp:Express) {

        let resolvers = {
            Query: {
                getExerciseTypes:ExampleQLDelegate.getExerciseTypes
            },
            Mutation: {
                addExerciseType:ExampleQLDelegate.addExerciseType,
                updateExerciseType:ExampleQLDelegate.updateExerciseType,
                deleteExerciseType:ExampleQLDelegate.deleteExerciseType
            }
        };

        // @ts-ignore
        const typeDefBuffer:Buffer = fs.readFileSync(process.env.QL_SCHEMA, "utf-8");
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

