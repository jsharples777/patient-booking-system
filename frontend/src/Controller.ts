import debug from 'debug';
import SocketListenerDelegate from "./SocketListenerDelegate";
import {API_Config, STATE_NAMES} from "./AppTypes";
import {v4} from "uuid";
import {
    AggregateStateManager,
    AsyncStateManagerWrapper,
    BasicObjectDefinitionFactory,
    ChatManager,
    DataObjectController,
    DataObjectDefinition,
    DataObjectListener,
    DerivedField,
    DownloadManager,
    FieldDefinition,
    FieldType,
    FieldValueGenerator,
    GraphQLApiStateManager,
    isSameMongo,
    MemoryBufferStateManager,
    NotificationController,
    ObjectDefinitionRegistry,
    RESTApiStateManager,
    SocketManager,
    StateChangeListener,
    StateManager
} from "ui-framework-jps";


const cLogger = debug('controller-ts');
const cLoggerDetail = debug('controller-ts-detail');

class DefaultUserValueGenerator implements FieldValueGenerator {
    generate(field: FieldDefinition, isCreate: boolean): string {
        let result = '';
        if (isCreate) {
            switch (field.id) {
                case 'isCurrent': {
                    result = 'true';
                    break;
                }
                case 'resetPassword': {
                    result = 'true';
                    break;
                }
                case 'password': {
                    result = 'password';
                    break;
                }
            }

        }

        return result;
    }

}

export default class Controller implements StateChangeListener, DataObjectListener {


    private static patientQuery: string = 'query getPatient($identifier: String!){\n' +
        '  getPatient(id: $identifier) {\n' +
        '    _id,\n' +
        '    lastSeen,\n' +
        '    lastSeenBy,\n' +
        '    dob,\n' +
        '    dod,\n' +
        '    gender,\n' +
        '    ethnicity,\n' +
        '    countryofbirth,\n' +
        '    created,\n' +
        '    modified,\n' +
        '    name{\n' +
        '      _id,\n' +
        '    \ttitle,\n' +
        '    \tfirstname,\n' +
        '    \tmiddlename,\n' +
        '    \tsurname,\n' +
        '    \taka\n' +
        '  \t},\n' +
        '    contact{\n' +
        '    \t_id,\n' +
        '    \tline1,\n' +
        '    \tline2,\n' +
        '    \tsuburb,\n' +
        '    \tpostcode,\n' +
        '    \tstate,\n' +
        '    \tcountry,\n' +
        '    \thome,\n' +
        '    \twork,\n' +
        '    \tmobile,\n' +
        '    \tnokname,\n' +
        '    \tnokphone\n' +
        '    },\n' +
        '    identifiers {\n' +
        '      _id,\n' +
        '    \tmedicare,\n' +
        '    \tmedicareRef,\n' +
        '    \tlegacyId,\n' +
        '   \t \tdva,\n' +
        '   \t \tdvaColour,\n' +
        '    \thcc,\n' +
        '    \tihi\n' +
        '    },\n' +
        '    flags {\n' +
        '      _id,\n' +
        '    \tisAcountHolder,\n' +
        '    \tlegacyAccountHolderId,\n' +
        '    \tisDeceased,\n' +
        '    \tisInactive,\n' +
        '    \tshouldSMS,\n' +
        '    \tisMarried,\n' +
        '    \tisCTGRegistered,\n' +
        '    \thasWarnings\n' +
        '    },\n' +
        '    warnings {\n' +
        '      _id, warnings\n' +
        '    },\n' +
        '    allergies {\n' +
        '      _id,\n' +
        '    \tname,\n' +
        '    \treaction,\n' +
        '    \tcreated,\n' +
        '    \tmodified\n' +
        '    },\n' +
        '    consults {\n' +
        '      _id, date, time, doctor, history, diagnosis, plan, findings, created, modified\n' +
        '    },\n' +
        '    history {\n' +
        '      _id, diagnosis, note, isConfidential, date, created, modified\n' +
        '    },\n' +
        '    results {\n' +
        '      _id, lab, labref, test, orderedBy, copies, requested, collected, reported, collectedTime, imported, received, result, isLinked, reviewedBy, isNormal, isLast\n' +
        '    },\n' +
        '    scripts {\n' +
        '      _id, by, name, on, dose, frequency, instructions, repeats, quantity, drugCode, lastPrinted, created, modified\n' +
        '    },\n' +
        '    scriptHistory {\n' +
        '      _id, changed, dose, change, reason, drugCode, name\n' +
        '    },\n' +
        '    scriptArchive {\n' +
        '      _id, medication, dose, scriptNumber, repeats, quantity, approvalCode, drugCode, note, created, modified\n' +
        '    },\n' +
        '    recalls{\n' +
        '      _id, reason, interval, isRecurring, due, isCompleted, created, modified\n' +
        '    },\n' +
        '    tasks {\n' +
        '      _id, by, isUrgent, isCompleted, isRead, title, details, completed, for, created, modified\n' +
        '    },\n' +
        '    documents {\n' +
        '      _id, title, type, from, reviewed, reviewedBy, data, created, modified\n' +
        '    },\n' +
        '    letters {\n' +
        '      _id, creator, isPrinted, isReviewd, from, type, data, to, created, modified\n' +
        '    },\n' +
        '    vaccinations {\n' +
        '      _id, vaccine, on, by, providerNum, batch, expiry, site, shouldSendtoAIR, airCode, created\n' +
        '    },\n' +
        '    forms {\n' +
        '      _id, title, from, category, data, created, modified\n' +
        '    },\n' +
        '    wcc {\n' +
        '      _id,\n' +
        '      employer {\n' +
        '        name, \n' +
        '        contact {\n' +
        '          line1, line2, suburb, state, postCode\n' +
        '        },\n' +
        '        insurer\n' +
        '      },\n' +
        '      claim {\n' +
        '        number, injury, injuryTime, injuryDate, claimDate, mechanism\n' +
        '      },\n' +
        '      date,time,reviewed, type, diagnosis, comment, treatment, isReturnToNormalDuties, returnToNormalDuties, isRestrictedDuties, restrictedDutiesFrom, restrictedDutiesTo, isNoCapacity, noCapacityFrom, noCapacityTo\n' +
        '    },\n' +
        '    modifiedDates {\n' +
        '      identifiers, warnings, allergies, consults, history, results, scripts, recalls, documents,letters,vaccinations\n' +
        '    }\n' +
        '  }\n' +
        '}'


    private static _instance: Controller;
    protected applicationView: any;
    protected clientSideStorage: any;
    protected config: any;
    // @ts-ignore
    protected stateManager: StateManager;

    private constructor() {
    }

    public static getInstance(): Controller {
        if (!(Controller._instance)) {
            Controller._instance = new Controller();
        }
        return Controller._instance;
    }

    connectToApplication(applicationView: any, clientSideStorage: any) {
        this.applicationView = applicationView;
        this.clientSideStorage = clientSideStorage;
        // setup the API calls
        let restSM = RESTApiStateManager.getInstance();
        restSM.initialise([
            {
                stateName: STATE_NAMES.clinicConfig,
                serverURL: '',
                api: API_Config.clinicConfig,
                isActive: true,
                find: false,
                findAll: true,
                create: true,
                update: true,
                destroy: true
            },
            {
                stateName: STATE_NAMES.patients,
                serverURL: '',
                api: API_Config.patients,
                isActive: true,
                idField: '_id',
                find: true,
                findAll: true,
                create: true,
                update: true,
                destroy: true
            },
        ]);
        let qlSM = GraphQLApiStateManager.getInstance();
        qlSM.initialise([
            {
                stateName: STATE_NAMES.patientSearch,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getPatientSearchDetails {_id,isDemoOnly,identifiers { legacyId},flags {isInactive,hasWarnings},name {firstname,surname}, warnings {_id, warnings}, contact {    _id,\n' +
                        '    line1,\n' +
                        '    line2,\n' +
                        '    suburb\n' +
                        '    postcode,\n' +
                        '    state,\n' +
                        '    country,\n' +
                        '    home,\n' +
                        '    work,\n' +
                        '    mobile,\n' +
                        '    nokname,\n' +
                        '    nokphone},\n' +
                        'lastSeen,\n' +
                        'lastSeenBy,\n' +
                        'dob,\n' +
                        'dod,\n' +
                        'gender,\n' +
                        'ethnicity,\n' +
                        'countryofbirth}}',
                    create: '',
                    destroy: '',
                    update: '',
                    find: '',
                },
                data: {
                    findAll: 'getPatientSearchDetails',
                    create: '',
                    destroy: '',
                    update: '',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.appointments,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getAppointments {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime,readyForBilling,isBilled,billingItems}}',
                    create: 'mutation createAppointment($data: AppointmentInput!){addAppointment(appt: $data) {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime,readyForBilling,isBilled,billingItems}}',
                    destroy: 'mutation deleteAppointment($identifier: String!){deleteAppointment(id: $identifier)}',
                    update: 'mutation updateAppointment($data: AppointmentInput!){updateAppointment(appt: $data)}',
                    find: '',
                },
                data: {
                    findAll: 'getAppointments',
                    create: 'addAppointment',
                    destroy: 'deleteAppointment',
                    update: 'updateAppointment',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.appointmentTypes,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getAppointmentTypes {_id,name,colour,icon,isStatus}}',
                    create: 'mutation createAppointmentType($data: AppointmentTypeInput!){addAppointmentType(apptType: $data) {_id,name,colour,icon,isStatus}}',
                    destroy: 'mutation deleteAppointmentType($identifier: String!){deleteAppointmentType(id: $identifier)}',
                    update: 'mutation updateAppointmentType($data: AppointmentTypeInput!){updateAppointmentType(apptType: $data)}',
                    find: '',
                },
                data: {
                    findAll: 'getAppointmentTypes',
                    create: 'addAppointmentType',
                    destroy: 'deleteAppointmentType',
                    update: 'updateAppointmentType',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.providers,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getProviders {_id,name,providerNo,isCurrent}}',
                    create: 'mutation addProvider($data: ProviderInput!){addProvider(provider: $data) {_id,name,providerNo,isCurrent}}',
                    destroy: 'mutation deleteProvider($identifier: String!){deleteProvider(id: $identifier)}',
                    update: 'mutation updateProvider($data: ProviderInput!){updateProvider(provider: $data)}',
                    find: '',
                },
                data: {
                    findAll: 'getProviders',
                    create: 'addProvider',
                    destroy: 'deleteProvider',
                    update: 'updateProvider',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.users,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getUsers {_id,username,providerNo,isCurrent,isAdmin,isProvider,resetPassword,password}}',
                    create: 'mutation addUser($data: UserInput!){addUser(user: $data) {_id,username,providerNo,isCurrent,isAdmin,isProvider,resetPassword,password}}',
                    destroy: '',
                    update: 'mutation updateUser($data: UserInput!){updateUser(user: $data)}',
                    find: '',
                },
                data: {
                    findAll: 'getUsers',
                    create: 'addUser',
                    destroy: '',
                    update: 'updateUser',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.appointmentTemplates,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getAppointmentTemplates {_id,day, time, duration,createdBy,provider,type,created,modified}}',
                    create: 'mutation addAppointmentTemplate($data: AppointmentTemplateInput!){addAppointmentTemplate(template: $data) {_id,day, time, duration,createdBy,provider,type,created,modified}}',
                    destroy: 'mutation deleteAppointmentTemplate($identifier: String!){deleteAppointmentTemplate(id: $identifier)}',
                    update: 'mutation updateAppointmentTemplate($data: AppointmentTemplateInput!){updateAppointmentTemplate(template: $data)}',
                    find: '',
                },
                data: {
                    findAll: 'getAppointmentTemplates',
                    create: 'addAppointmentTemplate',
                    destroy: 'deleteAppointmentTemplate',
                    update: 'updateAppointmentTemplate',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
            {
                stateName: STATE_NAMES.patients,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: '',
                    create: '',
                    destroy: '',
                    update: '',
                    find: Controller.patientQuery,
                },
                data: {
                    findAll: '',
                    create: '',
                    destroy: '',
                    update: '',
                    find: ''
                },
                isActive: true,
                idField: '_id'
            },
        ])


        let aggregateSM = new AggregateStateManager(isSameMongo);
        let memorySM = new MemoryBufferStateManager(isSameMongo);

        let asyncREST = new AsyncStateManagerWrapper(aggregateSM, restSM, isSameMongo);
        let asyncQL = new AsyncStateManagerWrapper(aggregateSM, qlSM, isSameMongo);

        aggregateSM.addStateManager(memorySM, [], false);
        //aggregateSM.addStateManager(asyncREST, [STATE_NAMES.recentUserSearches, STATE_NAMES.appointments,STATE_NAMES.patientSearch,STATE_NAMES.recentPatientSearches,STATE_NAMES.appointmentTypes, STATE_NAMES.providers,STATE_NAMES.appointmentTemplates,STATE_NAMES.patients], false);
        aggregateSM.addStateManager(asyncREST, [STATE_NAMES.recentUserSearches, STATE_NAMES.users, STATE_NAMES.appointments, STATE_NAMES.patientSearch, STATE_NAMES.recentPatientSearches, STATE_NAMES.appointmentTypes, STATE_NAMES.providers, STATE_NAMES.appointmentTemplates], false);
        //aggregateSM.addStateManager(asyncQL, [STATE_NAMES.recentUserSearches, STATE_NAMES.users,STATE_NAMES.clinicConfig], false);
        aggregateSM.addStateManager(asyncQL, [STATE_NAMES.recentUserSearches, STATE_NAMES.clinicConfig, STATE_NAMES.patients], false);
        this.stateManager = aggregateSM;

        // state listener
        this.stateChanged = this.stateChanged.bind(this);
        this.stateChangedItemAdded = this.stateChangedItemAdded.bind(this);
        this.stateChangedItemRemoved = this.stateChangedItemRemoved.bind(this);
        this.stateChangedItemUpdated = this.stateChangedItemUpdated.bind(this);

        // data objects
        this.setupDataObjectDefinitions();

        return this;
    }

    /*
        Get the base data for the application (users, entries)
    */
    public onDocumentLoaded(): void {
        cLogger('Initialising data state');
        // listen for socket events
        let socketListerDelegate = new SocketListenerDelegate();
        SocketManager.getInstance().setListener(socketListerDelegate);

        // now that we have all the user we can setup the chat system but only if we are logged in
        cLogger(`Setting up chat system for user ${this.getLoggedInUserId()}: ${this.getLoggedInUsername()}`);
        if (this.getLoggedInUserId().trim().length > 0) {
            // setup the chat system
            let chatManager = ChatManager.getInstance(); // this connects the manager to the socket system

            // setup the chat notification system
            NotificationController.getInstance();
            chatManager.setCurrentUser(this.getLoggedInUsername());

            // let the application view know about message counts
            chatManager.setUnreadCountListener(this.applicationView);

            chatManager.login();

            // load the users
            this.getStateManager().getStateByName(STATE_NAMES.users);
            this.getStateManager().getStateByName(STATE_NAMES.appointmentTypes);
            this.getStateManager().getStateByName(STATE_NAMES.providers);
            this.getStateManager().getStateByName(STATE_NAMES.appointmentTemplates);
            this.getStateManager().getStateByName(STATE_NAMES.clinicConfig);
            this.getStateManager().getStateByName(STATE_NAMES.patientSearch);
            this.getStateManager().getStateByName(STATE_NAMES.appointments);

            // apply any queued changes from being offline
            DownloadManager.getInstance().processOfflineItems();
        }

    }

    public getStateManager(): StateManager {
        return this.stateManager;
    }

    public getListenerName(): string {
        return 'Controller';
    }

    public isLoggedIn(): boolean {
        let isLoggedIn = false;
        try {
            // @ts-ignore
            if (loggedInUser) {
                isLoggedIn = true;
            }
        } catch (error) {
        }
        return isLoggedIn;
    }

    public getLoggedInUserId(): string {
        let result = '';
        try {
            // @ts-ignore
            if (loggedInUser) {
                // @ts-ignore
                result = loggedInUser._id;
            }
        } catch (error) {
        }
        cLoggerDetail(`Logged in user id is ${result}`);
        return result;
    }

    public getLoggedInUsername(): string {
        let result = '';
        try {
            // @ts-ignore
            if (loggedInUser) {
                // @ts-ignore
                result = loggedInUser.username;
            }
        } catch (error) {
        }
        cLoggerDetail(`Logged in user is ${result}`);
        return result;
    }

    public getProviderNo(): string {
        let result = '';
        try {
            // @ts-ignore
            if (loggedInUser) {
                // @ts-ignore
                result = loggedInUser.providerNo;
            }
        } catch (error) {
        }
        cLoggerDetail(`Logged in provider is ${result}`);
        return result;
    }

    public isProvider(): boolean {
        let result = false;
        try {
            // @ts-ignore
            if (loggedInUser) {
                // @ts-ignore
                result = loggedInUser.isProvider;
            }
        } catch (error) {
        }
        cLoggerDetail(`Logged in user is a provider? ${result}`);
        return result;
    }

    public handleMessage(message: string): void {
        cLogger(message);
    }

    public getCurrentUser(): string {
        return this.getLoggedInUserId();
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
    }

    stateChanged(managerName: string, name: string, values: any) {
    }

    handleShowChat(roomName: string | null) {
        this.applicationView.handleShowChat(roomName);
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.exerciseTypes: {
                cLogger(`Handling create new exercise type`);
                cLoggerDetail(dataObj);
                this.stateManager.addNewItemToState(typeName, dataObj, false);
                break;
            }
        }
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.exerciseTypes: {
                cLogger(`Handling delete exercise type - already managed by stateful collection view`);
                cLoggerDetail(dataObj);
                break;
            }
        }
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.exerciseTypes: {
                cLogger(`Handling update exercise type`);
                cLoggerDetail(dataObj);
                this.stateManager.updateItemInState(typeName, dataObj, false);
                break;
            }
        }
    }

    addExerciseToCurrentWorkout(exerciseType: any): void {
        let copyOfExercise = {...exerciseType};
        copyOfExercise._id = v4(); // update the id to be unique for the workout
        this.applicationView.addingExerciseToCurrentWorkout(copyOfExercise);
    }

    addWorkoutExercisesToCurrentWorkout(workout: any): void {
        if (workout.exercises) {
            workout.exercises.forEach((exercise: any) => {
                this.addExerciseToCurrentWorkout(exercise);
            });
        }
    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    private setupDataObjectDefinitions() {
        let apptTypeDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.appointmentTypes, 'Appointment Type', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "name", "Name", FieldType.text, true, "Name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "colour", "Colour", FieldType.colour, true, "Choose color from below");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "icon", "Icon", FieldType.text, false, "Font Awesome icon classes");
        let statusFieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "isStatus", "Patient flow status", FieldType.boolean, false, "Used by the application to track patient state");
        statusFieldDef.displayOnly = true;

        cLogger(`Appointment type data object definition`);
        cLogger(apptTypeDef);


        let userDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.users, 'Users', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "username", "Username", FieldType.text, true, "Username");
        let isCurrentFieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isCurrent", "Active?", FieldType.boolean, false, "Is this a current user?");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isAdmin", "Admin?", FieldType.boolean, false, "Does the user have admin privilege?");
        let isProviderFieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isProvider", "Is Provider", FieldType.boolean, false, "Is the user a provider");
        isProviderFieldDef.displayOnly = true;
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "providerNo", "Provider Number", FieldType.text, false, "Provider Number");
        let resetPasswordFieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "resetPassword", "Reset Password?", FieldType.boolean, false, "Reset the users password ");
        let passwordFieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "password", "New Password", FieldType.text, false, "New password");
        cLogger(`Users type data object definition`);
        cLogger(userDef);

        const generator = new DefaultUserValueGenerator();
        // setup default values for new user
        isCurrentFieldDef.generator = {
            onCreation: true,
            onModify: false,
            generator: generator
        };
        resetPasswordFieldDef.generator = {
            onCreation: true,
            onModify: false,
            generator: generator
        };
        passwordFieldDef.generator = {
            onCreation: true,
            onModify: false,
            generator: generator
        };



    }

    /*
    *
    * Simple Application state (URL, logged in user)
    *
     */
    private getServerAPIURL(): string {
        let result = "";
        // @ts-ignore
        if ((window.ENV) && (window.ENV.serverURL)) {
            // @ts-ignore
            result = window.ENV.serverURL;
        }
        return result;
    }

}

class IsProviderDerivedField implements DerivedField {
    getValue(dataObj: any, field: FieldDefinition, isCreate: boolean): string {
        let result = 'false';
        if (dataObj.providerNo) {
            if (dataObj.providerNo.trim().length > 0) {
                result = 'true';
            }
        }
        return result;
    }

}


