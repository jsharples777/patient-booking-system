import debug from 'debug';
import SocketListenerDelegate from "./SocketListenerDelegate";
import {API_Config, STATE_NAMES} from "./AppTypes";
import {v4} from "uuid";
import {isSameMongo} from "./EqualityFunctions";
import {
    AggregateStateManager,
    AsyncStateManagerWrapper,
    BasicObjectDefinitionFactory,
    ChatManager,
    DataObjectController,
    DataObjectDefinition,
    DataObjectListener,
    DownloadManager, FieldDefinition, FieldType,
    GraphQLApiStateManager, KeyType,
    MemoryBufferStateManager,
    NotificationController, ObjectDefinitionRegistry,
    RESTApiStateManager,
    SimpleValueDataSource,
    SocketManager,
    StateChangeListener,
    StateManager
} from "ui-framework-jps";


const cLogger = debug('controller-ts');
const cLoggerDetail = debug('controller-ts-detail');

export default class Controller implements StateChangeListener, DataObjectListener {
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
                stateName: STATE_NAMES.users,
                serverURL: '',
                api: API_Config.users,
                isActive: true
            },
            {
                stateName: STATE_NAMES.clinicConfig,
                serverURL: '',
                api: API_Config.clinicConfig,
                isActive: true
            },
        ]);
        let qlSM = GraphQLApiStateManager.getInstance();
        qlSM.initialise([
            {
                stateName: STATE_NAMES.patientSearch,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getPatientSearchDetails {_id,identifiers { legacyId},flags {isInactive,hasWarnings},name {firstname,surname}}}',
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
                    findAll: 'query {getAppointments {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime}}',
                    create: 'mutation createAppointment($data: AppointmentInput!){addAppointment(appt: $data) {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime}}',
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
                    findAll: 'query {getAppointmentTypes {_id,name,colour,icon}}',
                    create: 'mutation createAppointmentType($data: AppointmentInput!){addAppointmentType(apptType: $data) {_id,name,colour,icon}}',
                    destroy: 'mutation deleteAppointmentType($identifier: String!){deleteAppointmentType(id: $identifier)}',
                    update: 'mutation updateAppointmentType($data: AppointmentInput!){updateAppointmentType(apptType: $data)}',
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
                stateName: STATE_NAMES.appointmentTemplates,
                serverURL: '',
                apiURL: API_Config.graphQL,
                apis: {
                    findAll: 'query {getAppointmentTemplates {_id,day, time, duration,createdBy,provider,type,created,modified}}',
                    create: 'mutation addAppointmentTemplate($data: ProviderInput!){addAppointmentTemplate(provider: $data) {_id,day, time, duration,createdBy,provider,type,created,modified}}',
                    destroy: 'mutation deleteAppointmentTemplate($identifier: String!){deleteAppointmentTemplate(id: $identifier)}',
                    update: 'mutation updateAppointmentTemplate($data: ProviderInput!){updateAppointmentTemplate(provider: $data)}',
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
        ])


        let aggregateSM = new AggregateStateManager(isSameMongo);
        let memorySM = new MemoryBufferStateManager(isSameMongo);

        let asyncREST = new AsyncStateManagerWrapper(aggregateSM, restSM, isSameMongo);
        let asyncQL = new AsyncStateManagerWrapper(aggregateSM, qlSM, isSameMongo);

        aggregateSM.addStateManager(memorySM, [], false);
        aggregateSM.addStateManager(asyncREST, [STATE_NAMES.recentUserSearches, STATE_NAMES.appointments,STATE_NAMES.patientSearch,STATE_NAMES.recentPatientSearches,STATE_NAMES.appointmentTypes, STATE_NAMES.providers,STATE_NAMES.appointmentTemplates], false);
        aggregateSM.addStateManager(asyncQL, [STATE_NAMES.recentUserSearches, STATE_NAMES.users,STATE_NAMES.clinicConfig], false);
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

    private setupDataObjectDefinitions() {
        // create the object definitions for the exercise type and workout
        let exerciseTypeDefinition: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.exerciseTypes, 'Exercise', true, true, true, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", FieldType.text, true, "Exercise name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", FieldType.limitedChoice, true, "Choose cardio or strength",
            new SimpleValueDataSource([
                {name: 'Cardio', value: 'cardio'},
                {name: 'Strength', value: 'strength'}
            ]));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "duration", "Duration", FieldType.duration, true, "Exercise time");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "sets", "Sets", FieldType.integer, false, "Number of sets");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "reps", "Repetitions", FieldType.integer, false, "Number of reps");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "weight", "Weight", FieldType.float, false, "Weight used");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "distance", "Distance", FieldType.float, false, "Distance travelled");

        cLogger(`Exercise type data object definition`);
        cLogger(exerciseTypeDefinition);
        cLoggerDetail(ObjectDefinitionRegistry.getInstance().findDefinition('exerciseType'));

        let workoutDefinition: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.workouts, 'Workout', true, true, true, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "name", "Name", FieldType.text, false, "Give the workout a name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "completed", "Completed", FieldType.boolean, true, "Have completed the workout");
        let exercisesFieldDefinition: FieldDefinition = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "exercises", "Exercises", FieldType.collection, true, "Exercises in this workout");
        exercisesFieldDefinition.idType = KeyType.collection;
        exercisesFieldDefinition.collectionOfDataObjectId = exerciseTypeDefinition.id;

        cLogger(`Workout data object definition`);
        cLogger(workoutDefinition);
        cLoggerDetail(ObjectDefinitionRegistry.getInstance().findDefinition('workout'));


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

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

}


