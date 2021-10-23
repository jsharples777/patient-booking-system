import debug from "debug";
import {MongoDataSource} from "../db/MongoDataSource";
import {Document} from "mongodb";
import {DataMessage, SocketManager} from "server-socket-framework-jps";

const logger = debug('data-source-patients');

export default class PatientsQLDelegate {
    private constructor() {
    }

    public static getPatientSearchDetails() {
        logger('Getting patients for search purposes');
        const enableDemo = ((process.env.ENABLE_DEMO === 'Y') || true);
        if (enableDemo) logger(`DEMO MODE ACTIVATED`);

        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';

            let projection = {
                projection: {
                    _id: 1,
                    identifiers: {
                        legacyId: 1,
                    },
                    name: {
                        firstname: 1,
                        surname: 1,
                    },
                    flags: {
                        isInactive: 1,
                        hasWarnings: 1,
                    },
                    warnings: 1,
                    contact: 1,
                    lastSeen: 1,
                    lastSeenBy: 1,
                    dob: 1,
                    dod: 1,
                    gender: 1,
                    ethnicity: 1,
                    countryofbirth: 1
                }
            };
            MongoDataSource.getInstance().getDatabase().collection(collection).find({}, projection).sort({
                "name.surname": 1,
                "name.firstname": 1
            }).toArray().then((results: Document[]) => {
                logger(results.length);
                if (enableDemo) {
                    results.forEach((patientSearch) => {
                        PatientsQLDelegate.demoise(patientSearch);
                    })
                }
                resolve(results);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });

    }

    public static postMigrationProcessPatientThirdPass(patient: Document) {
        if (patient) {
            if (patient.isPostProcessed) {

                if (patient.dod) {
                    if (patient.dod === -1) {
                        delete patient.dod;
                        let collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
                        MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: patient._id}, patient).then((result) => {
                            logger(result);
                        }).catch((err) => {
                            logger(err);
                        });

                    }
                }


                logger(`Patient ${patient.name.firstname} ${patient.name.surname} undo post processed`);


                logger(`Checking for contact details`)
                if (patient.flags) {



                    if (patient.flags.isAccountHolder) {
                        logger(`Patient ${patient._id} is account holder, setting contact owner to this patient`);
                        // update the contact
                        let collection = process.env.DB_COLLECTION_CONTACTS || 'pms-contacts';
                        MongoDataSource.getInstance().getDatabase().collection(collection).updateOne({_id: patient.contact._id}, {$set: {owner: patient._id}}).then((result) => {
                            logger(result);
                        }).catch((err) => {
                            logger(err);
                        });
                    }
                }
            }
        }
    }

    public static postMigrationProcessPatientFirstPass(patient: Document) {
        // consolidate contacts
        if (patient) {
            if (!(patient.isPostProcessed)) {


                logger(`Patient ${patient.name.firstname} ${patient.name.surname} not yet post processed`);


                logger(`Checking for contact details`)
                if (patient.flags) {
                    if (patient.flags.isAccountHolder) {
                        patient.isPostProcessed = true;
                        logger(`Patient ${patient._id} is account holder, creating new contact`);
                        let newContact = {...patient.contact};
                        newContact.legacyAccountHolderId = patient.flags.legacyAccountHolderId;
                        // create the new contact
                        let collection = process.env.DB_COLLECTION_CONTACTS || 'pms-contacts';
                        MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(newContact).then((result) => {
                            logger(result);
                        }).catch((err) => {
                            logger(err);
                        });

                        logger(`Correcting pathology received dates`);
                        patient.results.forEach((pathology: any) => {
                            if (isNaN(pathology.received)) {
                                pathology.received = -1;
                            }

                        });
                        logger(`Updating patient`);
                        collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
                        MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: patient._id}, patient);
                    }
                }
            }
        }

    }

    public static postMigrationProcessPatientSecondPass(patient: Document) {
        // consolidate contacts
        if (patient) {
            logger(`Patient ${patient.name.firstname} ${patient.name.surname} not yet post processed`);


            logger(`Checking for contact details`)
            if (patient.flags) {
                if (!(patient.flags.isAccountHolder)) {
                    patient.isPostProcessed = true;
                    logger(`Patient ${patient._id} is not account holder, finding contact for legacy account holder ${patient.flags.legacyAccountHolderId}`);
                    // create the new contact
                    let collection = process.env.DB_COLLECTION_CONTACTS || 'pms-contacts';
                    MongoDataSource.getInstance().getDatabase().collection(collection).findOne({legacyAccountHolderId: patient.flags.legacyAccountHolderId}).then((result) => {
                        logger(result);
                        if (result) {
                            logger(`Found account holder contact, updating patient`);
                            result.contact._id = result._id;
                            result.contact.line1 = result.line1;
                            result.contact.line2 = result.line2;
                            result.contact.suburb = result.suburb;
                            result.contact.postcode = result.postcode;
                            result.contact.state = result.state;
                            result.contact.country = result.country;
                            result.contact.home = result.home;
                            result.contact.work = result.work;
                            result.contact.mobile = result.mobile;
                        }
                    }).catch((err) => {
                        logger(err);
                    });

                    logger(`Correcting pathology received dates`);
                    patient.results.forEach((pathology: any) => {
                        if (isNaN(pathology.received)) {
                            pathology.received = -1;
                        }

                    });
                    logger(`Updating patient`);
                    collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
                    MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: patient._id}, patient);
                }
            }

        }

    }


    public static async postProcessAll() {
        const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
        let cursor = MongoDataSource.getInstance().getDatabase().collection(collection).find({});
        while (await cursor.hasNext()) {
            let patient = await cursor.next();
            if (patient) PatientsQLDelegate.postMigrationProcessPatientFirstPass(patient);
        }
        cursor = MongoDataSource.getInstance().getDatabase().collection(collection).find({});
        while (await cursor.hasNext()) {
            let patient = await cursor.next();
            if (patient) PatientsQLDelegate.postMigrationProcessPatientSecondPass(patient);
        }
        cursor = MongoDataSource.getInstance().getDatabase().collection(collection).find({});
        while (await cursor.hasNext()) {
            let patient = await cursor.next();
            if (patient) PatientsQLDelegate.postMigrationProcessPatientThirdPass(patient);
        }
    }

    public static async getPatientContact(contactId: string) {
        const collection = process.env.DB_COLLECTION_CONTACTS || 'pms-contacts';
        const contact = await MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id: contactId});
        return contact;
    }

    public static demoise(patient: Document) {
        const enableDemo = ((process.env.ENABLE_DEMO === 'Y') || false);
        if (enableDemo && patient) {
            logger(`DEMO MODE ACTIVATED`);
            patient.name.firstname = patient.name.firstname.substr(0, 2) + 'xxxxxx';
            patient.name.surname = patient.name.surname.substr(0, 2) + 'xxxxxx';
            if (patient.contact) {
                patient.contact.line1 = '1 Demo Street';
                patient.contact.line2 = '';
                patient.contact.home = '00 0000 0000';
                patient.contact.work = '00 0000 0000';
                patient.contact.mobile = '0000 0000 0000';
                patient.contact.nokname = 'NOK';
                patient.contact.nokphone = '00 0000 0000';
            }
            if (patient.identifiers) {
                patient.identifiers.medicare = 0;
                patient.identifiers.dva = '';
                patient.identifiers.hcc = '';
                patient.identifiers.ihi = 0;
            }
            patient.isDemoOnly = true;
        }

    }

    public static getPatient(_: any, data: any) {
        logger(`Getting patient demographics for id ${data.id}`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id: data.id}).then((result: Document | null) => {
                logger(result);
                if (result) {
                    logger(`Getting contact for patient with contact id ${result.contact._id}`);
                    result.contact = PatientsQLDelegate.getPatientContact(result.contact._id);
                }
                if (result) PatientsQLDelegate.demoise(result);
                logger(result);

                resolve(result);
            }).catch((err) => {
                logger(err);
                reject(err);
            });
        });

    }

    public static addPatient(_: any, data: any) {
        logger(`Adding Patient`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(data.patient).then((value) => {
                logger(value);
                const message: DataMessage = {type: "create", stateName: "patient", data: data.patient, user: "-1",}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(data);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }

    public static updatePatient(_: any, data: any) {
        logger(`Updating Patient`);
        logger(data);
        return new Promise((resolve, reject) => {
            const collection = process.env.DB_COLLECTION_PATIENTS || 'pms-patients';
            MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: data.patient._id}, data.patient).then((value) => {
                logger(value);
                const message: DataMessage = {type: "update", stateName: "patient", data: data.patient, user: "-1"}
                SocketManager.getInstance().sendDataMessage(message);

                resolve(true);
            })
                .catch((err) => {
                    logger(err);
                    reject(err);
                });
        });
    }


}
