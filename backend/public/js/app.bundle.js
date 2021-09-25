/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/Controller */ "./src/app/Controller.ts");
/* harmony import */ var _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _app_view_ExerciseTypesCompositeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/view/ExerciseTypesCompositeView */ "./src/app/view/ExerciseTypesCompositeView.ts");
/* harmony import */ var _app_view_WorkoutSummaryView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/view/WorkoutSummaryView */ "./src/app/view/WorkoutSummaryView.ts");
/* harmony import */ var _app_view_CurrentWorkoutCompositeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/view/CurrentWorkoutCompositeView */ "./src/app/view/CurrentWorkoutCompositeView.ts");
/* harmony import */ var _app_view_WorkoutsViewUsingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/view/WorkoutsViewUsingContext */ "./src/app/view/WorkoutsViewUsingContext.ts");
//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';








localStorage.debug = 'state-manager-graphql api-ts';
localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_1___default().log) = console.info.bind(console);
const logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('app');
class App {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  constructor() {
    // event handlers
    this.handleShowUserSearch = this.handleShowUserSearch.bind(this);
    this.handleShowExerciseTypes = this.handleShowExerciseTypes.bind(this);
    this.handleShowChat = this.handleShowChat.bind(this);
    this.handleShowWorkoutSummary = this.handleShowWorkoutSummary.bind(this);
    this.handleShowCurrentWorkout = this.handleShowCurrentWorkout.bind(this);
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().connectToApplication(this, window.localStorage);
  }

  static getInstance() {
    if (!App._instance) {
      App._instance = new App();
    }

    return App._instance;
  }

  getCurrentUser() {
    return _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUserId();
  }

  onDocumentLoad() {
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    this.setupUserSearchViews();
    this.setupChatViews();
    this.setupNavigationItemHandling();
    this.exerciseTypesSidebar = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.ExerciseTypesSidebarPrefs);
    new _app_view_ExerciseTypesCompositeView__WEBPACK_IMPORTED_MODULE_4__.ExerciseTypesCompositeView(this.exerciseTypesSidebar).onDocumentLoaded(); //new WorkoutsView().onDocumentLoaded(); // carousel view

    new _app_view_WorkoutsViewUsingContext__WEBPACK_IMPORTED_MODULE_7__.WorkoutsViewUsingContext().onDocumentLoaded();
    this.workoutSummarySidebar = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.WorkoutSummarySidebarPrefs);
    this.workoutSummarySidebar.addView(new _app_view_WorkoutSummaryView__WEBPACK_IMPORTED_MODULE_5__.WorkoutSummaryView(), {
      containerId: _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.WorkoutSummarySidebarContainers.container
    });
    this.workoutSummarySidebar.onDocumentLoaded();
    this.currentWorkoutSidebar = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SidebarViewContainer(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.CurrentWorkoutSidebarPrefs);
    this.currentWorkoutView = new _app_view_CurrentWorkoutCompositeView__WEBPACK_IMPORTED_MODULE_6__.CurrentWorkoutCompositeView(this.currentWorkoutSidebar);
    this.currentWorkoutView.onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().onDocumentLoaded(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.logout);
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().onDocumentLoaded();
    const text = 'Fluffy';
    const cipher = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().encryptString(text);
    const decipher = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.SecurityManager.getInstance().decryptString(cipher);
    console.log(text);
    console.log(cipher);
    console.log(decipher);
  }

  hideAllSideBars() {
    this.chatSidebar.eventHide(null);
    this.userSearchSidebar.eventHide(null);
    this.exerciseTypesSidebar.eventHide(null);
    this.currentWorkoutSidebar.eventHide(null);
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

  handleShowWorkoutSummary(event) {
    logger('Handling Show Workout Summary');
    event.preventDefault(); //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.login;
      return;
    }

    this.hideAllSideBars();
    this.workoutSummarySidebar.eventShow(event);
  }

  handleShowCurrentWorkout(event) {
    logger('Handling Show Current Workout');
    event.preventDefault(); //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.login;
      return;
    }

    this.currentWorkoutSidebar.eventShow(event);
  }

  handleShowExerciseTypes(event) {
    logger('Handling Show Exercise Types');
    event.preventDefault(); //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

    if (!_app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().isLoggedIn()) {
      // @ts-ignore
      window.location.href = _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.login;
      return;
    }

    this.exerciseTypesSidebar.eventShow(event);
  }

  handleShowChat(roomName) {
    logger('Handling Show Chat'); //event.preventDefault();
    //this.hideAllSideBars();
    // prevent anything from happening if we are not logged in

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

  addingExerciseToCurrentWorkout(exerciseType) {
    this.exerciseTypesSidebar.eventHide(null);
    this.currentWorkoutSidebar.eventShow(null);
    this.currentWorkoutView.getStateManager().addNewItemToState(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes, exerciseType, false);
  }

  showCurrentWorkout() {
    this.currentWorkoutSidebar.eventShow(null);
  }

  setupNavigationItemHandling() {
    // @ts-ignore
    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.userSearchId).addEventListener('click', this.handleShowUserSearch); // @ts-ignore

    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.exerciseTypesId).addEventListener('click', this.handleShowExerciseTypes); // @ts-ignore

    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.workoutSummary).addEventListener('click', this.handleShowWorkoutSummary); // @ts-ignore

    document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.NAVIGATION.currentWorkout).addEventListener('click', this.handleShowCurrentWorkout); // @ts-ignore

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
$(function () {
  App.getInstance().onDocumentLoad();
});

/***/ }),

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
/* harmony export */   "WorkoutSummarySidebarContainers": () => (/* binding */ WorkoutSummarySidebarContainers)
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
  recentUserSearches: 'recentUserSearch'
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
  exerciseDropZone: 'exerciseDropZone'
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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
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
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.exerciseTypes,
      isActive: true,
      idField: '_id'
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.workouts,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.API_Config.workouts,
      isActive: true,
      idField: '_id'
    }]);
    let qlSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.GraphQLApiStateManager.getInstance();
    qlSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes,
      serverURL: '',
      apiURL: '/graphql',
      apis: {
        findAll: 'query {getExerciseTypes {_id,name,type,sets,reps,duration,weight,distance,createdOn,createdBy,modifiedOn,modifiedBy}}',
        create: 'mutation createExercise($data: ExerciseTypeInput!){addExerciseType(exercise: $data) {_id,name,type,sets,reps,duration,weight,distance,createdOn,createdBy,modifiedOn,modifiedBy}}',
        destroy: 'mutation deleteExercise($identifier: String!){deleteExerciseType(id: $identifier)}',
        update: 'mutation updateExercise($data: ExerciseTypeInput!){updateExerciseType(exercise: $data) }',
        find: ''
      },
      data: {
        findAll: 'getExerciseTypes',
        create: 'addExerciseType',
        destroy: 'updateExerciseType',
        update: 'deleteExerciseType',
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
    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes], false);
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
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.exerciseTypes);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.workouts); // apply any queued changes from being offline

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

/***/ "./src/app/CreatedByPermissionChecker.ts":
/*!***********************************************!*\
  !*** ./src/app/CreatedByPermissionChecker.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatedByPermissionChecker": () => (/* binding */ CreatedByPermissionChecker)
/* harmony export */ });
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");

class CreatedByPermissionChecker {
  hasPermissionToUpdateItem(item) {
    let result = false;

    if (item.createdBy) {
      result = item.createdBy === _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getLoggedInUsername();
    }

    return result;
  }

  hasPermissionToDeleteItem(item) {
    let result = false;

    if (item.createdBy) {
      result = item.createdBy === _Controller__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getLoggedInUsername();
    }

    return result;
  }

}

/***/ }),

/***/ "./src/app/DurationFunctions.ts":
/*!**************************************!*\
  !*** ./src/app/DurationFunctions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDurations": () => (/* binding */ addDurations)
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

/***/ "./src/app/MiscFunctions.ts":
/*!**********************************!*\
  !*** ./src/app/MiscFunctions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncateString": () => (/* binding */ truncateString)
/* harmony export */ });
function truncateString(str, num) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  } // Return str truncated with '...' concatenated to the end of str.


  return str.slice(0, num) + '...';
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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
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

/***/ "./src/app/helper/ValidationHelper.ts":
/*!********************************************!*\
  !*** ./src/app/helper/ValidationHelper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationHelper": () => (/* binding */ ValidationHelper)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");

class ValidationHelper {
  constructor() {}

  static getInstance() {
    if (!ValidationHelper._instance) {
      ValidationHelper._instance = new ValidationHelper();
    }

    return ValidationHelper._instance;
  }

  setupValidationForExerciseTypeDetailsForm(form) {
    let rule = {
      targetDataFieldId: 'sets',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'cardio'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'reps',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'cardio'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'weight',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'cardio'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'reps',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'strength'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'sets',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'strength'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'weight',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'strength'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'distance',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'strength'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
    rule = {
      targetDataFieldId: 'distance',
      response: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide,
      conditions: [{
        sourceDataFieldId: 'type',
        comparison: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue,
        values: 'cardio'
      }]
    };
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ValidationManager.getInstance().addRuleToForm(form, rule);
  }

}

/***/ }),

/***/ "./src/app/renderer/WorkoutSummaryRenderer.ts":
/*!****************************************************!*\
  !*** ./src/app/renderer/WorkoutSummaryRenderer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSummaryRenderer": () => (/* binding */ WorkoutSummaryRenderer)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");



const avLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('workout-summary-renderer');
class WorkoutSummaryRenderer {
  currentChart = null;

  constructor(view, eventHandler) {
    this.view = view;
    this.eventHandler = eventHandler;
  }

  createDisplayElementForCollectionItem(collectionName, item) {
    return document.createElement('a');
  }

  setDisplayElementsForCollectionInContainer(containerEl, collectionName, newState) {
    avLogger(`view ${this.view.getName()}: creating workout summary`);
    avLogger(newState);
    if (this.currentChart) this.currentChart.destroy(); // okay we need to go through the last 7 workouts

    let sevenWorkouts = newState;

    if (newState.length > 7) {
      sevenWorkouts = newState.slice(newState.length - 7);
    } // go through the workouts and find all the unique exercise names as data series names


    let exerciseNames = [];
    let exerciseBG = [];
    let exerciseBR = [];
    let exerciseTypes = [];
    let labels = [];
    sevenWorkouts.forEach(workout => {
      const label = moment__WEBPACK_IMPORTED_MODULE_1___default()(workout.createdOn, 'YYYYMMDDHHmmss').format('ddd DD/MM/YYYY HH:mm');
      labels.push(label);
      avLogger(`Added label ${label}`);

      if (workout.exercises) {
        workout.exercises.forEach(exercise => {
          const exerciseName = exercise.name; // do we have this exercise already?

          let foundIndex = exerciseNames.findIndex(name => name == exerciseName);

          if (foundIndex < 0) {
            avLogger(`Adding exercise ${exerciseName} of type ${exercise.type} to datasets`);
            exerciseNames.push(exerciseName);
            exerciseTypes.push(exercise.type);
            const colours = this.generateRandomExerciseColourAndBorder(exercise.type === 'strength');
            exerciseBG.push(colours[0]);
            exerciseBR.push(colours[1]);
          }
        });
      }
    }); // construct the data series, for each series (exercise), go through the workouts and create a data entry for that item

    let datasets = [];
    exerciseNames.forEach((name, index) => {
      const exerciseType = exerciseTypes[index];
      const itemBG = exerciseBG[index];
      const itemBR = exerciseBR[index];
      avLogger(`Constructing dataset ${name} of type ${exerciseType} to datasets`);
      let data = [];
      let bg = [];
      let br = [];
      sevenWorkouts.forEach(workout => {
        bg.push(itemBG);
        br.push(itemBR); // find the exercise name

        if (workout.exercises) {
          const didntFindExercise = workout.exercises.every(exercise => {
            if (exercise.name == name) {
              if (exerciseType === 'strength') {
                avLogger(`Found exercise ${name} with value ${exercise.weight}`);
                data.push(exercise.weight);
              } else {
                avLogger(`Found exercise ${name} with value ${exercise.distance}`);
                data.push(exercise.distance);
              }

              return false;
            }

            return true;
          }); // not found - zero value

          if (didntFindExercise) {
            data.push(0);
          }
        } else {
          data.push(0);
        }
      });
      let dataset = {
        label: name,
        data: data,
        backgroundColor: bg,
        borderColor: br,
        borderWidth: 1,
        order: 1
      };
      let lineDataSet = {
        label: name,
        data: data,
        backgroundColor: bg,
        borderColor: br,
        order: 0,
        type: 'line'
      };
      avLogger(dataset);
      datasets.push(dataset); //datasets.push(lineDataSet);
    });
    let chartData = {
      labels: labels,
      datasets: datasets
    };
    let config = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        animation: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    avLogger(chartData); // @ts-ignore

    this.currentChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](containerEl, config);
  }

  onDocumentLoaded() {}

  generateRandomExerciseColourAndBorder(isStrength = true) {
    let red = 0;
    let blue = 0;
    let green = 50;
    const newColour = Math.floor(Math.random() * 100) + 155;
    if (isStrength) red = newColour;
    if (!isStrength) blue = newColour;
    const transparency = 0.4;
    const background = `rgba(${red},${green},${blue},${transparency})`;
    const border = `rgb(${red},${green},${blue})`;
    return [background, border];
  }

}

/***/ }),

/***/ "./src/app/view/CurrentWorkoutCompositeView.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/CurrentWorkoutCompositeView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentWorkoutCompositeView": () => (/* binding */ CurrentWorkoutCompositeView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_ValidationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/ValidationHelper */ "./src/app/helper/ValidationHelper.ts");
/* harmony import */ var _CurrentWorkoutExercisesView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrentWorkoutExercisesView */ "./src/app/view/CurrentWorkoutExercisesView.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../EqualityFunctions */ "./src/app/EqualityFunctions.ts");









const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('current-workout-composite-view');
class CurrentWorkoutCompositeView {
  currentWorkout = {};
  workoutDef = null;
  workoutNameEl = null;

  constructor(sideBar) {
    this.sideBar = sideBar;
    this.stateManager = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.MemoryBufferStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_8__.isSameMongo);
    this.stateManager.addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts, this);
  }

  getListenerName() {
    return 'Current Workout Composite View';
  }

  onDocumentLoaded() {
    var _this$workoutNameEl;

    this.workoutNameEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.INPUT.workoutName);
    (_this$workoutNameEl = this.workoutNameEl) === null || _this$workoutNameEl === void 0 ? void 0 : _this$workoutNameEl.addEventListener('blur', event => {
      if (event.target) {
        // @ts-ignore
        this.currentWorkout.name = event.target.value;
        this.saveWorkout();
      }
    });
    this.workoutDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts);
    if (!this.workoutDef) throw new Error('Workout definition not found');
    const exerciseTypes = new _CurrentWorkoutExercisesView__WEBPACK_IMPORTED_MODULE_5__.CurrentWorkoutExercisesView(this.stateManager);
    this.sideBar.addView(exerciseTypes, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.exerciseDropZone
    });
    const exerciseTypeDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes);

    if (exerciseTypeDefinition) {
      let exerciseTypeDetailRenderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.currentWorkoutDetail, exerciseTypeDefinition, new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DefaultPermissionChecker());
      let exerciseTypeDetailView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.currentWorkoutDetail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.exercises
      }, exerciseTypeDetailRenderer);
      let viewLinker = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, exerciseTypes);
      viewLinker.addLinkedDetailView(exerciseTypeDetailView);
      this.sideBar.onDocumentLoaded();
      let startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(exerciseTypeDefinition);
      exerciseTypeDetailView.initialise(startingDisplayOrder, false, true);
      const detailForm = exerciseTypeDetailRenderer.getForm();

      if (detailForm) {
        logger(`Setting up validation rules for ${detailForm.getId()}`);
        logger(detailForm);
        _helper_ValidationHelper__WEBPACK_IMPORTED_MODULE_4__.ValidationHelper.getInstance().setupValidationForExerciseTypeDetailsForm(detailForm);
      } // setup the event handling for the create new exercise type button


      let createExerciseType = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.BUTTON.completeWorkout);
      logger(`Setting up button for completing the workout`);
      logger(createExerciseType);

      if (createExerciseType) {
        createExerciseType.addEventListener('click', event => {
          logger(`Completing the workout`);
          this.currentWorkout.completed = true;
          this.currentWorkout.createdOn = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYYMMDDHHmmss');

          if (detailForm) {
            detailForm.reset();
            detailForm.setReadOnly();
          }

          this.saveWorkout();
          this.createWorkout();
          _App__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().hideAllSideBars();
        });
      }

      viewLinker.addListener(this);
    }
  }

  getStateManager() {
    return this.stateManager;
  }

  stateChanged(managerName, name, newValue) {
    logger(`${managerName},${name}`);

    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts) {
      logger(`Workouts loaded`); // is there a current workout?

      this.currentWorkout = null;
      newValue.forEach(workout => {
        if (!workout.completed || workout.completed === 'false') {
          this.currentWorkout = workout;
        }
      });

      if (this.currentWorkout) {
        logger(`Workouts loaded found existing current workout`);
        if (this.workoutNameEl && this.currentWorkout.name) this.workoutNameEl.value = this.currentWorkout.name;
        this.stateManager.setStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, this.currentWorkout.exercises, true);
      } else {
        logger(`Workouts loaded no existing current workout, creating and saving`);
        this.createWorkout();
      }
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes) {
      logger(`Added a new exercise to workout`);
      logger(itemAdded);
      this.currentWorkout.exercises.push(itemAdded);
      this.saveWorkout();
    }
  }

  stateChangedItemRemoved(managerName, name, itemRemoved) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes) {
      // find the exercise in the current workout
      let foundIndex = this.currentWorkout.exercises.findIndex(exercise => exercise._id === itemRemoved._id);
      logger(`Removing exercise to workout at index ${foundIndex}`);
      logger(itemRemoved);

      if (foundIndex >= 0) {
        this.currentWorkout.exercises.splice(foundIndex, 1);
      }

      this.saveWorkout();
    }
  }

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    if (name === _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes) {
      // find the exercise in the current workout
      let foundIndex = this.currentWorkout.exercises.findIndex(exercise => exercise._id === itemNewValue._id);
      logger(`Updating exercise to workout at index ${foundIndex}`);
      logger(itemNewValue);

      if (foundIndex >= 0) {
        this.currentWorkout.exercises.splice(foundIndex, 1, itemNewValue);
      }

      this.saveWorkout();
    }
  }

  create(controller, typeName, dataObj) {
    logger(`Added a new exercise to workout from view`);
    logger(dataObj);
    this.stateManager.addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, dataObj, false);
  }

  update(controller, typeName, dataObj) {
    logger(`Updating exercise in workout from view`);
    logger(dataObj);
    this.stateManager.updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, dataObj, false);
  }

  delete(controller, typeName, dataObj) {
    logger(`Deleting exercise from workout from view`);
    logger(dataObj);
    this.stateManager.removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, dataObj, false);
  }

  createWorkout() {
    logger(`Creating new current workout`);
    this.currentWorkout = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().createInstance(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts);
    logger(this.currentWorkout);
    this.currentWorkout.name = '';
    this.currentWorkout.completed = false;
    if (this.workoutNameEl) this.workoutNameEl.value = '';
    console.log(this.currentWorkout);
    _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts, this.currentWorkout, false);
    this.stateManager.setStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, this.currentWorkout.exercises, true);
  }

  saveWorkout() {
    logger(`Saving current workout`);
    logger(this.currentWorkout);
    this.currentWorkout.createdOn = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYYMMDDHHmmss');
    this.currentWorkout.modifiedOn = moment__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYYMMDDHHmmss');
    _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts, this.currentWorkout, false);
  }

  filterResults(managerName, name, filterResults) {}

}

/***/ }),

/***/ "./src/app/view/CurrentWorkoutExercisesView.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/CurrentWorkoutExercisesView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentWorkoutExercisesView": () => (/* binding */ CurrentWorkoutExercisesView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EqualityFunctions */ "./src/app/EqualityFunctions.ts");





const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('current-workout-exercises-view');
class CurrentWorkoutExercisesView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'exercises',
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.exercises,
      drop: {
        acceptFrom: [_AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.fromExerciseTypes],
        acceptTypes: [_AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.typeExerciseType]
      }
    },
    resultsElementType: 'a',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
    keyId: '_id',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.KeyType.string,
    modifiers: {
      normal: '',
      inactive: 'list-group-item-light',
      active: 'list-group-item-primary',
      warning: ''
    },
    icons: {
      normal: '',
      inactive: '',
      active: '',
      warning: ''
    },
    detail: {
      containerClasses: 'd-flex w-100 justify-content-between',
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      icons: (name, item) => {
        if (item.type) {
          if (item.type === 'cardio') {
            return ['fas fa-running ml-2'];
          } else {
            return ['fas fa-dumbbell ml-2'];
          }
        }

        return [];
      },
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-md',
        iconClasses: 'fas fa-trash-alt',
        attributes: [{
          name: 'data-toggle',
          value: "tooltip"
        }, {
          name: 'data-placement',
          value: "right"
        }, {
          name: 'title',
          value: "Delete this exercise from the workout."
        }]
      }
    }
  };

  constructor(stateManager) {
    super(CurrentWorkoutExercisesView.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes);
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ListViewRendererUsingContext(this, this);
    this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
    this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
    this.getItemId = this.getItemId.bind(this);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, 'Exercise Types');
  }

  getItemDescription(from, item) {
    let buffer = '';
    buffer += '<strong>' + item.name + '</strong>: ';

    if (item.type === 'cardio') {
      buffer += item.distance + ' km in ' + item.duration;
    } else {
      buffer += item.sets + ' sets of ' + item.reps + ' reps in ' + item.duration;
    }

    buffer += '<br/>';
    return buffer;
  }

  canDeleteItem(view, selectedItem) {
    return true;
  }

  compareItemsForEquality(item1, item2) {
    return (0,_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo)(item1, item2);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.name;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    return true;
  }

  itemDropped(view, droppedItem) {
    _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addExerciseToCurrentWorkout(droppedItem);
  }

}

/***/ }),

/***/ "./src/app/view/ExerciseTabularViewUsingContext.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/ExerciseTabularViewUsingContext.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseTabularViewUsingContext": () => (/* binding */ ExerciseTabularViewUsingContext)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EqualityFunctions */ "./src/app/EqualityFunctions.ts");





const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('exercise-types-view');
class ExerciseTabularViewUsingContext extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'exerciseTypes',
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.exerciseTypes
    },
    resultsElementType: 'tr',
    resultsElementAttributes: [{
      name: 'href',
      value: '#'
    }],
    resultsClasses: '',
    keyId: '_id',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.KeyType.string,
    modifiers: {
      normal: 'table-primary',
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
      textElementType: 'span',
      textElementClasses: 'mb-1',
      select: true,
      icons: (name, item) => {
        if (item.type) {
          if (item.type === 'cardio') {
            return ['fas fa-running ml-2'];
          } else {
            return ['fas fa-dumbbell ml-2'];
          }
        }

        return [];
      },
      delete: {
        buttonClasses: 'btn bg-danger text-white btn-circle btn-md',
        iconClasses: 'text-black fas fa-trash-alt',
        attributes: [{
          name: 'data-toggle',
          value: "tooltip"
        }, {
          name: 'data-placement',
          value: "right"
        }, {
          name: 'title',
          value: "Delete this exercise type."
        }]
      },
      drag: {
        type: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.typeExerciseType,
        from: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.fromExerciseTypes
      }
    },
    extraActions: [{
      name: 'addToWorkout',
      buttonClasses: 'btn bg-primary text-white btn-circle btn-md mr-1',
      iconClasses: 'fas fa-arrow-alt-circle-right',
      attributes: [{
        name: 'data-toggle',
        value: "tooltip"
      }, {
        name: 'data-placement',
        value: "right"
      }, {
        name: 'data-html',
        value: 'true'
      }, {
        name: 'title',
        value: "Add this <strong>exercise</strong> to the current workout."
      }]
    }]
  };

  constructor(stateManager) {
    super(ExerciseTabularViewUsingContext.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes);
    let exerciseTypeDef = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes);

    if (exerciseTypeDef) {
      let displayOrders = [];
      displayOrders.push({
        fieldId: 'name',
        displayOrder: 1
      });
      displayOrders.push({
        fieldId: 'type',
        displayOrder: 2
      });
      displayOrders.push({
        fieldId: 'duration',
        displayOrder: 3
      });
      displayOrders.push({
        fieldId: 'sets',
        displayOrder: 4
      });
      displayOrders.push({
        fieldId: 'reps',
        displayOrder: 5
      });
      displayOrders.push({
        fieldId: 'weight',
        displayOrder: 6
      });
      displayOrders.push({
        fieldId: 'distance',
        displayOrder: 7
      });
      let tableUIConfig = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BootstrapTableConfigHelper.getInstance().generateTableRowConfig(exerciseTypeDef, displayOrders, 1, true, true); // change the text alignment for the exercise type, duration, sets, reps, and weight

      tableUIConfig.headerColumns[1].element.elementClasses += ' text-center';
      tableUIConfig.columns[1].elementClasses += ' text-center';
      tableUIConfig.headerColumns[2].element.elementClasses += ' text-right';
      tableUIConfig.columns[2].elementClasses += ' text-right';
      tableUIConfig.headerColumns[3].element.elementClasses += ' text-right';
      tableUIConfig.columns[3].elementClasses += ' text-right';
      tableUIConfig.headerColumns[4].element.elementClasses += ' text-right';
      tableUIConfig.columns[4].elementClasses += ' text-right';
      tableUIConfig.headerColumns[5].element.elementClasses += ' text-right';
      tableUIConfig.columns[5].elementClasses += ' text-right';
      tableUIConfig.headerColumns[6].element.elementClasses += ' text-right';
      tableUIConfig.headerColumns[6].element.innerHTML += ' (km)';
      tableUIConfig.columns[6].elementClasses += ' text-right';
      this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.TabularViewRendererUsingContext(this, this, tableUIConfig);
      this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
      this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
      this.getItemId = this.getItemId.bind(this);
      let context = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, 'Exercise Types');
      ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addActionToContext(context, 'addToWorkout', 'Add To Workout', this.eventHandlerDelegate.eventActionClicked, 'fas fa-arrow-alt-circle-right');
    }
  }

  getItemDescription(from, item) {
    let buffer = '';
    buffer += '<strong>' + item.name + '</strong>: ';

    if (item.type === 'cardio') {
      buffer += item.distance + ' km in ' + item.duration;
    } else {
      buffer += item.sets + ' sets of ' + item.reps + ' reps in ' + item.duration;
    }

    buffer += '<br/>';
    return buffer;
  }

  canDeleteItem(view, selectedItem) {
    logger(`Can Delete ${selectedItem}`);
    logger(selectedItem[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy]);

    if (selectedItem[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy]) {
      if (selectedItem[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy] === _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUsername()) {
        return true;
      }
    }

    return false;
  }

  compareItemsForEquality(item1, item2) {
    return (0,_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo)(item1, item2);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    containerEl.innerHTML = item.name;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    logger(`Has delete permission ${item}`);
    logger(item[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy]);

    if (item[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy]) {
      if (item[ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FIELD_CreatedBy] === _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUsername()) {
        return true;
      }
    }

    return false;
  }

  itemAction(view, actionName, selectedItem) {
    super.itemAction(view, actionName, selectedItem); // @ts-ignore

    if (actionName === ExerciseTabularViewUsingContext.DOMConfig.extraActions[0].name) {
      // add the exercise type the current workout
      _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addExerciseToCurrentWorkout(selectedItem);
    }
  }

  getModifierForItemInNamedCollection(name, item) {
    if (item.type) {
      if (item.type === 'cardio') {
        return ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.Modifier.warning;
      } else {
        return ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.Modifier.inactive;
      }
    }

    return ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.Modifier.normal;
  }

}

/***/ }),

/***/ "./src/app/view/ExerciseTypesCompositeView.ts":
/*!****************************************************!*\
  !*** ./src/app/view/ExerciseTypesCompositeView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseTypesCompositeView": () => (/* binding */ ExerciseTypesCompositeView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _CreatedByPermissionChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreatedByPermissionChecker */ "./src/app/CreatedByPermissionChecker.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_ValidationHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/ValidationHelper */ "./src/app/helper/ValidationHelper.ts");
/* harmony import */ var _ExerciseTabularViewUsingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExerciseTabularViewUsingContext */ "./src/app/view/ExerciseTabularViewUsingContext.ts");







const logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('exercise-types-composite-view');
class ExerciseTypesCompositeView {
  constructor(sideBar) {
    this.sideBar = sideBar;
  }

  onDocumentLoaded() {
    const exerciseTypes = new _ExerciseTabularViewUsingContext__WEBPACK_IMPORTED_MODULE_6__.ExerciseTabularViewUsingContext(_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager());
    this.sideBar.addView(exerciseTypes, {
      containerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.ExerciseTypesSidebarContainers.container
    });
    const exerciseTypeDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes);

    if (exerciseTypeDefinition) {
      let exerciseTypeDetailRenderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.exerciseTypeDetail, exerciseTypeDefinition, new _CreatedByPermissionChecker__WEBPACK_IMPORTED_MODULE_2__.CreatedByPermissionChecker());
      let exerciseTypeDetailView = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.exerciseTypeDetail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.exerciseTypes
      }, exerciseTypeDetailRenderer);
      let viewLinker = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.exerciseTypes, exerciseTypes);
      viewLinker.addLinkedDetailView(exerciseTypeDetailView);
      this.sideBar.onDocumentLoaded();
      let startingDisplayOrder = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(exerciseTypeDefinition);
      exerciseTypeDetailView.initialise(startingDisplayOrder, false, true);
      const detailForm = exerciseTypeDetailRenderer.getForm();

      if (detailForm) {
        logger(`Setting up validation rules for ${detailForm.getId()}`);
        logger(detailForm);
        _helper_ValidationHelper__WEBPACK_IMPORTED_MODULE_5__.ValidationHelper.getInstance().setupValidationForExerciseTypeDetailsForm(detailForm);
      } // setup the event handling for the create new exercise type button


      let createExerciseType = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.BUTTON.createNewExerciseType);
      logger(`Setting up button for creating exercise types`);
      logger(createExerciseType);

      if (createExerciseType) {
        createExerciseType.addEventListener('click', event => {
          logger(`Asking view linker to start a new object`);
          viewLinker.startNewObject();
        });
      }

      viewLinker.addListener(_Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance());
    }
  }

}

/***/ }),

/***/ "./src/app/view/WorkoutSummaryView.ts":
/*!********************************************!*\
  !*** ./src/app/view/WorkoutSummaryView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutSummaryView": () => (/* binding */ WorkoutSummaryView)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var _renderer_WorkoutSummaryRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/WorkoutSummaryRenderer */ "./src/app/renderer/WorkoutSummaryRenderer.ts");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EqualityFunctions */ "./src/app/EqualityFunctions.ts");





class WorkoutSummaryView extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AbstractStatefulCollectionView {
  static DOMConfig = {
    viewConfig: {
      resultsContainerId: 'workoutSummaryChart',
      dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.workoutSummary
    },
    resultsElementType: 'canvas',
    resultsClasses: '',
    keyId: '_id',
    keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.KeyType.string,
    detail: {
      containerClasses: '',
      textElementType: '',
      textElementClasses: '',
      select: false
    }
  };

  constructor() {
    super(WorkoutSummaryView.DOMConfig, _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager(), _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts);
    this.renderer = new _renderer_WorkoutSummaryRenderer__WEBPACK_IMPORTED_MODULE_3__.WorkoutSummaryRenderer(this, this);
  }

  canDeleteItem(view, selectedItem) {
    return false;
  }

  compareItemsForEquality(item1, item2) {
    return (0,_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo)(item1, item2);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {}

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    return false;
  }

  hasPermissionToActionItemInNamedCollection(actionName, name, item) {
    return false;
  }

  renderBackgroundForItemInNamedCollection(containerEl, name, item) {}

}

/***/ }),

/***/ "./src/app/view/WorkoutsViewUsingContext.ts":
/*!**************************************************!*\
  !*** ./src/app/view/WorkoutsViewUsingContext.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsViewUsingContext": () => (/* binding */ WorkoutsViewUsingContext)
/* harmony export */ });
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../App */ "./src/App.ts");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../EqualityFunctions */ "./src/app/EqualityFunctions.ts");
/* harmony import */ var _MiscFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MiscFunctions */ "./src/app/MiscFunctions.ts");
/* harmony import */ var _DurationFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DurationFunctions */ "./src/app/DurationFunctions.ts");










const logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('workouts-view');
class WorkoutsViewUsingContext extends ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.AbstractStatefulCollectionView {
  static DOMConfig = {
    itemsPerRow: {
      small: 1,
      medium: 2,
      large: 2,
      xlarge: 2
    },
    rowContainer: {
      elementClasses: "carousel-item",
      elementType: 'div'
    },
    activeRow: {
      elementType: '',
      elementClasses: 'active'
    },
    activeRowPosition: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.RowPosition.last,
    row: {
      elementClasses: "row",
      elementType: 'div'
    },
    multipleItemsPerRowContainer: {
      elementType: 'div',
      elementClasses: 'col-sm-12 col-md-6 col-lg-6 mb-2'
    },
    actionContainer: {
      elementType: 'div',
      elementClasses: 'card-footer d-flex w-100 justify-content-end'
    },
    collectionConfig: {
      viewConfig: {
        resultsContainerId: 'workouts',
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.workouts,
        drop: {
          acceptTypes: [_AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.typeExerciseType],
          acceptFrom: [_AppTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE.fromExerciseTypes]
        }
      },
      resultsElementType: 'div',
      resultsClasses: 'card',
      keyId: '_id',
      keyType: ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.KeyType.string,
      modifiers: {
        normal: 'bg-light',
        inactive: 'bg-light',
        active: 'bg-light',
        warning: 'bg-light'
      },
      detail: {
        containerClasses: 'card-body',
        textElementType: 'div',
        textElementClasses: '',
        select: true,
        delete: {
          buttonClasses: 'btn btn-danger btn-circle btn-md',
          iconClasses: 'fas fa-trash-alt text-white',
          attributes: [{
            name: 'data-toggle',
            value: "tooltip"
          }, {
            name: 'data-placement',
            value: "top"
          }, {
            name: 'title',
            value: "Delete this workout"
          }]
        },
        background: {
          elementType: 'div',
          elementClasses: ''
        }
      },
      extraActions: [{
        name: 'template',
        buttonText: '',
        buttonClasses: 'btn btn-primary btn-circle btn-md mr-2',
        iconClasses: 'fas fa-copy',
        attributes: [{
          name: 'data-toggle',
          value: "tooltip"
        }, {
          name: 'data-placement',
          value: "top"
        }, {
          name: 'title',
          value: "Add the exercises from this workout to the current workout."
        }]
      }, {
        name: 'continue',
        buttonText: '',
        iconClasses: 'text-white fas fa-clipboard-list',
        buttonClasses: 'btn btn-warning btn-circle btn-md mr-2',
        attributes: [{
          name: 'data-toggle',
          value: "tooltip"
        }, {
          name: 'data-placement',
          value: "top"
        }, {
          name: 'title',
          value: "Continue this current workout"
        }]
      }]
    }
  };
  static bgStrength = 'rgba(255, 0, 0, 0.2)';
  static bgCardio = 'rgba(0, 50, 255, 0.2)';
  static borderStrength = 'rgb(255, 50, 0)';
  static borderCardio = 'rgb(0, 50 , 255)';

  constructor() {
    super(WorkoutsViewUsingContext.DOMConfig.collectionConfig, _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager(), _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts);
    this.renderer = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.CarouselViewRendererUsingContext(this, this, WorkoutsViewUsingContext.DOMConfig);
    this.eventHandlerDelegate = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.CollectionViewEventHandlerDelegateUsingContext(this, this.eventForwarder);
    this.chartRefs = [];
    this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
    this.getItemId = this.getItemId.bind(this);
    this.hasPermissionToActionItemInNamedCollection = this.hasPermissionToActionItemInNamedCollection.bind(this);
    let context = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addContextFromView(this, _AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.workouts, 'Workouts');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addActionToContext(context, 'template', 'Copy exercises to Current Workout', this.eventHandlerDelegate.eventActionClicked, 'fas fa-copy', this.hasPermissionToActionItemInNamedCollection);
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().addActionToContext(context, 'continue', 'Continue Current Workout', this.eventHandlerDelegate.eventActionClicked, 'fas fa-clipboard-list', this.hasPermissionToActionItemInNamedCollection);
  }

  getItemDescription(from, item) {
    let buffer = '';

    if (item.exercises) {
      item.exercises.forEach(exercise => {
        buffer += `<strong>${exercise.name}</strong>: `;

        if (exercise.type === 'cardio') {
          buffer += `${exercise.distance} km in ${exercise.duration}`;
        } else {
          buffer += `${exercise.sets} sets of ${exercise.reps} reps in ${exercise.duration}`;
        }

        buffer += `<br/>`;
      });
    }

    return buffer;
  }

  canDeleteItem(view, selectedItem) {
    return selectedItem.completed;
  }

  compareItemsForEquality(item1, item2) {
    return (0,_EqualityFunctions__WEBPACK_IMPORTED_MODULE_7__.isSameMongo)(item1, item2);
  }

  getItemId(from, item) {
    return this.getIdForItemInNamedCollection(from, item);
  }

  getIdForItemInNamedCollection(name, item) {
    return item._id;
  }

  renderDisplayForItemInNamedCollection(containerEl, name, item) {
    let summary = this.calculateExerciseSummary(item);
    let buffer = '';
    buffer += `<h5 class="card-title">`;

    if (item.name) {
      buffer += `${item.name}</h5>`;
      buffer += `<h6 class="card-subtitle">${moment__WEBPACK_IMPORTED_MODULE_4___default()(item.createdOn, 'YYYYMMDDHHmmss').format('ddd, DD/MM/YYYY HH:mm')}</h6>`;
    } else {
      if (item.completed) {
        buffer += `${moment__WEBPACK_IMPORTED_MODULE_4___default()(item.createdOn, 'YYYYMMDDHHmmss').format('ddd, DD/MM/YYYY HH:mm')}</h5>`;
      } else {
        buffer += 'Current</h5>';
      }
    }

    buffer += `<ul class="list-group list-group-flush">`;
    buffer += `<li class="list-group-item"><strong>Duration:</strong> ${summary.duration}</li>`;
    if (summary.weight > 0) buffer += `<li class="list-group-item"><strong>Total Weight:</strong> ${summary.weight}</li>`;
    if (summary.distance > 0) buffer += `<li class="list-group-item"><strong>Total Distance: </strong> ${summary.distance}</li>`;
    buffer += `</ul>`;
    containerEl.innerHTML = buffer;
  }

  hasPermissionToDeleteItemInNamedCollection(name, item) {
    if (item.completed) {
      return item.completed === true;
    }

    return false;
  }

  hasPermissionToActionItemInNamedCollection(actionName, name, item) {
    let result = false;

    if (actionName === 'template') {
      if (item.completed && item.completed === true) {
        result = true;
      }
    }

    if (actionName === 'continue') {
      if (item.completed === false) {
        result = true;
      }
    }

    return result;
  }

  getModifierForItemInNamedCollection(name, item) {
    let result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.Modifier.inactive;

    if (item.completed) {
      if (item.completed !== true) {
        result = ui_framework_jps__WEBPACK_IMPORTED_MODULE_0__.Modifier.active;
      }
    }

    return result;
  }

  renderBackgroundForItemInNamedCollection(containerEl, name, item) {
    /*
    Remove a previous chart reference
     */
    let foundIndex = this.chartRefs.findIndex(ref => ref._id === item._id);

    if (foundIndex) {
      //this.chartRefs[foundIndex].chart?.destroy();
      logger(`Removing old chart reference for workout ${item._id}`);
      this.chartRefs.splice(foundIndex, 1);
    }

    logger(`Rendering chart for`);
    logger(item); // we are going to render a chart for the workout

    if (item.exercises) {
      const dataSourceKeyId = this.getDataSourceKeyId();
      const resultDataKeyId = this.getIdForItemInNamedCollection(name, item);
      let canvas = document.createElement('canvas'); //browserUtil.addAttributes(canvas,[{name:'style',value:'height:100%; width:100%'}]);

      canvas.setAttribute(this.collectionUIConfig.keyId, resultDataKeyId);
      canvas.setAttribute(dataSourceKeyId, this.collectionUIConfig.viewConfig.dataSourceId); // chart labels are the exercise names (shortened to 10 characters)

      let labels = [];
      let data = [];
      let bgColour = [];
      let brColour = [];
      item.exercises.forEach(exercise => {
        labels.push((0,_MiscFunctions__WEBPACK_IMPORTED_MODULE_8__.truncateString)(exercise.name, 10));

        if (exercise.type === 'cardio') {
          data.push(exercise.distance);
          bgColour.push(WorkoutsViewUsingContext.bgCardio);
          brColour.push(WorkoutsViewUsingContext.borderCardio);
        } else {
          data.push(exercise.weight);
          bgColour.push(WorkoutsViewUsingContext.bgStrength);
          brColour.push(WorkoutsViewUsingContext.borderStrength);
        }
      });
      let chartData = {
        labels: labels,
        datasets: [{
          label: 'Exercises',
          data: data,
          backgroundColor: bgColour,
          borderColor: brColour,
          borderWidth: 1
        }]
      };
      const config = {
        type: 'bar',
        data: chartData,
        options: {
          responsive: false,
          animation: false,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
      logger(config);

      try {
        // @ts-ignore
        let ref = {
          _id: item._id,
          chart: new chart_js_auto__WEBPACK_IMPORTED_MODULE_5__["default"](canvas.getContext('2d'), config)
        };
        this.chartRefs.push(ref);
        containerEl.appendChild(canvas);
      } catch (err) {
        console.log(err);
      }
    }
  }

  itemAction(view, actionName, selectedItem) {
    super.itemAction(view, actionName, selectedItem); // @ts-ignore

    if (actionName === WorkoutsViewUsingContext.DOMConfig.collectionConfig.extraActions[0].name) {
      // add the current list of exercises to the current workout
      _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addWorkoutExercisesToCurrentWorkout(selectedItem);
    } // @ts-ignore


    if (actionName === WorkoutsViewUsingContext.DOMConfig.collectionConfig.extraActions[1].name) {
      // continue the current workout
      _App__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().showCurrentWorkout();
    }
  }

  calculateExerciseSummary(item) {
    let result = {
      weight: 0,
      distance: 0,
      duration: '00:00'
    };

    if (item.exercises) {
      for (let index = 0; index < item.exercises.length; index++) {
        const exercise = item.exercises[index];
        result.weight += exercise.weight;
        result.distance += exercise.distance;
        result.duration = (0,_DurationFunctions__WEBPACK_IMPORTED_MODULE_9__.addDurations)(result.duration, exercise.duration);
      }
    }

    return result;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map