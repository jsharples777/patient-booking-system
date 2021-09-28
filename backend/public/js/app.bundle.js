/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/AppTypes.ts":
/*!*****************************!*\
  !*** ./src/app/AppTypes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Decorator": () => (/* binding */ Decorator),
/* harmony export */   "STATE_NAMES": () => (/* binding */ STATE_NAMES),
/* harmony export */   "API_Config": () => (/* binding */ API_Config),
/* harmony export */   "NAVIGATION": () => (/* binding */ NAVIGATION),
/* harmony export */   "DRAGGABLE": () => (/* binding */ DRAGGABLE),
/* harmony export */   "VIEW_NAME": () => (/* binding */ VIEW_NAME),
/* harmony export */   "VIEW_CONTAINER": () => (/* binding */ VIEW_CONTAINER),
/* harmony export */   "BUTTON": () => (/* binding */ BUTTON),
/* harmony export */   "INPUT": () => (/* binding */ INPUT),
/* harmony export */   "CurrentWorkoutSidebarPrefs": () => (/* binding */ CurrentWorkoutSidebarPrefs),
/* harmony export */   "CurrentWorkoutContainers": () => (/* binding */ CurrentWorkoutContainers),
/* harmony export */   "ExerciseTypesSidebarPrefs": () => (/* binding */ ExerciseTypesSidebarPrefs),
/* harmony export */   "ExerciseTypesSidebarContainers": () => (/* binding */ ExerciseTypesSidebarContainers),
/* harmony export */   "WorkoutSummarySidebarPrefs": () => (/* binding */ WorkoutSummarySidebarPrefs),
/* harmony export */   "WorkoutSummarySidebarContainers": () => (/* binding */ WorkoutSummarySidebarContainers),
/* harmony export */   "Day": () => (/* binding */ Day)
/* harmony export */ });
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");

let Decorator;

(function (Decorator) {
  Decorator[Decorator["Incomplete"] = 0] = "Incomplete";
  Decorator[Decorator["Complete"] = 1] = "Complete";
  Decorator[Decorator["Persisted"] = 2] = "Persisted";
  Decorator[Decorator["PersistedLocally"] = 3] = "PersistedLocally";
})(Decorator || (Decorator = {}));

const STATE_NAMES = {
  users: 'user',
  chatLogs: 'chatLog',
  exerciseTypes: 'exerciseType',
  workouts: 'workout',
  recentUserSearches: 'recentUserSearch',
  patientSearch: 'fastSearchNames',
  recentPatientSearches: 'recentPatientSearches',
  appointments: 'appointment',
  appointmentTypes: 'appointmentType',
  clinicConfig: 'clinicConfig'
};
const API_Config = {
  login: '/login',
  graphQL: '/graphQL',
  users: '/api/users',
  clinicConfig: '/api/clinic-config'
};
const NAVIGATION = {
  showMyWorkouts: 'navigationItemMyWorkouts',
  userSearchId: 'navigationItemUserSearch',
  exerciseTypesId: 'navigationItemExerciseTypes',
  chatId: 'navigationItemChat',
  workoutSummary: 'navigationItemWorkoutSummary',
  currentWorkout: 'navigationItemCurrentWorkout',
  logout: 'navigationItemLogout'
};
const DRAGGABLE = {
  typeUser: 'user',
  typeExerciseType: 'exerciseType',
  fromUserSearch: 'userSearch',
  fromFavourites: 'favourites',
  fromExerciseTypes: 'exerciseTypes'
};
const VIEW_NAME = {
  blockedUsers: 'blockedUsers',
  chatLog: 'chatLog',
  chatLogs: 'chatLogs',
  favouriteUsers: 'favouriteUsers',
  exerciseTypes: 'exerciseTypes',
  userSearch: 'userSearch',
  workouts: 'workouts',
  workoutSummary: 'workoutSummary',
  exercises: 'exercises'
};
const VIEW_CONTAINER = {
  exerciseTypeDetail: "exerciseTypeDetail",
  currentWorkoutDetail: 'workoutDetail',
  exerciseDropZone: 'exerciseDropZone',
  calendarControl: 'calendarControl',
  calendarDetail: 'calendarDetail'
};
const BUTTON = {
  createNewExerciseType: 'addNewExerciseType',
  completeWorkout: 'completeWorkout'
};
const INPUT = {
  workoutName: 'workoutName'
};
const CurrentWorkoutSidebarPrefs = {
  id: 'currentWorkoutSidebar',
  expandedSize: '50%',
  location: _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.right
};
const CurrentWorkoutContainers = {
  list: 'exercises',
  detail: 'workoutDetail'
};
const ExerciseTypesSidebarPrefs = {
  id: 'exerciseTypesSidebar',
  expandedSize: '50%',
  location: _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left
};
const ExerciseTypesSidebarContainers = {
  container: 'exerciseTypesContainer'
};
const WorkoutSummarySidebarPrefs = {
  id: 'workoutSummarySidebar',
  expandedSize: '100%',
  location: _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.bottom
};
const WorkoutSummarySidebarContainers = {
  container: 'workoutSummary'
};
let Day;

(function (Day) {
  Day[Day["Monday"] = 1] = "Monday";
  Day[Day["Tuesday"] = 2] = "Tuesday";
  Day[Day["Wednesday"] = 3] = "Wednesday";
  Day[Day["Thursday"] = 4] = "Thursday";
  Day[Day["Friday"] = 5] = "Friday";
  Day[Day["Saturday"] = 6] = "Saturday";
  Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));

/***/ }),

/***/ "./src/app/AppointmentController.ts":
/*!******************************************!*\
  !*** ./src/app/AppointmentController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentController": () => (/* binding */ AppointmentController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");




const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-controller');
class AppointmentController {
  static getInstance() {
    if (!AppointmentController._instance) {
      AppointmentController._instance = new AppointmentController();
    }

    return AppointmentController._instance;
  }

  datePicker = null;
  calendar = null;

  constructor() {
    this.handleNewDatePicked = this.handleNewDatePicked.bind(this);
    this.onPageLoading = this.onPageLoading.bind(this);
    this.onAppointmentEditRequested = this.onAppointmentEditRequested.bind(this);
    this.onAppointmentDeleting = this.onAppointmentDeleting.bind(this);
    this.onAppointmentDeleted = this.onAppointmentDeleted.bind(this);
    this.onAppointmentCreated = this.onAppointmentCreated.bind(this);
    this.onAppointmentContext = this.onAppointmentContext.bind(this);
    this.onAppointmentUpdated = this.onAppointmentUpdated.bind(this);
  }

  handleNewDatePicked(event, inst) {
    logger(`Handling new date picked`);
    logger(event);
  }

  setViewObjects(datePicker, calendar) {
    this.datePicker = datePicker;
    this.calendar = calendar;
  }

  getColourForAppointment(appointment) {
    switch (appointment.type) {
      // case AppointmentType.Urgent: {
      //     return `rgba(200,100,10,50)`;
      // }
      default:
        {
          return `rgba(10,100,100,50)`;
        }
    }
  }

  onPageLoading(event, inst) {
    logger(event);
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
    const loadDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('YYYYMMDD'));
    logger(`Need to load date ${loadDate}`);
    let canEdit = loadDate < today;
    const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
    let results = [];
    appointments.forEach(appointment => {
      if (appointment.start === loadDate) {
        logger('Found appointment');
        logger(appointment); // convert the start and end time into the format for the calendar

        const time = parseInt(appointment.time); // HHMMSS as a time

        const duration = appointment.duration; // seconds

        const startTimeHours = Math.floor(appointment.time / 10000);
        const startTimeMinutes = Math.floor((time - startTimeHours * 10000) / 100);
        const appointmentDuration = Math.floor(duration / 60);
        let endTimeHours = startTimeHours;
        let endTimeMinutes = startTimeMinutes + appointmentDuration;

        if (endTimeMinutes > 60) {
          endTimeMinutes -= 60;
          endTimeHours += 1; // 24 hour time
        }

        let timeString = `${endTimeHours}`;
        if (endTimeHours < 10) timeString = '0' + timeString;
        if (endTimeMinutes < 10) timeString += '0';
        timeString += `${endTimeMinutes}`;
        let result = {
          id: appointment._id,
          start: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${loadDate}${appointment.time}`, 'YYYYMMDDHHmmss'),
          end: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${loadDate}${timeString}`, 'YYYYMMDDHHmm'),
          title: appointment.name,
          color: this.getColourForAppointment(appointment),
          allDay: false,
          editable: canEdit,
          resource: appointment.provider
        };
        logger('Converted to event');
        logger(result);
        results.push(result);
      }
    });
    inst.setEvents(results);
  }

  onAppointmentEditRequested(event, inst) {
    logger(event);
  }

  onAppointmentDeleting(event, inst) {
    logger(event);
    return false;
  }

  onAppointmentDeleted(event, inst) {
    logger(event);
  }

  onAppointmentCreated(event, inst) {
    logger(event);
  }

  onAppointmentContext(event, inst) {
    logger(event);
  }

  onAppointmentUpdated(event, inst) {
    logger(event);
  }

}

/***/ }),

/***/ "./src/app/Controller.ts":
/*!*******************************!*\
  !*** ./src/app/Controller.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketListenerDelegate */ "./src/app/SocketListenerDelegate.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EqualityFunctions */ "./src/app/EqualityFunctions.ts");
/* harmony import */ var _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/state/RESTApiStateManager */ "./src/framework/state/RESTApiStateManager.ts");
/* harmony import */ var _framework_state_GraphQLApiStateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/state/GraphQLApiStateManager */ "./src/framework/state/GraphQLApiStateManager.ts");
/* harmony import */ var _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework/state/AggregateStateManager */ "./src/framework/state/AggregateStateManager.ts");
/* harmony import */ var _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../framework/state/MemoryBufferStateManager */ "./src/framework/state/MemoryBufferStateManager.ts");
/* harmony import */ var _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/state/AsyncStateManagerWrapper */ "./src/framework/state/AsyncStateManagerWrapper.ts");
/* harmony import */ var _framework_socket_SocketManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../framework/socket/SocketManager */ "./src/framework/socket/SocketManager.ts");
/* harmony import */ var _framework_socket_ChatManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../framework/socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _framework_socket_NotificationController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../framework/socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../framework/network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../framework/model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../framework/model/ObjectDefinitionRegistry */ "./src/framework/model/ObjectDefinitionRegistry.ts");
/* harmony import */ var _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../framework/model/BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../framework/ui/helper/SimpleValueDataSource */ "./src/framework/ui/helper/SimpleValueDataSource.ts");
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../framework/ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");



















const cLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts');
const cLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts-detail');
class Controller {
  // @ts-ignore
  constructor() {}

  static getInstance() {
    if (!Controller._instance) {
      Controller._instance = new Controller();
    }

    return Controller._instance;
  }

  connectToApplication(applicationView, clientSideStorage) {
    this.applicationView = applicationView;
    this.clientSideStorage = clientSideStorage; // setup the API calls

    let restSM = _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_4__.RESTApiStateManager.getInstance();
    restSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.users,
      isActive: true
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.clinicConfig,
      isActive: true
    }]);
    let qlSM = _framework_state_GraphQLApiStateManager__WEBPACK_IMPORTED_MODULE_5__.GraphQLApiStateManager.getInstance();
    qlSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getPatientSearchDetails {_id,identifiers { legacyId},flags {isInactive,hasWarnings},name {firstname,surname}}}',
        create: '',
        destroy: '',
        update: '',
        find: ''
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getAppointments {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name}}',
        create: 'mutation createAppointment($data: AppointmentInput!){addAppointment(appt: $data) {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name }}',
        destroy: 'mutation deleteAppointment($identifier: String!){deleteAppointment(id: $identifier)}',
        update: 'mutation updateAppointment($data: AppointmentInput!){updateAppointment(appt: $data)}',
        find: ''
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getAppointmentTypes {_id,name,colour}}',
        create: 'mutation createAppointmentType($data: AppointmentInput!){addAppointmentType(apptType: $data) {_id,name,colour}}',
        destroy: 'mutation deleteAppointmentType($identifier: String!){deleteAppointmentType(id: $identifier)}',
        update: 'mutation updateAppointmentType($data: AppointmentInput!){updateAppointmentType(apptType: $data)}',
        find: ''
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
    }]);
    let aggregateSM = new _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_6__.AggregateStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let memorySM = new _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_7__.MemoryBufferStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncREST = new _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_8__.AsyncStateManagerWrapper(aggregateSM, restSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncQL = new _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_8__.AsyncStateManagerWrapper(aggregateSM, qlSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    aggregateSM.addStateManager(memorySM, [], false);
    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig], false);
    aggregateSM.addStateManager(asyncQL, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig], false);
    this.stateManager = aggregateSM; // state listener

    this.stateChanged = this.stateChanged.bind(this);
    this.stateChangedItemAdded = this.stateChangedItemAdded.bind(this);
    this.stateChangedItemRemoved = this.stateChangedItemRemoved.bind(this);
    this.stateChangedItemUpdated = this.stateChangedItemUpdated.bind(this); // data objects

    this.setupDataObjectDefinitions();
    return this;
  }
  /*
      Get the base data for the application (users, entries)
  */


  onDocumentLoaded() {
    cLogger('Initialising data state'); // listen for socket events

    let socketListerDelegate = new _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _framework_socket_SocketManager__WEBPACK_IMPORTED_MODULE_9__.SocketManager.getInstance().setListener(socketListerDelegate); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger(`Setting up chat system for user ${this.getLoggedInUserId()}: ${this.getLoggedInUsername()}`);

    if (this.getLoggedInUserId().trim().length > 0) {
      // setup the chat system
      let chatManager = _framework_socket_ChatManager__WEBPACK_IMPORTED_MODULE_10__.ChatManager.getInstance(); // this connects the manager to the socket system
      // setup the chat notification system

      _framework_socket_NotificationController__WEBPACK_IMPORTED_MODULE_11__.NotificationController.getInstance();
      chatManager.setCurrentUser(this.getLoggedInUsername()); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments); // apply any queued changes from being offline

      _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_12__.DownloadManager.getInstance().processOfflineItems();
    }
  }

  getStateManager() {
    return this.stateManager;
  }

  getListenerName() {
    return 'Controller';
  }

  isLoggedIn() {
    let isLoggedIn = false;

    try {
      // @ts-ignore
      if (loggedInUser) {
        isLoggedIn = true;
      }
    } catch (error) {}

    return isLoggedIn;
  }

  getLoggedInUserId() {
    let result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser._id;
      }
    } catch (error) {}

    cLoggerDetail(`Logged in user id is ${result}`);
    return result;
  }

  getLoggedInUsername() {
    let result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser.username;
      }
    } catch (error) {}

    cLoggerDetail(`Logged in user is ${result}`);
    return result;
  }

  handleMessage(message) {
    cLogger(message);
  }

  getCurrentUser() {
    return this.getLoggedInUserId();
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {}

  stateChanged(managerName, name, values) {}

  handleShowChat(roomName) {
    this.applicationView.handleShowChat(roomName);
  }

  create(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.exerciseTypes:
        {
          cLogger(`Handling create new exercise type`);
          cLoggerDetail(dataObj);
          this.stateManager.addNewItemToState(typeName, dataObj, false);
          break;
        }
    }
  }

  delete(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.exerciseTypes:
        {
          cLogger(`Handling delete exercise type - already managed by stateful collection view`);
          cLoggerDetail(dataObj);
          break;
        }
    }
  }

  update(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.exerciseTypes:
        {
          cLogger(`Handling update exercise type`);
          cLoggerDetail(dataObj);
          this.stateManager.updateItemInState(typeName, dataObj, false);
          break;
        }
    }
  }

  addExerciseToCurrentWorkout(exerciseType) {
    let copyOfExercise = { ...exerciseType
    };
    copyOfExercise._id = (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])(); // update the id to be unique for the workout

    this.applicationView.addingExerciseToCurrentWorkout(copyOfExercise);
  }

  addWorkoutExercisesToCurrentWorkout(workout) {
    if (workout.exercises) {
      workout.exercises.forEach(exercise => {
        this.addExerciseToCurrentWorkout(exercise);
      });
    }
  }

  setupDataObjectDefinitions() {
    // create the object definitions for the exercise type and workout
    let exerciseTypeDefinition = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_14__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.exerciseTypes, 'Exercise', true, true, true, '_id');
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.text, true, "Exercise name");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.limitedChoice, true, "Choose cardio or strength", new _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_16__.SimpleValueDataSource([{
      name: 'Cardio',
      value: 'cardio'
    }, {
      name: 'Strength',
      value: 'strength'
    }]));
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "duration", "Duration", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.duration, true, "Exercise time");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "sets", "Sets", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.integer, false, "Number of sets");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "reps", "Repetitions", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.integer, false, "Number of reps");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "weight", "Weight", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.float, false, "Weight used");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "distance", "Distance", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.float, false, "Distance travelled");
    cLogger(`Exercise type data object definition`);
    cLogger(exerciseTypeDefinition);
    cLoggerDetail(_framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_14__.ObjectDefinitionRegistry.getInstance().findDefinition('exerciseType'));
    let workoutDefinition = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_14__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.workouts, 'Workout', true, true, true, '_id');
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "name", "Name", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.text, false, "Give the workout a name");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "completed", "Completed", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.boolean, true, "Have completed the workout");
    let exercisesFieldDefinition = _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_15__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "exercises", "Exercises", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_13__.FieldType.collection, true, "Exercises in this workout");
    exercisesFieldDefinition.idType = _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_17__.KeyType.collection;
    exercisesFieldDefinition.collectionOfDataObjectId = exerciseTypeDefinition.id;
    cLogger(`Workout data object definition`);
    cLogger(workoutDefinition);
    cLoggerDetail(_framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_14__.ObjectDefinitionRegistry.getInstance().findDefinition('workout'));
  }
  /*
  *
  * Simple Application state (URL, logged in user)
  *
   */


  getServerAPIURL() {
    let result = ""; // @ts-ignore

    if (window.ENV && window.ENV.serverURL) {
      // @ts-ignore
      result = window.ENV.serverURL;
    }

    return result;
  }

  filterResults(managerName, name, filterResults) {}

}

/***/ }),

/***/ "./src/app/EqualityFunctions.ts":
/*!**************************************!*\
  !*** ./src/app/EqualityFunctions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSame": () => (/* binding */ isSame),
/* harmony export */   "isSameMongo": () => (/* binding */ isSameMongo),
/* harmony export */   "isSameUsername": () => (/* binding */ isSameUsername),
/* harmony export */   "isSameRoom": () => (/* binding */ isSameRoom)
/* harmony export */ });
function isSame(item1, item2) {
  return item1.id === item2.id;
}
function isSameMongo(item1, item2) {
  return item1._id === item2._id;
}
function isSameUsername(item1, item2) {
  return item1.username === item2.username;
}
function isSameRoom(item1, item2) {
  return item1.roomName === item2.roomName;
}

/***/ }),

/***/ "./src/app/SocketListenerDelegate.ts":
/*!*******************************************!*\
  !*** ./src/app/SocketListenerDelegate.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocketListenerDelegate)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");




const slLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('socket-listener');
class SocketListenerDelegate {
  constructor() {}

  handleDataChangedByAnotherUser(message) {
    slLogger(`Handling data change ${message.type} on object type ${message.stateName} made by user ${message.user}`);
    const changeUser = _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, {
      _id: message.user
    });
    let username = "unknown";

    if (changeUser) {
      username = changeUser.username;
    }

    slLogger(`Handling data change ${message.type} on object type ${message.stateName} made by user ${username}`);
    let stateObj = message.data;
    slLogger(stateObj); // ok lets work out where this change belongs

    try {
      switch (message.type) {
        case "create":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, stateObj, true);
                  _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager.getInstance().show(stateObj.username, `${stateObj.username} has just registered.`, _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationType.info);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, stateObj, true);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, stateObj, true);
                  break;
                }
            }

            break;
          }

        case "update":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, stateObj, true);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, stateObj, true);
                  break;
                }
            }

            break;
          }

        case "delete":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, stateObj, true);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, stateObj, true);
                  break;
                }
            }

            break;
          }
      }
    } catch (err) {
      slLogger(err);
    }
  }

  handleMessage(message) {
    slLogger(`Received message: ${message}`);
  }

  getCurrentUser() {
    return _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getLoggedInUserId();
  }

}

/***/ }),

/***/ "./src/framework/CommonTypes.ts":
/*!**************************************!*\
  !*** ./src/framework/CommonTypes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonType": () => (/* binding */ ComparisonType)
/* harmony export */ });
let ComparisonType;

(function (ComparisonType) {
  ComparisonType[ComparisonType["equals"] = 0] = "equals";
  ComparisonType[ComparisonType["lessThan"] = 1] = "lessThan";
  ComparisonType[ComparisonType["lessThanEqual"] = 2] = "lessThanEqual";
  ComparisonType[ComparisonType["greaterThan"] = 3] = "greaterThan";
  ComparisonType[ComparisonType["greaterThanEqual"] = 4] = "greaterThanEqual";
  ComparisonType[ComparisonType["isNull"] = 5] = "isNull";
  ComparisonType[ComparisonType["isNotNull"] = 6] = "isNotNull";
  ComparisonType[ComparisonType["hasValue"] = 7] = "hasValue";
})(ComparisonType || (ComparisonType = {}));

/***/ }),

/***/ "./src/framework/model/BasicFieldOperations.ts":
/*!*****************************************************!*\
  !*** ./src/framework/model/BasicFieldOperations.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFieldOperations": () => (/* binding */ BasicFieldOperations)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/SecurityManager */ "./src/framework/security/SecurityManager.ts");






const flogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-formatter');
const vlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-validator');
const glogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-generator');
const rlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-renderer');
class BasicFieldOperations {
  static dateRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))$/;
  static emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
  static shortTimeRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  static timeRegex = /^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
  static dateTimeRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))\s([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
  static basicPasswordRegex = /^[a-zA-Z0-9]{8,15}$/;
  static integerRegex = /^[+-]?\d+$/;
  static floatRegexp = /^[+-]?\d+(\.\d+)?$/;
  static booleanRegexp = /^true|false$/;
  static durationRegexp = /^(\d+:)?[0-5]?\d:[0-5]\d$/;

  constructor() {
    this.previousFieldValues = [];
  }

  setSubElements(elements) {} // called when saving, change to final values


  formatValue(field, currentValue) {
    flogger(`Handling format value for field ${field.displayName} with value ${currentValue}`);
    let result = currentValue;

    switch (field.type) {
      // only need to change dates
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY').format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY HH:mm:ss').format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
        {
          result = currentValue.toLowerCase() === 'true';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
        {
          if (field.idType === _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_3__.KeyType.number) {
            result = parseInt(currentValue);
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
        {
          let parsed = parseFloat(currentValue);

          if (!isNaN(parsed)) {
            result = parsed;
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        {
          let parsed = parseFloat(currentValue);

          if (!isNaN(parsed)) {
            result = parsed;
          }

          break;
        }
    }

    flogger(`Handling format value for field ${field.displayName} with value ${currentValue} - result is ${result}`);
    return result;
  }

  isValidValue(field, currentValue) {
    vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue}`);
    let response = {
      isValid: true,
      resetOnFailure: false
    }; // basics first, is the field mandatory?

    if (field.mandatory) {
      // do we have any content?
      if (!currentValue || currentValue.trim().length === 0) {
        response.isValid = false;
        response.message = `${field.displayName} is required. Please enter a valid value.`;
        vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue} - is valid is ${response.isValid} with message ${response.message}`);
        return response;
      } // boolean is a special case, and must be true


      if (field.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean) {
        if (currentValue.trim().toLowerCase() !== 'true') {
          response.isValid = false;
          response.message = `${field.displayName} is required and must be selected.`;
          vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue} - is valid is ${response.isValid} with message ${response.message}`);
          return response;
        }
      }
    } // ok, so we have some content, we need to check if the value is a valid format with regular expressions


    if (currentValue) {
      switch (field.type) {
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            response.isValid = BasicFieldOperations.dateTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be DD/MM/YYYY hh:mm`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
          {
            response.isValid = BasicFieldOperations.dateRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be DD/MM/YYYY`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            response.isValid = BasicFieldOperations.floatRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be 00.00`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be an integer`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
          {
            response.isValid = BasicFieldOperations.emailRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be an email address`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be an integer`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
          {
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
          {
            response.isValid = BasicFieldOperations.basicPasswordRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be 8 to 15 letters and digits only`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
          {
            response.isValid = BasicFieldOperations.timeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be 24 hour time format HH:MM:SS`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
          {
            response.isValid = BasicFieldOperations.shortTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be 24 hour time format HH:MM`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
          {
            response.isValid = BasicFieldOperations.durationRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be in the format MM:SS or 999:MM:SS`;
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            response.isValid = BasicFieldOperations.booleanRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = `${field.displayName} must be true or false`;
            }

            break;
          }
      }
    }

    vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue} - is valid is ${response.isValid} with message ${response.message}`);
    return response;
  }

  renderValue(field, currentValue) {
    rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue}`); // ensure we don't end up in an endless loop
    // if the value hasn't changed return null
    // let index = this.previousFieldValues.findIndex((fieldValue) => fieldValue.id === field.id);
    // if (index >= 0) {
    //     //we have a previous value
    //     let fieldValue: FieldNameValue = this.previousFieldValues[index];
    //     rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue} - previous value ${fieldValue.value}`);
    //     if (fieldValue.value === currentValue) return null;
    // }
    // either not yet seen or value has changed from previous

    if (currentValue) {
      // only attempt to render non-empty dates
      let newValue = currentValue;

      switch (field.type) {
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
          {
            newValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'YYYYMMDD').format('DD/MM/YYYY');
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            newValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'YYYYMMDDHHmmss').format('DD/MM/YYYY HH:mm:ss');
            break;
          }
      } // store the previous value


      this.setPreviousValue(field, newValue);
      rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue} - rendered to ${newValue}`);
      return newValue;
    } else {
      // empty value, no rendering required
      rlogger(`Rendering value for field ${field.displayName} with new value is empty - no rendering required`);
      return null;
    }
  }

  generate(field, isCreate) {
    let result = ''; // are we generating the field?

    if (field.generator) {
      // are we only generating on create
      if (field.generator.onCreation && isCreate) {
        result = this.generateValue(field);
        glogger(`Generating value for field ${field.displayName} with on creation ${result}`);
      } // or if we are modifying and should also be modifying the value


      if (field.generator.onModify && !isCreate) {
        result = this.generateValue(field);
        glogger(`Generating value for field ${field.displayName} with on modify ${result}`);
      }
    }

    return result;
  }

  setPreviousValue(field, newValue) {
    rlogger(`Storing previous value for field ${field.displayName} with  new value ${newValue}`);
    let fieldValue;
    let index = this.previousFieldValues.findIndex(fieldValue => fieldValue.id === field.id);

    if (index >= 0) {
      //we have a previous value
      fieldValue = this.previousFieldValues[index];
      rlogger(`Storing previous value for field ${field.displayName} with new value ${newValue} - old value was ${fieldValue}`);
      fieldValue.value = newValue;
    } else {
      // create a new record of the value
      fieldValue = {
        id: field.id,
        value: newValue
      };
      rlogger(`Storing previous value for field ${field.displayName} with new value ${newValue} - NO previous`);
      this.previousFieldValues.push(fieldValue);
    }
  }

  generateValue(field) {
    let result = '';

    switch (field.type) {
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
        {
          result = '0.0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
        {
          result = '-1';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
        {
          result = 'me@me.com';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        {
          result = '0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
        {
          result = '00:00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
        {
          result = 'false';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid:
        {
          result = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.userId:
        {
          result = `${_security_SecurityManager__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()}`;
          break;
        }
    }

    return result;
  }

}

/***/ }),

/***/ "./src/framework/model/BasicObjectDefinitionFactory.ts":
/*!*************************************************************!*\
  !*** ./src/framework/model/BasicObjectDefinitionFactory.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIELD_ID": () => (/* binding */ FIELD_ID),
/* harmony export */   "FIELD_CreatedBy": () => (/* binding */ FIELD_CreatedBy),
/* harmony export */   "FIELD_ModifiedBy": () => (/* binding */ FIELD_ModifiedBy),
/* harmony export */   "FIELD_CreatedOn": () => (/* binding */ FIELD_CreatedOn),
/* harmony export */   "FIELD_ModifiedOn": () => (/* binding */ FIELD_ModifiedOn),
/* harmony export */   "FIELD_CreatedBy_Desc": () => (/* binding */ FIELD_CreatedBy_Desc),
/* harmony export */   "FIELD_ModifiedBy_Desc": () => (/* binding */ FIELD_ModifiedBy_Desc),
/* harmony export */   "FIELD_CreatedOn_Desc": () => (/* binding */ FIELD_CreatedOn_Desc),
/* harmony export */   "FIELD_ModifiedOn_Desc": () => (/* binding */ FIELD_ModifiedOn_Desc),
/* harmony export */   "BasicObjectDefinitionFactory": () => (/* binding */ BasicObjectDefinitionFactory)
/* harmony export */ });
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicFieldOperations */ "./src/framework/model/BasicFieldOperations.ts");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");



const FIELD_ID = 'id';
const FIELD_CreatedBy = 'createdBy';
const FIELD_ModifiedBy = 'modifiedBy';
const FIELD_CreatedOn = 'createdOn';
const FIELD_ModifiedOn = 'modifiedOn';
const FIELD_CreatedBy_Desc = 'Created By';
const FIELD_ModifiedBy_Desc = 'Last Modified By';
const FIELD_CreatedOn_Desc = 'Created On';
const FIELD_ModifiedOn_Desc = 'Last Modified On';
class BasicObjectDefinitionFactory {
  constructor() {}

  static getInstance() {
    if (!BasicObjectDefinitionFactory._instance) {
      BasicObjectDefinitionFactory._instance = new BasicObjectDefinitionFactory();
    }

    return BasicObjectDefinitionFactory._instance;
  }

  generateStartingDisplayOrder(dataObjDef) {
    let result = [];
    dataObjDef.fields.forEach((fieldDef, index) => {
      let order = {
        fieldId: fieldDef.id,
        displayOrder: index
      }; // is this the created or modified date

      if (fieldDef.id === FIELD_CreatedOn) {
        order.displayOrder += 100;
      }

      if (fieldDef.id === FIELD_ModifiedOn) {
        order.displayOrder += 101;
      }

      if (fieldDef.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId) {
        order.displayOrder += 100;
      }

      result.push(order);
    });
    return result;
  }

  createBasicObjectDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields = true, idFieldName = FIELD_ID) {
    let objDef = {
      id: id,
      displayName: displayName,
      fields: []
    };
    let ops = new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(); // do we need an id field?

    if (hasDataId) {
      let fieldType = _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.id;

      if (dataIdIsUUID) {
        fieldType = _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.uuid;
      }

      let fieldDef = {
        id: idFieldName,
        isKey: true,
        idType: _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.number,
        type: fieldType,
        displayName: 'Id',
        mandatory: true,
        generator: {
          generator: ops,
          onModify: false,
          onCreation: true
        }
      };
      objDef.fields.push(fieldDef);
    } // add fields for created and modified


    if (createModifierFields) {
      this.addCreatedDateToArray(objDef.fields);
      this.addCreatedByToArray(objDef.fields);
      this.addModifiedByToArray(objDef.fields);
      this.addModifiedDateToArray(objDef.fields);
    }

    return objDef;
  }

  addStringFieldToObjDefinition(objDef, id, displayName, type, isMandatory = false, description = null, datasource = null) {
    return this.addStringFieldToArray(objDef.fields, id, displayName, type, isMandatory, description, datasource);
  }

  addNumericFieldToObjDefinition(objDef, id, displayName, type, isMandatory = false, description = null, datasource = null) {
    return this.addNumericFieldToArray(objDef.fields, id, displayName, type, isMandatory, description, datasource);
  }

  addCreatedDateToArray(fields) {
    let fieldDef = this.addStringFieldToArray(fields, FIELD_CreatedOn, FIELD_CreatedOn_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime, true, FIELD_CreatedOn_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: false
    };
    fieldDef.displayOnly = true;
  }

  addModifiedDateToArray(fields) {
    let fieldDef = this.addStringFieldToArray(fields, FIELD_ModifiedOn, FIELD_ModifiedOn_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime, true, FIELD_ModifiedOn_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: true
    };
    fieldDef.displayOnly = true;
  }

  addCreatedByToArray(fields) {
    let fieldDef = this.addNumericFieldToArray(fields, FIELD_CreatedBy, FIELD_CreatedBy_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId, true, FIELD_CreatedBy_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: false
    };
    fieldDef.displayOnly = true;
  }

  addModifiedByToArray(fields) {
    let fieldDef = this.addStringFieldToArray(fields, FIELD_ModifiedBy, FIELD_ModifiedBy_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId, true, FIELD_ModifiedBy_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: true
    };
    fieldDef.displayOnly = true;
  }

  addFieldToArray(fields, keyType, id, displayName, type, isMandatory = false, description = null, datasource = null) {
    let fieldDef = {
      id: id,
      isKey: false,
      idType: keyType,
      type: type,
      displayName: displayName,
      mandatory: isMandatory,
      displayOnly: false
    };

    if (isMandatory) {
      // add generator
      fieldDef.generator = {
        generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
        onCreation: true,
        onModify: false
      };
    }

    if (description) fieldDef.description = description;
    if (datasource) fieldDef.dataSource = datasource;
    fields.push(fieldDef);
    return fieldDef;
  }

  addStringFieldToArray(fields, id, displayName, type, isMandatory = false, description = null, datasource = null) {
    return this.addFieldToArray(fields, _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.string, id, displayName, type, isMandatory, description, datasource);
  }

  addNumericFieldToArray(fields, id, displayName, type, isMandatory = false, description = null, datasource = null) {
    return this.addFieldToArray(fields, _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.string, id, displayName, type, isMandatory, description, datasource);
  }

}

/***/ }),

/***/ "./src/framework/model/DataObjectTypeDefs.ts":
/*!***************************************************!*\
  !*** ./src/framework/model/DataObjectTypeDefs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldType": () => (/* binding */ FieldType)
/* harmony export */ });
let FieldType;

(function (FieldType) {
  FieldType["id"] = "Id";
  FieldType["uuid"] = "UUID";
  FieldType["text"] = "Text";
  FieldType["integer"] = "Integer";
  FieldType["float"] = "Number";
  FieldType["date"] = "Date";
  FieldType["time"] = "Time";
  FieldType["shortTime"] = "Short Time";
  FieldType["datetime"] = "Datetime";
  FieldType["email"] = "Email";
  FieldType["password"] = "Password";
  FieldType["boolean"] = "True/False";
  FieldType["userId"] = "User";
  FieldType["choice"] = "Choice";
  FieldType["limitedChoice"] = "Limited Choice";
  FieldType["largeText"] = "TextArea";
  FieldType["collection"] = "Collection";
  FieldType["duration"] = "Duration";
})(FieldType || (FieldType = {}));

/***/ }),

/***/ "./src/framework/model/ObjectDefinitionRegistry.ts":
/*!*********************************************************!*\
  !*** ./src/framework/model/ObjectDefinitionRegistry.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectDefinitionRegistry": () => (/* binding */ ObjectDefinitionRegistry)
/* harmony export */ });
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicFieldOperations */ "./src/framework/model/BasicFieldOperations.ts");




const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('object-definition-registry');
class ObjectDefinitionRegistry {
  constructor() {
    this.definitions = [];
  }

  static getInstance() {
    if (!ObjectDefinitionRegistry._instance) {
      ObjectDefinitionRegistry._instance = new ObjectDefinitionRegistry();
    }

    return ObjectDefinitionRegistry._instance;
  }

  findDefinition(id) {
    let result = null;
    const index = this.definitions.findIndex(definition => definition.id === id);

    if (index >= 0) {
      result = this.definitions[index];
    }

    return result;
  }

  addDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields = true, idFieldName = _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__.FIELD_ID) {
    logger(`Adding definition for ${id} with name ${displayName}`);
    let result = this.findDefinition(id);

    if (result) {
      return result;
    } else {
      let definition = _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__.BasicObjectDefinitionFactory.getInstance().createBasicObjectDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields, idFieldName);
      this.definitions.push(definition);
      return definition;
    }
  }

  createInstanceFromDef(definition) {
    logger(`Creating instance for definition ${definition.displayName}`);
    let result = {};
    const fieldOps = new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_3__.BasicFieldOperations();
    definition.fields.forEach(fieldDef => {
      if (fieldDef.generator && fieldDef.generator.onCreation) {
        let fieldValue = fieldDef.generator.generator.generate(fieldDef, true);

        switch (fieldDef.type) {
          case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.date:
          case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.datetime:
            {
              break;
            }

          default:
            {
              fieldValue = fieldOps.formatValue(fieldDef, fieldValue);
              break;
            }
        }

        logger(`Setting default values for ${fieldDef.displayName} to ${fieldValue}`);
        result[fieldDef.id] = fieldValue;
      }

      if (fieldDef.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.collection) {
        result[fieldDef.id] = [];
      }
    });
    return result;
  }

  createInstance(id) {
    logger(`Creating instance for definition ${id}`);
    let result = {};
    const definition = this.findDefinition(id);

    if (definition) {
      result = this.createInstanceFromDef(definition);
    }

    return result;
  }

}

/***/ }),

/***/ "./src/framework/network/ApiUtil.ts":
/*!******************************************!*\
  !*** ./src/framework/network/ApiUtil.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUtil": () => (/* binding */ ApiUtil)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const apiLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('api-ts');
const apiResultsLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('api-ts-results');
class ApiUtil {
  static getInstance() {
    if (!ApiUtil._instance) {
      ApiUtil._instance = new ApiUtil();
    }

    return ApiUtil._instance;
  }

  async postFetchJSON(url, query) {
    const postParameters = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    };
    const response = await fetch(url, postParameters);
    return response.json();
  }
  /*
      Utility function for calling JSON POST requests
      Parameters:
      1.  URL to send the POST request too;
      2.  parameters object whose attribute (name/values) are the request parameters; and
      3.  A function to receive the results when the fetch has completed
          The callback function should have the following form
          callback (jsonDataReturned, httpStatusCode)
          a)  A successful fetch will return the JSON data in the first parameter and a status code of the server
          b)  Parameters that cannot be converted to JSON format will give a null data and code 404
          c)  A server error will give that code and no data
    */


  apiFetchJSONWithPost(request) {
    apiLogger(`Executing fetch with URL ${request.originalRequest.url} with body ${request.originalRequest.params}`);

    try {
      JSON.stringify(request.originalRequest.params);
    } catch (error) {
      apiLogger('Unable to convert parameters to JSON');
      apiLogger(request.originalRequest.params, 100);
      request.callback(null, 404, request.queueType, request.requestId);
    }

    const postParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...request.originalRequest.params
      })
    };
    this.fetchJSON(request.originalRequest.url, postParameters, request.callback, request.queueType, request.requestId);
  }

  apiFetchJSONWithGet(request) {
    apiLogger(`Executing GET fetch with URL ${request.originalRequest.url} with id ${request.originalRequest.params.id}`);
    const getParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += `/${request.originalRequest.params.id}`;
    this.fetchJSON(request.originalRequest.url, getParameters, request.callback, request.queueType, request.requestId);
  }

  apiFetchJSONWithDelete(request) {
    apiLogger(`Executing DELETE fetch with URL ${request.originalRequest.url} with id ${request.originalRequest.params.id}`);
    const delParameters = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += `/${request.originalRequest.params.id}`;
    this.fetchJSON(request.originalRequest.url, delParameters, request.callback, request.queueType, request.requestId);
  }

  apiFetchJSONWithPut(request) {
    apiLogger(`Executing PUT fetch with URL ${request.originalRequest.url} with id ${request.originalRequest.params.id}`);
    const putParameters = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...request.originalRequest.params
      })
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += `/${request.originalRequest.params.id}`;
    this.fetchJSON(request.originalRequest.url, putParameters, request.callback, request.queueType, request.requestId);
  }

  fetchJSON(url, parameters, callback, queueType, requestId) {
    fetch(url, parameters).then(response => {
      apiLogger(`Response code was ${response.status}`);

      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }

      if (response.status === 400) {
        apiResultsLogger(response.json());
      }
    }).then(data => {
      apiResultsLogger(data);
      callback(data, 200, queueType, requestId);
    }).catch(error => {
      apiLogger(error);
      callback(null, 500, queueType, requestId);
    });
  }

}

/***/ }),

/***/ "./src/framework/network/CallbackRegistry.ts":
/*!***************************************************!*\
  !*** ./src/framework/network/CallbackRegistry.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackRegistry": () => (/* binding */ CallbackRegistry)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('callback-registry');
class CallbackRegistry {
  callbacks = [];

  constructor() {}

  static getInstance() {
    if (!CallbackRegistry._instance) {
      CallbackRegistry._instance = new CallbackRegistry();
    }

    return CallbackRegistry._instance;
  }

  addRegisterCallback(id, fn) {
    logger(`Adding callback function with id ${id}`);
    this.callbacks.push({
      id: id,
      fn: fn
    });
  }

  getCallbackById(id) {
    const defaultFn = function (data, status, associatedStateName) {
      console.error(`Callback received with status ${status}, state name ${associatedStateName} where the callback was never registered`);
    };

    const foundIndex = this.callbacks.findIndex(callback => callback.id === id);

    if (foundIndex >= 0) {
      return this.callbacks[foundIndex].fn;
    }

    return defaultFn;
  }

}

/***/ }),

/***/ "./src/framework/network/DownloadManager.ts":
/*!**************************************************!*\
  !*** ./src/framework/network/DownloadManager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadManager": () => (/* binding */ DownloadManager)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/framework/network/Types.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CallbackRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallbackRegistry */ "./src/framework/network/CallbackRegistry.ts");
/* harmony import */ var _OfflineManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfflineManager */ "./src/framework/network/OfflineManager.ts");
/* harmony import */ var _ApiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApiUtil */ "./src/framework/network/ApiUtil.ts");






const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('dm-api-ts');
class DownloadManager {
  constructor() {
    this.backgroundQueue = [];
    this.priorityQueue = [];
    this.inProgress = [];
    this.backgroundChangeListener = null;
    this.priorityChangeListener = null;
    this.callbackForQueueRequest = this.callbackForQueueRequest.bind(this);
  }

  static getInstance() {
    if (!DownloadManager._instance) {
      DownloadManager._instance = new DownloadManager();
    }

    return DownloadManager._instance;
  }

  processOfflineItems() {
    logger(`Checking for offline items`);
    _OfflineManager__WEBPACK_IMPORTED_MODULE_3__.OfflineManager.getInstance().processQueuedResults();
  }

  setBackgroundChangeListener(uiChangeListener) {
    this.backgroundChangeListener = uiChangeListener;
  }

  setPriorityChangeListener(uiChangeListener) {
    this.priorityChangeListener = uiChangeListener;
  }

  getPriorityQueueCount() {
    return this.priorityQueue.length;
  }

  getBackgroundQueueCount() {
    return this.backgroundQueue.length;
  }

  addQLApiRequest(url, query, variables, callbackId, state, isPriority = false) {
    let request = {
      url: url,
      type: _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.POST,
      params: {
        query: query,
        variables: variables
      },
      callbackId: callbackId,
      associatedStateName: state
    };
    this.addApiRequest(request, isPriority);
  }

  addQLMutationRequest(url, mutation, variables, callbackId, state, isPriority = false) {
    let request = {
      url: url,
      type: _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.POST,
      params: {
        mutation: mutation,
        variables: variables
      },
      callbackId: callbackId,
      associatedStateName: state
    };
    this.addApiRequest(request, isPriority);
  }

  async addApiRequest(jsonRequest, isPriority = false, wasOffline = false) {
    // add a new requestId to the request for future tracking
    const requestId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
    logger(`Adding Queue Request ${requestId}`);
    logger(jsonRequest); // are we currently offline?

    if (_OfflineManager__WEBPACK_IMPORTED_MODULE_3__.OfflineManager.getInstance().areWeOffline()) {
      logger(`We are offline, queueing request for when server back online.`);
      _OfflineManager__WEBPACK_IMPORTED_MODULE_3__.OfflineManager.getInstance().addOfflineRequest(jsonRequest); // let the callback function know, with a custom code to let the receiver know there was a problem

      _CallbackRegistry__WEBPACK_IMPORTED_MODULE_2__.CallbackRegistry.getInstance().getCallbackById(jsonRequest.callbackId)(jsonRequest.params, 500, jsonRequest.associatedStateName, false);
      return;
    } // we are online (hopefully), continue for now, we will catch offline errors later


    if (isPriority) {
      let managerRequest = {
        originalRequest: jsonRequest,
        requestId: requestId,
        queueType: _Types__WEBPACK_IMPORTED_MODULE_0__.queueType.PRIORITY,
        callback: this.callbackForQueueRequest,
        wasOffline: wasOffline
      };
      this.priorityQueue.push(managerRequest);
      if (this.priorityChangeListener) this.priorityChangeListener.handleEventAddToQueue();
    } else {
      let managerRequest = {
        originalRequest: jsonRequest,
        requestId: requestId,
        queueType: _Types__WEBPACK_IMPORTED_MODULE_0__.queueType.BACKGROUND,
        callback: this.callbackForQueueRequest,
        wasOffline: wasOffline
      };
      this.backgroundQueue.push(managerRequest);
      if (this.backgroundChangeListener) this.backgroundChangeListener.handleEventAddToQueue();
    }

    this.processQueues();
  }

  async processPriorityQueue() {
    const queueItem = this.priorityQueue.shift();
    if (queueItem !== undefined) this.inProgress.push(queueItem);
    if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);
  }

  async processBackgroundQueue() {
    const queueItem = this.backgroundQueue.shift();
    if (queueItem !== undefined) this.inProgress.push(queueItem);
    if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);
  }

  async processQueues() {
    let totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;

    while (totalQueuedItems > 0) {
      logger(`processing queue, items remaining ${totalQueuedItems}`); // priority queue takes priority

      if (this.priorityQueue.length > 0) {
        await this.processPriorityQueue();
      } else if (this.backgroundQueue.length > 0) {
        await this.processBackgroundQueue();
      }

      totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;
    }
  }

  callbackForQueueRequest(jsonData, httpStatus, queueId, requestId) {
    // let the listeners know about the completion
    if (queueId === _Types__WEBPACK_IMPORTED_MODULE_0__.queueType.PRIORITY) {
      // priority
      if (this.priorityChangeListener) this.priorityChangeListener.handleEventRemoveFromQueue();
    } else if (this.backgroundChangeListener) this.backgroundChangeListener.handleEventRemoveFromQueue();

    logger(`received callback for queue ${queueId} request ${requestId} with status ${httpStatus}`); // find the item in the in progress

    const foundIndex = this.inProgress.findIndex(element => element.requestId === requestId);

    if (foundIndex >= 0) {
      // remove from in progress
      const queueItem = this.inProgress[foundIndex];
      this.inProgress.splice(foundIndex, 1);
      logger(queueItem); // are we offline http status of 500

      if (httpStatus === 500) {
        logger(`queue item ${queueItem.requestId} - server offline, queueing for later`);
        _OfflineManager__WEBPACK_IMPORTED_MODULE_3__.OfflineManager.getInstance().addOfflineRequest(queueItem.originalRequest); // let the callback function know, with a custom code to let the receiver know there was a problem

        _CallbackRegistry__WEBPACK_IMPORTED_MODULE_2__.CallbackRegistry.getInstance().getCallbackById(queueItem.originalRequest.callbackId)(queueItem.originalRequest.params, httpStatus, queueItem.originalRequest.associatedStateName, queueItem.wasOffline);
      } else {
        logger(`finished for queue item ${queueItem.requestId} with possible offline id of ${queueItem.originalRequest._id}`); // let the callback function know

        _CallbackRegistry__WEBPACK_IMPORTED_MODULE_2__.CallbackRegistry.getInstance().getCallbackById(queueItem.originalRequest.callbackId)(jsonData, httpStatus, queueItem.originalRequest.associatedStateName, queueItem.wasOffline);
      }
    }
  }

  initiateFetchForQueueItem(item) {
    logger(`Download Manager: initiating fetch for queue item ${item.requestId}`);
    logger(item);

    switch (item.originalRequest.type) {
      case _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.POST:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_4__.ApiUtil.getInstance().apiFetchJSONWithPost(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.GET:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_4__.ApiUtil.getInstance().apiFetchJSONWithGet(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.DELETE:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_4__.ApiUtil.getInstance().apiFetchJSONWithDelete(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_0__.RequestType.PUT:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_4__.ApiUtil.getInstance().apiFetchJSONWithPut(item);
          break;
        }
    }
  }

}

/***/ }),

/***/ "./src/framework/network/OfflineManager.ts":
/*!*************************************************!*\
  !*** ./src/framework/network/OfflineManager.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineManager": () => (/* binding */ OfflineManager)
/* harmony export */ });
/* harmony import */ var _Poller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poller */ "./src/framework/network/Poller.ts");
/* harmony import */ var _state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/IndexedDBStateManager */ "./src/framework/state/IndexedDBStateManager.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);






const logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('offline-manager');
class OfflineManager {
  static DB_NAME = 'offline.manager.db';
  static OBJECT_STORE = 'offline.manager.db.requests';

  constructor() {
    this.serverBackOnline = this.serverBackOnline.bind(this);
    const indexedDB = new _state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_1__.IndexedDBStateManager();
    indexedDB.initialise(OfflineManager.DB_NAME, [{
      name: OfflineManager.OBJECT_STORE,
      keyField: '_id'
    }]);
    this.persistence = indexedDB;
    this.persistence.addChangeListenerForName(OfflineManager.OBJECT_STORE, this);
  }

  static getInstance() {
    if (!OfflineManager._instance) {
      OfflineManager._instance = new OfflineManager();
    }

    return OfflineManager._instance;
  }

  processQueuedResults() {
    // find any requests in the persistence
    this.persistence.getStateByName(OfflineManager.OBJECT_STORE);
  }

  serverBackOnline() {
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager.getInstance().show('Server', 'Server is back online.');
    this.processQueuedResults();
  }

  areWeOffline() {
    return _Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().isPolling();
  }

  addOfflineRequest(jsonRequest) {
    if (!_Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().isPolling()) {
      _Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().startPolling(this.serverBackOnline);
      _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager.getInstance().show('Server', 'Server is offline, queueing local changes for when server is available', _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationType.warning);
    } // save the request with an id


    jsonRequest._id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
    logger('Adding offline request');
    logger(jsonRequest);
    this.persistence.addNewItemToState(OfflineManager.OBJECT_STORE, jsonRequest, false);
  }

  getListenerName() {
    return "Offline manager";
  }

  stateChanged(managerName, name, offlineResults) {
    if (offlineResults && offlineResults.length > 0) {
      _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationManager.getInstance().show('Queued Changes', `There are ${offlineResults.length} queued changes, sending to server.`, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__.NotificationType.warning);
      offlineResults.forEach(request => {
        this.persistence.removeItemFromState(OfflineManager.OBJECT_STORE, request, false);
        logger(`Processing offline request with priority and from offline`);
        logger(request);
        _DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(request, true, true);
      });
    }

    this.persistence.forceResetForGet(OfflineManager.OBJECT_STORE);
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {}

  filterResults(managerName, name, filterResults) {}

}

/***/ }),

/***/ "./src/framework/network/Poller.ts":
/*!*****************************************!*\
  !*** ./src/framework/network/Poller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Poller": () => (/* binding */ Poller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('poller');
class Poller {
  static INTERVAL_DEFAULT = 10000; // 30 seconds

  static URL_CALL = '/ping';
  interval = null;
  isPollingBool = false;

  constructor() {}

  static getInstance() {
    if (!Poller._instance) {
      Poller._instance = new Poller();
    }

    return Poller._instance;
  }

  startPolling(callback, delay = Poller.INTERVAL_DEFAULT) {
    this.isPollingBool = true;
    this.interval = setInterval(() => {
      logger(`Checking for server availability`);
      fetch(Poller.URL_CALL, {
        method: 'GET'
      }).then(response => {
        logger(`Response code was ${response.status} - server is now available`);
        this.stopPolling();
        callback();
      }).catch(error => {
        logger(error);
      });
    }, delay);
  }

  isPolling() {
    return this.isPollingBool;
  }

  stopPolling() {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
    this.isPollingBool = false;
  }

}

/***/ }),

/***/ "./src/framework/network/Types.ts":
/*!****************************************!*\
  !*** ./src/framework/network/Types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestType": () => (/* binding */ RequestType),
/* harmony export */   "queueType": () => (/* binding */ queueType)
/* harmony export */ });
let RequestType;

(function (RequestType) {
  RequestType[RequestType["POST"] = 0] = "POST";
  RequestType[RequestType["GET"] = 1] = "GET";
  RequestType[RequestType["PUT"] = 2] = "PUT";
  RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));

let queueType;

(function (queueType) {
  queueType[queueType["PRIORITY"] = 0] = "PRIORITY";
  queueType[queueType["BACKGROUND"] = 1] = "BACKGROUND";
})(queueType || (queueType = {}));

/***/ }),

/***/ "./src/framework/notification/BootstrapNotification.ts":
/*!*************************************************************!*\
  !*** ./src/framework/notification/BootstrapNotification.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapNotification": () => (/* binding */ BootstrapNotification)
/* harmony export */ });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./src/framework/notification/Notification.ts");
/* harmony import */ var _NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationManager */ "./src/framework/notification/NotificationManager.ts");


class BootstrapNotification extends _Notification__WEBPACK_IMPORTED_MODULE_0__.Notification {
  constructor(notificationManager) {
    super(notificationManager);
  } // Make the notification visible on the screen


  show(title, message, topOffset = 0, context, duration = 3000) {
    let containerId = this.notificationManager.getContainerId(); // convert the context to a background colour

    let bgColorClass = '';

    switch (context) {
      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.info:
        {
          bgColorClass = 'bg-info';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.warning:
        {
          bgColorClass = 'bg-warning';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.message:
        {
          bgColorClass = 'bg-primary';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.priority:
        {
          bgColorClass = 'bg-danger';
          break;
        }

      default:
        {
          bgColorClass = "bg-info";
        }
    } // Creating the notification container div


    const containerNode = document.createElement('div');
    containerNode.className = 'notification toast';
    containerNode.style.top = `${topOffset}px`;
    containerNode.setAttribute("role", "alert");
    containerNode.setAttribute("data-autohide", "false"); // Adding the notification title node

    const titleNode = document.createElement('div');
    titleNode.className = `toast-header text-white ${bgColorClass}`;
    const titleTextNode = document.createElement('strong');
    titleTextNode.className = "mr-auto";
    titleTextNode.textContent = title; // Adding a little button on the notification

    const closeButtonNode = document.createElement('button');
    closeButtonNode.className = 'ml-2 mb-1 close';
    closeButtonNode.textContent = 'x';
    closeButtonNode.addEventListener('click', () => {
      this.notificationManager.remove(containerNode);
    }); // Adding the notification message content node

    const messageNode = document.createElement('div');
    messageNode.className = 'toast-body';
    messageNode.textContent = message; // Appending the container with all the elements newly created

    titleNode.appendChild(titleTextNode);
    titleNode.appendChild(closeButtonNode);
    containerNode.appendChild(titleNode);
    containerNode.appendChild(messageNode);
    containerNode.classList.add(`is-${context}`); // Inserting the notification to the page body

    const containerEl = document.getElementById(containerId);
    if (containerEl) containerEl.appendChild(containerNode); // activate it
    // @ts-ignore

    $(".notification").toast('show'); // Default duration delay

    if (duration <= 0) {
      duration = 2000;
    }

    setTimeout(() => {
      this.notificationManager.remove(containerNode);
    }, duration);
    return containerNode;
  }

}

/***/ }),

/***/ "./src/framework/notification/Notification.ts":
/*!****************************************************!*\
  !*** ./src/framework/notification/Notification.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
class Notification {
  constructor(notificationManager) {
    this.show = this.show.bind(this);
    this.notificationManager = notificationManager; // Create DOM notification structure when instantiated

    this.containerId = this.notificationManager.getContainerId();
  } // Make the notification visible on the screen


}

/***/ }),

/***/ "./src/framework/notification/NotificationFactory.ts":
/*!***********************************************************!*\
  !*** ./src/framework/notification/NotificationFactory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationFactory": () => (/* binding */ NotificationFactory)
/* harmony export */ });
/* harmony import */ var _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootstrapNotification */ "./src/framework/notification/BootstrapNotification.ts");

class NotificationFactory {
  static getInstance() {
    if (!NotificationFactory._instance) {
      NotificationFactory._instance = new NotificationFactory();
    }

    return NotificationFactory._instance;
  }

  constructor() {}

  createNotification(manager) {
    return new _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__.BootstrapNotification(manager);
  }

}

/***/ }),

/***/ "./src/framework/notification/NotificationManager.ts":
/*!***********************************************************!*\
  !*** ./src/framework/notification/NotificationManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType),
/* harmony export */   "NotificationManager": () => (/* binding */ NotificationManager)
/* harmony export */ });
/* harmony import */ var _NotificationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationFactory */ "./src/framework/notification/NotificationFactory.ts");

let NotificationType;

(function (NotificationType) {
  NotificationType[NotificationType["info"] = 0] = "info";
  NotificationType[NotificationType["warning"] = 1] = "warning";
  NotificationType[NotificationType["message"] = 2] = "message";
  NotificationType[NotificationType["priority"] = 3] = "priority";
})(NotificationType || (NotificationType = {}));

class NotificationManager {
  constructor() {
    this.notifications = [];
    this.currentCount = 0;
    this.offsetPerNotification = 120;
    this.containerId = 'notifications';
    this.show = this.show.bind(this);
  }

  static getInstance() {
    if (!NotificationManager._instance) {
      NotificationManager._instance = new NotificationManager();
    }

    return NotificationManager._instance;
  }

  getContainerId() {
    return this.containerId;
  }

  show(title, message, context = NotificationType.info, duration = 5000) {
    const notification = _NotificationFactory__WEBPACK_IMPORTED_MODULE_0__.NotificationFactory.getInstance().createNotification(this);
    const notificationNode = notification.show(title, message, this.currentCount * this.offsetPerNotification, context, duration);
    this.currentCount++;
    this.notifications.push(notificationNode);
  }

  remove(notificationNode) {
    const foundIndex = this.notifications.findIndex(element => element === notificationNode);

    if (foundIndex >= 0) {
      this.notifications.splice(foundIndex, 1); // re-arrange the remaining notifications

      this.notifications.map((notificationNode, index) => {
        // @ts-ignore
        notificationNode.style.top = `${this.offsetPerNotification * index}px`;
      });
    }

    const parentEl = notificationNode.parentElement;
    if (parentEl !== null) parentEl.removeChild(notificationNode);
    this.currentCount--;
    if (this.currentCount < 0) this.currentCount = 0;
  }

}

/***/ }),

/***/ "./src/framework/security/SecurityManager.ts":
/*!***************************************************!*\
  !*** ./src/framework/security/SecurityManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityManager": () => (/* binding */ SecurityManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('security-manager');
class SecurityManager {
  hash = null;
  logoutEl = null;

  constructor() {}

  static getInstance() {
    if (!SecurityManager._instance) {
      SecurityManager._instance = new SecurityManager();
    }

    return SecurityManager._instance;
  }

  onDocumentLoaded(logoutElementId) {
    this.logoutEl = document.getElementById(logoutElementId); // find the secret hash for the current user (if any)

    const username = this.getLoggedInUsername();

    if (username && username.trim().length > 0) {
      logger(`found user ${username}`);
      this.hash = localStorage.getItem(username);

      if (this.hash) {
        sessionStorage.setItem(username, this.hash);
      } else {
        this.hash = sessionStorage.getItem(username);
      }

      localStorage.removeItem(username);
      logger(`found user ${username} hash - removed from local storage`);
    }

    if (this.logoutEl) {
      this.logoutEl.addEventListener('click', event => {
        localStorage.removeItem(username);
        sessionStorage.removeItem(username);
      });
    }
  }

  isLoggedIn() {
    let isLoggedIn = false;

    try {
      // @ts-ignore
      if (loggedInUser) {
        isLoggedIn = true;
      }
    } catch (error) {}

    return isLoggedIn;
  }

  getLoggedInUserId() {
    let result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser._id;
      }
    } catch (error) {}

    logger(`Logged in user id is ${result}`);
    return result;
  }

  getLoggedInUsername() {
    let result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser.username;
      }
    } catch (error) {}

    logger(`Logged in user is ${result}`);
    return result;
  }

  getCurrentUser() {
    return this.getLoggedInUserId();
  }

  encryptString(value) {
    let result = value;

    if (this.hash) {
      // @ts-ignore
      result = CryptoJS.AES.encrypt(value, this.hash).toString();
    }

    return result;
  }

  decryptString(value) {
    let result = value;

    if (this.hash) {
      // @ts-ignore
      result = CryptoJS.AES.decrypt(value, this.hash).toString(CryptoJS.enc.Utf8);
    }

    return result;
  }

  encryptObject(dataObj) {
    return this.encryptString(JSON.stringify(dataObj));
  }

  decryptObject(value) {
    return JSON.parse(this.decryptString(value));
  }

}

/***/ }),

/***/ "./src/framework/socket/ChatManager.ts":
/*!*********************************************!*\
  !*** ./src/framework/socket/ChatManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatManager": () => (/* binding */ ChatManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocketManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketManager */ "./src/framework/socket/SocketManager.ts");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types */ "./src/framework/socket/Types.ts");
/* harmony import */ var _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/BrowserStorageStateManager */ "./src/framework/state/BrowserStorageStateManager.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");







var UserStatus;

(function (UserStatus) {
  UserStatus[UserStatus["LoggedOut"] = 0] = "LoggedOut";
  UserStatus[UserStatus["LoggedIn"] = 1] = "LoggedIn";
})(UserStatus || (UserStatus = {}));

const cmLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-manager');
class ChatManager {
  static chatLogKey = 'im-board-chat-logs';
  static blockedListKey = 'im-board-blocked-list';
  static favouriteListKey = 'im-board-favourite-list'; // TO DO chat logs, blocked list, favourites per user

  blockedList = [];
  favouriteList = [];
  loggedInUsers = [];
  currentUsername = '';
  unreadListener = null;

  constructor() {
    cmLogger('Setting up chat logs, blocked list, and favourites');
    this.chatLogs = [];
    this.chatListeners = [];
    this.chatUserListeners = [];
    this.localStorage = new _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_4__.BrowserStorageStateManager(true, true, _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_5__.isSameRoom); // connect to the socket manager

    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().addChatReceiver(this); // bind the receiver methods

    this.receiveLogin = this.receiveLogin.bind(this);
    this.receiveLogout = this.receiveLogout.bind(this);
    this.receiveInvitation = this.receiveInvitation.bind(this);
    this.receiveMessage = this.receiveMessage.bind(this);
    this.receiveQueuedMessages = this.receiveQueuedMessages.bind(this);
    this.receiveQueuedInvites = this.receiveQueuedInvites.bind(this);
    this.receiveJoinedRoom = this.receiveJoinedRoom.bind(this);
    this.receivedLeftRoom = this.receivedLeftRoom.bind(this);
  }

  static getInstance() {
    if (!ChatManager._instance) {
      ChatManager._instance = new ChatManager();
    }

    return ChatManager._instance;
  }

  addChatEventHandler(receiver) {
    this.chatListeners.push(receiver);
  }

  addChatUserEventHandler(receiver) {
    this.chatUserListeners.push(receiver);
  }

  isUserLoggedIn(username) {
    return this.loggedInUsers.findIndex(name => name === username) >= 0;
  }

  receiveUserList(users) {
    this.loggedInUsers = users;
    this.chatUserListeners.forEach(listener => listener.handleLoggedInUsersUpdated(users));
  }

  addUserToBlockedList(username) {
    let index = this.blockedList.findIndex(blocked => blocked === username);

    if (index < 0) {
      this.blockedList.push(username);
      this.saveBlockedList();
      this.chatUserListeners.forEach(listener => listener.handleBlockedUsersChanged(this.favouriteList));
    }
  }

  removeUserFromBlockedList(username) {
    let index = this.blockedList.findIndex(blocked => blocked === username);

    if (index >= 0) {
      this.blockedList.splice(index, 1);
      this.saveBlockedList();
      this.chatUserListeners.forEach(listener => listener.handleBlockedUsersChanged(this.favouriteList));
    }
  }

  isUserInBlockedList(username) {
    return this.blockedList.findIndex(blocked => blocked === username) >= 0;
  }

  addUserToFavouriteList(username) {
    let index = this.favouriteList.findIndex(favourite => favourite === username);

    if (index < 0) {
      this.favouriteList.push(username);
      this.saveFavouriteList();
      this.chatUserListeners.forEach(listener => listener.handleFavouriteUsersChanged(this.favouriteList));
    }
  }

  removeUserFromFavouriteList(username) {
    let index = this.favouriteList.findIndex(blocked => blocked === username);

    if (index >= 0) {
      this.favouriteList.splice(index, 1);
      this.saveFavouriteList();
      this.chatUserListeners.forEach(listener => listener.handleFavouriteUsersChanged(this.favouriteList));
    }
  }

  isUserInFavouriteList(username) {
    return this.favouriteList.findIndex(user => user === username) >= 0;
  }

  getFavouriteUserList() {
    return [...this.favouriteList];
  }

  getBlockedUserList() {
    return [...this.blockedList];
  }

  setCurrentUser(username) {
    cmLogger(`Setting current user ${username}`);
    this.currentUsername = username; // load previous logs

    let savedLogs = this.localStorage.getStateByName(ChatManager.chatLogKey + this.currentUsername);
    cmLogger(savedLogs);

    if (savedLogs) {
      this.chatLogs = savedLogs;
    } // load previous blocked list


    let blockedList = this.localStorage.getStateByName(ChatManager.blockedListKey + this.currentUsername);
    cmLogger(blockedList);

    if (blockedList) {
      this.blockedList = blockedList;
    } // load previous favourite list


    let favouriteList = this.localStorage.getStateByName(ChatManager.favouriteListKey + this.currentUsername);
    cmLogger(favouriteList);

    if (favouriteList) {
      this.favouriteList = favouriteList;
    }

    this.chatListeners.forEach(listener => listener.handleChatLogsUpdated());
  }

  getCurrentUser() {
    return this.currentUsername;
  }

  receiveJoinedRoom(users) {
    // we get this for all changes to a room, if the username is us can safely ignore
    //if (users.username === this.currentUsername) return;
    if (users.type !== _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) return;
    let log = this.ensureChatLogExists(users.room);
    cmLogger(`User list for room ${users.room} - ${users.userList.join(',')}`);
    log.users = users.userList; // add a "message" for joined user

    let created = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss'));
    const joinDateTime = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm');
    let message = {
      from: '',
      created: created,
      room: users.room,
      priority: 0,
      type: _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom,
      message: `${users.username} joined the chat on ${joinDateTime}`
    };
    log.messages.push(message);
    this.saveLogs();
    this.chatListeners.forEach(listener => listener.handleChatLogUpdated(log, false));
  }

  receivedLeftRoom(users) {
    // we get this for all changes to a room, if the username is us can safely ignore
    if (users.type !== _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) return;
    if (users.username === this.currentUsername) return;
    let log = this.ensureChatLogExists(users.room);
    cmLogger(`User list for room ${users.room} - ${users.userList.join(',')}`);
    log.users = users.userList; // add a "message" for leaving user

    let created = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss'));
    const joinDateTime = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm');
    let message = {
      from: '',
      created: created,
      room: users.room,
      priority: 0,
      type: _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom,
      message: `${users.username} left the chat on ${joinDateTime}`
    };
    log.messages.push(message);
    this.saveLogs();
    this.chatListeners.forEach(listener => listener.handleChatLogUpdated(log, false));
  }

  receiveInvitation(invite) {
    if (invite.type !== _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) return; //  unless we are receiving an invite from someone in our blocked list, we automatically accept this invite

    if (!this.isUserInBlockedList(invite.from)) {
      cmLogger(`Invited to chat ${invite.room}`);
      const didChatAlreadyExist = this.doesChatRoomExist(invite.room);
      cmLogger(invite);
      cmLogger(`Letting the listeners know, if they are all happy to accept then we will join the room`);
      let happyToProceed = true;

      if (!didChatAlreadyExist) {
        this.chatListeners.forEach(listener => {
          if (!listener.handleNewInviteReceived(invite)) {
            happyToProceed = false;
          }
        });
      }

      if (happyToProceed) {
        let chatLog = this.ensureChatLogExists(invite.room); // keep a record of the type of invite

        chatLog.type = invite.type; // add the users in the invitation user list for the room, if not already added

        if (invite.userList) {
          invite.userList.forEach(username => {
            if (chatLog.users.findIndex(user => user === username) < 0) chatLog.users.push(invite.from);
          });
        }

        if (chatLog.users.findIndex(user => user === invite.from) < 0) chatLog.users.push(invite.from);
        this.saveLogs();
        cmLogger(`Joining chat ${invite.room}`);
        _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().joinChat(this.getCurrentUser(), invite.room, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
        this.chatListeners.forEach(listener => listener.handleChatLogUpdated(chatLog, false));
      }
    } else {
      cmLogger(`User ${invite.from} blocked`);
    }
  }

  receiveLogin(username) {
    cmLogger(`Handle login received for ${username}`); // keep track of the logged in users

    let index = this.loggedInUsers.findIndex(user => user === username);
    if (index < 0) this.loggedInUsers.push(username);
    cmLogger(this.loggedInUsers);
    this.chatUserListeners.forEach(listener => listener.handleLoggedInUsersUpdated(this.loggedInUsers)); // if the user in in favourites and not in blocked list passing this on to the listener

    if (!this.isUserInBlockedList(username) && this.isUserInFavouriteList(username)) {
      cmLogger(`User ${username} logging in`);
      this.chatUserListeners.forEach(listener => listener.handleFavouriteUserLoggedIn(username));
    }
  }

  receiveLogout(username) {
    let index = this.loggedInUsers.findIndex(user => user === username);
    if (index >= 0) this.loggedInUsers.splice(index, 1);
    this.chatUserListeners.forEach(listener => listener.handleLoggedInUsersUpdated(this.loggedInUsers)); // if the user in in favourites and not in blocked list passing this on to the listener

    if (!this.isUserInBlockedList(username) && this.isUserInFavouriteList(username)) {
      cmLogger(`User ${username} logging out`);
      this.chatUserListeners.forEach(listener => listener.handleFavouriteUserLoggedOut(username));
    }
  }

  receiveDecline(room, username, type) {
    if (type !== _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) return; // we get this for all changes to a room, if the username is us can safely ignore

    if (username === this.currentUsername) return;

    if (!this.isUserInBlockedList(username)) {
      cmLogger(`User ${username} declined invitation to room`);
      this.chatListeners.forEach(listener => listener.handleInvitationDeclined(room, username));
    }
  }

  setUnreadCountListener(listener) {
    this.unreadListener = listener;
  }

  touchChatLog(room) {
    let chatLog = this.ensureChatLogExists(room);
    chatLog.numOfNewMessages = 0;
    chatLog.lastViewed = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss'));
    this.emitUnreadMessageCountChanged();
    this.saveLogs();
  }

  getChatLog(room) {
    let log = null;
    let index = this.chatLogs.findIndex(log => log.roomName === room);
    if (index >= 0) log = this.chatLogs[index];
    return log;
  }

  receiveMessage(message, wasOffline = false) {
    if (message.type !== _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) return; // ignore messages that aren't for chat rooms
    // double check the message is not from us somehow

    if (message.from === this.getCurrentUser()) return; // don't receive messages from the blocked users

    if (!this.isUserInBlockedList(message.from)) {
      // ok, so we need to add the message to the chat log, increase the new message count, save the logs and pass it on
      let chatLog = this.ensureChatLogExists(message.room);
      this.addSenderToRoomIfNotAlreadyPresent(chatLog, message.from);
      this.addMessageToChatLog(chatLog, message);
      cmLogger(`Message received`);
      cmLogger(message);
      this.chatListeners.forEach(listener => listener.handleChatLogUpdated(chatLog, wasOffline));
    } else {
      cmLogger(`Message received from user ${message.from} - is in blocked list, not passed on.`);
    }
  }

  receiveQueuedInvites(invites) {
    // just loop through and process each invite
    invites.forEach(invite => {
      this.receiveInvitation(invite);
    });
  }

  receiveQueuedMessages(messages) {
    // just loop through a process each message
    messages.forEach(message => {
      this.receiveMessage(message, true);
    });
    this.chatListeners.forEach(listener => listener.handleOfflineMessagesReceived(messages));
  }

  joinChat(room) {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in

    this.ensureChatLogExists(room);
    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().joinChat(this.getCurrentUser(), room, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
  }

  leaveChat(room) {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in

    this.removeChatLog(room);
    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().leaveChat(this.getCurrentUser(), room, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
    this.emitUnreadMessageCountChanged();
  }

  login() {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in

    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().login(this.getCurrentUser()); // get the current user list

    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().getUserList(); // connect to the chat rooms already in logs

    this.chatLogs.forEach(log => {
      if (log.type === _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom) {
        _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().joinChat(this.currentUsername, log.roomName, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
      }
    });
  }

  logout() {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in

    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().logout(this.getCurrentUser());
  }

  declineInvite(room) {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in

    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().sendDeclineInvite(room, this.getCurrentUser(), _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
  }

  sendInvite(to, room, type = _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom, requiresAcceptDecline = false, subject = '') {
    if (this.getCurrentUser().trim().length === 0) return; // we are not logged in
    // can't accidentally send an invite to blacklisted

    if (this.isUserInBlockedList(to)) return; // only send an invite if the user isn't already in the room

    const log = this.ensureChatLogExists(room);

    if (log.users.findIndex(user => user === to) < 0) {
      _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().sendInvite(this.getCurrentUser(), to, room, type, requiresAcceptDecline, subject);
    }
  }

  sendMessage(room, content, priority = _Types__WEBPACK_IMPORTED_MODULE_3__.Priority.Normal, attachment) {
    if (this.getCurrentUser().trim().length === 0) return null; // we are not logged in

    let log = this.ensureChatLogExists(room); // send the message

    let created = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss'));
    _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().sendMessage(this.getCurrentUser(), room, content, created, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom, _Types__WEBPACK_IMPORTED_MODULE_3__.Priority.Normal, {}); // add the message to the chat log

    if (!attachment) attachment = {};
    let sent = {
      from: this.getCurrentUser(),
      room: room,
      message: content,
      created: created,
      priority: priority,
      type: _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom,
      attachment: attachment
    };
    this.addMessageToChatLog(log, sent);
    return sent;
  }

  getChatLogs() {
    return [...this.chatLogs];
  }

  startChatWithUser(username) {
    let roomName = null;

    if (username) {
      cmLogger(`Starting chat with ${username}`); // first thing, do we have a chat log with this user (and just this user) already?

      let chatLog = this.ensureChatLogExistsWithUser(username);
      this.chatListeners.forEach(listener => listener.handleChatLogUpdated(chatLog, false)); // invite the other user

      _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().sendInvite(this.getCurrentUser(), username, chatLog.roomName, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom, false, ''); // ok, lets connect to the server

      _SocketManager__WEBPACK_IMPORTED_MODULE_2__.SocketManager.getInstance().joinChat(this.getCurrentUser(), chatLog.roomName, _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom);
      roomName = chatLog.roomName;
    }

    return roomName;
  }

  saveLogs() {
    this.localStorage.setStateByName(ChatManager.chatLogKey + this.currentUsername, this.chatLogs, false);
  }

  saveBlockedList() {
    this.localStorage.setStateByName(ChatManager.blockedListKey + this.currentUsername, this.blockedList, false);
  }

  saveFavouriteList() {
    this.localStorage.setStateByName(ChatManager.favouriteListKey + this.currentUsername, this.favouriteList, false);
  }

  ensureChatLogExists(room) {
    let log;
    let index = this.chatLogs.findIndex(log => log.roomName === room);

    if (index < 0) {
      log = {
        roomName: room,
        users: [this.getCurrentUser()],
        messages: [],
        lastViewed: parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss')),
        numOfNewMessages: 0,
        type: _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom
      };
      this.chatLogs.push(log);
      this.saveLogs();
    } else {
      log = this.chatLogs[index];
    }

    return log;
  }

  ensureChatLogExistsWithUser(username) {
    let foundLog = null;
    let index = 0;

    while (index < this.chatLogs.length) {
      let log = this.chatLogs[index];

      if (log.users.length === 2) {
        // is the username in the two of this room?
        if (log.users.findIndex(value => value === username) >= 0) {
          foundLog = log;
          index = this.chatLogs.length;
        }
      }

      index++;
    }

    if (!foundLog) {
      foundLog = {
        roomName: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        users: [this.getCurrentUser(), username],
        messages: [],
        lastViewed: parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDDHHmmss')),
        numOfNewMessages: 0,
        type: _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ChatRoom
      };
      this.chatLogs.push(foundLog);
      this.saveLogs();
    }

    return foundLog;
  }

  doesChatRoomExist(room) {
    let index = this.chatLogs.findIndex(log => log.roomName === room);
    return index >= 0;
  }

  emitUnreadMessageCountChanged() {
    var _this$unreadListener;

    let unreadCount = 0;
    this.chatLogs.forEach(log => {
      unreadCount += log.numOfNewMessages;
    });
    (_this$unreadListener = this.unreadListener) === null || _this$unreadListener === void 0 ? void 0 : _this$unreadListener.countChanged(unreadCount);
  }

  addMessageToChatLog(log, message) {
    log.numOfNewMessages++;
    log.messages.push(message);
    this.emitUnreadMessageCountChanged();

    if (message.from === this.getCurrentUser()) {
      this.touchChatLog(log.roomName); // this will also save the logs
    } else {
      this.saveLogs();
    }
  }

  addSenderToRoomIfNotAlreadyPresent(chatLog, sender) {
    let index = chatLog.users.findIndex(user => user === sender);

    if (index < 0) {
      chatLog.users.push(sender);
    }
  }

  removeChatLog(room) {
    let index = this.chatLogs.findIndex(log => log.roomName === room);

    if (index >= 0) {
      cmLogger(`Removing Chat log for room ${room}`);
      let result = this.chatLogs.splice(index, 1);
      cmLogger(result.length);
      this.saveLogs();
    }
  }

}

/***/ }),

/***/ "./src/framework/socket/NotificationController.ts":
/*!********************************************************!*\
  !*** ./src/framework/socket/NotificationController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationController": () => (/* binding */ NotificationController)
/* harmony export */ });
/* harmony import */ var _ChatManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types */ "./src/framework/socket/Types.ts");




const notLogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('notification-controller');
class NotificationController {
  doNotDisturb = false;

  constructor() {
    this.chatManager = _ChatManager__WEBPACK_IMPORTED_MODULE_0__.ChatManager.getInstance();
    this.doNotDisturb = false;
    this.chatListeners = [];
    this.chatUserListeners = []; //bind the methods

    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    this.handleFavouriteUserLoggedIn = this.handleFavouriteUserLoggedIn.bind(this);
    this.handleFavouriteUserLoggedOut = this.handleFavouriteUserLoggedOut.bind(this);
    this.chatManager.addChatEventHandler(this);
    this.chatManager.addChatUserEventHandler(this);
  }

  static getInstance() {
    if (!NotificationController._instance) {
      NotificationController._instance = new NotificationController();
    }

    return NotificationController._instance;
  }

  handleInvitationDeclined(room, username) {
    if (this.doNotDisturb) return; // notify the user of the new chat

    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show('Room', `User ${username} has declined the invitation to join you.`, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.info, 7000);
  }

  handleNewInviteReceived(invite) {
    let result = true; // is this a chat room or score sheet?

    if (invite.type === _Types__WEBPACK_IMPORTED_MODULE_3__.InviteType.ScoreSheet) return true;
    if (this.doNotDisturb && !invite.requiresAcceptDecline) return result;

    if (invite.requiresAcceptDecline) {// notify the user of the invitation
      //result = controller.askUserAboutInvitation(invite); ///////TO FIX
    } else {
      // notify the user of the new chat
      _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show('Chat Room', `User ${invite.from} has invited you.`, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.info, 7000);
    }

    return result;
  }

  addListener(listener) {
    this.chatListeners.push(listener);
  }

  addUserListener(listener) {
    this.chatUserListeners.push(listener);
  }

  setDoNotDisturb(dontDisturbMe = true) {
    this.doNotDisturb = dontDisturbMe;
  }

  blackListUser(username, isBlackedListed = true) {
    if (isBlackedListed) {
      this.chatManager.addUserToBlockedList(username);
    } else {
      this.chatManager.removeUserFromBlockedList(username);
    }
  }

  favouriteUser(username, isFavourited = true) {
    if (isFavourited) {
      this.chatManager.addUserToFavouriteList(username);
    } else {
      this.chatManager.removeUserFromFavouriteList(username);
    }
  }

  isFavouriteUser(username) {
    return this.chatManager.isUserInFavouriteList(username);
  }

  isBlockedUser(username) {
    return this.chatManager.isUserInBlockedList(username);
  }

  handleChatLogsUpdated() {
    this.chatListeners.forEach(listener => listener.handleChatLogsUpdated());
  }

  handleChatLogUpdated(log, wasOffline = false) {
    notLogger(`Handle chat log updated`);
    notLogger(log); // pass on the changes

    this.chatListeners.forEach(listener => listener.handleChatLogUpdated(log, wasOffline));

    if (!wasOffline) {
      // get the last message added, it won't be from ourselves (the chat manager takes care of that)
      if (log.messages.length > 0) {
        const displayMessage = log.messages[log.messages.length - 1]; // provide visual notifications if do not disturb is not on, unless the message is marked priority

        if (this.doNotDisturb && displayMessage.priority !== _Types__WEBPACK_IMPORTED_MODULE_3__.Priority.Urgent) return;
        _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show(displayMessage.from, displayMessage.message, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.message, 3000);
      }
    }
  }

  handleLoggedInUsersUpdated(usernames) {
    notLogger(`Handle logged in users updated`);
    notLogger(usernames); // allow the view to change the user statuses

    this.chatUserListeners.forEach(listener => listener.handleLoggedInUsersUpdated(usernames));
  }

  handleFavouriteUserLoggedIn(username) {
    notLogger(`Handle favourite user ${username} logged in`); // allow the view to change the user statuses

    this.chatUserListeners.forEach(listener => listener.handleFavouriteUserLoggedIn(username)); // provide visual notifications if do not disturb is not on

    if (this.doNotDisturb) return;
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show(username, `User ${username} has logged in.`, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.warning, 5000);
  }

  handleFavouriteUserLoggedOut(username) {
    notLogger(`Handle favourite user ${username} logged out`); // allow the view to change the user statuses

    this.chatUserListeners.forEach(listener => listener.handleFavouriteUserLoggedOut(username)); // provide visual notifications if do not disturb is not on

    if (this.doNotDisturb) return;
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show(username, `User ${username} has logged out.`, _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.priority, 4000);
  }

  handleBlockedUsersChanged(usernames) {
    notLogger(`Handle blocked users changed to ${usernames}`);
    this.chatUserListeners.forEach(listener => listener.handleBlockedUsersChanged(usernames));
  }

  handleFavouriteUsersChanged(usernames) {
    notLogger(`Handle favourite users changed to ${usernames}`);
    this.chatUserListeners.forEach(listener => listener.handleFavouriteUsersChanged(usernames));
  }

  startChatWithUser(username) {
    return _ChatManager__WEBPACK_IMPORTED_MODULE_0__.ChatManager.getInstance().startChatWithUser(username);
  }

  handleChatStarted(log) {
    this.chatListeners.forEach(listener => listener.handleChatStarted(log));
  }

  handleOfflineMessagesReceived(messages) {
    // provide visual notifications if do not disturb is not on
    if (this.doNotDisturb) return;
    if (messages.length === 0) return;
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationManager.getInstance().show("Offline messages received", `You have received ${messages.length} messages since you last logged out.`);
  }

}

/***/ }),

/***/ "./src/framework/socket/SocketManager.ts":
/*!***********************************************!*\
  !*** ./src/framework/socket/SocketManager.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketManager": () => (/* binding */ SocketManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "./src/framework/socket/Types.ts");


const sDebug = debug__WEBPACK_IMPORTED_MODULE_0___default()('socket-ts');
class SocketManager {
  chatReceivers = [];

  constructor() {
    this.callbackForMessage = this.callbackForMessage.bind(this);
    this.callbackForData = this.callbackForData.bind(this);
    this.listener = null;
    this.socket = null;
    this.chatReceivers = [];
    this.callbackForMessage = this.callbackForMessage.bind(this);
    this.callbackForLogin = this.callbackForLogin.bind(this);
    this.callbackForLogout = this.callbackForLogout.bind(this);
    this.callbackForJoinRoom = this.callbackForJoinRoom.bind(this);
    this.callbackForExitRoom = this.callbackForExitRoom.bind(this);
    this.callbackForInvite = this.callbackForInvite.bind(this);
    this.callbackForChat = this.callbackForChat.bind(this);
    this.callbackForQueue = this.callbackForQueue.bind(this);
    this.callbackForUserList = this.callbackForUserList.bind(this);
    this.callbackForDeclineInvite = this.callbackForDeclineInvite.bind(this);
  }

  static getInstance() {
    if (!SocketManager._instance) {
      SocketManager._instance = new SocketManager();
    }

    return SocketManager._instance;
  }

  addChatReceiver(receiver) {
    this.chatReceivers.push(receiver);
  }

  setListener(listener) {
    sDebug('Setting listener');
    this.listener = listener;
    sDebug('Creating socket connection'); // @ts-ignore

    this.socket = io();
    sDebug('Waiting for messages');
    this.socket.on('message', this.callbackForMessage);
    this.socket.on('data', this.callbackForData);
    this.socket.on('login', this.callbackForLogin);
    this.socket.on('logout', this.callbackForLogout);
    this.socket.on('joinroom', this.callbackForJoinRoom);
    this.socket.on('exitroom', this.callbackForExitRoom);
    this.socket.on('invite', this.callbackForInvite);
    this.socket.on('declineinvite', this.callbackForDeclineInvite);
    this.socket.on('chat', this.callbackForChat);
    this.socket.on('queue', this.callbackForQueue);
    this.socket.on('userlist', this.callbackForUserList);
  }

  login(username) {
    this.socket.emit('login', {
      username
    });
  }

  logout(username) {
    this.socket.emit('logout', {
      username
    });
  }

  joinChat(username, room, type) {
    this.socket.emit('joinroom', {
      username,
      room,
      type
    });
  }

  leaveChat(username, room, type) {
    this.socket.emit('exitroom', {
      username,
      room,
      type
    });
  }

  sendInvite(from, to, room, type = _Types__WEBPACK_IMPORTED_MODULE_1__.InviteType.ChatRoom, requiresAcceptDecline = false, subject = '', attachment = {}) {
    let inviteObj = {
      from: from,
      to: to,
      room: room,
      type: type,
      requiresAcceptDecline: requiresAcceptDecline,
      subject: subject,
      attachment: attachment
    };
    sDebug(`Sending invite`);
    sDebug(inviteObj);
    this.socket.emit('invite', inviteObj);
  }

  sendMessage(from, room, message, created, type, priority = _Types__WEBPACK_IMPORTED_MODULE_1__.Priority.Normal, attachment = {}) {
    let messageObj = {
      from: from,
      room: room,
      message: message,
      created: created,
      priority: priority,
      type: type,
      attachment: attachment
    };
    this.socket.emit('chat', messageObj);
  }

  getUserList() {
    this.socket.emit('userlist');
  }

  sendDeclineInvite(room, from, type) {
    this.socket.emit('declineinvite', {
      room,
      from,
      type
    });
  }

  callbackForMessage(content) {
    sDebug(`Received message : ${content}`);

    try {
      sDebug(content); // should be a server side ChatMessage {room, message,user}

      const dataObj = JSON.parse(content);
      this.chatReceivers.forEach(receiver => receiver.receiveMessage(dataObj));
    } catch (err) {
      sDebug(err);
      sDebug('Not JSON data');
    }
  }

  callbackForLogin(message) {
    sDebug(`Received login : ${message}`);
    this.chatReceivers.forEach(receiver => receiver.receiveLogin(message));
  }

  callbackForUserList(message) {
    sDebug(`Received user list : ${message}`);
    this.chatReceivers.forEach(receiver => receiver.receiveUserList(message));
  }

  callbackForLogout(message) {
    sDebug(`Received logout : ${message}`);
    this.chatReceivers.forEach(receiver => receiver.receiveLogout(message));
  }

  callbackForJoinRoom(data) {
    sDebug(`Received joined room : ${data}`);

    try {
      const dataObj = JSON.parse(data);
      sDebug(dataObj);
      this.chatReceivers.forEach(receiver => receiver.receiveJoinedRoom(dataObj));
    } catch (err) {
      sDebug('Not JSON data');
    }
  }

  callbackForExitRoom(data) {
    sDebug(`Received left room : ${data}`);

    try {
      const dataObj = JSON.parse(data);
      sDebug(dataObj);
      this.chatReceivers.forEach(receiver => receiver.receivedLeftRoom(dataObj));
    } catch (err) {
      sDebug('Not JSON data');
    }
  }

  callbackForInvite(data) {
    sDebug(`Received invite : ${data}`);

    try {
      const dataObj = JSON.parse(data);
      sDebug(dataObj);
      this.chatReceivers.forEach(receiver => receiver.receiveInvitation(dataObj));
    } catch (err) {
      sDebug('Not JSON data');
    }
  }

  callbackForDeclineInvite(data) {
    sDebug(`Received declined invite : ${data}`);

    try {
      const dataObj = JSON.parse(data);
      sDebug(dataObj);
      this.chatReceivers.forEach(receiver => receiver.receiveDecline(dataObj.room, dataObj.username, dataObj.type));
    } catch (err) {
      sDebug(err);
      sDebug('Not JSON data');
    }
  }

  callbackForChat(content) {
    sDebug(`Received chat : ${content}`);

    try {
      // should be a server side ChatMessage {room, message,user}
      const dataObj = JSON.parse(content);
      sDebug(dataObj);
      this.chatReceivers.forEach(receiver => receiver.receiveMessage(dataObj));
    } catch (err) {
      sDebug('Not JSON data');
    }
  }

  callbackForQueue(data) {
    sDebug(`Received queued items : ${data}`);

    try {
      const dataObj = JSON.parse(data);
      sDebug(dataObj); // this object should contain two arrays of invites and messages

      if (dataObj.invites && dataObj.invites.length > 0) {
        this.chatReceivers.forEach(receiver => receiver.receiveQueuedInvites(dataObj.invites));
      }

      if (dataObj.messages && dataObj.messages.length > 0) {
        this.chatReceivers.forEach(receiver => receiver.receiveQueuedMessages(dataObj.messages));
      }
    } catch (err) {
      sDebug('Not JSON data');
    }
  }
  /*
  *
  *  expecting a JSON data object with the following attributes
  *  1.  type: "create"|"update"|"delete"
  *  2.  objectType: string name of the object type changed
  *  3.  data: the new representation of the object
  *  4.  user: application specific id for the user who made the change
  *        - the application view is required to implement getCurrentUser() to compare the user who made the change
  *
   */


  callbackForData(message) {
    sDebug(`Received data`);

    try {
      const dataObj = JSON.parse(message);
      sDebug(dataObj);
      if (this.listener === null) return;

      if (dataObj.user === this.listener.getCurrentUser()) {
        sDebug("change made by this user, ignoring");
      } else {
        sDebug("change made by another user, passing off to the application");
        this.listener.handleDataChangedByAnotherUser(dataObj);
      }
    } catch (err) {
      sDebug('Not JSON data');
    }
  }

}

/***/ }),

/***/ "./src/framework/socket/Types.ts":
/*!***************************************!*\
  !*** ./src/framework/socket/Types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* binding */ Priority),
/* harmony export */   "InviteType": () => (/* binding */ InviteType)
/* harmony export */ });
let Priority;

(function (Priority) {
  Priority[Priority["Normal"] = 0] = "Normal";
  Priority[Priority["High"] = 1] = "High";
  Priority[Priority["Urgent"] = 2] = "Urgent";
})(Priority || (Priority = {}));

let InviteType;

(function (InviteType) {
  InviteType[InviteType["ChatRoom"] = 0] = "ChatRoom";
  InviteType[InviteType["ScoreSheet"] = 1] = "ScoreSheet";
})(InviteType || (InviteType = {}));

/***/ }),

/***/ "./src/framework/state/AbstractStateManager.ts":
/*!*****************************************************!*\
  !*** ./src/framework/state/AbstractStateManager.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStateManager": () => (/* binding */ AbstractStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");
/* harmony import */ var _CommonTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonTypes */ "./src/framework/CommonTypes.ts");




const smLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-ts');
class AbstractStateManager {
  forceSaves = true;
  managerName = '';
  equalityFns = null;

  constructor(managerName, defaultEquality, fnPerState = null) {
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_2__.StateChangedDelegate(managerName);
    this.managerName = managerName;
    this.defaultEquality = defaultEquality;

    if (fnPerState) {
      this.equalityFns = fnPerState;
    }

    this.emitEvents();
    this.forceSaves = true;
  }

  receivedFilterResults(name, filterResults) {
    this.delegate.informChangeListenersForStateWithName(name, filterResults, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.FilterResults, null);
  }

  suppressEvents() {
    this.delegate.suppressEvents();
  }

  emitEvents() {
    this.delegate.emitEvents();
  }

  dontForceSavesOnAddRemoveUpdate() {
    this.forceSaves = false;
  }

  forceSavesOnAddRemoveUpdate() {
    this.forceSaves = true;
  }

  informChangeListenersForStateWithName(name, stateObjValue, eventType = _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.StateChanged, previousObjValue = null) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  }

  addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  }

  _findItemsInState(name, filters) {
    // default implementation assumes local values and simple comparisons
    let results = [];

    const state = this._getState(name);

    try {
      state.value.forEach(item => {
        let isMatch = true;
        filters.forEach(filter => {
          if (isMatch) {
            // don't bother with other filters if we have already failed
            let attributeValue = item[filter.attributeName];

            if (filter.evaluator) {
              isMatch = filter.evaluator(item, filter);
            } else {
              switch (filter.comparison) {
                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.isNull:
                  {
                    isMatch = !attributeValue;
                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.isNotNull:
                  {
                    if (attributeValue) {
                      isMatch = true;
                    }

                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.equals:
                  {
                    isMatch = attributeValue && attributeValue === filter.value;
                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThan:
                  {
                    isMatch = attributeValue && attributeValue < filter.value;
                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThan:
                  {
                    isMatch = attributeValue && attributeValue > filter.value;
                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThanEqual:
                  {
                    isMatch = attributeValue && attributeValue <= filter.value;
                    break;
                  }

                case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThanEqual:
                  {
                    isMatch = attributeValue && attributeValue >= filter.value;
                    break;
                  }
              }
            }
          }
        });
        if (isMatch) results.push(item);
      });
    } catch (err) {
      smLogger(`filter, state value for ${state.name} is not any array`);
    }

    return results;
  }

  addStateByName(name, stateObjForName) {
    this._ensureStatePresent(name);
    /* create a new state attribute for the application state */


    const state = {
      name,
      value: stateObjForName
    };
    /* get the current state value and replace it */

    this._replaceNamedStateInStorage(state);

    this.informChangeListenersForStateWithName(name, stateObjForName, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.StateChanged);
    return stateObjForName;
  }

  getStateByName(name) {
    this._ensureStatePresent(name);

    smLogger(`State Manager: Getting state for ${name}`);
    let stateValueObj = {}; // get the current state

    const state = this._getState(name);

    stateValueObj = state.value;
    smLogger(`State Manager: Found previous state for ${name}`);
    smLogger(stateValueObj);
    return stateValueObj;
  }

  setStateByName(name, stateObjectForName, informListeners = true) {
    this._ensureStatePresent(name);

    smLogger(`State Manager: Setting state for ${name}`);
    smLogger(stateObjectForName); // set the current state

    const state = this._getState(name);

    state.value = stateObjectForName;
    if (this.forceSaves) this._saveState(name, stateObjectForName);
    if (informListeners) this.informChangeListenersForStateWithName(name, stateObjectForName);
    return stateObjectForName;
  }

  addNewItemToState(name, item, isPersisted = false) {
    // assumes state is an array
    this._ensureStatePresent(name);

    smLogger(`State Manager: Adding item to state ${name}`); // const state = this.getStateByName(name);
    // state.push(item);
    // smLogger(state);

    this._addItemToState(name, item, isPersisted);

    this.informChangeListenersForStateWithName(name, item, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.ItemAdded);
  }

  findItemInState(name, item) {
    // assumes state is an array
    this._ensureStatePresent(name);

    let result = {};
    const state = this.getStateByName(name);
    const foundIndex = state.findIndex(element => this.getEqualityFnForName(name)(element, item));
    smLogger(`Finding item in state ${name} - found index ${foundIndex}`);
    smLogger(item);

    if (foundIndex >= 0) {
      result = state[foundIndex];
    }

    return result;
  }

  isItemInState(name, item) {
    // assumes state is an array
    this._ensureStatePresent(name);

    let result = false;
    const state = this.getStateByName(name);
    const foundIndex = state.findIndex(element => this.getEqualityFnForName(name)(element, item));

    if (foundIndex >= 0) {
      result = true;
    }

    return result;
  }

  removeItemFromState(name, item, isPersisted) {
    this._ensureStatePresent(name);

    let result = true;
    let oldItem = this.findItemInState(name, item); // remove the item from the state

    smLogger(`State Manager: Found item - removing, is persisted ${isPersisted}`);

    this._removeItemFromState(name, item, isPersisted);

    this.informChangeListenersForStateWithName(name, oldItem, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.ItemDeleted);
    return result;
  }

  updateItemInState(name, item, isPersisted) {
    this._ensureStatePresent(name);

    let result = true;
    let oldItem = this.findItemInState(name, item);
    smLogger('State Manager: Found item - replacing ');

    this._updateItemInState(name, item, isPersisted);

    this.informChangeListenersForStateWithName(name, item, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.ItemUpdated, oldItem);
    return result;
  }

  findItemsInState(name, filters) {
    this._ensureStatePresent(name);

    return this._findItemsInState(name, filters);
  }

  getType() {
    return _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateManagerType.Local;
  }

  getEqualityFnForName(name) {
    let result = this.defaultEquality;

    if (this.equalityFns) {
      const foundIndex = this.equalityFns.findIndex(fn => fn.name === name);
      if (foundIndex >= 0) result = this.equalityFns[foundIndex].equality;
    }

    return result;
  }

}

/***/ }),

/***/ "./src/framework/state/AggregateStateManager.ts":
/*!******************************************************!*\
  !*** ./src/framework/state/AggregateStateManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateStateManager": () => (/* binding */ AggregateStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");


const aggLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-aggregate');
class AggregateStateManager extends _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager {
  constructor(defaultEq, equalityFns = null) {
    super('aggregate', defaultEq, equalityFns);
    this.stateManagers = [];
    this.emitEvents();
  }

  addStateManager(stateManager, filters = [], emitEvents) {
    let mWF = {
      manager: stateManager,
      filters: filters
    };
    this.stateManagers.push(mWF);
    if (!emitEvents) stateManager.suppressEvents();
    aggLogger('adding state manager with/without filters');
  }

  _addNewNamedStateToStorage(state) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(state.name, managerWithFilters.filters)) {
        managerWithFilters.manager._addNewNamedStateToStorage(state);
      }
    });
  }

  _getState(name) {
    let state = {
      name: name,
      value: []
    };
    this.stateManagers.forEach(sm => {
      if (!this.stateNameInFilters(state.name, sm.filters)) {
        aggLogger(`get state from state manager for state ${name}`);
        aggLogger(sm.manager);

        sm.manager._getState(name);
      }
    }); // assuming the state manager is holding all the values

    if (this.stateManagers.length > 0) {
      state = this.stateManagers[0].manager._getState(name);
    }

    return state;
  }

  _ensureStatePresent(name) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(name, managerWithFilters.filters)) {
        managerWithFilters.manager._ensureStatePresent(name);
      }
    });
  }

  _replaceNamedStateInStorage(state) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(state.name, managerWithFilters.filters)) {
        managerWithFilters.manager._replaceNamedStateInStorage(state);
      }
    });
  }

  _saveState(name, stateObj) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger(`saving state in state manager for state ${name}`);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._saveState(name, stateObj);
      }
    });
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger(`adding item to state in  state manager for state ${name}, is persisted = ${isPersisted}`);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._addItemToState(name, stateObj, isPersisted);
      }
    });
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger(`removing item from state in state manager for state ${name}, is persisted = ${isPersisted}`);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._removeItemFromState(name, stateObj, isPersisted);
      }
    });
  }

  _updateItemInState(name, stateObj, isPersisted) {
    this.stateManagers.forEach(managerWithFilters => {
      if (!this.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger(`updating item in state in  state manager for state ${name}`);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._updateItemInState(name, stateObj, isPersisted);
      }
    });
  }

  _findItemsInState(name, filters) {
    let state = {
      name: name,
      value: []
    };
    this.stateManagers.forEach(sm => {
      if (!this.stateNameInFilters(state.name, sm.filters)) {
        aggLogger(`get state from state manager for state ${name}`);
        aggLogger(sm.manager);

        sm.manager._findItemsInState(name, filters);
      }
    }); // assuming the state manager is holding all the values

    if (this.stateManagers.length > 0) {
      state = this.stateManagers[0].manager._getState(name);
    }

    return state.value;
  }

  stateNameInFilters(name, filters) {
    let foundIndex = filters.findIndex(filter => filter === name);
    return foundIndex >= 0;
  }

}

/***/ }),

/***/ "./src/framework/state/AsyncStateManagerWrapper.ts":
/*!*********************************************************!*\
  !*** ./src/framework/state/AsyncStateManagerWrapper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncStateManagerWrapper": () => (/* binding */ AsyncStateManagerWrapper)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");


const asyncLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-async');
class AsyncStateManagerWrapper extends _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager {
  constructor(topLevelSM, wrappedSM, defaultEq) {
    super('async', defaultEq);
    this.topLevelSM = topLevelSM;
    this.wrappedSM = wrappedSM;
    this.forceSaves = false;
    this.wrappedSM.emitEvents();
    let stateNamesToMonitor = this.wrappedSM.getConfiguredStateNames();
    this.stateChanged = this.stateChanged.bind(this);
    this.stateChangedItemAdded = this.stateChangedItemAdded.bind(this);
    this.stateChangedItemRemoved = this.stateChangedItemRemoved.bind(this);
    this.stateChangedItemUpdated = this.stateChangedItemUpdated.bind(this);
    stateNamesToMonitor.forEach(stateName => {
      this.wrappedSM.addChangeListenerForName(stateName, this);
    });
  }

  getType() {
    return this.wrappedSM.getType();
  }

  _findItemsInState(name, filters) {
    asyncLogger(`finding items with filters`);
    return this.wrappedSM.findItemsInState(name, filters);
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    asyncLogger(`adding item to state ${name} - is persisted ${isPersisted}`);
    this.wrappedSM.addNewItemToState(name, stateObj, isPersisted);
  }

  _getState(name) {
    // assume wrapped SM is asynchronous
    // make the call to get state but supply the caller with an empty state for now
    asyncLogger(`getting state ${name}`);
    this.wrappedSM.getStateByName(name);
    return {
      name: name,
      value: []
    };
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    asyncLogger(`removing item from state ${name} is persisted ${isPersisted}`);
    this.wrappedSM.removeItemFromState(name, stateObj, isPersisted);
  }

  _updateItemInState(name, stateObj, isPersisted) {
    asyncLogger(`updating item in state ${name}`);
    this.wrappedSM.updateItemInState(name, stateObj, isPersisted);
  }

  _ensureStatePresent(name) {} // assume already present


  _addNewNamedStateToStorage(state) {} // assume already present


  _replaceNamedStateInStorage(state) {} // not implemented, not replacing state wholesale


  _saveState(name, stateObj) {} // not implemented, not replacing state wholesale


  stateChangedItemRemoved(managerName, name, itemRemoved) {} // not implemented, assumes called to wrapped SM worked


  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {} // not implemented, assumes called to wrapped SM worked


  stateChanged(managerName, name, newValue) {
    // received new state from the wrapped SM
    // pass the received state to the top level SM
    asyncLogger(`Wrapped SM has supplied new state ${name} passing to top level SM`);
    asyncLogger(newValue);
    this.topLevelSM.setStateByName(name, newValue);
  }

  stateChangedItemAdded(managerName, name, itemAdded) {
    asyncLogger(`Wrapped SM has supplied new completed item for state ${name} passing to top level SM`);
    this.topLevelSM.addNewItemToState(name, itemAdded, true);
  }

  getListenerName() {
    return "Async Manager";
  }

  filterResults(managerName, name, filterResults) {
    asyncLogger(`Wrapped SM has supplied filter results ${name} passing to top level SM`);
    this.topLevelSM.receivedFilterResults(name, filterResults);
  }

}

/***/ }),

/***/ "./src/framework/state/BrowserStorageStateManager.ts":
/*!***********************************************************!*\
  !*** ./src/framework/state/BrowserStorageStateManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStorageStateManager": () => (/* binding */ BrowserStorageStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");


const lsLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('browser-storage');
class BrowserStorageStateManager extends _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager {
  // @ts-ignore
  configuration = [];

  constructor(useLocalStorage = false, allowPersistence = false, defaultEq, equalFns = null) {
    super('browser', defaultEq, equalFns);
    this.storage = window.sessionStorage;
    this.allowPersistence = allowPersistence;
    if (useLocalStorage) this.storage = window.localStorage;
    this.forceSaves = true;
  }

  _ensureStatePresent(name) {
    if (this.storage.getItem(name) === null) {
      this._addNewNamedStateToStorage({
        name: name,
        value: []
      });
    }
  }

  _addNewNamedStateToStorage(state) {
    lsLogger(`Local Storage: Saving with key ${state.name}`);
    lsLogger(state);
    const stringifiedSaveData = JSON.stringify(state.value);
    lsLogger(stringifiedSaveData);
    this.storage.setItem(state.name, stringifiedSaveData);
  }

  _replaceNamedStateInStorage(state) {
    this._addNewNamedStateToStorage(state);
  }

  _getState(name) {
    let savedResults = [];
    lsLogger(`Local Storage: Loading with key ${name}`);
    const savedResultsJSON = this.storage.getItem(name);
    lsLogger(savedResultsJSON);

    if (savedResultsJSON !== null) {
      savedResults = JSON.parse(savedResultsJSON);
    }

    return {
      name: name,
      value: savedResults
    };
  }

  _saveState(name, newValue) {
    this._addNewNamedStateToStorage({
      name: name,
      value: newValue
    });
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    if (!isPersisted) {
      if (!this.allowPersistence) {
        return;
      }
    }

    let state = this._getState(name);

    lsLogger(`adding item to state ${name}`);
    lsLogger(stateObj);
    state.value.push(stateObj);

    this._replaceNamedStateInStorage(state);
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    let state = this._getState(name);

    const valueIndex = state.value.findIndex(element => this.getEqualityFnForName(name)(element, stateObj));

    if (valueIndex >= 0) {
      lsLogger(`removing item from state ${name}`);
      lsLogger(stateObj);
      state.value.splice(valueIndex, 1);
    }

    this._replaceNamedStateInStorage(state);
  }

  _updateItemInState(name, stateObj, isPersisted) {
    let state = this._getState(name);

    const valueIndex = state.value.findIndex(element => this.getEqualityFnForName(name)(element, stateObj));

    if (valueIndex >= 0) {
      state.value.splice(valueIndex, 1, stateObj);
      lsLogger(`updating item in state ${name}`);
      lsLogger(stateObj);
    }

    this._replaceNamedStateInStorage(state);
  }

  forceResetForGet(stateName) {}

  getConfiguredStateNames() {
    return this.configuration;
  }

  hasCompletedRun(stateName) {
    return false;
  }

  initialise(config) {
    this.configuration = config;
  }

}

/***/ }),

/***/ "./src/framework/state/GraphQLApiStateManager.ts":
/*!*******************************************************!*\
  !*** ./src/framework/state/GraphQLApiStateManager.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLApiStateManager": () => (/* binding */ GraphQLApiStateManager)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _network_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/Types */ "./src/framework/network/Types.ts");
/* harmony import */ var _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");
/* harmony import */ var _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/CallbackRegistry */ "./src/framework/network/CallbackRegistry.ts");






/*
*
*   WORK IN PROGRESS
*
 */

const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('state-manager-graphql');
class GraphQLApiStateManager {
  static FUNCTION_ID_ADD_ITEM = 'graphql.api.state.manager.add.item';
  static FUNCTION_ID_REMOVE_ITEM = 'graphql.api.state.manager.remove.item';
  static FUNCTION_ID_UPDATE_ITEM = 'graphql.api.state.manager.update.item';
  static FUNCTION_ID_GET_ITEMS = 'graphql.api.state.manager.get.items';
  configuration = [];

  constructor() {
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__.StateChangedDelegate('graphql');
    this.emitEvents();
    this.bHasCompletedRun = [];
    this.callbackForAddItem = this.callbackForAddItem.bind(this);
    this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
    this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
    this.callbackForGetItems = this.callbackForGetItems.bind(this);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(GraphQLApiStateManager.FUNCTION_ID_ADD_ITEM, this.callbackForAddItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(GraphQLApiStateManager.FUNCTION_ID_REMOVE_ITEM, this.callbackForRemoveItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(GraphQLApiStateManager.FUNCTION_ID_UPDATE_ITEM, this.callbackForUpdateItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(GraphQLApiStateManager.FUNCTION_ID_GET_ITEMS, this.callbackForGetItems);
  }

  static getInstance() {
    if (!GraphQLApiStateManager._instance) {
      GraphQLApiStateManager._instance = new GraphQLApiStateManager();
    }

    return GraphQLApiStateManager._instance;
  }

  getConfiguredStateNames() {
    let results = [];
    this.configuration.forEach(config => {
      results.push(config.stateName);
    });
    return results;
  }

  hasCompletedRun(stateName) {
    let result = false;
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      result = this.bHasCompletedRun[foundIndex];
    }

    return result;
  }

  setCompletedRun(stateName) {
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = true;
    }
  }

  forceResetForGet(stateName) {
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = false;
    }
  }

  initialise(config) {
    this.configuration = config;
    let runsComplete = [];
    this.configuration.forEach(configItem => {
      runsComplete.push(false);
    });
    this.bHasCompletedRun = runsComplete;
  }

  _addNewNamedStateToStorage(state) {
    /* assume model on the other end exists */
  }

  _getState(name) {
    logger(`Getting All ${name}`);

    if (this.hasCompletedRun(name)) {
      logger(`Getting All ${name} - not done - previously retrieved`);
    } else {
      let config = this.getConfigurationForStateName(name);

      if (config.isActive) {
        let query = config.apis.findAll;
        const jsonRequest = {
          url: config.serverURL + config.apiURL,
          type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST,
          params: {
            query
          },
          callbackId: GraphQLApiStateManager.FUNCTION_ID_GET_ITEMS,
          associatedStateName: name
        };
        logger(`Getting All ${name} with query "${query}"`);
        _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(jsonRequest, true);
      } else {
        logger(`No configuration for state ${name}`);
      }
    }

    let state = {
      name: name,
      value: []
    };
    return state;
  }

  _ensureStatePresent(name) {
    /* assume state exists */
  }

  _replaceNamedStateInStorage(state) {
    /* not going to replace all state */
  }

  _saveState(name, stateObj) {
    /* not going to replace all state */
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    if (isPersisted) return; // dont add complete objects to the state - they are already processed

    logger(`Adding item to ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addQLApiRequest(config.serverURL + config.apiURL, config.apis.create, {
        data: stateObj
      }, GraphQLApiStateManager.FUNCTION_ID_ADD_ITEM, name, false);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    if (isPersisted) return; // dont remove complete objects to the state - they are already processed

    logger(`Removing item to ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      let identifier = stateObj.id;

      if (config.idField) {
        identifier = stateObj[config.idField];
      }

      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addQLApiRequest(config.serverURL + config.apiURL, config.apis.destroy, {
        identifier: identifier
      }, GraphQLApiStateManager.FUNCTION_ID_UPDATE_ITEM, name, false);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  _updateItemInState(name, stateObj, isPersisted) {
    if (isPersisted) return; // dont update complete objects to the state - they are already processed

    logger(`Updating item in ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addQLApiRequest(config.serverURL + config.apiURL, config.apis.update, {
        data: stateObj
      }, GraphQLApiStateManager.FUNCTION_ID_REMOVE_ITEM, name, false);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  }

  addNewItemToState(name, item, isPersisted) {
    this._addItemToState(name, item, isPersisted);
  }

  emitEvents() {
    this.delegate.emitEvents();
  }

  findItemInState(name, item) {
    throw Error("not implemented");
  }

  getStateByName(name) {
    this._getState(name);
  }

  informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  }

  isItemInState(name, item) {
    return true;
  }

  removeItemFromState(name, item, isPersisted) {
    this._removeItemFromState(name, item, isPersisted);

    return true;
  }

  setStateByName(name, stateObjectForName, informListeners) {}

  suppressEvents() {
    this.delegate.suppressEvents();
  }

  updateItemInState(name, item, isPersisted) {
    this._updateItemInState(name, item, isPersisted);

    return true;
  }

  _findItemsInState(name, filters) {
    return [];
  }

  findItemsInState(name, filters) {
    return [];
  }

  getType() {
    return _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateManagerType.AsyncRemote;
  }

  getConfigurationForStateName(name) {
    let config = {
      stateName: name,
      serverURL: '',
      apiURL: '/graphql',
      apis: {
        findAll: '',
        create: '',
        destroy: '',
        update: '',
        find: ''
      },
      data: {
        findAll: '',
        create: '',
        destroy: '',
        update: '',
        find: ''
      },
      isActive: false
    };
    let foundIndex = this.configuration.findIndex(config => config.stateName === name);

    if (foundIndex >= 0) {
      config = this.configuration[foundIndex];
    }

    return config;
  }

  callbackForRemoveItem(data, status, associatedStateName) {
    logger(`callback for remove item for state ${associatedStateName} with status ${status} - not forwarded`);

    if (status >= 200 && status <= 299) {// do we have any data?
    }

    logger(data);
  }

  callbackForUpdateItem(data, status, associatedStateName) {
    logger(`callback for update item for state ${associatedStateName} with status ${status} - not forwarded`);

    if (status >= 200 && status <= 299) {// do we have any data?
    }

    logger(data);
  }

  callbackForGetItems(data, status, associatedStateName) {
    logger(`callback for get items for state ${associatedStateName} with status ${status} - FORWARDING`);

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);
      let config = this.getConfigurationForStateName(associatedStateName);
      let dataAttribute = config.data.findAll;
      this.setCompletedRun(associatedStateName);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data.data[dataAttribute], _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.StateChanged, null);
    }
  }

  callbackForAddItem(data, status, associatedStateName, wasOffline) {
    logger(`callback for add item for state ${associatedStateName} with status ${status} - FORWARDING`);

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);

      if (!wasOffline) {
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemAdded, null);
      } else {
        logger('Item was added offline, update the current data');
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemUpdated, null);
      }
    } // did the call fail? (server loss)


    if (status === 500) {
      logger(`Item adding - offline, but will be queued later`);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemAdded, null);
    }
  }

}

/***/ }),

/***/ "./src/framework/state/IndexedDBStateManager.ts":
/*!******************************************************!*\
  !*** ./src/framework/state/IndexedDBStateManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexedDBStateManager": () => (/* binding */ IndexedDBStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");




const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('indexeddb-ts');
class IndexedDBStateManager {
  constructor() {
    this.dbName = 'default';
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_3__.StateChangedDelegate('indexeddb');
    this.emitEvents();
    this.bHasCompletedRun = [];
    this.collections = [];
    this.callbackForAddItem = this.callbackForAddItem.bind(this);
    this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
    this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
    this.callbackForGetItems = this.callbackForGetItems.bind(this);
  }

  static getInstance() {
    if (!IndexedDBStateManager.instance) {
      IndexedDBStateManager.instance = new IndexedDBStateManager();
    }

    return IndexedDBStateManager.instance;
  }

  hasCompletedRun(stateName) {
    let result = false;
    let foundIndex = this.collections.findIndex(collection => collection.name === stateName);

    if (foundIndex >= 0) {
      result = this.bHasCompletedRun[foundIndex];
    }

    return result;
  }

  setCompletedRun(stateName) {
    let foundIndex = this.collections.findIndex(collection => collection.name === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = true;
    }
  }

  forceResetForGet(stateName) {
    let foundIndex = this.collections.findIndex(collection => collection.name === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = false;
    }
  }

  async initialise(dbName, collections) {
    logger(`opening database for ${dbName} with collections`);
    logger(collections);
    this.dbName = dbName;
    this.collections = collections;
    let runsComplete = [];
    this.collections.forEach(collection => {
      runsComplete.push(false);
    });
    this.bHasCompletedRun = runsComplete;
    await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(dbName, 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        collections.forEach(collection => {
          logger(`creating collection for ${collection.name} with key ${collection.keyField}`);
          db.createObjectStore(collection.name, {
            keyPath: collection.keyField,
            autoIncrement: false
          });
        });
      },

      blocked() {// …
      },

      blocking() {// …
      },

      terminated() {// …
      }

    });
  }

  _addNewNamedStateToStorage(state) {}

  _getState(name) {
    if (this.hasCompletedRun(name)) {
      logger(`Getting All ${name} - not done - previously retrieved`);
    } else {
      logger(`getting state ${name}`);
      this.getWithCollectionKey(name, this.getKeyFieldForKey(name));
    }

    let state = {
      name: name,
      value: []
    };
    return state;
  }

  _ensureStatePresent(name) {} // should be present with initialise


  _replaceNamedStateInStorage(state) {
    let fn = async () => {
      logger(`replacing item in storage ${state.name}`);
      logger(state.value);
      await this.removeAllItemsFromCollectionKey(state.name, this.getKeyFieldForKey(state.name));
      await this.saveWithCollectionKey(state.name, state.value, this.getKeyFieldForKey(state.name));
    };

    fn();
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    if (isPersisted) return;
    this.addNewItemToCollection(name, stateObj, this.getKeyFieldForKey(name));
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    if (isPersisted) return;
    this.removeItemFromCollection(name, stateObj, this.getKeyFieldForKey(name));
  }

  _updateItemInState(name, stateObj, isPersisted) {
    if (isPersisted) return;
    this.updateItemInCollection(name, stateObj, this.getKeyFieldForKey(name));
  }

  _saveState(name, stateObj) {
    let fn = async () => {
      logger(`saving state ${name}`);
      await this.removeAllItemsFromCollectionKey(name, this.getKeyFieldForKey(name));
      await this.saveWithCollectionKey(name, stateObj, this.getKeyFieldForKey(name));
    };

    fn();
  }

  async saveWithCollectionKey(key, saveData, keyField = 'id') {
    logger(`Saving array with key ${key}`);
    logger(saveData);
    let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

    let transaction = db.transaction([key], "readwrite");

    transaction.oncomplete = function (ev) {
      logger('Success');
      logger(ev);
    };

    transaction.onerror = function (ev) {
      logger('Error');
      logger(ev);
    }; // @ts-ignore


    let objectStore = transaction.store; // @ts-ignore

    await this.saveItemsToCollection(objectStore, saveData, keyField);
  }
  /* add a new item to the local storage if not already there */


  async addNewItemToCollection(key, item, keyField = 'id') {
    if (item !== null) {
      logger(`Adding with key ${key}`);
      logger(item);
      let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

      let transaction = db.transaction([key], "readwrite").objectStore(key).add(item);

      transaction.oncomplete = function (ev) {
        logger('Success');
        logger(ev);
      };

      transaction.onerror = function (ev) {
        logger('Error');
        logger(ev);
      };

      this.callbackForAddItem(item, key);
    }
  }

  async removeItemFromCollection(key, item, keyField = 'id') {
    if (item !== null) {
      logger(`Removing with key ${key} item ${item[keyField]}`);
      logger(item);
      let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

      let transaction = db.transaction([key], "readwrite").objectStore(key).delete(item[keyField]);

      transaction.oncomplete = function (ev) {
        logger('Success');
        logger(ev);
      };

      transaction.onerror = function (ev) {
        logger('Error');
        logger(ev);
      };

      await transaction.done;
      this.callbackForRemoveItem(item, key);
    }
  }

  async updateItemInCollection(key, item, keyField = 'id') {
    if (item) {
      logger(`Updating item in storage ${key}`);
      logger(item);
      let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

      let transaction = db.transaction([key], "readwrite").objectStore(key).put(item);

      transaction.oncomplete = function (ev) {
        logger('Success');
        logger(ev);
      };

      transaction.onerror = function (ev) {
        logger('Error');
        logger(ev);
      }; // @ts-ignore


      await transaction.done;
      this.callbackForUpdateItem(item, key);
    }
  }

  addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  }

  addNewItemToState(name, item, isPersisted) {
    this._addItemToState(name, item, isPersisted);
  }

  emitEvents() {
    this.delegate.emitEvents();
  }

  findItemInState(name, item) {
    throw Error("not implemented");
  }

  getStateByName(name) {
    this._getState(name);
  }

  informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  }

  isItemInState(name, item) {
    return true;
  }

  removeItemFromState(name, item, isPersisted) {
    logger(`Removing item from state ${name} is persisted ${isPersisted}`);
    logger(item);

    this._removeItemFromState(name, item, isPersisted);

    return true;
  }

  setStateByName(name, stateObjectForName, informListeners) {
    this._replaceNamedStateInStorage({
      name: name,
      value: stateObjectForName
    });

    if (informListeners) this.delegate.informChangeListenersForStateWithName(name, stateObjectForName, _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateEventType.StateChanged, null);
  }

  suppressEvents() {
    this.delegate.suppressEvents();
  }

  updateItemInState(name, item, isPersisted) {
    this._updateItemInState(name, item, isPersisted);

    return true;
  }

  async getWithCollectionKey(key, keyField = 'id') {
    let savedResults = [];
    logger(`Loading with key ${key}`);
    let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);
    await this.checkForObjectStore(db, key, keyField); // @ts-ignore

    let transaction = db.transaction([key]); // @ts-ignore

    let objectStore = transaction.store; // @ts-ignore

    let cursor = await objectStore.openCursor();

    while (cursor) {
      // @ts-ignore
      savedResults.push(cursor.value); // @ts-ignore

      cursor = await cursor.continue();
    }

    logger(savedResults);
    this.callbackForGetItems(savedResults, key);
  }

  getConfiguredStateNames() {
    let result = [];
    this.collections.forEach(collection => {
      result.push(collection.name);
    });
    return result;
  }

  _findItemsInState(name, filters) {
    return [];
  }

  findItemsInState(name, filters) {
    return [];
  }

  getType() {
    return _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateManagerType.AsyncLocal;
  }

  getKeyFieldForKey(key) {
    let result = '_id';
    const foundIndex = this.collections.findIndex(collection => collection.name === key);

    if (foundIndex >= 0) {
      result = this.collections[foundIndex].keyField;
    }

    return result;
  }

  async checkForObjectStore(db, key, keyField) {
    logger(`Checking for collection ${key}`);

    if (!db.objectStoreNames.contains(key)) {
      // @ts-ignore
      logger(`Checking for collection ${key} - NOT found, creating`);
      await db.createObjectStore(key, {
        keyPath: keyField,
        autoIncrement: false
      });
    }
  }

  async saveItemsToCollection(objectStore, saveData, keyField = 'id') {
    logger(`Saving items to collection`);
    saveData.forEach(data => {
      // @ts-ignore
      objectStore.add(data);
    });
  }

  async removeAllItemsFromCollectionKey(key, keyField = 'id') {
    logger(`Clearing collection ${key}`);
    let db = await (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);
    await this.checkForObjectStore(db, key, keyField); // @ts-ignore

    let transaction = db.transaction([key], "readwrite"); // @ts-ignore

    let objectStore = transaction.store; // @ts-ignore

    await objectStore.clear();
  }

  async callbackForRemoveItem(data, associatedStateName) {
    logger(`callback for remove item for state ${associatedStateName}  - not forwarded`);
    logger(data);
  }

  async callbackForUpdateItem(data, associatedStateName) {
    logger(`callback for update item for state ${associatedStateName}  - not forwarded`);
    logger(data);
  }

  callbackForGetItems(data, associatedStateName) {
    logger(`callback for get items for state ${associatedStateName} - FORWARDING`);
    logger(data);
    this.setCompletedRun(associatedStateName);
    this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateEventType.StateChanged, null);
  }

  async callbackForAddItem(data, associatedStateName) {
    logger(`callback for add item for state ${associatedStateName}  - FORWARDING`);
    logger(data);
    this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateEventType.ItemAdded, null);
  }

}

/***/ }),

/***/ "./src/framework/state/MemoryBufferStateManager.ts":
/*!*********************************************************!*\
  !*** ./src/framework/state/MemoryBufferStateManager.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryBufferStateManager": () => (/* binding */ MemoryBufferStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");


const msManager = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-ms');
/** To Do - make state unchangeable outside of this class (i.e. deep copies) */

class MemoryBufferStateManager extends _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager {
  constructor(defaultEq, equalFns = null) {
    super('memory', defaultEq, equalFns);
    this.applicationState = [];
    this.forceSaves = true;
  }

  _ensureStatePresent(name) {
    let foundIndex = this.applicationState.findIndex(element => element.name === name);

    if (foundIndex < 0) {
      let state = {
        name: name,
        value: []
      };
      this.applicationState.push(state);
    }
  }

  _addNewNamedStateToStorage(state) {
    msManager(`Adding new complete state ${name}`);
    msManager(state.value);
    this.applicationState.push(state);
  }

  _replaceNamedStateInStorage(state) {
    let foundIndex = this.applicationState.findIndex(element => element.name === state.name);

    if (foundIndex >= 0) {
      msManager(`replacing complete state ${name}`);
      msManager(state.value);
      this.applicationState.splice(foundIndex, 1, state);
    }
  }

  _getState(name) {
    // @ts-ignore
    let state = this.applicationState.find(element => element.name === name);
    msManager(`getting complete state ${name}`);
    msManager(state.value);
    return state;
  }

  _saveState(name, stateObject) {
    let foundIndex = this.applicationState.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      let state = this.applicationState[foundIndex];
      msManager(`SAVING complete state ${name}`);
      msManager(state.value);
      state.value = stateObject;
    }
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    if (!isPersisted) return; // dont add incomplete objects to the state

    let foundIndex = this.applicationState.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      let state = this.applicationState[foundIndex];
      msManager(`adding item to state ${name}`);
      msManager(stateObj);
      state.value.push(stateObj);
    }
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    let foundIndex = this.applicationState.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      let state = this.applicationState[foundIndex];
      const valueIndex = state.value.findIndex(element => this.getEqualityFnForName(name)(element, stateObj));

      if (valueIndex >= 0) {
        msManager(`removing item from state ${name}`);
        msManager(stateObj);
        state.value.splice(valueIndex, 1);
      }
    }
  }

  _updateItemInState(name, stateObj, isPersisted) {
    let foundIndex = this.applicationState.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      let state = this.applicationState[foundIndex];
      const valueIndex = state.value.findIndex(element => this.getEqualityFnForName(name)(element, stateObj));

      if (valueIndex >= 0) {
        state.value.splice(valueIndex, 1, stateObj);
        msManager(`updating item in state ${name}`);
        msManager(stateObj);
      }
    } else {
      this._addItemToState(name, stateObj, true);
    }
  }

}

/***/ }),

/***/ "./src/framework/state/RESTApiStateManager.ts":
/*!****************************************************!*\
  !*** ./src/framework/state/RESTApiStateManager.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTApiStateManager": () => (/* binding */ RESTApiStateManager)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _network_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/Types */ "./src/framework/network/Types.ts");
/* harmony import */ var _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");
/* harmony import */ var _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/CallbackRegistry */ "./src/framework/network/CallbackRegistry.ts");






const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('state-manager-api');
class RESTApiStateManager {
  static FUNCTION_ID_ADD_ITEM = 'rest.api.state.manager.add.item';
  static FUNCTION_ID_REMOVE_ITEM = 'rest.api.state.manager.remove.item';
  static FUNCTION_ID_UPDATE_ITEM = 'rest.api.state.manager.update.item';
  static FUNCTION_ID_GET_ITEMS = 'rest.api.state.manager.get.items';
  configuration = [];

  constructor() {
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__.StateChangedDelegate('restapi');
    this.emitEvents();
    this.bHasCompletedRun = [];
    this.callbackForAddItem = this.callbackForAddItem.bind(this);
    this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
    this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
    this.callbackForGetItems = this.callbackForGetItems.bind(this);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_ADD_ITEM, this.callbackForAddItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM, this.callbackForRemoveItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM, this.callbackForUpdateItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_GET_ITEMS, this.callbackForGetItems);
  }

  static getInstance() {
    if (!RESTApiStateManager._instance) {
      RESTApiStateManager._instance = new RESTApiStateManager();
    }

    return RESTApiStateManager._instance;
  }

  getConfiguredStateNames() {
    let results = [];
    this.configuration.forEach(config => {
      results.push(config.stateName);
    });
    return results;
  }

  hasCompletedRun(stateName) {
    let result = false;
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      result = this.bHasCompletedRun[foundIndex];
    }

    return result;
  }

  setCompletedRun(stateName) {
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = true;
    }
  }

  forceResetForGet(stateName) {
    let foundIndex = this.configuration.findIndex(config => config.stateName === stateName);

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = false;
    }
  }

  initialise(config) {
    this.configuration = config;
    let runsComplete = [];
    this.configuration.forEach(configItem => {
      runsComplete.push(false);
    });
    this.bHasCompletedRun = runsComplete;
  }

  _addNewNamedStateToStorage(state) {
    /* assume model on the other end exists */
  }

  _getState(name) {
    logger(`Getting All ${name}`);

    if (this.hasCompletedRun(name)) {
      logger(`Getting All ${name} - not done - previously retrieved`);
    } else {
      let config = this.getConfigurationForStateName(name);

      if (config.isActive) {
        const jsonRequest = {
          url: config.serverURL + config.api,
          type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.GET,
          params: {},
          callbackId: RESTApiStateManager.FUNCTION_ID_GET_ITEMS,
          associatedStateName: name
        };
        _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(jsonRequest, true);
      } else {
        logger(`No configuration for state ${name}`);
      }
    }

    let state = {
      name: name,
      value: []
    };
    return state;
  }

  _ensureStatePresent(name) {
    /* assume state exists */
  }

  _replaceNamedStateInStorage(state) {
    /* not going to replace all state */
  }

  _saveState(name, stateObj) {
    /* not going to replace all state */
  }

  _addItemToState(name, stateObj, isPersisted = false) {
    if (isPersisted) return; // dont add complete objects to the state - they are already processed

    logger(`Adding item to ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      const jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST,
        params: stateObj,
        callbackId: RESTApiStateManager.FUNCTION_ID_ADD_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  _removeItemFromState(name, stateObj, isPersisted) {
    if (isPersisted) return; // dont remove complete objects to the state - they are already processed

    logger(`Removing item from ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);
    let identifier = stateObj.id;

    if (config.idField) {
      identifier = stateObj[config.idField];
    }

    if (config.isActive) {
      const jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.DELETE,
        params: {
          id: identifier
        },
        callbackId: RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  _updateItemInState(name, stateObj, isPersisted) {
    if (isPersisted) return; // dont update complete objects to the state - they are already processed

    logger(`Updating item in ${name}`);
    logger(stateObj);
    let config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      const jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.PUT,
        params: stateObj,
        callbackId: RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__.DownloadManager.getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger(`No configuration for state ${name}`);
    }
  }

  addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  }

  addNewItemToState(name, item, isPersisted) {
    this._addItemToState(name, item, isPersisted);
  }

  emitEvents() {
    this.delegate.emitEvents();
  }

  findItemInState(name, item) {
    throw Error("not implemented");
  }

  getStateByName(name) {
    this._getState(name);
  }

  informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  }

  isItemInState(name, item) {
    return true;
  }

  removeItemFromState(name, item, isPersisted) {
    logger(`Removing item from state ${name} is persisted ${isPersisted}`);
    logger(item);

    this._removeItemFromState(name, item, isPersisted);

    return true;
  }

  setStateByName(name, stateObjectForName, informListeners) {}

  suppressEvents() {
    this.delegate.suppressEvents();
  }

  updateItemInState(name, item, isPersisted) {
    this._updateItemInState(name, item, isPersisted);

    return true;
  }

  _findItemsInState(name, filters) {
    // TO DO
    return [];
  }

  findItemsInState(name, filters) {
    return this._findItemsInState(name, filters);
  }

  getType() {
    return _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateManagerType.AsyncRemote;
  }

  getConfigurationForStateName(name) {
    let config = {
      stateName: name,
      serverURL: '',
      api: '',
      isActive: false
    };
    let foundIndex = this.configuration.findIndex(config => config.stateName === name);

    if (foundIndex >= 0) {
      config = this.configuration[foundIndex];
    }

    return config;
  }

  callbackForRemoveItem(data, status, associatedStateName) {
    logger(`callback for remove item for state ${associatedStateName} with status ${status} - not forwarded`);

    if (status >= 200 && status <= 299) {// do we have any data?
    }

    logger(data);
  }

  callbackForUpdateItem(data, status, associatedStateName) {
    logger(`callback for update item for state ${associatedStateName} with status ${status} - not forwarded`);

    if (status >= 200 && status <= 299) {// do we have any data?
    }

    logger(data);
  }

  callbackForGetItems(data, status, associatedStateName) {
    logger(`callback for get items for state ${associatedStateName} with status ${status} - FORWARDING`);
    logger(data);

    if (status >= 200 && status <= 299) {
      // do we have any data?
      this.setCompletedRun(associatedStateName);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.StateChanged, null);
    }
  }

  callbackForAddItem(data, status, associatedStateName, wasOffline) {
    logger(`callback for add item for state ${associatedStateName} with status ${status} - FORWARDING`);

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);

      if (!wasOffline) {
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemAdded, null);
      } else {
        logger('Item was added offline, update the current data');
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemUpdated, null);
      }
    } // did the call fail? (server loss)


    if (status === 500) {
      logger(data);
      logger(`Item adding - offline, but will be queued later`);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemAdded, null);
    }
  }

}

/***/ }),

/***/ "./src/framework/state/StateChangedDelegate.ts":
/*!*****************************************************!*\
  !*** ./src/framework/state/StateChangedDelegate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateChangedDelegate": () => (/* binding */ StateChangedDelegate)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


const smLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('state-manager-delegate');
class StateChangedDelegate {
  suppressEventEmits = false;

  constructor(managerName) {
    this.managerName = managerName;
    this.stateChangeListeners = [];
  }

  suppressEvents() {
    this.suppressEventEmits = true;
  }

  emitEvents() {
    this.suppressEventEmits = false;
  }

  informChangeListenersForStateWithName(name, stateObjValue, eventType = _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.StateChanged, previousObjValue = null) {
    smLogger(`State Manager: Informing state listeners of ${name}`);

    if (this.suppressEventEmits) {
      smLogger(`State Manager: Events suppressed`);
      return;
    }

    const foundIndex = this.stateChangeListeners.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      smLogger(`State Manager: Found state listeners of ${name} with event type ${eventType}`);
      /* let each state change listener know */

      const changeListenersForName = this.stateChangeListeners[foundIndex];
      changeListenersForName.listeners.forEach(listener => {
        smLogger(`State Manager: Found state listener of ${name} with name ${listener.getListenerName()} - informing`);

        try {
          switch (eventType) {
            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.StateChanged:
              {
                listener.stateChanged(this.managerName, name, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemAdded:
              {
                listener.stateChangedItemAdded(this.managerName, name, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemUpdated:
              {
                listener.stateChangedItemUpdated(this.managerName, name, previousObjValue, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.ItemDeleted:
              {
                listener.stateChangedItemRemoved(this.managerName, name, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.StateEventType.FilterResults:
              {
                listener.filterResults(this.managerName, name, stateObjValue);
                break;
              }
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
  /*
        Add a state listener for a given state name
        the listener should be a function with two parameters
        name - string - the name of the state variable that they want to be informed about
        stateObjValue - object - the new state value
       */


  addChangeListenerForName(name, listener) {
    this.ensureListenerSetupForName(name);
    smLogger(`State Manager: Adding state listener for ${name} with name ${listener.getListenerName()}`);
    const foundIndex = this.stateChangeListeners.findIndex(element => element.name === name);

    if (foundIndex >= 0) {
      smLogger(`State Manager: Adding state listener for ${name} with name ${listener.getListenerName()} with index ${foundIndex}`);
      let changeListenersForName = this.stateChangeListeners[foundIndex];
      changeListenersForName.listeners.push(listener);
    }
  }

  ensureListenerSetupForName(name) {
    const foundIndex = this.stateChangeListeners.findIndex(element => element.name === name);

    if (foundIndex < 0) {
      const listenersNameArrayPair = {
        name,
        listeners: []
      };
      this.stateChangeListeners.push(listenersNameArrayPair);
    }
  }

}

/***/ }),

/***/ "./src/framework/state/StateManager.ts":
/*!*********************************************!*\
  !*** ./src/framework/state/StateManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateEventType": () => (/* binding */ StateEventType),
/* harmony export */   "StateManagerType": () => (/* binding */ StateManagerType)
/* harmony export */ });
let StateEventType;

(function (StateEventType) {
  StateEventType[StateEventType["ItemAdded"] = 0] = "ItemAdded";
  StateEventType[StateEventType["ItemUpdated"] = 1] = "ItemUpdated";
  StateEventType[StateEventType["ItemDeleted"] = 2] = "ItemDeleted";
  StateEventType[StateEventType["StateChanged"] = 3] = "StateChanged";
  StateEventType[StateEventType["FilterResults"] = 4] = "FilterResults";
})(StateEventType || (StateEventType = {}));

let StateManagerType;

(function (StateManagerType) {
  StateManagerType[StateManagerType["Local"] = 0] = "Local";
  StateManagerType[StateManagerType["AsyncLocal"] = 1] = "AsyncLocal";
  StateManagerType[StateManagerType["AsyncRemote"] = 2] = "AsyncRemote";
})(StateManagerType || (StateManagerType = {}));

/***/ }),

/***/ "./src/framework/ui/ConfigurationTypes.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/ConfigurationTypes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAGGABLE_KEY_ID": () => (/* binding */ DRAGGABLE_KEY_ID),
/* harmony export */   "DRAGGABLE_TYPE": () => (/* binding */ DRAGGABLE_TYPE),
/* harmony export */   "DRAGGABLE_FROM": () => (/* binding */ DRAGGABLE_FROM),
/* harmony export */   "EXTRA_ACTION_ATTRIBUTE_NAME": () => (/* binding */ EXTRA_ACTION_ATTRIBUTE_NAME),
/* harmony export */   "Modifier": () => (/* binding */ Modifier),
/* harmony export */   "KeyType": () => (/* binding */ KeyType),
/* harmony export */   "SidebarLocation": () => (/* binding */ SidebarLocation),
/* harmony export */   "RowPosition": () => (/* binding */ RowPosition),
/* harmony export */   "SCREEN_WIDTH_LARGE": () => (/* binding */ SCREEN_WIDTH_LARGE),
/* harmony export */   "SCREEN_WIDTH_MEDIUM": () => (/* binding */ SCREEN_WIDTH_MEDIUM),
/* harmony export */   "SCREEN_WIDTH_SMALL": () => (/* binding */ SCREEN_WIDTH_SMALL)
/* harmony export */ });
const DRAGGABLE_KEY_ID = 'text/plain';
const DRAGGABLE_TYPE = 'draggedType';
const DRAGGABLE_FROM = 'draggedFrom';
const EXTRA_ACTION_ATTRIBUTE_NAME = 'view-extra-action';
let Modifier;

(function (Modifier) {
  Modifier[Modifier["normal"] = 0] = "normal";
  Modifier[Modifier["active"] = 1] = "active";
  Modifier[Modifier["inactive"] = 2] = "inactive";
  Modifier[Modifier["warning"] = 3] = "warning";
})(Modifier || (Modifier = {}));

let KeyType;

(function (KeyType) {
  KeyType[KeyType["number"] = 0] = "number";
  KeyType[KeyType["string"] = 1] = "string";
  KeyType[KeyType["boolean"] = 2] = "boolean";
  KeyType[KeyType["collection"] = 3] = "collection";
})(KeyType || (KeyType = {}));

let SidebarLocation;

(function (SidebarLocation) {
  SidebarLocation[SidebarLocation["top"] = 0] = "top";
  SidebarLocation[SidebarLocation["right"] = 1] = "right";
  SidebarLocation[SidebarLocation["left"] = 2] = "left";
  SidebarLocation[SidebarLocation["bottom"] = 3] = "bottom";
})(SidebarLocation || (SidebarLocation = {}));

let RowPosition;

(function (RowPosition) {
  RowPosition[RowPosition["first"] = 0] = "first";
  RowPosition[RowPosition["last"] = 1] = "last";
})(RowPosition || (RowPosition = {}));

const SCREEN_WIDTH_LARGE = 992;
const SCREEN_WIDTH_MEDIUM = 769;
const SCREEN_WIDTH_SMALL = 415;

/***/ }),

/***/ "./src/framework/ui/alert/AlertListener.ts":
/*!*************************************************!*\
  !*** ./src/framework/ui/alert/AlertListener.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
let AlertType;

(function (AlertType) {
  AlertType[AlertType["cancelled"] = 0] = "cancelled";
  AlertType[AlertType["confirmed"] = 1] = "confirmed";
})(AlertType || (AlertType = {}));

/***/ }),

/***/ "./src/framework/ui/alert/AlertManager.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/alert/AlertManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManager": () => (/* binding */ AlertManager)
/* harmony export */ });
/* harmony import */ var _AlertListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertListener */ "./src/framework/ui/alert/AlertListener.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


const ALERT_MODAL_ID = 'alert';
const ALERT_TITLE = 'alert-title';
const ALERT_CONTENT = 'alert-content';
const ALERT_CANCEL = 'alert-cancel';
const ALERT_CONFRIM = 'alert-confirm';
const ALERT_hideClass = "d-none";
const ALERT_showClass = "d-block";
const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('alert');
class AlertManager {
  constructor() {
    this.alertDiv = document.getElementById(ALERT_MODAL_ID);
    this.alertTitle = document.getElementById(ALERT_TITLE);
    this.alertContent = document.getElementById(ALERT_CONTENT);
    this.cancelButton = document.getElementById(ALERT_CANCEL);
    this.confirmButton = document.getElementById(ALERT_CONFRIM);
  }

  static getInstance() {
    if (!AlertManager._instance) {
      AlertManager._instance = new AlertManager();
    }

    return AlertManager._instance;
  }

  startAlert(listener, title, content, context) {
    this.alertTitle.innerHTML = title;
    this.alertContent.innerHTML = content; // @ts-ignore

    this.alertDiv.classList.remove(ALERT_hideClass); // @ts-ignore

    this.alertDiv.classList.add(ALERT_showClass);

    const confirmHandler = event => {
      logger(`Handling confirm event from alert`);
      listener.completed({
        outcome: _AlertListener__WEBPACK_IMPORTED_MODULE_0__.AlertType.confirmed,
        context: context
      }); // @ts-ignore

      this.alertDiv.classList.add(ALERT_hideClass); // @ts-ignore

      this.alertDiv.classList.remove(ALERT_showClass); // @ts-ignore

      event.target.removeEventListener('click', confirmHandler);
    };

    const cancelHandler = event => {
      logger(`Handling cancel event from alert`);
      listener.completed({
        outcome: _AlertListener__WEBPACK_IMPORTED_MODULE_0__.AlertType.cancelled,
        context: context
      }); // @ts-ignore

      this.alertDiv.classList.add(ALERT_hideClass); // @ts-ignore

      this.alertDiv.classList.remove(ALERT_showClass); // @ts-ignore

      event.target.removeEventListener('click', cancelHandler);
    };

    this.confirmButton.addEventListener('click', confirmHandler);
    this.cancelButton.addEventListener('click', cancelHandler);
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/BlockedUserView.ts":
/*!**************************************************!*\
  !*** ./src/framework/ui/chat/BlockedUserView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockedUserView": () => (/* binding */ BlockedUserView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "./src/framework/ui/view/renderer/ListViewRenderer.ts");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatTypes */ "./src/framework/ui/chat/ChatTypes.ts");







const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar');
class BlockedUserView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
  static getInstance(stateManager) {
    if (!BlockedUserView._instance) {
      BlockedUserView._instance = new BlockedUserView(stateManager);
    }

    return BlockedUserView._instance;
  }

  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'blockedUsers',
      dataSourceId: _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.VIEW_NAME.blockedUsers,
      drop: {
        acceptFrom: [_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.fromUserSearch, _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.fromFavourites],
        acceptTypes: [_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.typeUser]
      }
    },
    resultsElementType: 'a',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
    keyId: '_id',
    keyType: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.KeyType.string,
    modifiers: {
      normal: 'list-group-item-primary',
      inactive: 'list-group-item-light',
      active: 'list-group-item-info',
      warning: 'list-group-item-danger'
    },
    icons: {
      normal: 'fas fa-comment',
      inactive: 'fas fa-comment',
      active: 'fas fa-heart',
      warning: 'fas fa-exclamation-circle'
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      quickDelete: true,
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'fas fa-trash-alt'
      }
    }
  };

  constructor(stateManager) {
    super(BlockedUserView.DOMConfig, stateManager, _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users); // list renderer

    this.renderer = new _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__.ListViewRenderer(this, this); // handler binding

    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    this.handleFavouriteUserLoggedIn = this.handleFavouriteUserLoggedIn.bind(this);
    this.handleFavouriteUserLoggedOut = this.handleFavouriteUserLoggedOut.bind(this);
    this.handleFavouriteUsersChanged = this.handleFavouriteUsersChanged.bind(this);
    this.handleBlockedUsersChanged = this.handleBlockedUsersChanged.bind(this);
    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addUserListener(this);
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.addEventListener(this);
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  documentLoaded(view) {}

  itemDeleted(view, selectedItem) {
    // @ts-ignore
    vLogger(`Blocked user ${selectedItem.username} with id ${selectedItem.id} deleted - removing`);
    _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().removeUserFromBlockedList(selectedItem.username);
  }

  itemSelected(view, selectedItem) {
    throw new Error('Method not implemented.');
  }

  itemDragStarted(view, selectedItem) {
    throw new Error('Method not implemented.');
  }

  itemAction(view, actionName, selectedItem) {
    throw new Error('Method not implemented.');
  }

  hideRequested(view) {
    throw new Error('Method not implemented.');
  }

  showRequested(view) {
    throw new Error('Method not implemented.');
  }

  handleLoggedInUsersUpdated(usernames) {}

  handleFavouriteUserLoggedIn(username) {}

  handleFavouriteUserLoggedOut(username) {}

  handleFavouriteUsersChanged(usernames) {}

  handleBlockedUsersChanged(usernames) {
    vLogger(`Handle Blocked Users changed to ${usernames}`);
    this.updateViewForNamedCollection('', {});
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.username;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    return _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.warning;
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  updateViewForNamedCollection(name, newState) {
    var _this$stateManager; // find the blocked users in the user list


    let blockedUsers = [];
    const users = (_this$stateManager = this.stateManager) === null || _this$stateManager === void 0 ? void 0 : _this$stateManager.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);

    if (users) {
      users.forEach(user => {
        if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserInBlockedList(user.username)) {
          blockedUsers.push(user);
        }
      });
    }

    super.updateViewForNamedCollection(name, blockedUsers);
  }

  itemDropped(view, droppedItem) {
    if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserInBlockedList(droppedItem.username)) {
      vLogger(`${droppedItem.username} already in blocked list, ignoring`);
      return;
    } // add the user to the Chat Manager and we should get an event about it


    _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().addUserToBlockedList(droppedItem.username);
  }

  itemDeselected(view, selectedItem) {}

  canSelectItem(view, selectedItem) {
    return false;
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/ChatLogDetailView.ts":
/*!****************************************************!*\
  !*** ./src/framework/ui/chat/ChatLogDetailView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatLogDetailView": () => (/* binding */ ChatLogDetailView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _socket_Types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket/Types */ "./src/framework/socket/Types.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "./src/framework/ui/chat/ChatTypes.ts");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../security/SecurityManager */ "./src/framework/security/SecurityManager.ts");










const csLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-sidebar:detail');
class ChatLogDetailView {
  static getInstance(stateManager) {
    if (!ChatLogDetailView._instance) {
      ChatLogDetailView._instance = new ChatLogDetailView(stateManager);
    }

    return ChatLogDetailView._instance;
  }

  static newFormId = "newMessage";
  static commentId = "message";
  static submitCommentId = "submitMessage";
  static chatLogId = 'chatLog';
  static chatLogRoomId = 'chatLogRoom';
  static leaveChatId = 'leaveChat';
  static chatFastSearchUserNames = 'chatFastSearchUserNames'; // @ts-ignore

  constructor(stateManager) {
    this.stateManager = stateManager;
    this.selectedChatLog = null; // handler binding

    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleChatStarted = this.handleChatStarted.bind(this);
    this.handleUserDrop = this.handleUserDrop.bind(this);
    this.leaveChat = this.leaveChat.bind(this);
    this.eventUserSelected = this.eventUserSelected.bind(this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addListener(this);
    this.stateManager.addChangeListenerForName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.users, this);
  }

  hasActionPermission(actionName, from, item) {
    return true;
  }

  getListenerName() {
    return 'Chat Log Details';
  }

  canSelectItem(view, selectedItem) {
    return true;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    return true;
  }

  hasPermissionToUpdateItemInNamedCollection(name, item) {
    return true;
  }

  hasChanged() {
    return false;
  }

  setContainedBy(container) {}

  addEventListener(listener) {}

  getIdForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  getDisplayValueForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  compareItemsForEquality(item1, item2) {
    throw new Error('Method not implemented.');
  }

  getModifierForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  getBadgeValueForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  getBackgroundImageForItemInNamedCollection(name, item) {
    throw new Error('Method not implemented.');
  }

  updateViewForNamedCollection(name, newState) {
    throw new Error('Method not implemented.');
  }

  itemDeselected(view, selectedItem) {
    csLoggerDetail(`Chat Log with id ${selectedItem.roomName} deselected`);

    if (this.selectedChatLog && selectedItem.roomName === this.selectedChatLog.roomName) {
      this.selectedChatLog = null;
      this.checkCanComment();
      this.clearChatLog();
    }
  }

  itemSelected(view, selectedItem) {
    this.selectedChatLog = selectedItem;

    if (this.selectedChatLog) {
      csLoggerDetail(`Chat Log with id ${selectedItem.roomName} selected`);
      this.checkCanComment();
      this.renderChatLog(this.selectedChatLog);
    }
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {
    csLoggerDetail(`Chat Log with ${selectedItem.roomName} deleting`);

    if (this.selectedChatLog && this.selectedChatLog.roomName === selectedItem.roomName) {
      this.checkCanComment();
      this.renderChatLog(this.selectedChatLog);
    }
  }

  hideRequested(view) {
    this.selectedChatLog = null;
    this.checkCanComment();
    this.clearChatLog();
  }

  handleUserDrop(event) {
    csLoggerDetail('drop event on current chat room');

    if (this.selectedChatLog) {
      // @ts-ignore
      const draggedObjectJSON = event.dataTransfer.getData(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE_KEY_ID);
      const draggedObject = JSON.parse(draggedObjectJSON);
      csLoggerDetail(draggedObject);

      if (draggedObject[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE_TYPE] === _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.DRAGGABLE.typeUser) {
        //add the user to the current chat if not already there
        _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().sendInvite(draggedObject.username, this.selectedChatLog.roomName);
        _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_7__.NotificationManager.getInstance().show('Chat', `Invited ${draggedObject.username} to the chat.`);
      }
    }
  }

  handleChatLogUpdated(log) {
    csLoggerDetail(`Handling chat log updates`);
    this.checkCanComment();
    this.renderChatLog(log);
  }

  handleAddMessage(event) {
    event.preventDefault();
    event.stopPropagation();
    csLoggerDetail(`Handling message event`);

    if (this.selectedChatLog) {
      // @ts-ignore
      if (this.commentEl && this.commentEl.value.trim().length === 0) return; // @ts-ignore

      const messageContent = this.commentEl.value.trim(); // @ts-ignore

      this.commentEl.value = '';
      let sentMessage = _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().sendMessage(this.selectedChatLog.roomName, messageContent, _socket_Types__WEBPACK_IMPORTED_MODULE_5__.Priority.Normal, {});

      if (sentMessage) {
        // add the message to our display
        let messageEl = this.addChatMessage(sentMessage); // scroll to bottom

        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].scrollSmoothTo(messageEl);
      }
    }
  }

  onDocumentLoaded() {
    // @ts-ignore
    this.chatLogDiv = document.getElementById(ChatLogDetailView.chatLogId); // @ts-ignore

    this.commentEl = document.getElementById(ChatLogDetailView.commentId); // @ts-ignore

    this.chatForm = document.getElementById(ChatLogDetailView.newFormId); // @ts-ignore

    this.sendMessageButton = document.getElementById(ChatLogDetailView.submitCommentId); // @ts-ignore

    this.leaveChatButton = document.getElementById(ChatLogDetailView.leaveChatId); // @ts-ignore

    this.chatRoomDiv = document.getElementById(ChatLogDetailView.chatLogRoomId); // @ts-ignore

    this.fastUserSearch = document.getElementById(ChatLogDetailView.chatFastSearchUserNames);
    this.chatRoomDiv.addEventListener('dragover', event => {
      csLoggerDetail('Dragged over');
      if (this.selectedChatLog) event.preventDefault();
    });
    this.chatRoomDiv.addEventListener('drop', this.handleUserDrop);
    this.chatForm.addEventListener('submit', this.handleAddMessage);
    this.leaveChatButton.addEventListener('click', this.leaveChat);
    this.checkCanComment(); // fast user search
    // @ts-ignore

    const fastSearchEl = $(`#${ChatLogDetailView.chatFastSearchUserNames}`); // @ts-ignore

    fastSearchEl.on('autocompleteselect', this.eventUserSelected);
  }

  eventUserSelected(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    csLoggerDetail(`User ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.innerText = ''; // add to the chat, if one selected

    if (this.selectedChatLog) _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().sendInvite(ui.item.label, this.selectedChatLog.roomName);
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_7__.NotificationManager.getInstance().show('Chat', `Invited ${ui.item.label} to the chat.`);
  }

  addChatMessage(message) {
    let chatMessageEl = document.createElement('div');
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(chatMessageEl, "message"); // are we dealing with an "join"/"exit" message?

    if (message.from.trim().length === 0) {
      let messageSenderEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(messageSenderEl, 'message-sender');
      messageSenderEl.innerText = message.message;
      chatMessageEl.appendChild(messageSenderEl);
    } else {
      if (message.from === _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().getCurrentUser()) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(chatMessageEl, "my-message");
      } else {
        let messageSenderEl = document.createElement('div');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(messageSenderEl, 'message-sender');
        messageSenderEl.innerText = message.from + '   ' + moment__WEBPACK_IMPORTED_MODULE_4___default()(message.created, 'YYYYMMDDHHmmss').format('DD/MM/YYYY ');
        chatMessageEl.appendChild(messageSenderEl);
      }

      let contentEl = document.createElement('div');

      if (message.from === _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().getCurrentUser()) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(contentEl, "my-message-content");
      } else {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].addRemoveClasses(contentEl, 'message-content');
      }

      contentEl.innerText = message.message;
      chatMessageEl.appendChild(contentEl);
    }

    this.chatLogDiv.appendChild(chatMessageEl);
    return chatMessageEl;
  }

  reRenderChatMessages(chatLog) {
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(this.chatLogDiv);
    let messageEl = null;
    chatLog.messages.forEach(message => {
      messageEl = this.addChatMessage(message);
    }); // scroll to the last message (if any)

    if (messageEl) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].scrollTo(messageEl);
  }

  renderChatLog(chatLog) {
    csLoggerDetail(`Chat Log ${chatLog.roomName} rendering`);

    if (this.selectedChatLog) {
      if (this.selectedChatLog.roomName === chatLog.roomName) {
        this.selectedChatLog = chatLog;
        _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().touchChatLog(chatLog.roomName); // render the chat conversation

        this.reRenderChatMessages(chatLog);
      }
    }
  }

  handleChatLogsUpdated() {
    if (this.selectedChatLog) {
      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName); // render the chat conversation

      this.reRenderChatMessages(this.selectedChatLog);
    }

    this.checkCanComment();
  }

  handleChatStarted(log) {
    this.selectedChatLog = log;
    this.renderChatLog(log);
  }

  stateChanged(managerName, name, newValue) {
    if (name === _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.users) {
      // @ts-ignore
      const fastSearchEl = $(`#${ChatLogDetailView.ssFastSearchUserNames}`); // what is my username?

      let myUsername = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__.SecurityManager.getInstance().getLoggedInUsername(); // for each name, construct the patient details to display and the id referenced

      const fastSearchValues = [];
      newValue.forEach(item => {
        const searchValue = {
          label: item.username,
          value: item._id
        }; // @ts-ignore

        if (myUsername !== item.username) fastSearchValues.push(searchValue); // don't search for ourselves
      });
      fastSearchEl.autocomplete({
        source: fastSearchValues
      });
      fastSearchEl.autocomplete('option', {
        disabled: false,
        minLength: 1
      });
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {
    this.stateChanged(managerName, name, this.stateManager.getStateByName(name));
  }

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {}

  handleOfflineMessagesReceived(messages) {}

  handleInvitationDeclined(room, username) {}

  handleNewInviteReceived(invite) {
    return true;
  }

  itemDragStarted(view, selectedItem) {}

  itemAction(view, actionName, selectedItem) {}

  documentLoaded(view) {}

  showRequested(view) {}

  itemDropped(view, droppedItem) {}

  getName() {
    return _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.VIEW_NAME.chatLog;
  }

  hidden() {
    this.hideRequested(this);
  }

  getDataSourceKeyId() {
    return "";
  }

  getUIConfig() {
    // @ts-ignore
    return undefined;
  }

  render() {}

  show() {}

  getItemDescription(from, item) {
    return "";
  }

  getItemId(from, item) {
    return "";
  }

  filterResults(managerName, name, filterResults) {}

  leaveChat(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.selectedChatLog) {
      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().leaveChat(this.selectedChatLog.roomName);
      this.selectedChatLog = null;
      this.clearChatLog();
      this.checkCanComment();
    }
  }

  checkCanComment() {
    if (this.selectedChatLog) {
      if (this.commentEl) this.commentEl.removeAttribute("readonly");
      if (this.commentEl) this.commentEl.removeAttribute("disabled");
      if (this.sendMessageButton) this.sendMessageButton.removeAttribute("disabled");
      if (this.leaveChatButton) this.leaveChatButton.removeAttribute("disabled");
      if (this.fastUserSearch) this.fastUserSearch.removeAttribute("disabled");
    } else {
      if (this.commentEl) this.commentEl.setAttribute("readonly", "true");
      if (this.commentEl) this.commentEl.setAttribute("disabled", "true");
      if (this.sendMessageButton) this.sendMessageButton.setAttribute("disabled", "true");
      if (this.leaveChatButton) this.leaveChatButton.setAttribute("disabled", "true");
      if (this.fastUserSearch) this.fastUserSearch.setAttribute("disabled", "true");
    }
  }

  clearChatLog() {
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(this.chatLogDiv);
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/ChatLogsView.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/chat/ChatLogsView.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatLogsView": () => (/* binding */ ChatLogsView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/MemoryBufferStateManager */ "./src/framework/state/MemoryBufferStateManager.ts");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "./src/framework/ui/view/renderer/ListViewRenderer.ts");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "./src/framework/ui/chat/ChatTypes.ts");









const csLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-sidebar');
class ChatLogsView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
  static getInstance() {
    if (!ChatLogsView._instance) {
      ChatLogsView._instance = new ChatLogsView();
    }

    return ChatLogsView._instance;
  }

  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'chatLogs',
      dataSourceId: _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.VIEW_NAME.chatLogs
    },
    resultsElementType: 'a',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
    keyId: 'roomName',
    keyType: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.KeyType.string,
    modifiers: {
      normal: '',
      inactive: 'list-group-item-dark',
      active: 'list-group-item-primary',
      warning: ''
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'text-black fas fa-sign-out-alt'
      },
      badge: {
        elementType: 'span',
        elementClasses: 'badge badge-pill badge-primary mr-1'
      }
    }
  };
  selectedChatLog = null;

  constructor() {
    super(ChatLogsView.DOMConfig, new _state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_5__.MemoryBufferStateManager(_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_6__.isSameRoom), _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.chatLogs);
    this.renderer = new _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__.ListViewRenderer(this, this); // handler binding

    this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleChatStarted = this.handleChatStarted.bind(this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addListener(this);
  }

  compareItemsForEquality(item1, item2) {
    return (0,_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_6__.isSameRoom)(item1, item2);
  }

  handleNewInviteReceived(invite) {
    return true;
  }

  handleChatLogUpdated(log) {
    csLogger(`Handling chat log updates`);
    this.updateStateManager();
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.addEventCollectionListener(this);
    this.updateStateManager();
  }

  getIdForItemInNamedCollection(name, item) {
    return item.roomName;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.users.join(',');
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.inactive;

    if (this.selectedChatLog) {
      if (this.selectedChatLog.roomName === item.roomName) {
        result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.active;
      }
    }

    return result;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    return this.getModifierForItemInNamedCollection(name, item);
  }

  selectChatRoom(roomName) {
    let room = _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().getChatLog(roomName);
    this.selectedChatLog = room;
    this.eventForwarder.itemSelected(this, this.selectedChatLog);
    this.updateStateManager();
  }

  handleChatLogsUpdated() {
    if (this.selectedChatLog) {
      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName);
    }

    this.updateStateManager();
  }

  handleChatStarted(log) {
    this.selectedChatLog = log;
    this.eventForwarder.itemSelected(this, this.selectedChatLog);
    this.updateStateManager();
  }

  getBadgeValueForItemInNamedCollection(name, item) {
    return item.numOfNewMessages;
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {
    csLogger(`Deleting chat ${selectedItem.roomName}`);
    _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().leaveChat(selectedItem.roomName);

    if (this.selectedChatLog && this.selectedChatLog.roomName === selectedItem.roomName) {
      this.eventForwarder.itemDeselected(this, this.selectedChatLog);
      this.selectedChatLog = null;
    }

    this.updateStateManager();
  }

  hideRequested(view) {
    if (this.selectedChatLog) {
      this.eventForwarder.itemDeselected(this, this.selectedChatLog);
      this.selectedChatLog = null;
    }
  }

  hidden() {
    this.hideRequested(this);
  }

  documentLoaded(view) {}

  itemAction(view, actionName, selectedItem) {}

  itemDragStarted(view, selectedItem) {}

  itemDropped(view, droppedItem) {}

  itemSelected(view, selectedItem) {
    this.selectedChatLog = selectedItem;
    this.updateStateManager();
  }

  itemDeselected(view, selectedItem) {
    this.selectedChatLog = null;
    this.updateStateManager();
  }

  showRequested(view) {}

  handleOfflineMessagesReceived(messages) {}

  handleInvitationDeclined(room, username) {}

  canSelectItem(view, selectedItem) {
    return true;
  }

  updateStateManager() {
    csLogger(`Updating state with chat manager`);
    let newState = _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().getChatLogs();
    csLogger(newState);
    this.stateManager.setStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.chatLogs, newState, true);
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/ChatRoomsSidebar.ts":
/*!***************************************************!*\
  !*** ./src/framework/ui/chat/ChatRoomsSidebar.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomsSidebar": () => (/* binding */ ChatRoomsSidebar)
/* harmony export */ });
/* harmony import */ var _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/SidebarViewContainer */ "./src/framework/ui/container/SidebarViewContainer.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _ChatLogsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatLogsView */ "./src/framework/ui/chat/ChatLogsView.ts");
/* harmony import */ var _ChatLogDetailView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatLogDetailView */ "./src/framework/ui/chat/ChatLogDetailView.ts");




class ChatRoomsSidebar extends _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer {
  static getInstance(stateManager) {
    if (!ChatRoomsSidebar._instance) {
      ChatRoomsSidebar._instance = new ChatRoomsSidebar(stateManager);
    }

    return ChatRoomsSidebar._instance;
  }

  static SidebarPrefs = {
    id: 'chatSideBar',
    expandedSize: '35%',
    location: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SidebarLocation.right
  };
  static SidebarContainers = {
    chatLogs: 'chatLogs',
    chatLog: 'chatLogRoom'
  };

  constructor(stateManager) {
    super(ChatRoomsSidebar.SidebarPrefs);
    const chatView = _ChatLogsView__WEBPACK_IMPORTED_MODULE_2__.ChatLogsView.getInstance();
    this.addView(chatView, {
      containerId: ChatRoomsSidebar.SidebarContainers.chatLogs
    });
    const chatLogView = _ChatLogDetailView__WEBPACK_IMPORTED_MODULE_3__.ChatLogDetailView.getInstance(stateManager);
    this.addView(chatLogView, {
      containerId: ChatRoomsSidebar.SidebarContainers.chatLog
    });
    chatView.addEventListener(chatLogView);
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/ChatTypes.ts":
/*!********************************************!*\
  !*** ./src/framework/ui/chat/ChatTypes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE_NAMES": () => (/* binding */ STATE_NAMES),
/* harmony export */   "DRAGGABLE": () => (/* binding */ DRAGGABLE),
/* harmony export */   "VIEW_NAME": () => (/* binding */ VIEW_NAME)
/* harmony export */ });
const STATE_NAMES = {
  users: 'user',
  chatLogs: 'chatLog',
  recentUserSearches: 'recentUserSearch'
};
const DRAGGABLE = {
  typeUser: 'user',
  fromUserSearch: 'userSearch',
  fromFavourites: 'favourites'
};
const VIEW_NAME = {
  blockedUsers: 'blockedUsers',
  chatLog: 'chatLog',
  chatLogs: 'chatLogs',
  favouriteUsers: 'favouriteUsers',
  userSearch: 'userSearch'
};

/***/ }),

/***/ "./src/framework/ui/chat/FavouriteUserView.ts":
/*!****************************************************!*\
  !*** ./src/framework/ui/chat/FavouriteUserView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteUserView": () => (/* binding */ FavouriteUserView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "./src/framework/ui/view/renderer/ListViewRenderer.ts");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatTypes */ "./src/framework/ui/chat/ChatTypes.ts");







const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar:detail');
class FavouriteUserView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
  static getInstance(stateManager) {
    if (!FavouriteUserView._instance) {
      FavouriteUserView._instance = new FavouriteUserView(stateManager);
    }

    return FavouriteUserView._instance;
  }

  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'favouriteUsers',
      drop: {
        acceptFrom: [_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.fromUserSearch],
        acceptTypes: [_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.typeUser]
      },
      dataSourceId: _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.VIEW_NAME.favouriteUsers
    },
    resultsElementType: 'a',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
    keyId: '_id',
    keyType: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.KeyType.string,
    modifiers: {
      normal: 'list-group-item-primary',
      inactive: 'list-group-item-light',
      active: 'list-group-item-info',
      warning: 'list-group-item-danger'
    },
    icons: {
      normal: 'fas fa-comment',
      inactive: 'fas fa-comment',
      active: 'fas fa-heart',
      warning: 'fas fa-exclamation-circle'
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      quickDelete: true,
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'fas fa-trash-alt'
      },
      drag: {
        type: _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.typeUser,
        from: _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.DRAGGABLE.fromFavourites
      }
    },
    extraActions: [{
      name: 'block',
      buttonClasses: 'btn bg-warning text-white btn-circle btn-sm mr-1',
      iconClasses: 'fas fa-user-slash'
    }]
  };

  constructor(stateManager) {
    super(FavouriteUserView.DOMConfig, stateManager, _ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);
    this.renderer = new _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__.ListViewRenderer(this, this); // handler binding

    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    this.handleFavouriteUserLoggedIn = this.handleFavouriteUserLoggedIn.bind(this);
    this.handleFavouriteUserLoggedOut = this.handleFavouriteUserLoggedOut.bind(this);
    this.handleFavouriteUsersChanged = this.handleFavouriteUsersChanged.bind(this);
    this.handleBlockedUsersChanged = this.handleBlockedUsersChanged.bind(this);
    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addUserListener(this);
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.addEventCollectionListener(this);
  }

  handleLoggedInUsersUpdated(usernames) {
    vLogger(`Received new list of users who are logged in `);
    this.updateViewForNamedCollection('', {});
  }

  handleFavouriteUserLoggedIn(username) {
    vLogger(`Handle Favourite User ${username} logged in`);
    this.updateViewForNamedCollection('', {});
  }

  handleFavouriteUserLoggedOut(username) {
    vLogger(`Handle Favourite User ${username} logged in`);
    this.updateViewForNamedCollection('', {});
  }

  handleFavouriteUsersChanged(usernames) {
    vLogger(`Handle Favourite Users changed to ${usernames}`);
    this.updateViewForNamedCollection('', {});
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.username;
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.normal; // if the user is currently logged out make the item inactive

    if (!_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserLoggedIn(item.username)) {
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.inactive;
    }

    return result;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    let result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.normal;
    vLoggerDetail(`Checking for item secondary modifiers ${item.username}`); // if the user is in the black list then show warning and a favourite user is highlighted

    if (_socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().isFavouriteUser(item.username)) {
      vLoggerDetail(`is favourite`);
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.active;
    }

    if (_socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().isBlockedUser(item.username)) {
      vLoggerDetail(`is blocked`);
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.Modifier.warning;
    }

    return result;
  }

  updateViewForNamedCollection(name, newState) {
    var _this$stateManager; // find the blocked users in the user list


    let favUsers = [];
    const users = (_this$stateManager = this.stateManager) === null || _this$stateManager === void 0 ? void 0 : _this$stateManager.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);

    if (users) {
      users.forEach(user => {
        if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserInFavouriteList(user.username)) {
          favUsers.push(user);
        }
      });
    }

    super.updateViewForNamedCollection(name, favUsers);
  }

  documentLoaded(view) {}

  handleBlockedUsersChanged(usernames) {
    this.updateViewForNamedCollection('', {});
  }

  hideRequested(view) {}

  itemAction(view, actionName, selectedItem) {
    // @ts-ignore
    if (actionName === this.collectionUIConfig.extraActions[0].name) {
      if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserInBlockedList(selectedItem.username)) {
        vLogger(`${selectedItem.username} already in fav list, ignoring`);
        return;
      }

      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().addUserToBlockedList(selectedItem.username);
    }
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {
    vLogger(`Favourite user ${selectedItem.username} with id ${selectedItem.id} deleted - removing`);
    _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().removeUserFromFavouriteList(selectedItem.username);
  }

  itemDragStarted(view, selectedItem) {}

  itemDeselected(view, selectedItem) {}

  itemDropped(view, droppedItem) {
    vLogger(`Handling item dropped ${droppedItem.username}`);

    if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().isUserInFavouriteList(droppedItem.username)) {
      vLogger(`${droppedItem.username} already in fav list, ignoring`);
      return;
    } // add the user to the Chat Manager and we should get an event about it


    _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__.ChatManager.getInstance().addUserToFavouriteList(droppedItem.username);
  }

  itemSelected(view, selectedItem) {
    const roomName = _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().startChatWithUser(selectedItem.username);
  }

  showRequested(view) {}

  canSelectItem(view, selectedItem) {
    return true;
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/UserSearchSidebar.ts":
/*!****************************************************!*\
  !*** ./src/framework/ui/chat/UserSearchSidebar.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchSidebar": () => (/* binding */ UserSearchSidebar)
/* harmony export */ });
/* harmony import */ var _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/SidebarViewContainer */ "./src/framework/ui/container/SidebarViewContainer.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _UserSearchView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSearchView */ "./src/framework/ui/chat/UserSearchView.ts");
/* harmony import */ var _FavouriteUserView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavouriteUserView */ "./src/framework/ui/chat/FavouriteUserView.ts");
/* harmony import */ var _BlockedUserView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockedUserView */ "./src/framework/ui/chat/BlockedUserView.ts");
/* harmony import */ var _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatRoomsSidebar */ "./src/framework/ui/chat/ChatRoomsSidebar.ts");






class UserSearchSidebar extends _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer {
  static getInstance(stateManager) {
    if (!UserSearchSidebar._instance) {
      UserSearchSidebar._instance = new UserSearchSidebar(stateManager);
    }

    return UserSearchSidebar._instance;
  }

  static SidebarPrefs = {
    id: 'userSearchSideBar',
    expandedSize: '35%',
    location: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SidebarLocation.left
  };
  static SidebarContainers = {
    recentSearches: 'userSearchZone',
    favourites: 'favouriteUsersDropZone',
    blocked: 'blockedUsersDropZone'
  };

  constructor(stateManager) {
    super(UserSearchSidebar.SidebarPrefs);
    const recentSearches = _UserSearchView__WEBPACK_IMPORTED_MODULE_2__.UserSearchView.getInstance(stateManager);
    this.addView(recentSearches, {
      containerId: UserSearchSidebar.SidebarContainers.recentSearches
    });
    const favouriteUsers = _FavouriteUserView__WEBPACK_IMPORTED_MODULE_3__.FavouriteUserView.getInstance(stateManager);
    this.addView(favouriteUsers, {
      containerId: UserSearchSidebar.SidebarContainers.favourites
    });
    const blockedUsers = _BlockedUserView__WEBPACK_IMPORTED_MODULE_4__.BlockedUserView.getInstance(stateManager);
    this.addView(blockedUsers, {
      containerId: UserSearchSidebar.SidebarContainers.blocked
    });
    this.logSB = _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_5__.ChatRoomsSidebar.getInstance(stateManager);
  }

}

/***/ }),

/***/ "./src/framework/ui/chat/UserSearchView.ts":
/*!*************************************************!*\
  !*** ./src/framework/ui/chat/UserSearchView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchView": () => (/* binding */ UserSearchView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/NotificationController */ "./src/framework/socket/NotificationController.ts");
/* harmony import */ var _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/BrowserStorageStateManager */ "./src/framework/state/BrowserStorageStateManager.ts");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket/ChatManager */ "./src/framework/socket/ChatManager.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "./src/framework/ui/view/renderer/ListViewRenderer.ts");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "./src/framework/ui/chat/ChatTypes.ts");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../security/SecurityManager */ "./src/framework/security/SecurityManager.ts");
/* harmony import */ var _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChatRoomsSidebar */ "./src/framework/ui/chat/ChatRoomsSidebar.ts");
/* harmony import */ var _ChatLogsView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatLogsView */ "./src/framework/ui/chat/ChatLogsView.ts");












const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-detail');
class UserSearchView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_6__.AbstractStatefulCollectionView {
  static getInstance(stateManager) {
    if (!UserSearchView._instance) {
      UserSearchView._instance = new UserSearchView(stateManager);
    }

    return UserSearchView._instance;
  }

  static fastSearchInputId = 'fastSearchUserNames';
  static dataLimit = 10;
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'recentUserSearches',
      dataSourceId: _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.VIEW_NAME.userSearch
    },
    resultsElementType: 'a',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
    keyId: '_id',
    keyType: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.KeyType.string,
    modifiers: {
      normal: 'list-group-item-primary',
      inactive: 'list-group-item-light',
      active: 'list-group-item-info',
      warning: 'list-group-item-danger'
    },
    icons: {
      normal: 'fas fa-comment',
      inactive: 'fas fa-comment',
      active: 'fas fa-heart',
      warning: 'fas fa-exclamation-circle'
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      quickDelete: true,
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'fas fa-trash-alt'
      },
      drag: {
        type: _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.DRAGGABLE.typeUser,
        from: _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.DRAGGABLE.fromUserSearch
      }
    },
    extraActions: [{
      name: 'favourite',
      buttonClasses: 'btn bg-info text-white btn-circle btn-sm mr-1',
      iconClasses: 'fas fa-user-plus'
    }, {
      name: 'block',
      buttonClasses: 'btn bg-warning text-white btn-circle btn-sm mr-1',
      iconClasses: 'fas fa-user-slash'
    }]
  };

  constructor(stateManager) {
    super(UserSearchView.DOMConfig, stateManager, _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.users);
    this.loggedInUsers = [];
    this.renderer = new _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__.ListViewRenderer(this, this); // handler binding

    this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
    this.eventUserSelected = this.eventUserSelected.bind(this);
    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    this.handleFavouriteUserLoggedIn = this.handleFavouriteUserLoggedIn.bind(this);
    this.handleFavouriteUserLoggedOut = this.handleFavouriteUserLoggedOut.bind(this);
    this.handleFavouriteUsersChanged = this.handleFavouriteUsersChanged.bind(this);
    this.handleBlockedUsersChanged = this.handleBlockedUsersChanged.bind(this);
    this.handleLoggedInUsersUpdated = this.handleLoggedInUsersUpdated.bind(this);
    this.itemDeleted = this.itemDeleted.bind(this); // register state change listening

    this.localisedSM = new _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_3__.BrowserStorageStateManager(true, false, _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_1__.isSameMongo);
    this.localisedSM.addChangeListenerForName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__.NotificationController.getInstance().addUserListener(this);
    vLogger(this.localisedSM.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches));
  }

  handleLoggedInUsersUpdated(usernames) {
    vLogger(`Received new list of users who are logged in `);
    vLogger(usernames);
    this.loggedInUsers = usernames;
    this.updateViewForNamedCollection(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {});
  }

  handleFavouriteUserLoggedIn(username) {
    vLogger(`Handle Favourite User ${username} logged in`);
    this.updateViewForNamedCollection(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {});
  }

  handleFavouriteUserLoggedOut(username) {
    vLogger(`Handle Favourite User ${username} logged in`);
    this.updateViewForNamedCollection(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {});
  }

  handleFavouriteUsersChanged(usernames) {
    vLogger(`Handle Favourite Users changed to ${usernames}`);
    this.updateViewForNamedCollection(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {});
  }

  handleBlockedUsersChanged(usernames) {
    vLogger(`Handle Blocked Users changed to ${usernames}`);
    this.updateViewForNamedCollection(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {});
  }

  onDocumentLoaded() {
    super.onDocumentLoaded(); // @ts-ignore

    const fastSearchEl = $(`#${UserSearchView.fastSearchInputId}`); // @ts-ignore

    fastSearchEl.on('autocompleteselect', this.eventUserSelected);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.username;
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.Modifier.normal;
    vLoggerDetail(`Checking for item modifiers`);
    vLoggerDetail(item); // if the user is currently logged out make the item inactive

    if (!_socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance().isUserLoggedIn(item.username)) {
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.Modifier.inactive;
    }

    return result;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    let result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.Modifier.normal;
    vLoggerDetail(`Checking for item secondary modifiers ${item.username}`); // if the user is in the black list then show warning and a favourite user is highlighted

    if (_socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__.NotificationController.getInstance().isFavouriteUser(item.username)) {
      vLoggerDetail(`is favourite`);
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.Modifier.active;
    }

    if (_socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__.NotificationController.getInstance().isBlockedUser(item.username)) {
      vLoggerDetail(`is blocked`);
      result = _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__.Modifier.warning;
    }

    return result;
  }

  eventUserSelected(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    vLogger(`User ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.innerText = ''; // add the selected user to the recent user searches

    if (this.localisedSM.isItemInState(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {
      _id: ui.item.value
    })) return;
    const recentUserSearches = this.localisedSM.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches);
    vLogger(`saved searches too long? ${_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches}`);

    if (recentUserSearches.length >= UserSearchView.dataLimit) {
      vLogger('saved searches too long - removing first'); // remove the first item from recent searches

      const item = recentUserSearches.shift();
      this.localisedSM.removeItemFromState(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, item, true);
    } // save the searches


    this.localisedSM.addNewItemToState(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, {
      _id: ui.item.value,
      username: ui.item.label
    }, true);
  }

  updateViewForNamedCollection(name, newState) {
    if (name === _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches) {
      vLogger(`Updating for recent searches`);
      newState = this.localisedSM.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches);
      vLogger(newState);
      super.updateViewForNamedCollection(name, newState);
    }

    if (name === _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.users) {
      // load the search names into the search field
      // what is my username?
      let myUsername = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__.SecurityManager.getInstance().getLoggedInUsername(); // @ts-ignore

      const fastSearchEl = $(`#${UserSearchView.fastSearchInputId}`); // for each name, construct the patient details to display and the id referenced

      const fastSearchValues = [];
      newState.forEach(item => {
        const searchValue = {
          label: item.username,
          value: item._id
        };
        if (myUsername !== item.username) fastSearchValues.push(searchValue); // don't search for ourselves
      });
      fastSearchEl.autocomplete({
        source: fastSearchValues
      });
      fastSearchEl.autocomplete('option', {
        disabled: false,
        minLength: 1
      });
    }
  }

  itemAction(view, actionName, selectedItem) {
    // @ts-ignore
    if (actionName === this.collectionUIConfig.extraActions[0].name) {
      if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance().isUserInFavouriteList(selectedItem.username)) {
        vLogger(`${selectedItem.username} already in fav list, ignoring`);
        return;
      }

      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance().addUserToFavouriteList(selectedItem.username);
    } // @ts-ignore


    if (actionName === this.collectionUIConfig.extraActions[1].name) {
      if (_socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance().isUserInBlockedList(selectedItem.username)) {
        vLogger(`${selectedItem.username} already in blocked list, ignoring`);
        return;
      }

      _socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance().addUserToBlockedList(selectedItem.username);
    }
  }

  compareItemsForEquality(item1, item2) {
    return (0,_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_1__.isSameMongo)(item1, item2);
  }

  itemDeleted(view, selectedItem) {
    vLoggerDetail(selectedItem);
    vLogger(`Recent search user ${selectedItem.username} with id ${selectedItem.id} deleted - removing`);
    this.localisedSM.removeItemFromState(_ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.recentUserSearches, selectedItem, true);
  }

  itemSelected(view, selectedItem) {
    const roomName = _socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__.NotificationController.getInstance().startChatWithUser(selectedItem.username);
    _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_10__.ChatRoomsSidebar.getInstance(this.stateManager).eventShow(null);
    if (roomName) _ChatLogsView__WEBPACK_IMPORTED_MODULE_11__.ChatLogsView.getInstance().selectChatRoom(roomName);
  }

}

/***/ }),

/***/ "./src/framework/ui/container/SidebarViewContainer.ts":
/*!************************************************************!*\
  !*** ./src/framework/ui/container/SidebarViewContainer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarViewContainer": () => (/* binding */ SidebarViewContainer)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


const sbvcLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('sidebar-container');
class SidebarViewContainer {
  constructor(prefs) {
    this.prefs = prefs;
    this.views = []; // event handlers

    this.eventHide = this.eventHide.bind(this);
    this.eventShow = this.eventShow.bind(this);
  }

  addView(view, config) {
    sbvcLogger(`Adding view to container, with containing div of ${config.containerId}`);
    const viewContainer = document.getElementById(config.containerId);

    if (viewContainer) {
      sbvcLogger(`Adding view to container, with containing div of ${config.containerId} - FOUND`);
      view.setContainedBy(viewContainer);
    }

    this.views.push(view);
    view.addEventListener(this);
  }

  onDocumentLoaded() {
    // this should be called once at startup
    // hide the side bar panel
    this.eventHide(null); // add the event listener for the close button

    const sidePanelEl = document.getElementById(this.prefs.id);
    if (sidePanelEl === null) return;
    const closeButtonEl = sidePanelEl.querySelector('.close');

    if (closeButtonEl) {
      closeButtonEl.addEventListener('click', this.eventHide);
    }

    this.views.forEach(view => {
      view.onDocumentLoaded();
    });
  }

  eventHide(event) {
    if (event) event.preventDefault();
    this.showHide('0%');
    this.views.forEach(view => {
      view.hidden();
    });
  }

  eventShow(event) {
    //414,768,1024
    let size = this.prefs.expandedSize;

    if (window.innerWidth < 769) {
      size = '50%';
    }

    if (window.innerWidth < 415) {
      size = '100%';
    }

    this.showHide(size);
  }

  documentLoaded(view) {}

  itemAction(view, actionName, selectedItem) {}

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {}

  itemDragStarted(view, selectedItem) {}

  itemSelected(view, selectedItem) {}

  itemDeselected(view, selectedItem) {}

  itemDropped(view, droppedItem) {}

  showRequested(view) {
    this.eventShow(null);
  }
  /*
    Contained views can request show and hide of the sidebar container
   */


  hideRequested(view) {
    this.eventHide(null);
  }

  canSelectItem(view, selectedItem) {
    return true;
  }

  showHide(newStyleValue) {
    const sidePanelEl = document.getElementById(this.prefs.id);
    if (sidePanelEl === null) return;

    switch (this.prefs.location) {
      case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left:
        {
          sidePanelEl.style.width = newStyleValue;
          break;
        }

      case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.right:
        {
          sidePanelEl.style.width = newStyleValue;
          break;
        }

      case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.bottom:
        {
          sidePanelEl.style.height = newStyleValue;
          break;
        }

      case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.top:
        {
          sidePanelEl.style.height = newStyleValue;
          break;
        }
    }
  }

}

/***/ }),

/***/ "./src/framework/ui/context/ContextualInformationHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/framework/ui/context/ContextualInformationHelper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TogglePlacement": () => (/* binding */ TogglePlacement),
/* harmony export */   "ContextualInformationHelper": () => (/* binding */ ContextualInformationHelper)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractCollectionView */ "./src/framework/ui/view/implementation/AbstractCollectionView.ts");




const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('context-helper');
let TogglePlacement;

(function (TogglePlacement) {
  TogglePlacement[TogglePlacement["top"] = 0] = "top";
  TogglePlacement[TogglePlacement["bottom"] = 1] = "bottom";
  TogglePlacement[TogglePlacement["right"] = 2] = "right";
  TogglePlacement[TogglePlacement["left"] = 3] = "left";
})(TogglePlacement || (TogglePlacement = {}));

const defaultIdentifier = function (name, item) {
  return '';
};

class ContextualInformationHelper {
  static SOURCE = 'context-source';
  static TYPE = 'context-type';
  static DISPLAYNAME = 'context-display-name';
  static IDENTIFIER = 'context-id';
  static DESCRIPTION = 'title';
  static BOOTSTRAP_TOGGLE = 'data-toggle';
  static BOOTSTRAP_PLACEMENT = 'data-placement';
  static BOOTSTRAP_TOOLTIP_VALUE = 'tooltip';
  static BOOTSTRAP_POPOVER_VALUE = 'popover';
  static BOOTSTRAP_TOGGLE_HTML = 'data-html';
  static BOOTSTRAP_TOGGLE_HTML_VALUE = 'true';
  static BOOTSTRAP_PLACEMENT_TOP = 'top';
  static BOOTSTRAP_PLACEMENT_BOTTOM = 'bottom';
  static BOOTSTRAP_PLACEMENT_RIGHT = 'right';
  static BOOTSTRAP_PLACEMENT_LEFT = 'left';
  registry = [];
  menuDivEl = null;
  menuContentEl = null;

  constructor() {
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.hideContextMenu = this.hideContextMenu.bind(this);
  }

  static getInstance() {
    if (!ContextualInformationHelper._instance) {
      ContextualInformationHelper._instance = new ContextualInformationHelper();
    }

    return ContextualInformationHelper._instance;
  }

  onDocumentLoaded() {
    // @ts-ignore
    document.addEventListener('click', this.hideContextMenu);
    this.menuDivEl = document.getElementById('contextmenu');
    this.menuContentEl = document.getElementById('contextMenuItems');
  }

  addContextFromView(view, internalType, displayName) {
    let context = this.ensureInRegistry(view.getName());
    context.view = view;
    context.defaultType.internalType = internalType;
    context.defaultType.displayName = displayName;
    context.defaultType.identifier = view.getItemId;
    context.defaultType.description = view.getItemDescription;
    return context;
  }

  addContextToElement(source, type, item, element, addTooltip = false, placement = TogglePlacement.bottom) {
    const context = this.ensureInRegistry(source);
    element.setAttribute(ContextualInformationHelper.SOURCE, context.source);
    element.setAttribute(ContextualInformationHelper.TYPE, context.defaultType.internalType);
    element.setAttribute(ContextualInformationHelper.DISPLAYNAME, context.defaultType.displayName);
    element.setAttribute(ContextualInformationHelper.IDENTIFIER, context.defaultType.identifier(type, item));
    element.setAttribute(ContextualInformationHelper.DESCRIPTION, context.defaultType.description(type, item));

    if (addTooltip) {
      element.setAttribute(ContextualInformationHelper.BOOTSTRAP_TOGGLE, ContextualInformationHelper.BOOTSTRAP_TOOLTIP_VALUE);
      element.setAttribute(ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML, ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML_VALUE);

      switch (placement) {
        case TogglePlacement.bottom:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_BOTTOM);
            break;
          }

        case TogglePlacement.top:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_TOP);
            break;
          }

        case TogglePlacement.left:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_LEFT);
            break;
          }

        case TogglePlacement.right:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_RIGHT);
            break;
          }
      } // @ts-ignore


      $('[data-toggle="tooltip"]').tooltip({
        html: true
      });
    }
  }

  findContextFromEvent(event) {
    let result = null;

    if (event.target) {
      let target = event.target; // @ts-ignore

      result = this.findContextFromElement(event.target);
    }

    return result;
  }

  addActionToContext(context, actionName, displayName, handler, icon, permissionCheck) {
    let action = {
      actionName: actionName,
      displayName: displayName,
      handler: handler,
      hasPermission: permissionCheck,
      elementDefinition: {
        elementType: 'a',
        elementAttributes: [{
          name: 'href',
          value: '#'
        }],
        elementClasses: 'list-group-item list-group-item-action bg-dark text-white'
      },
      iconClasses: icon
    };
    this.addContextActionToContext(context, action);
  }

  handleContextMenu(event) {
    logger('Right click');
    logger(event.target); // are we over a context sensitive item?
    // find a context if possible
    // @ts-ignore

    const context = this.findContextFromElement(event.target);
    logger(context);

    if (context && this.buildContextMenu(context)) {
      event.preventDefault();
      event.stopPropagation();
      this.showContextMenu(event);
      return false;
    } // otherwise let the default behaviour happen


    return true;
  }

  ensureInRegistry(source) {
    let result;
    let foundIndex = this.registry.findIndex(context => context.source === source);

    if (foundIndex < 0) {
      result = {
        source: source,
        defaultType: {
          internalType: '',
          displayName: '',
          identifier: defaultIdentifier,
          description: defaultIdentifier,
          actions: []
        }
      };
      this.registry.push(result);
    } else {
      result = this.registry[foundIndex];
    }

    return result;
  }

  findContextFromElement(element) {
    // do we have context information in this element?
    let result = null;
    const source = element.getAttribute(ContextualInformationHelper.SOURCE);

    if (source) {
      const type = element.getAttribute(ContextualInformationHelper.TYPE);
      const name = element.getAttribute(ContextualInformationHelper.DISPLAYNAME);
      const id = element.getAttribute(ContextualInformationHelper.IDENTIFIER);
      const desc = element.getAttribute(ContextualInformationHelper.DESCRIPTION); // @ts-ignore

      result = {
        source: source,
        internalType: type,
        displayName: name,
        identifier: id,
        description: desc
      };
    } else {
      const parent = element.parentElement;

      if (parent) {
        result = this.findContextFromElement(parent);
      }
    }

    return result;
  }

  findAllContextsFromElement(element, contexts) {
    // do we have context information in this element?
    const source = element.getAttribute(ContextualInformationHelper.SOURCE);

    if (source) {
      const type = element.getAttribute(ContextualInformationHelper.TYPE);
      const name = element.getAttribute(ContextualInformationHelper.DISPLAYNAME);
      const id = element.getAttribute(ContextualInformationHelper.IDENTIFIER);
      const desc = element.getAttribute(ContextualInformationHelper.DESCRIPTION); // @ts-ignore

      if (type && name && id && desc) {
        let result = {
          source: source,
          internalType: type,
          displayName: name,
          identifier: id,
          description: desc
        };
        contexts.push(result);
      }
    }

    const parent = element.parentElement;

    if (parent) {
      this.findAllContextsFromElement(parent, contexts);
    }
  }

  addContextActionToContext(context, action) {
    logger(`Adding action to context ${context.source}`);
    logger(action);
    context.defaultType.actions.push(action);
  }

  buildContextMenu(context) {
    logger(`building context menu`);
    let result = false; // find the context for these details

    const contextDef = this.ensureInRegistry(context.source);
    let selectedItem = null;

    if (contextDef && contextDef.view && contextDef.view instanceof _view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractCollectionView) {
      logger(`collection view context - finding item with identifier ${context.identifier}`);
      let collectionView = contextDef.view;
      let compareWith = {}; // @ts-ignore

      compareWith[collectionView.getCollectionUIConfig().keyId] = context.identifier;
      selectedItem = collectionView.getItemInNamedCollection(context.internalType, compareWith);
    }

    logger(`found item for context menu`);
    logger(selectedItem);

    if (contextDef.defaultType.actions.length > 0) {
      if (this.menuContentEl && this.menuContentEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(this.menuContentEl);
        contextDef.defaultType.actions.forEach(action => {
          logger('Adding action');
          logger(action);

          if (selectedItem && action.hasPermission && action.hasPermission(action.actionName, contextDef.defaultType.internalType, selectedItem) || !action.hasPermission) {
            let itemEl = document.createElement(action.elementDefinition.elementType);

            if (itemEl && this.menuContentEl) {
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(itemEl, action.elementDefinition.elementAttributes);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(itemEl, action.elementDefinition.elementClasses);
              itemEl.setAttribute(ContextualInformationHelper.SOURCE, context.source);
              itemEl.setAttribute(ContextualInformationHelper.TYPE, context.internalType);
              itemEl.setAttribute(ContextualInformationHelper.DISPLAYNAME, context.displayName);
              itemEl.setAttribute(ContextualInformationHelper.IDENTIFIER, context.identifier);
              itemEl.setAttribute(ContextualInformationHelper.DESCRIPTION, context.description);
              itemEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.EXTRA_ACTION_ATTRIBUTE_NAME, action.actionName);
              itemEl.addEventListener('click', event => {
                this.hideContextMenu(event);
                action.handler(event);
              });
              itemEl.innerHTML = `${action.displayName}`;

              if (action.iconClasses) {
                itemEl.innerHTML += `&nbsp;&nbsp;<i class="${action.iconClasses}"></i>`;
              }

              this.menuContentEl.appendChild(itemEl);
              logger('new menu element is ');
              logger(this.menuContentEl);
              result = true;
            }
          }
        });
      }
    } else {
      logger(`building context menu - no actions for ${context.source}`);
    }

    return result;
  }

  hideContextMenu(event) {
    if (this.menuDivEl) {
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(this.menuDivEl, 'd-none');
    }
  }

  showContextMenu(event) {
    if (this.menuDivEl) {
      logger(`Showing context menu at ${event.pageX},${event.pageY}`);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(this.menuDivEl, 'd-none', false);
      this.menuDivEl.style.left = event.pageX + 'px';
      this.menuDivEl.style.top = event.pageY + 'px';
    }
  }

}

/***/ }),

/***/ "./src/framework/ui/helper/SimpleValueDataSource.ts":
/*!**********************************************************!*\
  !*** ./src/framework/ui/helper/SimpleValueDataSource.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleValueDataSource": () => (/* binding */ SimpleValueDataSource)
/* harmony export */ });
class SimpleValueDataSource {
  // static value list
  constructor(options) {
    this.options = options;
    this.listeners = [];
  }

  addValueOption(name, value) {
    this.options.push({
      name,
      value
    });
    this.listeners.forEach(listener => listener.optionsChanged(this.options));
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  getOptions() {
    return this.options;
  }

}

/***/ }),

/***/ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts":
/*!******************************************************************************!*\
  !*** ./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewEventHandlerDelegate": () => (/* binding */ CollectionViewEventHandlerDelegate)
/* harmony export */ });
/* harmony import */ var _implementation_AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../implementation/AbstractView */ "./src/framework/ui/view/implementation/AbstractView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alert/AlertManager */ "./src/framework/ui/alert/AlertManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alert/AlertListener */ "./src/framework/ui/alert/AlertListener.ts");





const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-event-handler-delegate');
class CollectionViewEventHandlerDelegate {
  selectedItem = null;

  constructor(view, forwarder) {
    this.view = view;
    this.eventForwarder = forwarder; // event handlers

    this.eventStartDrag = this.eventStartDrag.bind(this);
    this.eventActionClicked = this.eventActionClicked.bind(this);
    this.eventClickItem = this.eventClickItem.bind(this);
    this.eventDeleteClickItem = this.eventDeleteClickItem.bind(this);
  }

  getDragData(event) {
    const context = this.getItemContext(event);
    let itemId = context.itemId;
    const dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger(`view ${this.view.getName()}: Item with id ${itemId} getting drag data from ${dataSource}`);
    let compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    let selectedItem = {};
    selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      var _this$view$getCollect, _this$view$getCollect2; // @ts-ignore


      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_TYPE] = (_this$view$getCollect = this.view.getCollectionUIConfig().detail.drag) === null || _this$view$getCollect === void 0 ? void 0 : _this$view$getCollect.type; // @ts-ignore

      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_FROM] = (_this$view$getCollect2 = this.view.getCollectionUIConfig().detail.drag) === null || _this$view$getCollect2 === void 0 ? void 0 : _this$view$getCollect2.from;
    }

    return selectedItem;
  }

  eventStartDrag(event) {
    logger(`view ${this.view.getName()}: drag start`);
    logger(event.target);
    const data = JSON.stringify(this.getDragData(event));
    logger(data); // @ts-ignore

    event.dataTransfer.setData(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_KEY_ID, data);
    this.eventForwarder.itemDragStarted(this.view, data);
  }

  eventClickItem(event) {
    event.preventDefault();
    event.stopPropagation();
    const context = this.getItemContext(event);
    let itemId = context.itemId;
    const dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger(`view ${this.view.getName()}: Item with id ${itemId} clicked from ${dataSource}`);
    let compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    let selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);
    logger(selectedItem);

    if (selectedItem) {
      const shouldSelect = this.eventForwarder.canSelectItem(this.view, selectedItem);
      logger(`view ${this.view.getName()}: Item with id ${itemId} attempting selected from ${dataSource} - ${shouldSelect}`);

      if (shouldSelect) {
        this.selectedItem = selectedItem;
        logger(selectedItem);
        this.eventForwarder.itemSelected(this.view, selectedItem);
      }
    }
  }

  eventDeleteClickItem(event) {
    event.preventDefault();
    event.stopPropagation();
    const context = this.getItemContext(event);
    let itemId = context.itemId;
    const dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger(`view ${this.view.getName()}: Item with id ${itemId} attempting delete from ${dataSource}`);
    let compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    let selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      const shouldDelete = this.eventForwarder.canDeleteItem(this.view, selectedItem);
      logger(`view ${this.view.getName()}: Item with id ${itemId} attempting delete from ${dataSource} - ${shouldDelete}`);

      if (shouldDelete) {
        // do we need to confirm?
        if (this.view.getCollectionUIConfig().detail.quickDelete) {
          this.selectedItem = null;
          this.eventForwarder.itemDeleted(this.view, selectedItem);
        } else {
          _alert_AlertManager__WEBPACK_IMPORTED_MODULE_2__.AlertManager.getInstance().startAlert(this, this.view.getName(), `Are you sure you want to delete this information?`, selectedItem);
        }
      }
    }
  }

  eventActionClicked(event) {
    event.preventDefault();
    event.stopPropagation();
    const context = this.getItemContext(event);
    let itemId = context.itemId;
    const dataSource = context.dataSource; // @ts-ignore

    const actionName = event.target.getAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME);

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger(`view ${this.view.getName()}: Item with id ${itemId} attempting action ${actionName} from ${dataSource}`);
    let compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    let selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      const shouldSelect = this.eventForwarder.canSelectItem(this.view, selectedItem);
      logger(`view ${this.view.getName()}: Item with id ${itemId} attempting action ${actionName} from ${dataSource} - ${shouldSelect}`);

      if (shouldSelect) {
        this.selectedItem = selectedItem;
        logger(selectedItem);
        this.eventForwarder.itemAction(this.view, actionName, selectedItem);
      }
    }
  }

  completed(event) {
    logger(event.context);

    if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_4__.AlertType.confirmed) {
      this.selectedItem = null;
      this.eventForwarder.itemDeleted(this.view, event.context);
    }
  }

  getItemContext(event) {
    // @ts-ignore
    const itemId = event.target.getAttribute(this.view.getCollectionUIConfig().keyId); // @ts-ignore

    const dataSource = event.target.getAttribute(_implementation_AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView.DATA_SOURCE);
    let context = {
      itemId: itemId,
      dataSource: dataSource
    };
    return context;
  }

}

/***/ }),

/***/ "./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts":
/*!***************************************************************************!*\
  !*** ./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewListenerForwarder": () => (/* binding */ CollectionViewListenerForwarder)
/* harmony export */ });
/* harmony import */ var _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewListenerForwarder */ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts");

class CollectionViewListenerForwarder extends _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__.ViewListenerForwarder {
  constructor() {
    super();
    this.collectionViewListeners = [];
  }

  addListener(listener) {
    super.addListener(listener);
    this.collectionViewListeners.push(listener);
  }

  itemDragStarted(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(listener => listener.itemDragStarted(view, selectedItem));
    }
  }

  itemSelected(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(listener => listener.itemSelected(view, selectedItem));
    }
  }

  itemDeselected(view, deselectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(listener => listener.itemDeselected(view, deselectedItem));
    }
  }

  canSelectItem(view, selectedItem) {
    let result = true; // return false if cancelling delete

    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(listener => {
        if (!listener.canSelectItem(view, selectedItem)) {
          result = false;
        }
      });
    }

    return result;
  }

}

/***/ }),

/***/ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts":
/*!*****************************************************************!*\
  !*** ./src/framework/ui/view/delegate/ViewListenerForwarder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewListenerForwarder": () => (/* binding */ ViewListenerForwarder)
/* harmony export */ });
class ViewListenerForwarder {
  suppressEventEmits = false;

  constructor() {
    this.viewListeners = [];
  }

  addListener(listener) {
    this.viewListeners.push(listener);
  }

  suppressEvents() {
    this.suppressEventEmits = true;
  }

  emitEvents() {
    this.suppressEventEmits = false;
  }

  itemDeleted(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.itemDeleted(view, selectedItem));
    }
  }

  documentLoaded(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.documentLoaded(view));
    }
  }

  itemAction(view, actionName, selectedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.itemAction(view, actionName, selectedItem));
    }
  }

  canDeleteItem(view, selectedItem) {
    let result = true; // return false if cancelling delete

    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => {
        if (!listener.canDeleteItem(view, selectedItem)) {
          result = false;
        }
      });
    }

    return result;
  }

  hideRequested(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.hideRequested(view));
    }
  }

  showRequested(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.showRequested(view));
    }
  }

  itemDropped(view, droppedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(listener => listener.itemDropped(view, droppedItem));
    }
  }

}

/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractCollectionView.ts":
/*!************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractCollectionView.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractCollectionView": () => (/* binding */ AbstractCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView */ "./src/framework/ui/view/implementation/AbstractView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delegate/CollectionViewListenerForwarder */ "./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts");
/* harmony import */ var _delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delegate/CollectionViewEventHandlerDelegate */ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts");






const avLogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-ts');
const avLoggerDetails = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-ts-detail');
class AbstractCollectionView extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
  constructor(uiConfig, collectionName) {
    super(uiConfig.viewConfig);
    this.collectionUIConfig = uiConfig;
    this.collectionName = collectionName;
    this.renderer = null;
    let forwarder = new _delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_4__.CollectionViewListenerForwarder();
    this.eventForwarder = forwarder;
    this.eventHandlerDelegate = new _delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_5__.CollectionViewEventHandlerDelegate(this, forwarder);
    this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this); // event handlers

    this.eventStartDrag = this.eventStartDrag.bind(this);
    this.eventActionClicked = this.eventActionClicked.bind(this);
    this.eventClickItem = this.eventClickItem.bind(this);
    this.eventDeleteClickItem = this.eventDeleteClickItem.bind(this);
  }

  eventStartDrag(event) {
    this.eventHandlerDelegate.eventStartDrag(event);
  }

  eventClickItem(event) {
    this.eventHandlerDelegate.eventClickItem(event);
  }

  eventDeleteClickItem(event) {
    this.eventHandlerDelegate.eventDeleteClickItem(event);
  }

  eventActionClicked(event) {
    this.eventHandlerDelegate.eventActionClicked(event);
  }

  getCollectionName() {
    return this.collectionName;
  }

  getItemId(from, item) {
    return this.getIdForItemInNamedCollection(from, item);
  }

  getCollectionUIConfig() {
    return this.collectionUIConfig;
  }

  addEventCollectionListener(listener) {
    this.eventForwarder.addListener(listener);
  }

  setContainedBy(container) {
    super.setContainedBy(container);

    if (this.uiConfig.drop) {
      avLoggerDetails(`view ${this.getName()}: Adding dragover events to ${this.uiConfig.dataSourceId}`);
      avLoggerDetails(container);
      container.addEventListener('dragover', event => {
        event.preventDefault();
      });
      container.addEventListener('drop', this.handleDrop);
    }
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    if (this.renderer) this.renderer.onDocumentLoaded();
  }

  renderBackgroundForItemInNamedCollection(containerEl, name, item) {}

  compareItemsForEquality(item1, item2) {
    return (0,_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_2__.isSame)(item1, item2);
  }

  getModifierForItemInNamedCollection(name, item) {
    return _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    return _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
  }

  getBadgeValueForItemInNamedCollection(name, item) {
    return 0;
  }

  getBackgroundImageForItemInNamedCollection(name, item) {
    return '';
  }

  updateViewForNamedCollection(name, newState) {
    if (this.viewEl && this.renderer) {
      this.renderer.setDisplayElementsForCollectionInContainer(this.viewEl, name, newState);
    }
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    return true;
  }

  hasPermissionToUpdateItemInNamedCollection(name, item) {
    return true;
  }

  hasPermissionToActionItemInNamedCollection(actionName, name, item) {
    return true;
  }

  setRenderer(renderer) {
    this.renderer = renderer;
  }

}

/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts":
/*!********************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStatefulCollectionView": () => (/* binding */ AbstractStatefulCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractCollectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCollectionView */ "./src/framework/ui/view/implementation/AbstractCollectionView.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('ab-stateful-collection-view');
class AbstractStatefulCollectionView extends _AbstractCollectionView__WEBPACK_IMPORTED_MODULE_0__.AbstractCollectionView {
  constructor(uiConfig, stateManager, stateName) {
    super(uiConfig, stateName);
    this.stateManager = stateManager; // state change listening

    this.stateChanged = this.stateChanged.bind(this); // setup state listener

    this.stateManager.addChangeListenerForName(this.collectionName, this);
  }

  getItemDescription(from, item) {
    return "";
  }

  hasActionPermission(actionName, from, item) {
    return true;
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.addEventCollectionListener(this);
  }

  getItemInNamedCollection(name, compareWith) {
    return this.stateManager.findItemInState(name, compareWith);
  }

  stateChanged(managerName, name, newValue) {
    logger(`handling state ${name} changed`);
    logger(newValue);
    this.updateViewForNamedCollection(name, newValue);
  }

  stateChangedItemAdded(managerName, name, itemAdded) {
    logger(`handling state ${name} new item added`);
    logger(itemAdded);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  }

  stateChangedItemRemoved(managerName, name, itemRemoved) {
    logger(`handling state ${name} new item removed`);
    logger(itemRemoved);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    logger(`handling state ${name} new item updated`);
    logger(itemNewValue);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  }

  render() {
    this.updateViewForNamedCollection(this.collectionName, this.stateManager.getStateByName(this.collectionName));
  }

  show() {}

  hidden() {}

  documentLoaded(view) {}

  hideRequested(view) {}

  itemDragStarted(view, selectedItem) {}

  itemDropped(view, droppedItem) {}

  showRequested(view) {}

  itemDeselected(view, selectedItem) {}

  itemSelected(view, selectedItem) {}

  itemAction(view, actionName, selectedItem) {}

  itemDeleted(view, selectedItem) {
    this.stateManager.removeItemFromState(this.collectionName, selectedItem, false);
  }

  canSelectItem(view, selectedItem) {
    return true;
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  getListenerName() {
    return this.getName();
  }

  filterResults(managerName, name, filterResults) {}

}

/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractView.ts":
/*!**************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractView": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delegate/ViewListenerForwarder */ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts");



const avLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts');
const avLoggerDetails = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts-detail');
class AbstractView {
  static DATA_SOURCE = 'data-source';
  containerEl = null;

  constructor(uiConfig) {
    this.uiConfig = uiConfig;
    this.viewEl = null;
    this.eventForwarder = new _delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_2__.ViewListenerForwarder();
    this.handleDrop = this.handleDrop.bind(this);
  }

  getItemId(from, item) {
    throw new Error("Method not implemented.");
  }

  getItemDescription(from, item) {
    throw new Error("Method not implemented.");
  }

  hasActionPermission(actionName, from, item) {
    throw new Error("Not implemented");
  }

  getUIConfig() {
    return this.uiConfig;
  }

  addEventListener(listener) {
    this.eventForwarder.addListener(listener);
  }

  onDocumentLoaded() {
    this.viewEl = document.getElementById(this.uiConfig.resultsContainerId);
    this.eventForwarder.documentLoaded(this);
  }

  setContainedBy(container) {
    this.containerEl = container;
  }

  getName() {
    return this.uiConfig.dataSourceId;
  }

  hasChanged() {
    return false;
  }

  getDataSourceKeyId() {
    return AbstractView.DATA_SOURCE;
  }

  handleDrop(event) {
    avLogger(`view ${this.getName()}: drop event`);
    avLoggerDetails(event.target); // @ts-ignore

    const draggedObjectJSON = event.dataTransfer.getData(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_KEY_ID);
    const draggedObject = JSON.parse(draggedObjectJSON);
    avLoggerDetails(draggedObject); // check to see if we accept the dropped type and source

    const droppedObjectType = draggedObject[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_TYPE];
    const droppedObjectFrom = draggedObject[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_FROM];
    avLogger(`view ${this.getName()}: drop event from ${droppedObjectFrom} with type ${droppedObjectType}`);

    if (this.uiConfig.drop) {
      const acceptType = this.uiConfig.drop.acceptTypes.findIndex(objectType => objectType === droppedObjectType) >= 0;
      let acceptFrom = true;

      if (acceptType) {
        if (this.uiConfig.drop.acceptFrom) {
          acceptFrom = this.uiConfig.drop.acceptFrom.findIndex(from => from === droppedObjectFrom) >= 0;
        }

        avLoggerDetails(`view ${this.getName()}: accepted type? ${acceptType} and from? ${acceptFrom}`);

        if (acceptType && acceptFrom) {
          this.eventForwarder.itemDropped(this, draggedObject);
        }
      }
    }
  }

}

/***/ }),

/***/ "./src/framework/ui/view/renderer/ListViewRenderer.ts":
/*!************************************************************!*\
  !*** ./src/framework/ui/view/renderer/ListViewRenderer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewRenderer": () => (/* binding */ ListViewRenderer)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



const avLogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('list-view-renderer');
class ListViewRenderer {
  constructor(view, eventHandler) {
    this.view = view;
    this.eventHandler = eventHandler;
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    const canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    const uiConfig = this.view.getCollectionUIConfig();
    const dataSourceKeyId = this.view.getDataSourceKeyId();
    avLogger(`view ${this.view.getName()}: creating List item`);
    avLogger(item);
    const resultDataKeyId = this.view.getIdForItemInNamedCollection(collectionName, item);
    let childEl = document.createElement(uiConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(childEl, uiConfig.resultsElementAttributes);
    childEl.setAttribute(uiConfig.keyId, resultDataKeyId);
    childEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId); // the content may be structured

    let textEl = childEl;

    if (uiConfig.detail.containerClasses) {
      let contentEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(contentEl, uiConfig.detail.containerClasses);
      contentEl.setAttribute(uiConfig.keyId, resultDataKeyId);
      contentEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
      textEl = document.createElement(uiConfig.detail.textElementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(textEl, uiConfig.detail.textElementClasses);
      textEl.setAttribute(uiConfig.keyId, resultDataKeyId);
      textEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
      contentEl.appendChild(textEl);

      if (uiConfig.detail.background) {
        let imgEl = document.createElement(uiConfig.detail.background.elementType);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(imgEl, uiConfig.detail.background.elementClasses);
        imgEl.setAttribute('src', this.view.getBackgroundImageForItemInNamedCollection(collectionName, item));
        childEl.appendChild(imgEl);
      }

      let buttonsEl = document.createElement('div');
      contentEl.appendChild(buttonsEl);

      if (uiConfig.detail.badge) {
        const badgeValue = this.view.getBadgeValueForItemInNamedCollection(collectionName, item);

        if (badgeValue > 0) {
          let badgeEl = document.createElement(uiConfig.detail.badge.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(badgeEl, uiConfig.detail.badge.elementClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(badgeEl, uiConfig.detail.badge.elementAttributes);
          badgeEl.setAttribute(uiConfig.keyId, resultDataKeyId);
          badgeEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
          buttonsEl.appendChild(badgeEl);
          badgeEl.innerHTML = `&nbsp;&nbsp;&nbsp;${badgeValue}&nbsp;&nbsp;&nbsp;`;
        }
      }

      if (uiConfig.extraActions) {
        uiConfig.extraActions.forEach(extraAction => {
          const hasPermissionForAction = this.view.hasPermissionToActionItemInNamedCollection(extraAction.name, collectionName, item);

          if (hasPermissionForAction) {
            let action = document.createElement('button');
            action.setAttribute('type', 'button');
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(action, extraAction.buttonClasses);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(action, extraAction.attributes);

            if (extraAction.buttonText) {
              action.innerHTML = extraAction.buttonText;
            }

            if (extraAction.iconClasses) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
              iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
              iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
              action.appendChild(iconEl);
            }

            action.setAttribute(uiConfig.keyId, resultDataKeyId);
            action.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
            action.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
            action.addEventListener('click', event => {
              event.preventDefault();
              event.stopPropagation();
              this.eventHandler.eventActionClicked(event);
            });
            buttonsEl.appendChild(action);
          }
        });
      }

      if (uiConfig.detail.delete && canDeleteItem) {
        let deleteButtonEl = document.createElement('button');
        deleteButtonEl.setAttribute('type', 'button');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(deleteButtonEl, uiConfig.detail.delete.buttonClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(deleteButtonEl, uiConfig.detail.delete.attributes);

        if (uiConfig.detail.delete.buttonText) {
          deleteButtonEl.innerHTML = uiConfig.detail.delete.buttonText;
        }

        if (uiConfig.detail.delete.iconClasses) {
          let iconEl = document.createElement('i');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.detail.delete.iconClasses);
          iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
          iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
          deleteButtonEl.appendChild(iconEl);
        }

        deleteButtonEl.setAttribute(uiConfig.keyId, resultDataKeyId);
        deleteButtonEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
        deleteButtonEl.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          this.eventHandler.eventDeleteClickItem(event);
        });
        buttonsEl.appendChild(deleteButtonEl);
      }

      childEl.appendChild(contentEl);

      if (uiConfig.detail.drag) {
        childEl.setAttribute('draggable', 'true');
        childEl.addEventListener('dragstart', this.eventHandler.eventStartDrag);
      } // add selection actions


      if (uiConfig.detail.select) {
        childEl.addEventListener('click', this.eventHandler.eventClickItem);
      }
    } // add the key ids for selection


    textEl.setAttribute(uiConfig.keyId, resultDataKeyId);
    textEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
    this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item); // add icons

    if (uiConfig.detail.icons) {
      const icons = uiConfig.detail.icons(collectionName, item);
      icons.forEach(icon => {
        let iconEl = document.createElement('i');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, icon);
        iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
        iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
        textEl.appendChild(iconEl);
      });
    } // add modifiers for patient state


    if (uiConfig.modifiers) {
      const modifier = this.view.getModifierForItemInNamedCollection(collectionName, item);
      const secondModifier = this.view.getSecondaryModifierForItemInNamedCollection(collectionName, item);

      switch (modifier) {
        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal:
          {
            avLogger(`view ${this.view.getName()}: normal item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal);

            if (uiConfig.icons && uiConfig.icons.normal) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.normal);
              iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
                    iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
                    iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
          {
            avLogger(`view ${this.view.getName()}: active item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active);

            if (uiConfig.icons && uiConfig.icons.active) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
              iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
                    iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive:
          {
            avLogger(`view ${this.view.getName()}: inactive item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive);

            if (uiConfig.icons && uiConfig.icons.inactive) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.inactive);
              iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  if (uiConfig.icons && uiConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
                    iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
                    iconEl.setAttribute(uiConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, uiConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }
      }
    }

    return childEl;
  }

  setDisplayElementsForCollectionInContainer(containerEl, collectionName, newState) {
    avLogger(`view ${this.view.getName()}: creating Results`);
    avLogger(newState); // remove the previous items from list

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildren(containerEl); // add the new children

    newState.map((item, index) => {
      const childEl = this.createDisplayElementForCollectionItem(collectionName, item); // add draggable actions

      avLogger(`view ${this.view.getName()}:  Adding child ${this.view.getIdForItemInNamedCollection(collectionName, item)}`);
      containerEl.appendChild(childEl);
    });
    $('[data-toggle="tooltip"]').tooltip();
  }

  onDocumentLoaded() {}

}

/***/ }),

/***/ "./src/framework/util/BrowserUtil.ts":
/*!*******************************************!*\
  !*** ./src/framework/util/BrowserUtil.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserUtil": () => (/* binding */ BrowserUtil),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class BrowserUtil {
  constructor() {}

  scrollSmoothToId(elementId) {
    const element = document.getElementById(elementId);

    if (element !== null) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }

  scrollToBottomNow(element) {
    if (element) {
      element.scrollTop = element.scrollHeight - element.clientHeight + 100;
    }
  }

  scrollToBottomSmooth(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      element.scrollTop = element.scrollHeight - element.clientHeight + 100;
    }
  }

  scrollSmoothTo(element) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }

  scrollTo(element) {
    element.scrollIntoView({
      block: 'start'
    });
  }

  removeAllChildren(element) {
    if (element && element.firstChild) {
      while (element.firstChild) {
        const lastChild = element.lastChild;
        if (lastChild) element.removeChild(lastChild);
      }
    }
  }

  addRemoveClasses(element, classesText = undefined, isAdding = true) {
    if (classesText) {
      const classes = classesText.split(' ');
      classes.forEach(classValue => {
        if (classValue.trim().length > 0) {
          if (isAdding) {
            element.classList.add(classValue);
          } else {
            element.classList.remove(classValue);
          }
        }
      });
    }
  }

  addAttributes(element, attributes) {
    if (attributes) {
      attributes.forEach(attribute => {
        element.setAttribute(attribute.name, attribute.value);
      });
    }
  }

  removeAttributes(element, attributes) {
    attributes.forEach(attribute => {
      element.removeAttribute(attribute);
    });
  }

  allElementsFromPoint(x, y) {
    var element,
        elements = [];
    var old_visibility = [];

    while (true) {
      element = document.elementFromPoint(x, y);

      if (!element || element === document.documentElement) {
        break;
      }

      elements.push(element); // @ts-ignore

      old_visibility.push(element.style.visibility); // @ts-ignore

      element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }

    for (var k = 0; k < elements.length; k++) {
      // @ts-ignore
      elements[k].style.visibility = old_visibility[k];
    }

    elements.reverse();
    return elements;
  }

}
const browserUtil = new BrowserUtil();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (browserUtil);

/***/ }),

/***/ "./src/framework/util/EqualityFunctions.ts":
/*!*************************************************!*\
  !*** ./src/framework/util/EqualityFunctions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSame": () => (/* binding */ isSame),
/* harmony export */   "isSameMongo": () => (/* binding */ isSameMongo),
/* harmony export */   "isSameUsername": () => (/* binding */ isSameUsername),
/* harmony export */   "isSameRoom": () => (/* binding */ isSameRoom)
/* harmony export */ });
function isSame(item1, item2) {
  return item1.id === item2.id;
}
function isSameMongo(item1, item2) {
  return item1._id === item2._id;
}
function isSameUsername(item1, item2) {
  return item1.username === item2.username;
}
function isSameRoom(item1, item2) {
  return item1.roomName === item2.roomName;
}

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/Controller */ "./src/app/Controller.ts");
/* harmony import */ var _app_AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/AppointmentController */ "./src/app/AppointmentController.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/ui/context/ContextualInformationHelper */ "./src/framework/ui/context/ContextualInformationHelper.ts");
/* harmony import */ var _framework_security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./framework/security/SecurityManager */ "./src/framework/security/SecurityManager.ts");
/* harmony import */ var _framework_ui_chat_UserSearchSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./framework/ui/chat/UserSearchSidebar */ "./src/framework/ui/chat/UserSearchSidebar.ts");
/* harmony import */ var _framework_ui_chat_ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./framework/ui/chat/ChatRoomsSidebar */ "./src/framework/ui/chat/ChatRoomsSidebar.ts");
//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';












const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('app');
class App extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  thisEl = null;
  chatNavigationItem = null;
  datePicker = null;
  calendar = null;

  constructor() {
    // @ts-ignore
    super(); // event handlers

    this.handleShowUserSearch = this.handleShowUserSearch.bind(this);
    this.handleShowChat = this.handleShowChat.bind(this);
    _app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().connectToApplication(this, window.localStorage);
  }

  render() {
    logger("Rendering App");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null);
  }

  componentDidMount() {
    logger('component Did Mount');
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    this.setupUserSearchViews();
    this.setupChatViews();
    this.setupNavigationItemHandling(); // setup the scheduler
    // @ts-ignore

    this.datePicker = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_5__.datepicker)(document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_CONTAINER.calendarControl), {
      controls: ['calendar'],
      display: "inline",
      dateFormat: 'YYYYMMDD',
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      showWeekNumbers: true,
      onChange: (event, inst) => {
        var _this$calendar;

        (_this$calendar = this.calendar) === null || _this$calendar === void 0 ? void 0 : _this$calendar.navigate(event.value);
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().handleNewDatePicked(event.value, inst);
      }
    }); // @ts-ignore

    this.calendar = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_5__.eventcalendar)(document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_CONTAINER.calendarDetail), {
      clickToCreate: 'double',
      dragTimeStep: 5,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      min: moment__WEBPACK_IMPORTED_MODULE_7___default()().subtract(3, "months"),
      controls: ['calendar'],
      showControls: true,
      view: {
        schedule: {
          type: 'day',
          startDay: 1,
          endDay: 5,
          startTime: '09:00',
          endTime: '16:00',
          timeCellStep: 10,
          timeLabelStep: 60
        }
      },
      invalidateEvent: 'strict',
      invalid: [{
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU'
        }
      }, {
        start: '12:15',
        end: '16:00',
        title: 'Close Early',
        recurring: {
          repeat: 'weekly',
          weekDays: 'FR'
        }
      }, {
        start: '12:00',
        end: '13:00',
        title: 'Lunch Break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH'
        }
      }],
      onSelectedDateChange: (event, inst) => {
        var _this$datePicker;

        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().handleNewDatePicked(event.date, inst);
        (_this$datePicker = this.datePicker) === null || _this$datePicker === void 0 ? void 0 : _this$datePicker.setVal(event.date);
      },
      onPageLoading: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onPageLoading(event, inst);
      },
      onEventCreated: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentCreated(event, inst);
      },
      onEventDelete: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentDeleting(event, inst);
      },
      onEventDeleted: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentDeleted(event, inst);
      },
      onEventRightClick: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentContext(event, inst);
      },
      onEventUpdated: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentUpdated(event, inst);
      },
      onEventDoubleClick: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().onAppointmentEditRequested(event, inst);
      }
    });
    if (this.calendar && this.datePicker) _app_AppointmentController__WEBPACK_IMPORTED_MODULE_6__.AppointmentController.getInstance().setViewObjects(this.datePicker, this.calendar);
    _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_8__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    _framework_security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__.SecurityManager.getInstance().onDocumentLoaded(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.logout);
    _app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().onDocumentLoaded();
  }

  getCurrentUser() {
    return _app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getLoggedInUserId();
  }

  hideAllSideBars() {
    this.chatSidebar.eventHide(null);
    this.userSearchSidebar.eventHide(null);
  }

  handleShowUserSearch(event) {
    logger('Handling Show User Search');
    event.preventDefault(); //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.login;
      return;
    }

    this.userSearchSidebar.eventShow(event);
  }

  handleShowChat(roomName) {
    logger('Handling Show Chat'); // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.login;
      return;
    }

    this.chatSidebar.eventShow(null);

    if (roomName) {
      this.chatView.selectChatRoom(roomName);
    }
  }

  countChanged(newCount) {
    //
    let buffer = 'Chat <i class="fas fa-inbox"></i>';

    if (newCount > 0) {
      buffer += ` <span class="badge badge-pill badge-primary">&nbsp;${newCount}&nbsp;</span>`;
    }

    if (this.chatNavigationItem) this.chatNavigationItem.innerHTML = `${buffer}`;
  }

  setupNavigationItemHandling() {
    // @ts-ignore
    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.userSearchId).addEventListener('click', this.handleShowUserSearch); // @ts-ignore

    this.chatNavigationItem = document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.chatId); // @ts-ignore

    this.chatNavigationItem.addEventListener('click', this.handleShowChat);
  }

  setupUserSearchViews() {
    // add the subviews for the user search
    this.userSearchSidebar = _framework_ui_chat_UserSearchSidebar__WEBPACK_IMPORTED_MODULE_10__.UserSearchSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager());
    this.userSearchSidebar.onDocumentLoaded();
  }

  setupChatViews() {
    // add the views to the chat side bar
    this.chatSidebar = _framework_ui_chat_ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_11__.ChatRoomsSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager());
    this.chatSidebar.onDocumentLoaded();
  }

}
localStorage.debug = 'api-ts-results dm-api-ts';
localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_0___default().log) = console.info.bind(console);
$(function () {
  (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_5__.setOptions)({
    theme: 'ios',
    themeVariant: 'light'
  }); //datepicker("#calendarControl",{display:'inline'});
  // @ts-ignore

  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(App, {
    className: "container-fluid justify-content-around"
  });
  react_dom__WEBPACK_IMPORTED_MODULE_4__.render(element, document.getElementById('root'));
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_feo_react_babel"] = self["webpackChunktemplate_feo_react_babel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map