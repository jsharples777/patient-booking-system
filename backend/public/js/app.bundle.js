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
/* harmony export */   "UsersSidebarPrefs": () => (/* binding */ UsersSidebarPrefs),
/* harmony export */   "UsersSidebarContainers": () => (/* binding */ UsersSidebarContainers),
/* harmony export */   "SELECT": () => (/* binding */ SELECT)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");

let Decorator;

(function (Decorator) {
  Decorator[Decorator["Incomplete"] = 0] = "Incomplete";
  Decorator[Decorator["Complete"] = 1] = "Complete";
  Decorator[Decorator["Persisted"] = 2] = "Persisted";
  Decorator[Decorator["PersistedLocally"] = 3] = "PersistedLocally";
  Decorator[Decorator["Modified"] = 4] = "Modified";
})(Decorator || (Decorator = {}));

const STATE_NAMES = {
  users: 'user',
  chatLogs: 'chatLog',
  exerciseTypes: 'exerciseType',
  workouts: 'workout',
  recentUserSearches: 'recentUserSearch',
  patientSearch: 'fastSearchNames',
  recentPatientSearches: 'recentPatientSearches',
  openPatients: 'openPatients',
  appointments: 'appointment',
  appointmentTypes: 'appointmentType',
  clinicConfig: 'clinicConfig',
  providers: 'provider',
  appointmentTemplates: 'appointmentTemplate',
  patients: 'patient',
  basics: 'basic',
  name: 'name',
  contact: 'contact',
  identifiers: 'identifiers',
  flags: 'flags',
  warnings: 'warnings',
  allergies: 'allergy',
  consults: 'consult',
  history: 'history',
  results: 'result',
  scripts: 'script',
  scriptHistory: 'scriptHistory',
  scriptArchive: 'scriptArchive',
  recalls: 'recall',
  tasks: 'task',
  documents: 'documents',
  letters: 'letter',
  vaccinations: 'vaccination',
  wcc: 'wcc',
  modifiedDates: 'modifiedDate',
  loadedPatients: 'loadedPatients',
  postCodes: 'postCode'
};
const API_Config = {
  login: '/login',
  graphQL: '/graphQL',
  users: '/api/users',
  clinicConfig: '/api/clinic-config',
  patients: '/api/patients',
  patientSearch: '/api/patient-search',
  patientDemographics: '/api/demographics'
};
const NAVIGATION = {
  appointmentBook: 'navigationItemAppointmentBook',
  patientSearch: 'navigationItemPatientSearch',
  appointmentTemplates: 'navigationItemAppointmentTemplating',
  clinicChat: 'navigationItemChat',
  patientRecord: 'navigationItemPatientRecord',
  logout: 'navigationItemLogout',
  appointmentTypes: 'navigationItemAppointmentTypes',
  users: 'navigationItemUsers',
  today: 'navigationItemToday'
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
  appointmentTypeDetail: 'appointmentTypeDetail',
  users: 'usersList',
  userDetail: 'userDetail',
  openPatients: 'Open Patients',
  patientName: 'Patient Name',
  patientBasics: 'Patient Basics',
  patientContact: 'Patient Contact',
  patientIdentifiers: 'Patient Identifiers'
};
const VIEW_CONTAINER = {
  calendarControl: 'calendarControl',
  calendarDetail: 'calendarDetail',
  patientName: 'patient-name-details',
  patientBasics: 'patient-basics-details',
  patientContact: 'patient-contact-details',
  patientIdentifiers: 'patient-identifier-details'
};
const PatientSearchSidebarPrefs = {
  id: 'patientSearchSideBar',
  expandedSize: '40%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.left
};
const PatientSearchSidebarContainers = {
  container: 'patientSearchZone',
  openRecords: 'openPatientZone'
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
const UsersSidebarPrefs = {
  id: 'usersSideBar',
  expandedSize: '40%',
  location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarLocation.right
};
const UsersSidebarContainers = {
  list: 'usersList',
  detail: 'userDetail'
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _model_PatientObjectDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/PatientObjectDefinitions */ "./src/model/PatientObjectDefinitions.ts");






const cLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts');
const cLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts-detail');

class DefaultUserValueGenerator {
  generate(field, isCreate) {
    let result = '';

    if (isCreate) {
      switch (field.id) {
        case 'isCurrent':
          {
            result = 'true';
            break;
          }

        case 'resetPassword':
          {
            result = 'true';
            break;
          }

        case 'password':
          {
            result = 'password';
            break;
          }
      }
    }

    return result;
  }

}

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

    const restSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.RESTApiStateManager.getInstance();
    restSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.clinicConfig,
      isActive: true,
      find: false,
      findAll: true,
      create: true,
      update: true,
      destroy: true
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.patients,
      isActive: true,
      idField: '_id',
      find: true,
      findAll: true,
      create: true,
      update: true,
      destroy: false
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.patientSearch,
      isActive: true,
      idField: '_id',
      find: false,
      findAll: true,
      create: false,
      update: false,
      destroy: false
    }]);
    const qlSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.GraphQLApiStateManager.getInstance();
    qlSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getPatientSearchDetails {_id,isDemoOnly,identifiers { legacyId},flags {isInactive,hasWarnings},name {firstname,surname}, warnings {_id, warnings}, contact {    _id,\n' + '    owner,\n' + '    line1,\n' + '    line2,\n' + '    suburb\n' + '    postcode,\n' + '    state,\n' + '    country,\n' + '    home,\n' + '    work,\n' + '    mobile,\n' + '    nokname,\n' + '    nokphone},\n' + 'lastSeen,\n' + 'lastSeenBy,\n' + 'dob,\n' + 'dod,\n' + 'gender,\n' + 'ethnicity,\n' + 'countryofbirth}}',
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
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.postCodes,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getPostCodes {_id,suburb,postcode,state}}',
        create: '',
        destroy: '',
        update: '',
        find: ''
      },
      data: {
        findAll: 'getPostCodes',
        create: '',
        destroy: '',
        update: '',
        find: ''
      },
      isActive: true,
      idField: '_id'
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users,
      serverURL: '',
      apiURL: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.graphQL,
      apis: {
        findAll: 'query {getUsers {_id,username,providerNo,isCurrent,isAdmin,isProvider,resetPassword,password}}',
        create: 'mutation addUser($data: UserInput!){addUser(user: $data) {_id,username,providerNo,isCurrent,isAdmin,isProvider,resetPassword,password}}',
        destroy: '',
        update: 'mutation updateUser($data: UserInput!){updateUser(user: $data)}',
        find: ''
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
    const aggregateSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AggregateStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    const memorySM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.MemoryBufferStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    const asyncREST = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AsyncStateManagerWrapper(aggregateSM, restSM, ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    const asyncQL = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.AsyncStateManagerWrapper(aggregateSM, qlSM, ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    aggregateSM.addStateManager(memorySM, [], false);
    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.postCodes, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.providers, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates], false);
    aggregateSM.addStateManager(asyncQL, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients], false);
    this.stateManager = aggregateSM; // state listener

    this.stateChanged = this.stateChanged.bind(this);
    this.stateChangedItemAdded = this.stateChangedItemAdded.bind(this);
    this.stateChangedItemRemoved = this.stateChangedItemRemoved.bind(this);
    this.stateChangedItemUpdated = this.stateChangedItemUpdated.bind(this); // data objects

    this.setupDataObjectDefinitions();
    _model_PatientObjectDefinitions__WEBPACK_IMPORTED_MODULE_4__.PatientObjectDefinitions.loadPatientDefinitions();
    return this;
  }
  /*
      Get the base data for the application (users, entries)
  */


  onDocumentLoaded() {
    cLogger('Initialising data state'); // listen for socket events

    const socketListerDelegate = new _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_1__["default"]();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SocketManager.getInstance().setListener(socketListerDelegate);
    const username = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().getLoggedInUsername(); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger(`Setting up chat system for user ${username}`);

    if (username.trim().length > 0) {
      // setup the chat system
      const chatManager = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.ChatManager.getInstance(); // this connects the manager to the socket system
      // setup the chat notification system

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.NotificationController.getInstance();
      chatManager.setCurrentUser(username); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.postCodes);
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

  getProviderNo() {
    let result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser.providerNo;
      }
    } catch (error) {}

    cLoggerDetail(`Logged in provider is ${result}`);
    return result;
  }

  isProvider() {
    let result = false;

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser.isProvider;
      }
    } catch (error) {}

    cLoggerDetail(`Logged in user is a provider? ${result}`);
    return result;
  }

  handleMessage(message) {
    cLogger(message);
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
    const copyOfExercise = { ...exerciseType
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

  filterResults(managerName, name, filterResults) {}

  setupDataObjectDefinitions() {
    const apptTypeDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, 'Appointment Type', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, true, "Name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "colour", "Colour", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.colour, true, "Choose color from below");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "icon", "Icon", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, false, "Font Awesome icon classes");
    const statusFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(apptTypeDef, "isStatus", "Patient flow status", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Used by the application to track patient state");
    statusFieldDef.displayOnly = true;
    cLogger(`Appointment type data object definition`);
    cLogger(apptTypeDef);
    const userDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users, 'Users', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "username", "Username", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, true, "Username");
    const isCurrentFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isCurrent", "Active?", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Is this a current user?");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isAdmin", "Admin?", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Does the user have admin privilege?");
    const isProviderFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "isProvider", "Is Provider", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Is the user a provider");
    isProviderFieldDef.displayOnly = true;
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "providerNo", "Provider Number", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, false, "Provider Number");
    const resetPasswordFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "resetPassword", "Reset Password?", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.boolean, false, "Reset the users password ");
    const passwordFieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(userDef, "password", "New Password", ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.FieldType.text, false, "New password");
    cLogger(`Users type data object definition`);
    cLogger(userDef);
    const generator = new DefaultUserValueGenerator(); // setup default values for new user

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


  getServerAPIURL() {
    let result = ""; // @ts-ignore

    if (window.ENV && window.ENV.serverURL) {
      // @ts-ignore
      result = window.ENV.serverURL;
    }

    return result;
  }

  foundResult(managerName, name, foundItem) {}

}

class IsProviderDerivedField {
  getValue(dataObj, field, isCreate) {
    let result = 'false';

    if (dataObj.providerNo) {
      if (dataObj.providerNo.trim().length > 0) {
        result = 'true';
      }
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

    const sumHours = duration1Hours + duration2Hours + carry;
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
    const stateObj = message.data;
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
    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().getLoggedInUserId();
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
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");









const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-template-controller');
class AppointmentTemplateController {
  dataElements = {
    oldEvent: null,
    tempEvent: {},
    currentFirstDate: 0,
    currentLastDate: 0,
    currentFirstDateDayNumber: 1
  };

  constructor() {
    this.onPageLoading = this.onPageLoading.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates, this);
    _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().addListener(this);
  }

  static getInstance() {
    if (!AppointmentTemplateController._instance) {
      AppointmentTemplateController._instance = new AppointmentTemplateController();
    }

    return AppointmentTemplateController._instance;
  }

  loadedPatientSearch(patientSearch) {}

  loadedProviders(providers) {
    _AppointmentTemplateFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateFilterView.getInstance().populateProviders(providers);
    _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().setupProviders(providers);
  }

  loadedClinicAppointmentBookConfig(clinicConfig) {
    _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().applyClinicConfig(clinicConfig);
  }

  loadedAppointmentTypes(appointmentTypes) {
    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentTemplateDetailModal.getInstance().setupAppointmentTypeDropDown(appointmentTypes);
  }

  getModel() {
    return this.dataElements;
  }

  onDocumentLoaded() {
    _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().onDocumentLoaded();
    _AppointmentTemplateFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentTemplateFilterView.getInstance().onDocumentLoaded();
  }

  getEventForAppointmentTemplate(template) {
    logger(`Creating event for appointment template with first day number of ${this.dataElements.currentFirstDateDayNumber}`);
    logger(template);
    if (template.day < this.dataElements.currentFirstDateDayNumber) return null;
    const loadDate = this.dataElements.currentFirstDate + (template.day - this.dataElements.currentFirstDateDayNumber);
    const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointmentTemplateForDate(loadDate, template.day, template);
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
    const results = [];
    appointments.forEach(appointment => {
      const result = this.getEventForAppointmentTemplate(appointment);
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
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates:
        {
          const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates);
          const results = [];
          appointments.forEach(appointment => {
            const result = this.getEventForAppointmentTemplate(appointment);
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
      const result = this.getEventForAppointmentTemplate(appointment);

      if (result) {
        _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent(result);
        _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(result);
        this.refreshDisplay();
      }
    }
  }

  stateChangedItemRemoved(managerName, name, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates) {
      logger('Appointment Template deleted by another user');
      logger(appointment);
      _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent([appointment._id]);
      this.refreshDisplay();
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, appointment) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTemplates && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment updated by another user');
      logger(appointment);
      const result = this.getEventForAppointmentTemplate(appointment);

      if (result) {
        _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().removeEvent(result);
        _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(result);
        this.refreshDisplay();
      }
    }
  }

  refreshDisplay() {
    _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().refresh();
  }

  foundResult(managerName, name, foundItem) {}

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");
/* harmony import */ var _appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appointments/AppointmentController */ "./src/appointments/AppointmentController.ts");











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
        const date = args.value; // update event's start date

        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.start = date[0];
        _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.end = date[1];
      }
    });
    this.setupActionButtons();
    logger('Completed setup of detail modal for appointment templates');
  }

  setupAppointmentTypeDropDown(appointmentTypes) {
    // add the patient search values to the data of the select dropdown
    this.viewElements.appointmentTypeDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#event-appt-type-template', {
      data: appointmentTypes,
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
          AppointmentTemplateDetailModal.getInstance().close();
        }
      }, {
        text: 'Add',
        keyCode: 'enter',
        handler: function () {
          const date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal(); // store the event created by the UI

          const mobiId = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent.id; // generate a new UUID

          const appointmentId = (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(); // get the colour for the event type

          const colour = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_appointments_AppointmentController__WEBPACK_IMPORTED_MODULE_9__.AppointmentController.getInstance().getModel().tempEvent.type);
          const createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss'));
          const updatedEvent = {
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
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(updatedEvent), false); // navigate the calendar to the correct view

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
    const ev = args.event; // show delete button inside edit popup

    this.viewElements.deleteButton.style.display = 'block';
    this.viewElements.appointmentTypeEl.style.display = 'none'; // set popup header text and buttons for editing

    this.viewElements.popup.setOptions({
      headerText: 'Edit event',
      buttons: [{
        text: 'Cancel',
        keyCode: 'esc',
        handler: function () {
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().updateEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().oldEvent);
          AppointmentTemplateDetailModal.getInstance().close();
        }
      }, {
        text: 'Save',
        keyCode: 'enter',
        handler: function () {
          const date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal(); // update event with the new properties on save button click

          const createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss')); //

          const updatedEvent = {
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

          updatedEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentTemplate(updatedEvent);
          logger('updated');
          logger(updatedEvent);
          _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().updateEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(updatedEvent), false); // navigate the calendar to the correct view

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
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(_AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent), false);
      AppointmentTemplateDetailModal.getInstance().close(); // save a local reference to the deleted event

      const deletedEvent = _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_2__.AppointmentTemplateController.getInstance().getModel().tempEvent; //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            //
            _AppointmentTemplateView__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateView.getInstance().getCalender().addEvent(deletedEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(deletedEvent), false);
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
        const labelEl = document.createElement('label');
        const inputEl = document.createElement('input');
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
          const checkboxList = document.querySelectorAll('.template-provider-checkbox');
          const selected = [];

          for (let i = 0; i < checkboxList.length; i++) {
            const checkbox = checkboxList[i]; // @ts-ignore

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
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppointmentTemplateDetailModal */ "./src/appointment-templates/AppointmentTemplateDetailModal.ts");
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");







const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('appointment-template-view');
class AppointmentTemplateView {
  viewElements = {
    calendar: null
  };

  constructor() {}

  static getInstance() {
    if (!AppointmentTemplateView._instance) {
      AppointmentTemplateView._instance = new AppointmentTemplateView();
    }

    return AppointmentTemplateView._instance;
  }

  getCalender() {
    return this.viewElements.calendar;
  }

  onDocumentLoaded() {
    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().onDocumentLoaded();
    const options = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().getClinicConfig();
    logger('Using clinic config options');
    options.view.schedule.type = 'week';

    options.onPageLoading = (event, inst) => {
      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().onPageLoading(event, inst);
    };

    options.onEventCreated = (event, inst) => {
      _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().close(); // store temporary event

      _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_0__.AppointmentTemplateController.getInstance().getModel().tempEvent = event.event;
      logger('Creating event');
      logger(event);
      _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().startCreateAppointmentTemplate(event.target);
    };

    options.onEventDeleted = (event, inst) => {
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            // @ts-ignore
            AppointmentTemplateView.getInstance().viewElements.calendar.addEvent(event.event);
            _Controller__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(event.event), false);
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

      if (!_AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().isVisible()) {
        logger(args);
        _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().updateAppointmentTemplate(args);
      }
    };

    options.renderScheduleEvent = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().handleAppointmentTemplateRendering;

    options.onEventUpdated = args => {
      // user has dragged event - update the appointment
      _Controller__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTemplates, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(args.event), false);
    };

    if (_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().haveProvidersLoaded()) {
      const providers = [];
      _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_6__.AppointmentControllerHelper.getInstance().getProviders().forEach(provider => {
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
      clinicConfig.view.schedule.type = 'week';
      this.viewElements.calendar.setOptions({
        clickToCreate: clinicConfig.clickToCreate,
        dragTimeStep: clinicConfig.dragTimeStep,
        dragToCreate: clinicConfig.dragToCreate,
        dragToMove: clinicConfig.dragToMove,
        dragToResize: clinicConfig.dragToResize,
        showControls: clinicConfig.showControls,
        view: clinicConfig.view,
        invalidateEvent: clinicConfig.invalidateEvent,
        invalid: clinicConfig.invalid
      });
    }

    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().applyClinicConfig(clinicConfig);
  }

  setupProviders(providersCollection) {
    const providers = [];
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
    _AppointmentTemplateDetailModal__WEBPACK_IMPORTED_MODULE_5__.AppointmentTemplateDetailModal.getInstance().setupProviderDropdown(providers);
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
    const apptTypeDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointmentTypes);

    if (apptTypeDef) {
      const displayOrders = [];
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
      });
      displayOrders.push({
        fieldId: 'isStatus',
        displayOrder: 4
      });
      const tableUIConfig = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BootstrapTableConfigHelper.getInstance().generateTableConfig(apptTypeDef, displayOrders, 1, false, true); // tableUIConfig.headerColumns[0].element.classes += ' text-center';

      tableUIConfig.headerColumns[1].element.classes += ' text-center';
      tableUIConfig.headerColumns[2].element.classes += ' text-center';
      tableUIConfig.headerColumns[3].element.classes += ' text-center'; //this.renderer = new TabularItemViewRenderer(this, this, tableUIConfig, displayOrders, BootstrapTableRowConfigHelper.getInstance(), new DefaultFieldPermissionChecker());

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






const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('appointment-types-composite-view');
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
      const apptTypeDetailRenderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypesSidebarContainers.detail, apptTypeDefinition, new ApptTypePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), false);
      const apptTypeDetailView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypesSidebarContainers.detail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_NAME.appointmentTypeDetail
      }, apptTypeDetailRenderer);
      const viewLinker = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointmentTypes, apptTypes);
      viewLinker.addLinkedDetailView(apptTypeDetailView);
      this.sideBar.onDocumentLoaded();
      const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(apptTypeDefinition);
      apptTypeDetailView.initialise(startingDisplayOrder, false, true); // setup the event handling for the create new exercise type button

      const createApptType = document.getElementById('addNewAppointmentType');
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
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");
/* harmony import */ var _patients_PatientController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patients/PatientController */ "./src/patients/PatientController.ts");









const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('appointment-view');
class AppointmentBookView {
  viewElements = {
    datePicker: null,
    calendar: null
  };

  constructor() {}

  static getInstance() {
    if (!AppointmentBookView._instance) {
      AppointmentBookView._instance = new AppointmentBookView();
    }

    return AppointmentBookView._instance;
  }

  getCalender() {
    return this.viewElements.calendar;
  }

  onDocumentLoaded() {
    this.setupDatePicker();
    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().onDocumentLoaded();
    const options = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().getClinicConfig();
    logger('Using clinic config options');

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
            _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(event.event), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    };

    options.onEventClick = (event, inst) => {
      logger(event.event);

      if (event.event.editable) {
        if (event.domEvent.target.classList.contains('md-custom-event-title')) {
          if (event.event.patientId) _patients_PatientController__WEBPACK_IMPORTED_MODULE_8__.PatientController.getInstance().openPatientRecordWithPatientId(event.event.patientId);
        } else {
          _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().oldEvent = Object.assign({}, event.event);
          _AppointmentController__WEBPACK_IMPORTED_MODULE_0__.AppointmentController.getInstance().getModel().tempEvent = event.event;

          if (!_AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().isVisible()) {
            logger(event);
            _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_6__.AppointmentDetailModal.getInstance().updateAppointment(event);
          }
        }
      }
    };

    options.onEventDoubleClick = args => {
      logger(args.event);

      if (args.event.patientId) {
        _patients_PatientController__WEBPACK_IMPORTED_MODULE_8__.PatientController.getInstance().openPatientRecordWithPatientId(args.event.patientId);
      }
    };

    options.renderScheduleEvent = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().handleAppointmentRendering;

    options.onEventUpdated = args => {
      // user has dragged event - update the appointment
      _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(args.event), false);
    };

    if (_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().haveProvidersLoaded()) {
      const providers = [];
      _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_7__.AppointmentControllerHelper.getInstance().getProviders().forEach(provider => {
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
    const providers = [];
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");










const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-controller');
class AppointmentController {
  dataElements = {
    oldEvent: null,
    tempEvent: {},
    loadDate: 0,
    loadDateFinish: 0
  };

  constructor() {
    this.onPageLoading = this.onPageLoading.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, this);
    _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().addListener(this);
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

  onPageLoading(event, inst) {
    // load the events for the view
    logger(event);
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
    this.dataElements.loadDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('YYYYMMDD'));
    const loadDateDayNumber = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.firstDay).format('d'));
    this.dataElements.loadDateFinish = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()(event.lastDay).format('YYYYMMDD'));
    logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);
    const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
    const results = [];
    const appointmentsForTheDay = [];
    appointments.forEach(appointment => {
      if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
        appointmentsForTheDay.push(appointment);
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
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
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
        {
          this.dataElements.loadDate = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
          this.dataElements.loadDateFinish = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').format('YYYYMMDD'));
          logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);
          const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
          const results = [];
          appointments.forEach(appointment => {
            if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
              logger('Found appointment');
              logger(appointment);
              const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
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
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
        logger('Converted to event');
        logger(result);

        if (result) {
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent(result);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(result);
          this.refreshDisplay();
        }
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
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments && appointment.createdBy !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment updated by another user');
      logger(appointment);

      if (appointment.start >= this.dataElements.loadDate && appointment.start < this.dataElements.loadDateFinish) {
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
        logger('Converted to event');
        logger(result);

        if (result) {
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent(result);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(result);
          this.refreshDisplay();
        }
      }
    }
  }

  loadedAppointmentTypes(appointmentTypes) {
    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentDetailModal.getInstance().setupAppointmentTypeDropDown(appointmentTypes);
    const appointments = _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().getEvents();
    appointments.forEach(appointment => {
      appointment.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(appointment);
    });
    _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(appointments);
  }

  loadedClinicAppointmentBookConfig(clinicConfig) {
    _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().applyClinicConfig(clinicConfig);
  }

  loadedPatientSearch(patientSearch) {
    _AppointmentDetailModal__WEBPACK_IMPORTED_MODULE_7__.AppointmentDetailModal.getInstance().setupPatientSearchDropDown(patientSearch);
  }

  loadedProviders(providers) {
    _AppointmentFilterView__WEBPACK_IMPORTED_MODULE_6__.AppointmentFilterView.getInstance().populateProviders(providers);
    _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().setupProviders(providers);
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

          const templatedAppt = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getEventForAppointmentTemplateForDate(loadDate, day, template);
          templatedAppt.id = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();
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
          templatedAppt.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(templatedAppt);
          logger(templatedAppt); // add the templated appointment to the persistence

          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(templatedAppt), false);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(templatedAppt);
        }
      }
    });
  }

  refreshDisplay() {//AppointmentBookView.getInstance().getCalender().refresh();
  }

  foundResult(managerName, name, foundItem) {}

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");










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
        const date = args.value; // update event's start date

        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.start = date[0];
        _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.end = date[1];
      }
    });
    this.setupActionButtons();
    logger('Completed setup of detail modal for appointments');
  }

  setupAppointmentTypeDropDown(appointmentTypes) {
    // add the patient search values to the data of the select dropdown
    this.viewElements.appointmentTypeDropdown = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.select)('#' + _AppTypes__WEBPACK_IMPORTED_MODULE_0__.SELECT.appointmentType, {
      data: appointmentTypes,
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
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().removeEvent(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent);
          AppointmentDetailModal.getInstance().close();
        }
      }, {
        text: 'Add',
        keyCode: 'enter',
        handler: function () {
          const date = AppointmentDetailModal.getInstance().viewElements.range.getVal(); // store the event created by the UI

          const mobiId = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.id; // generate a new UUID

          const appointmentId = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(); // get the colour for the event type

          const colour = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent.type);
          const createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss'));
          const updatedEvent = {
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
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(updatedEvent), false); // navigate the calendar to the correct view

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
    const ev = args.event; // show delete button inside edit popup

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
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().oldEvent);
          AppointmentDetailModal.getInstance().close();
        }
      }, {
        text: 'Save',
        keyCode: 'enter',
        handler: function () {
          const date = AppointmentDetailModal.getInstance().viewElements.range.getVal(); // update event with the new properties on save button click

          const createdOn = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYDDMMHHmmss')); //

          const updatedEvent = {
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

          updatedEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(updatedEvent);
          logger('updated');
          logger(updatedEvent);
          _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(updatedEvent);
          _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(updatedEvent), false); // navigate the calendar to the correct view

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
    const warningsText = this.getPatientWarnings(ev.patientId); // @ts-ignore

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
        const warningsText = this.getPatientWarnings(event.value); // @ts-ignore

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
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(_AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent), false);
      AppointmentDetailModal.getInstance().close(); // save a local reference to the deleted event

      const deletedEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent; //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            //
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().addEvent(deletedEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(deletedEvent), false);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    });
    this.viewElements.patientCancelledButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      const originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      const originalType = originalEvent.type;
      const originalNote = originalEvent.note;
      originalEvent.isCancelled = true;
      originalEvent.type = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_CANCELLED;
      originalEvent.note = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_CANCELLED;
      originalEvent.editable = false;
      originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_CANCELLED); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close(); //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isCancelled = false;
            originalEvent.type = originalType;
            originalEvent.note = originalNote;
            originalEvent.editable = true;
            originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient Cancelled'
      });
    });
    this.viewElements.patientArrivedButton.addEventListener('click', function () {
      // update the event to arrived
      // save a local reference to the deleted event
      const originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.arrivalTime = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('HHmmss');
      originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close(); //

      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.arrivalTime = '';
            originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient Arrived'
      });
    });
    this.viewElements.patientDNAButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      const originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      const originalNote = originalEvent.note;
      const originalType = originalEvent.type;
      originalEvent.isDNA = true;
      originalEvent.type = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_DNA;
      originalEvent.note = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_DNA;
      originalEvent.editable = false;
      originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_DNA); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isDNA = false;
            originalEvent.type = originalType;
            originalEvent.note = originalNote;
            originalEvent.editable = true;
            originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Patient DNA'
      });
    });
    this.viewElements.readyForBillingButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      const originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.readyForBilling = true;
      originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_STATUS_READY_FOR_BILLING); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.readyForBilling = false;
            originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Ready For Billing'
      });
    });
    this.viewElements.billingCompleteButton.addEventListener('click', function () {
      // update the event to cancelled and set to non-editable
      // save a local reference to the deleted event
      const originalEvent = _AppointmentController__WEBPACK_IMPORTED_MODULE_2__.AppointmentController.getInstance().getModel().tempEvent;
      originalEvent.isBilled = true;
      originalEvent.editable = false;
      originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointmentType(_helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.APPOINTMENT_STATUS_BILLING_COMPLETE); //

      _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
      AppointmentDetailModal.getInstance().close();
      (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.snackbar)({
        button: {
          action: function () {
            originalEvent.isBilled = false;
            originalEvent.editable = true;
            originalEvent.color = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getColourForAppointment(originalEvent);
            _AppointmentBookView__WEBPACK_IMPORTED_MODULE_5__.AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.appointments, _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_8__.AppointmentControllerHelper.getInstance().getAppointmentFromEvent(originalEvent), false);
          },
          text: 'Undo'
        },
        message: 'Billing Complete'
      });
    });
  }

  getPatientWarnings(patientId) {
    const patientBasicDetails = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.patientSearch, {
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
        const labelEl = document.createElement('label');
        const inputEl = document.createElement('input');
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
          const checkboxList = document.querySelectorAll('.provider-checkbox');
          const selected = [];

          for (let i = 0; i < checkboxList.length; i++) {
            const checkbox = checkboxList[i]; // @ts-ignore

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

/***/ "./src/clinic-chat/ClinicChatDetailView.ts":
/*!*************************************************!*\
  !*** ./src/clinic-chat/ClinicChatDetailView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicChatDetailView": () => (/* binding */ ClinicChatDetailView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps/dist/framework/util/BrowserUtil */ "./node_modules/ui-framework-jps/dist/framework/util/BrowserUtil.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");






const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('clinic-chat-detail-view');
class ClinicChatDetailView {
  static newFormId = "newMessage";
  static commentId = "message";
  static submitCommentId = "submitMessage";
  static chatLogId = 'chatLog';
  static chatLogRoomId = 'chatLogRoom';
  static priorityId = 'priority';
  static clinicChatFastPatientSearch = 'clinicChatFastPatientSearch'; // @ts-ignore

  listeners = [];

  constructor() {
    this.stateManager = _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager();
    this.selectedChatLog = null; // handler binding

    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleChatStarted = this.handleChatStarted.bind(this);
    this.handlePatientDrop = this.handlePatientDrop.bind(this);
    this.handlePatientSelected = this.handlePatientSelected.bind(this);
    this.handleAttachmentClicked = this.handleAttachmentClicked.bind(this);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addListener(this);
    this.stateManager.addChangeListenerForName(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.users, this);
    this.stateManager.addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.patientSearch, this);
  }

  static getInstance() {
    if (!ClinicChatDetailView._instance) {
      ClinicChatDetailView._instance = new ClinicChatDetailView();
    }

    return ClinicChatDetailView._instance;
  }

  onDocumentLoaded() {
    // @ts-ignore
    this.chatLogDiv = document.getElementById(ClinicChatDetailView.chatLogId); // @ts-ignore

    this.commentEl = document.getElementById(ClinicChatDetailView.commentId); // @ts-ignore

    this.chatForm = document.getElementById(ClinicChatDetailView.newFormId); // @ts-ignore

    this.sendMessageButton = document.getElementById(ClinicChatDetailView.submitCommentId); // @ts-ignore

    this.priorityEl = document.getElementById(ClinicChatDetailView.priorityId); // @ts-ignore

    this.chatRoomDiv = document.getElementById(ClinicChatDetailView.chatLogRoomId); // @ts-ignore

    this.fastPatientSearch = document.getElementById(ClinicChatDetailView.clinicChatFastPatientSearch);
    this.chatRoomDiv.addEventListener('dragover', event => {
      logger('Dragged over');
      if (this.selectedChatLog) event.preventDefault();
    });
    this.chatRoomDiv.addEventListener('drop', this.handlePatientDrop);
    this.chatForm.addEventListener('submit', this.handleAddMessage);
    this.checkCanComment();
    const fastSearchEl = $(this.fastPatientSearch); // @ts-ignore

    fastSearchEl.on('autocompleteselect', this.handlePatientSelected);
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
    logger(`Chat Log with id ${selectedItem.roomName} deselected`);

    if (this.selectedChatLog && selectedItem.roomName === this.selectedChatLog.roomName) {
      this.selectedChatLog = null;
      this.checkCanComment();
      this.clearChatLog();
    }
  }

  itemSelected(view, selectedItem) {
    this.selectedChatLog = selectedItem;

    if (this.selectedChatLog) {
      logger(`Chat Log with id ${selectedItem.roomName} selected`);
      this.checkCanComment();
      this.renderChatLog(this.selectedChatLog);
    }
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {
    logger(`Chat Log with ${selectedItem.roomName} deleting`);

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

  handlePatientDrop(event) {
    logger('drop event on current chat room');

    if (this.selectedChatLog) {
      // @ts-ignore
      const draggedObjectJSON = event.dataTransfer.getData(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_KEY_ID);
      const draggedObject = JSON.parse(draggedObjectJSON);
      logger(draggedObject);

      if (draggedObject[ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_TYPE] === _AppTypes__WEBPACK_IMPORTED_MODULE_4__.DRAGGABLE.typePatientSummary) {
        // send the patient as an attachment
        const roomName = this.selectedChatLog.roomName;
        const simpleAttachment = {
          identifier: draggedObject._id,
          type: _AppTypes__WEBPACK_IMPORTED_MODULE_4__.DRAGGABLE.typePatientSummary,
          displayText: `${draggedObject.name.firstname} ${draggedObject.name.surname}`,
          iconClasses: 'fas fa-male'
        };
        const sentMessage = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().sendMessage(roomName, simpleAttachment.displayText, ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Priority.Normal, simpleAttachment, {});

        if (sentMessage) {
          // add the message to our display
          const messageEl = this.addChatMessage(sentMessage); // scroll to bottom

          if (messageEl) ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].scrollSmoothTo(messageEl);
        }
      }
    }
  }

  handleChatLogUpdated(log) {
    logger(`Handling chat log updates`);
    this.checkCanComment();
    this.renderChatLog(log);
  }

  handleAddMessage(event) {
    event.preventDefault();
    event.stopPropagation();
    logger(`Handling message event`);

    if (this.selectedChatLog) {
      if (this.commentEl && this.commentEl.value.trim().length === 0) return;
      const messageContent = this.commentEl.value.trim();
      this.commentEl.value = '';
      let priority = parseInt(this.priorityEl.value);
      if (isNaN(priority)) priority = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Priority.Normal;
      const simpleAttachment = {
        identifier: '',
        type: '',
        displayText: ''
      };

      if (this.currentlySelectedPatient) {
        simpleAttachment.identifier = this.currentlySelectedPatient._id;
        simpleAttachment.type = _AppTypes__WEBPACK_IMPORTED_MODULE_4__.DRAGGABLE.typePatientSummary;
        simpleAttachment.displayText = `${this.currentlySelectedPatient.name.firstname} ${this.currentlySelectedPatient.name.surname}`;
        simpleAttachment.iconClasses = 'fas fa-male';
      }

      const sentMessage = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().sendMessage(this.selectedChatLog.roomName, messageContent, priority, simpleAttachment, {});
      logger(sentMessage);

      if (sentMessage) {
        // add the message to our display
        const messageEl = this.addChatMessage(sentMessage); // scroll to bottom

        if (messageEl) ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].scrollSmoothTo(messageEl);
      }

      this.currentlySelectedPatient = null;
      this.fastPatientSearch.value = '';
    }
  }

  addChatMessage(message) {
    let chatMessageEl = null; // ignore "join"/"exit" message?

    if (message.from.trim().length !== 0) {
      chatMessageEl = document.createElement('div');
      ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(chatMessageEl, "message");

      if (message.from === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getCurrentUser()) {
        ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(chatMessageEl, 'my-message');
      } // create and display a time stamp


      const messageSenderEl = document.createElement('div');
      ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(messageSenderEl, 'message-sender');
      messageSenderEl.innerText = message.from + '   ' + moment__WEBPACK_IMPORTED_MODULE_3___default()(message.created, 'YYYYMMDDHHmmss').format('DD/MM/YYYY HH:mm');
      chatMessageEl.appendChild(messageSenderEl); // message content

      const contentEl = document.createElement('div'); // just a text message

      let classesTextAppend = '';

      switch (message.priority) {
        case ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Priority.High:
          {
            classesTextAppend = '-high';
            break;
          }

        case ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Priority.Urgent:
          {
            classesTextAppend = '-urgent';
            break;
          }
      }

      if (message.from === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getCurrentUser()) {
        ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, `my-message-content${classesTextAppend}`);
      } else {
        ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, `message-content${classesTextAppend}`);
      }

      contentEl.innerText = message.message;
      chatMessageEl.appendChild(contentEl);
      this.chatLogDiv.appendChild(chatMessageEl); // do we have a simple attachement?

      if (message.simpleAttachment.identifier.trim().length > 0) {
        chatMessageEl = document.createElement('div');
        ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(chatMessageEl, "message");

        if (message.from === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getCurrentUser()) {
          ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(chatMessageEl, 'my-message');
        } // message content


        const contentEl = document.createElement('div');
        const attachment = message.simpleAttachment; // simple attachment - should be a patient summary

        const attachmentLinkEl = document.createElement('a');
        ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(attachmentLinkEl, [{
          name: 'data-type',
          value: `${attachment.type}`
        }, {
          name: 'data-id',
          value: `${attachment.identifier}`
        }]);
        let buffer = '';

        if (attachment.iconClasses) {
          buffer += `<i class="${attachment.iconClasses}"></i>`;
        }

        buffer += `&nbsp;&nbsp;${attachment.displayText}`;
        attachmentLinkEl.innerHTML = buffer;

        if (message.from === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getCurrentUser()) {
          ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, `my-message-content-${attachment.type}`);
        } else {
          ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, `message-content-${attachment.type}`);
        }

        contentEl.appendChild(attachmentLinkEl);
        attachmentLinkEl.addEventListener('click', this.handleAttachmentClicked);
        chatMessageEl.appendChild(contentEl);
        this.chatLogDiv.appendChild(chatMessageEl);
      }
    }

    return chatMessageEl;
  }

  reRenderChatMessages(chatLog) {
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(this.chatLogDiv);
    let messageEl = null;
    chatLog.messages.forEach(message => {
      messageEl = this.addChatMessage(message);
    }); // scroll to the last message (if any)

    if (messageEl) ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].scrollTo(messageEl);
  }

  renderChatLog(chatLog) {
    logger(`Chat Log ${chatLog.roomName} rendering`);

    if (this.selectedChatLog) {
      if (this.selectedChatLog.roomName === chatLog.roomName) {
        this.selectedChatLog = chatLog;
        ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().touchChatLog(chatLog.roomName); // render the chat conversation

        this.reRenderChatMessages(chatLog);
      }
    }
  }

  handleChatLogsUpdated() {
    if (this.selectedChatLog) {
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName); // render the chat conversation

      this.reRenderChatMessages(this.selectedChatLog);
    }

    this.checkCanComment();
  }

  handleChatStarted(log) {
    this.selectedChatLog = log;
    this.renderChatLog(log);
  }

  stateChanged(managerName, name, newState) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.patientSearch) {
      logger(`Handling patient search results`);
      logger(newState); // load the search names into the search field

      const fastSearchEl = $(this.fastPatientSearch); // for each name, construct the patient details to display and the id referenced

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
    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.chatLog;
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

  handlePatientSelected(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    logger(`Patient ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.value = ui.item.label;
    this.currentlySelectedPatient = _Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.patientSearch, {
      _id: ui.item.value
    });
    logger(this.currentlySelectedPatient);
  }

  handleAttachmentClicked(event) {
    event.preventDefault();
    event.stopPropagation();
    const dataType = event.target.getAttribute("data-type");
    const dataId = event.target.getAttribute("data-id");
    logger(`Handling attachment clicked of type ${dataType} with identifier ${dataId}`);
    this.listeners.forEach(listener => {
      listener.attachmentClicked(dataType, dataId);
    });
  }

  addAttachmentListener(listener) {
    this.listeners.push(listener);
  }

  checkCanComment() {
    if (this.selectedChatLog) {
      if (this.commentEl) this.commentEl.removeAttribute("readonly");
      if (this.commentEl) this.commentEl.removeAttribute("disabled");
      if (this.sendMessageButton) this.sendMessageButton.removeAttribute("disabled");
      if (this.fastPatientSearch) this.fastPatientSearch.removeAttribute("disabled");
      if (this.priorityEl) this.priorityEl.removeAttribute("disabled");
    } else {
      if (this.commentEl) this.commentEl.setAttribute("readonly", "true");
      if (this.commentEl) this.commentEl.setAttribute("disabled", "true");
      if (this.sendMessageButton) this.sendMessageButton.setAttribute("disabled", "true");
      if (this.fastPatientSearch) this.fastPatientSearch.setAttribute("disabled", "true");
      if (this.priorityEl) this.priorityEl.setAttribute("disabled", "true");
    }
  }

  clearChatLog() {
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(this.chatLogDiv);
  }

  foundResult(managerName, name, foundItem) {}

}

/***/ }),

/***/ "./src/clinic-chat/ClinicChatListView.ts":
/*!***********************************************!*\
  !*** ./src/clinic-chat/ClinicChatListView.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicChatListView": () => (/* binding */ ClinicChatListView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");



const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('clinic-chat-list-view');
const dLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('clinic-chat-list-view:detail');
class ClinicChatListView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'chatLogs',
      dataSourceId: ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.chatLogs
    },
    resultsElement: {
      type: 'a',
      attributes: [{
        name: 'href',
        value: '#'
      }],
      classes: 'list-group-item my-list-item truncate-notification list-group-item-action'
    },
    keyId: 'roomName',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.KeyType.string,
    modifiers: {
      normal: '',
      inactive: 'list-group-item-dark',
      active: 'list-group-item-primary',
      warning: ''
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElement: {
        type: 'span',
        classes: 'mb-1'
      },
      select: true,
      delete: {
        classes: 'btn bg-danger text-white btn-circle btn-sm',
        iconClasses: 'text-black fas fa-sign-out-alt'
      },
      badge: {
        type: 'span',
        classes: 'badge badge-pill badge-primary mr-1'
      },
      secondBadge: {
        type: 'span',
        classes: 'badge badge-pill badge-warning mr-1'
      },
      thirdBadge: {
        type: 'span',
        classes: 'badge badge-pill badge-danger mr-1'
      },
      icons: (name, item) => {
        const results = [];

        if (item.users.length == 2) {
          const filter = {
            attributeName: 'username',
            value: item.users[1],
            comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ComparisonType.equals
          }; // find the user in the state

          const users = _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().findItemsInState(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.users, [filter]);
          dLogger(`Found users with filter`);
          dLogger(users);

          if (users && users.length > 0) {
            const user = users[0];
            dLogger(`Getting icons for user`);
            dLogger(user);

            if (user.isAdmin) {
              results.push("fas fa-user-cog");
            }

            if (user.providerNo.trim().length > 0) {
              results.push("fas fa-user-md");
            }
          }
        }

        return results;
      }
    },
    sorter: ClinicChatListView.sort
  };
  selectedChatLog = null;
  doNotDisturbEl = null;

  static sort(item1, item2) {
    let result = -1;
    if (item1.name > item2.name) result = 1;
    return result;
  }

  constructor() {
    super(ClinicChatListView.DOMConfig, new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.MemoryBufferStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameRoom), ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.chatLogs);
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ListViewRenderer(this, this); // handler binding

    this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
    this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
    this.handleChatStarted = this.handleChatStarted.bind(this);
    this.stateChanged = this.stateChanged.bind(this);
    this.toggleDoNotDisturb = this.toggleDoNotDisturb.bind(this);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addListener(this);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().addUserListener(this); // load all users into the list view

    _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addChangeListenerForName(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.users, this);
  }

  static getInstance() {
    if (!ClinicChatListView._instance) {
      ClinicChatListView._instance = new ClinicChatListView();
    }

    return ClinicChatListView._instance;
  }

  toggleDoNotDisturb(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.doNotDisturbEl) {
      logger(`Toggling Do Not Disturb ${this.doNotDisturbEl.checked}`);
      const doNotDisturb = !this.doNotDisturbEl.checked;
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.NotificationController.getInstance().setOptions({
        showNormalPriorityMessageNotifications: doNotDisturb,
        showHighPriorityMessageNotifications: doNotDisturb,
        showUrgentPriorityMessageNotifications: true,
        showNormalPriorityMessageNotificationsInOS: doNotDisturb,
        showHighPriorityMessageNotificationsInOS: doNotDisturb,
        showUrgentPriorityMessageNotificationsInOS: true,
        showInvitationDeclinedNotifications: false,
        showInvitedNotifications: false,
        showOfflineMessageNotification: true,
        showFavouriteUserLoggedInNotification: false,
        showFavouriteUserLoggedOutNotification: false,
        showUserJoinLeaveChatNotification: false
      });
    }
  }

  handleLoggedInUsersUpdated(usernames) {
    logger(`Handling logged in users changed`);
    this.updateStateManager();
  }

  handleFavouriteUserLoggedIn(username) {
    logger(`Handling logged in users changed`);
    this.updateStateManager();
  }

  handleFavouriteUserLoggedOut(username) {
    logger(`Handling logged in users changed`);
    this.updateStateManager();
  }

  handleFavouriteUsersChanged(usernames) {}

  handleBlockedUsersChanged(usernames) {}

  compareItemsForEquality(item1, item2) {
    return (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameRoom)(item1, item2);
  }

  handleNewInviteReceived(invite) {
    return true;
  }

  handleChatLogUpdated(log) {
    logger(`Handling chat log updates`);
    this.updateStateManager();
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.doNotDisturbEl = document.getElementById('doNotDisturb'); // if (this.doNotDisturbEl) {
    //     // @ts-ignore
    //     mobiscroll5.enhance(this.doNotDisturbEl);
    // }

    this.doNotDisturbEl.addEventListener('change', this.toggleDoNotDisturb);
    this.addEventCollectionListener(this);
    this.updateStateManager();
  }

  getIdForItemInNamedCollection(name, item) {
    return item.roomName;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    const chatLog = item;

    if (chatLog.users.length > 1) {
      containerEl.innerHTML = chatLog.users[1] + "&nbsp;&nbsp;&nbsp;";
    } else {
      containerEl.innerHTML = 'Chat closed by other user';
    }
  }

  getModifierForItemInNamedCollection(name, item) {
    dLogger('Checking modifiers for item');
    dLogger(item);
    let result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive;

    if (item.users.length == 2) {
      // if the user is currently logged out make the item inactive
      dLogger(`user ${item.users[1]} is logged in? ${ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().isUserLoggedIn(item.users[1])}`);

      if (ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().isUserLoggedIn(item.users[1])) {
        result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.active;
      }
    }

    if (this.selectedChatLog) {
      if (this.selectedChatLog.roomName === item.roomName) {
        result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
      }
    }

    return result;
  }

  getSecondaryModifierForItemInNamedCollection(name, item) {
    return this.getModifierForItemInNamedCollection(name, item);
  }

  selectChatRoom(roomName) {
    const room = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getChatLog(roomName);
    this.selectedChatLog = room;
    this.eventForwarder.itemSelected(this, this.selectedChatLog);
    this.updateStateManager();
  }

  handleChatLogsUpdated() {
    if (this.selectedChatLog) {
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName);
    }

    this.updateStateManager();
  }

  handleChatStarted(log) {
    this.selectedChatLog = log;
    this.eventForwarder.itemSelected(this, this.selectedChatLog);
    this.updateStateManager();
  }

  getBadgeValueForItemInNamedCollection(name, item) {
    return item.unreadMessages;
  }

  getSecondaryBadgeValueForItemInNamedCollection(name, item) {
    return item.unreadHighMessages;
  }

  getTertiaryBadgeValueForItemInNamedCollection(name, item) {
    return item.unreadUrgentMessages;
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  itemDeleted(view, selectedItem) {
    logger(`Deleting chat ${selectedItem.roomName}`);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().leaveChat(selectedItem.roomName);

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

  stateChanged(managerName, name, newValue) {
    logger(`Updating state for ${name}`);
    logger(newValue);

    if (name === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.users) {
      // load a chat room for each other user
      newValue.forEach(user => {
        if (user.username !== ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.SecurityManager.getInstance().getLoggedInUsername()) {
          ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().addUserToFavouriteList(user.username);
          ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().startChatWithUser(user.username);
        }
      });
    }

    if (name === ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.chatLogs) {
      super.stateChanged(managerName, name, newValue);
    }
  }

  updateStateManager() {
    logger(`Updating state with chat manager`);
    const newState = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ChatManager.getInstance().getChatLogs();
    logger(newState);
    this.stateManager.setStateByName(ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.chatLogs, newState, true);
  }

}

/***/ }),

/***/ "./src/clinic-chat/ClinicChatSidebar.ts":
/*!**********************************************!*\
  !*** ./src/clinic-chat/ClinicChatSidebar.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicChatSidebar": () => (/* binding */ ClinicChatSidebar)
/* harmony export */ });
/* harmony import */ var _ClinicChatListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClinicChatListView */ "./src/clinic-chat/ClinicChatListView.ts");
/* harmony import */ var _ClinicChatDetailView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClinicChatDetailView */ "./src/clinic-chat/ClinicChatDetailView.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");



class ClinicChatSidebar extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.SidebarViewContainer {
  static SidebarPrefs = {
    id: 'chatSideBar',
    expandedSize: '35%',
    location: ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.SidebarLocation.right
  };
  static SidebarContainers = {
    chatLogs: 'chatLogs',
    chatLog: 'chatLogRoom'
  };

  constructor() {
    super(ClinicChatSidebar.SidebarPrefs);
    const chatView = _ClinicChatListView__WEBPACK_IMPORTED_MODULE_0__.ClinicChatListView.getInstance();
    this.addView(chatView, {
      containerId: ClinicChatSidebar.SidebarContainers.chatLogs
    });
    const chatLogView = _ClinicChatDetailView__WEBPACK_IMPORTED_MODULE_1__.ClinicChatDetailView.getInstance();
    this.addView(chatLogView, {
      containerId: ClinicChatSidebar.SidebarContainers.chatLog
    });
    chatView.addEventListener(chatLogView);
  }

  static getInstance() {
    if (!ClinicChatSidebar._instance) {
      ClinicChatSidebar._instance = new ClinicChatSidebar();
    }

    return ClinicChatSidebar._instance;
  }

}

/***/ }),

/***/ "./src/helper/AppointmentControllerHelper.ts":
/*!***************************************************!*\
  !*** ./src/helper/AppointmentControllerHelper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentControllerHelper": () => (/* binding */ AppointmentControllerHelper)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DurationFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DurationFunctions */ "./src/DurationFunctions.ts");






const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('appointment-controller-helper');
class AppointmentControllerHelper {
  static APPOINTMENT_STATUS_ARRIVED = 'Patient Arrived';
  static APPOINTMENT_STATUS_READY_FOR_BILLING = 'Ready For Billing';
  static APPOINTMENT_STATUS_BILLING_COMPLETE = 'Billing Complete';
  static APPOINTMENT_TYPE_PATIENT_CANCELLED = 'Patient Cancelled';
  static APPOINTMENT_TYPE_PATIENT_DNA = 'Did Not Arrive';
  appointmentTypes = [];
  clinicConfig = null;
  patientSearch = [];
  providers = [];
  listeners = [];

  constructor() {
    _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.clinicConfig, this);
    _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.appointmentTypes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch, this);
    _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.providers, this);
    this.handleAppointmentTemplateRendering = this.handleAppointmentTemplateRendering.bind(this);
    this.handleAppointmentRendering = this.handleAppointmentRendering.bind(this);
  }

  static getInstance() {
    if (!AppointmentControllerHelper._instance) {
      AppointmentControllerHelper._instance = new AppointmentControllerHelper();
    }

    return AppointmentControllerHelper._instance;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  haveAppointentTypesLoaded() {
    return this.appointmentTypes.length > 0;
  }

  havePatientSearchesLoaded() {
    return this.patientSearch.length > 0;
  }

  haveProvidersLoaded() {
    return this.providers.length > 0;
  }

  hasClinicConfigLoaded() {
    return this.clinicConfig;
  }

  getAppointmentTypes() {
    return this.appointmentTypes;
  }

  getPatientSearch() {
    return this.patientSearch;
  }

  getProviders() {
    return this.providers;
  }

  getClinicConfig() {
    if (this.clinicConfig) {
      const config = JSON.parse(JSON.stringify(this.clinicConfig));
      return config;
    } else {
      const options = {
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
      return options;
    }
  }

  getIconForAppointmentType(appointmentType) {
    logger(`Getting icon for appoint type ${appointmentType}`);
    let result = ``;

    if (this.appointmentTypes) {
      const foundIndex = this.appointmentTypes.findIndex(type => type.name === appointmentType);

      if (foundIndex >= 0) {
        if (this.appointmentTypes[foundIndex].icon) {
          result = `<i class="md-custom-event-icon ${this.appointmentTypes[foundIndex].icon}"></i>`;
        }
      }
    }

    return result;
  }

  getIconsForEvent(event) {
    let buffer = '';

    if (event.arrivalTime) {
      if (event.arrivalTime.trim().length > 0) {
        buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_ARRIVED);
      }
    }

    if (event.readyForBilling) {
      buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_READY_FOR_BILLING);
    }

    if (event.isBilled) {
      buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_BILLING_COMPLETE);
    }

    buffer += this.getIconForAppointmentType(event.type);
    return buffer;
  }

  getColourForAppointmentType(appointmentType) {
    let result = `#333333`;

    if (this.appointmentTypes) {
      const foundIndex = this.appointmentTypes.findIndex(type => type.name === appointmentType);
      if (foundIndex >= 0) result = this.appointmentTypes[foundIndex].colour;
    }

    return result;
  }

  getColourForAppointmentTemplate(appointment) {
    return this.getColourForAppointmentType(appointment.type);
  }

  getColourForAppointment(appointment) {
    let colour = this.getColourForAppointmentType(appointment.type);

    if (appointment.arrivalTime) {
      if (appointment.arrivalTime.trim().length > 0) {
        colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_ARRIVED);
      }
    }

    if (appointment.readyForBilling || appointment.isBilled || appointment.isCancelled || appointment.isDNA) {
      if (appointment.readyForBilling) {
        colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_READY_FOR_BILLING);
      }

      if (appointment.isBilled) {
        colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_BILLING_COMPLETE);
      }

      if (appointment.isCancelled) {
        colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_CANCELLED);
      }

      if (appointment.isDNA) {
        colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_DNA);
      }
    }

    return colour;
  }

  getEventForAppointment(loadDate, appointment) {
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYYMMDD'));
    const canEdit = loadDate >= today && !appointment.isDNA && !appointment.isCancelled && !appointment.isBilled;
    const timeString = (0,_DurationFunctions__WEBPACK_IMPORTED_MODULE_5__.computeTimeStringFromStartTimeAndDurationInSeconds)(appointment.time, appointment.duration);
    const result = {
      id: appointment._id,
      start: moment__WEBPACK_IMPORTED_MODULE_4___default()(`${loadDate}${appointment.time}`, 'YYYYMMDDHHmmss'),
      end: moment__WEBPACK_IMPORTED_MODULE_4___default()(`${loadDate}${timeString}`, 'YYYYMMDDHHmm'),
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

  getAppointmentFromEvent(event) {
    const start = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start).format('YYYYMMDD'));
    const time = moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start).format('HHmmss');
    const duration = moment__WEBPACK_IMPORTED_MODULE_4___default()(event.end).diff(moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start), 'seconds');
    const appointment = {
      _id: event.id,
      name: event.title,
      note: event.description,
      start: start,
      time: time,
      duration: duration,
      _patient: event.patientId,
      isDNA: event.isDNA,
      isCancelled: event.isCancelled,
      createdBy: ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.SecurityManager.getInstance().getLoggedInUsername(),
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

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "Appointment Controller Helper";
  }

  stateChanged(managerName, name, newValue) {
    logger(`Handling state changed ${name}`);

    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.clinicConfig:
        {
          this.clinicConfig = newValue[0];
          this.listeners.forEach(listener => {
            const config = JSON.parse(JSON.stringify(this.clinicConfig));
            listener.loadedClinicAppointmentBookConfig(config);
          });
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch:
        {
          this.patientSearch = newValue;
          this.listeners.forEach(listener => listener.loadedPatientSearch(this.patientSearch));
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.appointmentTypes:
        {
          this.appointmentTypes = newValue;
          let nonStatusAppointmentTypes = [];
          this.appointmentTypes.forEach(type => {
            if (!type.isStatus) nonStatusAppointmentTypes.push(type.name);
          });
          this.listeners.forEach(listener => listener.loadedAppointmentTypes(nonStatusAppointmentTypes));
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.providers:
        {
          this.providers = newValue;
          this.listeners.forEach(listener => listener.loadedProviders(this.providers));
          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.appointmentTypes:
        {
          this.appointmentTypes = _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().getStateByName(name);
          let nonStatusAppointmentTypes = [];
          this.appointmentTypes.forEach(type => {
            if (!type.isStatus) nonStatusAppointmentTypes.push(type.name);
          });
          this.listeners.forEach(listener => listener.loadedAppointmentTypes(nonStatusAppointmentTypes));
          this.listeners.forEach(listener => listener.refreshDisplay());
          break;
        }
    }
  }

  getEventForAppointmentTemplateForDate(startDate, dayNumber, template) {
    logger(`Creating event for appointment template on date ${startDate} with ${dayNumber}`);
    logger(template);
    if (template.day < dayNumber) return null;
    const loadDate = startDate + (template.day - dayNumber);
    const timeString = (0,_DurationFunctions__WEBPACK_IMPORTED_MODULE_5__.computeTimeStringFromStartTimeAndDurationInSeconds)(template.time, template.duration);
    const result = {
      id: template._id,
      start: moment__WEBPACK_IMPORTED_MODULE_4___default()(`${startDate}${template.time}`, 'YYYYMMDDHHmmss'),
      end: moment__WEBPACK_IMPORTED_MODULE_4___default()(`${startDate}${timeString}`, 'YYYYMMDDHHmm'),
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

  getAppointmentTemplateFromEvent(event) {
    const day = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start).format('d'));
    const time = moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start).format('HHmmss');
    const duration = moment__WEBPACK_IMPORTED_MODULE_4___default()(event.end).diff(moment__WEBPACK_IMPORTED_MODULE_4___default()(event.start), 'seconds');
    const appointment = {
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

  handleAppointmentTemplateRendering(data) {
    logger(`Rendering event`);
    logger(data);
    const icons = AppointmentControllerHelper.getInstance().getIconForAppointmentType(data.original.type);
    logger(`Applicable icons`);
    logger(icons);
    let buffer = '' + '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' + '  <div class="md-custom-event-wrapper">' + '    <div class="container-fluid">' + '    <div class="row">' + `      <div style="background:${data.color}" class="col-12 md-custom-event-template-type">${data.original.type}</div>` + '    </div>' + '    <div class="row">' + '      <div class="col-12 d-flex w-100 justify-content-between md-custom-event-time">' + `        <span>${data.start} - ${data.end}</span>`;

    if (icons.trim().length > 0) {
      buffer += '' + `        <span class="md-custom-event-img-cont">${icons}</span>` + '      </div>';
    }

    buffer += '' + '  </div>' + '</div>';
    return buffer;
  }

  handleAppointmentRendering(data) {
    logger(`Rendering event`);
    logger(data);
    const icons = AppointmentControllerHelper.getInstance().getIconsForEvent(data.original);
    logger(`Applicable icons`);
    logger(icons);
    let buffer = '' + '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' + '  <div class="md-custom-event-wrapper">' + '    <div class="container-fluid">' + '    <div class="row ">' + `       <div style="background:${data.color}" class="col-12 md-custom-event-type">${data.original.type}</div>` + '    </div>' + '    <div class="row "> ' + `       <div class="col-sm-4 col-md-6 col-lg-12 md-custom-event-title">${data.title}</div>` + '       <div class="col-sm-6 col-md-4 col-lg-12 d-flex w-100 justify-content-between md-custom-event-time">' + `        <span>${data.start} - ${data.end}</span>`;

    if (icons.trim().length > 0) {
      buffer += '' + `        <span class="md-custom-event-img-cont">${icons}</span>` + '      </div>' + '    </div>';
    } //if (data.original.patientId) buffer += '</div><div class="row"><div class="col-12"><button mbsc-button class="md-custom-event-btn" data-color="dark" data-variant="outline">Patient</button></div></div>';


    buffer += '</div>' + '  </div>' + '</div>';
    return buffer;
  }

  foundResult(managerName, name, foundItem) {}

}

/***/ }),

/***/ "./src/model/PatientObjectDefinitions.ts":
/*!***********************************************!*\
  !*** ./src/model/PatientObjectDefinitions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientObjectDefinitions": () => (/* binding */ PatientObjectDefinitions)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('patient-defs');
class PatientObjectDefinitions {
  static loadPatientDefinitions() {
    // Patient name details
    const nameDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.name, 'Name', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "title", "Title", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.choice, false, "Name", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SimpleValueDataSource([{
      name: '',
      value: ''
    }, {
      name: 'Master',
      value: 'Master'
    }, {
      name: 'Miss',
      value: 'Miss'
    }, {
      name: 'Ms',
      value: 'Ms'
    }, {
      name: 'Mr',
      value: 'Mr'
    }, {
      name: 'Mrs',
      value: 'Mrs'
    }]));
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "firstname", "First Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "First name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "middlename", "Middle Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Middle name(s)");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "surname", "Surname", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Surname");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "aka", "AKA", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Also known as");
    logger(`Name type data object definition`);
    logger(nameDef); // Patient contact details

    const contactDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.contact, 'Contact', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line1", "Line 1", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Address line 1");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line2", "Line 2", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Address line 2");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "suburb", "Suburb", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Suburb");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "postcode", "Post Code", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer, true, "Post code");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "state", "State", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.choice, true, "State", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SimpleValueDataSource([{
      name: 'Australia Capital Territory',
      value: 'ACT'
    }, {
      name: 'Queensland',
      value: 'QLD'
    }, {
      name: 'South Australia',
      value: 'SA'
    }, {
      name: 'Tasmania',
      value: 'TAS'
    }, {
      name: 'Victoria',
      value: 'VIC'
    }, {
      name: 'Western Australia',
      value: 'WA'
    }]));
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "country", "Country", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Country");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "home", "Home Phone", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Home phone");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "work", "Work Phone", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Work phone");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "mobile", "Mobile Phone", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, true, "Mobile phone");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokname", "NOK Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Next of kin name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokphone", "NOK Phone", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Next of kin phone");
    logger(`Contact type data object definition`);
    logger(contactDef); // Patient identifiers details

    const identifiersDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.identifiers, 'Contact', true, true, false, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicare", "Medicare", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Medicare number");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicareRef", "Medicare Ref", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Medicare reference number");
    let fieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "legacyId", "Legacy Id", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.id, false, "Legacy Id");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dva", "DVA", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "DVA number");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dvaColour", "DVA Colour", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.choice, false, "DVA colour", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SimpleValueDataSource([{
      name: '',
      value: ''
    }, {
      name: 'White',
      value: 'white'
    }, {
      name: 'Gold',
      value: 'gold'
    }]));
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "hcc", "HCC", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Health Care Card");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "ihi", "IHI", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer, false, "Individual health identifier");
    logger(`Identifiers type data object definition`);
    logger(identifiersDef); // Patient identifiers details

    const basicsDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.basics, 'Basics', true, true, true, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "dob", "DOB", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.date, true, "Date of birth");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "dod", "DOD", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.date, false, "Date of death");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "gender", "Gender", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.choice, true, "Gender", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SimpleValueDataSource([{
      name: 'Female',
      value: 'F'
    }, {
      name: 'Male',
      value: 'M'
    }, {
      name: 'Non-binary',
      value: 'N'
    }, {
      name: 'Not stated',
      value: 'S'
    }]));
    fieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "lastSeen", "Last Seen", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.date, false, "Last seen");
    fieldDef.displayOnly = true;
    fieldDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "lastSeenBy", "Last Seen By", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Last seen by");
    fieldDef.displayOnly = true;
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "ethnicity", "Ethnicity", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Ethnicity");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "countryofbirth", "Birth Country", ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FieldType.text, false, "Country of birth");
    logger(`Basics type data object definition`);
    logger(basicsDef);
  }

}

/***/ }),

/***/ "./src/patients/OpenPatientsView.ts":
/*!******************************************!*\
  !*** ./src/patients/OpenPatientsView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenPatientsView": () => (/* binding */ OpenPatientsView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _PatientController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PatientController */ "./src/patients/PatientController.ts");




const vLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('open-patients');
const vLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('open-patients-details');
class OpenPatientsView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.AbstractStatefulCollectionView {
  static ACTION_CLOSE = 'Close Record';
  static ACTION_SAVE = 'Save';
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'openPatientRecords',
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_NAME.openPatients,
      drop: {
        acceptFrom: [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.DRAGGABLE.fromPatientSearch],
        acceptTypes: [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.DRAGGABLE.typePatientSummary]
      }
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
      normal: 'list-group-item-light',
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
      select: true
    },
    extraActions: [{
      name: OpenPatientsView.ACTION_SAVE,
      button: {
        classes: 'btn bg-primary text-white btn-circle btn-sm mr-1',
        iconClasses: 'fas fa-save'
      },
      confirm: false
    }, {
      name: OpenPatientsView.ACTION_CLOSE,
      button: {
        classes: 'btn bg-warning text-white btn-circle btn-sm mr-1',
        iconClasses: 'fas fa-door-closed'
      },
      confirm: true
    }],
    sorter: OpenPatientsView.sortPatients
  };

  constructor() {
    super(OpenPatientsView.DOMConfig, _PatientController__WEBPACK_IMPORTED_MODULE_3__.PatientController.getInstance().getStateManager(), _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.openPatients);
    OpenPatientsView._instance = this;
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ListViewRendererUsingContext(this, this);
    this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
    this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
    this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
    this.getItemInNamedCollection = this.getItemInNamedCollection.bind(this);
    this.getItemId = this.getItemId.bind(this);
    this.getModifierForItemInNamedCollection = this.getModifierForItemInNamedCollection.bind(this);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.openPatients, 'Open Patient Records');
  }

  static getInstance() {
    if (!OpenPatientsView._instance) {
      OpenPatientsView._instance = new OpenPatientsView();
    }

    return OpenPatientsView._instance;
  }

  static sortPatients(item1, item2) {
    let result = -1;
    if (item1.name.firstname > item2.name.firstname) result = 1;
    return result;
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  getItemInNamedCollection(name, compareWith) {
    let result = this.stateManager.findItemInState(name, compareWith);
    return result;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = `${item.name.firstname} ${item.name.surname}`;
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
    vLoggerDetail(`Checking for item modifiers`);
    vLoggerDetail(item);
    if (item.decorator === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.Decorator.Modified) result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning;
    return result;
  }

  compareItemsForEquality(item1, item2) {
    return (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameMongo)(item1, item2);
  }

}

/***/ }),

/***/ "./src/patients/PatientController.ts":
/*!*******************************************!*\
  !*** ./src/patients/PatientController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientController": () => (/* binding */ PatientController)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _OpenPatientsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OpenPatientsView */ "./src/patients/OpenPatientsView.ts");
/* harmony import */ var _PatientRecordTabularView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PatientRecordTabularView */ "./src/patients/PatientRecordTabularView.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App */ "./src/App.tsx");
/* harmony import */ var _clinic_chat_ClinicChatDetailView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../clinic-chat/ClinicChatDetailView */ "./src/clinic-chat/ClinicChatDetailView.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('patient-controller');
class PatientController {
  listeners = [];

  constructor() {
    this.stateManager = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.MemoryBufferStateManager(ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.isSameMongo);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patients, this);
    this.stateManager.addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, this);
  }

  static getInstance() {
    if (!PatientController._instance) {
      PatientController._instance = new PatientController();
    }

    return PatientController._instance;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  getStateManager() {
    return this.stateManager;
  }

  openPatientRecordWithPatientId(patientId) {
    logger(`Handling opening patient record ${patientId}`);
    let patient = this.stateManager.findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, {
      _id: patientId
    });

    if (!patient._id) {
      // not found
      patient = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch, {
        _id: patientId
      }));
      patient.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Incomplete;
    }

    this.openPatientRecord(patient);
  }

  openPatientRecord(patient) {
    logger(`Handling opening patient record`);
    logger(patient); // previously opened

    if (patient.decorator === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Incomplete) {
      _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patients, patient);
    } else {
      // make a copy
      patient = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(patient);
      patient.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Complete;
    }

    _App__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().handleShowPatientRecord(null);
    this.listeners.forEach(listener => listener.patientSelected(patient));
  }

  _closeRecord(patient) {
    logger(`patient ${patient.name.firstname} with id ${patient._id} closing - closing`);
    PatientController.getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, patient, true);
    this.listeners.forEach(listener => listener.patientClosed(patient));
  }

  closePatientRecord(patient) {
    // has the patient changed?
    if (patient.decorator) {
      if (patient.decorator === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Modified) {
        logger(`Patient marked as modified`);
        ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AlertManager.getInstance().startAlert(this, 'Patient Records', `Patient ${patient.name.firstname} ${patient.name.surname} has changes.  Do you want to discard those changes?`, {
          patient: patient
        });
      } else {
        this._closeRecord(patient);
      }
    } else {
      this._closeRecord(patient);
    }
  }

  savePatientRecord(patient) {
    logger(`saving patient ${patient.name.firstname} ${patient.name.surname} with id ${patient._id}`);
    logger((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(patient));
    delete patient.decorator;
    delete patient.oldContact;
    patient.modified = parseInt(moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYYMMDDHHmmss'));
    patient.modifiedBy = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().getLoggedInUsername();
    const copyOfPatient = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(patient);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.RESTApiStateManager.getInstance().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patients, copyOfPatient, false);
    patient.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Complete;
    PatientController.getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, patient, true);
    logger(patient);
  }

  onDocumentLoaded() {
    _OpenPatientsView__WEBPACK_IMPORTED_MODULE_4__.OpenPatientsView.getInstance().addEventCollectionListener(this);
    _clinic_chat_ClinicChatDetailView__WEBPACK_IMPORTED_MODULE_7__.ClinicChatDetailView.getInstance().addAttachmentListener(this);
  }

  stateChanged(managerName, name, newValue) {}

  foundResult(managerName, name, foundItem) {
    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patients:
        {
          foundItem.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Complete;
          logger(`Found Result - patient loaded - adding to open patients`);
          logger(foundItem); // found new patient to add to buffer

          if (this.isPatientInOpenList(foundItem._id)) {
            this.stateManager.updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, foundItem, true);
          } else {
            this.stateManager.addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, foundItem, true);
          }

          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {
    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients:
        {
          // found new patient in buffer, let listeners know
          logger(`Item Added - patient loaded - added to open patients - informing listeners`);
          logger(itemAdded);
          this.listeners.forEach(listener => listener.patientLoaded(itemAdded));
          break;
        }
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients:
        {
          switch (itemNewValue.decorator) {
            case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Complete:
              {
                logger('Item Updated - Patient is complete, sending patient loaded');
                this.listeners.forEach(listener => listener.patientLoaded(itemNewValue));
                break;
              }

            case _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Modified:
              {
                logger('Item Updated - Patient is modified, sending patient changed');
                this.listeners.forEach(listener => listener.patientChanged(itemNewValue));
                break;
              }
          }
        }
    }
  }

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  getListenerName() {
    return 'Patient Controller';
  }

  filterResults(managerName, name, filterResults) {}

  canDeleteItem(view, selectedItem) {
    return false;
  }

  canSelectItem(view, selectedItem) {
    return true;
  }

  documentLoaded(view) {}

  hideRequested(view) {}

  showRequested(view) {}

  itemDeleted(view, selectedItem) {}

  itemDeselected(view, selectedItem) {}

  itemDragStarted(view, selectedItem) {}

  itemAction(view, actionName, selectedItem) {
    logger(`Handling action ${actionName} selected item`);
    logger(selectedItem);

    if (actionName === _OpenPatientsView__WEBPACK_IMPORTED_MODULE_4__.OpenPatientsView.ACTION_CLOSE) {
      this.closePatientRecord(selectedItem);
    }

    if (actionName === _OpenPatientsView__WEBPACK_IMPORTED_MODULE_4__.OpenPatientsView.ACTION_SAVE) {
      this.savePatientRecord(selectedItem);
    }
  }

  itemDropped(view, droppedItem) {
    logger(`Handling drop of item`);
    logger(droppedItem);
    this.openPatientRecordWithPatientId(droppedItem._id);
  }

  itemSelected(view, selectedItem) {
    logger(`Handling selected item`);
    logger(selectedItem);
    _PatientRecordTabularView__WEBPACK_IMPORTED_MODULE_5__.PatientRecordTabularView.getInstance().selectTab(_PatientRecordTabularView__WEBPACK_IMPORTED_MODULE_5__.PatientRecordTabularView.TAB_DEMOGRAPHICS);
    this.openPatientRecord(selectedItem);
  }

  isPatientInOpenList(patientId) {
    let patient = this.stateManager.findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, {
      _id: patientId
    });
    return patient._id;
  }

  attachmentClicked(dataType, dataIdentifier) {
    if (dataType === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.typePatientSummary) {
      this.openPatientRecordWithPatientId(dataIdentifier);
    }
  }

  completed(event) {
    if (event.outcome === ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AlertType.confirmed) {
      this._closeRecord(event.context.patient);
    }
  }

}

/***/ }),

/***/ "./src/patients/PatientRecordTabularView.ts":
/*!**************************************************!*\
  !*** ./src/patients/PatientRecordTabularView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientRecordTabularView": () => (/* binding */ PatientRecordTabularView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");

class PatientRecordTabularView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.TabularViewContainer {
  static TAB_DEMOGRAPHICS = 'demographics';
  static TAB_CONSULTS = 'consults';
  static TAB_SCRIPTS = 'scripts';
  static TAB_RESULTS = 'results';
  static TAB_DOCUMENTS = 'documents';
  static TAB_VACCINATIONS = 'vaccinations';
  static TAB_WORKCOVER = 'workcover';
  static TAB_TASKS = 'tasks';
  static TAB_ARCHIVE = 'archive';
  static config = {
    containedById: 'patientRecord',
    containerId: 'patientRecordTabularView',
    tabViewContainer: {
      type: 'div',
      classes: 'row'
    },
    tabBarContainer: {
      type: 'div',
      classes: 'col-12'
    },
    tabBarElement: {
      type: 'ul',
      classes: 'nav nav-pills nav-fill'
    },
    tabularViewContainer: {
      type: 'div',
      classes: 'col-12'
    },
    tabs: [{
      id: PatientRecordTabularView.TAB_DEMOGRAPHICS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Demographics'
      },
      isDefaultActive: true
    }, {
      id: PatientRecordTabularView.TAB_CONSULTS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'History and Consults'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_SCRIPTS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Allergies and Scripts'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_RESULTS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Results'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_DOCUMENTS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Documents and Letters'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_VACCINATIONS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Vaccinations'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_WORKCOVER,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Workcover'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_TASKS,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Tasks'
      },
      isDefaultActive: false
    }, {
      id: PatientRecordTabularView.TAB_ARCHIVE,
      element: {
        type: 'li',
        classes: 'nav-item'
      },
      subElement: {
        type: 'a',
        classes: 'nav-link',
        attributes: [{
          name: 'href',
          value: '#'
        }],
        innerHTML: 'Script Archive'
      },
      isDefaultActive: false
    }]
  };

  constructor() {
    super(PatientRecordTabularView.config);
  }

  static getInstance() {
    if (!PatientRecordTabularView._instance) {
      PatientRecordTabularView._instance = new PatientRecordTabularView();
    }

    return PatientRecordTabularView._instance;
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
/* harmony import */ var _OpenPatientsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenPatientsView */ "./src/patients/OpenPatientsView.ts");




class PatientSearchSidebar extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.SidebarViewContainer {
  constructor() {
    super(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.PatientSearchSidebarPrefs);
    const recentSearches = new _PatientSearchView__WEBPACK_IMPORTED_MODULE_2__.PatientSearchView();
    this.addView(recentSearches, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.PatientSearchSidebarContainers.container
    });
    const openPatients = new _OpenPatientsView__WEBPACK_IMPORTED_MODULE_3__.OpenPatientsView();
    this.addView(openPatients, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.PatientSearchSidebarContainers.openRecords
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
/* harmony import */ var _PatientController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PatientController */ "./src/patients/PatientController.ts");





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
    },
    extraActions: [{
      name: 'Open Record',
      button: {
        classes: 'btn bg-primary text-white btn-circle btn-sm',
        iconClasses: 'fas fa-clipboard-list'
      },
      confirm: false
    }]
  };

  constructor() {
    super(PatientSearchView.DOMConfig, _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager(), _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch);
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.ListViewRenderer(this, this); // handler binding

    this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
    this.eventPatientSelected = this.eventPatientSelected.bind(this);
    this.itemDeleted = this.itemDeleted.bind(this); // register state change listening

    this.localisedSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.BrowserStorageStateManager(true, true, ui_framework_jps__WEBPACK_IMPORTED_MODULE_1__.isSameMongo);
    this.localisedSM.addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches, this);
  }

  onDocumentLoaded() {
    super.onDocumentLoaded();
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
    vLogger(`patient ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.value = ui.item.label; // add the selected user to the recent user searches

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

  itemAction(view, actionName, selectedItem) {
    vLogger(`Handling open patient record`);
    _PatientController__WEBPACK_IMPORTED_MODULE_4__.PatientController.getInstance().openPatientRecordWithPatientId(selectedItem._id);
  }

}

/***/ }),

/***/ "./src/today/TodayController.ts":
/*!**************************************!*\
  !*** ./src/today/TodayController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayController": () => (/* binding */ TodayController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");
/* harmony import */ var _TodayView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodayView */ "./src/today/TodayView.ts");
/* harmony import */ var _TodaysPatientsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodaysPatientsView */ "./src/today/TodaysPatientsView.tsx");








const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('today-controller');
class TodayController {
  constructor() {
    this.onPageLoading = this.onPageLoading.bind(this);
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, this);
    _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__.AppointmentControllerHelper.getInstance().addListener(this);
  }

  static getInstance() {
    if (!TodayController._instance) {
      TodayController._instance = new TodayController();
    }

    return TodayController._instance;
  }

  onDocumentLoaded() {
    _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().onDocumentLoaded();
  }

  onPageLoading(event, inst) {
    // load the events for the view
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;
    const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
    logger(`Need to load today (${today})`);
    const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
    const results = [];
    const appointmentsForTheDay = [];
    appointments.forEach(appointment => {
      if (appointment.start === today && appointment.provider === _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getProviderNo()) {
        appointmentsForTheDay.push(appointment);
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__.AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
        results.push(result);
      }
    });
    inst.setEvents(appointmentsForTheDay);
  }

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "Today";
  }

  stateChanged(managerName, name, newValue) {
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;
    logger(`Handling state changed ${name}`);

    switch (name) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments:
        {
          const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));
          const currentProvider = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername();
          logger(`Provider no is ${currentProvider}`);
          const appointments = _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments);
          const results = [];
          appointments.forEach(appointment => {
            if (appointment.start === today) {
              logger(appointment);

              if (appointment.provider === currentProvider) {
                logger(`Found appointment for today and provider ${currentProvider}`); // add the patient in the appointment to the dashboard

                if (appointment._patient) _TodaysPatientsView__WEBPACK_IMPORTED_MODULE_7__.TodaysPatientsView.getInstance().addPatientSummaryById(appointment._patient);
                const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__.AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                logger('Converted to event');
                logger(result);
                results.push(result);
              }
            }
          });
          _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().getCalender().setEvents(results);
          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, appointment) {
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments && appointment.provider === ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('New Appointment inserted by another user');
      logger(appointment);
      const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));

      if (appointment.start === today) {
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__.AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
        logger('Converted to event');
        logger(result); // add the patient in the appointment to the dashboard

        if (appointment._patient) _TodaysPatientsView__WEBPACK_IMPORTED_MODULE_7__.TodaysPatientsView.getInstance().addPatientSummaryById(appointment._patient);
        _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().getCalender().addEvent(result);
      }
    }
  }

  stateChangedItemRemoved(managerName, name, appointment) {
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments && appointment.provider === ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment deleted by another user');
      logger(appointment);
      const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));

      if (appointment.start === today) {
        _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().getCalender().removeEvent([appointment._id]); // remove the patient in the appointment to the dashboard

        if (appointment._patient) _TodaysPatientsView__WEBPACK_IMPORTED_MODULE_7__.TodaysPatientsView.getInstance().removePatient({
          _id: appointment._patient
        });
      }
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, appointment) {
    if (!_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().isProvider()) return;

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments && appointment.provider === ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername()) {
      logger('Appointment updated by another user');
      logger(appointment);
      const today = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYYMMDD'));

      if (appointment.start === today) {
        const result = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_5__.AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
        logger('Converted to event');
        logger(result);
        _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().getCalender().updateEvent(result);
      }
    }
  }

  loadedAppointmentTypes(appointmentTypes) {}

  loadedClinicAppointmentBookConfig(clinicConfig) {
    _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().applyClinicConfig(clinicConfig);
  }

  loadedPatientSearch(patientSearch) {}

  loadedProviders(providers) {}

  refreshDisplay() {
    _TodayView__WEBPACK_IMPORTED_MODULE_6__.TodayView.getInstance().getCalender().refresh();
  }

  foundResult(managerName, name, foundItem) {}

}

/***/ }),

/***/ "./src/today/TodayView.ts":
/*!********************************!*\
  !*** ./src/today/TodayView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayView": () => (/* binding */ TodayView)
/* harmony export */ });
/* harmony import */ var _TodayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodayController */ "./src/today/TodayController.ts");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/AppointmentControllerHelper */ "./src/helper/AppointmentControllerHelper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _patients_PatientController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patients/PatientController */ "./src/patients/PatientController.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");








const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('today-view');
class TodayView {
  calendar = null;
  currentProviderNo = '';

  constructor() {}

  static getInstance() {
    if (!TodayView._instance) {
      TodayView._instance = new TodayView();
    }

    return TodayView._instance;
  }

  getCalender() {
    return this.calendar;
  }

  onDocumentLoaded() {
    if (!_Controller__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance().isProvider()) return;
    this.currentProviderNo = ui_framework_jps__WEBPACK_IMPORTED_MODULE_7__.SecurityManager.getInstance().getLoggedInUsername();
    const options = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_3__.AppointmentControllerHelper.getInstance().getClinicConfig();
    logger('Using clinic config options');
    const day = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('d'));
    options.view.startDay = day;
    options.view.endDay = day;
    options.clickToCreate = false;
    options.dragToCreate = false;
    options.dragToMove = false;
    options.dragToResize = false;
    options.min = new Date();
    options.showControls = false; //options.resources = [this.currentProviderNo];
    //options.groupBy = 'date';

    options.onPageLoading = (event, inst) => {
      _TodayController__WEBPACK_IMPORTED_MODULE_0__.TodayController.getInstance().onPageLoading(event, inst);
    };

    options.renderHeader = function () {
      return `<div class="my-custom-title"><strong>${moment__WEBPACK_IMPORTED_MODULE_4___default()().format('ddd DD')}</strong></div>`;
    };

    options.onEventClick = args => {
      logger(args.event);

      if (args.event.patientId) {
        _patients_PatientController__WEBPACK_IMPORTED_MODULE_6__.PatientController.getInstance().openPatientRecordWithPatientId(args.event.patientId);
      }
    };

    options.renderScheduleEvent = _helper_AppointmentControllerHelper__WEBPACK_IMPORTED_MODULE_3__.AppointmentControllerHelper.getInstance().handleAppointmentRendering; // @ts-ignore

    this.calendar = (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_1__.eventcalendar)(document.getElementById("todayDetail"), options);
  }

  applyClinicConfig(clinicConfig) {
    if (this.calendar) {
      this.currentProviderNo = ui_framework_jps__WEBPACK_IMPORTED_MODULE_7__.SecurityManager.getInstance().getLoggedInUsername();
      logger('State changed, using clinic config options');
      const day = parseInt(moment__WEBPACK_IMPORTED_MODULE_4___default()().format('d'));
      clinicConfig.view.startDay = day;
      clinicConfig.view.endDay = day;
      clinicConfig.clickToCreate = false;
      clinicConfig.dragToCreate = false;
      clinicConfig.dragToMove = false;
      clinicConfig.dragToResize = false;
      clinicConfig.min = new Date();
      clinicConfig.showControls = false; //clinicConfig.resources = [this.currentProviderNo];
      //clinicConfig.groupBy = 'date';

      this.calendar.setOptions(clinicConfig);
    }
  }

}

/***/ }),

/***/ "./src/users/UserValidationHelper.ts":
/*!*******************************************!*\
  !*** ./src/users/UserValidationHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserValidationHelper": () => (/* binding */ UserValidationHelper)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('user-validation-helper');
class UserValidationHelper {
  constructor() {}

  static getInstance() {
    if (!UserValidationHelper._instance) {
      UserValidationHelper._instance = new UserValidationHelper();
    }

    return UserValidationHelper._instance;
  }

  setupValidationForDetailsForm(form) {
    /*
    *
    * Create user rules
    *
     */
    let rule = {
      viewMode: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ViewMode.create,
      targetDataFieldId: 'resetPassword',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: []
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToView(form, rule);
    rule = {
      viewMode: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ViewMode.any,
      targetDataFieldId: 'isProvider',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: []
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToView(form, rule);
    rule = {
      viewMode: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ViewMode.create,
      targetDataFieldId: 'password',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.invalid,
      conditions: [{
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.isNotNull
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToView(form, rule);
    rule = {
      viewMode: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ViewMode.update,
      targetDataFieldId: 'password',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show,
      conditions: [{
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        sourceDataFieldId: 'resetPassword',
        values: 'false'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToView(form, rule);
    rule = {
      viewMode: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ViewMode.update,
      targetDataFieldId: 'password',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: [{
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        sourceDataFieldId: 'resetPassword',
        values: 'true'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToView(form, rule);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addViewValidator(this);
  }

  applyRulesToTargetField(form, viewMode, fieldDef, onlyRulesOfType) {
    const result = {
      ruleFailed: false
    }; // are we dealing with the form for users?

    if (form.getDataObjectDefinition().id === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.users) {
      // we are only checking for invalid state
      if (onlyRulesOfType && onlyRulesOfType === ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.invalid || !onlyRulesOfType) {
        // are we dealing with the reset password field?
        if (fieldDef.id === 'password') {
          logger('User form, password field, invalid check'); // what is the value of the field reset password

          const resetField = form.getFieldFromDataFieldId('resetPassword');

          if (resetField) {
            const resetValue = resetField.getValue();
            logger(`User form, password field, invalid check - reset is ${resetValue}`);

            if (resetValue && resetValue === 'true') {
              // check the password value
              const passwordField = form.getFieldFromDataFieldId(fieldDef.id);

              if (passwordField) {
                const passwordValue = passwordField.getValue();
                logger(`User form, password field, invalid check - reset is ${resetValue}, password is "${passwordValue}"`);

                if (passwordValue) {
                  if (passwordValue.trim().length === 0) {
                    logger(`User form, password field, invalid check - FAILED`);
                    result.ruleFailed = true;
                    result.message = 'Password must be supplied.';
                  }
                } else {
                  logger(`User form, password field, invalid check - FAILED`);
                  result.ruleFailed = true;
                  result.message = 'Password must be supplied.';
                }
              }
            }
          }
        }
      }
    }

    logger(result);
    return result;
  }

}

/***/ }),

/***/ "./src/users/UsersCollectionView.ts":
/*!******************************************!*\
  !*** ./src/users/UsersCollectionView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersCollectionView": () => (/* binding */ UsersCollectionView)
/* harmony export */ });
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");



const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('users-view');
class UsersCollectionView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.UsersSidebarContainers.list,
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_0__.VIEW_NAME.users
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
        const results = [];

        if (item.isAdmin) {
          results.push("fas fa-user-cog");
        }

        if (item.isProvider) {
          results.push("fas fa-user-md");
        }

        return results;
      }
    },
    sorter: UsersCollectionView.sortUsers
  };

  constructor(stateManager) {
    super(UsersCollectionView.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.users);
    const userDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.users);

    if (userDef) {
      const displayOrders = [];
      displayOrders.push({
        fieldId: 'username',
        displayOrder: 1
      });
      displayOrders.push({
        fieldId: 'isCurrent',
        displayOrder: 2
      });
      displayOrders.push({
        fieldId: 'isAdmin',
        displayOrder: 3
      });
      displayOrders.push({
        fieldId: 'isProvider',
        displayOrder: 4
      });
      displayOrders.push({
        fieldId: 'providerNo',
        displayOrder: 5
      });
      const tableUIConfig = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BootstrapTableConfigHelper.getInstance().generateTableConfig(userDef, displayOrders, 1, false, true);
      tableUIConfig.headerColumns[1].element.classes += ' text-center';
      tableUIConfig.headerColumns[2].element.classes += ' text-center';
      tableUIConfig.headerColumns[3].element.classes += ' text-center';
      tableUIConfig.headerColumns[4].element.classes += ' text-center';
      this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.TabularViewRendererUsingContext(this, this, tableUIConfig);
      this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
      this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
      this.getItemId = this.getItemId.bind(this);
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_0__.STATE_NAMES.users, 'Users');
    }
  }

  static sortUsers(item1, item2) {
    let result = -1;
    if (item1.username > item2.username) result = 1;
    return result;
  }

  getItemDescription(from, item) {
    let buffer = '';
    buffer += `<strong style="text-colour:${item.colour}">` + item.username + '</strong> ';
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
    containerEl.innerHTML = item.username;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    logger(`Has delete permission ${item}`);
    return false;
  }

  getModifierForItemInNamedCollection(name, item) {
    if (item.isCurrent) {
      return ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.Modifier.normal;
    }

    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.Modifier.inactive;
  }

}

/***/ }),

/***/ "./src/users/UsersCompositeView.ts":
/*!*****************************************!*\
  !*** ./src/users/UsersCompositeView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersCompositeView": () => (/* binding */ UsersCompositeView)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper */ "./node_modules/ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper.js");
/* harmony import */ var _UsersCollectionView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UsersCollectionView */ "./src/users/UsersCollectionView.ts");
/* harmony import */ var _UserValidationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserValidationHelper */ "./src/users/UserValidationHelper.ts");







const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('users-composite-view');
class UsersCompositeView {
  constructor(sideBar) {
    this.sideBar = sideBar;
  }

  onDocumentLoaded() {
    const apptTypes = new _UsersCollectionView__WEBPACK_IMPORTED_MODULE_5__.UsersCollectionView(_Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager());
    this.sideBar.addView(apptTypes, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.UsersSidebarContainers.list
    });
    const userDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users);

    if (userDef) {
      const detailRenderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.UsersSidebarContainers.detail, userDef, new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.DefaultFieldPermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_4__.BootstrapFormConfigHelper.getInstance(), false);
      const usersDetailView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.UsersSidebarContainers.detail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.VIEW_NAME.userDetail
      }, detailRenderer);
      const viewLinker = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users, apptTypes);
      viewLinker.addLinkedDetailView(usersDetailView);
      this.sideBar.onDocumentLoaded();
      const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_2__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(userDef);
      usersDetailView.initialise(startingDisplayOrder, false, true);
      const detailForm = detailRenderer.getForm();

      if (detailForm) {
        logger(`Setting up validation rules for ${detailForm.getId()}`);
        logger(detailForm);
        _UserValidationHelper__WEBPACK_IMPORTED_MODULE_6__.UserValidationHelper.getInstance().setupValidationForDetailsForm(detailForm);
      } // setup the event handling for the create new exercise type button


      const createUser = document.getElementById('addNewUser');
      logger(`Setting up button for creating users`);
      logger(createUser);

      if (createUser) {
        createUser.addEventListener('click', event => {
          logger(`Asking view linker to start a new object`);
          viewLinker.startNewObject();
        });
      }

      viewLinker.addListener(this);
    }
  }

  create(controller, typeName, dataObj) {
    logger(`Handling create`);

    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users:
        {
          logger(`Handling create new user`);
          logger(dataObj);
          _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().addNewItemToState(typeName, dataObj, false);
          break;
        }
    }
  }

  delete(controller, typeName, dataObj) {
    return;
  }

  update(controller, typeName, dataObj) {
    logger(`Handling update`);

    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.users:
        {
          logger(`Handling update user`);
          logger(dataObj);
          _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getStateManager().updateItemInState(typeName, dataObj, false);
          break;
        }
    }
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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mobiscroll/javascript */ "./node_modules/@mobiscroll/javascript/dist/esm5/mobiscroll.javascript.min.js");
/* harmony import */ var ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui-framework-jps/dist/framework/util/BrowserUtil */ "./node_modules/ui-framework-jps/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patients/PatientSearchSidebar */ "./src/patients/PatientSearchSidebar.ts");
/* harmony import */ var _appointment_types_AppointmentTypesCompositeView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appointment-types/AppointmentTypesCompositeView */ "./src/appointment-types/AppointmentTypesCompositeView.ts");
/* harmony import */ var _clinic_chat_ClinicChatSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinic-chat/ClinicChatSidebar */ "./src/clinic-chat/ClinicChatSidebar.ts");
/* harmony import */ var _clinic_chat_ClinicChatListView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinic-chat/ClinicChatListView */ "./src/clinic-chat/ClinicChatListView.ts");
/* harmony import */ var _today_TodayController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./today/TodayController */ "./src/today/TodayController.ts");
/* harmony import */ var _today_TodaysPatientsView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./today/TodaysPatientsView */ "./src/today/TodaysPatientsView.tsx");
/* harmony import */ var _patients_PatientController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patients/PatientController */ "./src/patients/PatientController.ts");
/* harmony import */ var _users_UsersCompositeView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/UsersCompositeView */ "./src/users/UsersCompositeView.ts");
/* harmony import */ var _appointments_AppointmentBookReact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appointments/AppointmentBookReact */ "./src/appointments/AppointmentBookReact.tsx");
/* harmony import */ var _appointment_templates_AppointmentTemplatesReact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./appointment-templates/AppointmentTemplatesReact */ "./src/appointment-templates/AppointmentTemplatesReact.tsx");
/* harmony import */ var _patients_PatientRecordReact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patients/PatientRecordReact */ "./src/patients/PatientRecordReact.tsx");



















const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('app');
class App extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  static getInstance() {
    return App._instance;
  }

  thisEl = null;
  chatNavigationItem = null;
  apptTypeSidebar = null;
  usersSidebar = null;

  constructor() {
    // @ts-ignore
    super();
    App._instance = this;
    let todaysPatients = [];
    this.state = {
      todaysPatients: todaysPatients
    }; // event handlers

    this.handleShowChat = this.handleShowChat.bind(this);
    this.handleShowAppointmentBook = this.handleShowAppointmentBook.bind(this);
    this.handleShowAppointmentTemplates = this.handleShowAppointmentTemplates.bind(this);
    this.handleShowPatientRecord = this.handleShowPatientRecord.bind(this);
    this.handleShowPatientSearch = this.handleShowPatientSearch.bind(this);
    this.handleShowAppointmentTypes = this.handleShowAppointmentTypes.bind(this);
    this.handleShowUsers = this.handleShowUsers.bind(this);
    this.handleShowToday = this.handleShowToday.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().connectToApplication(this, window.localStorage);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SecurityManager.getInstance().setRequiresToken();
  }

  render() {
    logger("Rendering App");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      id: "today",
      className: "container-fluid d-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "col-sm-12 col-md-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      id: "todayDetail"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "col-sm-12 col-md-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "row",
      id: "todays-patients"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_today_TodaysPatientsView__WEBPACK_IMPORTED_MODULE_13__.TodaysPatientsView, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_appointments_AppointmentBookReact__WEBPACK_IMPORTED_MODULE_16__.AppointmentBookReact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_appointment_templates_AppointmentTemplatesReact__WEBPACK_IMPORTED_MODULE_17__.AppointmentTemplatesReact, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_patients_PatientRecordReact__WEBPACK_IMPORTED_MODULE_18__.PatientRecordReact, null));
  }

  componentDidMount() {
    logger('component Did Mount');
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    this.apptTypeSidebar = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SidebarViewContainer(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.AppointmentTypesSidebarPrefs);
    new _appointment_types_AppointmentTypesCompositeView__WEBPACK_IMPORTED_MODULE_9__.AppointmentTypesCompositeView(this.apptTypeSidebar).onDocumentLoaded();
    this.usersSidebar = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SidebarViewContainer(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.UsersSidebarPrefs);
    new _users_UsersCompositeView__WEBPACK_IMPORTED_MODULE_15__.UsersCompositeView(this.usersSidebar).onDocumentLoaded();
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_8__.PatientSearchSidebar.getInstance().onDocumentLoaded();
    _clinic_chat_ClinicChatSidebar__WEBPACK_IMPORTED_MODULE_10__.ClinicChatSidebar.getInstance().onDocumentLoaded();
    _today_TodaysPatientsView__WEBPACK_IMPORTED_MODULE_13__.TodaysPatientsView.getInstance().onDocumentLoaded(this);
    this.setupNavigationItemHandling(); // AppointmentTemplateController.getInstance().onDocumentLoaded();

    _today_TodayController__WEBPACK_IMPORTED_MODULE_12__.TodayController.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SecurityManager.getInstance().onDocumentLoaded(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.logout);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.NotificationController.getInstance().setOptions({
      showNormalPriorityMessageNotifications: true,
      showHighPriorityMessageNotifications: true,
      showUrgentPriorityMessageNotifications: true,
      showNormalPriorityMessageNotificationsInOS: true,
      showHighPriorityMessageNotificationsInOS: true,
      showUrgentPriorityMessageNotificationsInOS: true,
      showInvitationDeclinedNotifications: false,
      showInvitedNotifications: false,
      showOfflineMessageNotification: true,
      showFavouriteUserLoggedInNotification: false,
      showFavouriteUserLoggedOutNotification: false,
      showUserJoinLeaveChatNotification: false
    });
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.NotificationController.getInstance().onDocumentLoaded();
    _patients_PatientController__WEBPACK_IMPORTED_MODULE_14__.PatientController.getInstance().onDocumentLoaded();
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().onDocumentLoaded();

    if (_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().isProvider()) {
      this.handleShowToday(null);
    } else {
      this.handleShowAppointmentBook(null);
    }
  }

  getCurrentUser() {
    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SecurityManager.getInstance().getLoggedInUserId();
  }

  hideAllSideBars() {
    _clinic_chat_ClinicChatSidebar__WEBPACK_IMPORTED_MODULE_10__.ClinicChatSidebar.getInstance().eventHide(null);
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_8__.PatientSearchSidebar.getInstance().eventHide(null);
    this.usersSidebar.eventHide(null);
    this.apptTypeSidebar.eventHide(null);
  }

  handleShowChat(roomName) {
    logger('Handling Show Chat'); // prevent anything from happening if we are not logged in

    if (!ui_framework_jps__WEBPACK_IMPORTED_MODULE_5__.SecurityManager.getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _AppTypes__WEBPACK_IMPORTED_MODULE_2__.API_Config.login;
      return;
    }

    _clinic_chat_ClinicChatSidebar__WEBPACK_IMPORTED_MODULE_10__.ClinicChatSidebar.getInstance().eventShow(null);

    if (roomName) {
      _clinic_chat_ClinicChatListView__WEBPACK_IMPORTED_MODULE_11__.ClinicChatListView.getInstance().selectChatRoom(roomName);
    }
  }

  countChanged(unreadNormalMessages, unreadHighMessages, unreadUrgentMessages) {
    //
    let buffer = 'Chat <i class="fas fa-inbox"></i>';

    if (unreadNormalMessages > 0) {
      buffer += ` <span class="badge badge-pill badge-primary">&nbsp;${unreadNormalMessages}&nbsp;</span>`;
    }

    if (unreadHighMessages > 0) {
      buffer += ` <span class="badge badge-pill badge-warning">&nbsp;${unreadHighMessages}&nbsp;</span>`;
    }

    if (unreadUrgentMessages > 0) {
      buffer += ` <span class="badge badge-pill badge-danger">&nbsp;${unreadUrgentMessages}&nbsp;</span>`;
    }

    if (this.chatNavigationItem) this.chatNavigationItem.innerHTML = `${buffer}`;
  }

  handleShowAppointmentBook(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    logger(`Showing appointment book`);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', false);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('today'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);
  }

  handleShowAppointmentTemplates(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    logger(`Showing appointment templates`);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', false);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('today'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);
  }

  handleShowToday(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    logger(`Showing today`);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('today'), 'd-none', false);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);
  }

  handleShowPatientRecord(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    logger(`Showing patient record`);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('today'), 'd-none', true);
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_7__["default"].addRemoveClasses(document.getElementById('patientRecord'), 'd-none', false);
  }

  handleShowPatientSearch(event) {
    logger(`Showing patient search`);
    _patients_PatientSearchSidebar__WEBPACK_IMPORTED_MODULE_8__.PatientSearchSidebar.getInstance().eventShow(null);
  }

  handleShowAppointmentTypes(event) {
    logger(`Showing appointment types`);
    if (this.apptTypeSidebar) this.apptTypeSidebar.eventShow(null);
  }

  handleShowUsers(event) {
    logger(`Showing users`);
    if (this.usersSidebar) this.usersSidebar.eventShow(null);
  }

  setupNavigationItemHandling() {
    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentBook).addEventListener('click', this.handleShowAppointmentBook);
    const templateEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentTemplates);

    if (templateEl) {
      templateEl.addEventListener('click', this.handleShowAppointmentTemplates);
    }

    const apptTypesEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.appointmentTypes);

    if (apptTypesEl) {
      apptTypesEl.addEventListener('click', this.handleShowAppointmentTypes);
    }

    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.patientRecord).addEventListener('click', this.handleShowPatientRecord);
    document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.patientSearch).addEventListener('click', this.handleShowPatientSearch);
    const usersEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.users);

    if (usersEl) {
      usersEl.addEventListener('click', this.handleShowUsers);
    }

    const todayEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.today);

    if (todayEl) {
      todayEl.addEventListener('click', this.handleShowToday);
    } // @ts-ignore


    this.chatNavigationItem = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.clinicChat); // @ts-ignore

    this.chatNavigationItem.addEventListener('click', this.handleShowChat);
  }

}
localStorage.debug = 'app api-ts-results patient-controller security-manager download-manager'; //localStorage.debug = 'socket-listener';

localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_0___default().log) = console.info.bind(console);
$(function () {
  (0,_mobiscroll_javascript__WEBPACK_IMPORTED_MODULE_6__.setOptions)({
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

/***/ "./src/appointment-templates/AppointmentTemplatesReact.tsx":
/*!*****************************************************************!*\
  !*** ./src/appointment-templates/AppointmentTemplatesReact.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentTemplatesReact": () => (/* binding */ AppointmentTemplatesReact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppointmentTemplateController */ "./src/appointment-templates/AppointmentTemplateController.ts");


class AppointmentTemplatesReact extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "appointmentTemplates",
      className: "container-fluid d-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm-12 col-md-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "templateDetail"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm-12 col-md-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "providerFilter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mbsc-form-group-title"
    }, "Providers")))));
  }

  componentDidMount() {
    _AppointmentTemplateController__WEBPACK_IMPORTED_MODULE_1__.AppointmentTemplateController.getInstance().onDocumentLoaded();
  }

}

/***/ }),

/***/ "./src/appointments/AppointmentBookReact.tsx":
/*!***************************************************!*\
  !*** ./src/appointments/AppointmentBookReact.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentBookReact": () => (/* binding */ AppointmentBookReact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AppointmentController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppointmentController */ "./src/appointments/AppointmentController.ts");


class AppointmentBookReact extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "appointmentBook",
      className: "container-fluid d-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm-12 col-md-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "calendarControl"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm-12 col-md-7"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "providers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mbsc-form-group-title"
    }, "Providers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-12 scroll-calendar-detail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "calendarDetail"
    }))));
  }

  componentDidMount() {
    _AppointmentController__WEBPACK_IMPORTED_MODULE_1__.AppointmentController.getInstance().onDocumentLoaded();
  }

}

/***/ }),

/***/ "./src/patients/PatientDemographicsCompositeView.tsx":
/*!***********************************************************!*\
  !*** ./src/patients/PatientDemographicsCompositeView.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NamePermissionChecker": () => (/* binding */ NamePermissionChecker),
/* harmony export */   "PatientDemographicsCompositeView": () => (/* binding */ PatientDemographicsCompositeView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps/dist/framework/util/BrowserUtil */ "./node_modules/ui-framework-jps/dist/framework/util/BrowserUtil.js");
/* harmony import */ var _PatientController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PatientController */ "./src/patients/PatientController.ts");
/* harmony import */ var ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper */ "./node_modules/ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/** @jsx jsxCreateElement */

/*** @jsxFrag jsxCreateFragment */









const logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('patient-demographic-view');
class NamePermissionChecker {
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
class PatientDemographicsCompositeView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AbstractView {
  static ICON_Linked = '<i class="fas fa-link"></i>';
  static ICON_Unlinked = '<i class="fas fa-unlink"></i>';
  currentPatient = null;
  initialised = false;
  linkToPatientId = '';

  constructor() {
    super({
      resultsContainerId: '',
      dataSourceId: 'patientDemographics'
    });
    this.handlePostCodeSearch = this.handlePostCodeSearch.bind(this);
    this.eventLinkUnlink = this.eventLinkUnlink.bind(this);
    this.handlePatientSearch = this.handlePatientSearch.bind(this);
  }

  hidden() {}

  onDocumentLoaded() {
    super.onDocumentLoaded();
    this.render();
    _PatientController__WEBPACK_IMPORTED_MODULE_4__.PatientController.getInstance().addListener(this);
    _Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.postCodes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch, this);
  }

  render() {
    logger('render');
    ui_framework_jps_dist_framework_util_BrowserUtil__WEBPACK_IMPORTED_MODULE_3__["default"].removeAllChildren(this.containerEl);
    const demographicsView = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      id: "demographics-view",
      className: "container-fluid mt-4"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "row"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      id: "patient-name",
      className: "col-12-sm col-md-6 mb-2"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "shadow card"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-body"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("h5", {
      className: "card-title"
    }, "Name Details"), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-text",
      id: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientName
    }))), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "shadow card mt-2"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-body"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("h5", {
      className: "card-title"
    }, "Contact Link"), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-text"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("input", {
      type: 'text',
      id: 'patient-demographics-fast-patient-search'
    }), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("button", {
      id: "contact-link-unlink",
      className: "ml-2 btn btn-primary"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("i", {
      className: "fas fa-link"
    })))))), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      id: "patient-basics",
      className: "col-12-sm col-md-6 mb-2"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "shadow card"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-body"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("h5", {
      className: "card-title"
    }, "Patient Basics"), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-text",
      id: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientBasics
    }))))), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "row"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      id: "patient-contact",
      className: "col-12-sm col-md-6 mb-2"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "shadow card"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-body"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("h5", {
      className: "card-title"
    }, "Contact Details"), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-text",
      id: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientContact
    })))), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      id: "patient-identifiers",
      className: "col-12-sm col-md-6 mb-2"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "shadow card"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-body"
    }, (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("h5", {
      className: "card-title"
    }, "Identifiers"), (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.jsxCreateElement)("div", {
      className: "card-text",
      id: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientIdentifiers
    })))))); // @ts-ignore

    this.containerEl.append(demographicsView);
    this.fastPatientSearchEl = document.getElementById("patient-demographics-fast-patient-search");
    this.btnLinkUnlinkEl = document.getElementById("contact-link-unlink");
    this.btnLinkUnlinkEl.addEventListener('click', this.eventLinkUnlink);
  }

  show() {
    if (!this.initialised) {
      this.initialised = true; // construct all the detail views

      const nameDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.name);
      const contactDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.contact);
      const identifiersDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.identifiers);
      const basicsDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.basics);

      if (nameDef) {
        const renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientName, nameDef, new NamePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), true);
        this.nameView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
          resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientName,
          dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.patientName
        }, renderer);
        const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(nameDef);
        this.nameView.onDocumentLoaded();
        this.nameView.initialise(startingDisplayOrder, false, true);
        this.nameView.show();
        this.nameForm = renderer.getForm();

        if (this.nameForm) {
          this.nameForm.addListener(this);
        }
      }

      if (contactDef) {
        const renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientContact, contactDef, new NamePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), true);
        this.contactView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
          resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientContact,
          dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.patientContact
        }, renderer);
        const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(contactDef);
        this.contactView.onDocumentLoaded();
        this.contactView.initialise(startingDisplayOrder, false, true);
        this.contactView.show();
        this.contactForm = renderer.getForm();
        logger(`Setting up fast search for post codes/suburbs`);
        logger(this.contactForm);
        this.contactForm.addListener(this);
      }

      if (basicsDef) {
        const renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientBasics, basicsDef, new NamePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), true);
        this.basicsView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
          resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientBasics,
          dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.patientBasics
        }, renderer);
        const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(basicsDef);
        this.basicsView.onDocumentLoaded();
        this.basicsView.initialise(startingDisplayOrder, false, true);
        this.basicsView.show();
        this.basicsForm = renderer.getForm();

        if (this.basicsForm) {
          this.basicsForm.addListener(this);
        }
      }

      if (identifiersDef) {
        const renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientIdentifiers, identifiersDef, new NamePermissionChecker(), ui_framework_jps_dist_framework_ui_helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_5__.BootstrapFormConfigHelper.getInstance(), true);
        this.identifiersView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
          resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.patientIdentifiers,
          dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.patientIdentifiers
        }, renderer);
        const startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(identifiersDef);
        this.identifiersView.onDocumentLoaded();
        this.identifiersView.initialise(startingDisplayOrder, false, true);
        this.identifiersView.show();
        this.identifiersForm = renderer.getForm();

        if (this.identifiersForm) {
          this.identifiersForm.addListener(this);
        }
      }
    }
  }

  update(controller, typeName, dataObj) {}

  create(controller, typeName, dataObj) {}

  delete(controller, typeName, dataObj) {}

  handlePostCodeSearch(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    logger(`User ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.innerText = '';
    const postCode = _Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.postCodes, {
      _id: ui.item.value
    });

    if (postCode && this.contactForm) {
      this.contactForm.setFieldValue('suburb', postCode.suburb);
      this.contactForm.setFieldValue('postcode', postCode.postcode);
      this.contactForm.setFieldValue('state', postCode.state);
      this.markPatientChanged();
    }
  }

  handlePatientSearch(event, ui) {
    event.preventDefault();
    event.stopPropagation();
    logger(`User ${ui.item.label} with id ${ui.item.value} selected`); // @ts-ignore

    event.target.value = ui.item.label;
    this.linkToPatientId = ui.item.value;
  }

  patientClosed(patient) {
    this.viewHasChanged = false;
    logger(`handling patient closed`);

    if (this.currentPatient && patient) {
      if ((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.isSameMongo)(this.currentPatient, patient)) {
        logger(`handling patient closed - is the current patient`);
        this.currentPatient = null;
        this.basicsView.clearDisplay();
        this.contactView.clearDisplay();
        this.identifiersView.clearDisplay();
        this.nameView.clearDisplay();
      }
    }
  }

  patientLoaded(patient) {
    this.viewHasChanged = false;
    logger(`handling patient loaded`);

    if (this.currentPatient && patient) {
      if ((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.isSameMongo)(this.currentPatient, patient)) {
        logger(`handling patient loaded - is the current patient - updating full details`);
        this.currentPatient = patient;
        this.basicsView.displayItem(patient);
        this.contactView.displayItem(patient.contact);
        this.identifiersView.displayItem(patient.identifiers);
        this.nameView.displayItem(patient.name);

        if (this.isLinked) {
          logger(`patient is linked on load`);
          this.setLinked(true, false);
        }

        logger(this.currentPatient);
      }
    }
  }

  patientSaved(patient) {
    logger(`handling patient saved`);

    if (this.currentPatient && patient) {
      if ((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.isSameMongo)(this.currentPatient, patient)) {
        logger(`handling patient saved - is the current patient`);
        this.patientSelected(patient);
      }
    }
  }

  eventLinkUnlink(event) {
    event.stopPropagation();
    event.preventDefault(); // reverse any link

    if (this.isLinked) {
      logger(`patient is linked setting to unlinked`);
      this.setLinked(false);
    } else {
      if (this.linkToPatientId.trim().length > 0) {
        logger(`patient is unlinked setting to linked to patient ${this.linkToPatientId}`);
        this.setLinked(true);
      }
    }
  }

  setLinked(isLinked, isChange = true) {
    if (isLinked) {
      this.isLinked = true;
      logger(`setting patient linked to patient ${this.linkToPatientId}`);
      const linkedToPatient = _Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch, {
        _id: this.linkToPatientId
      });

      if (linkedToPatient) {
        // show the patient linked to
        logger(linkedToPatient); // @ts-ignore

        this.fastPatientSearchEl.value = `${linkedToPatient.name.firstname} ${linkedToPatient.name.surname}`;

        if (this.currentPatient.contact) {
          this.currentPatient.oldContact = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(this.currentPatient.contact);
          logger(`Saving unlinked contact information`);
          logger(this.currentPatient.oldContact);
          this.currentPatient.contact.line1 = linkedToPatient.contact.line1;
          this.currentPatient.contact.line2 = linkedToPatient.contact.line2;
          this.currentPatient.contact.suburb = linkedToPatient.contact.suburb;
          this.currentPatient.contact.postcode = linkedToPatient.contact.postcode;
          this.currentPatient.contact.country = linkedToPatient.contact.country;
          this.currentPatient.contact.home = linkedToPatient.contact.home;
          this.currentPatient.contact.mobile = linkedToPatient.contact.mobile;
          this.currentPatient.contact.owner = linkedToPatient._id;
          this.currentPatient.contact._id = linkedToPatient.contact._id;
          logger(`contact updated to`);
          logger((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(this.currentPatient.contact));
        } else {
          logger(`No unlinked contact information`);
          this.currentPatient.contact = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(linkedToPatient.contact);
          logger(`contact updated to`);
          logger((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(this.currentPatient.contact));
        }

        this.contactView.displayItem(this.currentPatient.contact); // set the contact elements to readonly

        this.contactForm.setFieldReadOnly('line1');
        this.contactForm.setFieldReadOnly('line2');
        this.contactForm.setFieldReadOnly('suburb');
        this.contactForm.setFieldReadOnly('postcode');
        this.contactForm.setFieldReadOnly('country');
        this.contactForm.setFieldReadOnly('home');
        this.contactForm.setFieldReadOnly('mobile');
      }

      this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Unlinked;
    } else {
      this.isLinked = false;
      logger(`Unlinking patient`);

      if (this.currentPatient.oldContact) {
        logger(`Restoring unlinked contact information`);
        logger(this.currentPatient.oldContact);
        this.currentPatient.contact = this.currentPatient.oldContact;
        delete this.currentPatient.oldContact;
      } else {
        logger(`Creating new contact information and setting owner to the patient`);
        logger(this.currentPatient.oldContact);
        this.currentPatient.contact._id = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
      }

      this.currentPatient.contact.owner = this.currentPatient._id;
      logger((0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(this.currentPatient.contact));
      this.contactView.displayItem(this.currentPatient.contact); // enable the contact elements

      this.contactForm.clearFieldReadOnly('line1');
      this.contactForm.clearFieldReadOnly('line2');
      this.contactForm.clearFieldReadOnly('suburb');
      this.contactForm.clearFieldReadOnly('postcode');
      this.contactForm.clearFieldReadOnly('country');
      this.contactForm.clearFieldReadOnly('home');
      this.contactForm.clearFieldReadOnly('mobile'); // @ts-ignore

      this.fastPatientSearchEl.value = '';
      this.linkToPatientId = '';
      this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Linked;
    }

    if (isChange) {
      logger(`Marking changed`);
      this.contactForm.setChanged();
      this.markPatientChanged();
    }
  }

  resetLink() {
    this.isLinked = false;
    this.contactForm.clearFieldReadOnly('line1');
    this.contactForm.clearFieldReadOnly('line2');
    this.contactForm.clearFieldReadOnly('suburb');
    this.contactForm.clearFieldReadOnly('postcode');
    this.contactForm.clearFieldReadOnly('country');
    this.contactForm.clearFieldReadOnly('home');
    this.contactForm.clearFieldReadOnly('mobile'); // @ts-ignore

    this.fastPatientSearchEl.value = '';
    this.linkToPatientId = '';
    this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Linked;
  }

  patientSelected(patient) {
    this.viewHasChanged = false;
    logger(`handling patient selected`);
    logger(patient);
    this.currentPatient = patient;
    this.basicsView.displayItem(patient);
    this.contactView.displayItem(patient.contact);
    this.identifiersView.displayItem(patient.identifiers);
    this.nameView.displayItem(patient.name);
    let dob = "";
    if (patient.dob) dob = moment__WEBPACK_IMPORTED_MODULE_7___default()(patient.dob, 'YYYYMMDD').format('DD/MM/YYYY');
    let linkIcon = '<i class="fas fa-link"></i>';
    this.resetLink();

    if (patient.contact) {
      if (patient.contact.owner) {
        if (patient.contact.owner !== patient._id) {
          linkIcon = '<i class="fas fa-unlink"></i>';
          this.linkToPatientId = patient.contact.owner;
          this.setLinked(true, false);
        }
      } else {
        patient.contact.owner = patient._id;
      }
    }

    this.btnLinkUnlinkEl.innerHTML = linkIcon;
  }

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "";
  }

  stateChanged(managerName, name, newState) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.postCodes) {
      if (this.contactForm) {
        logger(`Handling post codes`);
        const fastSearchValues = [];
        newState.forEach(item => {
          const searchValue = {
            label: `${item.suburb} ${item.postcode} ${item.state}`,
            value: item._id
          };
          fastSearchValues.push(searchValue);
        });
        logger(`Number of post codes ${fastSearchValues.length}`);
        this.suburbElementId = this.contactForm.getElementIdForField('suburb');
        let el = document.getElementById(this.suburbElementId);
        logger(el);
        logger(`Setting up fast search for suburbs ${this.suburbElementId}`);
        const postCodeSearchElBySuburb = $(el);
        logger(postCodeSearchElBySuburb); // @ts-ignore

        postCodeSearchElBySuburb.on('autocompleteselect', this.handlePostCodeSearch);
        postCodeSearchElBySuburb.autocomplete({
          source: fastSearchValues
        });
        postCodeSearchElBySuburb.autocomplete('option', {
          disabled: false,
          minLength: 2
        });
        this.postCodeElementId = this.contactForm.getElementIdForField('postcode');
        el = document.getElementById(this.postCodeElementId);
        logger(`Setting up fast search for suburbs ${this.postCodeElementId}`);
        const postCodeSearchElByPostCode = $(el);
        logger(postCodeSearchElByPostCode); // @ts-ignore

        postCodeSearchElByPostCode.on('autocompleteselect', this.handlePatientSearch);
        postCodeSearchElByPostCode.autocomplete({
          source: fastSearchValues
        });
        postCodeSearchElByPostCode.autocomplete('option', {
          disabled: false,
          minLength: 2
        });
      }
    }

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.patientSearch) {
      logger(`Handling patient search`);
      const fastSearchValues = [];
      newState.forEach(item => {
        const searchValue = {
          label: `${item.name.firstname} ${item.name.surname}`,
          value: item._id
        };
        fastSearchValues.push(searchValue);
      });
      logger(`Setting up fast search for suburbs ${this.fastPatientSearchEl}`);
      const autocompletePatientSearch = $(this.fastPatientSearchEl);
      logger(autocompletePatientSearch); // @ts-ignore

      autocompletePatientSearch.on('autocompleteselect', this.handlePatientSearch);
      autocompletePatientSearch.autocomplete({
        source: fastSearchValues
      });
      autocompletePatientSearch.autocomplete('option', {
        disabled: false,
        minLength: 2
      });
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {}

  valuesChanged(name, event, rowValues) {
    return false;
  }

  viewHasChanges(name) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.patientIdentifiers) {
      this.currentPatient.modifiedDates.identifiers = parseInt(moment__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYYMMDDHHmmss'));
    }

    this.markPatientChanged();
  }

  markPatientChanged() {
    this.viewHasChanged = true;
    this.currentPatient.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_1__.Decorator.Modified;
    this.currentPatient.modified = parseInt(moment__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYYMMDDHHmmss'));
    this.currentPatient.modifiedBy = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().getLoggedInUsername();
    _PatientController__WEBPACK_IMPORTED_MODULE_4__.PatientController.getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.openPatients, this.getCurrentPatient(), false);
  }

  getCurrentPatient() {
    let result = this.currentPatient;
    const copyOfContact = (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.copyObject)(result.contact);
    result.contact = this.contactForm.getFormattedDataObject();
    logger(`Checking for linked contact for getCurrentPatient() - patient id is ${result._id}, contact owner is ${copyOfContact.owner}`);
    logger(copyOfContact);

    if (copyOfContact.owner) {
      if (copyOfContact.owner !== result._id) {
        logger(`Checking for linked contact for getCurrentPatient() - is a linked contact, updating owner and id`);
        result.contact.owner = copyOfContact.owner;
        result.contact._id = copyOfContact._id;
      } else {
        logger(`Checking for linked contact for getCurrentPatient() - NOT linked contact, setting owner to current patient`);
        result.contact.owner = result._id;
      }
    } else {
      logger(`Checking for linked contact for getCurrentPatient() - NO contact owner, setting owner to current patient`);
      result.contact.owner = result._id;
    }

    result.name = this.nameForm.getFormattedDataObject();
    result.identifiers = this.identifiersForm.getFormattedDataObject();
    let basics = this.basicsForm.getFormattedDataObject();
    result.dob = basics.dob;
    result.dod = basics.dod;
    result.gender = basics.gender;
    result.ethnicity = basics.ethnicity;
    result.countryofbirth = basics.countryofbirth;
    return result;
  }

  patientChanged(patient) {
    logger(`Patient changed`);
  }

  foundResult(managerName, name, foundItem) {}

}

/***/ }),

/***/ "./src/patients/PatientRecordReact.tsx":
/*!*********************************************!*\
  !*** ./src/patients/PatientRecordReact.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientRecordReact": () => (/* binding */ PatientRecordReact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PatientRecordTabularView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientRecordTabularView */ "./src/patients/PatientRecordTabularView.ts");
/* harmony import */ var _PatientDemographicsCompositeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientDemographicsCompositeView */ "./src/patients/PatientDemographicsCompositeView.tsx");



class PatientRecordReact extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "patientRecord",
      className: "container-fluid d-none"
    });
  }

  componentDidMount() {
    const patientView = _PatientRecordTabularView__WEBPACK_IMPORTED_MODULE_1__.PatientRecordTabularView.getInstance();
    patientView.addViewToTab('demographics', new _PatientDemographicsCompositeView__WEBPACK_IMPORTED_MODULE_2__.PatientDemographicsCompositeView());
    patientView.onDocumentLoaded();
  }

}

/***/ }),

/***/ "./src/today/TodaysPatientsView.tsx":
/*!******************************************!*\
  !*** ./src/today/TodaysPatientsView.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodaysPatientsView": () => (/* binding */ TodaysPatientsView)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controller */ "./src/Controller.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/AppTypes.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patients_PatientController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patients/PatientController */ "./src/patients/PatientController.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");







const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('todays-patients-view');
class TodaysPatientsView extends react__WEBPACK_IMPORTED_MODULE_6__.Component {
  currentProviderNo = '';
  patients = [];
  patientIdsNotYetLoaded = [];
  patientsNotYetLoaded = [];
  applicationView = null;

  constructor(props) {
    super(props);
    TodaysPatientsView._instance = this;
    this.handleOpenPatient = this.handleOpenPatient.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, this);
    _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients, this);
  }

  static getInstance() {
    if (!TodaysPatientsView._instance) {
      TodaysPatientsView._instance = new TodaysPatientsView({});
    }

    return TodaysPatientsView._instance;
  }

  addPatientSummary(patientSummary) {
    logger(`Adding patient summary`);
    logger(patientSummary); // make sure we don't add duplicates

    const foundIndex = this.patients.findIndex(patient => patient._id === patientSummary._id);
    logger(`Adding patient summary ${foundIndex}`);

    if (foundIndex < 0) {
      logger(`Adding NON-DUPLICATE patient summary`);
      patientSummary.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_2__.Decorator.Incomplete;
      this.patients.push(patientSummary); // this.render();

      this._render(); // ask the controller to find the full patient record


      this.patientsNotYetLoaded.push(patientSummary._id);
      _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients, patientSummary);
    }
  }

  addPatientSummaryById(patientId) {
    logger(`Adding patient summary by Id ${patientId}`);
    const patientSummary = _Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, {
      _id: patientId
    });
    logger(patientSummary);

    if (patientSummary && patientSummary._id) {
      this.addPatientSummary(patientSummary);
    } else {
      this.patientIdsNotYetLoaded.push(patientId);
    }
  }

  replacePatientSummaryWithPatient(patient) {
    logger(`Replacing patient summary with patient ${patient._id}`); // replace the current patient

    const foundIndex = this.patients.findIndex(patientObj => (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo)(patientObj, patient));

    if (foundIndex >= 0) {
      patient.decorator = _AppTypes__WEBPACK_IMPORTED_MODULE_2__.Decorator.Complete;
      this.patients.splice(foundIndex, 1, patient);
    } else {
      this.patients.push(patient);
    } // this.render();


    this._render();
  }

  removePatient(patient) {
    logger(`Removing patient with id ${patient._id}`);
    const foundIndex = this.patients.findIndex(patientObj => (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo)(patientObj, patient));

    if (foundIndex >= 0) {
      this.patients.splice(foundIndex, 1); // this.render();

      this._render();
    }
  }

  onDocumentLoaded(applicationView) {
    logger(`on document loaded`);
    this.applicationView = applicationView;
    this.currentProviderNo = ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.SecurityManager.getInstance().getLoggedInUsername();
    this.containerEl = document.getElementById('todays-patients');
  }

  render() {
    logger(`render`); //browserUtil.removeAllChildren(this.containerEl);

    const address = patient => {
      let buffer = '';

      if (patient.contact) {
        buffer = patient.contact.line1;

        if (patient.contact.line2.trim().length > 0) {
          buffer += ', ' + patient.contact.line2;
        }

        buffer += ', ' + patient.contact.suburb;
        buffer += ', ' + patient.contact.state;
        buffer += ' ' + patient.contact.postcode;
      }

      return buffer;
    };

    const incompletePatientCard = patient => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "shadow card col-sm-12 col-md-4 mr-1 mt-2",
        key: patient._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
        className: "card-img-top",
        src: "/img/spinner.gif",
        alt: "Card image cap"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
        className: "card-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("a", {
        href: "#",
        "data-id": patient._id,
        key: patient._id,
        onClick: this.handleOpenPatient
      }, patient.name.firstname, " ", patient.name.surname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, "DOB: ", moment__WEBPACK_IMPORTED_MODULE_4___default()(patient.dob).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", {
        className: "card-text"
      }, address(patient))));
    };

    const patientCard = patient => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "shadow card col-sm-12 col-md-4 mr-1 mt-2 w-100",
        key: patient._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
        className: "card-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("a", {
        href: "#",
        "data-id": patient._id,
        key: patient._id,
        onClick: this.handleOpenPatient
      }, patient.name.firstname, " ", patient.name.surname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, "DOB: ", moment__WEBPACK_IMPORTED_MODULE_4___default()(patient.dob).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", {
        className: "card-text"
      }, address(patient))));
    }; // this.patients.forEach((patient) => {
    //     if (patient.decorator === Decorator.Incomplete) {
    //         // @ts-ignore
    //         this.containerEl.appendChild(incompletePatientCard(patient));
    //     }
    //     else {
    //         // @ts-ignore
    //         this.containerEl.appendChild(patientCard(patient));
    //     }
    //
    // });


    const patientMap = this.patients.map(patient => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        key: patient._id
      }, patient.decorator === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.Decorator.Incomplete ? incompletePatientCard(patient) : patientCard(patient));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, patientMap);
  }

  filterResults(managerName, name, filterResults) {}

  getListenerName() {
    return "Todays Patients View";
  }

  stateChanged(managerName, name, newValue) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch) {
      logger(`loading patient ids from fast patient search that we couldn't find yet`); // load the patients we couldn't find yet

      this.patientIdsNotYetLoaded.forEach(patientId => {
        this.addPatientSummaryById(patientId);
      });
      this.patientIdsNotYetLoaded = [];
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {} // @ts-ignore


  handleOpenPatient(event) {
    console.log('blah');
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    const patientId = event.target.getAttribute('data-id');
    logger(`Handling open patient with patient id ${patientId}`);

    if (patientId) {
      const foundIndex = this.patients.findIndex(patient => (0,ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__.isSameMongo)(patient, {
        _id: patientId
      }));

      if (foundIndex >= 0) {
        _patients_PatientController__WEBPACK_IMPORTED_MODULE_5__.PatientController.getInstance().openPatientRecord(this.patients[foundIndex]);
      }
    }
  }

  _render() {
    if (this.applicationView) this.applicationView.setState({
      todaysPatients: this.patients
    });
  }

  foundResult(managerName, name, foundItem) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patients) {
      // was this a patient we asked for?
      const foundIndex = this.patientsNotYetLoaded.findIndex(patientId => patientId === foundItem._id);

      if (foundIndex >= 0) {
        logger(`Patient loaded from state with id ${foundItem._id} - updating current patient summary`); // remove from our internal queue

        this.patientsNotYetLoaded.splice(foundIndex, 1);
        this.replacePatientSummaryWithPatient(foundItem);
      }
    }
  }

}

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkpatient_booking_system"] = self["webpackChunkpatient_booking_system"] || [];
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