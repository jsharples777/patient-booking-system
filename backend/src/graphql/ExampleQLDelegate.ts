import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {DeleteResult, Document} from "mongodb";
import {DataMessage} from "../socket/SocketTypes";
import socketManager from "../socket/SocketManager";

const logger = debug('data-source-example');

export default class ExampleQLDelegate {
    private constructor() {
    }

    public static functionWithNoParameters() {
        logger('Getting all somethings');

        return new Promise((resolve, reject) => {
            reject(new Error("Not implemented"));
        });

    }

    public static functionWithParams(_: any, data: any) {
        logger(`Doing something`);
        return new Promise((resolve, reject) => {
            /* the data object attributes will be the QL parameters */
            reject(new Error("not implemented"));
        });
    }

    public static getExerciseTypes() {
        logger('Getting all exercise types');

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_EXERCISE_TYPES || 'exercise-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).find().sort( { createdOn: 1 } ).toArray().then((results:Document[]) => {
                logger(results.length);
                resolve(results);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static addExerciseType(_: any, data: any) {
        logger(`Adding Exercise Type`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_EXERCISE_TYPES || 'exercise-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.exercise).then((value) => {
                logger(value);
                const message:DataMessage = {type:"create",stateName: "exerciseType",data:data.exercise, user:data.createdBy,}
                socketManager.sendDataMessage(message);

                resolve(data);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

    public static updateExerciseType(_: any, data: any) {
        logger(`Updating exercise type`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_EXERCISE_TYPES || 'exercise-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id:data.exercise._id},data.exercise).then((value) => {
                logger(value);
                const message:DataMessage = {type:"update",stateName: "exerciseType",data:data.exercise, user:data.createdBy,}
                socketManager.sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static deleteExerciseType(_: any, data: any) {
        logger(`Deleting item with identifier`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_EXERCISE_TYPES || 'exercise-types';
            MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id:data.id}).then((result:DeleteResult) => {
                // @ts-ignore
                const message:DataMessage = {type:"delete",stateName: "exerciseType",data:{ _id: data.id},user:"-1",}
                socketManager.sendDataMessage(message);
                logger(result);
                resolve(true);
            })
            .catch((err) => {
                logger(err);
                reject(err);
            });
        });
    }

}
/*
type Query {
    getExerciseTypes:[ExerciseType]
}

type Mutation {
    addExerciseType(exercise:ExerciseTypeInput):Boolean
    updateExerciseType(exercise:ExerciseTypeInput):Boolean
    deleteExerciseType(id:String):Boolean
}
 */