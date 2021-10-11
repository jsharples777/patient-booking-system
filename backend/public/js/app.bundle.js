/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppTypes.ts":
/*!*************************!*\
  !*** ./src/AppTypes.ts ***!
  \*************************/
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
/* harmony export */   "PatientSearchSidebarPrefs": () => (/* binding */ PatientSearchSidebarPrefs),
/* harmony export */   "PatientSearchSidebarContainers": () => (/* binding */ PatientSearchSidebarContainers),
/* harmony export */   "AppointmentTypesSidebarPrefs": () => (/* binding */ AppointmentTypesSidebarPrefs),
/* harmony export */   "AppointmentTypesSidebarContainers": () => (/* binding */ AppointmentTypesSidebarContainers),
/* harmony export */   "SELECT": () => (/* binding */ SELECT)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");

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
  clinicConfig: 'clinicConfig',
  providers: 'provider',
  appointmentTemplates: 'appointmentTemplate',
  patients: 'patient'
};
const API_Config = {
  login: '/login',
  graphQL: '/graphQL',
  users: '/api/users',
  clinicConfig: '/api/clinic-config',
  patients: '/api/patients',
  patientDemographics: '/api/demographics'
};
const NAVIGATION = {
  appointmentBook: 'navigationItemAppointmentBook',
  patientSearch: 'navigationItemPatientSearch',
  appointmentTemplates: 'navigationItemAppointmentTemplating',
  clinicChat: 'navigationItemChat',
  patientRecords: 'navigationItemPatientRecords',
  logout: 'navigationItemLogout',
  appointmentTypes: 'navigationItemAppointmentTypes'
};
const DRAGGABLE = {
  typeUser: 'user',
  fromUserSearch: 'userSearch',
  typePatientSummary: 'patientSummary',
  fromPatientSearch: 'patientSearch'
};
const VIEW_NAME = {
  blockedUsers: 'blockedUsers',
  chatLog: 'chatLog',
  chatLogs: 'chatLogs',
  favouriteUsers: 'favouriteUsers',
  userSearch: 'userSearch',
  patientSearch: 'patientSearch',
  appointmentTypes: 'appointmentTypes',
  appointmentTypeDetail: 'appointmentTypeDetail'
};
const VIEW_CONTAINER = {
  calendarControl: 'calendarControl',
  calendarDetail: 'calendarDetail'
};
const PatientSearchSidebarPrefs = {
  id: 'patientSearchSideBar',
  expandedSize: '40%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left
};
const PatientSearchSidebarContainers = {
  container: 'recentPatientSearches'
};
const AppointmentTypesSidebarPrefs = {
  id: 'appointmentTypesSideBar',
  expandedSize: '50%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left
};
const AppointmentTypesSidebarContainers = {
  list: 'appointmentTypes',
  detail: 'appointmentTypeDetail',
  colourPicker: 'appointmentTypeColour'
};
const SELECT = {
  appointmentType: 'event-appt-type',
  patientSearch: 'event-patient'
};

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketListenerDelegate */ "./src/SocketListenerDelegate.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");





const cLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts');
const cLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts-detail');
class Controller {
  static patientQuery = 'query getPatient($identifier: String!){\n' + '  getPatient(id: $identifier) {\n' + '    _id,\n' + '    lastSeen,\n' + '    lastSeenBy,\n' + '    dob,\n' + '    dod,\n' + '    gender,\n' + '    ethnicity,\n' + '    countryofbirth,\n' + '    created,\n' + '    modified,\n' + '    name{\n' + '      _id,\n' + '    \ttitle,\n' + '    \tfirstname,\n' + '    \tmiddlename,\n' + '    \tsurname,\n' + '    \taka\n' + '  \t},\n' + '    contact{\n' + '    \t_id,\n' + '    \tline1,\n' + '    \tline2,\n' + '    \tsuburb,\n' + '    \tpostcode,\n' + '    \tstate,\n' + '    \tcountry,\n' + '    \thome,\n' + '    \twork,\n' + '    \tmobile,\n' + '    \tnokname,\n' + '    \tnokphone\n' + '    },\n' + '    identifiers {\n' + '      _id,\n' + '    \tmedicare,\n' + '    \tmedicareRef,\n' + '    \tlegacyId,\n' + '   \t \tdva,\n' + '   \t \tdvaColour,\n' + '    \thcc,\n' + '    \tihi\n' + '    },\n' + '    flags {\n' + '      _id,\n' + '    \tisAcountHolder,\n' + '    \tlegacyAccountHolderId,\n' + '    \tisDeceased,\n' + '    \tisInactive,\n' + '    \tshouldSMS,\n' + '    \tisMarried,\n' + '    \tisCTGRegistered,\n' + '    \thasWarnings\n' + '    },\n' + '    warnings {\n' + '      _id, warnings\n' + '    },\n' + '    allergies {\n' + '      _id,\n' + '    \tname,\n' + '    \treaction,\n' + '    \tcreated,\n' + '    \tmodified\n' + '    },\n' + '    consults {\n' + '      _id, date, time, doctor, history, diagnosis, plan, findings, created, modified\n' + '    },\n' + '    history {\n' + '      _id, diagnosis, note, isConfidential, date, created, modified\n' + '    },\n' + '    results {\n' + '      _id, lab, labref, test, orderedBy, copies, requested, collected, reported, collectedTime, imported, received, result, isLinked, reviewedBy, isNormal, isLast\n' + '    },\n' + '    scripts {\n' + '      _id, by, name, on, dose, frequency, instructions, repeats, quantity, drugCode, lastPrinted, created, modified\n' + '    },\n' + '    scriptHistory {\n' + '      _id, changed, dose, change, reason, drugCode, name\n' + '    },\n' + '    scriptArchive {\n' + '      _id, medication, dose, scriptNumber, repeats, quantity, approvalCode, drugCode, note, created, modified\n' + '    },\n' + '    recalls{\n' + '      _id, reason, interval, isRecurring, due, isCompleted, created, modified\n' + '    },\n' + '    tasks {\n' + '      _id, by, isUrgent, isCompleted, isRead, title, details, completed, for, created, modified\n' + '    },\n' + '    documents {\n' + '      _id, title, type, from, reviewed, reviewedBy, data, created, modified\n' + '    },\n' + '    letters {\n' + '      _id, creator, isPrinted, isReviewd, from, type, data, to, created, modified\n' + '    },\n' + '    vaccinations {\n' + '      _id, vaccine, on, by, providerNum, batch, expiry, site, shouldSendtoAIR, airCode, created\n' + '    },\n' + '    forms {\n' + '      _id, title, from, category, data, created, modified\n' + '    },\n' + '    wcc {\n' + '      _id,\n' + '      employer {\n' + '        name, \n' + '        contact {\n' + '          line1, line2, suburb, state, postCode\n' + '        },\n' + '        insurer\n' + '      },\n' + '      claim {\n' + '        number, injury, injuryTime, injuryDate, claimDate, mechanism\n' + '      },\n' + '      date,time,reviewed, type, diagnosis, comment, treatment, isReturnToNormalDuties, returnToNormalDuties, isRestrictedDuties, restrictedDutiesFrom, restrictedDutiesTo, isNoCapacity, noCapacityFrom, noCapacityTo\n' + '    },\n' + '    modifiedDates {\n' + '      identifiers, warnings, allergies, consults, history, results, scripts, recalls, documents,letters,vaccinations\n' + '    }\n' + '  }\n' + '}';

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

    let restSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.RESTApiStateManager.getInstance();
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.patients,
      isActive: true,
      idField: '_id'
    }]);
    let qlSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.GraphQLApiStateManager.getInstance();
    qlSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getPatientSearchDetails {_id,identifiers { legacyId},flags {isInactive,hasWarnings},name {firstname,surname}, warnings {_id, warnings}}}',
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
        findAll: 'query {getAppointments {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime,readyForBilling,isBilled,billingItems}}',
        create: 'mutation createAppointment($data: AppointmentInput!){addAppointment(appt: $data) {_id,_patient, start, time, duration,createdBy,isDNA,isCancelled,provider,note,type,name,created,modified,arrivalTime,readyForBilling,isBilled,billingItems}}',
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
        findAll: 'query {getAppointmentTypes {_id,name,colour,icon,isStatus}}',
        create: 'mutation createAppointmentType($data: AppointmentTypeInput!){addAppointmentType(apptType: $data) {_id,name,colour,icon,isStatus}}',
        destroy: 'mutation deleteAppointmentType($identifier: String!){deleteAppointmentType(id: $identifier)}',
        update: 'mutation updateAppointmentType($data: AppointmentTypeInput!){updateAppointmentType(apptType: $data)}',
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getProviders {_id,name,providerNo,isCurrent}}',
        create: 'mutation addProvider($data: ProviderInput!){addProvider(provider: $data) {_id,name,providerNo,isCurrent}}',
        destroy: 'mutation deleteProvider($identifier: String!){deleteProvider(id: $identifier)}',
        update: 'mutation updateProvider($data: ProviderInput!){updateProvider(provider: $data)}',
        find: ''
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getAppointmentTemplates {_id,day, time, duration,createdBy,provider,type,created,modified}}',
        create: 'mutation addAppointmentTemplate($data: AppointmentTemplateInput!){addAppointmentTemplate(template: $data) {_id,day, time, duration,createdBy,provider,type,created,modified}}',
        destroy: 'mutation deleteAppointmentTemplate($identifier: String!){deleteAppointmentTemplate(id: $identifier)}',
        update: 'mutation updateAppointmentTemplate($data: AppointmentTemplateInput!){updateAppointmentTemplate(template: $data)}',
        find: ''
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: '',
        create: '',
        destroy: '',
        update: '',
        find: Controller.patientQuery
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
    }]);
    let aggregateSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AggregateStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let memorySM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.MemoryBufferStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncREST = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AsyncStateManagerWrapper(aggregateSM, restSM, ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncQL = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AsyncStateManagerWrapper(aggregateSM, qlSM, ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    aggregateSM.addStateManager(memorySM, [], false); //aggregateSM.addStateManager(asyncREST, [STATE_NAMES.recentUserSearches, STATE_NAMES.appointments,STATE_NAMES.patientSearch,STATE_NAMES.recentPatientSearches,STATE_NAMES.appointmentTypes, STATE_NAMES.providers,STATE_NAMES.appointmentTemplates,STATE_NAMES.patients], false);

    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates], false); //aggregateSM.addStateManager(asyncQL, [STATE_NAMES.recentUserSearches, STATE_NAMES.users,STATE_NAMES.clinicConfig], false);

    aggregateSM.addStateManager(asyncQL, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients], false);
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
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SocketManager.getInstance().setListener(socketListerDelegate); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger(`Setting up chat system for user ${this.getLoggedInUserId()}: ${this.getLoggedInUsername()}`);

    if (this.getLoggedInUserId().trim().length > 0) {
      // setup the chat system
      let chatManager = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.ChatManager.getInstance(); // this connects the manager to the socket system
      // setup the chat notification system

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.NotificationController.getInstance();
      chatManager.setCurrentUser(this.getLoggedInUsername()); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments); // apply any queued changes from being offline

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.DownloadManager.getInstance().processOfflineItems();
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
    copyOfExercise._id = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(); // update the id to be unique for the workout

    this.applicationView.addingExerciseToCurrentWorkout(copyOfExercise);
  }

  addWorkoutExercisesToCurrentWorkout(workout) {
    if (workout.exercises) {
      workout.exercises.forEach(exercise => {
        this.addExerciseToCurrentWorkout(exercise);
      });
    }
  }

  filterResults(managerName, name, filterResults) {}

  setupDataObjectDefinitions() {
    // create the object definitions for the exercise type and workout
    let apptTypeDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, 'Appointment Type', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, true, "Name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "colour", "Colour", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.colour, true, "Choose color from below");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "icon", "Icon", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, false, "Font Awesome icon classes");
    let statusFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "isStatus", "Patient flow status", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Used by the application to track patient state");
    statusFieldDef.displayOnly = true;
    cLogger(`Appointment type data object definition`);
    cLogger(apptTypeDef);
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

}

/***/ }),

/***/ "./src/DurationFunctions.ts":
/*!**********************************!*\
  !*** ./src/DurationFunctions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDurations": () => (/* binding */ addDurations),
/* harmony export */   "computeTimeStringFromStartTimeAndDurationInSeconds": () => (/* binding */ computeTimeStringFromStartTimeAndDurationInSeconds)
/* harmony export */ });
function addDurations(duration1, duration2) {
  const durationRegexp = /^(\d+:)?[0-5]?\d:[0-5]\d$/; // check both are valid durations

  const duration1Valid = durationRegexp.test(duration1);
  const duration2Valid = durationRegexp.test(duration2);

  if (duration1Valid && duration2Valid) {
    // split them into seconds, minutes, and hours
    const duration1Components = duration1.split(':');
    const duration2Components = duration2.split(':');
    let carry = 0; // add the seconds (last elements in each)

    const duration1Seconds = parseInt(duration1Components[duration1Components.length - 1]);
    const duration2Seconds = parseInt(duration2Components[duration2Components.length - 1]);
    let sumSeconds = duration1Seconds + duration2Seconds;

    if (sumSeconds >= 60) {
      carry = 1;
      sumSeconds -= 60;
    }

    const duration1Minutes = parseInt(duration1Components[duration1Components.length - 2]);
    const duration2Minutes = parseInt(duration2Components[duration2Components.length - 2]);
    let sumMinutes = duration1Minutes + duration2Minutes + carry;

    if (sumMinutes >= 60) {
      carry = 1;
      sumMinutes -= 60;
    } // do we have hours?


    let duration1Hours = 0;

    if (duration1Components.length == 3) {
      duration1Hours = parseInt(duration1Components[0]);
    }

    let duration2Hours = 0;

    if (duration2Components.length == 3) {
      duration2Hours = parseInt(duration2Components[0]);
    }

    let sumHours = duration1Hours + duration2Hours + carry;
    return `${sumHours > 0 ? sumHours + ':' : ''}${sumMinutes < 10 ? '0' + sumMinutes : sumMinutes}:${sumSeconds < 10 ? '0' + sumSeconds : sumSeconds}`;
  } else {
    return '00:00';
  }
}
function computeTimeStringFromStartTimeAndDurationInSeconds(appointmentTime, duration) {
  const time = parseInt(appointmentTime); // HHMMSS as a time

  const startTimeHours = Math.floor(time / 10000);
  const startTimeMinutes = Math.floor((time - startTimeHours * 10000) / 100);
  const appointmentDuration = Math.floor(duration / 60);
  let endTimeHours = startTimeHours;
  let endTimeMinutes = startTimeMinutes + appointmentDuration;

  if (endTimeMinutes >= 60) {
    endTimeMinutes -= 60;
    endTimeHours += 1; // 24 hour time
  }

  let timeString = `${endTimeHours}`;
  if (endTimeHours < 10) timeString = '0' + timeString;
  if (endTimeMinutes < 10) timeString += '0';
  timeString += `${endTimeMinutes}`;
  return timeString;
}

/***/ }),

/***/ "./src/SocketListenerDelegate.ts":
/*!***************************************!*\
  !*** ./src/SocketListenerDelegate.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocketListenerDelegate)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");




const slLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('socket-listener');
class SocketListenerDelegate {
  constructor() {}

  handleDataChangedByAnotherUser(message) {
    slLogger(`Handling data change ${message.type} on object type ${message.stateName} made by user ${message.user}`);
    let stateObj = message.data;
    slLogger(stateObj); // are we the same user that made the changes?

    if (message.user === ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().getLoggedInUsername()) {
      slLogger(`changes made by the current user, no need to do anything`);
    } // ok lets work out where this change belongs


    try {
      switch (message.type) {
        case ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.DataChangeType.create:
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, stateObj, true);
                  ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.NotificationManager.getInstance().show(stateObj.username, `${stateObj.username} has just registered.`, ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.NotificationType.info);
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

        case ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.DataChangeType.update:
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

        case ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.DataChangeType["delete"]:
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

/***/ "./src/appointment-templates/AppointmentTemplateController.ts":
/*!********************************************************************!*\
  !*** ./src/appointment-templates/AppointmentTemplateController.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTemplateController": () => (/* binding */ AppointmentTemplateController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppointmentTemplateView */ "./src/appointment-templates/AppointmentTemplateView.ts");
/* harmony import */ var _AppointmentTemplateFilterView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppointmentTemplateFilterView */ "./src/appointment-templates/AppointmentTemplateFilterView.ts");
/* harmony import */ var _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppointmentTemplateDetailModal */ "./src/appointment-templates/AppointmentTemplateDetailModal.ts");
/* harmony import */ var _DurationFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DurationFunctions */ "./src/DurationFunctions.ts");









const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-template-controller');
class AppointmentTemplateController {
  dataElements = {
    appointmentTypes: null,
    clinicConfig: null,
    providers: null,
    oldEvent: null,
    tempEvent: {},
    currentFirstDate: 0,
    currentLastDate: 0,
    currentFirstDateDayNumber: 1
  };

  constructor() {
    this.onPageLoading = this.onPageLoading.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates, this);
  }

  static getInstance() {
    if (!AppointmentTemplateController._instance) {
      AppointmentTemplateController._instance = new AppointmentTemplateController();
    }

    return AppointmentTemplateController._instance;
  }

  getModel() {
    return this.dataElements;
  }

  onDocumentLoaded() {
    _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().onDocumentLoaded();
    _AppointmentTemplateFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateFilterView.getInstance().onDocumentLoaded();
  }

  getIconForAppointmentType(appointmentType) {
    logger(`Getting icon for appoint type ${appointmentType}`);
    let result = ``;

    if (this.dataElements.appointmentTypes) {
      let foundIndex = this.dataElements.appointmentTypes.findIndex(type => type.name === appointmentType);

      if (foundIndex >= 0) {
        if (this.dataElements.appointmentTypes[foundIndex].icon) {
          result = `<i class="md-custom-event-icon ${this.dataElements.appointmentTypes[foundIndex].icon}"></i>`;
        }
      }
    }

    return result;
  }

  getIconsForEventTemplate(event) {
    return this.getIconForAppointmentType(event.type);
  }

  getColourForAppointmentType(appointmentType) {
    let result = `rgba(10, 100, 100, 50)`;

    if (this.dataElements.appointmentTypes) {
      let foundIndex = this.dataElements.appointmentTypes.findIndex(type => type.name === appointmentType);
      if (foundIndex >= 0) result = this.dataElements.appointmentTypes[foundIndex].colour;
    }

    return result;
  }

  getColourForAppointmentTemplate(appointment) {
    return this.getColourForAppointmentType(appointment.type);
  }

  getEventForAppointmentTemplateForDate(startDate, dayNumber, template) {
    logger(`Creating event for appointment template on date ${startDate} with ${dayNumber}`);
    logger(template);
    if (template.day < dayNumber) return null;
    const loadDate = startDate + (template.day - dayNumber);
    const timeString = (0,_DurationFunctions__WEBPACK_IMPORTED_MODULE_8__.computeTimeStringFromStartTimeAndDurationInSeconds)(template.time, template.duration);
    let result = {
      id: template._id,
      start: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${startDate}${template.time}`, 'YYYYMMDDHHmmss'),
      end: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${startDate}${timeString}`, 'YYYYMMDDHHmm'),
      color: this.getColourForAppointmentTemplate(template),
      allDay: false,
      editable: true,
      resource: template.provider,
      createdBy: template.createdBy,
      created: template.created,
      modified: template.modified,
      type: template.type,
      provider: template.provider
    };
    logger('Converted to event');
    logger(result);
    return result;
  }

  getEventForAppointmentTemplate(template) {
    logger(`Creating event for appointment template with first day number of ${this.dataElements.currentFirstDateDayNumber}`);
    logger(template);
    if (template.day < this.dataElements.currentFirstDateDayNumber) return null;
    const loadDate = this.dataElements.currentFirstDate + (template.day - this.dataElements.currentFirstDateDayNumber);
    let result = this.getEventForAppointmentTemplateForDate(loadDate, template.day, template);
    logger('Converted to template event');
    logger(result);
    return result;
  }

  onPageLoading(event, inst) {
    // load the events for the view
    logger(event);
    this.dataElements.currentFirstDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('YYYYMMDD'));
    this.dataElements.currentFirstDateDayNumber = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('d'));
    this.dataElements.currentLastDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.lastDay).format('YYYYMMDD')) - 1;
    logger(`Need to load date range (${this.dataElements.currentFirstDate},${this.dataElements.currentLastDate}) starting with day ${this.dataElements.currentFirstDateDayNumber}`);
    const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates);
    let results = [];
    appointments.forEach(appointment => {
      let result = this.getEventForAppointmentTemplate(appointment);
      if (result) results.push(result);
    });
    inst.setEvents(results);
  }

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "Appointment Template Manager";
  }

  stateChanged(managerName, name, newValue) {
    logger(`Handling state changed ${name}`);

    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig:
        {
          this.dataElements.clinicConfig = newValue[0];
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().applyClinicConfig(this.dataElements.clinicConfig);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
        {
          this.dataElements.appointmentTypes = newValue;
          _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentTemplateDetailModal.getInstance().setupAppointmentTypeDropDown(newValue);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers:
        {
          this.dataElements.providers = newValue;
          _AppointmentTemplateFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateFilterView.getInstance().populateProviders(newValue);
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().setupProviders(newValue);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates:
        {
          const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates);
          let results = [];
          appointments.forEach(appointment => {
            let result = this.getEventForAppointmentTemplate(appointment);
            if (result) results.push(result);
          });
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().setEvents(results);
          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('New Appointment Template inserted by another user');
      logger(appointment);
      let result = this.getEventForAppointmentTemplate(appointment);
      if (result) _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(result);
    }
  }

  stateChangedItemRemoved(managerName, name, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates) {
      logger('Appointment Template deleted by another user');
      logger(appointment);
      _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent([appointment._id]);
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment updated by another user');
      logger(appointment);
      let result = this.getEventForAppointmentTemplate(appointment);
      if (result) _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().updateEvent(result);
    }
  }

  getAppointmentTemplateFromEvent(event) {
    let day = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start).format('d'));
    let time = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start).format('HHmmss');
    let duration = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.end).diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start), 'seconds');
    let appointment = {
      _id: event.id,
      day: day,
      time: time,
      duration: duration,
      createdBy: event.createdBy,
      created: event.created,
      modified: event.modified,
      type: event.type,
      provider: event.resource
    };
    return appointment;
  }

}

/***/ }),

/***/ "./src/appointment-templates/AppointmentTemplateDetailModal.ts":
/*!*********************************************************************!*\
  !*** ./src/appointment-templates/AppointmentTemplateDetailModal.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTemplateDetailModal": () => (/* binding */ AppointmentTemplateDetailModal)
/* harmony export */ });
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppointmentTemplateView */ "./src/appointment-templates/AppointmentTemplateView.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);









const logger = debug__WEBPACK_IMPORTED_MODULE_7___default()('appointment-template-detail-view');
class AppointmentTemplateDetailModal {
  static datePickerResponsive = {
    medium: {
      controls: ['calendar'],
      touchUi: false
    }
  };
  static datetimePickerResponsive = {
    medium: {
      controls: ['calendar', 'time'],
      touchUi: false
    }
  };
  viewElements = {
    popup: null,
    range: null,
    deleteButton: null,
    appointmentTypeEl: null,
    appointmentTypeDropdown: null,
    providersDropdown: null
  };

  constructor() {
    this.patients = [];
  }

  static getInstance() {
    if (!AppointmentTemplateDetailModal._instance) {
      AppointmentTemplateDetailModal._instance = new AppointmentTemplateDetailModal();
    }

    return AppointmentTemplateDetailModal._instance;
  }

  close() {
    this.viewElements.popup.close();
  }

  isVisible() {
    return this.viewElements.popup.isVisible();
  }

  applyClinicConfig(clinicConfig) {
    this.viewElements.range.setOptions({
      stepMinute: clinicConfig.dragTimeStep
    });
  }

  onDocumentLoaded() {
    this.viewElements.deleteButton = document.getElementById('event-delete-template');
    this.viewElements.appointmentTypeEl = document.getElementById('event-appt-type-template'); // @ts-ignore

    this.viewElements.popup = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.popup)('#add-appointment-template-popup', {
      display: 'bottom',
      contentPadding: true,
      fullScreen: true,
      responsive: {
        medium: {
          display: 'anchored',
          width: 400,
          fullScreen: false,
          touchUi: false
        }
      }
    });
    this.viewElements.range = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.datepicker)('#event-date-template', {
      controls: ['date'],
      select: 'range',
      startInput: '#start-input-template',
      endInput: '#end-input-template',
      showRangeLabels: false,
      touchUi: true,
      stepMinute: 15,
      maxTime: '17:00',
      responsive: AppointmentTemplateDetailModal.datePickerResponsive,
      onChange: function (args) {
        let date = args.value; // update event's start date

        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.start = date[0];
        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.end = date[1];
      }
    });
    this.setupActionButtons();
    logger('Completed setup of detail modal for appointment templates');
  }

  setupAppointmentTypeDropDown(appointmentTypes) {
    let types = [];
    appointmentTypes.forEach(type => {
      if (!type.isStatus) types.push(type.name);
    }); // add the patient search values to the data of the select dropdown

    this.viewElements.appointmentTypeDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#event-appt-type-template', {
      data: types,
      onChange: (event, inst) => {
        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.type = event.valueText;
      }
    });
  }

  setupProviderDropdown(providers) {
    // add the patient search values to the data of the select dropdown
    this.viewElements.providersDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#event-provider-template', {
      data: providers,
      onChange: (event, inst) => {
        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.provider = event.valueText;
        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.resource = event.value;
      }
    });
  }

  startCreateAppointmentTemplate(elm) {
    // hide delete button inside add popup
    this.viewElements.deleteButton.style.display = 'none';
    this.viewElements.appointmentTypeEl.style.display = 'block'; // set popup header text and buttons for adding

    this.viewElements.popup.setOptions({
      headerText: 'New event',
      buttons: [{
        text: 'Cancel',
        keyCode: 'esc',
        handler: function () {
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent);
        }
      }, {
        text: 'Add',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal(); // store the event created by the UI

          let mobiId = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.id; // generate a new UUID

          let appointmentId = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(); // get the colour for the event type

          let colour = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getColourForAppointmentType('Consulting');
          let createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss'));
          let updatedEvent = {
            id: appointmentId,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            color: colour,
            editable: true,
            resource: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.resource,
            createdBy: ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().getLoggedInUsername(),
            created: createdOn,
            modified: createdOn,
            type: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.type,
            provider: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.provider
          };
          logger('inserting');
          logger(updatedEvent); // remove the original event

          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent([mobiId]);
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(updatedEvent), false); // navigate the calendar to the correct view

          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().navigate(updatedEvent.start);
          AppointmentTemplateDetailModal.getInstance().close();
        },
        cssClass: 'mbsc-popup-button-primary'
      }]
    }); // fill popup with a new event data

    this.viewElements.range.setVal([_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.start, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.end]);
    this.viewElements.range.setOptions({
      controls: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.allDay ? ['date'] : ['datetime'],
      responsive: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.allDay ? AppointmentTemplateDetailModal.datePickerResponsive : AppointmentTemplateDetailModal.datetimePickerResponsive
    });
    this.viewElements.appointmentTypeDropdown.setVal('');
    this.viewElements.providersDropdown.setVal(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.resource); // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: elm
    });
    this.viewElements.popup.open();
  }

  updateAppointmentTemplate(args) {
    let ev = args.event; // show delete button inside edit popup

    this.viewElements.deleteButton.style.display = 'block';
    this.viewElements.appointmentTypeEl.style.display = 'none'; // set popup header text and buttons for editing

    this.viewElements.popup.setOptions({
      headerText: 'Edit event',
      buttons: [{
        text: 'Cancel',
        keyCode: 'esc',
        handler: function () {
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().updateEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().oldEvent);
        }
      }, {
        text: 'Save',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal(); // update event with the new properties on save button click

          let createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss')); //

          let updatedEvent = {
            id: ev.id,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            editable: true,
            resource: ev.resource,
            createdBy: ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().getLoggedInUsername(),
            created: ev.created,
            modified: createdOn,
            type: ev.type,
            provider: ev.provider
          }; // @ts-ignore

          updatedEvent.color = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getColourForAppointmentTemplate(updatedEvent);
          logger('updated');
          logger(updatedEvent);
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().updateEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(updatedEvent), false); // navigate the calendar to the correct view

          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().navigate(date[0]);
          AppointmentTemplateDetailModal.getInstance().close();
        },
        cssClass: 'mbsc-popup-button-primary'
      }]
    }); // fill popup with the selected event data

    this.viewElements.range.setVal([ev.start, ev.end]); // change range settings based on the allDay

    this.viewElements.range.setOptions({
      controls: ev.allDay ? ['date'] : ['datetime'],
      responsive: ev.allDay ? AppointmentTemplateDetailModal.datePickerResponsive : AppointmentTemplateDetailModal.datetimePickerResponsive
    }); // set the appointment type and patient

    this.viewElements.appointmentTypeDropdown.setVal(ev.type);
    this.viewElements.providersDropdown.setVal(ev.resource); // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: args.domEvent.currentTarget
    });
    this.viewElements.popup.open();
  }

  setupActionButtons() {
    this.viewElements.deleteButton.addEventListener('click', function () {
      // delete current event on button click
      //
      _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent), false);
      AppointmentTemplateDetailModal.getInstance().close(); // save a local reference to the deleted event

      let deletedEvent = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent; //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            //
            _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(deletedEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(deletedEvent), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    });
  }

}

/***/ }),

/***/ "./src/appointment-templates/AppointmentTemplateFilterView.ts":
/*!********************************************************************!*\
  !*** ./src/appointment-templates/AppointmentTemplateFilterView.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTemplateFilterView": () => (/* binding */ AppointmentTemplateFilterView)
/* harmony export */ });
/* harmony import */ var _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentTemplateView */ "./src/appointment-templates/AppointmentTemplateView.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");


class AppointmentTemplateFilterView {
  static getInstance() {
    if (!AppointmentTemplateFilterView._instance) {
      AppointmentTemplateFilterView._instance = new AppointmentTemplateFilterView();
    }

    return AppointmentTemplateFilterView._instance;
  }

  onDocumentLoaded() {
    this.providersEl = document.getElementById('providerFilter');
    (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.registerComponent)(_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.Checkbox);
    (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.registerComponent)(_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.Input);
  }

  populateProviders(providers) {
    if (providers && this.providersEl) {
      providers.forEach(provider => {
        let labelEl = document.createElement('label');
        let inputEl = document.createElement('input');
        inputEl.setAttribute('type', 'checkbox');
        inputEl.setAttribute('value', provider.name);
        inputEl.setAttribute("checked", '');
        inputEl.setAttribute("mbsc-checkbox", '');
        inputEl.setAttribute('data-label', provider.name);
        inputEl.classList.add('template-provider-checkbox');
        labelEl.appendChild(inputEl);
        this.providersEl.appendChild(labelEl);
      });
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.enhance)(this.providersEl);
      document.querySelectorAll('.template-provider-checkbox').forEach(function (elm) {
        elm.addEventListener('change', function () {
          let checkboxList = document.querySelectorAll('.template-provider-checkbox');
          let selected = [];

          for (let i = 0; i < checkboxList.length; i++) {
            let checkbox = checkboxList[i]; // @ts-ignore

            if (checkbox.checked) {
              // @ts-ignore
              selected.push({
                id: checkbox.value,
                name: checkbox.value
              });
            }
          }

          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateView.getInstance().getCalender().setOptions({
            resources: selected
          });
        });
      });
    }
  }

}

/***/ }),

/***/ "./src/appointment-templates/AppointmentTemplateView.ts":
/*!**************************************************************!*\
  !*** ./src/appointment-templates/AppointmentTemplateView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTemplateView": () => (/* binding */ AppointmentTemplateView)
/* harmony export */ });
/* harmony import */ var _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppointmentTemplateDetailModal */ "./src/appointment-templates/AppointmentTemplateDetailModal.ts");







const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('appointment-template-view');
class AppointmentTemplateView {
  viewElements = {
    calendar: null
  };

  constructor() {
    this.handleAppointmentTemplateRendering = this.handleAppointmentTemplateRendering.bind(this);
  }

  static getInstance() {
    if (!AppointmentTemplateView._instance) {
      AppointmentTemplateView._instance = new AppointmentTemplateView();
    }

    return AppointmentTemplateView._instance;
  }

  getCalender() {
    return this.viewElements.calendar;
  }

  handleAppointmentTemplateRendering(data) {
    logger(`Rendering event`);
    logger(data);
    const icons = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getIconsForEventTemplate(data.original);
    logger(`Applicable icons`);
    logger(icons);
    let buffer = '' + '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' + '  <div class="md-custom-event-wrapper">' + '    <div class="container-fluid">' + '    <div class="row ">' + `      <div style="background:${data.color}" class="col-12 md-custom-event-template-type">${data.original.type}</div>` + '      <div class="col-12 d-flex w-100 justify-content-between md-custom-event-time">' + `        <span>${data.start} - ${data.end}</span>`;

    if (icons.trim().length > 0) {
      buffer += '' + `        <span class="md-custom-event-img-cont">${icons}</span>` + '      </div>' + '  </div>' + '</div>';
    } else {
      buffer += '' + '  </div>' + '</div>';
    }

    return buffer;
  }

  onDocumentLoaded() {
    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().onDocumentLoaded();
    let options;

    if (_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig) {
      logger('Using clinic config options');
      options = {
        clickToCreate: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.clickToCreate,
        dragTimeStep: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.dragTimeStep,
        dragToCreate: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToCreate,
        dragToMove: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToMove,
        dragToResize: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToResize,
        min: moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.min, "months"),
        controls: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.controls,
        showControls: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.showControls,
        view: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.view,
        invalidateEvent: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.invalidateEvent,
        invalid: _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().clinicConfig.invalid
      };
      options.view.schedule.type = 'week';
    } else {
      logger('Using DEFAULT config options');
      options = {
        clickToCreate: 'double',
        dragTimeStep: 5,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        min: moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(3, "months"),
        controls: ['calendar'],
        showControls: true,
        view: {
          schedule: {
            type: 'week',
            startDay: 1,
            endDay: 5,
            startTime: '09:00',
            endTime: '17:00',
            timeCellStep: 15,
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
          start: '12:00',
          end: '13:00',
          title: 'Lunch Break',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR'
          }
        }]
      };
    }

    options.onPageLoading = (event, inst) => {
      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().onPageLoading(event, inst);
    };

    options.onEventCreated = (event, inst) => {
      _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().close(); // store temporary event

      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().tempEvent = event.event;
      logger('Creating event');
      logger(event);
      _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().startCreateAppointmentTemplate(event.target);
    };

    options.onEventDeleted = (event, inst) => {
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            // @ts-ignore
            AppointmentTemplateView.getInstance().viewElements.calendar.addEvent(event.event);
            _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(event.event), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    };

    options.onEventClick = args => {
      logger(args.event);
      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().oldEvent = Object.assign({}, args.event);
      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().tempEvent = args.event;

      if (!_AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().isVisible()) {
        logger(args);
        _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().updateAppointmentTemplate(args);
      }
    };

    options.renderScheduleEvent = this.handleAppointmentTemplateRendering;

    options.onEventUpdated = args => {
      // user has dragged event - update the appointment
      _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTemplates, _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(args.event), false);
    };

    if (_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().providers) {
      let providers = [];
      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().providers.forEach(provider => {
        if (provider.isCurrent) providers.push({
          text: provider.name,
          value: provider.name,
          id: provider.name,
          name: provider.name
        });
      });
      if (this.viewElements.calendar) this.viewElements.calendar.setOptions({
        resources: providers,
        groupBy: 'date'
      });
    } // @ts-ignore


    this.viewElements.calendar = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.eventcalendar)(document.getElementById('templateDetail'), options);
  }

  applyClinicConfig(clinicConfig) {
    if (this.viewElements.calendar) {
      logger('State changed, using clinic config options');
      const config = JSON.parse(JSON.stringify(clinicConfig));
      config.view.schedule.type = 'week';
      this.viewElements.calendar.setOptions({
        clickToCreate: config.clickToCreate,
        dragTimeStep: config.dragTimeStep,
        dragToCreate: config.dragToCreate,
        dragToMove: config.dragToMove,
        dragToResize: config.dragToResize,
        showControls: config.showControls,
        view: config.view,
        invalidateEvent: config.invalidateEvent,
        invalid: config.invalid
      });
    }

    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().applyClinicConfig(clinicConfig);
  }

  setupProviders(providersCollection) {
    let providers = [];
    providersCollection.forEach(provider => {
      if (provider.isCurrent) providers.push({
        text: provider.name,
        value: provider.name,
        id: provider.name,
        name: provider.name
      });
    });
    if (this.viewElements.calendar) this.viewElements.calendar.setOptions({
      resources: providers,
      groupBy: 'date'
    });
    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateDetailModal.getInstance().setupProviderDropdown(providers);
  }

}

/***/ }),

/***/ "./src/appointment-types/AppointmentTypesCollectionView.ts":
/*!*****************************************************************!*\
  !*** ./src/appointment-types/AppointmentTypesCollectionView.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTypesCollectionView": () => (/* binding */ AppointmentTypesCollectionView)
/* harmony export */ });
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");



const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('appointment-types-view');
class AppointmentTypesCollectionView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.AppointmentTypesSidebarContainers.list,
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.VIEW_NAME.appointmentTypes
    },
    resultsElement: {
      type: 'tr',
      attributes: [{
        name: 'href',
        value: '#'
      }],
      classes: ''
    },
    keyId: '_id',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.KeyType.string,
    modifiers: {
      normal: '',
      inactive: 'table-secondary',
      active: 'table-success',
      warning: 'table-danger'
    },
    icons: {
      normal: '',
      inactive: '',
      active: '',
      warning: ''
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElement: {
        type: 'span',
        classes: 'mb-1'
      },
      select: true,
      icons: (name, item) => {
        if (item.icon) {
          return [item.icon];
        }

        return [];
      }
    },
    sorter: AppointmentTypesCollectionView.sortAppointmentTypes
  };

  constructor(stateManager) {
    super(AppointmentTypesCollectionView.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTypes);
    let apptTypeDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTypes);

    if (apptTypeDef) {
      let displayOrders = [];
      displayOrders.push({
        fieldId: 'name',
        displayOrder: 1
      });
      displayOrders.push({
        fieldId: 'colour',
        displayOrder: 2
      });
      displayOrders.push({
        fieldId: 'icon',
        displayOrder: 3
      }); //displayOrders.push({ fieldId:'isStatus',displayOrder:4});

      let tableUIConfig = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BootstrapTableConfigHelper.getInstance().generateTableRowConfig(apptTypeDef, displayOrders, 1, false, true); // tableUIConfig.headerColumns[0].element.classes += ' text-center';

      tableUIConfig.headerColumns[1].element.classes += ' text-center';
      tableUIConfig.headerColumns[2].element.classes += ' text-center';
      this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.TabularViewRendererUsingContext(this, this, tableUIConfig); //this.renderer = new ListViewRendererUsingContext(this,this);

      this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
      this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
      this.getItemId = this.getItemId.bind(this);
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTypes, 'Appointment Types');
    }
  }

  static sortAppointmentTypes(item1, item2) {
    let result = -1;
    if (item1.name > item2.name) result = 1;
    return result;
  }

  getItemDescription(from, item) {
    let buffer = '';
    buffer += `<strong style="text-colour:${item.colour}">` + item.name + '</strong> ';
    buffer += '<br/>';
    return buffer;
  }

  canDeleteItem(view, selectedItem) {
    logger(`Can Delete ${selectedItem}`);
    return false;
  }

  compareItemsForEquality(item1, item2) {
    return (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.isSameMongo)(item1, item2);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.name;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    logger(`Has delete permission ${item}`);
    return false;
  }

  getModifierForItemInNamedCollection(name, item) {
    if (item.isStatus) {
      return ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.Modifier.inactive;
    }

    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.Modifier.normal;
  }

}

/***/ }),

/***/ "./src/appointment-types/AppointmentTypesCompositeView.ts":
/*!****************************************************************!*\
  !*** ./src/appointment-types/AppointmentTypesCompositeView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptTypePermissionChecker": () => (/* binding */ ApptTypePermissionChecker),
/* harmony export */   "AppointmentTypesCompositeView": () => (/* binding */ AppointmentTypesCompositeView)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _AppointmentTypesCollectionView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppointmentTypesCollectionView */ "./src/appointment-types/AppointmentTypesCollectionView.ts");
/* harmony import */ var ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper */ "./node_modules/ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper.js");






const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('exercise-types-composite-view');
class ApptTypePermissionChecker {
  hasPermissionToUpdateItem(item) {
    return true;
  }

  hasPermissionToDeleteItem(item) {
    return false;
  }

  hasPermissionToEditField(dataObj, field) {
    let result = true;

    if (dataObj.isStatus) {
      if (field.getFieldDefinition().id === 'name') {
        result = false; // cannot edit the names of the default status items
      }
    }

    return result;
  }

}
class AppointmentTypesCompositeView {
  constructor(sideBar) {
    this.sideBar = sideBar;
  }

  onDocumentLoaded() {
    const apptTypes = new _AppointmentTypesCollectionView__WEBPACK_IMPORTED_MODULE_4__.AppointmentTypesCollectionView(_Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager());
    this.sideBar.addView(apptTypes, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypesSidebarContainers.list
    });
    const apptTypeDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes);

    if (apptTypeDefinition) {
      let apptTypeDetailRenderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypesSidebarContainers.detail, apptTypeDefinition, new ApptTypePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), false);
      let apptTypeDetailView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypesSidebarContainers.detail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_NAME.appointmentTypeDetail
      }, apptTypeDetailRenderer);
      let viewLinker = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes, apptTypes);
      viewLinker.addLinkedDetailView(apptTypeDetailView);
      this.sideBar.onDocumentLoaded();
      let startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(apptTypeDefinition);
      apptTypeDetailView.initialise(startingDisplayOrder, false, true); // setup the event handling for the create new exercise type button

      let createApptType = document.getElementById('addNewAppointmentType');
      logger(`Setting up button for creating appointment types`);
      logger(createApptType);

      if (createApptType) {
        createApptType.addEventListener('click', event => {
          logger(`Asking view linker to start a new object`);
          viewLinker.startNewObject();
        });
      }

      viewLinker.addListener(this);
    }
  }

  create(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes:
        {
          logger(`Handling create new appointment type`);
          logger(dataObj);
          _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addNewItemToState(typeName, dataObj, false);
          break;
        }
    }
  }

  delete(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes:
        {
          logger(`Handling delete appointment type - already managed by stateful collection view`);
          logger(dataObj);
          break;
        }
    }
  }

  update(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes:
        {
          logger(`Handling update appointment type`);
          logger(dataObj);
          _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().updateItemInState(typeName, dataObj, false);
          break;
        }
    }
  }

}

/***/ }),

/***/ "./src/appointment-types/AppointmentTypesSidebar.ts":
/*!**********************************************************!*\
  !*** ./src/appointment-types/AppointmentTypesSidebar.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTypesSidebar": () => (/* binding */ AppointmentTypesSidebar)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");


class AppointmentTypesSidebar extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer {
  constructor() {
    super(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypesSidebarPrefs);
  }

  static getInstance() {
    if (!AppointmentTypesSidebar._instance) {
      AppointmentTypesSidebar._instance = new AppointmentTypesSidebar();
    }

    return AppointmentTypesSidebar._instance;
  }

}

/***/ }),

/***/ "./src/appointments/AppointmentBookView.ts":
/*!*************************************************!*\
  !*** ./src/appointments/AppointmentBookView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentBookView": () => (/* binding */ AppointmentBookView)
/* harmony export */ });
/* harmony import */ var _AppointmentController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentController */ "./src/appointments/AppointmentController.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppointmentDetailModal */ "./src/appointments/AppointmentDetailModal.ts");







const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('appointment-view');
class AppointmentBookView {
  viewElements = {
    datePicker: null,
    calendar: null
  };

  constructor() {
    this.handleAppointmentRendering = this.handleAppointmentRendering.bind(this);
  }

  static getInstance() {
    if (!AppointmentBookView._instance) {
      AppointmentBookView._instance = new AppointmentBookView();
    }

    return AppointmentBookView._instance;
  }

  getCalender() {
    return this.viewElements.calendar;
  }

  handleAppointmentRendering(data) {
    logger(`Rendering event`);
    logger(data);
    const icons = _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getIconsForEvent(data.original);
    logger(`Applicable icons`);
    logger(icons);
    let buffer = '' + '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' + '  <div class="md-custom-event-wrapper">' + '    <div class="container-fluid">' + '    <div class="row ">' + `      <div style="background:${data.color}" class="col-sm-12 col-md-2 md-custom-event-type">${data.original.type}</div>` + `      <div class="col-sm-4 col-md-6 md-custom-event-title">${data.title}</div>` + '      <div class="col-sm-6 col-md-4 d-flex w-100 justify-content-between md-custom-event-time">' + `        <span>${data.start} - ${data.end}</span>`;

    if (icons.trim().length > 0) {
      buffer += '' + `        <span class="md-custom-event-img-cont">${icons}</span>` + '      </div>' + '  </div>' + '</div>';
    } else {
      buffer += '' + '  </div>' + '</div>';
    }

    return buffer;
  }

  onDocumentLoaded() {
    this.setupDatePicker();
    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().onDocumentLoaded();
    let options;

    if (_AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig) {
      logger('Using clinic config options');
      options = {
        clickToCreate: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.clickToCreate,
        dragTimeStep: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.dragTimeStep,
        dragToCreate: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.dragToCreate,
        dragToMove: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.dragToMove,
        dragToResize: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.dragToResize,
        min: moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(_AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.min, "months"),
        controls: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.controls,
        showControls: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.showControls,
        view: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.view,
        invalidateEvent: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.invalidateEvent,
        invalid: _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().clinicConfig.invalid
      };
    } else {
      logger('Using DEFAULT config options');
      options = {
        clickToCreate: 'double',
        dragTimeStep: 5,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        min: moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(3, "months"),
        controls: ['calendar'],
        showControls: true,
        view: {
          schedule: {
            type: 'day',
            startDay: 1,
            endDay: 5,
            startTime: '09:00',
            endTime: '17:00',
            timeCellStep: 15,
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
          start: '12:00',
          end: '13:00',
          title: 'Lunch Break',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR'
          }
        }]
      };
    }

    options.onSelectedDateChange = (event, inst) => {
      var _AppointmentBookView$;

      (_AppointmentBookView$ = AppointmentBookView.getInstance().viewElements.datePicker) === null || _AppointmentBookView$ === void 0 ? void 0 : _AppointmentBookView$.setVal(event.date);
    };

    options.onPageLoading = (event, inst) => {
      _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().onPageLoading(event, inst);
    };

    options.onEventCreated = (event, inst) => {
      _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().close(); // store temporary event

      _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().tempEvent = event.event;
      logger('Creating event');
      logger(event);
      _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().startCreateAppointment(event.target);
    };

    options.onEventDeleted = (event, inst) => {
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            // @ts-ignore
            AppointmentBookView.getInstance().viewElements.calendar.addEvent(event.event);
            _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getAppointmentFromEvent(event.event), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    };

    options.onEventClick = args => {
      logger(args.event);

      if (args.event.editable) {
        _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().oldEvent = Object.assign({}, args.event);
        _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().tempEvent = args.event;

        if (!_AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().isVisible()) {
          logger(args);
          _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().updateAppointment(args);
        }
      }
    };

    options.renderScheduleEvent = this.handleAppointmentRendering;

    options.onEventUpdated = args => {
      // user has dragged event - update the appointment
      _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getAppointmentFromEvent(args.event), false);
    };

    if (_AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().providers) {
      let providers = [];
      _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().providers.forEach(provider => {
        if (provider.isCurrent) providers.push({
          text: provider.name,
          value: provider.name,
          id: provider.name,
          name: provider.name
        });
      });
      if (this.viewElements.calendar) this.viewElements.calendar.setOptions({
        resources: providers,
        groupBy: 'date'
      });
    } // @ts-ignore


    this.viewElements.calendar = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.eventcalendar)(document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_CONTAINER.calendarDetail), options);
  }

  applyClinicConfig(clinicConfig) {
    if (this.viewElements.calendar) {
      logger('State changed, using clinic config options');
      this.viewElements.calendar.setOptions({
        clickToCreate: clinicConfig.clickToCreate,
        dragTimeStep: clinicConfig.dragTimeStep,
        dragToCreate: clinicConfig.dragToCreate,
        dragToMove: clinicConfig.dragToMove,
        dragToResize: clinicConfig.dragToResize,
        min: moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(clinicConfig.min, "months"),
        showControls: clinicConfig.showControls,
        view: clinicConfig.view,
        invalidateEvent: clinicConfig.invalidateEvent,
        invalid: clinicConfig.invalid
      });
    }

    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().applyClinicConfig(clinicConfig);
  }

  setupProviders(providersCollection) {
    let providers = [];
    providersCollection.forEach(provider => {
      if (provider.isCurrent) providers.push({
        text: provider.name,
        value: provider.name,
        id: provider.name,
        name: provider.name
      });
    });
    if (this.viewElements.calendar) this.viewElements.calendar.setOptions({
      resources: providers,
      groupBy: 'date'
    });
    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().setupProviderDropdown(providers);
  }

  setupDatePicker() {
    // @ts-ignore
    this.viewElements.datePicker = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.datepicker)(document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_CONTAINER.calendarControl), {
      controls: ['calendar'],
      display: "inline",
      dateFormat: 'YYYYMMDD',
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      showWeekNumbers: true,
      onChange: (event, inst) => {
        var _AppointmentBookView$2;

        (_AppointmentBookView$2 = AppointmentBookView.getInstance().viewElements.calendar) === null || _AppointmentBookView$2 === void 0 ? void 0 : _AppointmentBookView$2.navigate(event.value);
      }
    });
  }

}

/***/ }),

/***/ "./src/appointments/AppointmentController.ts":
/*!***************************************************!*\
  !*** ./src/appointments/AppointmentController.ts ***!
  \***************************************************/
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
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppointmentBookView */ "./src/appointments/AppointmentBookView.ts");
/* harmony import */ var _AppointmentFilterView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppointmentFilterView */ "./src/appointments/AppointmentFilterView.ts");
/* harmony import */ var _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppointmentDetailModal */ "./src/appointments/AppointmentDetailModal.ts");
/* harmony import */ var _appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../appointment-templates/AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DurationFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DurationFunctions */ "./src/DurationFunctions.ts");











const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-controller');
class AppointmentController {
  static APPOINTMENT_STATUS_ARRIVED = 'Patient Arrived';
  static APPOINTMENT_STATUS_READY_FOR_BILLING = 'Ready For Billing';
  static APPOINTMENT_STATUS_BILLING_COMPLETE = 'Billing Complete';
  static APPOINTMENT_TYPE_PATIENT_CANCELLED = 'Patient Cancelled';
  static APPOINTMENT_TYPE_PATIENT_DNA = 'Did Not Arrive';
  dataElements = {
    appointmentTypes: null,
    clinicConfig: null,
    providers: null,
    oldEvent: null,
    tempEvent: {},
    loadDate: 0,
    loadDateFinish: 0
  };

  constructor() {
    this.onPageLoading = this.onPageLoading.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, this);
  }

  static getInstance() {
    if (!AppointmentController._instance) {
      AppointmentController._instance = new AppointmentController();
    }

    return AppointmentController._instance;
  }

  getModel() {
    return this.dataElements;
  }

  onDocumentLoaded() {
    _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().onDocumentLoaded();
    _AppointmentFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentFilterView.getInstance().onDocumentLoaded();
  }

  getIconForAppointmentType(appointmentType) {
    logger(`Getting icon for appoint type ${appointmentType}`);
    let result = ``;

    if (this.dataElements.appointmentTypes) {
      let foundIndex = this.dataElements.appointmentTypes.findIndex(type => type.name === appointmentType);

      if (foundIndex >= 0) {
        if (this.dataElements.appointmentTypes[foundIndex].icon) {
          result = `<i class="md-custom-event-icon ${this.dataElements.appointmentTypes[foundIndex].icon}"></i>`;
        }
      }
    }

    return result;
  }

  getIconsForEvent(event) {
    let buffer = '';

    if (event.arrivalTime) {
      if (event.arrivalTime.trim().length > 0) {
        buffer += this.getIconForAppointmentType(AppointmentController.APPOINTMENT_STATUS_ARRIVED);
      }
    }

    if (event.readyForBilling) {
      buffer += this.getIconForAppointmentType(AppointmentController.APPOINTMENT_STATUS_READY_FOR_BILLING);
    }

    if (event.isBilled) {
      buffer += this.getIconForAppointmentType(AppointmentController.APPOINTMENT_STATUS_BILLING_COMPLETE);
    }

    buffer += this.getIconForAppointmentType(event.type);
    return buffer;
  }

  getColourForAppointmentType(appointmentType) {
    let result = `rgba(10, 100, 100, 50)`;

    if (this.dataElements.appointmentTypes) {
      let foundIndex = this.dataElements.appointmentTypes.findIndex(type => type.name === appointmentType);
      if (foundIndex >= 0) result = this.dataElements.appointmentTypes[foundIndex].colour;
    }

    return result;
  }

  getColourForAppointment(appointment) {
    let colour = this.getColourForAppointmentType(appointment.type);

    if (appointment.arrivalTime) {
      if (appointment.arrivalTime.trim().length > 0) {
        colour = this.getColourForAppointmentType(AppointmentController.APPOINTMENT_STATUS_ARRIVED);
      }
    }

    if (appointment.readyForBilling || appointment.isBilled || appointment.isCancelled || appointment.isDNA) {
      if (appointment.readyForBilling) {
        colour = this.getColourForAppointmentType(AppointmentController.APPOINTMENT_STATUS_READY_FOR_BILLING);
      }

      if (appointment.isBilled) {
        colour = this.getColourForAppointmentType(AppointmentController.APPOINTMENT_STATUS_BILLING_COMPLETE);
      }

      if (appointment.isCancelled) {
        colour = this.getColourForAppointmentType(AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED);
      }

      if (appointment.isDNA) {
        colour = this.getColourForAppointmentType(AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA);
      }
    }

    return colour;
  }

  getEventForAppointment(loadDate, appointment) {
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
    let canEdit = loadDate >= today && !appointment.isDNA && !appointment.isCancelled && !appointment.isBilled;
    const timeString = (0,_DurationFunctions__WEBPACK_IMPORTED_MODULE_9__.computeTimeStringFromStartTimeAndDurationInSeconds)(appointment.time, appointment.duration);
    let result = {
      id: appointment._id,
      start: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${loadDate}${appointment.time}`, 'YYYYMMDDHHmmss'),
      end: moment__WEBPACK_IMPORTED_MODULE_1___default()(`${loadDate}${timeString}`, 'YYYYMMDDHHmm'),
      title: appointment.name,
      description: appointment.note,
      allDay: false,
      editable: canEdit,
      resource: appointment.provider,
      patientId: appointment._patient,
      isDNA: appointment.isDNA,
      isCancelled: appointment.isCancelled,
      createdBy: appointment.createdBy,
      created: appointment.created,
      modified: appointment.modified,
      arrivalTime: appointment.arrivalTime,
      type: appointment.type,
      provider: appointment.provider,
      readyForBilling: appointment.readyForBilling,
      billingItems: appointment.billingItems,
      isBilled: appointment.isBilled
    }; // @ts-ignore

    result.color = this.getColourForAppointment(appointment);
    return result;
  }

  onPageLoading(event, inst) {
    // load the events for the view
    logger(event);
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
    this.dataElements.loadDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('YYYYMMDD'));
    const loadDateDayNumber = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('d'));
    this.dataElements.loadDateFinish = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.lastDay).format('YYYYMMDD'));
    logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);
    const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
    let results = [];
    let appointmentsForTheDay = [];
    appointments.forEach(appointment => {
      if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
        appointmentsForTheDay.push(appointment);
        let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
        results.push(result);
      }
    });
    inst.setEvents(results); // add template appointments as events where an appointment doesn't already exist in the same time slot, they will need unique _ids

    if (this.dataElements.loadDate >= today) this.addTemplateEvents(this.dataElements.loadDate, loadDateDayNumber, appointmentsForTheDay);
  }

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "Appointment Manager";
  }

  stateChanged(managerName, name, newValue) {
    logger(`Handling state changed ${name}`);

    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig:
        {
          this.dataElements.clinicConfig = newValue[0];
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().applyClinicConfig(this.dataElements.clinicConfig);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch:
        {
          _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentDetailModal.getInstance().setupPatientSearchDropDown(newValue);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
        {
          this.dataElements.appointmentTypes = newValue;
          _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentDetailModal.getInstance().setupAppointmentTypeDropDown(newValue);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers:
        {
          this.dataElements.providers = newValue;
          _AppointmentFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentFilterView.getInstance().populateProviders(newValue);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().setupProviders(newValue);
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
        {
          this.dataElements.loadDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
          this.dataElements.loadDateFinish = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').format('YYYYMMDD'));
          logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);
          const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
          let results = [];
          appointments.forEach(appointment => {
            if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
              logger('Found appointment');
              logger(appointment);
              let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
              logger('Converted to event');
              logger(result);
              results.push(result);
            }
          });
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().setEvents(results);
          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('New Appointment inserted by another user');
      logger(appointment);

      if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
        let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
        logger('Converted to event');
        logger(result);
        _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(result);
      }
    }
  }

  stateChangedItemRemoved(managerName, name, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments) {
      logger('Appointment deleted by another user');
      logger(appointment);
      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent([appointment._id]);
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment updated by another user');
      logger(appointment);

      if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
        let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
        logger('Converted to event');
        logger(result);
        _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(result);
      }
    }
  }

  getAppointmentFromEvent(event) {
    let start = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start).format('YYYYMMDD'));
    let time = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start).format('HHmmss');
    let duration = moment__WEBPACK_IMPORTED_MODULE_1___default()(event.end).diff(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.start), 'seconds');
    let appointment = {
      _id: event.id,
      name: event.title,
      note: event.description,
      start: start,
      time: time,
      duration: duration,
      _patient: event.patientId,
      isDNA: event.isDNA,
      isCancelled: event.isCancelled,
      createdBy: event.createdBy,
      created: event.created,
      modified: event.modified,
      arrivalTime: event.arrivalTime,
      type: event.type,
      provider: event.resource,
      readyForBilling: event.readyForBilling,
      isBilled: event.isBilled,
      billingItems: event.billingItems
    };
    return appointment;
  }

  addTemplateEvents(loadDate, day, currentAppointments) {
    logger('Loading templated events for day ' + day);
    const appointmentTemplates = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates);
    appointmentTemplates.forEach(template => {
      logger(template);

      if (template.day === day) {
        // only template appointments for the day number
        // is there already an appointment on display that matches the template?
        const foundIndex = currentAppointments.findIndex(appt => appt.time === template.time);

        if (foundIndex < 0) {
          logger(`appointment for time ${template.time} not found, creating new appointment`); // don't already have an appointment for that time

          let templatedAppt = _appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_8__.AppointmentTemplateController.getInstance().getEventForAppointmentTemplateForDate(loadDate, day, template);
          templatedAppt.id = (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])();
          templatedAppt.title = '';
          templatedAppt.description = '';
          templatedAppt.patientId = '';
          templatedAppt.isDNA = false;
          templatedAppt.isCancelled = false;
          templatedAppt.readyForBilling = false;
          templatedAppt.isBilled = false;
          templatedAppt.isDNA = false;
          templatedAppt.billingItems = '';
          templatedAppt.arrivalTime = '';
          templatedAppt.color = AppointmentController.getInstance().getColourForAppointment(templatedAppt);
          logger(templatedAppt); // add the templated appointment to the persistence

          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, AppointmentController.getInstance().getAppointmentFromEvent(templatedAppt), false);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(templatedAppt);
        }
      }
    });
  }

}

/***/ }),

/***/ "./src/appointments/AppointmentDetailModal.ts":
/*!****************************************************!*\
  !*** ./src/appointments/AppointmentDetailModal.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentDetailModal": () => (/* binding */ AppointmentDetailModal)
/* harmony export */ });
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var _AppointmentController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppointmentController */ "./src/appointments/AppointmentController.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppointmentBookView */ "./src/appointments/AppointmentBookView.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _appointment_templates_AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../appointment-templates/AppointmentTemplateView */ "./src/appointment-templates/AppointmentTemplateView.ts");
/* harmony import */ var _appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appointment-templates/AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");











const logger = debug__WEBPACK_IMPORTED_MODULE_7___default()('appointment-detail-view');
class AppointmentDetailModal {
  static datePickerResponsive = {
    medium: {
      controls: ['calendar'],
      touchUi: false
    }
  };
  static datetimePickerResponsive = {
    medium: {
      controls: ['calendar', 'time'],
      touchUi: false
    }
  };
  viewElements = {
    popup: null,
    range: null,
    titleInput: null,
    descriptionTextarea: null,
    deleteButton: null,
    patientArrivedButton: null,
    patientCancelledButton: null,
    patientDNAButton: null,
    readyForBillingButton: null,
    billingCompleteButton: null,
    patientSearchEl: null,
    appointmentTypeEl: null,
    appointmentTypeDropdown: null,
    patientSearchDropdown: null,
    providersDropdown: null,
    warningsEl: null
  };

  constructor() {
    this.patients = [];
  }

  static getInstance() {
    if (!AppointmentDetailModal._instance) {
      AppointmentDetailModal._instance = new AppointmentDetailModal();
    }

    return AppointmentDetailModal._instance;
  }

  close() {
    this.viewElements.popup.close();
  }

  isVisible() {
    return this.viewElements.popup.isVisible();
  }

  applyClinicConfig(clinicConfig) {
    this.viewElements.range.setOptions({
      stepMinute: clinicConfig.dragTimeStep
    });
  }

  onDocumentLoaded() {
    this.viewElements.titleInput = document.getElementById('event-title');
    this.viewElements.descriptionTextarea = document.getElementById('event-desc');
    this.viewElements.patientArrivedButton = document.getElementById('event-arrived');
    this.viewElements.deleteButton = document.getElementById('event-delete');
    this.viewElements.patientCancelledButton = document.getElementById('event-cancelled');
    this.viewElements.patientDNAButton = document.getElementById('event-dna');
    this.viewElements.readyForBillingButton = document.getElementById('event-readyforbilling');
    this.viewElements.billingCompleteButton = document.getElementById('event-billingcompleted');
    this.viewElements.patientSearchEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.SELECT.patientSearch);
    this.viewElements.appointmentTypeEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.SELECT.appointmentType);
    this.viewElements.warningsEl = document.getElementById("patient-warning"); // @ts-ignore

    this.viewElements.popup = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.popup)('#add-appointment-popup', {
      display: 'bottom',
      contentPadding: true,
      fullScreen: true,
      responsive: {
        medium: {
          display: 'anchored',
          width: 400,
          fullScreen: false,
          touchUi: false
        }
      }
    });
    this.viewElements.titleInput.addEventListener('input', function (ev) {
      // update current event's title
      _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.title = ev.target.value;
    });
    this.viewElements.descriptionTextarea.addEventListener('change', function (ev) {
      // update current event's title
      _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.description = ev.target.value;
    });
    this.viewElements.range = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.datepicker)('#event-date', {
      controls: ['date'],
      select: 'range',
      startInput: '#start-input',
      endInput: '#end-input',
      showRangeLabels: false,
      touchUi: true,
      stepMinute: 15,
      maxTime: '17:00',
      responsive: AppointmentDetailModal.datePickerResponsive,
      onChange: function (args) {
        let date = args.value; // update event's start date

        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.start = date[0];
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.end = date[1];
      }
    });
    this.setupActionButtons();
    logger('Completed setup of detail modal for appointments');
  }

  setupAppointmentTypeDropDown(appointmentTypes) {
    let types = [];
    appointmentTypes.forEach(type => {
      if (!type.isStatus) types.push(type.name);
    }); // add the patient search values to the data of the select dropdown

    this.viewElements.appointmentTypeDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#' + _AppTypes__WEBPACK_IMPORTED_MODULE_0__.SELECT.appointmentType, {
      data: types,
      onChange: (event, inst) => {
        // @ts-ignore
        (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value = event.valueText;
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.type = event.valueText;
      }
    });
  }

  setupProviderDropdown(providers) {
    // add the patient search values to the data of the select dropdown
    this.viewElements.providersDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#event-provider', {
      data: providers,
      onChange: (event, inst) => {
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.provider = event.valueText;
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.resource = event.value;
      }
    });
  }

  startCreateAppointment(elm) {
    // hide delete button inside add popup
    this.viewElements.deleteButton.style.display = 'none';
    this.viewElements.patientCancelledButton.style.display = 'none';
    this.viewElements.patientDNAButton.style.display = 'none';
    this.viewElements.patientArrivedButton.style.display = 'none';
    this.viewElements.readyForBillingButton.style.display = 'none';
    this.viewElements.billingCompleteButton.style.display = 'none'; // show the dropdowns

    this.viewElements.patientSearchEl.style.display = 'block';
    this.viewElements.appointmentTypeEl.style.display = 'block'; // set popup header text and buttons for adding

    this.viewElements.popup.setOptions({
      headerText: 'New event',
      buttons: [{
        text: 'Cancel',
        keyCode: 'esc',
        handler: function () {
          _appointment_templates_AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_8__.AppointmentTemplateView.getInstance().getCalender().removeEvent(_appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_9__.AppointmentTemplateController.getInstance().getModel().tempEvent);
        }
      }, {
        text: 'Add',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentDetailModal.getInstance().viewElements.range.getVal(); // store the event created by the UI

          let mobiId = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.id; // generate a new UUID

          let appointmentId = (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(); // get the colour for the event type

          let colour = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointmentType('Consulting');
          let createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss'));
          let updatedEvent = {
            id: appointmentId,
            title: (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.titleInput).value,
            description: (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            color: colour,
            patientId: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.patientId,
            editable: true,
            resource: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.resource,
            isDNA: false,
            isCancelled: false,
            createdBy: ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().getLoggedInUsername(),
            created: createdOn,
            modified: createdOn,
            arrivalTime: '',
            type: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.type,
            provider: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.provider
          };
          logger('inserting');
          logger(updatedEvent); // remove the original event

          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent([mobiId]);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(updatedEvent), false); // navigate the calendar to the correct view

          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().navigate(updatedEvent.start);
          AppointmentDetailModal.getInstance().close();
        },
        cssClass: 'mbsc-popup-button-primary'
      }]
    }); // fill popup with a new event data
    // @ts-ignore

    mobiscroll5.getInst(this.viewElements.titleInput).value = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.title; // @ts-ignore

    mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = '';
    this.viewElements.range.setVal([_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.start, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.end]);
    this.viewElements.range.setOptions({
      controls: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.allDay ? ['date'] : ['datetime'],
      responsive: _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.allDay ? AppointmentDetailModal.datePickerResponsive : AppointmentDetailModal.datetimePickerResponsive
    });
    this.viewElements.appointmentTypeDropdown.setVal('');
    this.viewElements.patientSearchDropdown.setVal('');
    this.viewElements.providersDropdown.setVal(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.resource); // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: elm
    });
    this.viewElements.popup.open();
  }

  updateAppointment(args) {
    let ev = args.event; // show delete button inside edit popup

    this.viewElements.patientArrivedButton.style.display = 'block';
    this.viewElements.deleteButton.style.display = 'block';
    this.viewElements.patientCancelledButton.style.display = 'block';
    this.viewElements.patientDNAButton.style.display = 'block';
    this.viewElements.readyForBillingButton.style.display = 'block';
    this.viewElements.billingCompleteButton.style.display = 'block'; // show the dropdowns

    this.viewElements.patientSearchEl.style.display = 'none';
    this.viewElements.appointmentTypeEl.style.display = 'none'; // set popup header text and buttons for editing

    this.viewElements.popup.setOptions({
      headerText: 'Edit event',
      buttons: [{
        text: 'Cancel',
        keyCode: 'esc',
        handler: function () {
          _appointment_templates_AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_8__.AppointmentTemplateView.getInstance().getCalender().updateEvent(_appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_9__.AppointmentTemplateController.getInstance().getModel().oldEvent);
        }
      }, {
        text: 'Save',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentDetailModal.getInstance().viewElements.range.getVal(); // update event with the new properties on save button click

          let createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss')); //

          let updatedEvent = {
            id: ev.id,
            title: (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.titleInput).value,
            description: (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            patientId: ev.patientId,
            editable: true,
            resource: ev.resource,
            isDNA: ev.isDNA,
            isCancelled: ev.isCancelled,
            createdBy: ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().getLoggedInUsername(),
            created: ev.created,
            modified: createdOn,
            arrivalTime: '',
            type: ev.type,
            provider: ev.provider
          }; // @ts-ignore

          updatedEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(updatedEvent);
          logger('updated');
          logger(updatedEvent);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(updatedEvent), false); // navigate the calendar to the correct view

          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().navigate(date[0]);
          AppointmentDetailModal.getInstance().close();
        },
        cssClass: 'mbsc-popup-button-primary'
      }]
    }); // fill popup with the selected event data
    // @ts-ignore

    mobiscroll5.getInst(this.viewElements.titleInput).value = ev.title || ''; // @ts-ignore

    mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = ev.description || '';
    this.viewElements.range.setVal([ev.start, ev.end]); // change range settings based on the allDay

    this.viewElements.range.setOptions({
      controls: ev.allDay ? ['date'] : ['datetime'],
      responsive: ev.allDay ? AppointmentDetailModal.datePickerResponsive : AppointmentDetailModal.datetimePickerResponsive
    }); // set the appointment type and patient

    this.viewElements.appointmentTypeDropdown.setVal(ev.type);
    this.viewElements.patientSearchDropdown.setVal(ev.patientId);
    this.viewElements.providersDropdown.setVal(ev.resource);
    let warningsText = this.getPatientWarnings(ev.patientId); // @ts-ignore

    mobiscroll5.getInst(AppointmentDetailModal.getInstance().viewElements.warningsEl).value = warningsText; // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: args.domEvent.currentTarget
    });
    this.viewElements.popup.open();
  }

  setupPatientSearchDropDown(patientsCollection) {
    this.patients = [];
    patientsCollection.forEach(patient => {
      this.patients.push({
        text: `${patient.name.surname}, ${patient.name.firstname}`,
        value: patient._id
      });
    }); // add the patient search values to the data of the select dropdown
    //

    this.viewElements.patientSearchDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#' + _AppTypes__WEBPACK_IMPORTED_MODULE_0__.SELECT.patientSearch, {
      filter: true,
      data: AppointmentDetailModal.getInstance().patients,
      onChange: (event, inst) => {
        // @ts-ignore
        (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.titleInput).value = event.valueText;
        let warningsText = this.getPatientWarnings(event.value); // @ts-ignore

        (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.getInst)(AppointmentDetailModal.getInstance().viewElements.warningsEl).value = warningsText;
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.patientId = event.value;
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.warnings = warningsText;
      }
    });
  }

  setupActionButtons() {
    this.viewElements.deleteButton.addEventListener('click', function () {
      // delete current event on button click
      //
      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent), false);
      AppointmentDetailModal.getInstance().close(); // save a local reference to the deleted event

      let deletedEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent; //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            //
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(deletedEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(deletedEvent), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    });
    this.viewElements.patientCancelledButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      let originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      let originalType = originalEvent.type;
      let originalNote = originalEvent.note;
      originalEvent.isCancelled = true;
      originalEvent.type = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED;
      originalEvent.note = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED;
      originalEvent.editable = false;
      originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointmentType(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close(); //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isCancelled = false;
            originalEvent.type = originalType;
            originalEvent.note = originalNote;
            originalEvent.editable = true;
            originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient Cancelled'
      });
    });
    this.viewElements.patientArrivedButton.addEventListener('click', function () {
      // update the event to arrived
      // save a local reference to the deleted event
      let originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.arrivalTime = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('HHmmss');
      originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close(); //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.arrivalTime = '';
            originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient Arrived'
      });
    });
    this.viewElements.patientDNAButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      let originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      let originalNote = originalEvent.note;
      let originalType = originalEvent.type;
      originalEvent.isDNA = true;
      originalEvent.type = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA;
      originalEvent.note = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA;
      originalEvent.editable = false;
      originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointmentType(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isDNA = false;
            originalEvent.type = originalType;
            originalEvent.note = originalNote;
            originalEvent.editable = true;
            originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient DNA'
      });
    });
    this.viewElements.readyForBillingButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      let originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.readyForBilling = true;
      originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointmentType(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_STATUS_READY_FOR_BILLING); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.readyForBilling = false;
            originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Ready For Billing'
      });
    });
    this.viewElements.billingCompleteButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      let originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.isBilled = true;
      originalEvent.editable = false;
      originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointmentType(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.APPOINTMENT_STATUS_BILLING_COMPLETE); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isBilled = false;
            originalEvent.editable = true;
            originalEvent.color = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Billing Complete'
      });
    });
  }

  getPatientWarnings(patientId) {
    let patientBasicDetails = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.patientSearch, {
      _id: patientId
    });
    let warningsText = '';

    if (patientBasicDetails && patientBasicDetails.flags) {
      if (patientBasicDetails.flags.hasWarnings) {
        patientBasicDetails.warnings.warnings.forEach(warning => {
          warningsText += warning + '\r\n';
        });
        logger('Patient has warnings');
        logger(patientBasicDetails);
        logger(warningsText);
      }
    }

    return warningsText;
  }

}

/***/ }),

/***/ "./src/appointments/AppointmentFilterView.ts":
/*!***************************************************!*\
  !*** ./src/appointments/AppointmentFilterView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentFilterView": () => (/* binding */ AppointmentFilterView)
/* harmony export */ });
/* harmony import */ var _AppointmentBookView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentBookView */ "./src/appointments/AppointmentBookView.ts");

class AppointmentFilterView {
  static getInstance() {
    if (!AppointmentFilterView._instance) {
      AppointmentFilterView._instance = new AppointmentFilterView();
    }

    return AppointmentFilterView._instance;
  }

  onDocumentLoaded() {
    this.providersEl = document.getElementById('providers');
    this.calendarFilterEl = document.getElementById('calendarFilter');
  }

  populateProviders(providers) {
    if (providers && this.providersEl) {
      providers.forEach(provider => {
        let labelEl = document.createElement('label');
        let inputEl = document.createElement('input');
        inputEl.setAttribute('type', 'checkbox');
        inputEl.setAttribute('value', provider.name);
        inputEl.setAttribute("checked", '');
        inputEl.setAttribute("mbsc-checkbox", '');
        inputEl.setAttribute('data-label', provider.name);
        inputEl.classList.add('provider-checkbox');
        labelEl.appendChild(inputEl);
        this.providersEl.appendChild(labelEl);
      }); // @ts-ignore

      mobiscroll5.enhance(this.providersEl); // @ts-ignore

      mobiscroll5.enhance(this.calendarFilterEl);
      document.querySelectorAll('.provider-checkbox').forEach(function (elm) {
        elm.addEventListener('change', function () {
          let checkboxList = document.querySelectorAll('.provider-checkbox');
          let selected = [];

          for (let i = 0; i < checkboxList.length; i++) {
            let checkbox = checkboxList[i]; // @ts-ignore

            if (checkbox.checked) {
              // @ts-ignore
              selected.push({
                id: checkbox.value,
                name: checkbox.value
              });
            }
          }

          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_0__.AppointmentBookView.getInstance().getCalender().setOptions({
            resources: selected
          });
        });
      }); // document.querySelectorAll('.md-view-change').forEach(function (elm) {
      //     elm.addEventListener('change', function (ev) {
      //
      //         let config = {...AppointmentTemplateController.getInstance().getModel().clinicConfig};
      //          config.view.schedule.type = ev.target.value;
      //
      //         let options = {
      //             //clickToCreate: config.clickToCreate,
      //             //dragTimeStep: config.dragTimeStep,
      //             //dragToCreate: config.dragToCreate,
      //             //dragToMove: config.dragToMove,
      //             //dragToResize: config.dragToResize,
      //             //min: moment().subtract(config.min, "months"),
      //             //controls: config.controls,
      //             //showControls: config.showControls,
      //             view: {
      //                 schedule: {
      //                     type: ev.target.value,
      //                     startTime: config.view.schedule.startTime,
      //                     endTime: config.view.schedule.endTime,
      //                     timeCellStep:10,
      //                     timeLabelStep:60
      //                 }
      //             },
      //             //invalidateEvent: config.invalidateEvent,
      //             //invalid: config.invalid,
      //         }
      //
      //         console.log(options);
      //
      //         AppointmentTemplateView.getInstance().getCalender().setOptions(options);
      //
      //     });
      // });
    }
  }

}

/***/ }),

/***/ "./src/patients/PatientSearchSidebar.ts":
/*!**********************************************!*\
  !*** ./src/patients/PatientSearchSidebar.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientSearchSidebar": () => (/* binding */ PatientSearchSidebar)
/* harmony export */ });
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _PatientSearchView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientSearchView */ "./src/patients/PatientSearchView.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");




class PatientSearchSidebar extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.SidebarViewContainer {
  constructor() {
    super(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.PatientSearchSidebarPrefs);
    const recentSearches = new _PatientSearchView__WEBPACK_IMPORTED_MODULE_2__.PatientSearchView(_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager());
    this.addView(recentSearches, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.PatientSearchSidebarContainers.container
    });
  }

  static getInstance() {
    if (!PatientSearchSidebar._instance) {
      PatientSearchSidebar._instance = new PatientSearchSidebar();
    }

    return PatientSearchSidebar._instance;
  }

}

/***/ }),

/***/ "./src/patients/PatientSearchView.ts":
/*!*******************************************!*\
  !*** ./src/patients/PatientSearchView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientSearchView": () => (/* binding */ PatientSearchView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");




const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('patient-search');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('patient-search-detail');
class PatientSearchView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.AbstractStatefulCollectionView {
  static fastSearchInputId = 'fastPatientSearch';
  static dataLimit = 20;
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'recentPatientSearches',
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_NAME.patientSearch
    },
    resultsElement: {
      type: 'a',
      attributes: [{
        name: 'href',
        value: '#'
      }],
      classes: 'list-group-item my-list-item truncate-notification list-group-item-action'
    },
    keyId: '_id',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.KeyType.string,
    modifiers: {
      normal: 'list-group-item-primary',
      inactive: 'list-group-item-light',
      active: 'list-group-item-info',
      warning: 'list-group-item-danger'
    },
    icons: {
      normal: '',
      inactive: '',
      active: '',
      warning: 'fas fa-exclamation-circle'
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElement: {
        classes: 'mb-1',
        type: 'span'
      },
      select: true,
      quickDelete: true,
      delete: {
        classes: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'fas fa-trash-alt'
      },
      drag: {
        type: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.DRAGGABLE.typePatientSummary,
        from: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.DRAGGABLE.fromPatientSearch
      }
    }
  };

  constructor(stateManager) {
    super(PatientSearchView.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch);
    this.loggedInUsers = [];
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ListViewRenderer(this, this); // handler binding

    this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
    this.eventPatientSelected = this.eventPatientSelected.bind(this);
    this.itemDeleted = this.itemDeleted.bind(this); // register state change listening

    this.localisedSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.BrowserStorageStateManager(true, true, ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameMongo);
    this.localisedSM.addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, this);
  }

  onDocumentLoaded() {
    super.onDocumentLoaded(); // @ts-ignore

    const fastSearchEl = $(`#${PatientSearchView.fastSearchInputId}`); // @ts-ignore

    fastSearchEl.on('autocompleteselect', this.eventPatientSelected);
    super.updateViewForNamedCollection(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, this.localisedSM.getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches));
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = `${item.name.firstname} ${item.name.surname}`;
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
    vLoggerDetail(`Checking for item modifiers`);
    vLoggerDetail(item);
    if (item.flags.isInactive) result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive;
    return result;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    let result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
    if (item.flags.hasWarnings) result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning;
    return result;
  }

  eventPatientSelected(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    vLogger(`User ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.innerText = ''; // add the selected user to the recent user searches

    if (this.localisedSM.isItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, {
      _id: ui.item.value
    })) return;
    const recentUserSearches = this.localisedSM.getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches);
    vLogger(`saved searches too long? ${_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches}`);

    if (recentUserSearches.length >= PatientSearchView.dataLimit) {
      vLogger('saved searches too long - removing first'); // remove the first item from recent searches

      const item = recentUserSearches.shift();
      this.localisedSM.removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, item, true);
    }

    const patient = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, {
      _id: ui.item.value
    }); // save the searches

    this.localisedSM.addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, patient, true);
  }

  updateViewForNamedCollection(name, newState) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches) {
      vLogger(`Updating for recent searches`);
      newState = this.localisedSM.getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches);
      vLogger(newState);
      super.updateViewForNamedCollection(name, newState);
    }

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch) {
      vLogger(`Handling patient search results`);
      vLogger(newState); // load the search names into the search field

      const fastSearchEl = $(`#${PatientSearchView.fastSearchInputId}`); // for each name, construct the patient details to display and the id referenced

      const fastSearchValues = [];
      newState.forEach(item => {
        const searchValue = {
          label: `${item.name.firstname} ${item.name.surname}`,
          value: item._id
        };
        fastSearchValues.push(searchValue);
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

  compareItemsForEquality(item1, item2) {
    return (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameMongo)(item1, item2);
  }

  itemDeleted(view, selectedItem) {
    vLoggerDetail(selectedItem);
    vLogger(`Recent search patient ${selectedItem.firstname} with id ${selectedItem.id} deleted - removing`);
    this.localisedSM.removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, selectedItem, true);
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
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointments/AppointmentController */ "./src/appointments/AppointmentController.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var _appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appointment-templates/AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");
/* harmony import */ var ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ui-framework-jps/dist/framework/util/BrowserUtil */ "./node_modules/ui-framework-jps/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patients/PatientSearchSidebar */ "./src/patients/PatientSearchSidebar.ts");
/* harmony import */ var _appointment_types_AppointmentTypesCompositeView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment-types/AppointmentTypesCompositeView */ "./src/appointment-types/AppointmentTypesCompositeView.ts");
/* harmony import */ var _appointment_types_AppointmentTypesSidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appointment-types/AppointmentTypesSidebar */ "./src/appointment-types/AppointmentTypesSidebar.ts");













const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('app');
class App extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  // @ts-ignore
  // @ts-ignore
  thisEl = null;
  chatNavigationItem = null;

  constructor() {
    // @ts-ignore
    super(); // event handlers

    this.handleShowChat = this.handleShowChat.bind(this);
    this.handleShowAppointmentBook = this.handleShowAppointmentBook.bind(this);
    this.handleShowAppointmentTemplates = this.handleShowAppointmentTemplates.bind(this);
    this.handleShowPatientRecords = this.handleShowPatientRecords.bind(this);
    this.handleShowPatientSearch = this.handleShowPatientSearch.bind(this);
    this.handleShowAppointmentTypes = this.handleShowAppointmentTypes.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().connectToApplication(this, window.localStorage);
  }

  render() {
    logger("Rendering App");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null);
  }

  componentDidMount() {
    logger('component Did Mount');
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_10__.PatientSearchSidebar.getInstance().onDocumentLoaded();
    new _appointment_types_AppointmentTypesCompositeView__WEBPACK_IMPORTED_MODULE_11__.AppointmentTypesCompositeView(_appointment_types_AppointmentTypesSidebar__WEBPACK_IMPORTED_MODULE_12__.AppointmentTypesSidebar.getInstance()).onDocumentLoaded();
    this.setupNavigationItemHandling();
    _appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_5__.AppointmentController.getInstance().onDocumentLoaded();
    _appointment_templates_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_8__.AppointmentTemplateController.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().onDocumentLoaded(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.logout);
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().onDocumentLoaded();
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients, {
      _id: '2a8665a6-3580-4195-8ed7-0f81df551204'
    });
  }

  getCurrentUser() {
    return _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getLoggedInUserId();
  }

  hideAllSideBars() {
    this.chatSidebar.eventHide(null);
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_10__.PatientSearchSidebar.getInstance().eventHide(null);
  }

  handleShowChat(roomName) {
    logger('Handling Show Chat'); // prevent anything from happening if we are not logged in

    if (!_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.login;
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

  handleShowAppointmentBook(event) {
    logger(`Showing appointment book`);
    logger(_appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_5__.AppointmentController.getInstance().getModel().clinicConfig);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_9__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', false);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_9__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
  }

  handleShowAppointmentTemplates(event) {
    logger(`Showing appointment templates`);
    logger(_appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_5__.AppointmentController.getInstance().getModel().clinicConfig);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_9__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_9__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', false);
  }

  handleShowPatientRecords(event) {}

  handleShowPatientSearch(event) {
    logger(`Showing patient search`);
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_10__.PatientSearchSidebar.getInstance().eventShow(null);
  }

  handleShowAppointmentTypes(event) {
    logger(`Showing patient search`);
    _appointment_types_AppointmentTypesSidebar__WEBPACK_IMPORTED_MODULE_12__.AppointmentTypesSidebar.getInstance().eventShow(null);
  }

  setupNavigationItemHandling() {
    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentBook).addEventListener('click', this.handleShowAppointmentBook);
    let templateEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentTemplates);

    if (templateEl) {
      templateEl.addEventListener('click', this.handleShowAppointmentTemplates);
    }

    let apptTypesEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentTypes);

    if (apptTypesEl) {
      apptTypesEl.addEventListener('click', this.handleShowAppointmentTypes);
    }

    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.patientRecords).addEventListener('click', this.handleShowPatientRecords);
    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.patientSearch).addEventListener('click', this.handleShowPatientSearch); // @ts-ignore

    this.chatNavigationItem = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.clinicChat); // @ts-ignore

    this.chatNavigationItem.addEventListener('click', this.handleShowChat);
  }

} //localStorage.debug = 'app api-ts-results bootstrap-form-config-helper';

localStorage.debug = 'api-ts colour-input-field socket-ts';
localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_0___default().log) = console.info.bind(console);
$(function () {
  (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_7__.setOptions)({
    theme: 'ios',
    themeVariant: 'light'
  }); // @ts-ignore

  mobiscroll5.setOptions({
    theme: 'ios',
    themeVariant: 'light'
  }); // @ts-ignore

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