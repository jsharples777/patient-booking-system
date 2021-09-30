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
const SELECT = {
  appointmentType: 'event-appt-type',
  patientSearch: 'event-patient'
};

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");





const logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('appointment-controller');
class AppointmentController {
  static getInstance() {
    if (!AppointmentController._instance) {
      AppointmentController._instance = new AppointmentController();
    }

    return AppointmentController._instance;
  }

  viewElements = {
    datePicker: null,
    calendar: null,
    popup: null,
    range: null,
    titleInput: null,
    descriptionTextarea: null,
    deleteButton: null,
    patientCancelledButton: null,
    patientDNAButton: null,
    patientSearchEl: null,
    appointmentTypeEl: null,
    appointmentTypeDropdown: null,
    patientSearchDropdown: null
  };
  dataElements = {
    appointmentTypes: null,
    clinicConfig: null,
    oldEvent: null,
    tempEvent: {},
    isDeletingEvent: false,
    isRestoringEvent: false
  };
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

  constructor() {
    this.handleNewDatePicked = this.handleNewDatePicked.bind(this);
    this.onPageLoading = this.onPageLoading.bind(this);
    this.onAppointmentEditRequested = this.onAppointmentEditRequested.bind(this);
    this.onAppointmentDeleting = this.onAppointmentDeleting.bind(this);
    this.onAppointmentDeleted = this.onAppointmentDeleted.bind(this);
    this.onAppointmentCreated = this.onAppointmentCreated.bind(this);
    this.onAppointmentContext = this.onAppointmentContext.bind(this);
    this.onAppointmentUpdated = this.onAppointmentUpdated.bind(this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes, this);
    _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager().addChangeListenerForName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, this);
  }

  handleNewDatePicked(event, inst) {
    logger(`Handling new date picked`);
    logger(event);
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
    return this.getColourForAppointmentType(appointment.type);
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
          description: appointment.note,
          color: this.getColourForAppointment(appointment),
          allDay: false,
          editable: canEdit,
          resource: appointment.provider,
          patientId: appointment._patient,
          isDNA: appointment.isDNA,
          isCancelled: appointment.isCancelled,
          createdBy: appointment.createdBy,
          createdOn: appointment.created,
          modifiedOn: appointment.modified,
          arrivalTime: appointment.arrivalTime
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

  onDocumentLoaded() {
    // setup the scheduler
    // @ts-ignore
    AppointmentController.datePicker = mobiscroll5.datepicker(document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_CONTAINER.calendarControl), {
      controls: ['calendar'],
      display: "inline",
      dateFormat: 'YYYYMMDD',
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      showWeekNumbers: true,
      onChange: (event, inst) => {
        var _AppointmentControlle;

        (_AppointmentControlle = AppointmentController.getInstance().viewElements.calendar) === null || _AppointmentControlle === void 0 ? void 0 : _AppointmentControlle.navigate(event.value);
        AppointmentController.getInstance().handleNewDatePicked(event.value, inst);
      }
    });
    let options;

    if (this.dataElements.clinicConfig) {
      logger('Using clinic config options');
      options = {
        clickToCreate: this.dataElements.clinicConfig.clickToCreate,
        dragTimeStep: this.dataElements.clinicConfig.dragTimeStep,
        dragToCreate: this.dataElements.clinicConfig.dragToCreate,
        dragToMove: this.dataElements.clinicConfig.dragToMove,
        dragToResize: this.dataElements.clinicConfig.dragToResize,
        min: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(this.dataElements.clinicConfig.min, "months"),
        controls: this.dataElements.clinicConfig.controls,
        showControls: this.dataElements.clinicConfig.showControls,
        view: this.dataElements.clinicConfig.view,
        invalidateEvent: this.dataElements.clinicConfig.invalidateEvent,
        invalid: this.dataElements.clinicConfig.invalid
      };
    } else {
      logger('Using DEFAULT config options');
      options = {
        clickToCreate: 'double',
        dragTimeStep: 5,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        min: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(3, "months"),
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
      var _AppointmentControlle2;

      AppointmentController.getInstance().handleNewDatePicked(event.date, inst);
      (_AppointmentControlle2 = AppointmentController.getInstance().viewElements.datePicker) === null || _AppointmentControlle2 === void 0 ? void 0 : _AppointmentControlle2.setVal(event.date);
    };

    options.onPageLoading = (event, inst) => {
      AppointmentController.getInstance().onPageLoading(event, inst);
    };

    options.onEventCreated = (event, inst) => {
      AppointmentController.getInstance().onAppointmentCreated(event, inst);
      AppointmentController.getInstance().viewElements.popup.close(); // store temporary event

      AppointmentController.getInstance().dataElements.tempEvent = event.event;
      logger('Creating event');
      logger(event);
      this.createAddPopup(event.target);
    };

    options.onEventDelete = (event, inst) => {
      AppointmentController.getInstance().onAppointmentDeleting(event, inst);
    };

    options.onEventDeleted = (event, inst) => {
      AppointmentController.getInstance().onAppointmentDeleted(event, inst); // @ts-ignore

      mobiscroll5.snackbar({
        button: {
          action: function () {
            // @ts-ignore
            AppointmentController.getInstance().viewElements.calendar.addEvent(event.event);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    };

    options.onEventRightClick = (event, inst) => {
      AppointmentController.getInstance().onAppointmentContext(event, inst);
    };

    options.onEventUpdated = (event, inst) => {
      AppointmentController.getInstance().onAppointmentUpdated(event, inst);
    };

    options.onEventDoubleClick = (event, inst) => {
      AppointmentController.getInstance().onAppointmentEditRequested(event, inst);
    };

    options.onEventClick = args => {
      AppointmentController.getInstance().dataElements.oldEvent = Object.assign({}, args.event);
      AppointmentController.getInstance().dataElements.tempEvent = args.event;

      if (!AppointmentController.getInstance().viewElements.popup.isVisible()) {
        logger(args);
        this.createEditPopup(args);
      }
    };

    this.viewElements.titleInput = document.getElementById('event-title');
    this.viewElements.descriptionTextarea = document.getElementById('event-desc');
    this.viewElements.deleteButton = document.getElementById('event-delete');
    this.viewElements.patientCancelledButton = document.getElementById('event-cancelled');
    this.viewElements.patientDNAButton = document.getElementById('event-dna');
    this.viewElements.patientSearchEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.SELECT.patientSearch);
    this.viewElements.appointmentTypeEl = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.SELECT.appointmentType); // @ts-ignore

    this.viewElements.popup = mobiscroll5.popup('#add-appointment-popup', {
      display: 'bottom',
      contentPadding: false,
      fullScreen: true,
      onClose: function () {
        if (AppointmentController.getInstance().dataElements.isDeletingEvent) {
          // @ts-ignore
          AppointmentController.getInstance().viewElements.calendar.removeEvent(AppointmentController.getInstance().dataElements.tempEvent);
        } else if (AppointmentController.getInstance().dataElements.isRestoringEvent) {
          // @ts-ignore
          AppointmentController.getInstance().viewElements.calendar.updateEvent(AppointmentController.getInstance().dataElements.oldEvent);
        }
      },
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
      AppointmentController.getInstance().dataElements.tempEvent.title = ev.target.value;
    });
    this.viewElements.descriptionTextarea.addEventListener('change', function (ev) {
      // update current event's title
      AppointmentController.getInstance().dataElements.tempEvent.description = ev.target.value;
    }); // @ts-ignore

    this.viewElements.range = mobiscroll5.datepicker('#event-date', {
      controls: ['date'],
      select: 'range',
      startInput: '#start-input',
      endInput: '#end-input',
      showRangeLabels: false,
      touchUi: true,
      stepMinute: 15,
      maxTime: '17:00',
      responsive: AppointmentController.datePickerResponsive,
      onChange: function (args) {
        var date = args.value; // update event's start date

        AppointmentController.getInstance().dataElements.tempEvent.start = date[0];
        AppointmentController.getInstance().dataElements.tempEvent.end = date[1];
      }
    });
    this.viewElements.deleteButton.addEventListener('click', function () {
      // delete current event on button click
      // @ts-ignore
      AppointmentController.getInstance().viewElements.calendar.removeEvent(AppointmentController.getInstance().dataElements.tempEvent);
      AppointmentController.getInstance().viewElements.popup.close(); // save a local reference to the deleted event

      let deletedEvent = AppointmentController.getInstance().dataElements.tempEvent; // @ts-ignore

      mobiscroll5.snackbar({
        button: {
          action: function () {
            // @ts-ignore
            AppointmentController.getInstance().viewElements.calendar.addEvent(deletedEvent);
          },
          text: 'Undo'
        },
        message: 'Event deleted'
      });
    }); // @ts-ignore

    this.viewElements.calendar = mobiscroll5.eventcalendar(document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_CONTAINER.calendarDetail), options);
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

          if (this.viewElements.calendar) {
            logger('State changed, using clinic config options');
            this.viewElements.calendar.setOptions({
              clickToCreate: this.dataElements.clinicConfig.clickToCreate,
              dragTimeStep: this.dataElements.clinicConfig.dragTimeStep,
              dragToCreate: this.dataElements.clinicConfig.dragToCreate,
              dragToMove: this.dataElements.clinicConfig.dragToMove,
              dragToResize: this.dataElements.clinicConfig.dragToResize,
              min: moment__WEBPACK_IMPORTED_MODULE_1___default()().subtract(this.dataElements.clinicConfig.min, "months"),
              controls: this.dataElements.clinicConfig.controls,
              showControls: this.dataElements.clinicConfig.showControls,
              view: this.dataElements.clinicConfig.view,
              invalidateEvent: this.dataElements.clinicConfig.invalidateEvent,
              invalid: this.dataElements.clinicConfig.invalid
            });
            this.viewElements.range.setOptions({
              stepMinute: this.dataElements.clinicConfig.dragTimeStep
            });
          }

          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch:
        {
          let patients = [];
          newValue.forEach(patient => {
            patients.push({
              text: `${patient.name.surname}, ${patient.name.firstname}`,
              value: patient._id
            });
          }); // add the patient search values to the data of the select dropdown
          // @ts-ignore

          AppointmentController.patientSearchDropdown = mobiscroll5.select('#' + _AppTypes__WEBPACK_IMPORTED_MODULE_2__.SELECT.patientSearch, {
            filter: true,
            data: patients,
            onChange: (event, inst) => {
              // @ts-ignore
              mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value = event.valueText;
              console.log(event.value);
              AppointmentController.getInstance().dataElements.tempEvent.patientId = event.value;
            }
          });
          break;
        }

      case _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes:
        {
          this.dataElements.appointmentTypes = newValue;
          let types = [];
          newValue.forEach(type => {
            types.push(type.name);
          }); // add the patient search values to the data of the select dropdown
          // @ts-ignore

          this.viewElements.appointmentTypeDropdown = mobiscroll5.select('#' + _AppTypes__WEBPACK_IMPORTED_MODULE_2__.SELECT.appointmentType, {
            data: types,
            onChange: (event, inst) => {
              // @ts-ignore
              mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value = event.valueText;
            }
          });
          break;
        }
    }
  }

  stateChangedItemAdded(managerName, name, itemAdded) {}

  stateChangedItemRemoved(managerName, name, itemRemoved) {}

  stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {}

  createAddPopup(elm) {
    // hide delete button inside add popup
    this.viewElements.deleteButton.style.display = 'none';
    this.viewElements.patientCancelledButton.style.display = 'none';
    this.viewElements.patientDNAButton.style.display = 'none'; // show the dropdowns

    this.viewElements.patientSearchEl.style.display = 'block';
    this.viewElements.appointmentTypeEl.style.display = 'block';
    this.dataElements.isDeletingEvent = true;
    this.dataElements.isRestoringEvent = false; // set popup header text and buttons for adding

    this.viewElements.popup.setOptions({
      headerText: 'New event',
      buttons: ['cancel', {
        text: 'Add',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentController.getInstance().viewElements.range.getVal(); // store the event created by the UI

          let mobiId = AppointmentController.getInstance().dataElements.tempEvent.id; // generate a new UUID

          let appointmentId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(); // get the colour for the event type
          // @ts-ignore

          let colour = AppointmentController.getInstance().getColourForAppointmentType(mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value); // @ts-ignore

          let updatedEvent = {
            id: appointmentId,
            title: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value,
            description: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            color: colour,
            patientId: AppointmentController.getInstance().dataElements.tempEvent.patientId
          };
          logger('inserting');
          logger(updatedEvent); // remove the original event

          AppointmentController.getInstance().viewElements.calendar.removeEvent([mobiId]);
          AppointmentController.getInstance().viewElements.calendar.addEvent(updatedEvent); // @ts-ignore

          AppointmentController.getInstance().dataElements.isDeletingEvent = false; // navigate the calendar to the correct view
          // @ts-ignore

          AppointmentController.getInstance().viewElements.calendar.navigate(updatedEvent.start); // @ts-ignore

          AppointmentController.getInstance().viewElements.popup.close();
        },
        cssClass: 'mbsc-popup-button-primary'
      }]
    }); // fill popup with a new event data
    // @ts-ignore

    mobiscroll5.getInst(this.viewElements.titleInput).value = this.dataElements.tempEvent.title; // @ts-ignore

    mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = '';
    this.viewElements.range.setVal([this.dataElements.tempEvent.start, this.dataElements.tempEvent.end]);
    this.viewElements.range.setOptions({
      controls: this.dataElements.tempEvent.allDay ? ['date'] : ['datetime'],
      responsive: this.dataElements.tempEvent.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
    }); // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: elm
    });
    this.viewElements.popup.open();
  }

  createEditPopup(args) {
    let ev = args.event;
    console.log(ev.patientId); // show delete button inside edit popup

    this.viewElements.deleteButton.style.display = 'block';
    this.viewElements.patientCancelledButton.style.display = 'block';
    this.viewElements.patientDNAButton.style.display = 'block'; // show the dropdowns

    this.viewElements.patientSearchEl.style.display = 'none';
    this.viewElements.appointmentTypeEl.style.display = 'none';
    this.dataElements.isDeletingEvent = false;
    this.dataElements.isRestoringEvent = true; // set popup header text and buttons for editing

    this.viewElements.popup.setOptions({
      headerText: 'Edit event',
      buttons: ['cancel', {
        text: 'Save',
        keyCode: 'enter',
        handler: function () {
          let date = AppointmentController.getInstance().viewElements.range.getVal(); // update event with the new properties on save button click
          // @ts-ignore

          let updatedEvent = {
            id: ev.id,
            title: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value,
            description: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value,
            allDay: false,
            start: date[0],
            end: date[1],
            free: false,
            color: ev.color
          };
          logger('updated');
          logger(updatedEvent);
          AppointmentController.getInstance().viewElements.calendar.updateEvent(updatedEvent); // navigate the calendar to the correct view
          // @ts-ignore

          AppointmentController.getInstance().viewElements.calendar.navigate(date[0]);
          AppointmentController.getInstance().dataElements.isRestoringEvent = false;
          AppointmentController.getInstance().viewElements.popup.close();
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
      responsive: ev.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
    }); // set anchor for the popup

    this.viewElements.popup.setOptions({
      anchor: args.domEvent.currentTarget
    });
    this.viewElements.popup.open();
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EqualityFunctions */ "./src/app/EqualityFunctions.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");






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

    let restSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.RESTApiStateManager.getInstance();
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
    let qlSM = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.GraphQLApiStateManager.getInstance();
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
    let aggregateSM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.AggregateStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let memorySM = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.MemoryBufferStateManager(_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncREST = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.AsyncStateManagerWrapper(aggregateSM, restSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    let asyncQL = new ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.AsyncStateManagerWrapper(aggregateSM, qlSM, _EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    aggregateSM.addStateManager(memorySM, [], false);
    aggregateSM.addStateManager(asyncREST, [_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentUserSearches, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.recentPatientSearches], false);
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
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SocketManager.getInstance().setListener(socketListerDelegate); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger(`Setting up chat system for user ${this.getLoggedInUserId()}: ${this.getLoggedInUsername()}`);

    if (this.getLoggedInUserId().trim().length > 0) {
      // setup the chat system
      let chatManager = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.ChatManager.getInstance(); // this connects the manager to the socket system
      // setup the chat notification system

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.NotificationController.getInstance();
      chatManager.setCurrentUser(this.getLoggedInUsername()); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointmentTypes);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.clinicConfig);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.patientSearch);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.appointments); // apply any queued changes from being offline

      ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.DownloadManager.getInstance().processOfflineItems();
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
    let exerciseTypeDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.exerciseTypes, 'Exercise', true, true, true, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.text, true, "Exercise name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.limitedChoice, true, "Choose cardio or strength", new ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.SimpleValueDataSource([{
      name: 'Cardio',
      value: 'cardio'
    }, {
      name: 'Strength',
      value: 'strength'
    }]));
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "duration", "Duration", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.duration, true, "Exercise time");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "sets", "Sets", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.integer, false, "Number of sets");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "reps", "Repetitions", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.integer, false, "Number of reps");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "weight", "Weight", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.float, false, "Weight used");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "distance", "Distance", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.float, false, "Distance travelled");
    cLogger(`Exercise type data object definition`);
    cLogger(exerciseTypeDefinition);
    cLoggerDetail(ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.ObjectDefinitionRegistry.getInstance().findDefinition('exerciseType'));
    let workoutDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.workouts, 'Workout', true, true, true, '_id');
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "name", "Name", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.text, false, "Give the workout a name");
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "completed", "Completed", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.boolean, true, "Have completed the workout");
    let exercisesFieldDefinition = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "exercises", "Exercises", ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.FieldType.collection, true, "Exercises in this workout");
    exercisesFieldDefinition.idType = ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.KeyType.collection;
    exercisesFieldDefinition.collectionOfDataObjectId = exerciseTypeDefinition.id;
    cLogger(`Workout data object definition`);
    cLogger(workoutDefinition);
    cLoggerDetail(ui_framework_jps__WEBPACK_IMPORTED_MODULE_4__.ObjectDefinitionRegistry.getInstance().findDefinition('workout'));
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
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");




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
/* harmony import */ var _app_AppointmentController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/AppointmentController */ "./src/app/AppointmentController.ts");
/* harmony import */ var ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-framework-jps */ "./node_modules/ui-framework-jps/dist/index.js");
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
    this.setupNavigationItemHandling();
    _app_AppointmentController__WEBPACK_IMPORTED_MODULE_5__.AppointmentController.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.SecurityManager.getInstance().onDocumentLoaded(_app_AppTypes__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION.logout);
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
    this.userSearchSidebar = ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.UserSearchSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager());
    this.userSearchSidebar.onDocumentLoaded();
  }

  setupChatViews() {
    // add the views to the chat side bar
    this.chatSidebar = ui_framework_jps__WEBPACK_IMPORTED_MODULE_6__.ChatRoomsSidebar.getInstance(_app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getStateManager());
    this.chatSidebar.onDocumentLoaded();
  }

}
localStorage.debug = 'api-ts-results appointment-controller';
localStorage.plugin = 'chat';
(debug__WEBPACK_IMPORTED_MODULE_0___default().log) = console.info.bind(console);
$(function () {
  // @ts-ignore
  //mobiscroll4.setOptions = {theme:'ios'};
  // @ts-ignore
  mobiscroll5.setOptions({
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