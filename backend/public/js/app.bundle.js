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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "../../ui-framework/dist/index.js");

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
  appointments: 'appointment'
};
const API_Config = {
  login: '/login',
  users: '/api/users',
  exerciseTypes: '/api/exercise-types',
  workouts: '/api/workouts'
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
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.right
};
const CurrentWorkoutContainers = {
  list: 'exercises',
  detail: 'workoutDetail'
};
const ExerciseTypesSidebarPrefs = {
  id: 'exerciseTypesSidebar',
  expandedSize: '50%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left
};
const ExerciseTypesSidebarContainers = {
  container: 'exerciseTypesContainer'
};
const WorkoutSummarySidebarPrefs = {
  id: 'workoutSummarySidebar',
  expandedSize: '100%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.bottom
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
/* harmony export */   "AppointmentType": () => (/* binding */ AppointmentType),
/* harmony export */   "AppointmentController": () => (/* binding */ AppointmentController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");




let AppointmentType;

(function (AppointmentType) {
  AppointmentType["Urgent"] = "Urgent Appointment";
  AppointmentType["Appointment"] = "Appointment";
  AppointmentType["Review"] = "Review/Recall";
  AppointmentType["Telehealth"] = "TeleHealth Call";
  AppointmentType["Consulting"] = "Consulting";
  AppointmentType["Fluvax"] = "Fluvax";
})(AppointmentType || (AppointmentType = {}));

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
      case AppointmentType.Urgent:
        {
          return `rgba(200,100,10,50)`;
        }

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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "../../ui-framework/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketListenerDelegate */ "./src/app/SocketListenerDelegate.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EqualityFunctions */ "./src/app/EqualityFunctions.ts");






const cLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('controller-ts');
const cLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_1___default()('controller-ts-detail');
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

    let restSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.RESTApiStateManager.getInstance();
    restSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.users,
      isActive: true
    }]);
    let qlSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.GraphQLApiStateManager.getInstance();
    qlSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.patientSearch,
      serverURL: '',
      apiURL: '/graphql',
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
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments,
      serverURL: '',
      apiURL: '/graphql',
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
    }]);
    let aggregateSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AggregateStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo);
    let memorySM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.MemoryBufferStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo);
    let asyncREST = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AsyncStateManagerWrapper(aggregateSM, restSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo);
    let asyncQL = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AsyncStateManagerWrapper(aggregateSM, qlSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo);
    aggregateSM.addStateManager(memorySM, [], false);
    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.patientSearch, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.recentPatientSearches], false);
    aggregateSM.addStateManager(asyncQL, [_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.workouts], false);
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

    let socketListerDelegate = new _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_2__["default"]();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SocketManager.getInstance().setListener(socketListerDelegate); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger(`Setting up chat system for user ${this.getLoggedInUserId()}: ${this.getLoggedInUsername()}`);

    if (this.getLoggedInUserId().trim().length > 0) {
      // setup the chat system
      let chatManager = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ChatManager.getInstance(); // this connects the manager to the socket system
      // setup the chat notification system

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.NotificationController.getInstance();
      chatManager.setCurrentUser(this.getLoggedInUsername()); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.patientSearch);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments); // apply any queued changes from being offline

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DownloadManager.getInstance().processOfflineItems();
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
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
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
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
        {
          cLogger(`Handling delete exercise type - already managed by stateful collection view`);
          cLoggerDetail(dataObj);
          break;
        }
    }
  }

  update(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
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
    copyOfExercise._id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(); // update the id to be unique for the workout

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
    let exerciseTypeDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, 'Exercise', true, true, true, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Exercise name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.limitedChoice, true, "Choose cardio or strength", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SimpleValueDataSource([{
      name: 'Cardio',
      value: 'cardio'
    }, {
      name: 'Strength',
      value: 'strength'
    }]));
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "duration", "Duration", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.duration, true, "Exercise time");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "sets", "Sets", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer, false, "Number of sets");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "reps", "Repetitions", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer, false, "Number of reps");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "weight", "Weight", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.float, false, "Weight used");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "distance", "Distance", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.float, false, "Distance travelled");
    cLogger(`Exercise type data object definition`);
    cLogger(exerciseTypeDefinition);
    cLoggerDetail(ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition('exerciseType'));
    let workoutDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.workouts, 'Workout', true, true, true, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Give the workout a name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "completed", "Completed", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.boolean, true, "Have completed the workout");
    let exercisesFieldDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "exercises", "Exercises", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.collection, true, "Exercises in this workout");
    exercisesFieldDefinition.idType = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.KeyType.collection;
    exercisesFieldDefinition.collectionOfDataObjectId = exerciseTypeDefinition.id;
    cLogger(`Workout data object definition`);
    cLogger(workoutDefinition);
    cLoggerDetail(ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition('workout'));
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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "../../ui-framework/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");




const slLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('socket-listener');
class SocketListenerDelegate {
  constructor() {}

  handleDataChangedByAnotherUser(message) {
    slLogger(`Handling data change ${message.type} on object type ${message.stateName} made by user ${message.user}`);
    const changeUser = _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users, {
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
              case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users, stateObj, true);
                  ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.NotificationManager.getInstance().show(stateObj.username, `${stateObj.username} has just registered.`, ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.NotificationType.info);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, stateObj, true);
                  break;
                }
            }

            break;
          }

        case "update":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, stateObj, true);
                  break;
                }
            }

            break;
          }

        case "delete":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, stateObj, true);
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
    return _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUserId();
  }

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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "../../ui-framework/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/Controller */ "./src/app/Controller.ts");
/* harmony import */ var _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/AppointmentController */ "./src/app/AppointmentController.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';









const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('app');
class App extends react__WEBPACK_IMPORTED_MODULE_4__.Component {
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
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().connectToApplication(this, window.localStorage);
  }

  render() {
    logger("Rendering App");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null);
  }

  componentDidMount() {
    logger('component Did Mount');
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    this.setupUserSearchViews();
    this.setupChatViews();
    this.setupNavigationItemHandling(); // setup the scheduler
    // @ts-ignore

    this.datePicker = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__.datepicker)(document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_CONTAINER.calendarControl), {
      controls: ['calendar'],
      display: "inline",
      dateFormat: 'YYYYMMDD',
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      showWeekNumbers: true,
      onChange: (event, inst) => {
        var _this$calendar;

        (_this$calendar = this.calendar) === null || _this$calendar === void 0 ? void 0 : _this$calendar.navigate(event.value);
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().handleNewDatePicked(event.value, inst);
      }
    }); // @ts-ignore

    this.calendar = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__.eventcalendar)(document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_CONTAINER.calendarDetail), {
      clickToCreate: 'double',
      dragTimeStep: 5,
      dragToCreate: true,
      dragToMove: true,
      dragToResize: true,
      min: moment__WEBPACK_IMPORTED_MODULE_8___default()().subtract(3, "months"),
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

        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().handleNewDatePicked(event.date, inst);
        (_this$datePicker = this.datePicker) === null || _this$datePicker === void 0 ? void 0 : _this$datePicker.setVal(event.date);
      },
      onPageLoading: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onPageLoading(event, inst);
      },
      onEventCreated: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentCreated(event, inst);
      },
      onEventDelete: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentDeleting(event, inst);
      },
      onEventDeleted: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentDeleted(event, inst);
      },
      onEventRightClick: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentContext(event, inst);
      },
      onEventUpdated: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentUpdated(event, inst);
      },
      onEventDoubleClick: (event, inst) => {
        _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().onAppointmentEditRequested(event, inst);
      }
    });
    if (this.calendar && this.datePicker) _app_AppointmentController__WEBPACK_IMPORTED_MODULE_7__.AppointmentController.getInstance().setViewObjects(this.datePicker, this.calendar);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().onDocumentLoaded(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.logout);
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().onDocumentLoaded();
  }

  getCurrentUser() {
    return _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUserId();
  }

  hideAllSideBars() {
    this.chatSidebar.eventHide(null);
    this.userSearchSidebar.eventHide(null);
  }

  handleShowUserSearch(event) {
    logger('Handling Show User Search');
    event.preventDefault(); //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.login;
      return;
    }

    this.userSearchSidebar.eventShow(event);
  }

  handleShowChat(roomName) {
    logger('Handling Show Chat'); // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.login;
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
    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.userSearchId).addEventListener('click', this.handleShowUserSearch); // @ts-ignore

    this.chatNavigationItem = document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.chatId); // @ts-ignore

    this.chatNavigationItem.addEventListener('click', this.handleShowChat);
  }

  setupUserSearchViews() {
    // add the subviews for the user search
    this.userSearchSidebar = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.UserSearchSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager());
    this.userSearchSidebar.onDocumentLoaded();
  }

  setupChatViews() {
    // add the views to the chat side bar
    this.chatSidebar = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ChatRoomsSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager());
    this.chatSidebar.onDocumentLoaded();
  }

}
localStorage.debug = 'state-manager-graphql api-ts app controller-ts appointment-controller';
localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_1___default().log) = console.info.bind(console);
$(function () {
  (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__.setOptions)({
    theme: 'ios',
    themeVariant: 'light'
  }); //datepicker("#calendarControl",{display:'inline'});
  // @ts-ignore

  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(App, {
    className: "container-fluid justify-content-around"
  });
  react_dom__WEBPACK_IMPORTED_MODULE_5__.render(element, document.getElementById('root'));
});

/***/ }),

/***/ "../../ui-framework/dist/framework/CommonTypes.js":
/*!********************************************************!*\
  !*** ../../ui-framework/dist/framework/CommonTypes.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonType": () => (/* binding */ ComparisonType)
/* harmony export */ });
var ComparisonType;

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

/***/ "../../ui-framework/dist/framework/jsx/JSXParser.js":
/*!**********************************************************!*\
  !*** ../../ui-framework/dist/framework/jsx/JSXParser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsxCreateElement": () => (/* binding */ jsxCreateElement),
/* harmony export */   "jsxCreateFragment": () => (/* binding */ jsxCreateFragment)
/* harmony export */ });
function jsxCreateElement(tag, props, ...children) {
  if (typeof tag === "function") return tag(props, ...children);
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) element.addEventListener(name.toLowerCase().substr(2), value);else {
      if (name === 'className') name = 'class'; // @ts-ignore

      element.setAttribute(name, value.toString());
    }
  });
  children.forEach(child => {
    jsxAppendChild(element, child);
  });
  return element;
}

function jsxAppendChild(parent, child) {
  if (Array.isArray(child)) child.forEach(nestedChild => jsxAppendChild(parent, nestedChild));else parent.appendChild(child.nodeType ? child : document.createTextNode(child));
}

function jsxCreateFragment(props, ...children) {
  return children;
}

/***/ }),

/***/ "../../ui-framework/dist/framework/model/BasicFieldOperations.js":
/*!***********************************************************************!*\
  !*** ../../ui-framework/dist/framework/model/BasicFieldOperations.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFieldOperations": () => (/* binding */ BasicFieldOperations)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../ui-framework/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "../../ui-framework/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");






const flogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-formatter');
const vlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-validator');
const glogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-generator');
const rlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-renderer');
class BasicFieldOperations {
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
BasicFieldOperations.dateRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))$/;
BasicFieldOperations.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
BasicFieldOperations.shortTimeRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
BasicFieldOperations.timeRegex = /^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
BasicFieldOperations.dateTimeRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))\s([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
BasicFieldOperations.basicPasswordRegex = /^[a-zA-Z0-9]{8,15}$/;
BasicFieldOperations.integerRegex = /^[+-]?\d+$/;
BasicFieldOperations.floatRegexp = /^[+-]?\d+(\.\d+)?$/;
BasicFieldOperations.booleanRegexp = /^true|false$/;
BasicFieldOperations.durationRegexp = /^(\d+:)?[0-5]?\d:[0-5]\d$/;

/***/ }),

/***/ "../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js":
/*!*******************************************************************************!*\
  !*** ../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicFieldOperations */ "../../ui-framework/dist/framework/model/BasicFieldOperations.js");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");



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

/***/ "../../ui-framework/dist/framework/model/DataObjectController.js":
/*!***********************************************************************!*\
  !*** ../../ui-framework/dist/framework/model/DataObjectController.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataObjectController": () => (/* binding */ DataObjectController)
/* harmony export */ });
class DataObjectController {
  constructor(typeName) {
    this.isCreatingNew = false;
    this.typeName = typeName;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  startNewObject() {
    let result = false;

    if (!this.isCreatingNew) {
      result = this._startNewObject();
      this.isCreatingNew = result;
    }

    return result;
  }

  isCreatingNewObject() {
    return this.isCreatingNew;
  }

  informListenersOfCreate(dataObj) {
    this.isCreatingNew = false;
    this.listeners.forEach(listener => listener.create(this, this.typeName, dataObj));
  }

  informListenersOfUpdate(dataObj) {
    this.isCreatingNew = false;
    this.listeners.forEach(listener => listener.update(this, this.typeName, dataObj));
  }

  informListenersOfDelete(dataObj) {
    this.isCreatingNew = false;
    this.listeners.forEach(listener => listener.delete(this, this.typeName, dataObj));
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js":
/*!*********************************************************************!*\
  !*** ../../ui-framework/dist/framework/model/DataObjectTypeDefs.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldType": () => (/* binding */ FieldType)
/* harmony export */ });
var FieldType;

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

/***/ "../../ui-framework/dist/framework/model/ObjectDefinitionRegistry.js":
/*!***************************************************************************!*\
  !*** ../../ui-framework/dist/framework/model/ObjectDefinitionRegistry.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectDefinitionRegistry": () => (/* binding */ ObjectDefinitionRegistry)
/* harmony export */ });
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicObjectDefinitionFactory */ "../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicFieldOperations */ "../../ui-framework/dist/framework/model/BasicFieldOperations.js");




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

/***/ "../../ui-framework/dist/framework/network/ApiUtil.js":
/*!************************************************************!*\
  !*** ../../ui-framework/dist/framework/network/ApiUtil.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiUtil": () => (/* binding */ ApiUtil)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


const apiLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('api-ts');
class ApiUtil {
  static getInstance() {
    if (!ApiUtil._instance) {
      ApiUtil._instance = new ApiUtil();
    }

    return ApiUtil._instance;
  }

  postFetchJSON(url, query) {
    return __awaiter(this, void 0, void 0, function* () {
      const postParameters = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query
        })
      };
      const response = yield fetch(url, postParameters);
      return response.json();
    });
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
      body: JSON.stringify(Object.assign({}, request.originalRequest.params))
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
      body: JSON.stringify(Object.assign({}, request.originalRequest.params))
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
        apiLogger(response.json());
      }
    }).then(data => {
      apiLogger(data);
      callback(data, 200, queueType, requestId);
    }).catch(error => {
      apiLogger(error);
      callback(null, 500, queueType, requestId);
    });
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/network/CallbackRegistry.js":
/*!*********************************************************************!*\
  !*** ../../ui-framework/dist/framework/network/CallbackRegistry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackRegistry": () => (/* binding */ CallbackRegistry)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('callback-registry');
class CallbackRegistry {
  constructor() {
    this.callbacks = [];
  }

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

/***/ "../../ui-framework/dist/framework/network/DownloadManager.js":
/*!********************************************************************!*\
  !*** ../../ui-framework/dist/framework/network/DownloadManager.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadManager": () => (/* binding */ DownloadManager)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "../../ui-framework/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "../../ui-framework/dist/framework/network/Types.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CallbackRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallbackRegistry */ "../../ui-framework/dist/framework/network/CallbackRegistry.js");
/* harmony import */ var _OfflineManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfflineManager */ "../../ui-framework/dist/framework/network/OfflineManager.js");
/* harmony import */ var _ApiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApiUtil */ "../../ui-framework/dist/framework/network/ApiUtil.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};







const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('api-ts');
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

  addApiRequest(jsonRequest, isPriority = false, wasOffline = false) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
  }

  processPriorityQueue() {
    return __awaiter(this, void 0, void 0, function* () {
      const queueItem = this.priorityQueue.shift();
      if (queueItem !== undefined) this.inProgress.push(queueItem);
      if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);
    });
  }

  processBackgroundQueue() {
    return __awaiter(this, void 0, void 0, function* () {
      const queueItem = this.backgroundQueue.shift();
      if (queueItem !== undefined) this.inProgress.push(queueItem);
      if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);
    });
  }

  processQueues() {
    return __awaiter(this, void 0, void 0, function* () {
      let totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;

      while (totalQueuedItems > 0) {
        logger(`processing queue, items remaining ${totalQueuedItems}`); // priority queue takes priority

        if (this.priorityQueue.length > 0) {
          yield this.processPriorityQueue();
        } else if (this.backgroundQueue.length > 0) {
          yield this.processBackgroundQueue();
        }

        totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;
      }
    });
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

/***/ "../../ui-framework/dist/framework/network/OfflineManager.js":
/*!*******************************************************************!*\
  !*** ../../ui-framework/dist/framework/network/OfflineManager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineManager": () => (/* binding */ OfflineManager)
/* harmony export */ });
/* harmony import */ var _Poller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poller */ "../../ui-framework/dist/framework/network/Poller.js");
/* harmony import */ var _state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/IndexedDBStateManager */ "../../ui-framework/dist/framework/state/IndexedDBStateManager.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "../../ui-framework/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadManager */ "../../ui-framework/dist/framework/network/DownloadManager.js");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/NotificationManager */ "../../ui-framework/dist/framework/notification/NotificationManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);






const logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('offline-manager');
class OfflineManager {
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
OfflineManager.DB_NAME = 'offline.manager.db';
OfflineManager.OBJECT_STORE = 'offline.manager.db.requests';

/***/ }),

/***/ "../../ui-framework/dist/framework/network/Poller.js":
/*!***********************************************************!*\
  !*** ../../ui-framework/dist/framework/network/Poller.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Poller": () => (/* binding */ Poller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('poller');
class Poller {
  constructor() {
    this.interval = null;
    this.isPollingBool = false;
  }

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
Poller.INTERVAL_DEFAULT = 10000; // 30 seconds

Poller.URL_CALL = '/ping';

/***/ }),

/***/ "../../ui-framework/dist/framework/network/Types.js":
/*!**********************************************************!*\
  !*** ../../ui-framework/dist/framework/network/Types.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestType": () => (/* binding */ RequestType),
/* harmony export */   "queueType": () => (/* binding */ queueType)
/* harmony export */ });
var RequestType;

(function (RequestType) {
  RequestType[RequestType["POST"] = 0] = "POST";
  RequestType[RequestType["GET"] = 1] = "GET";
  RequestType[RequestType["PUT"] = 2] = "PUT";
  RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));

var queueType;

(function (queueType) {
  queueType[queueType["PRIORITY"] = 0] = "PRIORITY";
  queueType[queueType["BACKGROUND"] = 1] = "BACKGROUND";
})(queueType || (queueType = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/notification/BootstrapNotification.js":
/*!*******************************************************************************!*\
  !*** ../../ui-framework/dist/framework/notification/BootstrapNotification.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapNotification": () => (/* binding */ BootstrapNotification)
/* harmony export */ });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "../../ui-framework/dist/framework/notification/Notification.js");
/* harmony import */ var _NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationManager */ "../../ui-framework/dist/framework/notification/NotificationManager.js");


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

/***/ "../../ui-framework/dist/framework/notification/Notification.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/notification/Notification.js ***!
  \**********************************************************************/
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
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/notification/NotificationFactory.js":
/*!*****************************************************************************!*\
  !*** ../../ui-framework/dist/framework/notification/NotificationFactory.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationFactory": () => (/* binding */ NotificationFactory)
/* harmony export */ });
/* harmony import */ var _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootstrapNotification */ "../../ui-framework/dist/framework/notification/BootstrapNotification.js");

class NotificationFactory {
  constructor() {}

  static getInstance() {
    if (!NotificationFactory._instance) {
      NotificationFactory._instance = new NotificationFactory();
    }

    return NotificationFactory._instance;
  }

  createNotification(manager) {
    return new _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__.BootstrapNotification(manager);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/notification/NotificationManager.js":
/*!*****************************************************************************!*\
  !*** ../../ui-framework/dist/framework/notification/NotificationManager.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType),
/* harmony export */   "NotificationManager": () => (/* binding */ NotificationManager)
/* harmony export */ });
/* harmony import */ var _NotificationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationFactory */ "../../ui-framework/dist/framework/notification/NotificationFactory.js");

var NotificationType;

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

/***/ "../../ui-framework/dist/framework/security/SecurityManager.js":
/*!*********************************************************************!*\
  !*** ../../ui-framework/dist/framework/security/SecurityManager.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityManager": () => (/* binding */ SecurityManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('security-manager');
class SecurityManager {
  constructor() {
    this.hash = null;
    this.logoutEl = null;
  }

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

/***/ "../../ui-framework/dist/framework/socket/ChatManager.js":
/*!***************************************************************!*\
  !*** ../../ui-framework/dist/framework/socket/ChatManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatManager": () => (/* binding */ ChatManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../ui-framework/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocketManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketManager */ "../../ui-framework/dist/framework/socket/SocketManager.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types */ "../../ui-framework/dist/framework/socket/Types.js");
/* harmony import */ var _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/BrowserStorageStateManager */ "../../ui-framework/dist/framework/state/BrowserStorageStateManager.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "../../ui-framework/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/EqualityFunctions */ "../../ui-framework/dist/framework/util/EqualityFunctions.js");







var UserStatus;

(function (UserStatus) {
  UserStatus[UserStatus["LoggedOut"] = 0] = "LoggedOut";
  UserStatus[UserStatus["LoggedIn"] = 1] = "LoggedIn";
})(UserStatus || (UserStatus = {}));

const cmLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-manager');
class ChatManager {
  constructor() {
    this.blockedList = [];
    this.favouriteList = [];
    this.loggedInUsers = [];
    this.currentUsername = '';
    this.unreadListener = null;
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
    var _a;

    let unreadCount = 0;
    this.chatLogs.forEach(log => {
      unreadCount += log.numOfNewMessages;
    });
    (_a = this.unreadListener) === null || _a === void 0 ? void 0 : _a.countChanged(unreadCount);
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
ChatManager.chatLogKey = 'im-board-chat-logs';
ChatManager.blockedListKey = 'im-board-blocked-list';
ChatManager.favouriteListKey = 'im-board-favourite-list';

/***/ }),

/***/ "../../ui-framework/dist/framework/socket/NotificationController.js":
/*!**************************************************************************!*\
  !*** ../../ui-framework/dist/framework/socket/NotificationController.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationController": () => (/* binding */ NotificationController)
/* harmony export */ });
/* harmony import */ var _ChatManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification/NotificationManager */ "../../ui-framework/dist/framework/notification/NotificationManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types */ "../../ui-framework/dist/framework/socket/Types.js");




const notLogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('notification-controller');
class NotificationController {
  constructor() {
    this.doNotDisturb = false;
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

/***/ "../../ui-framework/dist/framework/socket/SocketManager.js":
/*!*****************************************************************!*\
  !*** ../../ui-framework/dist/framework/socket/SocketManager.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketManager": () => (/* binding */ SocketManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "../../ui-framework/dist/framework/socket/Types.js");


const sDebug = debug__WEBPACK_IMPORTED_MODULE_0___default()('socket-ts');
class SocketManager {
  constructor() {
    this.chatReceivers = [];
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

/***/ "../../ui-framework/dist/framework/socket/Types.js":
/*!*********************************************************!*\
  !*** ../../ui-framework/dist/framework/socket/Types.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* binding */ Priority),
/* harmony export */   "InviteType": () => (/* binding */ InviteType)
/* harmony export */ });
var Priority;

(function (Priority) {
  Priority[Priority["Normal"] = 0] = "Normal";
  Priority[Priority["High"] = 1] = "High";
  Priority[Priority["Urgent"] = 2] = "Urgent";
})(Priority || (Priority = {}));

var InviteType;

(function (InviteType) {
  InviteType[InviteType["ChatRoom"] = 0] = "ChatRoom";
  InviteType[InviteType["ScoreSheet"] = 1] = "ScoreSheet";
})(InviteType || (InviteType = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/state/AbstractStateManager.js":
/*!***********************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/AbstractStateManager.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStateManager": () => (/* binding */ AbstractStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateChangedDelegate */ "../../ui-framework/dist/framework/state/StateChangedDelegate.js");
/* harmony import */ var _CommonTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonTypes */ "../../ui-framework/dist/framework/CommonTypes.js");




const smLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-ts');
class AbstractStateManager {
  constructor(managerName, defaultEquality, fnPerState = null) {
    this.forceSaves = true;
    this.managerName = '';
    this.equalityFns = null;
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
    this._ensureStatePresent(name);

    smLogger(`State Manager: Adding item to state ${name}`); // const state = this.getStateByName(name);
    // state.push(item);
    // smLogger(state);

    this._addItemToState(name, item, isPersisted);

    this.informChangeListenersForStateWithName(name, item, _StateManager__WEBPACK_IMPORTED_MODULE_1__.StateEventType.ItemAdded);
  }

  findItemInState(name, item) {
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

/***/ "../../ui-framework/dist/framework/state/AggregateStateManager.js":
/*!************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/AggregateStateManager.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateStateManager": () => (/* binding */ AggregateStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "../../ui-framework/dist/framework/state/AbstractStateManager.js");


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

/***/ "../../ui-framework/dist/framework/state/AsyncStateManagerWrapper.js":
/*!***************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/AsyncStateManagerWrapper.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncStateManagerWrapper": () => (/* binding */ AsyncStateManagerWrapper)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "../../ui-framework/dist/framework/state/AbstractStateManager.js");


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

/***/ "../../ui-framework/dist/framework/state/BrowserStorageStateManager.js":
/*!*****************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/BrowserStorageStateManager.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStorageStateManager": () => (/* binding */ BrowserStorageStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "../../ui-framework/dist/framework/state/AbstractStateManager.js");


const lsLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('browser-storage');
class BrowserStorageStateManager extends _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager {
  constructor(useLocalStorage = false, allowPersistence = false, defaultEq, equalFns = null) {
    super('browser', defaultEq, equalFns); // @ts-ignore

    this.configuration = [];
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

/***/ "../../ui-framework/dist/framework/state/EncryptedBrowserStorageStateManager.js":
/*!**************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/EncryptedBrowserStorageStateManager.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptedBrowserStorageStateManager": () => (/* binding */ EncryptedBrowserStorageStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserStorageStateManager */ "../../ui-framework/dist/framework/state/BrowserStorageStateManager.js");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");



const lsLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('browser-storage-encrypted');
class EncryptedBrowserStorageStateManager extends _BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_1__.BrowserStorageStateManager {
  constructor(useLocalStorage = false, defaultEq, equalFns = null) {
    super(useLocalStorage, true, defaultEq, equalFns);
    this._addNewNamedStateToStorage = this._addNewNamedStateToStorage.bind(this);
  }

  _addNewNamedStateToStorage(state) {
    lsLogger(`Saving with key ${state.name}`);
    lsLogger(state);
    const stringifiedSaveData = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_2__.SecurityManager.getInstance().encryptObject(state.value);
    lsLogger(stringifiedSaveData);
    const userStateName = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_2__.SecurityManager.getInstance().getLoggedInUsername().trim() + '.' + state.name;
    this.storage.setItem(userStateName, stringifiedSaveData);
  }

  _getState(name) {
    let savedResults = [];
    lsLogger(`Loading with key ${name}`);
    const userStateName = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_2__.SecurityManager.getInstance().getLoggedInUsername().trim() + '.' + name;
    const savedResultsJSON = this.storage.getItem(userStateName);

    if (savedResultsJSON !== null) {
      savedResults = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_2__.SecurityManager.getInstance().decryptObject(savedResultsJSON);
      lsLogger(`Loading with key ${name} decrypted to `);
      lsLogger(`Loading with key ${name} decrypted to `);
      lsLogger(savedResults);
    }

    return {
      name: name,
      value: savedResults
    };
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/state/EncryptedIndexedDBStateManager.js":
/*!*********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/EncryptedIndexedDBStateManager.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptedIndexedDBStateManager": () => (/* binding */ EncryptedIndexedDBStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ "../../ui-framework/node_modules/idb/build/esm/index.js");
/* harmony import */ var _IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexedDBStateManager */ "../../ui-framework/dist/framework/state/IndexedDBStateManager.js");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('indexeddb-ts-encrypted');
class EncryptedIndexedDBStateManager extends _IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_2__.IndexedDBStateManager {
  constructor() {
    super();
    this.initialise = this.initialise.bind(this);
  }

  initialise(dbName, collections) {
    const _super = Object.create(null, {
      initialise: {
        get: () => super.initialise
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      logger(`opening encrypted database for ${dbName} with collections`);
      const username = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().getLoggedInUsername();
      this.dbName = `${username}.${dbName}`;

      _super.initialise.call(this, this.dbName, collections);
    });
  }
  /* add a new item to the local storage if not already there */


  addNewItemToCollection(key, item, keyField = 'id') {
    const _super = Object.create(null, {
      addNewItemToCollection: {
        get: () => super.addNewItemToCollection
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      if (item !== null) {
        let encrypted = {}; // @ts-ignore

        encrypted[keyField] = item[keyField]; // @ts-ignore

        encrypted.data = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().encryptObject(item);
        logger(encrypted);

        _super.addNewItemToCollection.call(this, key, encrypted, keyField);
      }
    });
  }

  updateItemInCollection(key, item, keyField = 'id') {
    const _super = Object.create(null, {
      updateItemInCollection: {
        get: () => super.updateItemInCollection
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      if (item) {
        let encrypted = {}; // @ts-ignore

        encrypted[keyField] = item[keyField]; // @ts-ignore

        encrypted.data = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().encryptObject(item);
        logger(encrypted);

        _super.updateItemInCollection.call(this, key, encrypted, keyField);
      }
    });
  }

  getWithCollectionKey(key, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      let savedResults = [];
      logger(`Loading with key ${key}`);
      let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);
      yield this.checkForObjectStore(db, key, keyField); // @ts-ignore

      let transaction = db.transaction([key]); // @ts-ignore

      let objectStore = transaction.store; // @ts-ignore

      let cursor = yield objectStore.openCursor();

      while (cursor) {
        let item = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().decryptObject(cursor.value.data);
        logger(item); // @ts-ignore

        savedResults.push(item); // @ts-ignore

        cursor = yield cursor.continue();
      }

      logger(savedResults);
      this.callbackForGetItems(savedResults, key);
    });
  }

  callbackForAddItem(data, associatedStateName) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`callback for add encrypted item for state ${associatedStateName}  - FORWARDING`);
      let decryptedItem = _security_SecurityManager__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().decryptObject(data.data);
      logger(decryptedItem);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, decryptedItem, _StateManager__WEBPACK_IMPORTED_MODULE_4__.StateEventType.ItemAdded, null);
    });
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/state/GraphQLApiStateManager.js":
/*!*************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/GraphQLApiStateManager.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLApiStateManager": () => (/* binding */ GraphQLApiStateManager)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var _network_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/Types */ "../../ui-framework/dist/framework/network/Types.js");
/* harmony import */ var _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/DownloadManager */ "../../ui-framework/dist/framework/network/DownloadManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateChangedDelegate */ "../../ui-framework/dist/framework/state/StateChangedDelegate.js");
/* harmony import */ var _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/CallbackRegistry */ "../../ui-framework/dist/framework/network/CallbackRegistry.js");






/*
*
*   WORK IN PROGRESS
*
 */

const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('state-manager-graphql');
class GraphQLApiStateManager {
  constructor() {
    this.configuration = [];
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

  _addNewNamedStateToStorage(state) {}

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

  _ensureStatePresent(name) {}

  _replaceNamedStateInStorage(state) {}

  _saveState(name, stateObj) {}

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
GraphQLApiStateManager.FUNCTION_ID_ADD_ITEM = 'graphql.api.state.manager.add.item';
GraphQLApiStateManager.FUNCTION_ID_REMOVE_ITEM = 'graphql.api.state.manager.remove.item';
GraphQLApiStateManager.FUNCTION_ID_UPDATE_ITEM = 'graphql.api.state.manager.update.item';
GraphQLApiStateManager.FUNCTION_ID_GET_ITEMS = 'graphql.api.state.manager.get.items';

/***/ }),

/***/ "../../ui-framework/dist/framework/state/IndexedDBStateManager.js":
/*!************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/IndexedDBStateManager.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexedDBStateManager": () => (/* binding */ IndexedDBStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ "../../ui-framework/node_modules/idb/build/esm/index.js");
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateChangedDelegate */ "../../ui-framework/dist/framework/state/StateChangedDelegate.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





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

  initialise(dbName, collections) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`opening database for ${dbName} with collections`);
      logger(collections);
      this.dbName = dbName;
      this.collections = collections;
      let runsComplete = [];
      this.collections.forEach(collection => {
        runsComplete.push(false);
      });
      this.bHasCompletedRun = runsComplete;
      yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(dbName, 1, {
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
    let fn = () => __awaiter(this, void 0, void 0, function* () {
      logger(`replacing item in storage ${state.name}`);
      logger(state.value);
      yield this.removeAllItemsFromCollectionKey(state.name, this.getKeyFieldForKey(state.name));
      yield this.saveWithCollectionKey(state.name, state.value, this.getKeyFieldForKey(state.name));
    });

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
    let fn = () => __awaiter(this, void 0, void 0, function* () {
      logger(`saving state ${name}`);
      yield this.removeAllItemsFromCollectionKey(name, this.getKeyFieldForKey(name));
      yield this.saveWithCollectionKey(name, stateObj, this.getKeyFieldForKey(name));
    });

    fn();
  }

  saveWithCollectionKey(key, saveData, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`Saving array with key ${key}`);
      logger(saveData);
      let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

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

      yield this.saveItemsToCollection(objectStore, saveData, keyField);
    });
  }
  /* add a new item to the local storage if not already there */


  addNewItemToCollection(key, item, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      if (item !== null) {
        logger(`Adding with key ${key}`);
        logger(item);
        let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

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
    });
  }

  removeItemFromCollection(key, item, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      if (item !== null) {
        logger(`Removing with key ${key} item ${item[keyField]}`);
        logger(item);
        let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

        let transaction = db.transaction([key], "readwrite").objectStore(key).delete(item[keyField]);

        transaction.oncomplete = function (ev) {
          logger('Success');
          logger(ev);
        };

        transaction.onerror = function (ev) {
          logger('Error');
          logger(ev);
        };

        yield transaction.done;
        this.callbackForRemoveItem(item, key);
      }
    });
  }

  updateItemInCollection(key, item, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      if (item) {
        logger(`Updating item in storage ${key}`);
        logger(item);
        let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1); // @ts-ignore

        let transaction = db.transaction([key], "readwrite").objectStore(key).put(item);

        transaction.oncomplete = function (ev) {
          logger('Success');
          logger(ev);
        };

        transaction.onerror = function (ev) {
          logger('Error');
          logger(ev);
        }; // @ts-ignore


        yield transaction.done;
        this.callbackForUpdateItem(item, key);
      }
    });
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

  getWithCollectionKey(key, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      let savedResults = [];
      logger(`Loading with key ${key}`);
      let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);
      yield this.checkForObjectStore(db, key, keyField); // @ts-ignore

      let transaction = db.transaction([key]); // @ts-ignore

      let objectStore = transaction.store; // @ts-ignore

      let cursor = yield objectStore.openCursor();

      while (cursor) {
        // @ts-ignore
        savedResults.push(cursor.value); // @ts-ignore

        cursor = yield cursor.continue();
      }

      logger(savedResults);
      this.callbackForGetItems(savedResults, key);
    });
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

  checkForObjectStore(db, key, keyField) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`Checking for collection ${key}`);

      if (!db.objectStoreNames.contains(key)) {
        // @ts-ignore
        logger(`Checking for collection ${key} - NOT found, creating`);
        yield db.createObjectStore(key, {
          keyPath: keyField,
          autoIncrement: false
        });
      }
    });
  }

  saveItemsToCollection(objectStore, saveData, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`Saving items to collection`);
      saveData.forEach(data => {
        // @ts-ignore
        objectStore.add(data);
      });
    });
  }

  removeAllItemsFromCollectionKey(key, keyField = 'id') {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`Clearing collection ${key}`);
      let db = yield (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);
      yield this.checkForObjectStore(db, key, keyField); // @ts-ignore

      let transaction = db.transaction([key], "readwrite"); // @ts-ignore

      let objectStore = transaction.store; // @ts-ignore

      yield objectStore.clear();
    });
  }

  callbackForRemoveItem(data, associatedStateName) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`callback for remove item for state ${associatedStateName}  - not forwarded`);
      logger(data);
    });
  }

  callbackForUpdateItem(data, associatedStateName) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`callback for update item for state ${associatedStateName}  - not forwarded`);
      logger(data);
    });
  }

  callbackForGetItems(data, associatedStateName) {
    logger(`callback for get items for state ${associatedStateName} - FORWARDING`);
    logger(data);
    this.setCompletedRun(associatedStateName);
    this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateEventType.StateChanged, null);
  }

  callbackForAddItem(data, associatedStateName) {
    return __awaiter(this, void 0, void 0, function* () {
      logger(`callback for add item for state ${associatedStateName}  - FORWARDING`);
      logger(data);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.StateEventType.ItemAdded, null);
    });
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/state/MemoryBufferStateManager.js":
/*!***************************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/MemoryBufferStateManager.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryBufferStateManager": () => (/* binding */ MemoryBufferStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "../../ui-framework/dist/framework/state/AbstractStateManager.js");


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

/***/ "../../ui-framework/dist/framework/state/RESTApiStateManager.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/RESTApiStateManager.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTApiStateManager": () => (/* binding */ RESTApiStateManager)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var _network_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/Types */ "../../ui-framework/dist/framework/network/Types.js");
/* harmony import */ var _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/DownloadManager */ "../../ui-framework/dist/framework/network/DownloadManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateChangedDelegate */ "../../ui-framework/dist/framework/state/StateChangedDelegate.js");
/* harmony import */ var _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/CallbackRegistry */ "../../ui-framework/dist/framework/network/CallbackRegistry.js");






const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('state-manager-api');
class RESTApiStateManager {
  constructor() {
    this.configuration = [];
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

  _addNewNamedStateToStorage(state) {}

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

  _ensureStatePresent(name) {}

  _replaceNamedStateInStorage(state) {}

  _saveState(name, stateObj) {}

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
RESTApiStateManager.FUNCTION_ID_ADD_ITEM = 'rest.api.state.manager.add.item';
RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM = 'rest.api.state.manager.remove.item';
RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM = 'rest.api.state.manager.update.item';
RESTApiStateManager.FUNCTION_ID_GET_ITEMS = 'rest.api.state.manager.get.items';

/***/ }),

/***/ "../../ui-framework/dist/framework/state/StateChangedDelegate.js":
/*!***********************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/StateChangedDelegate.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateChangedDelegate": () => (/* binding */ StateChangedDelegate)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


const smLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('state-manager-delegate');
class StateChangedDelegate {
  constructor(managerName) {
    this.suppressEventEmits = false;
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

/***/ "../../ui-framework/dist/framework/state/StateManager.js":
/*!***************************************************************!*\
  !*** ../../ui-framework/dist/framework/state/StateManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateEventType": () => (/* binding */ StateEventType),
/* harmony export */   "StateManagerType": () => (/* binding */ StateManagerType)
/* harmony export */ });
var StateEventType;

(function (StateEventType) {
  StateEventType[StateEventType["ItemAdded"] = 0] = "ItemAdded";
  StateEventType[StateEventType["ItemUpdated"] = 1] = "ItemUpdated";
  StateEventType[StateEventType["ItemDeleted"] = 2] = "ItemDeleted";
  StateEventType[StateEventType["StateChanged"] = 3] = "StateChanged";
  StateEventType[StateEventType["FilterResults"] = 4] = "FilterResults";
})(StateEventType || (StateEventType = {}));

var StateManagerType;

(function (StateManagerType) {
  StateManagerType[StateManagerType["Local"] = 0] = "Local";
  StateManagerType[StateManagerType["AsyncLocal"] = 1] = "AsyncLocal";
  StateManagerType[StateManagerType["AsyncRemote"] = 2] = "AsyncRemote";
})(StateManagerType || (StateManagerType = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js":
/*!******************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/ConfigurationTypes.js ***!
  \******************************************************************/
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
var Modifier;

(function (Modifier) {
  Modifier[Modifier["normal"] = 0] = "normal";
  Modifier[Modifier["active"] = 1] = "active";
  Modifier[Modifier["inactive"] = 2] = "inactive";
  Modifier[Modifier["warning"] = 3] = "warning";
})(Modifier || (Modifier = {}));

var KeyType;

(function (KeyType) {
  KeyType[KeyType["number"] = 0] = "number";
  KeyType[KeyType["string"] = 1] = "string";
  KeyType[KeyType["boolean"] = 2] = "boolean";
  KeyType[KeyType["collection"] = 3] = "collection";
})(KeyType || (KeyType = {}));

var SidebarLocation;

(function (SidebarLocation) {
  SidebarLocation[SidebarLocation["top"] = 0] = "top";
  SidebarLocation[SidebarLocation["right"] = 1] = "right";
  SidebarLocation[SidebarLocation["left"] = 2] = "left";
  SidebarLocation[SidebarLocation["bottom"] = 3] = "bottom";
})(SidebarLocation || (SidebarLocation = {}));

var RowPosition;

(function (RowPosition) {
  RowPosition[RowPosition["first"] = 0] = "first";
  RowPosition[RowPosition["last"] = 1] = "last";
})(RowPosition || (RowPosition = {}));

const SCREEN_WIDTH_LARGE = 992;
const SCREEN_WIDTH_MEDIUM = 769;
const SCREEN_WIDTH_SMALL = 415;

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/alert/AlertListener.js":
/*!*******************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/alert/AlertListener.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
var AlertType;

(function (AlertType) {
  AlertType[AlertType["cancelled"] = 0] = "cancelled";
  AlertType[AlertType["confirmed"] = 1] = "confirmed";
})(AlertType || (AlertType = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/alert/AlertManager.js":
/*!******************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/alert/AlertManager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManager": () => (/* binding */ AlertManager)
/* harmony export */ });
/* harmony import */ var _AlertListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertListener */ "../../ui-framework/dist/framework/ui/alert/AlertListener.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
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

/***/ "../../ui-framework/dist/framework/ui/chat/BlockedUserView.js":
/*!********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/BlockedUserView.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockedUserView": () => (/* binding */ BlockedUserView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");







const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar');
class BlockedUserView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
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

  static getInstance(stateManager) {
    if (!BlockedUserView._instance) {
      BlockedUserView._instance = new BlockedUserView(stateManager);
    }

    return BlockedUserView._instance;
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
    var _a; // find the blocked users in the user list


    let blockedUsers = [];
    const users = (_a = this.stateManager) === null || _a === void 0 ? void 0 : _a.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);

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
BlockedUserView.DOMConfig = {
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

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/ChatLogDetailView.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/ChatLogDetailView.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatLogDetailView": () => (/* binding */ ChatLogDetailView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../ui-framework/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _socket_Types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket/Types */ "../../ui-framework/dist/framework/socket/Types.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notification/NotificationManager */ "../../ui-framework/dist/framework/notification/NotificationManager.js");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");










const csLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-sidebar:detail');
class ChatLogDetailView {
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

  static getInstance(stateManager) {
    if (!ChatLogDetailView._instance) {
      ChatLogDetailView._instance = new ChatLogDetailView(stateManager);
    }

    return ChatLogDetailView._instance;
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
ChatLogDetailView.newFormId = "newMessage";
ChatLogDetailView.commentId = "message";
ChatLogDetailView.submitCommentId = "submitMessage";
ChatLogDetailView.chatLogId = 'chatLog';
ChatLogDetailView.chatLogRoomId = 'chatLogRoom';
ChatLogDetailView.leaveChatId = 'leaveChat';
ChatLogDetailView.chatFastSearchUserNames = 'chatFastSearchUserNames';

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/ChatLogsView.js":
/*!*****************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/ChatLogsView.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatLogsView": () => (/* binding */ ChatLogsView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/MemoryBufferStateManager */ "../../ui-framework/dist/framework/state/MemoryBufferStateManager.js");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/EqualityFunctions */ "../../ui-framework/dist/framework/util/EqualityFunctions.js");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");









const csLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('chat-sidebar');
class ChatLogsView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
  constructor() {
    super(ChatLogsView.DOMConfig, new _state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_5__.MemoryBufferStateManager(_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_6__.isSameRoom), _ChatTypes__WEBPACK_IMPORTED_MODULE_8__.STATE_NAMES.chatLogs);
    this.selectedChatLog = null;
    this.renderer = new _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__.ListViewRenderer(this, this); // handler binding

    this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleChatStarted = this.handleChatStarted.bind(this);
    _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addListener(this);
  }

  static getInstance() {
    if (!ChatLogsView._instance) {
      ChatLogsView._instance = new ChatLogsView();
    }

    return ChatLogsView._instance;
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
ChatLogsView.DOMConfig = {
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

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/ChatRoomsSidebar.js":
/*!*********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/ChatRoomsSidebar.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomsSidebar": () => (/* binding */ ChatRoomsSidebar)
/* harmony export */ });
/* harmony import */ var _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/SidebarViewContainer */ "../../ui-framework/dist/framework/ui/container/SidebarViewContainer.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _ChatLogsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatLogsView */ "../../ui-framework/dist/framework/ui/chat/ChatLogsView.js");
/* harmony import */ var _ChatLogDetailView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatLogDetailView */ "../../ui-framework/dist/framework/ui/chat/ChatLogDetailView.js");




class ChatRoomsSidebar extends _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer {
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

  static getInstance(stateManager) {
    if (!ChatRoomsSidebar._instance) {
      ChatRoomsSidebar._instance = new ChatRoomsSidebar(stateManager);
    }

    return ChatRoomsSidebar._instance;
  }

}
ChatRoomsSidebar.SidebarPrefs = {
  id: 'chatSideBar',
  expandedSize: '35%',
  location: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SidebarLocation.right
};
ChatRoomsSidebar.SidebarContainers = {
  chatLogs: 'chatLogs',
  chatLog: 'chatLogRoom'
};

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js":
/*!**************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/ChatTypes.js ***!
  \**************************************************************/
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

/***/ "../../ui-framework/dist/framework/ui/chat/FavouriteUserView.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/FavouriteUserView.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteUserView": () => (/* binding */ FavouriteUserView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");







const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-sidebar:detail');
class FavouriteUserView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractStatefulCollectionView {
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

  static getInstance(stateManager) {
    if (!FavouriteUserView._instance) {
      FavouriteUserView._instance = new FavouriteUserView(stateManager);
    }

    return FavouriteUserView._instance;
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
    var _a; // find the blocked users in the user list


    let favUsers = [];
    const users = (_a = this.stateManager) === null || _a === void 0 ? void 0 : _a.getStateByName(_ChatTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);

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
FavouriteUserView.DOMConfig = {
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

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/UserSearchSidebar.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/UserSearchSidebar.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchSidebar": () => (/* binding */ UserSearchSidebar)
/* harmony export */ });
/* harmony import */ var _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/SidebarViewContainer */ "../../ui-framework/dist/framework/ui/container/SidebarViewContainer.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _UserSearchView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSearchView */ "../../ui-framework/dist/framework/ui/chat/UserSearchView.js");
/* harmony import */ var _FavouriteUserView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavouriteUserView */ "../../ui-framework/dist/framework/ui/chat/FavouriteUserView.js");
/* harmony import */ var _BlockedUserView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockedUserView */ "../../ui-framework/dist/framework/ui/chat/BlockedUserView.js");
/* harmony import */ var _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatRoomsSidebar */ "../../ui-framework/dist/framework/ui/chat/ChatRoomsSidebar.js");






class UserSearchSidebar extends _container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer {
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

  static getInstance(stateManager) {
    if (!UserSearchSidebar._instance) {
      UserSearchSidebar._instance = new UserSearchSidebar(stateManager);
    }

    return UserSearchSidebar._instance;
  }

}
UserSearchSidebar.SidebarPrefs = {
  id: 'userSearchSideBar',
  expandedSize: '35%',
  location: _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SidebarLocation.left
};
UserSearchSidebar.SidebarContainers = {
  recentSearches: 'userSearchZone',
  favourites: 'favouriteUsersDropZone',
  blocked: 'blockedUsersDropZone'
};

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/chat/UserSearchView.js":
/*!*******************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/chat/UserSearchView.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchView": () => (/* binding */ UserSearchView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/EqualityFunctions */ "../../ui-framework/dist/framework/util/EqualityFunctions.js");
/* harmony import */ var _socket_NotificationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/BrowserStorageStateManager */ "../../ui-framework/dist/framework/state/BrowserStorageStateManager.js");
/* harmony import */ var _socket_ChatManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/implementation/AbstractStatefulCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js");
/* harmony import */ var _view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/renderer/ListViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js");
/* harmony import */ var _ChatTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");
/* harmony import */ var _ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChatRoomsSidebar */ "../../ui-framework/dist/framework/ui/chat/ChatRoomsSidebar.js");
/* harmony import */ var _ChatLogsView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChatLogsView */ "../../ui-framework/dist/framework/ui/chat/ChatLogsView.js");












const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('user-search-detail');
class UserSearchView extends _view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_6__.AbstractStatefulCollectionView {
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

  static getInstance(stateManager) {
    if (!UserSearchView._instance) {
      UserSearchView._instance = new UserSearchView(stateManager);
    }

    return UserSearchView._instance;
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
UserSearchView.fastSearchInputId = 'fastSearchUserNames';
UserSearchView.dataLimit = 10;
UserSearchView.DOMConfig = {
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

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/container/SidebarViewContainer.js":
/*!******************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/container/SidebarViewContainer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarViewContainer": () => (/* binding */ SidebarViewContainer)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
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

/***/ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js":
/*!***********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TogglePlacement": () => (/* binding */ TogglePlacement),
/* harmony export */   "ContextualInformationHelper": () => (/* binding */ ContextualInformationHelper)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractCollectionView.js");




const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('context-helper');
var TogglePlacement;

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
  constructor() {
    this.registry = [];
    this.menuDivEl = null;
    this.menuContentEl = null;
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
ContextualInformationHelper.SOURCE = 'context-source';
ContextualInformationHelper.TYPE = 'context-type';
ContextualInformationHelper.DISPLAYNAME = 'context-display-name';
ContextualInformationHelper.IDENTIFIER = 'context-id';
ContextualInformationHelper.DESCRIPTION = 'title';
ContextualInformationHelper.BOOTSTRAP_TOGGLE = 'data-toggle';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT = 'data-placement';
ContextualInformationHelper.BOOTSTRAP_TOOLTIP_VALUE = 'tooltip';
ContextualInformationHelper.BOOTSTRAP_POPOVER_VALUE = 'popover';
ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML = 'data-html';
ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML_VALUE = 'true';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_TOP = 'top';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_BOTTOM = 'bottom';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_RIGHT = 'right';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_LEFT = 'left';

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/AbstractForm.js":
/*!*****************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/AbstractForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractForm": () => (/* binding */ AbstractForm)
/* harmony export */ });
/* harmony import */ var _FormListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormListener */ "../../ui-framework/dist/framework/ui/form/FormListener.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/ValidationManager */ "../../ui-framework/dist/framework/ui/form/validation/ValidationManager.js");
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/AlertListener */ "../../ui-framework/dist/framework/ui/alert/AlertListener.js");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/AlertManager */ "../../ui-framework/dist/framework/ui/alert/AlertManager.js");
/* harmony import */ var _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/ValidationTypeDefs */ "../../ui-framework/dist/framework/ui/form/validation/ValidationTypeDefs.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "../../ui-framework/node_modules/uuid/dist/esm-browser/v4.js");







const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form');
const dlogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form-detail');
const vlogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form-detail-validation');
class AbstractForm {
  constructor(containerId, dataObjDef) {
    this.formListeners = [];
    this.fieldListeners = [];
    this.uiDef = null;
    this.isVisible = false;
    this.fields = [];
    this.isInitialised = false;
    this.hasChangedBoolean = false;
    this.isDisplayOnly = false;
    this.containerEl = document.getElementById(containerId);
    if (!this.containerEl) throw new Error(`container ${containerId} for form ${dataObjDef.id} does not exist`);
    this.map = [];
    this.dataObjDef = dataObjDef;
    this.currentDataObj = {};
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(); // sub-classes need to create the form and it's fields
    // listen to ourselves

    this.addFormListener(this);
  }

  hasChanged() {
    return this.hasChangedBoolean;
  }

  getName() {
    return this.dataObjDef.displayName;
  }

  valueChanged(formId, field, newValue) {
    this.hasChangedBoolean = true;
    this.setUnsavedMessage();
    logger(`Form has changed`);
  }

  failedValidation(formId, field, currentValue, message) {
    this.hasChangedBoolean = true;
    logger(`Form has changed`);
  }

  initialise(displayOrder, hasDeleteButton, hideModifierFields = false) {
    if (this.isInitialised) return;
    this.isInitialised = true;

    this._initialise(displayOrder, hasDeleteButton, hideModifierFields);
  }

  addFieldListener(listener) {
    this.fieldListeners.push(listener);
  }

  addFormListener(listener) {
    this.formListeners.push(listener);
  }

  reset() {
    logger(`Resetting form`);
    this.clearUnsavedMessage();
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false; // inform the listeners

    if (this.uiDef) {
      let formEvent = {
        formId: this.id,
        target: this,
        eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.RESETTING
      };
      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.currentDataObj = {};

    this._reset(); // reset all the fields


    this.fields.forEach(field => {
      field.reset();
    });
    this.hasChangedBoolean = false;
  }

  setIsVisible(isVisible) {
    logger(`Changing visibility to ${isVisible}`);
    this.isVisible = isVisible;

    if (this.uiDef) {
      let eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.HIDDEN;

      if (this.isVisible) {
        this._visible();

        eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SHOWN;
      } else {
        this._hidden();
      } // inform the listeners


      let formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };
      this.informFormListeners(formEvent, this.currentDataObj);
    }

    if (isVisible && !this.isDisplayOnly) this.checkFormValidationOnDisplay();
    if (isVisible && this.isDisplayOnly) this.checkForVisualValidationForDisplayOnly();
  }

  startCreateNew() {
    this.clearUnsavedMessage();
    logger(`Starting create new`);
    this.reset();
    this.currentDataObj = {};
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false;

    if (this.uiDef) {
      let eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CREATING; // inform the listeners

      let formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };

      this._startCreate();

      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.clearReadOnly();
    return this.currentDataObj;
  }

  startUpdate(objectToEdit) {
    this.clearUnsavedMessage();
    logger(`Starting modify existing on `);
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false;
    logger(objectToEdit);
    this.currentDataObj = Object.assign({}, objectToEdit); // take a copy

    if (this.uiDef) {
      let eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.MODIFYING; // inform the listeners

      let formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };

      this._startUpdate();

      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.clearReadOnly();
  }

  displayOnly(objectToView) {
    this.clearUnsavedMessage();
    logger(`Starting display only `);
    logger(objectToView);
    this.isDisplayOnly = true;
    this.hasChangedBoolean = false;
    this.currentDataObj = Object.assign({}, objectToView); // take a copy

    if (this.uiDef) {
      this._displayOnly();
    }

    this.setReadOnly();
  }

  formChanged(event, formValues) {
    // catch form events for user leaving the form
    let shouldCancelChange = false;

    switch (event.eventType) {
      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING:
        {
          logger(`Form is cancelling`);

          if (this.hasChangedBoolean && !this.isDisplayOnly) {
            if (this.uiDef) {
              _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__.AlertManager.getInstance().startAlert(this, this.uiDef.displayName, `Lose any unsaved changes?`, _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING);
            }
          } else {
            if (this.uiDef) {
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            }
          }

          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING_ABORTED:
        {
          logger(`Form is cancelling - aborted`);
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED:
        {
          logger(`Form is cancelled - resetting`); // user cancelled the form, will become invisible

          this.isDisplayOnly = true;
          this.reset(); // reset the form state

          this.setReadOnly();
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING:
        {
          logger(`Form is deleting`);

          if (this.uiDef) {
            _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__.AlertManager.getInstance().startAlert(this, this.uiDef.displayName, `Are you sure you want to delete this information?`, _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING);
          }

          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETE_ABORTED:
        {
          logger(`Form is deleting - aborted`);
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETED:
        {
          logger(`Form is deleted - resetting`); // user is deleting the object, will become invisible

          this.reset();
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVE_ABORTED:
        {
          this._saveFinishedOrAborted();

          logger(`Form save cancelled`);
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVED:
        {
          this._saveFinishedOrAborted();

          logger(`Form is saved with data`);
          logger(formValues);
          this.isDisplayOnly = false;
          this.hasChangedBoolean = false;
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVING:
        {
          logger(`Form is saving, checking validation and storing values`);

          this._saveIsActive();

          if (this.uiDef) {
            let allFieldsValid = true; // user attempting to save the form, lets check the field validation

            this.fields.forEach(field => {
              const currentValue = field.getValue();

              if (!field.isValid()) {
                vlogger(`Field ${field.getId()} is invalid`);
                field.setInvalid(`${field.getName()} has an invalid format or is required.`);
                allFieldsValid = false;
              } else {
                // does the field fulfil any rules from the Validation manager
                // @ts-ignore
                const response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(this.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.invalid);

                if (response.ruleFailed) {
                  // @ts-ignore
                  field.setInvalid(response.message);
                  vlogger(`Field ${field.getId()} is invalid from validation manager with message ${response.message}`);
                  allFieldsValid = false;
                } else {
                  this.setFieldValueToDataObject(this.currentDataObj, field, currentValue);
                }
              }
            }); // is every field valid?

            if (!allFieldsValid) {
              logger(`Form is saving, checking validation - FAILED`);
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVE_ABORTED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
              shouldCancelChange = true;
            } else {
              logger(`formatted data object is`);
              const formattedDataObject = this.getFormattedDataObject();
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVED
              };
              this.informFormListeners(formEvent, formattedDataObject);
            }

            break;
          }
        }
    }

    return shouldCancelChange;
  }

  getId() {
    return this.id;
  }

  getFieldFromDataFieldId(dataFieldId) {
    let result = undefined;
    dlogger(`Finding field for attribute ${dataFieldId} `);
    const mapItem = this.map.find(mapItem => mapItem.attributeId === dataFieldId);

    if (mapItem) {
      dlogger(`Mapped attribute ${mapItem.attributeId} to field ${mapItem.fieldId}`); // find the field with that id

      result = this.fields.find(field => field.getId() === mapItem.attributeId);
    }

    return result;
  }

  completed(event) {
    logger(`Handling alert completed`);
    logger(event);

    if (event.context && this.uiDef) {
      switch (event.context) {
        case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING:
          {
            if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__.AlertType.confirmed) {
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            } else {
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING_ABORTED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            }

            break;
          }

        case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING:
          {
            if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__.AlertType.confirmed) {
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            } else {
              let formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETE_ABORTED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            }

            break;
          }
      }
    }
  }

  clearReadOnly() {
    this.fields.forEach(field => {
      field.clearReadOnly();
    });
  }

  setReadOnly() {
    this.fields.forEach(field => {
      field.setReadOnly();
    });
  }

  isDisplayingItem(dataObj) {
    if (this.currentDataObj) {
      return this._isSameObjectAsDisplayed(dataObj);
    }

    return false;
  }

  isReadOnly() {
    return this.isDisplayOnly;
  }

  informFormListeners(formEvent, dataObj) {
    this.formListeners.forEach(listener => listener.formChanged(formEvent, dataObj));
  }

  findFieldUiConfig(fieldDef) {
    dlogger(`Finding field UI Config for field ${fieldDef.displayName}`);
    let result = null;

    if (this.uiDef) {
      let index = 0;

      while (index < this.uiDef.fieldGroups.length) {
        const fieldGroup = this.uiDef.fieldGroups[index];
        result = fieldGroup.fields.find(uiConfig => uiConfig.field.id === fieldDef.id);

        if (result) {
          dlogger(`Finding field UI Config for field ${fieldDef.displayName} - Found`);
          break;
        }

        index++;
      }
    }

    return result;
  }

  checkForVisualValidationForDisplayOnly() {
    logger(`Checking display validation for display only`);
    this.fields.forEach(field => {
      field.show(); // @ts-ignore

      let response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(this.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.hide);

      if (response.ruleFailed) {
        // @ts-ignore
        field.hide();
        vlogger(`Field ${field.getId()} is hidden from validation manager with message ${response.message}`);
      }
    });
  }

  checkFormValidationOnDisplay() {
    logger(`Checking display validation`);
    this.fields.forEach(field => {
      field.show();
      const currentValue = field.getValue();

      if (!field.isValid()) {
        logger(`Field ${field.getId()} is invalid`);
        field.setInvalid(`${field.getName()} has an invalid format or is required.`);
      } else {
        // does the field fulfil any rules from the Validation manager
        // @ts-ignore
        let response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(this.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.invalid);

        if (response.ruleFailed) {
          // @ts-ignore
          field.setInvalid(response.message);
          vlogger(`Field ${field.getId()} is invalid from validation manager with message ${response.message}`);
        } // @ts-ignore


        response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(this.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.hide);

        if (response.ruleFailed) {
          // @ts-ignore
          field.hide();
          vlogger(`Field ${field.getId()} is hidden from validation manager with message ${response.message}`);
        }
      }
    });
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/BasicFormImplementation.js":
/*!****************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/BasicFormImplementation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFormImplementation": () => (/* binding */ BasicFormImplementation)
/* harmony export */ });
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _AbstractForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractForm */ "../../ui-framework/dist/framework/ui/form/AbstractForm.js");
/* harmony import */ var _helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/BootstrapFormConfigHelper */ "../../ui-framework/dist/framework/ui/helper/BootstrapFormConfigHelper.js");
/* harmony import */ var _factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/FormElementFactory */ "../../ui-framework/dist/framework/ui/form/factory/FormElementFactory.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _field_TextAreaField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field/TextAreaField */ "../../ui-framework/dist/framework/ui/form/field/TextAreaField.js");
/* harmony import */ var _field_RadioButtonGroupField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field/RadioButtonGroupField */ "../../ui-framework/dist/framework/ui/form/field/RadioButtonGroupField.js");
/* harmony import */ var _field_SelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field/SelectField */ "../../ui-framework/dist/framework/ui/form/field/SelectField.js");
/* harmony import */ var _field_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field/InputField */ "../../ui-framework/dist/framework/ui/form/field/InputField.js");










const logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('basic-form');
const dlogger = debug__WEBPACK_IMPORTED_MODULE_4___default()('basic-form-detail');
class BasicFormImplementation extends _AbstractForm__WEBPACK_IMPORTED_MODULE_1__.AbstractForm {
  constructor(containerId, dataObjDef) {
    super(containerId, dataObjDef);
    this.factoryElements = null;
  }

  getFormattedDataObject() {
    logger(`Getting current formatted data`);
    let formattedResult = {};
    this.dataObjDef.fields.forEach(fieldDef => {
      let fieldValue = this.currentDataObj[fieldDef.id];
      formattedResult[fieldDef.id] = this.getFormattedFieldValue(fieldDef);
    });
    logger(formattedResult);
    return formattedResult;
  }

  clearReadOnly() {
    super.clearReadOnly();
    this.enableButtons();
  }

  setReadOnly() {
    super.setReadOnly();
    this.disableButtons();
  }

  _hidden() {
    var _a;

    if (this.factoryElements) (_a = this.containerEl) === null || _a === void 0 ? void 0 : _a.removeChild(this.factoryElements.form);
  }

  setupFieldObject(fieldEl, subElements = []) {
    // get the data-id field from the field element
    const dataId = fieldEl.getAttribute(_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.DATA_ID_ATTRIBUTE);
    const fieldId = fieldEl.getAttribute('id');
    dlogger(`Converting field input element ${fieldId} with data-id of ${dataId}`);

    if (dataId && fieldId) {
      // find the corresponding field definition
      const index = this.dataObjDef.fields.findIndex(value => value.id === dataId);
      const fieldDef = this.dataObjDef.fields.find(value => value.id === dataId);

      if (fieldDef) {
        dlogger(`Converting field input element ${fieldId} with data-id of ${dataId} field definition is`);
        logger(fieldDef); // find the corresponding ui definition

        const fieldUIConfig = this.findFieldUiConfig(fieldDef);
        dlogger(`Converting field input element ${fieldId} with data-id of ${dataId} field ui config is`);
        logger(fieldUIConfig);

        if (fieldUIConfig) {
          if (this.uiDef) {
            let field;

            switch (fieldUIConfig.elementType) {
              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.textarea:
                {
                  field = new _field_TextAreaField__WEBPACK_IMPORTED_MODULE_6__.TextAreaField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }

              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
                {
                  field = new _field_RadioButtonGroupField__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroupField(this.id, fieldUIConfig, fieldDef, fieldEl, subElements);
                  break;
                }

              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.select:
                {
                  field = new _field_SelectField__WEBPACK_IMPORTED_MODULE_8__.SelectField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }

              default:
                {
                  field = new _field_InputField__WEBPACK_IMPORTED_MODULE_9__.InputField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }
            }

            this.fields.push(field);
            field.addFieldListener(this);
            this.map.push({
              attributeId: dataId,
              fieldId: fieldId
            });
          }
        }
      } else {
        dlogger(`Converting field input element ${fieldId} with data-id of ${dataId} field definition is NOT FOUND`);
      }
    }
  }

  clearUnsavedMessage() {
    if (this.factoryElements) this.factoryElements.unsavedMessage.innerHTML = '';
  }

  setUnsavedMessage() {
    if (this.factoryElements && this.uiDef && this.uiDef.unsavedChanges.innerHTML) {
      this.factoryElements.unsavedMessage.innerHTML = this.uiDef.unsavedChanges.innerHTML;
    } else if (this.factoryElements) {
      this.factoryElements.unsavedMessage.innerHTML = 'Pending changes to save';
    }
  }

  _initialise(displayOrder, hasDeleteButton, hideModifierFields = false) {
    logger(`Initialising`); // ok, so given a Data Object definition we are going to create the form ui config

    this.uiDef = _helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_2__.BootstrapFormConfigHelper.getInstance().generateFormConfig(this.dataObjDef, displayOrder, hasDeleteButton, hideModifierFields);
    logger(this.uiDef); // now we need to create all the form elements from the ui definition

    this.factoryElements = _factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_3__.FormElementFactory.getInstance().createFormElements(this, this.formListeners, this.uiDef, this.fieldListeners);
    logger(this.factoryElements); // create field elements for each field element, and the basic map

    logger(`Converting field input elements to Field objects`);
    this.factoryElements.fields.forEach(fieldEl => {
      fieldEl.addEventListener('keyup', event => {
        dlogger(`key up in form ${this.getName()}`);
        this.hasChangedBoolean = true;
        this.setUnsavedMessage();
      });
      this.setupFieldObject(fieldEl);
    });
    logger(`Converting field text area elements to Field objects`);
    this.factoryElements.textFields.forEach(fieldEl => {
      fieldEl.addEventListener('keyup', event => {
        dlogger(`key up in form ${this.getName()}`);
        this.hasChangedBoolean = true;
        this.setUnsavedMessage();
      });
      this.setupFieldObject(fieldEl);
    });
    logger(`Converting field select elements to Field objects`);
    this.factoryElements.selectFields.forEach(fieldEl => {
      dlogger(`key up in form ${this.getName()}`);
    });
    logger(`Converting field rbg elements to Field objects`);
    this.factoryElements.radioButtonGroups.forEach(rbg => {
      this.setupFieldObject(rbg.container, rbg.radioButtons);
    });
    logger(`field/data map is `);
    logger(this.map);
    logger('fields are');
    logger(this.fields);
  }

  _reset() {
    this.clearUnsavedMessage();
  }

  validateField(fieldDef) {
    const field = this.getFieldFromDataFieldId(fieldDef.id);
    if (field) field.validate();
  }

  renderField(fieldDef, currentValue) {
    let result = currentValue;
    const field = this.getFieldFromDataFieldId(fieldDef.id);

    if (field) {
      result = field.render(result);
    }

    return result;
  }

  _startCreate() {
    this.clearUnsavedMessage(); // we have a new object, there might be some values to generate

    this.dataObjDef.fields.forEach(fieldDef => {
      if (fieldDef.generator && fieldDef.generator.onCreation) {
        let fieldValue = fieldDef.generator.generator.generate(fieldDef, true);
        dlogger(`Setting default values for ${fieldDef.displayName} to ${fieldValue}`);
        this.currentDataObj[fieldDef.id] = fieldValue;
      }

      let fieldValue = this.currentDataObj[fieldDef.id];

      if (fieldValue) {
        fieldValue = this.renderField(fieldDef, fieldValue);
        this.setFieldValueFromDataObject(fieldDef, fieldValue);
      } // run the validation to let the user know what is required


      this.validateField(fieldDef);
    }); // delete button can go

    if (this.factoryElements && this.factoryElements.deleteButton) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].addAttributes(this.factoryElements.deleteButton, [{
      name: 'style',
      value: 'display:none'
    }]);
  }

  _startUpdate() {
    this.clearUnsavedMessage(); // we have an existing object, there might be some values to generate

    logger(this.currentDataObj);
    this.dataObjDef.fields.forEach(fieldDef => {
      if (fieldDef.generator && fieldDef.generator.onModify) {
        let fieldValue = fieldDef.generator.generator.generate(fieldDef, false);
        dlogger(`Setting default modified values for ${fieldDef.displayName} to ${fieldValue}`);
        this.currentDataObj[fieldDef.id] = fieldValue;
      }

      let fieldValue = this.currentDataObj[fieldDef.id];
      if (fieldValue) fieldValue = this.renderField(fieldDef, fieldValue);
      this.setFieldValueFromDataObject(fieldDef, fieldValue);
      this.validateField(fieldDef);
    }); // delete button make visible again

    if (this.factoryElements && this.factoryElements.deleteButton) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].removeAttributes(this.factoryElements.deleteButton, ['style']);
  }

  _displayOnly() {
    this.clearUnsavedMessage(); // we have an existing object, there might be some values to generate

    logger(this.currentDataObj);
    this.dataObjDef.fields.forEach(fieldDef => {
      let fieldValue = this.currentDataObj[fieldDef.id];
      if (fieldValue) fieldValue = this.renderField(fieldDef, fieldValue);
      this.setFieldValueFromDataObject(fieldDef, fieldValue);
    }); // delete button can go

    if (this.factoryElements && this.factoryElements.deleteButton) if (this.factoryElements) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].addAttributes(this.factoryElements.deleteButton, [{
      name: 'style',
      value: 'display:none'
    }]);
  }

  _visible() {
    var _a;

    if (this.factoryElements) (_a = this.containerEl) === null || _a === void 0 ? void 0 : _a.appendChild(this.factoryElements.form);
  }

  setFieldValueToDataObject(dataObj, field, currentValue) {
    // find the attribute id from the map
    const mapItem = this.map.find(mapItem => mapItem.attributeId === field.getId());

    if (mapItem) {
      dlogger(`Mapped field ${mapItem.fieldId} to attribute ${mapItem.attributeId} with value ${currentValue}`);
      this.currentDataObj[mapItem.attributeId] = currentValue;
    } else {
      logger(`Mapped field ${field.getId()} to attribute NOT FOUND`);
    }
  }

  setFieldValueFromDataObject(fieldDef, currentValue) {
    const field = this.getFieldFromDataFieldId(fieldDef.id); // find the field id from the map

    if (field) {
      if (currentValue) {
        field.setValue(currentValue);
      } else {
        field.clearValue();
      }
    }
  }

  getFormattedFieldValue(fieldDef) {
    let result = null;
    const mapItem = this.map.find(mapItem => mapItem.attributeId === fieldDef.id);

    if (mapItem) {
      dlogger(`Mapped attribute ${mapItem.attributeId} to field ${mapItem.fieldId} with for getting formatted value`); // find the field with that id

      const field = this.fields.find(field => field.getId() === mapItem.attributeId);

      if (field) {
        result = field.getFormattedValue();
      }
    }

    return result;
  }

  _isSameObjectAsDisplayed(dataObj) {
    // we can only be sure for objects with keys
    let isSameObject = false;
    dlogger(`is same object as current`);
    dlogger(dataObj);
    dlogger(this.currentDataObj);
    this.dataObjDef.fields.every(field => {
      var _a;

      if (field.isKey) {
        const currentObjId = (_a = this.getFieldFromDataFieldId(field.id)) === null || _a === void 0 ? void 0 : _a.getValue();
        const suppliedObjId = dataObj[field.id];
        dlogger(`is same object id ${suppliedObjId} as current ${currentObjId}`);

        if (currentObjId && !suppliedObjId || currentObjId && !suppliedObjId) {
          isSameObject = false;
        }

        if (currentObjId && suppliedObjId && currentObjId == suppliedObjId) {
          isSameObject = true;
        }

        return false;
      }

      return true;
    });
    return isSameObject;
  }

  enableButtons() {
    if (this.factoryElements && this.uiDef) {
      if (this.factoryElements.deleteButton) {
        this.factoryElements.deleteButton.removeAttribute('disabled');
      }

      this.factoryElements.cancelButton.removeAttribute('disabled');
      this.factoryElements.submitButton.removeAttribute('disabled'); // @ts-ignore

      this.factoryElements.submitButton.innerHTML = this.uiDef.submitButton.buttonText;
    }
  }

  disableButtons() {
    if (this.factoryElements) {
      if (this.factoryElements.deleteButton) {
        this.factoryElements.deleteButton.setAttribute('disabled', 'true');
      }

      this.factoryElements.cancelButton.setAttribute('disabled', 'true');
      this.factoryElements.submitButton.setAttribute('disabled', 'true');
    }
  }

  _saveFinishedOrAborted() {
    dlogger(`save is finished or aborted`);
    this.enableButtons();
    this.clearUnsavedMessage();
  }

  _saveIsActive() {
    dlogger(`save is active`);
    this.disableButtons();

    if (this.factoryElements && this.uiDef) {
      if (this.uiDef.activeSave) {
        dlogger(`save is active ${this.uiDef.activeSave}`); // @ts-ignore

        this.factoryElements.submitButton.innerHTML = this.uiDef.activeSave + this.uiDef.submitButton.buttonText;
      }
    }
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/FormListener.js":
/*!*****************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/FormListener.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEventType": () => (/* binding */ FormEventType)
/* harmony export */ });
var FormEventType;

(function (FormEventType) {
  FormEventType["SHOWN"] = "shown";
  FormEventType["HIDDEN"] = "hidden";
  FormEventType["CANCELLING"] = "cancelling";
  FormEventType["CANCELLING_ABORTED"] = "cancelling-aborted";
  FormEventType["CANCELLED"] = "cancelled";
  FormEventType["SAVING"] = "saving";
  FormEventType["SAVE_ABORTED"] = "save-aborted";
  FormEventType["SAVED"] = "saved";
  FormEventType["DELETING"] = "deleting";
  FormEventType["DELETE_ABORTED"] = "delete-aborted";
  FormEventType["DELETED"] = "deleted";
  FormEventType["CREATING"] = "creating";
  FormEventType["MODIFYING"] = "modifying";
  FormEventType["RESETTING"] = "reset";
})(FormEventType || (FormEventType = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js":
/*!*******************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIFieldType": () => (/* binding */ UIFieldType),
/* harmony export */   "defaultGetValue": () => (/* binding */ defaultGetValue),
/* harmony export */   "FormMode": () => (/* binding */ FormMode),
/* harmony export */   "DATA_ID_ATTRIBUTE": () => (/* binding */ DATA_ID_ATTRIBUTE)
/* harmony export */ });
var UIFieldType;

(function (UIFieldType) {
  UIFieldType[UIFieldType["checkbox"] = 0] = "checkbox";
  UIFieldType[UIFieldType["email"] = 1] = "email";
  UIFieldType[UIFieldType["hidden"] = 2] = "hidden";
  UIFieldType[UIFieldType["number"] = 3] = "number";
  UIFieldType[UIFieldType["password"] = 4] = "password";
  UIFieldType[UIFieldType["text"] = 5] = "text";
  UIFieldType[UIFieldType["textarea"] = 6] = "textarea";
  UIFieldType[UIFieldType["select"] = 7] = "select";
  UIFieldType[UIFieldType["radioGroup"] = 8] = "radioGroup";
  UIFieldType[UIFieldType["tableData"] = 9] = "tableData";
})(UIFieldType || (UIFieldType = {}));

const defaultGetValue = (fieldUIConfig, currentValue) => {
  let result = currentValue;

  if (fieldUIConfig.renderer) {
    let value = fieldUIConfig.renderer.renderValue(fieldUIConfig.field, currentValue);
    if (value) result = value;
  }

  return result;
};
var FormMode;

(function (FormMode) {
  FormMode[FormMode["unset"] = -1] = "unset";
  FormMode[FormMode["create"] = 0] = "create";
  FormMode[FormMode["update"] = 1] = "update";
})(FormMode || (FormMode = {}));

const DATA_ID_ATTRIBUTE = 'data-id';

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/event-handlers/EditingEventListener.js":
/*!****************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/event-handlers/EditingEventListener.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditingEventListener": () => (/* binding */ EditingEventListener)
/* harmony export */ });
class EditingEventListener {
  constructor(formId, fieldConfig, listeners) {
    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    const fieldElement = event.target;

    if (this.fieldConfig.editor) {
      const field = this.fieldConfig.field;
      const value = fieldElement.value;
      const newValue = this.fieldConfig.editor.editValue(field, value);

      if (newValue) {
        fieldElement.value = newValue;
        this.listeners.forEach(listener => listener.valueChanged(this.formId, field, newValue));
      }
    }
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/event-handlers/RenderingEventListener.js":
/*!******************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/event-handlers/RenderingEventListener.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderingEventListener": () => (/* binding */ RenderingEventListener)
/* harmony export */ });
class RenderingEventListener {
  constructor(formId, fieldConfig, listeners, subElements = null) {
    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.subElements = subElements;
    this.handleEvent = this.handleEvent.bind(this);
  }

  processRendering(fieldElement) {
    let newValue = '';

    if (this.fieldConfig.renderer) {
      const field = this.fieldConfig.field;
      const value = fieldElement.value;
      if (this.subElements) this.fieldConfig.renderer.setSubElements(this.subElements);
      newValue = this.fieldConfig.renderer.renderValue(field, value);

      if (newValue) {
        fieldElement.value = newValue; // @ts-ignore

        this.listeners.forEach(listener => listener.valueChanged(field, newValue));
      }
    }

    if (newValue) {
      return newValue;
    } else {
      return '';
    }
  }

  handleEvent(event) {
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    const fieldElement = event.target;
    this.processRendering(fieldElement);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/event-handlers/ValidationEventHandler.js":
/*!******************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/event-handlers/ValidationEventHandler.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationEventHandler": () => (/* binding */ ValidationEventHandler)
/* harmony export */ });
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");



class ValidationEventHandler {
  constructor(formId, fieldConfig, listeners, subElements = null) {
    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.subElements = subElements;
    this.handleEvent = this.handleEvent.bind(this);
  }

  setValidationStatusAndMessage(fieldElement, isValid, value, message = undefined, resetOnFailure = false) {
    if (this.fieldConfig.validator && fieldElement) {
      const field = this.fieldConfig.field;
      let validationElementTarget = fieldElement; // we are providing user feedback on the field element, unless...

      if (this.subElements) {
        // sub elements change the validation target
        this.fieldConfig.validator.validator.setSubElements(this.subElements);

        if (this.fieldConfig.subElement) {
          // should be targetting the parentelement
          let parentEl = fieldElement.parentElement;

          if (parentEl) {
            validationElementTarget = parentEl;

            if (this.fieldConfig.subElement.container) {
              // another layer up required
              parentEl = parentEl.parentElement;

              if (parentEl) {
                validationElementTarget = parentEl;
              }
            }
          }
        }
      }

      const errorMessageDiv = document.getElementById(`${this.formId}.field.${this.fieldConfig.field.id}.error`);
      const errorMessageEl = document.getElementById(`${this.formId}.field.${this.fieldConfig.field.id}.error.message`); // clear any previous message

      errorMessageDiv === null || errorMessageDiv === void 0 ? void 0 : errorMessageDiv.setAttribute('style', 'display:none');
      if (errorMessageEl) errorMessageEl.innerHTML = '';
      if (this.fieldConfig.validator.invalidClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.invalidClasses, false);
      if (this.fieldConfig.validator.validClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.validClasses);

      if (!isValid) {
        if (this.fieldConfig.validator.invalidClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.invalidClasses);
        if (this.fieldConfig.validator.validClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.validClasses, false);

        if (!message) {
          message = `${field.displayName} does not have a valid value.`;
        } // show the error message


        errorMessageDiv === null || errorMessageDiv === void 0 ? void 0 : errorMessageDiv.setAttribute('style', 'display:block');
        if (errorMessageEl) errorMessageEl.innerHTML = message;

        if (resetOnFailure) {
          switch (field.type) {
            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.boolean:
              {
                // @ts-ignore
                fieldElement.checked = false;
                break;
              }

            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer:
              {
                // @ts-ignore
                fieldElement.value = '0';
                break;
              }

            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.float:
              {
                // @ts-ignore
                fieldElement.value = '0.0';
                break;
              }

            default:
              {
                // @ts-ignore
                fieldElement.value = '';
                break;
              }
          }
        } // @ts-ignore


        this.listeners.forEach(listener => listener.failedValidation(this.formId, field, value, message));
      }
    }
  }

  processValidation(fieldElement) {
    if (this.fieldConfig.validator && fieldElement) {
      const field = this.fieldConfig.field; // @ts-ignore

      let value = fieldElement.value; // checkboxes store values differently

      if (this.fieldConfig.elementType === _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.checkbox) {
        // @ts-ignore
        value = '' + fieldElement.checked;
      }

      if (this.subElements) {
        value = '';
        this.subElements.forEach(subElement => {
          if (subElement.checked) {
            value = subElement.value;
          }
        });
      }

      const validationResp = this.fieldConfig.validator.validator.isValidValue(field, value);
      this.setValidationStatusAndMessage(fieldElement, validationResp.isValid, value, validationResp.message, validationResp.resetOnFailure);
    }
  }

  handleEvent(event) {
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    const fieldElement = event.target;
    this.processValidation(fieldElement);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/factory/FieldInputElementFactory.js":
/*!*************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/factory/FieldInputElementFactory.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldInputElementFactory": () => (/* binding */ FieldInputElementFactory)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-handlers/ValidationEventHandler */ "../../ui-framework/dist/framework/ui/form/event-handlers/ValidationEventHandler.js");
/* harmony import */ var _event_handlers_EditingEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-handlers/EditingEventListener */ "../../ui-framework/dist/framework/ui/form/event-handlers/EditingEventListener.js");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");






class DefaultFieldOptionsListener {
  constructor(formId, parentElement, fieldUIConfig) {
    this.formId = formId;
    this.parentElement = parentElement;
    this.fieldUIConfig = fieldUIConfig;
  }

  optionsChanged(newOptions) {
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildren(this.parentElement);
    let subEls = FieldInputElementFactory.createSubElements(this.formId, this.parentElement, this.fieldUIConfig, newOptions);
  }

}

class FieldInputElementFactory {
  constructor() {}

  static getInstance() {
    if (!FieldInputElementFactory._instance) {
      FieldInputElementFactory._instance = new FieldInputElementFactory();
    }

    return FieldInputElementFactory._instance;
  }

  static initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners, subElements = null) {
    fieldElement.setAttribute('id', `${formId}.field.${fieldConfig.field.id}`);
    fieldElement.setAttribute(_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.DATA_ID_ATTRIBUTE, fieldConfig.field.id);
    fieldElement.setAttribute('name', fieldConfig.field.id);
    if (fieldConfig.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(fieldElement, fieldConfig.elementAttributes);
    if (fieldConfig.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(fieldElement, fieldConfig.elementClasses); // readonly field?

    if (fieldConfig.field.displayOnly) {
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(fieldElement, [{
        name: 'disabled',
        value: 'true'
      }, {
        name: 'readonly',
        value: 'true'
      }]);
    }
    /*
    setup event handlers
    */


    if (fieldConfig.validator) {
      // is the value in the field valid
      const eventHandler = new _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__.ValidationEventHandler(formId, fieldConfig, listeners, subElements);

      if (subElements) {
        // event for the subelements
        subElements.forEach(subElement => {
          subElement.addEventListener('blur', eventHandler);
        });
      } else {
        fieldElement.addEventListener('blur', eventHandler);
      }
    }

    if (fieldConfig.editor) {
      // render the value when the field gains focus
      fieldElement.addEventListener('focus', new _event_handlers_EditingEventListener__WEBPACK_IMPORTED_MODULE_3__.EditingEventListener(formId, fieldConfig, listeners));
    } // care for endless loops here, renderer needs to return null if no changes
    // date picker for date fields


    if (fieldConfig.field.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__.FieldType.date) {
      $(fieldElement).datepicker();
      $(fieldElement).datepicker("option", "dateFormat", 'dd/mm/yy');
    }
  }

  static createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners) {
    // if the field has a validator, then we need a div for error messages
    let errorMessageDivEl = null;

    if (fieldConfig.validator) {
      errorMessageDivEl = document.createElement('div');
      errorMessageDivEl.setAttribute('id', `${formId}.field.${fieldConfig.field.id}.error`);
      errorMessageDivEl.setAttribute('style', 'display: none'); // default to not visible

      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(errorMessageDivEl, fieldConfig.validator.messageDisplay.elementClasses);
      let messageEl = document.createElement(fieldConfig.validator.messageDisplay.elementType);

      if (messageEl) {
        messageEl.setAttribute('id', `${formId}.field.${fieldConfig.field.id}.error.message`);
        if (fieldConfig.validator.messageDisplay.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(messageEl, fieldConfig.validator.messageDisplay.elementAttributes);
        errorMessageDivEl.appendChild(messageEl);
      }
    } // ok, so is the field contained?


    if (fieldConfig.containedBy) {
      // we need to create a container for the field and option label and description text
      let containedByEl = document.createElement(fieldConfig.containedBy.elementType);

      if (containedByEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containedByEl, fieldConfig.containedBy.elementClasses);
        containedByEl.setAttribute('id', `${formId}.field.${fieldConfig.field.id}.container`);
        if (fieldConfig.containedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, fieldConfig.containedBy.elementAttributes); // do we have a label also?

        if (fieldConfig.label) {
          let labelEl = document.createElement('label');
          labelEl.setAttribute('for', `${formId}.field.${fieldConfig.field.id}`);
          labelEl.innerHTML = fieldConfig.field.displayName;
          if (fieldConfig.label.attributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(labelEl, fieldConfig.label.attributes);
          if (fieldConfig.label.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(labelEl, fieldConfig.label.classes);
          containedByEl.appendChild(labelEl);
        }

        if (fieldConfig.describedBy) {
          let descEl = document.createElement(fieldConfig.describedBy.elementType);

          if (descEl) {
            // link the field and the description
            descEl.setAttribute('id', `${formId}.field.${fieldConfig.field.id}.desc`);
            if (fieldConfig.field.description) descEl.innerHTML = fieldConfig.field.description;
            fieldElement.setAttribute('aria-describedby', `${formId}.field.${fieldConfig.field.id}.desc`);
            if (fieldConfig.describedBy.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(descEl, fieldConfig.describedBy.elementClasses);
            containedByEl.appendChild(fieldElement);
            containedByEl.appendChild(descEl);
            if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
          } else {
            // description failure, add the field
            containedByEl.appendChild(fieldElement);
            if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
          }
        } else {
          // no description, add field to container
          containedByEl.appendChild(fieldElement);
          if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
        }

        containerEl.appendChild(containedByEl);
      } else {
        // errors should keep making something!
        containerEl.appendChild(fieldElement);
        if (errorMessageDivEl) containerEl.appendChild(errorMessageDivEl);
      }
    } else {
      containerEl.appendChild(fieldElement);
      if (errorMessageDivEl) containerEl.appendChild(errorMessageDivEl);
    }
  }

  static createSubElements(formId, parentEl, fieldConfig, valueOptions) {
    let results = [];
    valueOptions.forEach((valueOption, index) => {
      if (fieldConfig.subElement) {
        let containerEl = parentEl; // is there a container?

        if (fieldConfig.subElement.container) {
          containerEl = document.createElement(fieldConfig.subElement.container.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containerEl, fieldConfig.subElement.container.elementClasses);
          if (fieldConfig.subElement.container.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, fieldConfig.subElement.container.elementAttributes);
          parentEl.appendChild(containerEl);
        }

        let valueEl = document.createElement(fieldConfig.subElement.element.elementType);
        valueEl.setAttribute('value', valueOption.value);
        valueEl.setAttribute('id', `${formId}.field.${fieldConfig.field.id}.${index}`);
        valueEl.setAttribute('name', `${formId}.field.${fieldConfig.field.id}`);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(valueEl, fieldConfig.subElement.element.elementClasses);
        if (fieldConfig.subElement.element.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(valueEl, fieldConfig.subElement.element.elementAttributes);
        containerEl.appendChild(valueEl);

        if (fieldConfig.subElement.label) {
          let labelEl = document.createElement('label');
          if (fieldConfig.subElement.label.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(labelEl, fieldConfig.subElement.label.classes);
          if (fieldConfig.subElement.label.attributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(labelEl, fieldConfig.subElement.label.attributes);
          labelEl.innerHTML = valueOption.name;
          containerEl.appendChild(labelEl);
        } else {
          valueEl.innerHTML = valueOption.name;
        }

        results.push(valueEl);
      }
    });
    return results;
  }

  createInputFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    let fieldElement = document.createElement('input');

    switch (fieldConfig.elementType) {
      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.checkbox:
        {
          fieldElement.setAttribute('type', 'checkbox');
          fieldElement.setAttribute('value', fieldConfig.field.id);
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.email:
        {
          fieldElement.setAttribute('type', 'email');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.hidden:
        {
          fieldElement.setAttribute('type', 'hidden');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.number:
        {
          fieldElement.setAttribute('type', 'number');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.password:
        {
          fieldElement.setAttribute('type', 'password');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.text:
        {
          fieldElement.setAttribute('type', 'text');
          break;
        }
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  }

  createTAFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    let fieldElement = document.createElement('textarea');

    if (fieldConfig.textarea) {
      fieldElement.setAttribute('rows', `${fieldConfig.textarea.rows}`);
      fieldElement.setAttribute('cols', `${fieldConfig.textarea.cols}`);
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  }

  createSelectFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    let fieldElement = document.createElement('select'); // create the options from the data source

    if (fieldConfig.datasource) {
      FieldInputElementFactory.createSubElements(formId, fieldElement, fieldConfig, fieldConfig.datasource.getOptions()); // listen for data source changes

      fieldConfig.datasource.addListener(new DefaultFieldOptionsListener(formId, fieldElement, fieldConfig));
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  }

  createRadioGroupFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    // create a div for each option in the source
    // create the div for the radio group
    let radioGroupElement = document.createElement('div');
    if (fieldConfig.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(radioGroupElement, fieldConfig.elementAttributes);
    if (fieldConfig.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(radioGroupElement, fieldConfig.elementClasses);
    let subElements = []; // create the options from the data source

    if (fieldConfig.datasource) {
      // we should get the radio buttons back
      subElements = FieldInputElementFactory.createSubElements(formId, radioGroupElement, fieldConfig, fieldConfig.datasource.getOptions()); // listen for data source changes

      fieldConfig.datasource.addListener(new DefaultFieldOptionsListener(formId, radioGroupElement, fieldConfig)); // setup the subelements for the validator, formatter, and renderer

      if (fieldConfig.validator) fieldConfig.validator.validator.setSubElements(subElements);
      if (fieldConfig.renderer) fieldConfig.renderer.setSubElements(subElements);
      if (fieldConfig.formatter) fieldConfig.formatter.setSubElements(subElements);
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(radioGroupElement, formId, fieldConfig, listeners, subElements);
    FieldInputElementFactory.createFieldComponentsAndContainer(radioGroupElement, formId, containerEl, fieldConfig, listeners);
    return {
      container: radioGroupElement,
      radioButtons: subElements
    };
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/factory/FormElementFactory.js":
/*!*******************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/factory/FormElementFactory.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementFactory": () => (/* binding */ FormElementFactory)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldInputElementFactory */ "../../ui-framework/dist/framework/ui/form/factory/FieldInputElementFactory.js");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _FormListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormListener */ "../../ui-framework/dist/framework/ui/form/FormListener.js");




class FormElementFactory {
  constructor() {}

  static getInstance() {
    if (!FormElementFactory._instance) {
      FormElementFactory._instance = new FormElementFactory();
    }

    return FormElementFactory._instance;
  }

  createFormElements(form, formListeners, formConfig, fieldListeners) {
    let formEl = document.createElement('form');
    formEl.setAttribute('id', formConfig.id);
    formEl.setAttribute('name', formConfig.displayName);
    if (formConfig.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(formEl, formConfig.classes); // create each of the fields and collect them

    let formInputElements = [];
    let formTAElements = [];
    let formRBGElements = [];
    let formSelectElements = [];
    let unsavedMessage = document.createElement(formConfig.unsavedChanges.elementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(unsavedMessage, formConfig.unsavedChanges.elementClasses);
    if (formConfig.unsavedChanges.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(unsavedMessage, formConfig.unsavedChanges.elementAttributes);
    formEl.appendChild(unsavedMessage);
    formConfig.fieldGroups.forEach(group => {
      // if the group has a container make that, otherwise the form is the container
      let containerEl = formEl;

      if (group.containedBy) {
        // @ts-ignore
        containerEl = document.createElement(group.containedBy.elementType);

        if (containerEl) {
          if (group.containedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, group.containedBy.elementAttributes);
          if (group.containedBy.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containerEl, group.containedBy.elementClasses);
          formEl.appendChild(containerEl);
        }
      }

      group.fields.forEach(field => {
        switch (field.elementType) {
          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.textarea:
            {
              const fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createTAFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);
              formTAElements.push(fieldEl);
              break;
            }

          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.select:
            {
              const fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createSelectFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);
              formSelectElements.push(fieldEl);
              break;
            }

          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.radioGroup:
            {
              const fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createRadioGroupFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);
              formRBGElements.push(fieldEl);
              break;
            }

          default:
            {
              const fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createInputFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);
              formInputElements.push(fieldEl);
            }
        }
      });
    });
    /* setup the buttons */

    let buttonContainer = formEl;

    if (formConfig.buttonsContainedBy) {
      buttonContainer = document.createElement(formConfig.buttonsContainedBy.elementType);

      if (buttonContainer) {
        if (formConfig.buttonsContainedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(buttonContainer, formConfig.buttonsContainedBy.elementAttributes);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(buttonContainer, formConfig.buttonsContainedBy.elementClasses);
        formEl.appendChild(buttonContainer);
      } else {
        buttonContainer = formEl; // couldn't create the button container, use the form
      }
    }

    let deleteButtonEl = undefined;

    if (formConfig.deleteButton) {
      deleteButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.deleteButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.DELETING);
      buttonContainer.appendChild(deleteButtonEl);
    }

    let cancelButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.cancelButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.CANCELLING);
    buttonContainer.appendChild(cancelButtonEl);
    let submitButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.submitButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.SAVING);
    buttonContainer.appendChild(submitButtonEl);
    let result = {
      form: formEl,
      unsavedMessage: unsavedMessage,
      fields: formInputElements,
      selectFields: formSelectElements,
      radioButtonGroups: formRBGElements,
      textFields: formTAElements,
      deleteButton: deleteButtonEl,
      cancelButton: cancelButtonEl,
      submitButton: submitButtonEl
    };
    return result;
  }

  createFormButton(form, formConfig, formListeners, buttonDef, eventType) {
    let buttonEl = document.createElement('button');
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(buttonEl, buttonDef.buttonClasses);
    buttonEl.setAttribute('id', `${formConfig.id}.${eventType}`);

    if (buttonDef.buttonText) {
      buttonEl.innerText = buttonDef.buttonText;
    }

    if (buttonDef.iconClasses) {
      let iconEl = document.createElement('i');

      if (iconEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, buttonDef.iconClasses);
        buttonEl.appendChild(iconEl);
      }
    }
    /* setup the event handler for the button */


    buttonEl.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      let formEvent = {
        target: form,
        formId: formConfig.id,
        eventType: eventType
      };
      formListeners.forEach(listener => listener.formChanged(formEvent));
    });
    return buttonEl;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/field/AbstractField.js":
/*!************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/field/AbstractField.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractField": () => (/* binding */ AbstractField)
/* harmony export */ });
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-handlers/ValidationEventHandler */ "../../ui-framework/dist/framework/ui/form/event-handlers/ValidationEventHandler.js");
/* harmony import */ var _event_handlers_RenderingEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-handlers/RenderingEventListener */ "../../ui-framework/dist/framework/ui/form/event-handlers/RenderingEventListener.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);





const logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('abstract-field');
class AbstractField {
  constructor(formId, config, fieldDef, element, subElements = null) {
    this.config = null;
    this.subElements = [];
    this.listeners = [];
    this.hidden = false;
    this.formId = formId;
    this.config = config;
    this.definition = fieldDef;
    this.element = element;
    if (subElements) this.subElements = subElements;
    this.validationHandler = new _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__.ValidationEventHandler(formId, config, [this], subElements);
    this.renderingHandler = new _event_handlers_RenderingEventListener__WEBPACK_IMPORTED_MODULE_3__.RenderingEventListener(formId, config, [this], subElements); // listen for our own change events

    this.handleChangeEvent = this.handleChangeEvent.bind(this);

    if (this.subElements) {
      this.subElements.forEach(subElement => {
        subElement.addEventListener('change', this.handleChangeEvent);
      });
    } else {
      this.element.addEventListener('change', this.handleChangeEvent);
    }
  }

  isHidden() {
    return this.hidden;
  }

  addFieldListener(listener) {
    logger(`${this.getName()} - adding listener ${listener.getName()}`); // don't duplicate listeners

    let index = this.listeners.findIndex(listenerInList => listenerInList.getName() === listener.getName());

    if (index < 0) {
      this.listeners.push(listener);
    } else {
      logger(`${this.getName()} - duplicate listener ${listener.getName()} ignored`);
    }
  }

  getFieldDefinition() {
    return this.definition;
  }

  setInvalid(message) {
    this.validationHandler.setValidationStatusAndMessage(this.element, false, '', message, false); // @ts-ignore

    this.listeners.forEach(listener => listener.failedValidation(this.formId, this.definition, this.getValue(), message));
  }

  initialise() {}

  getValue() {
    let result = null;

    if (this.config && this.element) {
      switch (this.config.elementType) {
        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
          {
            logger(`${this.definition.id} - getting value - rbg`);

            if (this.subElements) {
              this.subElements.forEach(subElement => {
                if (subElement.checked) {
                  logger(`${this.definition.id} - getting value - rbg - checked ${subElement.value}`);
                  result = subElement.value;
                  subElement.checked = true;
                }
              });
            }

            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox:
          {
            // @ts-ignore
            result = '' + this.element.checked;
            break;
          }

        default:
          {
            // @ts-ignore
            result = this.element.value;
            break;
          }
      }
    }

    logger(`${this.definition.id} - getting value - ${result}`);
    return result;
  }

  getFormattedValue() {
    let result = null;

    if (this.config && this.element) {
      // @ts-ignore
      result = this.element.value;

      if (this.config.elementType === _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox) {
        // @ts-ignore
        result = '' + this.element.checked;
      }

      if (this.config.formatter) {
        result = this.config.formatter.formatValue(this.definition, result);
      }
    }

    return result;
  }

  isValid() {
    let result = true;

    if (this.config && this.element) {
      if (this.config.validator) {
        if (this.config.validator.validator) {
          const validator = this.config.validator.validator;
          const response = validator.isValidValue(this.definition, this.getValue());
          result = response.isValid;
        }
      }
    }

    return result;
  }

  getId() {
    return this.definition.id;
  }

  setValue(newValue) {
    newValue = '' + newValue;

    if (this.element && this.config) {
      // @ts-ignore
      switch (this.config.elementType) {
        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
          {
            if (this.subElements) {
              this.subElements.forEach(subElement => {
                if (subElement.value === newValue) {
                  subElement.checked = true;
                }
              });
            }

            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox:
          {
            // @ts-ignore
            this.element.checked = newValue.toLowerCase() === 'true';
            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.select:
          {
            logger(`${this.definition.id} - setting value - ${newValue}`);
            const selectEl = this.element;
            let selectedIndex = -1;

            for (let index = 0; index < selectEl.options.length; index++) {
              // @ts-ignore
              const option = selectEl.options.item(index);
              logger(`${this.definition.id} - option value - ${option.value}`);

              if (option.value === newValue) {
                logger(`${this.definition.id} - option value - ${option.value} - SELECTED`);
                option.selected = true;
                selectedIndex = index;
              }
            }

            logger(`${this.definition.id} - selected index ${selectedIndex}`);
            selectEl.selectedIndex = selectedIndex;
            break;
          }

        default:
          {
            logger(`${this.definition.id} - setting value - ${newValue}`); // @ts-ignore

            this.element.value = newValue;
            break;
          }
      }
    }
  }

  reset() {
    if (this.element) {
      switch (this.definition.type) {
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            // @ts-ignore
            this.element.checked = false;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
          {
            // @ts-ignore
            this.element.value = '0';
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            // @ts-ignore
            this.element.value = '0.0';
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice:
          {
            if (this.subElements) {
              this.subElements.forEach(subElement => {
                subElement.checked = false;
              });
            }

            break;
          }

        default:
          {
            // @ts-ignore
            this.element.value = '';
            break;
          }
      }
    }

    this.show();
  }

  clearValue() {
    this.reset();
  }

  validate() {
    if (this.element) {
      this.validationHandler.processValidation(this.element);
    }
  }

  render(currentValue) {
    var _a;

    let result = currentValue;

    if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.renderer) {
      let value = this.config.renderer.renderValue(this.definition, currentValue);
      if (value) result = value;
    }

    return result;
  }

  failedValidation(formId, field, currentValue, message) {}

  valueChanged(formId, field, newValue) {}

  getName() {
    return this.definition.displayName;
  }

  hide() {
    /*
      if we have an enclosing container (per the config) then we can hide
      otherwise we become readonly and disabled
     */
    if (this.config) {
      if (this.config.containedBy) {
        const parentEl = this.element.parentElement;

        if (parentEl) {
          parentEl.setAttribute('style', 'display:none');
        }
      } else {
        this.setReadOnly();
      }
    }

    this.hidden = true;
  }

  setValid() {
    this.validationHandler.setValidationStatusAndMessage(this.element, true, '');
  }

  show() {
    /*
      if we have an enclosing container (per the config) then we can hide
      otherwise we become readonly and disabled
     */
    if (this.config) {
      if (this.config.containedBy) {
        const parentEl = this.element.parentElement;

        if (parentEl) {
          parentEl.removeAttribute('style');
        }
      } else {
        this.clearReadOnly();
      }
    }

    this.hidden = true;
  }

  clearReadOnly() {
    if (this.definition.displayOnly) return;
    this.element.removeAttribute('readonly');
    this.element.removeAttribute('disabled'); // do the same for subelements

    if (this.subElements) {
      this.subElements.forEach(subElement => {
        subElement.removeAttribute('readonly');
        subElement.removeAttribute('disabled');
      });
    }
  }

  setReadOnly() {
    this.element.setAttribute('readonly', 'true');
    this.element.setAttribute('disabled', 'true'); // do the same for subelements

    if (this.subElements) {
      this.subElements.forEach(subElement => {
        subElement.setAttribute('readonly', 'true');
        subElement.setAttribute('disabled', 'true');
      });
    }
  }

  handleChangeEvent(event) {
    logger(`Handling change event`);

    if (this.config) {
      let value = this.getValue();
      logger(`Handling change event - informing listeners`);
      this.listeners.forEach(listener => listener.valueChanged(this.formId, this.definition, value));
    }
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/field/InputField.js":
/*!*********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/field/InputField.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "../../ui-framework/dist/framework/ui/form/field/AbstractField.js");

class InputField extends _AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField {
  constructor(formId, config, fieldDef, element) {
    super(formId, config, fieldDef, element);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/field/RadioButtonGroupField.js":
/*!********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/field/RadioButtonGroupField.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonGroupField": () => (/* binding */ RadioButtonGroupField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "../../ui-framework/dist/framework/ui/form/field/AbstractField.js");

class RadioButtonGroupField extends _AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField {
  constructor(formId, config, fieldDef, element, subElements) {
    super(formId, config, fieldDef, element, subElements);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/field/SelectField.js":
/*!**********************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/field/SelectField.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectField": () => (/* binding */ SelectField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "../../ui-framework/dist/framework/ui/form/field/AbstractField.js");

class SelectField extends _AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField {
  constructor(formId, config, fieldDef, element) {
    super(formId, config, fieldDef, element);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/field/TextAreaField.js":
/*!************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/field/TextAreaField.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAreaField": () => (/* binding */ TextAreaField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "../../ui-framework/dist/framework/ui/form/field/AbstractField.js");

class TextAreaField extends _AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField {
  constructor(formId, config, fieldDef, element) {
    super(formId, config, fieldDef, element);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/validation/ValidationManager.js":
/*!*********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/validation/ValidationManager.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationManager": () => (/* binding */ ValidationManager)
/* harmony export */ });
/* harmony import */ var _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidationTypeDefs */ "../../ui-framework/dist/framework/ui/form/validation/ValidationTypeDefs.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _CommonTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CommonTypes */ "../../ui-framework/dist/framework/CommonTypes.js");




const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('validation-manager');
const flogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('validation-manager-rule-failure');
class ValidationManager {
  constructor() {
    this.formRules = [];
  }

  static getInstance() {
    if (!ValidationManager._instance) {
      ValidationManager._instance = new ValidationManager();
    }

    return ValidationManager._instance;
  }

  getName() {
    return "Validation Manager";
  }

  addRuleToForm(form, rule) {
    logger(`Adding rule on form ${form.getId()} for target field ${rule.targetDataFieldId}`);
    /*
     validate the rule
     1. does the rule have a comparison field or static for each condition?
     2. do the fields exist?
     3. are the comparisons valid types to compare?
    */

    let targetField = form.getFieldFromDataFieldId(rule.targetDataFieldId);

    if (!targetField) {
      flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - NOT FOUND in form`);
      return false;
    }

    let convertedRule = {
      targetField: targetField,
      response: rule.response,
      fieldConditions: [],
      valueConditions: []
    };
    rule.conditions.forEach(condition => {
      // do we have one of values or source field?
      if (!condition.values && !condition.sourceDataFieldId) {
        flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - a condition is missing both values and source field`);
        return false;
      } // is this a target field value comparison?


      if (condition.values && condition.sourceDataFieldId) {
        logger(`Rule adding for form ${form.getId()} for target field ${rule.targetDataFieldId} - source field ${condition.sourceDataFieldId} with values ${condition.values}`);
        let sourceField = form.getFieldFromDataFieldId(condition.sourceDataFieldId);

        if (!sourceField) {
          flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - source field ${condition.sourceDataFieldId} NOT FOUND`);
          return false;
        }

        convertedRule.fieldConditions.push({
          sourceField: sourceField,
          comparison: condition.comparison,
          values: condition.values
        });
        sourceField.addFieldListener(this);
      } else if (condition.values && !condition.sourceDataFieldId) {
        // is this a value comparison?
        logger(`Rule adding for form ${form.getId()} for target field ${rule.targetDataFieldId} - values ${condition.values}`); // add a new value rule to the internal structure

        convertedRule.valueConditions.push({
          values: condition.values,
          comparison: condition.comparison
        }); // @ts-ignore

        targetField.addFieldListener(this);
      } else if (condition.sourceDataFieldId && !condition.values) {
        // is this a field vs field comparison
        logger(`Rule adding for form ${form.getId()} for target field ${rule.targetDataFieldId} - source field ${condition.sourceDataFieldId}`);
        let sourceField = form.getFieldFromDataFieldId(condition.sourceDataFieldId);

        if (!sourceField) {
          flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - source field ${condition.sourceDataFieldId} NOT FOUND`);
          return false;
        }
        /*
           are we comparing two fields that can be compared?
           allowed combinations are:
           date|datetime vs date|datetime
           time|short time vs time|short time
           boolean vs boolean
           integer|float vs number|float
           any other vs any other
         */


        let sourceType = sourceField.getFieldDefinition().type; // @ts-ignore

        let targetType = targetField.getFieldDefinition().type;

        switch (targetType) {
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
                flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - target is date(time), source is NOT`);
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
                flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - target is time, source is NOT`);
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean) {
                flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - target is boolean, source is NOT`);
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float) {
                flogger(`Rule not added for form ${form.getId()} for target field ${rule.targetDataFieldId} - target is number, source is NOT`);
                return false;
              }

              break;
            }
        }

        convertedRule.fieldConditions.push({
          sourceField: sourceField,
          comparison: condition.comparison
        });
        sourceField.addFieldListener(this);
      }
    });
    logger(`Converted rule to `);
    logger(convertedRule);
    let index = this.formRules.findIndex(formRule => formRule.form.getId() === form.getId());
    let formRuleSet; // store the rules for later execution

    if (index < 0) {
      formRuleSet = {
        form: form,
        rules: []
      };
      formRuleSet.rules.push(convertedRule);
      this.formRules.push(formRuleSet);
    } else {
      formRuleSet = this.formRules[index];
      formRuleSet.rules.push(convertedRule);
    }

    logger(`Current set of rules for form ${form.getId()}`);
    logger(formRuleSet);
    return true;
  }

  failedValidation(formId, field, currentValue, message) {} // ignored, we might be causing


  applyRulesToTargetField(formId, field, onlyRulesOfType) {
    logger(`Checking rules for form ${formId}, data field ${field.id} of type ${onlyRulesOfType}`); // which rules apply?

    let rules = this.getRulesForFieldChange(formId, field.id, false);
    let result = {
      ruleFailed: false
    }; // get the rules for the field, filtered by the condition response type

    if (onlyRulesOfType) {
      let ruleSubset = [];
      rules.forEach(rule => {
        if (rule.response === onlyRulesOfType) {
          ruleSubset.push(rule);
        }
      });
      rules = ruleSubset;
    }

    rules.forEach(rule => {
      let response = this.executeRule(rule);

      if (response.ruleFailed) {
        flogger(`Rule failed for form ${formId} with field ${field.displayName} with message ${response.message}`);
        result.ruleFailed = true;
        result.message = response.message;
      }
    });
    return result;
  }

  valueChanged(formId, field, newValue) {
    logger(`Handling field change - form ${formId}, data field ${field.id}, value ${newValue}`); // a field we are listening to has changed
    // which rules apply?

    const rules = this.getRulesForFieldChange(formId, field.id, true); // execute each rule and collect the responses

    let failedResponses = [];
    rules.forEach(rule => {
      let response = this.executeRule(rule);

      if (response.ruleFailed) {
        failedResponses.push(response);
      }
    });
    logger(`Have ${failedResponses.length} failed rules - applying each`); // for each failed response let the target field know based on the response type

    failedResponses.forEach(response => {
      switch (response.response) {
        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide:
          {
            logger(`Apply hide ${response.field.getId()}`);
            response.field.hide();
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show:
          {
            logger(`Apply show ${response.field.getId()}`);
            response.field.show();
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.invalid:
          {
            logger(`Apply invalid ${response.field.getId()}`);
            if (response.message) response.field.setInvalid(response.message);
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.valid:
          {
            logger(`Apply valid ${response.field.getId()}`);
            response.field.setValid();
            break;
          }
      }
    });
  }

  areTwoFieldsEqual(targetField, sourceField) {
    if (targetField.getValue() !== sourceField.getValue()) {
      return {
        ruleFailed: true,
        message: `${targetField.getName()} must be equal to ${sourceField.getName()}`
      };
    }

    return {
      ruleFailed: false
    };
  }

  compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, comparison) {
    if (!targetValue || !sourceValue) return false; // no null comparisons

    switch (targetType) {
      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
        {
          targetValue += ' 00:00:00';

          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
            sourceValue += ' 00:00:00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
        {
          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
            sourceValue += ' 00:00:00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
        {
          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
            sourceValue += ':00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
        {
          targetValue += ':00';

          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
            sourceValue += ':00';
          }

          break;
        }
    }

    logger(`Comparing ${targetValue} of type ${targetType} against ${sourceValue} of type ${sourceType}`);

    switch (comparison) {
      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThan:
        {
          return targetValue < sourceValue;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThanEqual:
        {
          return targetValue <= sourceValue;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThanEqual:
        {
          return targetValue >= sourceValue;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThan:
        {
          return targetValue > sourceValue;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.equals:
        {
          return targetValue === sourceValue;
        }
    }

    return false;
  }

  isTargetLessThanSource(targetField, sourceField) {
    let sourceType = sourceField.getFieldDefinition().type;
    let targetType = targetField.getFieldDefinition().type;
    let sourceValue = sourceField.getValue();
    let targetValue = targetField.getValue();

    if (!this.compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThan)) {
      return {
        ruleFailed: true,
        message: `${targetField.getName()} must be less than ${sourceField.getName()}`
      };
    }

    return {
      ruleFailed: false
    };
  }

  isTargetLessThanEqualSource(targetField, sourceField) {
    let check = this.areTwoFieldsEqual(targetField, sourceField);

    if (check.ruleFailed) {
      check = this.isTargetLessThanSource(targetField, sourceField);

      if (check.ruleFailed) {
        return {
          ruleFailed: true,
          message: `${targetField.getName()} must be less than or equal to ${sourceField.getName()}`
        };
      }
    }

    return {
      ruleFailed: false
    };
  }

  isTargetGreaterThan(targetField, sourceField) {
    let sourceType = sourceField.getFieldDefinition().type;
    let targetType = targetField.getFieldDefinition().type;
    let sourceValue = sourceField.getValue();
    let targetValue = targetField.getValue();

    if (!this.compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThan)) {
      return {
        ruleFailed: true,
        message: `${targetField.getName()} must be greater than ${sourceField.getName()}`
      };
    }

    return {
      ruleFailed: false
    };
  }

  isSourceNull(sourceField) {
    let targetValue = sourceField.getValue(); // @ts-ignore

    if (targetValue && targetValue.trim().length > 0) {
      return {
        ruleFailed: true,
        message: `${sourceField.getName()} must be empty`
      };
    }

    return {
      ruleFailed: false
    };
  }

  isSourceNotNull(sourceField) {
    let targetValue = sourceField.getValue(); // @ts-ignore

    if (!targetValue || targetValue.trim().length > 0) {
      return {
        ruleFailed: true,
        message: `${sourceField.getName()} must not be empty`
      };
    }

    return {
      ruleFailed: false
    };
  }

  doesFieldHaveValue(field, values) {
    let targetValue = field.getValue();
    logger(`does field ${field.getId()} have value from ${values} - current value is ${targetValue}`);

    if (targetValue) {
      // split the values by commas
      let splits = values.split(',');
      let foundInValue = false;
      splits.forEach(split => {
        if (targetValue === split) {
          logger(`does field ${field.getId()} have value from ${values} - current value is ${targetValue} - found in value(s)`);
          foundInValue = true;
        }
      });

      if (foundInValue) {
        return {
          ruleFailed: false
        };
      }
    }

    return {
      ruleFailed: true,
      message: `${field.getName()} must be have a value in ${values}`
    };
  }

  doesSourceFieldHaveValue(field, values) {
    return this.doesFieldHaveValue(field, values);
  }

  isTargetGreaterThanEqualSource(targetField, sourceField) {
    let check = this.areTwoFieldsEqual(targetField, sourceField);

    if (check.ruleFailed) {
      check = this.isTargetGreaterThan(targetField, sourceField);

      if (check.ruleFailed) {
        return {
          ruleFailed: true,
          message: `${targetField.getName()} must be greater than or equal to ${sourceField.getName()}`
        };
      }
    }

    return {
      ruleFailed: false
    };
  }

  compareFields(targetField, sourceField, comparison, value) {
    switch (comparison) {
      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.equals:
        {
          return this.areTwoFieldsEqual(targetField, sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThan:
        {
          return this.isTargetLessThanSource(targetField, sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.lessThanEqual:
        {
          return this.isTargetLessThanEqualSource(targetField, sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThan:
        {
          return this.isTargetGreaterThan(targetField, sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.greaterThanEqual:
        {
          return this.isTargetGreaterThanEqualSource(targetField, sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.isNull:
        {
          return this.isSourceNull(sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.isNotNull:
        {
          return this.isSourceNotNull(sourceField);
          break;
        }

      case _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.hasValue:
        {
          return this.doesSourceFieldHaveValue(sourceField, value);
          break;
        }
    }
  }

  executeRule(rule) {
    let response = {
      field: rule.targetField,
      ruleFailed: false,
      response: rule.response
    }; // run each field comparison

    logger(`Executing rule for target ${rule.targetField.getId()}`);
    logger(rule);
    rule.fieldConditions.every(condition => {
      logger('field condition rule');
      logger(condition);
      let values = condition.values ? condition.values : '';
      let ruleCheck = this.compareFields(rule.targetField, condition.sourceField, condition.comparison, values);

      if (ruleCheck.ruleFailed) {
        flogger('field condition rule FAILED');
        response.ruleFailed = true; // only need messages for invalid responses

        response.message = ruleCheck.message;
        return false;
      }

      flogger('field condition rule PASSED');
      return true;
    }); // run each value comparison if we haven't already failed

    if (!response.ruleFailed) {
      rule.valueConditions.forEach(condition => {
        logger('value condition rule');
        logger(condition);
        let ruleCheck = this.compareFields(rule.targetField, rule.targetField, _CommonTypes__WEBPACK_IMPORTED_MODULE_3__.ComparisonType.hasValue, condition.values);

        if (ruleCheck.ruleFailed) {
          flogger('value condition rule FAILED');
          response.ruleFailed = true;
          response.message = ruleCheck.message;
          return false;
        }

        flogger('value condition rule PASSED');
        return true;
      });
    }

    return response;
  }

  getRulesForFieldChange(formId, dataFieldId, includeSourceFields) {
    let rules = []; // lets go through the rules for the form

    logger(`Finding rules for form ${formId} and data field ${dataFieldId}`);
    let index = this.formRules.findIndex(formRule => formRule.form.getId() === formId);

    if (index >= 0) {
      const ruleSet = this.formRules[index]; // the dataFieldId could be the target or one of the sources

      ruleSet.rules.forEach(rule => {
        if (rule.targetField.getId() === dataFieldId) {
          logger(`Found rule where data field ${dataFieldId} is target`);

          if (rule.targetField.isValid()) {
            rules.push(rule);
          } else {
            flogger(`Found rule where data field ${dataFieldId} is target but value is not currently valid`);
          }
        } else {
          if (includeSourceFields) {
            rule.fieldConditions.every(value => {
              if (value.sourceField.getId() === dataFieldId) {
                logger(`Found rule where data field ${dataFieldId} is source`);

                if (value.sourceField.isValid()) {
                  rules.push(rule);
                } else {
                  flogger(`Found rule where data field ${dataFieldId} is source but value is not currently valid`);
                }

                return false;
              }

              return true;
            });
          }
        }
      });
    }

    return rules;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/form/validation/ValidationTypeDefs.js":
/*!**********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/form/validation/ValidationTypeDefs.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionResponse": () => (/* binding */ ConditionResponse)
/* harmony export */ });
var ConditionResponse;

(function (ConditionResponse) {
  ConditionResponse[ConditionResponse["show"] = 0] = "show";
  ConditionResponse[ConditionResponse["hide"] = 1] = "hide";
  ConditionResponse[ConditionResponse["invalid"] = 2] = "invalid";
  ConditionResponse[ConditionResponse["valid"] = 3] = "valid";
})(ConditionResponse || (ConditionResponse = {}));

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/BootstrapFormConfigHelper.js":
/*!********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/BootstrapFormConfigHelper.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapFormConfigHelper": () => (/* binding */ BootstrapFormConfigHelper)
/* harmony export */ });
/* harmony import */ var _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/BasicFieldOperations */ "../../ui-framework/dist/framework/model/BasicFieldOperations.js");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RBGFieldOperations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RBGFieldOperations */ "../../ui-framework/dist/framework/ui/helper/RBGFieldOperations.js");
/* harmony import */ var _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/BasicObjectDefinitionFactory */ "../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js");






const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('bootstrap-form-config-helper');
class BootstrapFormConfigHelper {
  constructor() {}

  static getInstance() {
    if (!BootstrapFormConfigHelper._instance) {
      BootstrapFormConfigHelper._instance = new BootstrapFormConfigHelper();
    }

    return BootstrapFormConfigHelper._instance;
  }

  generateFormConfig(dataObjDef, displayOrders, hasDeleteButton, hideModifierFields = false) {
    let fieldOperations = new _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__.BasicFieldOperations();
    let rbgFieldOperation = new _RBGFieldOperations__WEBPACK_IMPORTED_MODULE_4__.RBGFieldOperations(); // create the Field UI config for each field

    let fieldUIConfigs = [];
    dataObjDef.fields.forEach((fieldDef, index) => {
      let fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;

      switch (fieldDef.type) {
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
          {
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            // is this the created or modified date
            if (hideModifierFields) {
              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__.FIELD_CreatedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }

              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__.FIELD_ModifiedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.userId:
          {
            if (hideModifierFields) {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            } else {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.number;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.email;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.password;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.checkbox;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.largeText:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.textarea;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.choice:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.select;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.radioGroup;
            break;
          }
      } // see if the field was supplied with a display order


      const displayOrder = displayOrders.find(value => value.fieldId === fieldDef.id);
      let displayOrderValue = index;

      if (displayOrder) {
        displayOrderValue = displayOrder.displayOrder;
      } // construct the field ui config


      let fieldUIConfig = {
        field: fieldDef,
        displayOrder: displayOrderValue,
        elementType: fieldType,
        elementClasses: 'form-control col-sm-9',
        renderer: fieldOperations,
        formatter: fieldOperations,
        getValue: _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.defaultGetValue
      };

      if (fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id && fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid && fieldType !== _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden) {
        // no labels, descriptions, container for id,uuid
        fieldUIConfig.containedBy = {
          elementType: 'div',
          elementClasses: 'form-group row'
        };
        fieldUIConfig.label = {
          label: fieldDef.displayName,
          classes: 'col-md-12 col-lg-3 col-form-label'
        };

        if (fieldDef.description) {
          // descriptions if the field has one
          fieldUIConfig.describedBy = {
            message: fieldDef.description,
            elementType: 'small',
            elementClasses: 'text-muted col-md-12 col-lg-9 offset-lg-3 mt-1'
          };
        }

        if (!fieldDef.displayOnly) {
          // no validator for readonly items
          fieldUIConfig.validator = {
            validator: fieldOperations,
            messageDisplay: {
              elementType: 'div',
              elementClasses: 'invalid-feedback col-md-12 col-lg-9 offset-lg-3'
            },
            validClasses: 'is-valid',
            invalidClasses: 'is-invalid'
          };
        }
      } // text areas


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.largeText) {
        fieldUIConfig.textarea = {
          rows: 5,
          cols: 20
        };
      } // select


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.choice) {
        // subelements are options, with no classes, no labels, and no other container
        fieldUIConfig.subElement = {
          element: {
            elementType: 'option',
            elementClasses: ''
          }
        };
        fieldUIConfig.datasource = fieldDef.dataSource;
      } // radio button group


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice) {
        fieldUIConfig.subElement = {
          element: {
            elementType: 'input',
            elementClasses: 'form-check-input',
            elementAttributes: [{
              name: 'type',
              value: 'radio'
            }]
          },
          container: {
            elementType: 'div',
            elementClasses: 'form-check form-check-inline'
          },
          label: {
            label: 'label',
            classes: 'form-check-label'
          }
        };
        fieldUIConfig.renderer = rbgFieldOperation;
        if (fieldUIConfig.validator) fieldUIConfig.validator.validator = rbgFieldOperation;
        fieldUIConfig.formatter = rbgFieldOperation;
        fieldUIConfig.datasource = fieldDef.dataSource;
      }

      fieldUIConfigs.push(fieldUIConfig);
    }); // create a form with a single group and button container with Bootstrap styles

    const fieldGroup = {
      containedBy: {
        elementType: 'div',
        elementClasses: 'col-sm-12'
      },
      fields: fieldUIConfigs
    };
    const formConfig = {
      id: dataObjDef.id,
      displayName: dataObjDef.displayName,
      fieldGroups: [fieldGroup],
      unsavedChanges: {
        elementType: 'div',
        elementClasses: 'invalid-feedback text-right col-md-12 col-lg-9 offset-lg-3',
        elementAttributes: [{
          name: 'style',
          value: 'display:block'
        }],
        innerHTML: `Pending changes to ${dataObjDef.displayName}`
      },
      buttonsContainedBy: {
        elementType: 'div',
        elementClasses: 'd-flex w-100 justify-space-between'
      },
      cancelButton: {
        buttonText: 'Cancel  ',
        buttonClasses: 'btn-info rounded p-1 mr-2 mt-2 w-100',
        iconClasses: 'fas fa-ban'
      },
      submitButton: {
        buttonText: 'Save  ',
        buttonClasses: 'btn-primary rounded p-1 mt-2 w-100',
        iconClasses: 'fas fa-save'
      },
      activeSave: '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;'
    }; // sort the fields into display order

    formConfig.fieldGroups.forEach(group => {
      group.fields.sort((a, b) => {
        return a.displayOrder - b.displayOrder;
      });
    });

    if (hasDeleteButton) {
      formConfig.deleteButton = {
        buttonText: 'Delete  ',
        buttonClasses: 'btn-warning rounded p-1 mr-2 mt-2 w-100',
        iconClasses: 'fas fa-trash-alt'
      };
    }

    logger(formConfig);
    return formConfig;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/BootstrapTableConfigHelper.js":
/*!*********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/BootstrapTableConfigHelper.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapTableConfigHelper": () => (/* binding */ BootstrapTableConfigHelper)
/* harmony export */ });
/* harmony import */ var _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/BasicFieldOperations */ "../../ui-framework/dist/framework/model/BasicFieldOperations.js");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/BasicObjectDefinitionFactory */ "../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js");
/* harmony import */ var _LimitedChoiceTextRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LimitedChoiceTextRenderer */ "../../ui-framework/dist/framework/ui/helper/LimitedChoiceTextRenderer.js");






const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('bootstrap-tabular-config-helper');
class BootstrapTableConfigHelper {
  constructor() {}

  static getInstance() {
    if (!BootstrapTableConfigHelper._instance) {
      BootstrapTableConfigHelper._instance = new BootstrapTableConfigHelper();
    }

    return BootstrapTableConfigHelper._instance;
  }

  generateTableRowConfig(dataObjDef, displayOrders, itemDetailColumn, hasActions, hideModifierFields = false) {
    let fieldOperations = new _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__.BasicFieldOperations();
    let choiceRenderer = new _LimitedChoiceTextRenderer__WEBPACK_IMPORTED_MODULE_5__.LimitedChoiceTextRenderer(); // create the Field UI config for each field

    let fieldUIConfigs = [];
    let columnHeaderConfigs = [];
    dataObjDef.fields.forEach((fieldDef, index) => {
      let fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;

      switch (fieldDef.type) {
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            // is this the created or modified date
            if (hideModifierFields) {
              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_4__.FIELD_CreatedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }

              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_4__.FIELD_ModifiedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.userId:
          {
            if (hideModifierFields) {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            } else {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            break;
          }
      } // see if the field was supplied with a display order, no order, no display for a table


      const displayOrder = displayOrders.find(value => value.fieldId === fieldDef.id);
      let displayOrderValue = index;

      if (displayOrder) {
        displayOrderValue = displayOrder.displayOrder;

        if (fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id && fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid && fieldType !== _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden) {
          // no labels, descriptions, container for id,uuid
          let headerConfig = {
            field: fieldDef,
            element: {
              elementType: 'th',
              elementAttributes: [{
                name: 'scope',
                value: 'col'
              }],
              elementClasses: '',
              innerHTML: fieldDef.displayName
            }
          }; // construct the field ui config

          let fieldUIConfig = {
            field: fieldDef,
            displayOrder: displayOrderValue,
            elementType: _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.tableData,
            elementClasses: 'text-center',
            renderer: fieldOperations,
            getValue: _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.defaultGetValue
          };

          if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice) {
            fieldUIConfig.renderer = choiceRenderer;
          }

          columnHeaderConfigs.push(headerConfig);
          fieldUIConfigs.push(fieldUIConfig);
        }
      }
    });
    let actionColumn = null;

    if (hasActions) {
      actionColumn = {
        element: {
          elementType: 'th',
          elementAttributes: [{
            name: 'scope',
            value: 'col'
          }],
          elementClasses: 'text-right',
          innerHTML: 'Actions'
        }
      };
    }

    const tableConfig = {
      id: dataObjDef.id,
      displayName: dataObjDef.displayName,
      container: {
        elementType: 'div',
        elementClasses: 'table-responsive'
      },
      table: {
        elementType: 'table',
        elementClasses: 'table table-hover table-sm'
      },
      header: {
        elementType: 'thead',
        elementClasses: ''
      },
      headerColumns: columnHeaderConfigs,
      body: {
        elementType: 'tbody',
        elementClasses: ''
      },
      columns: fieldUIConfigs,
      itemDetailColumn: itemDetailColumn
    }; // sort the fields into display order

    tableConfig.columns.sort((a, b) => {
      return a.displayOrder - b.displayOrder;
    });

    if (actionColumn) {
      tableConfig.actionColumn = actionColumn;
    }

    logger(tableConfig);
    return tableConfig;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/LimitedChoiceTextRenderer.js":
/*!********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/LimitedChoiceTextRenderer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LimitedChoiceTextRenderer": () => (/* binding */ LimitedChoiceTextRenderer)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

const rlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('limited-choice-text-renderer');
class LimitedChoiceTextRenderer {
  constructor() {}

  renderValue(field, currentValue) {
    rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue}`); // find the current value in the data source and convert to text for display

    let result = currentValue;

    if (field.dataSource) {
      const valueOptions = field.dataSource.getOptions();
      const foundIndex = valueOptions.findIndex(option => option.value === currentValue);

      if (foundIndex >= 0) {
        result = valueOptions[foundIndex].name;
      }
    }

    return result;
  }

  generate(field, isCreate) {
    return '';
  }

  setSubElements(elements) {}

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/LinkedCollectionDetailController.js":
/*!***************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/LinkedCollectionDetailController.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeDataObjectDelegate": () => (/* binding */ ChangeDataObjectDelegate),
/* harmony export */   "LinkedCollectionDetailController": () => (/* binding */ LinkedCollectionDetailController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_DataObjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/DataObjectController */ "../../ui-framework/dist/framework/model/DataObjectController.js");
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert/AlertListener */ "../../ui-framework/dist/framework/ui/alert/AlertListener.js");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/AlertManager */ "../../ui-framework/dist/framework/ui/alert/AlertManager.js");




const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('linked-controller');
const dlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('linked-controller-detail');

class ChildViewListenerDelegate {
  constructor(controller) {
    this.controller = controller;
  }

  addView(view) {
    view.addEventListener(this);
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  documentLoaded(view) {}

  hideRequested(view) {}

  itemAction(view, actionName, selectedItem) {}

  itemDeleted(view, selectedItem) {}

  itemDropped(view, droppedItem) {}

  showRequested(view) {}

  cancelled(view, dataObj) {
    this.controller.cancelled(view, dataObj);
  }

  deletedItem(view, dataObj) {
    this.controller.deletedItem(view, dataObj);
  }

  saveNewItem(view, dataObj) {
    this.controller.saveNewItem(view, dataObj);
  }

  updateItem(view, dataObj) {
    this.controller.updateItem(view, dataObj);
  }

}

class ChangeDataObjectDelegate {
  constructor(callback) {
    this.callback = callback;
  }

  shouldDiscardChanges() {
    _alert_AlertManager__WEBPACK_IMPORTED_MODULE_3__.AlertManager.getInstance().startAlert(this, 'Discard Changes', 'There are unsaved changes.  Discard?', {});
  }

  completed(event) {
    if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_2__.AlertType.confirmed) {
      this.callback();
    }
  }

}
class LinkedCollectionDetailController extends _model_DataObjectController__WEBPACK_IMPORTED_MODULE_1__.DataObjectController {
  constructor(typeName, parentView) {
    super(typeName);
    this.children = [];
    logger(`Starting with parent view ${parentView.getName()}`);
    this.parentView = parentView;
    this.delegate = new ChildViewListenerDelegate(this);
    this.parentView.addEventListener(this);
  }

  addLinkedDetailView(childView) {
    logger(`Adding child view ${childView.getName()}`);
    this.children.push(childView);
    this.delegate.addView(childView); // this delegate will only pass us the unique detail view events (save, new, etc)
  }

  initialise() {}

  canDeleteItem(view, selectedItem) {
    logger(`Handling delete item from view ${view.getName()}`);
    dlogger(selectedItem);
    return this.parentView.hasPermissionToDeleteItemInNamedCollection('', selectedItem);
  }

  documentLoaded(view) {
    logger(`Handling document loaded view ${view.getName()}`); // let the children know

    this.children.forEach(childView => {
      childView.onDocumentLoaded();
    });
  }

  hideRequested(view) {
    // let the children know
    logger(`Handling hide  from view ${view.getName()}`);
    this.children.forEach(childView => {
      childView.hidden();
    });
  }

  itemAction(view, actionName, selectedItem) {
    logger(`Handling item action ${actionName} from view ${view.getName()}`);
    dlogger(selectedItem);
    this.children.forEach(childView => {
      childView.handleActionItem(actionName, selectedItem);
    });
  }

  itemDeleted(view, selectedItem) {
    logger(`Handling item deleted from view ${view.getName()}`);
    dlogger(selectedItem);
    this.children.forEach(childView => {
      // clear the child display and set readonly
      childView.clearDisplay();
      childView.setReadOnly();
    });
  }

  itemDeselected(view, selectedItem) {
    logger(`Handling item deselected from view ${view.getName()}`);
    dlogger(selectedItem);
    this.children.forEach(childView => {
      // clear the child display and set readonly
      childView.clearDisplay();
      childView.setReadOnly();
    });
  }

  itemDragStarted(view, selectedItem) {}

  itemDropped(view, droppedItem) {}

  itemSelected(view, selectedItem) {
    logger(`Handling item selected from view ${view.getName()}`);
    dlogger(selectedItem);
    this.children.forEach(childView => {
      childView.displayItem(selectedItem);
    });
  }

  showRequested(view) {
    logger(`Handling show from view ${view.getName()}`); // let the children know

    this.children.forEach(childView => {
      childView.show();
    });
  }

  canSelectItem(view, selectedItem) {
    logger(`Handling can select item from view ${view.getName()}`);
    dlogger(selectedItem); // are we currently in the middle of creating a new object?

    if (this.isCreatingNew) return false; // prevent selection if the children views have modified this item

    let canProceedWithSelection = true;
    this.children.forEach(childView => {
      if (childView.hasChanged()) {
        dlogger(`child view ${childView.getName()} has changed - cancelling`);
        canProceedWithSelection = false;
      }
    });

    if (!canProceedWithSelection) {
      canProceedWithSelection = confirm(`${view.getName()} - unsaved changes.  Discard them?`);
    }

    return canProceedWithSelection;
  }

  cancelled(view, dataObj) {
    logger(`Handling cancelled from child view ${view.getName()}`);
    dlogger(dataObj);
    this.isCreatingNew = false;
  }

  deletedItem(view, dataObj) {
    logger(`Handling deleted from child view ${view.getName()}`);
    dlogger(dataObj);
    this.informListenersOfDelete(dataObj);
  }

  saveNewItem(view, dataObj) {
    logger(`Handling save new from child view ${view.getName()}`);
    dlogger(dataObj);
    this.informListenersOfCreate(dataObj);
  }

  updateItem(view, dataObj) {
    logger(`Handling update from child view ${view.getName()}`);
    dlogger(dataObj);
    this.informListenersOfUpdate(dataObj);
  }

  _startNewObject() {
    logger(`Handling start new object`); // assume the first detail view will create the object for us

    let canProceedWithCreateNew = true;
    this.children.forEach(childView => {
      if (childView.hasChanged()) {
        dlogger(`child view ${childView.getName()} has changed - cancelling`);
        canProceedWithCreateNew = false;
      }
    });

    if (!canProceedWithCreateNew) {
      canProceedWithCreateNew = confirm(`There are unsaved changes.  Discard them?`);
    }

    if (this.children.length > 0) {
      logger(`Handling start new object with child view ${this.children[0].getName()}`);
      let dataObj = this.children[0].createItem();

      if (dataObj) {
        canProceedWithCreateNew = true;
        this.children[0].show();
      }
    }

    return canProceedWithCreateNew;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/RBGFieldOperations.js":
/*!*************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/RBGFieldOperations.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RBGFieldOperations": () => (/* binding */ RBGFieldOperations)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");


const flogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-formatter');
const vlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-validator');
const glogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-generator');
const rlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-renderer');
class RBGFieldOperations {
  constructor() {
    this.radioButtons = [];
  } // called when saving, change to final values


  formatValue(field, currentValue) {
    flogger(`Handling format value for RBG ${field.displayName} with value ${currentValue}`);
    let result = currentValue; // find the current selected radio button

    this.radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
        result = radioButton.value;

        if (field.idType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
          result = parseInt(result);
        }
      }
    });
    flogger(`Handling format value for field ${field.displayName} with value ${currentValue} - result is ${result}`);
    return result;
  }

  isValidValue(field, currentValue) {
    vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue}`);
    let response = {
      isValid: false,
      resetOnFailure: false
    }; // basics first, is the field mandatory?

    if (field.mandatory) {
      this.radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
          response.isValid = true;
        }
      });

      if (!response.isValid) {
        response.message = `${field.displayName} is required. Please select one of the values.`;
        vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue} - is valid is ${response.isValid} with message ${response.message}`);
        return response;
      }
    } else {
      response.isValid = true;
    } // ok, so we have some content, we need to check if the value is a valid format with regular expressions


    vlogger(`Handling is valid value for field ${field.displayName} with value ${currentValue} - is valid is ${response.isValid} with message ${response.message}`);
    return response;
  }

  renderValue(field, currentValue) {
    rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue}`);
    this.radioButtons.forEach(radioButton => {
      if (radioButton.value === currentValue) radioButton.checked = true;
    });
    return null;
  }

  generate(field, isCreate) {
    return '';
  }

  setSubElements(elements) {
    this.radioButtons = elements;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/helper/SimpleValueDataSource.js":
/*!****************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/helper/SimpleValueDataSource.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleValueDataSource": () => (/* binding */ SimpleValueDataSource)
/* harmony export */ });
class SimpleValueDataSource {
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

/***/ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.js":
/*!************************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewEventHandlerDelegate": () => (/* binding */ CollectionViewEventHandlerDelegate)
/* harmony export */ });
/* harmony import */ var _implementation_AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../implementation/AbstractView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alert/AlertManager */ "../../ui-framework/dist/framework/ui/alert/AlertManager.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alert/AlertListener */ "../../ui-framework/dist/framework/ui/alert/AlertListener.js");





const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-event-handler-delegate');
class CollectionViewEventHandlerDelegate {
  constructor(view, forwarder) {
    this.selectedItem = null;
    this.view = view;
    this.eventForwarder = forwarder; // event handlers

    this.eventStartDrag = this.eventStartDrag.bind(this);
    this.eventActionClicked = this.eventActionClicked.bind(this);
    this.eventClickItem = this.eventClickItem.bind(this);
    this.eventDeleteClickItem = this.eventDeleteClickItem.bind(this);
  }

  getDragData(event) {
    var _a, _b;

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
      // @ts-ignore
      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_TYPE] = (_a = this.view.getCollectionUIConfig().detail.drag) === null || _a === void 0 ? void 0 : _a.type; // @ts-ignore

      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_FROM] = (_b = this.view.getCollectionUIConfig().detail.drag) === null || _b === void 0 ? void 0 : _b.from;
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

/***/ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.js":
/*!************************************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewEventHandlerDelegateUsingContext": () => (/* binding */ CollectionViewEventHandlerDelegateUsingContext)
/* harmony export */ });
/* harmony import */ var _CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionViewEventHandlerDelegate */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.js");
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js");


class CollectionViewEventHandlerDelegateUsingContext extends _CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_0__.CollectionViewEventHandlerDelegate {
  constructor(view, forwarder) {
    super(view, forwarder);
  }

  getItemContext(event) {
    const contextDetail = _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_1__.ContextualInformationHelper.getInstance().findContextFromEvent(event);
    let context;

    if (contextDetail) {
      context = {
        itemId: contextDetail.identifier,
        dataSource: contextDetail.source
      };
    } else {
      context = {
        itemId: '',
        dataSource: this.view.getName()
      };
    }

    return context;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewListenerForwarder.js":
/*!*********************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/delegate/CollectionViewListenerForwarder.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewListenerForwarder": () => (/* binding */ CollectionViewListenerForwarder)
/* harmony export */ });
/* harmony import */ var _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js");

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

/***/ "../../ui-framework/dist/framework/ui/view/delegate/DetailViewListenerForwarder.js":
/*!*****************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/delegate/DetailViewListenerForwarder.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailViewListenerForwarder": () => (/* binding */ DetailViewListenerForwarder)
/* harmony export */ });
/* harmony import */ var _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js");

class DetailViewListenerForwarder extends _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__.ViewListenerForwarder {
  constructor() {
    super();
    this.detailViewListeners = [];
  }

  addListener(listener) {
    super.addListener(listener);
    this.detailViewListeners.push(listener);
  }

  saveNewItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(listener => listener.saveNewItem(view, dataObj));
    }
  }

  updateItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(listener => listener.updateItem(view, dataObj));
    }
  }

  deletedItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(listener => listener.deletedItem(view, dataObj));
    }
  }

  cancelled(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(listener => listener.cancelled(view, dataObj));
    }
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js":
/*!***********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewListenerForwarder": () => (/* binding */ ViewListenerForwarder)
/* harmony export */ });
class ViewListenerForwarder {
  constructor() {
    this.suppressEventEmits = false;
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

/***/ "../../ui-framework/dist/framework/ui/view/implementation/AbstractCollectionView.js":
/*!******************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/implementation/AbstractCollectionView.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractCollectionView": () => (/* binding */ AbstractCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/EqualityFunctions */ "../../ui-framework/dist/framework/util/EqualityFunctions.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delegate/CollectionViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewListenerForwarder.js");
/* harmony import */ var _delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delegate/CollectionViewEventHandlerDelegate */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.js");






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

/***/ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js":
/*!**************************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStatefulCollectionView": () => (/* binding */ AbstractStatefulCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractCollectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractCollectionView.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
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

/***/ "../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js":
/*!********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractView": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delegate/ViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js");



const avLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts');
const avLoggerDetails = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts-detail');
class AbstractView {
  constructor(uiConfig) {
    this.containerEl = null;
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
AbstractView.DATA_SOURCE = 'data-source';

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/implementation/DefaultPermissionChecker.js":
/*!********************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/implementation/DefaultPermissionChecker.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPermissionChecker": () => (/* binding */ DefaultPermissionChecker)
/* harmony export */ });
class DefaultPermissionChecker {
  hasPermissionToUpdateItem(item) {
    return true;
  }

  hasPermissionToDeleteItem(item) {
    return true;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/implementation/DetailViewImplementation.js":
/*!********************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/implementation/DetailViewImplementation.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailViewImplementation": () => (/* binding */ DetailViewImplementation)
/* harmony export */ });
/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js");
/* harmony import */ var _delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/DetailViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/DetailViewListenerForwarder.js");


class DetailViewImplementation extends _AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
  constructor(uiConfig, renderer) {
    super(uiConfig);
    this.currentItem = null;
    this.renderer = renderer;
    const forwarder = new _delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_1__.DetailViewListenerForwarder();
    this.eventForwarder = forwarder;
    this.renderer.setView(this);
    this.renderer.setEventForwarder(forwarder);
  }

  addEventDetailListener(listener) {
    this.eventForwarder.addListener(listener);
  }

  getItemId(name, item) {
    return '';
  }

  getItemDescription(name, item) {
    return '';
  }

  hasActionPermission(actionName, from, item) {
    return true;
  }

  getItem(from, identifier) {
    return this.currentItem;
  }

  clearDisplay() {
    this.renderer.reset();
  }

  clearReadOnly() {
    this.renderer.clearReadOnly();
  }

  setReadOnly() {
    this.renderer.setReadOnly();
  }

  isReadOnly() {
    return this.renderer.isReadOnly();
  }

  createItem() {
    return this.renderer.createItem();
  }

  displayItem(dataObj) {
    this.currentItem = dataObj;

    if (this.renderer.hasPermissionToUpdateItem(dataObj)) {
      this.renderer.displayItem(dataObj);
    } else {
      this.renderer.displayItemReadonly(dataObj);
    }

    this.show();
  }

  hidden() {
    this.renderer.hidden();
  }

  show() {
    this.renderer.show();
  }

  render() {
    this.displayItem(this.currentItem);
  }

  onDocumentLoaded() {
    this.renderer.onDocumentLoaded();
    super.onDocumentLoaded();
  }

  hasPermissionToDeleteItem(item) {
    return this.renderer.hasPermissionToDeleteItem(item);
  }

  hasPermissionToUpdateItem(item) {
    return this.renderer.hasPermissionToUpdateItem(item);
  }

  handleActionItem(actionName, selectedItem) {
    this.renderer.handleActionItem(actionName, selectedItem);
  }

  isDisplayingItem(dataObj) {
    return this.renderer.isDisplayingItem(dataObj);
  }

  hasChanged() {
    return this.renderer.hasChanged();
  }

  initialise(displayOrder, hasDeleteButton, hideModifierFields = false) {
    this.renderer.initialise(displayOrder, hasDeleteButton, hideModifierFields);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRenderer.js":
/*!**********************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRenderer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselViewRenderer": () => (/* binding */ CarouselViewRenderer)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");



const avLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('carousel-renderer');
class CarouselViewRenderer {
  constructor(view, eventHandler, config) {
    this.lastRenderedContainer = null;
    this.lastRenderedCollectionName = null;
    this.lastRenderedCollection = null;
    this.previousWindowWidth = 0;
    this.view = view;
    this.eventHandler = eventHandler;
    this.config = config;
  }

  onDocumentLoaded() {
    // we need to track window resizing
    this.previousWindowWidth = window.innerWidth;
    window.addEventListener('resize', event => {
      const newWindowWidth = window.innerWidth;
      let reRenderRequired = false;

      if (newWindowWidth < this.previousWindowWidth) {
        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_LARGE) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_LARGE) {
            // need to re-render carousel
            reRenderRequired = true;
            avLogger(`window reduced and is now smaller or equal to large`);
          }
        }

        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_MEDIUM) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_MEDIUM) {
            // need to re-render carousel
            reRenderRequired = true;
            avLogger(`window reduced and is now smaller or equal to medium`);
          }
        }

        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_SMALL) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_SMALL) {
            // need to re-render carousel
            reRenderRequired = true;
            avLogger(`window reduced and is now smaller or equal to small`);
          }
        }
      } else {
        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_SMALL) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_SMALL) {
            // need to re-render carousel
            avLogger(`window increased and is now larger than small`);
            reRenderRequired = true;
          }
        }

        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_MEDIUM) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_MEDIUM) {
            avLogger(`window increased and is now larger than medium`); // need to re-render carousel

            reRenderRequired = true;
          }
        }

        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_LARGE) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_LARGE) {
            avLogger(`window increased and is now larger than large`); // need to re-render carousel

            reRenderRequired = true;
          }
        }
      }

      this.previousWindowWidth = newWindowWidth;

      if (this.lastRenderedContainer && this.lastRenderedCollection && this.lastRenderedCollectionName && reRenderRequired) {
        this.setDisplayElementsForCollectionInContainer(this.lastRenderedContainer, this.lastRenderedCollectionName, this.lastRenderedCollection);
      }
    });
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    const dataSourceKeyId = this.view.getDataSourceKeyId();
    const resultDataKeyId = this.view.getIdForItemInNamedCollection(collectionName, item);
    const canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    avLogger(`view ${this.view.getName()}: creating carousel item`);
    avLogger(item);
    const collectionConfig = this.view.getCollectionUIConfig();
    let childEl = document.createElement(collectionConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(childEl, collectionConfig.resultsElementAttributes);
    childEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
    childEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);

    if (collectionConfig.detail.background) {
      let backgroundEl = document.createElement(collectionConfig.detail.background.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(backgroundEl, collectionConfig.detail.background.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(backgroundEl, collectionConfig.detail.background.elementAttributes);
      backgroundEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
      backgroundEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
      childEl.appendChild(backgroundEl);
      this.view.renderBackgroundForItemInNamedCollection(backgroundEl, collectionName, item);
    } // the content may be structured


    let textEl = childEl;

    if (collectionConfig.detail.containerClasses) {
      let contentEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(contentEl, collectionConfig.detail.containerClasses);
      contentEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
      contentEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
      textEl = document.createElement(collectionConfig.detail.textElementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(textEl, collectionConfig.detail.textElementClasses);
      textEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
      textEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
      contentEl.appendChild(textEl);

      if (collectionConfig.extraActions || collectionConfig.detail.delete) {
        let buttonsEl = document.createElement(this.config.actionContainer.elementType);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(buttonsEl, this.config.actionContainer.elementClasses);
        contentEl.appendChild(buttonsEl);

        if (collectionConfig.extraActions) {
          collectionConfig.extraActions.forEach(extraAction => {
            const hasPermissionForAction = this.view.hasPermissionToActionItemInNamedCollection(extraAction.name, collectionName, item);

            if (hasPermissionForAction) {
              let action = document.createElement('button');
              action.setAttribute('type', 'button');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(action, extraAction.buttonClasses);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(action, extraAction.attributes);

              if (extraAction.buttonText) {
                action.innerHTML = extraAction.buttonText;
              }

              if (extraAction.iconClasses) {
                let iconEl = document.createElement('i');
                _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
                iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
                iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
                action.appendChild(iconEl);
              }

              action.setAttribute(collectionConfig.keyId, resultDataKeyId);
              action.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
              action.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
              action.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                this.eventHandler.eventActionClicked(event);
              });
              buttonsEl.appendChild(action);
            }
          });
        }

        if (collectionConfig.detail.delete && collectionConfig && canDeleteItem) {
          let deleteButtonEl = document.createElement('button');
          deleteButtonEl.setAttribute('type', 'button');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(deleteButtonEl, collectionConfig.detail.delete.buttonClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(deleteButtonEl, collectionConfig.detail.delete.attributes);

          if (collectionConfig.detail.delete.buttonText) {
            deleteButtonEl.innerHTML = collectionConfig.detail.delete.buttonText;
          }

          if (collectionConfig.detail.delete.iconClasses) {
            let iconEl = document.createElement('i');
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.detail.delete.iconClasses);
            iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
            iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
            deleteButtonEl.appendChild(iconEl);
          }

          deleteButtonEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
          deleteButtonEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
          deleteButtonEl.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            this.eventHandler.eventDeleteClickItem(event);
          });
          buttonsEl.appendChild(deleteButtonEl);
        }
      }

      childEl.appendChild(contentEl);

      if (collectionConfig.detail.drag) {
        childEl.setAttribute('draggable', 'true');
        childEl.addEventListener('dragstart', this.eventHandler.eventStartDrag);
      } // add selection actions


      if (collectionConfig.detail.select) {
        childEl.addEventListener('click', this.eventHandler.eventClickItem);
      }
    } // add the key ids for selection


    textEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
    textEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
    const displayText = this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item); // add icons
    // add modifiers for patient state

    if (collectionConfig.modifiers) {
      const modifier = this.view.getModifierForItemInNamedCollection(collectionName, item);
      const secondModifier = this.view.getSecondaryModifierForItemInNamedCollection(collectionName, item);

      switch (modifier) {
        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.normal:
          {
            avLogger(`view ${this.view.getName()}: normal item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.normal);

            if (collectionConfig.icons && collectionConfig.icons.normal) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.normal);
              iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);

                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.active:
                {
                  if (collectionConfig.icons && collectionConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
                    iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.active:
          {
            avLogger(`view ${this.view.getName()}: active item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.active);

            if (collectionConfig.icons && collectionConfig.icons.active) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
              iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);

                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.inactive:
          {
            avLogger(`view ${this.view.getName()}: inactive item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.inactive);

            if (collectionConfig.icons && collectionConfig.icons.inactive) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.inactive);
              iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
              iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.warning:
                {
                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.Modifier.active:
                {
                  if (collectionConfig.icons && collectionConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
                    iconEl.setAttribute(collectionConfig.keyId, resultDataKeyId);
                    iconEl.setAttribute(dataSourceKeyId, collectionConfig.viewConfig.dataSourceId);
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
    avLogger(`view ${this.view.getName()}: creating carousel results`);
    avLogger(newState); // remove the previous items from list

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(containerEl); // need to break the items up by row, and the last row is active (assumes increasing time order)

    const numberOfResults = newState.length; // number of items per row depends on view port

    let itemsPerRow = this.config.itemsPerRow.xlarge;

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_LARGE) {
      itemsPerRow = this.config.itemsPerRow.large;
    }

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_MEDIUM) {
      itemsPerRow = this.config.itemsPerRow.medium;
    }

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.SCREEN_WIDTH_SMALL) {
      itemsPerRow = this.config.itemsPerRow.small;
    }

    const numberOfRows = Math.ceil(numberOfResults / itemsPerRow);
    avLogger(`view ${this.view.getName()}: creating carousel with number of results per row of ${itemsPerRow} with rows ${numberOfRows}`);

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      // create the row
      let rowContainerEl = document.createElement(this.config.rowContainer.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(rowContainerEl, this.config.rowContainer.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(rowContainerEl, this.config.rowContainer.elementAttributes); //browserUtil.addAttributes(rowContainerEl,[{name:'style',value:'display:block'}]);

      let rowEl = document.createElement(this.config.row.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(rowEl, this.config.row.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(rowEl, this.config.row.elementAttributes);
      rowContainerEl.appendChild(rowEl); // if this the active row?

      if (rowIndex === 0 && this.config.activeRowPosition === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.RowPosition.first || rowIndex === numberOfRows - 1 && this.config.activeRowPosition === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.RowPosition.last) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(rowContainerEl, this.config.activeRow.elementClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(rowContainerEl, this.config.activeRow.elementAttributes);
      }

      let itemIndex = rowIndex * itemsPerRow;

      while (itemIndex < (rowIndex + 1) * itemsPerRow && itemIndex < numberOfResults) {
        avLogger(`rowIndex ${rowIndex} item index ${itemIndex}`);
        const item = newState[itemIndex];
        let itemContainerEl = rowEl;

        if (this.config.multipleItemsPerRowContainer) {
          itemContainerEl = document.createElement(this.config.multipleItemsPerRowContainer.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(itemContainerEl, this.config.multipleItemsPerRowContainer.elementClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(itemContainerEl, this.config.multipleItemsPerRowContainer.elementAttributes);
          rowEl.appendChild(itemContainerEl);
        }

        const itemEl = this.createDisplayElementForCollectionItem(collectionName, item);
        itemContainerEl.appendChild(itemEl);
        itemIndex++;
      }

      containerEl.appendChild(rowContainerEl);
    }

    $('[data-toggle="tooltip"]').tooltip();
    this.lastRenderedContainer = containerEl;
    this.lastRenderedCollectionName = collectionName;
    this.lastRenderedCollection = newState;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRendererUsingContext.js":
/*!**********************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRendererUsingContext.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselViewRendererUsingContext": () => (/* binding */ CarouselViewRendererUsingContext)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js");




const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('carousel-renderer');
class CarouselViewRendererUsingContext {
  constructor(view, eventHandler, config) {
    this.lastRenderedContainer = null;
    this.lastRenderedCollectionName = null;
    this.lastRenderedCollection = null;
    this.previousWindowWidth = 0;
    this.view = view;
    this.eventHandler = eventHandler;
    this.config = config;
  }

  onDocumentLoaded() {
    // we need to track window resizing
    this.previousWindowWidth = window.innerWidth;
    window.addEventListener('resize', event => {
      const newWindowWidth = window.innerWidth;
      let reRenderRequired = false;

      if (newWindowWidth < this.previousWindowWidth) {
        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_LARGE) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_LARGE) {
            // need to re-render carousel
            reRenderRequired = true;
            logger(`window reduced and is now smaller or equal to large`);
          }
        }

        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_MEDIUM) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_MEDIUM) {
            // need to re-render carousel
            reRenderRequired = true;
            logger(`window reduced and is now smaller or equal to medium`);
          }
        }

        if (this.previousWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_SMALL) {
          if (newWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_SMALL) {
            // need to re-render carousel
            reRenderRequired = true;
            logger(`window reduced and is now smaller or equal to small`);
          }
        }
      } else {
        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_SMALL) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_SMALL) {
            // need to re-render carousel
            logger(`window increased and is now larger than small`);
            reRenderRequired = true;
          }
        }

        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_MEDIUM) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_MEDIUM) {
            logger(`window increased and is now larger than medium`); // need to re-render carousel

            reRenderRequired = true;
          }
        }

        if (this.previousWindowWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_LARGE) {
          if (newWindowWidth > _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_LARGE) {
            logger(`window increased and is now larger than large`); // need to re-render carousel

            reRenderRequired = true;
          }
        }
      }

      this.previousWindowWidth = newWindowWidth;

      if (this.lastRenderedContainer && this.lastRenderedCollection && this.lastRenderedCollectionName && reRenderRequired) {
        this.setDisplayElementsForCollectionInContainer(this.lastRenderedContainer, this.lastRenderedCollectionName, this.lastRenderedCollection);
      }
    });
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    const canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    logger(`view ${this.view.getName()}: creating carousel item`);
    logger(item);
    const collectionConfig = this.view.getCollectionUIConfig();
    let childEl = document.createElement(collectionConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(childEl, collectionConfig.resultsElementAttributes);

    if (collectionConfig.detail.background) {
      let backgroundEl = document.createElement(collectionConfig.detail.background.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(backgroundEl, collectionConfig.detail.background.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(backgroundEl, collectionConfig.detail.background.elementAttributes);
      childEl.appendChild(backgroundEl);
      this.view.renderBackgroundForItemInNamedCollection(backgroundEl, collectionName, item);
    } // the content may be structured


    let textEl = childEl;

    if (collectionConfig.detail.containerClasses) {
      let contentEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, collectionConfig.detail.containerClasses);
      textEl = document.createElement(collectionConfig.detail.textElementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(textEl, collectionConfig.detail.textElementClasses);
      contentEl.appendChild(textEl);

      if (collectionConfig.extraActions || collectionConfig.detail.delete) {
        let buttonsEl = document.createElement(this.config.actionContainer.elementType);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(buttonsEl, this.config.actionContainer.elementClasses);
        contentEl.appendChild(buttonsEl);

        if (collectionConfig.extraActions) {
          collectionConfig.extraActions.forEach(extraAction => {
            const hasPermissionForAction = this.view.hasPermissionToActionItemInNamedCollection(extraAction.name, collectionName, item);

            if (hasPermissionForAction) {
              let action = document.createElement('button');
              action.setAttribute('type', 'button');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(action, extraAction.buttonClasses);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(action, extraAction.attributes);

              if (extraAction.buttonText) {
                action.innerHTML = extraAction.buttonText;
              }

              if (extraAction.iconClasses) {
                let iconEl = document.createElement('i');
                _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
                iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
                action.appendChild(iconEl);
              }

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

        if (collectionConfig.detail.delete && collectionConfig && canDeleteItem) {
          let deleteButtonEl = document.createElement('button');
          deleteButtonEl.setAttribute('type', 'button');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(deleteButtonEl, collectionConfig.detail.delete.buttonClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(deleteButtonEl, collectionConfig.detail.delete.attributes);

          if (collectionConfig.detail.delete.buttonText) {
            deleteButtonEl.innerHTML = collectionConfig.detail.delete.buttonText;
          }

          if (collectionConfig.detail.delete.iconClasses) {
            let iconEl = document.createElement('i');
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.detail.delete.iconClasses);
            deleteButtonEl.appendChild(iconEl);
          }

          deleteButtonEl.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            this.eventHandler.eventDeleteClickItem(event);
          });
          buttonsEl.appendChild(deleteButtonEl);
        }
      }

      childEl.appendChild(contentEl);

      if (collectionConfig.detail.drag) {
        childEl.setAttribute('draggable', 'true');
        childEl.addEventListener('dragstart', this.eventHandler.eventStartDrag);
      } // add selection actions


      if (collectionConfig.detail.select) {
        childEl.addEventListener('click', this.eventHandler.eventClickItem);
      }
    }

    const displayText = this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item); // add icons
    // add modifiers for patient state

    if (collectionConfig.modifiers) {
      const modifier = this.view.getModifierForItemInNamedCollection(collectionName, item);
      const secondModifier = this.view.getSecondaryModifierForItemInNamedCollection(collectionName, item);

      switch (modifier) {
        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal:
          {
            logger(`view ${this.view.getName()}: normal item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.normal);

            if (collectionConfig.icons && collectionConfig.icons.normal) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.normal);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);

                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (collectionConfig.icons && collectionConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
                    textEl.appendChild(iconEl);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
          {
            logger(`view ${this.view.getName()}: active item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.active);

            if (collectionConfig.icons && collectionConfig.icons.active) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);

                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive:
          {
            logger(`view ${this.view.getName()}: inactive item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.inactive);

            if (collectionConfig.icons && collectionConfig.icons.inactive) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.inactive);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  if (collectionConfig.icons && collectionConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, collectionConfig.modifiers.warning, true);
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.warning);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (collectionConfig.icons && collectionConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, collectionConfig.icons.active);
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
    logger(`view ${this.view.getName()}: creating carousel results`);
    logger(newState); // remove the previous items from list

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(containerEl); // need to break the items up by row, and the last row is active (assumes increasing time order)

    const numberOfResults = newState.length; // number of items per row depends on view port

    let itemsPerRow = this.config.itemsPerRow.xlarge;

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_LARGE) {
      itemsPerRow = this.config.itemsPerRow.large;
    }

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_MEDIUM) {
      itemsPerRow = this.config.itemsPerRow.medium;
    }

    if (window.innerWidth <= _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.SCREEN_WIDTH_SMALL) {
      itemsPerRow = this.config.itemsPerRow.small;
    }

    const numberOfRows = Math.ceil(numberOfResults / itemsPerRow);
    logger(`view ${this.view.getName()}: creating carousel with number of results per row of ${itemsPerRow} with rows ${numberOfRows}`);

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      // create the row
      let rowContainerEl = document.createElement(this.config.rowContainer.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(rowContainerEl, this.config.rowContainer.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(rowContainerEl, this.config.rowContainer.elementAttributes); //browserUtil.addAttributes(rowContainerEl,[{name:'style',value:'display:block'}]);

      let rowEl = document.createElement(this.config.row.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(rowEl, this.config.row.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(rowEl, this.config.row.elementAttributes);
      rowContainerEl.appendChild(rowEl); // if this the active row?

      if (rowIndex === 0 && this.config.activeRowPosition === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.RowPosition.first || rowIndex === numberOfRows - 1 && this.config.activeRowPosition === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.RowPosition.last) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(rowContainerEl, this.config.activeRow.elementClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(rowContainerEl, this.config.activeRow.elementAttributes);
      }

      let itemIndex = rowIndex * itemsPerRow;

      while (itemIndex < (rowIndex + 1) * itemsPerRow && itemIndex < numberOfResults) {
        logger(`rowIndex ${rowIndex} item index ${itemIndex}`);
        const item = newState[itemIndex];
        let itemContainerEl = rowEl;

        if (this.config.multipleItemsPerRowContainer) {
          itemContainerEl = document.createElement(this.config.multipleItemsPerRowContainer.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(itemContainerEl, this.config.multipleItemsPerRowContainer.elementClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(itemContainerEl, this.config.multipleItemsPerRowContainer.elementAttributes);
          rowEl.appendChild(itemContainerEl);
        }

        const itemEl = this.createDisplayElementForCollectionItem(collectionName, item);
        itemContainerEl.appendChild(itemEl);
        _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().addContextToElement(this.view.getName(), collectionName, item, itemEl, true, _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.TogglePlacement.bottom);
        itemEl.addEventListener('contextmenu', _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().handleContextMenu);
        itemIndex++;
      }

      containerEl.appendChild(rowContainerEl);
    }

    $('[data-toggle="tooltip"]').tooltip();
    this.lastRenderedContainer = containerEl;
    this.lastRenderedCollectionName = collectionName;
    this.lastRenderedCollection = newState;
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/renderer/FormDetailViewRenderer.js":
/*!************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/FormDetailViewRenderer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDetailViewRenderer": () => (/* binding */ FormDetailViewRenderer)
/* harmony export */ });
/* harmony import */ var _form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form/BasicFormImplementation */ "../../ui-framework/dist/framework/ui/form/BasicFormImplementation.js");
/* harmony import */ var _form_FormListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form/FormListener */ "../../ui-framework/dist/framework/ui/form/FormListener.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('form-detail-view-renderer');
class FormDetailViewRenderer {
  constructor(containerId, objDef, permissionChecker) {
    this.form = null;
    this.containerId = containerId;
    this.objDef = objDef;
    this.currentItem = {};
    this.isNewItem = false;
    this.forwarder = null;
    this.view = null;
    this.permissionChecker = permissionChecker;
  }

  hasActionPermission(actionName, from, item) {
    throw new Error("Method not implemented.");
  }

  setEventForwarder(forwarder) {
    this.forwarder = forwarder;
  }

  setView(view) {
    this.view = view;
  }

  onDocumentLoaded() {
    this.form = new _form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_0__.BasicFormImplementation(this.containerId, this.objDef);
    this.form.addFormListener(this);
  }

  reset() {
    if (this.form) this.form.reset();
  }

  initialise(displayOrder, hasDeleteButton, hideModifierFields) {
    if (this.form) this.form.initialise(displayOrder, hasDeleteButton, hideModifierFields);
  }

  displayItemReadonly(dataObject) {
    this.isNewItem = false;
    if (this.form) this.form.displayOnly(dataObject);
  }

  getName() {
    return this.objDef.displayName;
  }

  setContainedBy(container) {
    throw new Error("Method not implemented.");
  }

  addEventListener(listener) {
    throw new Error("Method not implemented.");
  }

  hasChanged() {
    let result = false;
    if (this.form) result = this.form.hasChanged();
    return result;
  }

  getUIConfig() {
    throw new Error("Method not implemented.");
  }

  getDataSourceKeyId() {
    throw new Error("Method not implemented.");
  }

  clearDisplay() {
    this.isNewItem = false;
    if (this.form) this.form.reset();
  }

  clearReadOnly() {
    if (this.form) this.form.clearReadOnly();
  }

  setReadOnly() {
    if (this.form) this.form.setReadOnly();
  }

  isReadOnly() {
    let result = false;
    if (this.form) result = this.form.isReadOnly();
    return result;
  }

  createItem() {
    var _a;

    this.currentItem = {};
    logger(`Creating new item with form ${(_a = this.form) === null || _a === void 0 ? void 0 : _a.getId()}`);

    if (this.form) {
      this.isNewItem = true;
      this.currentItem = this.form.startCreateNew();
    }

    $('[data-toggle="tooltip"]').tooltip();
    return this.currentItem;
  }

  displayItem(dataObj) {
    this.currentItem = dataObj;
    this.isNewItem = false;

    if (this.hasPermissionToUpdateItem(dataObj)) {
      if (this.form) this.form.startUpdate(dataObj);
    } else {
      if (this.form) this.form.displayOnly(dataObj);
    }

    $('[data-toggle="tooltip"]').tooltip();
  }

  hidden() {
    if (this.form) this.form.setIsVisible(false);
  }

  show() {
    if (this.form) this.form.setIsVisible(true);
  }

  render() {
    this.displayItem(this.currentItem);
    this.show();
  }

  hasPermissionToDeleteItem(item) {
    return this.permissionChecker.hasPermissionToDeleteItem(item);
  }

  hasPermissionToUpdateItem(item) {
    return this.permissionChecker.hasPermissionToUpdateItem(item);
  }

  getForm() {
    return this.form;
  }

  handleActionItem(actionName, selectedItem) {}

  isDisplayingItem(dataObj) {
    let result = false;

    if (this.currentItem) {
      if (this.form) {
        result = this.form.isDisplayingItem(dataObj);
      }
    }

    return result;
  }

  formChanged(event, formValues) {
    var _a; // catch form events for user leaving the form


    switch (event.eventType) {
      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLING:
        {
          logger(`Form is cancelling`);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLING_ABORTED:
        {
          logger(`Form is cancelling - aborted`);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLED:
        {
          logger(`Form is cancelled - resetting`);
          this.currentItem = formValues;
          if (this.forwarder && this.view) this.forwarder.cancelled(this.view, this.currentItem);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETING:
        {
          logger(`Form is deleting`);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETE_ABORTED:
        {
          logger(`Form is deleting - aborted`);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETED:
        {
          logger(`Form is deleted - resetting`);
          this.currentItem = formValues;
          if (this.forwarder && this.view) this.forwarder.deletedItem(this.view, this.currentItem); // user is deleting the object, will become invisible

          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVE_ABORTED:
        {
          logger(`Form save cancelled`);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVED:
        {
          logger(`Form is saved with data`);

          if (this.form) {
            let formattedObj = (_a = this.form) === null || _a === void 0 ? void 0 : _a.getFormattedDataObject();

            if (this.isNewItem) {
              if (this.forwarder && this.view) this.forwarder.saveNewItem(this.view, formattedObj);
            } else {
              if (this.forwarder && this.view) this.forwarder.updateItem(this.view, formattedObj);
            }

            this.isNewItem = false;
          }

          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVING:
        {
          logger(`Form is saving`);
          break;
        }
    }

    return false;
  }

  getItemDescription(from, item) {
    return "";
  }

  getItemId(from, item) {
    return "";
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js":
/*!******************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewRenderer": () => (/* binding */ ListViewRenderer)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
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

/***/ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRendererUsingContext.js":
/*!******************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/ListViewRendererUsingContext.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewRendererUsingContext": () => (/* binding */ ListViewRendererUsingContext)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js");




const avLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('list-view-renderer-with-context');
class ListViewRendererUsingContext {
  constructor(view, eventHandler) {
    this.view = view;
    this.eventHandler = eventHandler;
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    const canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    const uiConfig = this.view.getCollectionUIConfig();
    avLogger(`view ${this.view.getName()}: creating List item`);
    avLogger(item);
    const resultDataKeyId = this.view.getIdForItemInNamedCollection(collectionName, item);
    let childEl = document.createElement(uiConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(childEl, uiConfig.resultsElementAttributes); // the content may be structured

    let textEl = childEl;

    if (uiConfig.detail.containerClasses) {
      let contentEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, uiConfig.detail.containerClasses);
      textEl = document.createElement(uiConfig.detail.textElementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(textEl, uiConfig.detail.textElementClasses);
      contentEl.appendChild(textEl);

      if (uiConfig.detail.background) {
        let imgEl = document.createElement(uiConfig.detail.background.elementType);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(imgEl, uiConfig.detail.background.elementClasses);
        imgEl.setAttribute('src', this.view.getBackgroundImageForItemInNamedCollection(collectionName, item));
        childEl.appendChild(imgEl);
      }

      let buttonsEl = document.createElement('div');
      contentEl.appendChild(buttonsEl);

      if (uiConfig.detail.badge) {
        const badgeValue = this.view.getBadgeValueForItemInNamedCollection(collectionName, item);

        if (badgeValue > 0) {
          let badgeEl = document.createElement(uiConfig.detail.badge.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(badgeEl, uiConfig.detail.badge.elementClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(badgeEl, uiConfig.detail.badge.elementAttributes);
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
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(action, extraAction.buttonClasses);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(action, extraAction.attributes);

            if (extraAction.buttonText) {
              action.innerHTML = extraAction.buttonText;
            }

            if (extraAction.iconClasses) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
              iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
              action.appendChild(iconEl);
            }

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
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(deleteButtonEl, uiConfig.detail.delete.buttonClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(deleteButtonEl, uiConfig.detail.delete.attributes);

        if (uiConfig.detail.delete.buttonText) {
          deleteButtonEl.innerHTML = uiConfig.detail.delete.buttonText;
        }

        if (uiConfig.detail.delete.iconClasses) {
          let iconEl = document.createElement('i');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.detail.delete.iconClasses);
          deleteButtonEl.appendChild(iconEl);
        }

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


    this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item); // add icons

    if (uiConfig.detail.icons) {
      const icons = uiConfig.detail.icons(collectionName, item);
      icons.forEach(icon => {
        let iconEl = document.createElement('i');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, icon);
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
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal);

            if (uiConfig.icons && uiConfig.icons.normal) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.normal);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
                    textEl.appendChild(iconEl);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
          {
            avLogger(`view ${this.view.getName()}: active item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active);

            if (uiConfig.icons && uiConfig.icons.active) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
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
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive);

            if (uiConfig.icons && uiConfig.icons.inactive) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.inactive);
              textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  if (uiConfig.icons && uiConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning);
                    textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.icons.active);
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

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(containerEl); // add the new children

    newState.map((item, index) => {
      const childEl = this.createDisplayElementForCollectionItem(collectionName, item); // add draggable actions

      avLogger(`view ${this.view.getName()}:  Adding child ${this.view.getIdForItemInNamedCollection(collectionName, item)}`);
      containerEl.appendChild(childEl);
      _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().addContextToElement(this.view.getName(), collectionName, item, childEl, true);
      childEl.addEventListener('contextmenu', _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().handleContextMenu);
    });
    $('[data-toggle="tooltip"]').tooltip();
  }

  onDocumentLoaded() {}

}

/***/ }),

/***/ "../../ui-framework/dist/framework/ui/view/renderer/TabularViewRendererUsingContext.js":
/*!*********************************************************************************************!*\
  !*** ../../ui-framework/dist/framework/ui/view/renderer/TabularViewRendererUsingContext.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabularViewRendererUsingContext": () => (/* binding */ TabularViewRendererUsingContext)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "../../ui-framework/dist/framework/util/BrowserUtil.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "../../ui-framework/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js");




const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('tabular-view-renderer-with-context');
class TabularViewRendererUsingContext {
  constructor(view, eventHandler, tableConfig) {
    this.view = view;
    this.eventHandler = eventHandler;
    this.tableConfig = tableConfig;
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    const canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    const uiConfig = this.view.getCollectionUIConfig();
    logger(`view ${this.view.getName()}: creating table row item`);
    logger(item);
    const resultDataKeyId = this.view.getIdForItemInNamedCollection(collectionName, item);
    let tableRowEl = document.createElement(uiConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tableRowEl, uiConfig.resultsElementAttributes); // we need to build the row from the displayed item values using the renderer if present

    this.tableConfig.columns.forEach((column, index) => {
      const fieldValue = column.getValue(column, item[column.field.id]);
      let tdEl = document.createElement('td');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tdEl, column.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tdEl, column.elementAttributes);

      if (index + 1 === this.tableConfig.itemDetailColumn) {
        // this column is different and can have many components
        // the content may be structured
        if (uiConfig.detail.containerClasses) {
          let contentEl = document.createElement('div');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(contentEl, uiConfig.detail.containerClasses);
          let textEl = document.createElement(uiConfig.detail.textElementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(textEl, uiConfig.detail.textElementClasses); // add the key ids for selection

          this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item);
          contentEl.appendChild(textEl);

          if (uiConfig.detail.background) {
            let imgEl = document.createElement(uiConfig.detail.background.elementType);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(imgEl, uiConfig.detail.background.elementClasses);
            imgEl.setAttribute('src', this.view.getBackgroundImageForItemInNamedCollection(collectionName, item));
            contentEl.appendChild(imgEl);
          }

          if (uiConfig.detail.badge) {
            const badgeValue = this.view.getBadgeValueForItemInNamedCollection(collectionName, item);

            if (badgeValue > 0) {
              let badgeEl = document.createElement(uiConfig.detail.badge.elementType);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(badgeEl, uiConfig.detail.badge.elementClasses);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(badgeEl, uiConfig.detail.badge.elementAttributes);
              contentEl.appendChild(badgeEl);
              badgeEl.innerHTML = `&nbsp;&nbsp;&nbsp;${badgeValue}&nbsp;&nbsp;&nbsp;`;
            }
          } // add icons


          if (uiConfig.detail.icons) {
            const icons = uiConfig.detail.icons(collectionName, item);
            icons.forEach(icon => {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, icon);
              contentEl.appendChild(iconEl);
            });
          }

          tdEl.appendChild(contentEl);
        }
      } else {
        tdEl.innerHTML = fieldValue;
      }

      tableRowEl.appendChild(tdEl);
    }); // we add an extra column for any actions or the delete function

    if (this.tableConfig.actionColumn) {
      // create the extra table column
      let tdEl = document.createElement('td');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tdEl, this.tableConfig.actionColumn.element.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tdEl, this.tableConfig.actionColumn.element.elementAttributes);

      if (uiConfig.extraActions) {
        uiConfig.extraActions.forEach(extraAction => {
          const hasPermissionForAction = this.view.hasPermissionToActionItemInNamedCollection(extraAction.name, collectionName, item);

          if (hasPermissionForAction) {
            let action = document.createElement('button');
            action.setAttribute('type', 'button');
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(action, extraAction.buttonClasses);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(action, extraAction.attributes);

            if (extraAction.buttonText) {
              action.innerHTML = extraAction.buttonText;
            }

            if (extraAction.iconClasses) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
              iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
              action.appendChild(iconEl);
            }

            action.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
            action.addEventListener('click', event => {
              event.preventDefault();
              event.stopPropagation();
              this.eventHandler.eventActionClicked(event);
            });
            tdEl.appendChild(action);
          }
        });
      }

      if (uiConfig.detail.delete && canDeleteItem) {
        let deleteButtonEl = document.createElement('button');
        deleteButtonEl.setAttribute('type', 'button');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(deleteButtonEl, uiConfig.detail.delete.buttonClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(deleteButtonEl, uiConfig.detail.delete.attributes);

        if (uiConfig.detail.delete.buttonText) {
          deleteButtonEl.innerHTML = uiConfig.detail.delete.buttonText;
        }

        if (uiConfig.detail.delete.iconClasses) {
          let iconEl = document.createElement('i');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.detail.delete.iconClasses);
          deleteButtonEl.appendChild(iconEl);
        }

        deleteButtonEl.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          this.eventHandler.eventDeleteClickItem(event);
        });
        tdEl.appendChild(deleteButtonEl);
      }

      tableRowEl.appendChild(tdEl);

      if (uiConfig.detail.drag) {
        tableRowEl.setAttribute('draggable', 'true');
        tableRowEl.addEventListener('dragstart', this.eventHandler.eventStartDrag);
      } // add selection actions


      if (uiConfig.detail.select) {
        tableRowEl.addEventListener('click', this.eventHandler.eventClickItem);
      }
    } // add modifiers for patient state


    if (uiConfig.modifiers) {
      const modifier = this.view.getModifierForItemInNamedCollection(collectionName, item);
      const secondModifier = this.view.getSecondaryModifierForItemInNamedCollection(collectionName, item);

      switch (modifier) {
        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.normal:
          {
            logger(`view ${this.view.getName()}: normal item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.normal);

            if (uiConfig.icons && uiConfig.icons.normal) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.normal); //textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning); //textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.active); //textEl.appendChild(iconEl);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.active:
          {
            logger(`view ${this.view.getName()}: active item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.active);

            if (uiConfig.icons && uiConfig.icons.active) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.active); //textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning); //textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.inactive:
          {
            logger(`view ${this.view.getName()}: inactive item`);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.inactive);

            if (uiConfig.icons && uiConfig.icons.inactive) {
              let iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.inactive); //textEl.appendChild(iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.warning:
                {
                  if (uiConfig.icons && uiConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableRowEl, uiConfig.modifiers.warning, true);
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.warning); //textEl.appendChild(iconEl);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    let iconEl = document.createElement('i');
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(iconEl, uiConfig.icons.active); //textEl.appendChild(iconEl);
                  }

                  break;
                }
            }

            break;
          }
      }
    }

    return tableRowEl;
  }

  onDocumentLoaded() {}

  setDisplayElementsForCollectionInContainer(containerEl, collectionName, newState) {
    logger(`view ${this.view.getName()}: creating Results`);
    logger(newState); // remove the previous items from list

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(containerEl); // create the table

    let tableEl = document.createElement(this.tableConfig.table.elementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableEl, this.tableConfig.table.elementClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tableEl, this.tableConfig.table.elementAttributes); // create the headers

    let tableHeaderEl = document.createElement(this.tableConfig.header.elementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableHeaderEl, this.tableConfig.header.elementClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tableHeaderEl, this.tableConfig.header.elementAttributes); // create the column headers

    this.tableConfig.headerColumns.forEach(header => {
      let thEl = document.createElement(header.element.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(thEl, header.element.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(thEl, header.element.elementAttributes);
      if (header.element.innerHTML) thEl.innerHTML = header.element.innerHTML;
      tableHeaderEl.appendChild(thEl);
    }); // create the action column header (if one)

    if (this.tableConfig.actionColumn) {
      let thEl = document.createElement(this.tableConfig.actionColumn.element.elementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(thEl, this.tableConfig.actionColumn.element.elementClasses);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(thEl, this.tableConfig.actionColumn.element.elementAttributes);
      if (this.tableConfig.actionColumn.element.innerHTML) thEl.innerHTML = this.tableConfig.actionColumn.element.innerHTML;
      tableHeaderEl.appendChild(thEl);
    }

    tableEl.appendChild(tableHeaderEl); // create the table body

    let tableBodyEl = document.createElement(this.tableConfig.body.elementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(tableBodyEl, this.tableConfig.body.elementClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(tableBodyEl, this.tableConfig.body.elementAttributes); // add the new children

    newState.map((item, index) => {
      const childEl = this.createDisplayElementForCollectionItem(collectionName, item); // add draggable actions

      logger(`view ${this.view.getName()}:  Adding child ${this.view.getIdForItemInNamedCollection(collectionName, item)}`);
      tableBodyEl.appendChild(childEl);
      _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().addContextToElement(this.view.getName(), collectionName, item, childEl, true);
      childEl.addEventListener('contextmenu', _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().handleContextMenu);
    });
    $('[data-toggle="tooltip"]').tooltip();
    tableEl.appendChild(tableBodyEl);
    containerEl.appendChild(tableEl);
  }

}

/***/ }),

/***/ "../../ui-framework/dist/framework/util/BrowserUtil.js":
/*!*************************************************************!*\
  !*** ../../ui-framework/dist/framework/util/BrowserUtil.js ***!
  \*************************************************************/
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

/***/ "../../ui-framework/dist/framework/util/EqualityFunctions.js":
/*!*******************************************************************!*\
  !*** ../../ui-framework/dist/framework/util/EqualityFunctions.js ***!
  \*******************************************************************/
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

/***/ "../../ui-framework/dist/index.js":
/*!****************************************!*\
  !*** ../../ui-framework/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonType": () => (/* reexport safe */ _framework_CommonTypes__WEBPACK_IMPORTED_MODULE_0__.ComparisonType),
/* harmony export */   "BasicFieldOperations": () => (/* reexport safe */ _framework_model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations),
/* harmony export */   "BasicObjectDefinitionFactory": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.BasicObjectDefinitionFactory),
/* harmony export */   "FIELD_ModifiedOn": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_ModifiedOn),
/* harmony export */   "FIELD_CreatedOn": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_CreatedOn),
/* harmony export */   "FIELD_ID": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_ID),
/* harmony export */   "FIELD_CreatedBy": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_CreatedBy),
/* harmony export */   "FIELD_CreatedBy_Desc": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_CreatedBy_Desc),
/* harmony export */   "FIELD_CreatedOn_Desc": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_CreatedOn_Desc),
/* harmony export */   "FIELD_ModifiedBy": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_ModifiedBy),
/* harmony export */   "FIELD_ModifiedBy_Desc": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_ModifiedBy_Desc),
/* harmony export */   "FIELD_ModifiedOn_Desc": () => (/* reexport safe */ _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__.FIELD_ModifiedOn_Desc),
/* harmony export */   "DataObjectController": () => (/* reexport safe */ _framework_model_DataObjectController__WEBPACK_IMPORTED_MODULE_3__.DataObjectController),
/* harmony export */   "FieldType": () => (/* reexport safe */ _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__.FieldType),
/* harmony export */   "ObjectDefinitionRegistry": () => (/* reexport safe */ _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_5__.ObjectDefinitionRegistry),
/* harmony export */   "ApiUtil": () => (/* reexport safe */ _framework_network_ApiUtil__WEBPACK_IMPORTED_MODULE_6__.ApiUtil),
/* harmony export */   "DownloadManager": () => (/* reexport safe */ _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_7__.DownloadManager),
/* harmony export */   "RequestType": () => (/* reexport safe */ _framework_network_Types__WEBPACK_IMPORTED_MODULE_8__.RequestType),
/* harmony export */   "queueType": () => (/* reexport safe */ _framework_network_Types__WEBPACK_IMPORTED_MODULE_8__.queueType),
/* harmony export */   "NotificationType": () => (/* reexport safe */ _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_9__.NotificationType),
/* harmony export */   "NotificationManager": () => (/* reexport safe */ _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_9__.NotificationManager),
/* harmony export */   "SecurityManager": () => (/* reexport safe */ _framework_security_SecurityManager__WEBPACK_IMPORTED_MODULE_10__.SecurityManager),
/* harmony export */   "ChatManager": () => (/* reexport safe */ _framework_socket_ChatManager__WEBPACK_IMPORTED_MODULE_11__.ChatManager),
/* harmony export */   "NotificationController": () => (/* reexport safe */ _framework_socket_NotificationController__WEBPACK_IMPORTED_MODULE_12__.NotificationController),
/* harmony export */   "SocketManager": () => (/* reexport safe */ _framework_socket_SocketManager__WEBPACK_IMPORTED_MODULE_13__.SocketManager),
/* harmony export */   "Priority": () => (/* reexport safe */ _framework_socket_Types__WEBPACK_IMPORTED_MODULE_14__.Priority),
/* harmony export */   "InviteType": () => (/* reexport safe */ _framework_socket_Types__WEBPACK_IMPORTED_MODULE_14__.InviteType),
/* harmony export */   "AbstractStateManager": () => (/* reexport safe */ _framework_state_AbstractStateManager__WEBPACK_IMPORTED_MODULE_15__.AbstractStateManager),
/* harmony export */   "AggregateStateManager": () => (/* reexport safe */ _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_16__.AggregateStateManager),
/* harmony export */   "AsyncStateManagerWrapper": () => (/* reexport safe */ _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_17__.AsyncStateManagerWrapper),
/* harmony export */   "BrowserStorageStateManager": () => (/* reexport safe */ _framework_state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_18__.BrowserStorageStateManager),
/* harmony export */   "EncryptedBrowserStorageStateManager": () => (/* reexport safe */ _framework_state_EncryptedBrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_19__.EncryptedBrowserStorageStateManager),
/* harmony export */   "EncryptedIndexedDBStateManager": () => (/* reexport safe */ _framework_state_EncryptedIndexedDBStateManager__WEBPACK_IMPORTED_MODULE_20__.EncryptedIndexedDBStateManager),
/* harmony export */   "GraphQLApiStateManager": () => (/* reexport safe */ _framework_state_GraphQLApiStateManager__WEBPACK_IMPORTED_MODULE_21__.GraphQLApiStateManager),
/* harmony export */   "IndexedDBStateManager": () => (/* reexport safe */ _framework_state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_22__.IndexedDBStateManager),
/* harmony export */   "RESTApiStateManager": () => (/* reexport safe */ _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_23__.RESTApiStateManager),
/* harmony export */   "MemoryBufferStateManager": () => (/* reexport safe */ _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_24__.MemoryBufferStateManager),
/* harmony export */   "StateManagerType": () => (/* reexport safe */ _framework_state_StateManager__WEBPACK_IMPORTED_MODULE_25__.StateManagerType),
/* harmony export */   "jsxCreateFragment": () => (/* reexport safe */ _framework_jsx_JSXParser__WEBPACK_IMPORTED_MODULE_26__.jsxCreateFragment),
/* harmony export */   "jsxCreateElement": () => (/* reexport safe */ _framework_jsx_JSXParser__WEBPACK_IMPORTED_MODULE_26__.jsxCreateElement),
/* harmony export */   "Modifier": () => (/* reexport safe */ _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_27__.Modifier),
/* harmony export */   "KeyType": () => (/* reexport safe */ _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_27__.KeyType),
/* harmony export */   "SidebarLocation": () => (/* reexport safe */ _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_27__.SidebarLocation),
/* harmony export */   "RowPosition": () => (/* reexport safe */ _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_27__.RowPosition),
/* harmony export */   "AlertType": () => (/* reexport safe */ _framework_ui_alert_AlertListener__WEBPACK_IMPORTED_MODULE_28__.AlertType),
/* harmony export */   "AlertManager": () => (/* reexport safe */ _framework_ui_alert_AlertManager__WEBPACK_IMPORTED_MODULE_29__.AlertManager),
/* harmony export */   "BlockedUserView": () => (/* reexport safe */ _framework_ui_chat_BlockedUserView__WEBPACK_IMPORTED_MODULE_30__.BlockedUserView),
/* harmony export */   "ChatLogDetailView": () => (/* reexport safe */ _framework_ui_chat_ChatLogDetailView__WEBPACK_IMPORTED_MODULE_31__.ChatLogDetailView),
/* harmony export */   "ChatLogsView": () => (/* reexport safe */ _framework_ui_chat_ChatLogsView__WEBPACK_IMPORTED_MODULE_32__.ChatLogsView),
/* harmony export */   "ChatRoomsSidebar": () => (/* reexport safe */ _framework_ui_chat_ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_33__.ChatRoomsSidebar),
/* harmony export */   "STATE_NAMES": () => (/* reexport safe */ _framework_ui_chat_ChatTypes__WEBPACK_IMPORTED_MODULE_34__.STATE_NAMES),
/* harmony export */   "DRAGGABLE": () => (/* reexport safe */ _framework_ui_chat_ChatTypes__WEBPACK_IMPORTED_MODULE_34__.DRAGGABLE),
/* harmony export */   "VIEW_NAME": () => (/* reexport safe */ _framework_ui_chat_ChatTypes__WEBPACK_IMPORTED_MODULE_34__.VIEW_NAME),
/* harmony export */   "FavouriteUserView": () => (/* reexport safe */ _framework_ui_chat_FavouriteUserView__WEBPACK_IMPORTED_MODULE_35__.FavouriteUserView),
/* harmony export */   "UserSearchSidebar": () => (/* reexport safe */ _framework_ui_chat_UserSearchSidebar__WEBPACK_IMPORTED_MODULE_36__.UserSearchSidebar),
/* harmony export */   "UserSearchView": () => (/* reexport safe */ _framework_ui_chat_UserSearchView__WEBPACK_IMPORTED_MODULE_37__.UserSearchView),
/* harmony export */   "SidebarViewContainer": () => (/* reexport safe */ _framework_ui_container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_38__.SidebarViewContainer),
/* harmony export */   "ContextualInformationHelper": () => (/* reexport safe */ _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_39__.ContextualInformationHelper),
/* harmony export */   "UIFieldType": () => (/* reexport safe */ _framework_ui_form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_40__.UIFieldType),
/* harmony export */   "defaultGetValue": () => (/* reexport safe */ _framework_ui_form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_40__.defaultGetValue),
/* harmony export */   "FormMode": () => (/* reexport safe */ _framework_ui_form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_40__.FormMode),
/* harmony export */   "FormEventType": () => (/* reexport safe */ _framework_ui_form_FormListener__WEBPACK_IMPORTED_MODULE_41__.FormEventType),
/* harmony export */   "AbstractForm": () => (/* reexport safe */ _framework_ui_form_AbstractForm__WEBPACK_IMPORTED_MODULE_42__.AbstractForm),
/* harmony export */   "FormElementFactory": () => (/* reexport safe */ _framework_ui_form_factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_43__.FormElementFactory),
/* harmony export */   "BasicFormImplementation": () => (/* reexport safe */ _framework_ui_form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_44__.BasicFormImplementation),
/* harmony export */   "ConditionResponse": () => (/* reexport safe */ _framework_ui_form_validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_45__.ConditionResponse),
/* harmony export */   "ValidationManager": () => (/* reexport safe */ _framework_ui_form_validation_ValidationManager__WEBPACK_IMPORTED_MODULE_46__.ValidationManager),
/* harmony export */   "BootstrapFormConfigHelper": () => (/* reexport safe */ _framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_47__.BootstrapFormConfigHelper),
/* harmony export */   "BootstrapTableConfigHelper": () => (/* reexport safe */ _framework_ui_helper_BootstrapTableConfigHelper__WEBPACK_IMPORTED_MODULE_48__.BootstrapTableConfigHelper),
/* harmony export */   "LimitedChoiceTextRenderer": () => (/* reexport safe */ _framework_ui_helper_LimitedChoiceTextRenderer__WEBPACK_IMPORTED_MODULE_49__.LimitedChoiceTextRenderer),
/* harmony export */   "LinkedCollectionDetailController": () => (/* reexport safe */ _framework_ui_helper_LinkedCollectionDetailController__WEBPACK_IMPORTED_MODULE_50__.LinkedCollectionDetailController),
/* harmony export */   "RBGFieldOperations": () => (/* reexport safe */ _framework_ui_helper_RBGFieldOperations__WEBPACK_IMPORTED_MODULE_51__.RBGFieldOperations),
/* harmony export */   "SimpleValueDataSource": () => (/* reexport safe */ _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_52__.SimpleValueDataSource),
/* harmony export */   "AbstractView": () => (/* reexport safe */ _framework_ui_view_implementation_AbstractView__WEBPACK_IMPORTED_MODULE_53__.AbstractView),
/* harmony export */   "AbstractCollectionView": () => (/* reexport safe */ _framework_ui_view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_54__.AbstractCollectionView),
/* harmony export */   "AbstractStatefulCollectionView": () => (/* reexport safe */ _framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_55__.AbstractStatefulCollectionView),
/* harmony export */   "DefaultPermissionChecker": () => (/* reexport safe */ _framework_ui_view_implementation_DefaultPermissionChecker__WEBPACK_IMPORTED_MODULE_56__.DefaultPermissionChecker),
/* harmony export */   "DetailViewImplementation": () => (/* reexport safe */ _framework_ui_view_implementation_DetailViewImplementation__WEBPACK_IMPORTED_MODULE_57__.DetailViewImplementation),
/* harmony export */   "CarouselViewRenderer": () => (/* reexport safe */ _framework_ui_view_renderer_CarouselViewRenderer__WEBPACK_IMPORTED_MODULE_58__.CarouselViewRenderer),
/* harmony export */   "CarouselViewRendererUsingContext": () => (/* reexport safe */ _framework_ui_view_renderer_CarouselViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_59__.CarouselViewRendererUsingContext),
/* harmony export */   "FormDetailViewRenderer": () => (/* reexport safe */ _framework_ui_view_renderer_FormDetailViewRenderer__WEBPACK_IMPORTED_MODULE_60__.FormDetailViewRenderer),
/* harmony export */   "ListViewRenderer": () => (/* reexport safe */ _framework_ui_view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_61__.ListViewRenderer),
/* harmony export */   "ListViewRendererUsingContext": () => (/* reexport safe */ _framework_ui_view_renderer_ListViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_62__.ListViewRendererUsingContext),
/* harmony export */   "TabularViewRendererUsingContext": () => (/* reexport safe */ _framework_ui_view_renderer_TabularViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_63__.TabularViewRendererUsingContext),
/* harmony export */   "ViewListenerForwarder": () => (/* reexport safe */ _framework_ui_view_delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_64__.ViewListenerForwarder),
/* harmony export */   "DetailViewListenerForwarder": () => (/* reexport safe */ _framework_ui_view_delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_65__.DetailViewListenerForwarder),
/* harmony export */   "CollectionViewListenerForwarder": () => (/* reexport safe */ _framework_ui_view_delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_66__.CollectionViewListenerForwarder),
/* harmony export */   "CollectionViewEventHandlerDelegate": () => (/* reexport safe */ _framework_ui_view_delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_67__.CollectionViewEventHandlerDelegate),
/* harmony export */   "CollectionViewEventHandlerDelegateUsingContext": () => (/* reexport safe */ _framework_ui_view_delegate_CollectionViewEventHandlerDelegateUsingContext__WEBPACK_IMPORTED_MODULE_68__.CollectionViewEventHandlerDelegateUsingContext)
/* harmony export */ });
/* harmony import */ var _framework_CommonTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/CommonTypes */ "../../ui-framework/dist/framework/CommonTypes.js");
/* harmony import */ var _framework_model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/model/BasicFieldOperations */ "../../ui-framework/dist/framework/model/BasicFieldOperations.js");
/* harmony import */ var _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/model/BasicObjectDefinitionFactory */ "../../ui-framework/dist/framework/model/BasicObjectDefinitionFactory.js");
/* harmony import */ var _framework_model_DataObjectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework/model/DataObjectController */ "../../ui-framework/dist/framework/model/DataObjectController.js");
/* harmony import */ var _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework/model/DataObjectTypeDefs */ "../../ui-framework/dist/framework/model/DataObjectTypeDefs.js");
/* harmony import */ var _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework/model/ObjectDefinitionRegistry */ "../../ui-framework/dist/framework/model/ObjectDefinitionRegistry.js");
/* harmony import */ var _framework_network_ApiUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework/network/ApiUtil */ "../../ui-framework/dist/framework/network/ApiUtil.js");
/* harmony import */ var _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework/network/DownloadManager */ "../../ui-framework/dist/framework/network/DownloadManager.js");
/* harmony import */ var _framework_network_Types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/network/Types */ "../../ui-framework/dist/framework/network/Types.js");
/* harmony import */ var _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./framework/notification/NotificationManager */ "../../ui-framework/dist/framework/notification/NotificationManager.js");
/* harmony import */ var _framework_security_SecurityManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./framework/security/SecurityManager */ "../../ui-framework/dist/framework/security/SecurityManager.js");
/* harmony import */ var _framework_socket_ChatManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./framework/socket/ChatManager */ "../../ui-framework/dist/framework/socket/ChatManager.js");
/* harmony import */ var _framework_socket_NotificationController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./framework/socket/NotificationController */ "../../ui-framework/dist/framework/socket/NotificationController.js");
/* harmony import */ var _framework_socket_SocketManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./framework/socket/SocketManager */ "../../ui-framework/dist/framework/socket/SocketManager.js");
/* harmony import */ var _framework_socket_Types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./framework/socket/Types */ "../../ui-framework/dist/framework/socket/Types.js");
/* harmony import */ var _framework_state_AbstractStateManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./framework/state/AbstractStateManager */ "../../ui-framework/dist/framework/state/AbstractStateManager.js");
/* harmony import */ var _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./framework/state/AggregateStateManager */ "../../ui-framework/dist/framework/state/AggregateStateManager.js");
/* harmony import */ var _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./framework/state/AsyncStateManagerWrapper */ "../../ui-framework/dist/framework/state/AsyncStateManagerWrapper.js");
/* harmony import */ var _framework_state_BrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./framework/state/BrowserStorageStateManager */ "../../ui-framework/dist/framework/state/BrowserStorageStateManager.js");
/* harmony import */ var _framework_state_EncryptedBrowserStorageStateManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./framework/state/EncryptedBrowserStorageStateManager */ "../../ui-framework/dist/framework/state/EncryptedBrowserStorageStateManager.js");
/* harmony import */ var _framework_state_EncryptedIndexedDBStateManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./framework/state/EncryptedIndexedDBStateManager */ "../../ui-framework/dist/framework/state/EncryptedIndexedDBStateManager.js");
/* harmony import */ var _framework_state_GraphQLApiStateManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./framework/state/GraphQLApiStateManager */ "../../ui-framework/dist/framework/state/GraphQLApiStateManager.js");
/* harmony import */ var _framework_state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./framework/state/IndexedDBStateManager */ "../../ui-framework/dist/framework/state/IndexedDBStateManager.js");
/* harmony import */ var _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./framework/state/RESTApiStateManager */ "../../ui-framework/dist/framework/state/RESTApiStateManager.js");
/* harmony import */ var _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./framework/state/MemoryBufferStateManager */ "../../ui-framework/dist/framework/state/MemoryBufferStateManager.js");
/* harmony import */ var _framework_state_StateManager__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./framework/state/StateManager */ "../../ui-framework/dist/framework/state/StateManager.js");
/* harmony import */ var _framework_jsx_JSXParser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./framework/jsx/JSXParser */ "../../ui-framework/dist/framework/jsx/JSXParser.js");
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./framework/ui/ConfigurationTypes */ "../../ui-framework/dist/framework/ui/ConfigurationTypes.js");
/* harmony import */ var _framework_ui_alert_AlertListener__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./framework/ui/alert/AlertListener */ "../../ui-framework/dist/framework/ui/alert/AlertListener.js");
/* harmony import */ var _framework_ui_alert_AlertManager__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./framework/ui/alert/AlertManager */ "../../ui-framework/dist/framework/ui/alert/AlertManager.js");
/* harmony import */ var _framework_ui_chat_BlockedUserView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./framework/ui/chat/BlockedUserView */ "../../ui-framework/dist/framework/ui/chat/BlockedUserView.js");
/* harmony import */ var _framework_ui_chat_ChatLogDetailView__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./framework/ui/chat/ChatLogDetailView */ "../../ui-framework/dist/framework/ui/chat/ChatLogDetailView.js");
/* harmony import */ var _framework_ui_chat_ChatLogsView__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./framework/ui/chat/ChatLogsView */ "../../ui-framework/dist/framework/ui/chat/ChatLogsView.js");
/* harmony import */ var _framework_ui_chat_ChatRoomsSidebar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./framework/ui/chat/ChatRoomsSidebar */ "../../ui-framework/dist/framework/ui/chat/ChatRoomsSidebar.js");
/* harmony import */ var _framework_ui_chat_ChatTypes__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./framework/ui/chat/ChatTypes */ "../../ui-framework/dist/framework/ui/chat/ChatTypes.js");
/* harmony import */ var _framework_ui_chat_FavouriteUserView__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./framework/ui/chat/FavouriteUserView */ "../../ui-framework/dist/framework/ui/chat/FavouriteUserView.js");
/* harmony import */ var _framework_ui_chat_UserSearchSidebar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./framework/ui/chat/UserSearchSidebar */ "../../ui-framework/dist/framework/ui/chat/UserSearchSidebar.js");
/* harmony import */ var _framework_ui_chat_UserSearchView__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./framework/ui/chat/UserSearchView */ "../../ui-framework/dist/framework/ui/chat/UserSearchView.js");
/* harmony import */ var _framework_ui_container_SidebarViewContainer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./framework/ui/container/SidebarViewContainer */ "../../ui-framework/dist/framework/ui/container/SidebarViewContainer.js");
/* harmony import */ var _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./framework/ui/context/ContextualInformationHelper */ "../../ui-framework/dist/framework/ui/context/ContextualInformationHelper.js");
/* harmony import */ var _framework_ui_form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./framework/ui/form/FormUITypeDefs */ "../../ui-framework/dist/framework/ui/form/FormUITypeDefs.js");
/* harmony import */ var _framework_ui_form_FormListener__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./framework/ui/form/FormListener */ "../../ui-framework/dist/framework/ui/form/FormListener.js");
/* harmony import */ var _framework_ui_form_AbstractForm__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./framework/ui/form/AbstractForm */ "../../ui-framework/dist/framework/ui/form/AbstractForm.js");
/* harmony import */ var _framework_ui_form_factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./framework/ui/form/factory/FormElementFactory */ "../../ui-framework/dist/framework/ui/form/factory/FormElementFactory.js");
/* harmony import */ var _framework_ui_form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./framework/ui/form/BasicFormImplementation */ "../../ui-framework/dist/framework/ui/form/BasicFormImplementation.js");
/* harmony import */ var _framework_ui_form_validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./framework/ui/form/validation/ValidationTypeDefs */ "../../ui-framework/dist/framework/ui/form/validation/ValidationTypeDefs.js");
/* harmony import */ var _framework_ui_form_validation_ValidationManager__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./framework/ui/form/validation/ValidationManager */ "../../ui-framework/dist/framework/ui/form/validation/ValidationManager.js");
/* harmony import */ var _framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./framework/ui/helper/BootstrapFormConfigHelper */ "../../ui-framework/dist/framework/ui/helper/BootstrapFormConfigHelper.js");
/* harmony import */ var _framework_ui_helper_BootstrapTableConfigHelper__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./framework/ui/helper/BootstrapTableConfigHelper */ "../../ui-framework/dist/framework/ui/helper/BootstrapTableConfigHelper.js");
/* harmony import */ var _framework_ui_helper_LimitedChoiceTextRenderer__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./framework/ui/helper/LimitedChoiceTextRenderer */ "../../ui-framework/dist/framework/ui/helper/LimitedChoiceTextRenderer.js");
/* harmony import */ var _framework_ui_helper_LinkedCollectionDetailController__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./framework/ui/helper/LinkedCollectionDetailController */ "../../ui-framework/dist/framework/ui/helper/LinkedCollectionDetailController.js");
/* harmony import */ var _framework_ui_helper_RBGFieldOperations__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./framework/ui/helper/RBGFieldOperations */ "../../ui-framework/dist/framework/ui/helper/RBGFieldOperations.js");
/* harmony import */ var _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./framework/ui/helper/SimpleValueDataSource */ "../../ui-framework/dist/framework/ui/helper/SimpleValueDataSource.js");
/* harmony import */ var _framework_ui_view_implementation_AbstractView__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./framework/ui/view/implementation/AbstractView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractView.js");
/* harmony import */ var _framework_ui_view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./framework/ui/view/implementation/AbstractCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractCollectionView.js");
/* harmony import */ var _framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./framework/ui/view/implementation/AbstractStatefulCollectionView */ "../../ui-framework/dist/framework/ui/view/implementation/AbstractStatefulCollectionView.js");
/* harmony import */ var _framework_ui_view_implementation_DefaultPermissionChecker__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./framework/ui/view/implementation/DefaultPermissionChecker */ "../../ui-framework/dist/framework/ui/view/implementation/DefaultPermissionChecker.js");
/* harmony import */ var _framework_ui_view_implementation_DetailViewImplementation__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./framework/ui/view/implementation/DetailViewImplementation */ "../../ui-framework/dist/framework/ui/view/implementation/DetailViewImplementation.js");
/* harmony import */ var _framework_ui_view_renderer_CarouselViewRenderer__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./framework/ui/view/renderer/CarouselViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRenderer.js");
/* harmony import */ var _framework_ui_view_renderer_CarouselViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./framework/ui/view/renderer/CarouselViewRendererUsingContext */ "../../ui-framework/dist/framework/ui/view/renderer/CarouselViewRendererUsingContext.js");
/* harmony import */ var _framework_ui_view_renderer_FormDetailViewRenderer__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./framework/ui/view/renderer/FormDetailViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/FormDetailViewRenderer.js");
/* harmony import */ var _framework_ui_view_renderer_ListViewRenderer__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./framework/ui/view/renderer/ListViewRenderer */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRenderer.js");
/* harmony import */ var _framework_ui_view_renderer_ListViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./framework/ui/view/renderer/ListViewRendererUsingContext */ "../../ui-framework/dist/framework/ui/view/renderer/ListViewRendererUsingContext.js");
/* harmony import */ var _framework_ui_view_renderer_TabularViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./framework/ui/view/renderer/TabularViewRendererUsingContext */ "../../ui-framework/dist/framework/ui/view/renderer/TabularViewRendererUsingContext.js");
/* harmony import */ var _framework_ui_view_delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./framework/ui/view/delegate/ViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/ViewListenerForwarder.js");
/* harmony import */ var _framework_ui_view_delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./framework/ui/view/delegate/DetailViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/DetailViewListenerForwarder.js");
/* harmony import */ var _framework_ui_view_delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./framework/ui/view/delegate/CollectionViewListenerForwarder */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewListenerForwarder.js");
/* harmony import */ var _framework_ui_view_delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./framework/ui/view/delegate/CollectionViewEventHandlerDelegate */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.js");
/* harmony import */ var _framework_ui_view_delegate_CollectionViewEventHandlerDelegateUsingContext__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext */ "../../ui-framework/dist/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.js");






/* network utils */




/* notifications */


/* Security Manager */






/* state management */












/* ui */













































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

/***/ }),

/***/ "../../ui-framework/node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!********************************************************************!*\
  !*** ../../ui-framework/node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "../../ui-framework/node_modules/moment/locale/af.js",
	"./af.js": "../../ui-framework/node_modules/moment/locale/af.js",
	"./ar": "../../ui-framework/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../ui-framework/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../ui-framework/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../ui-framework/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../ui-framework/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../ui-framework/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../ui-framework/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../ui-framework/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../ui-framework/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../ui-framework/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../ui-framework/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../ui-framework/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../ui-framework/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../ui-framework/node_modules/moment/locale/ar.js",
	"./az": "../../ui-framework/node_modules/moment/locale/az.js",
	"./az.js": "../../ui-framework/node_modules/moment/locale/az.js",
	"./be": "../../ui-framework/node_modules/moment/locale/be.js",
	"./be.js": "../../ui-framework/node_modules/moment/locale/be.js",
	"./bg": "../../ui-framework/node_modules/moment/locale/bg.js",
	"./bg.js": "../../ui-framework/node_modules/moment/locale/bg.js",
	"./bm": "../../ui-framework/node_modules/moment/locale/bm.js",
	"./bm.js": "../../ui-framework/node_modules/moment/locale/bm.js",
	"./bn": "../../ui-framework/node_modules/moment/locale/bn.js",
	"./bn-bd": "../../ui-framework/node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "../../ui-framework/node_modules/moment/locale/bn-bd.js",
	"./bn.js": "../../ui-framework/node_modules/moment/locale/bn.js",
	"./bo": "../../ui-framework/node_modules/moment/locale/bo.js",
	"./bo.js": "../../ui-framework/node_modules/moment/locale/bo.js",
	"./br": "../../ui-framework/node_modules/moment/locale/br.js",
	"./br.js": "../../ui-framework/node_modules/moment/locale/br.js",
	"./bs": "../../ui-framework/node_modules/moment/locale/bs.js",
	"./bs.js": "../../ui-framework/node_modules/moment/locale/bs.js",
	"./ca": "../../ui-framework/node_modules/moment/locale/ca.js",
	"./ca.js": "../../ui-framework/node_modules/moment/locale/ca.js",
	"./cs": "../../ui-framework/node_modules/moment/locale/cs.js",
	"./cs.js": "../../ui-framework/node_modules/moment/locale/cs.js",
	"./cv": "../../ui-framework/node_modules/moment/locale/cv.js",
	"./cv.js": "../../ui-framework/node_modules/moment/locale/cv.js",
	"./cy": "../../ui-framework/node_modules/moment/locale/cy.js",
	"./cy.js": "../../ui-framework/node_modules/moment/locale/cy.js",
	"./da": "../../ui-framework/node_modules/moment/locale/da.js",
	"./da.js": "../../ui-framework/node_modules/moment/locale/da.js",
	"./de": "../../ui-framework/node_modules/moment/locale/de.js",
	"./de-at": "../../ui-framework/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../ui-framework/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../ui-framework/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../ui-framework/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../ui-framework/node_modules/moment/locale/de.js",
	"./dv": "../../ui-framework/node_modules/moment/locale/dv.js",
	"./dv.js": "../../ui-framework/node_modules/moment/locale/dv.js",
	"./el": "../../ui-framework/node_modules/moment/locale/el.js",
	"./el.js": "../../ui-framework/node_modules/moment/locale/el.js",
	"./en-au": "../../ui-framework/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../ui-framework/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../ui-framework/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../ui-framework/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../ui-framework/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../ui-framework/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../ui-framework/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../ui-framework/node_modules/moment/locale/en-ie.js",
	"./en-il": "../../ui-framework/node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../ui-framework/node_modules/moment/locale/en-il.js",
	"./en-in": "../../ui-framework/node_modules/moment/locale/en-in.js",
	"./en-in.js": "../../ui-framework/node_modules/moment/locale/en-in.js",
	"./en-nz": "../../ui-framework/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../ui-framework/node_modules/moment/locale/en-nz.js",
	"./en-sg": "../../ui-framework/node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "../../ui-framework/node_modules/moment/locale/en-sg.js",
	"./eo": "../../ui-framework/node_modules/moment/locale/eo.js",
	"./eo.js": "../../ui-framework/node_modules/moment/locale/eo.js",
	"./es": "../../ui-framework/node_modules/moment/locale/es.js",
	"./es-do": "../../ui-framework/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../ui-framework/node_modules/moment/locale/es-do.js",
	"./es-mx": "../../ui-framework/node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "../../ui-framework/node_modules/moment/locale/es-mx.js",
	"./es-us": "../../ui-framework/node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../ui-framework/node_modules/moment/locale/es-us.js",
	"./es.js": "../../ui-framework/node_modules/moment/locale/es.js",
	"./et": "../../ui-framework/node_modules/moment/locale/et.js",
	"./et.js": "../../ui-framework/node_modules/moment/locale/et.js",
	"./eu": "../../ui-framework/node_modules/moment/locale/eu.js",
	"./eu.js": "../../ui-framework/node_modules/moment/locale/eu.js",
	"./fa": "../../ui-framework/node_modules/moment/locale/fa.js",
	"./fa.js": "../../ui-framework/node_modules/moment/locale/fa.js",
	"./fi": "../../ui-framework/node_modules/moment/locale/fi.js",
	"./fi.js": "../../ui-framework/node_modules/moment/locale/fi.js",
	"./fil": "../../ui-framework/node_modules/moment/locale/fil.js",
	"./fil.js": "../../ui-framework/node_modules/moment/locale/fil.js",
	"./fo": "../../ui-framework/node_modules/moment/locale/fo.js",
	"./fo.js": "../../ui-framework/node_modules/moment/locale/fo.js",
	"./fr": "../../ui-framework/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../ui-framework/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../ui-framework/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../ui-framework/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../ui-framework/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../ui-framework/node_modules/moment/locale/fr.js",
	"./fy": "../../ui-framework/node_modules/moment/locale/fy.js",
	"./fy.js": "../../ui-framework/node_modules/moment/locale/fy.js",
	"./ga": "../../ui-framework/node_modules/moment/locale/ga.js",
	"./ga.js": "../../ui-framework/node_modules/moment/locale/ga.js",
	"./gd": "../../ui-framework/node_modules/moment/locale/gd.js",
	"./gd.js": "../../ui-framework/node_modules/moment/locale/gd.js",
	"./gl": "../../ui-framework/node_modules/moment/locale/gl.js",
	"./gl.js": "../../ui-framework/node_modules/moment/locale/gl.js",
	"./gom-deva": "../../ui-framework/node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "../../ui-framework/node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "../../ui-framework/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../ui-framework/node_modules/moment/locale/gom-latn.js",
	"./gu": "../../ui-framework/node_modules/moment/locale/gu.js",
	"./gu.js": "../../ui-framework/node_modules/moment/locale/gu.js",
	"./he": "../../ui-framework/node_modules/moment/locale/he.js",
	"./he.js": "../../ui-framework/node_modules/moment/locale/he.js",
	"./hi": "../../ui-framework/node_modules/moment/locale/hi.js",
	"./hi.js": "../../ui-framework/node_modules/moment/locale/hi.js",
	"./hr": "../../ui-framework/node_modules/moment/locale/hr.js",
	"./hr.js": "../../ui-framework/node_modules/moment/locale/hr.js",
	"./hu": "../../ui-framework/node_modules/moment/locale/hu.js",
	"./hu.js": "../../ui-framework/node_modules/moment/locale/hu.js",
	"./hy-am": "../../ui-framework/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../ui-framework/node_modules/moment/locale/hy-am.js",
	"./id": "../../ui-framework/node_modules/moment/locale/id.js",
	"./id.js": "../../ui-framework/node_modules/moment/locale/id.js",
	"./is": "../../ui-framework/node_modules/moment/locale/is.js",
	"./is.js": "../../ui-framework/node_modules/moment/locale/is.js",
	"./it": "../../ui-framework/node_modules/moment/locale/it.js",
	"./it-ch": "../../ui-framework/node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../ui-framework/node_modules/moment/locale/it-ch.js",
	"./it.js": "../../ui-framework/node_modules/moment/locale/it.js",
	"./ja": "../../ui-framework/node_modules/moment/locale/ja.js",
	"./ja.js": "../../ui-framework/node_modules/moment/locale/ja.js",
	"./jv": "../../ui-framework/node_modules/moment/locale/jv.js",
	"./jv.js": "../../ui-framework/node_modules/moment/locale/jv.js",
	"./ka": "../../ui-framework/node_modules/moment/locale/ka.js",
	"./ka.js": "../../ui-framework/node_modules/moment/locale/ka.js",
	"./kk": "../../ui-framework/node_modules/moment/locale/kk.js",
	"./kk.js": "../../ui-framework/node_modules/moment/locale/kk.js",
	"./km": "../../ui-framework/node_modules/moment/locale/km.js",
	"./km.js": "../../ui-framework/node_modules/moment/locale/km.js",
	"./kn": "../../ui-framework/node_modules/moment/locale/kn.js",
	"./kn.js": "../../ui-framework/node_modules/moment/locale/kn.js",
	"./ko": "../../ui-framework/node_modules/moment/locale/ko.js",
	"./ko.js": "../../ui-framework/node_modules/moment/locale/ko.js",
	"./ku": "../../ui-framework/node_modules/moment/locale/ku.js",
	"./ku.js": "../../ui-framework/node_modules/moment/locale/ku.js",
	"./ky": "../../ui-framework/node_modules/moment/locale/ky.js",
	"./ky.js": "../../ui-framework/node_modules/moment/locale/ky.js",
	"./lb": "../../ui-framework/node_modules/moment/locale/lb.js",
	"./lb.js": "../../ui-framework/node_modules/moment/locale/lb.js",
	"./lo": "../../ui-framework/node_modules/moment/locale/lo.js",
	"./lo.js": "../../ui-framework/node_modules/moment/locale/lo.js",
	"./lt": "../../ui-framework/node_modules/moment/locale/lt.js",
	"./lt.js": "../../ui-framework/node_modules/moment/locale/lt.js",
	"./lv": "../../ui-framework/node_modules/moment/locale/lv.js",
	"./lv.js": "../../ui-framework/node_modules/moment/locale/lv.js",
	"./me": "../../ui-framework/node_modules/moment/locale/me.js",
	"./me.js": "../../ui-framework/node_modules/moment/locale/me.js",
	"./mi": "../../ui-framework/node_modules/moment/locale/mi.js",
	"./mi.js": "../../ui-framework/node_modules/moment/locale/mi.js",
	"./mk": "../../ui-framework/node_modules/moment/locale/mk.js",
	"./mk.js": "../../ui-framework/node_modules/moment/locale/mk.js",
	"./ml": "../../ui-framework/node_modules/moment/locale/ml.js",
	"./ml.js": "../../ui-framework/node_modules/moment/locale/ml.js",
	"./mn": "../../ui-framework/node_modules/moment/locale/mn.js",
	"./mn.js": "../../ui-framework/node_modules/moment/locale/mn.js",
	"./mr": "../../ui-framework/node_modules/moment/locale/mr.js",
	"./mr.js": "../../ui-framework/node_modules/moment/locale/mr.js",
	"./ms": "../../ui-framework/node_modules/moment/locale/ms.js",
	"./ms-my": "../../ui-framework/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../ui-framework/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../ui-framework/node_modules/moment/locale/ms.js",
	"./mt": "../../ui-framework/node_modules/moment/locale/mt.js",
	"./mt.js": "../../ui-framework/node_modules/moment/locale/mt.js",
	"./my": "../../ui-framework/node_modules/moment/locale/my.js",
	"./my.js": "../../ui-framework/node_modules/moment/locale/my.js",
	"./nb": "../../ui-framework/node_modules/moment/locale/nb.js",
	"./nb.js": "../../ui-framework/node_modules/moment/locale/nb.js",
	"./ne": "../../ui-framework/node_modules/moment/locale/ne.js",
	"./ne.js": "../../ui-framework/node_modules/moment/locale/ne.js",
	"./nl": "../../ui-framework/node_modules/moment/locale/nl.js",
	"./nl-be": "../../ui-framework/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../ui-framework/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../ui-framework/node_modules/moment/locale/nl.js",
	"./nn": "../../ui-framework/node_modules/moment/locale/nn.js",
	"./nn.js": "../../ui-framework/node_modules/moment/locale/nn.js",
	"./oc-lnc": "../../ui-framework/node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../ui-framework/node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "../../ui-framework/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../ui-framework/node_modules/moment/locale/pa-in.js",
	"./pl": "../../ui-framework/node_modules/moment/locale/pl.js",
	"./pl.js": "../../ui-framework/node_modules/moment/locale/pl.js",
	"./pt": "../../ui-framework/node_modules/moment/locale/pt.js",
	"./pt-br": "../../ui-framework/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../ui-framework/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../ui-framework/node_modules/moment/locale/pt.js",
	"./ro": "../../ui-framework/node_modules/moment/locale/ro.js",
	"./ro.js": "../../ui-framework/node_modules/moment/locale/ro.js",
	"./ru": "../../ui-framework/node_modules/moment/locale/ru.js",
	"./ru.js": "../../ui-framework/node_modules/moment/locale/ru.js",
	"./sd": "../../ui-framework/node_modules/moment/locale/sd.js",
	"./sd.js": "../../ui-framework/node_modules/moment/locale/sd.js",
	"./se": "../../ui-framework/node_modules/moment/locale/se.js",
	"./se.js": "../../ui-framework/node_modules/moment/locale/se.js",
	"./si": "../../ui-framework/node_modules/moment/locale/si.js",
	"./si.js": "../../ui-framework/node_modules/moment/locale/si.js",
	"./sk": "../../ui-framework/node_modules/moment/locale/sk.js",
	"./sk.js": "../../ui-framework/node_modules/moment/locale/sk.js",
	"./sl": "../../ui-framework/node_modules/moment/locale/sl.js",
	"./sl.js": "../../ui-framework/node_modules/moment/locale/sl.js",
	"./sq": "../../ui-framework/node_modules/moment/locale/sq.js",
	"./sq.js": "../../ui-framework/node_modules/moment/locale/sq.js",
	"./sr": "../../ui-framework/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../ui-framework/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../ui-framework/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../ui-framework/node_modules/moment/locale/sr.js",
	"./ss": "../../ui-framework/node_modules/moment/locale/ss.js",
	"./ss.js": "../../ui-framework/node_modules/moment/locale/ss.js",
	"./sv": "../../ui-framework/node_modules/moment/locale/sv.js",
	"./sv.js": "../../ui-framework/node_modules/moment/locale/sv.js",
	"./sw": "../../ui-framework/node_modules/moment/locale/sw.js",
	"./sw.js": "../../ui-framework/node_modules/moment/locale/sw.js",
	"./ta": "../../ui-framework/node_modules/moment/locale/ta.js",
	"./ta.js": "../../ui-framework/node_modules/moment/locale/ta.js",
	"./te": "../../ui-framework/node_modules/moment/locale/te.js",
	"./te.js": "../../ui-framework/node_modules/moment/locale/te.js",
	"./tet": "../../ui-framework/node_modules/moment/locale/tet.js",
	"./tet.js": "../../ui-framework/node_modules/moment/locale/tet.js",
	"./tg": "../../ui-framework/node_modules/moment/locale/tg.js",
	"./tg.js": "../../ui-framework/node_modules/moment/locale/tg.js",
	"./th": "../../ui-framework/node_modules/moment/locale/th.js",
	"./th.js": "../../ui-framework/node_modules/moment/locale/th.js",
	"./tk": "../../ui-framework/node_modules/moment/locale/tk.js",
	"./tk.js": "../../ui-framework/node_modules/moment/locale/tk.js",
	"./tl-ph": "../../ui-framework/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../ui-framework/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../ui-framework/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../ui-framework/node_modules/moment/locale/tlh.js",
	"./tr": "../../ui-framework/node_modules/moment/locale/tr.js",
	"./tr.js": "../../ui-framework/node_modules/moment/locale/tr.js",
	"./tzl": "../../ui-framework/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../ui-framework/node_modules/moment/locale/tzl.js",
	"./tzm": "../../ui-framework/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../ui-framework/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../ui-framework/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../ui-framework/node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../ui-framework/node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../ui-framework/node_modules/moment/locale/ug-cn.js",
	"./uk": "../../ui-framework/node_modules/moment/locale/uk.js",
	"./uk.js": "../../ui-framework/node_modules/moment/locale/uk.js",
	"./ur": "../../ui-framework/node_modules/moment/locale/ur.js",
	"./ur.js": "../../ui-framework/node_modules/moment/locale/ur.js",
	"./uz": "../../ui-framework/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../ui-framework/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../ui-framework/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../ui-framework/node_modules/moment/locale/uz.js",
	"./vi": "../../ui-framework/node_modules/moment/locale/vi.js",
	"./vi.js": "../../ui-framework/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../ui-framework/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../ui-framework/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../ui-framework/node_modules/moment/locale/yo.js",
	"./yo.js": "../../ui-framework/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../ui-framework/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../ui-framework/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../ui-framework/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../ui-framework/node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "../../ui-framework/node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "../../ui-framework/node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "../../ui-framework/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../ui-framework/node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "../../ui-framework/node_modules/moment/locale sync recursive ^\\.\\/.*$";

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