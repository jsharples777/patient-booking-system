import debug from "debug";
import moment from "moment";
import {STATE_NAMES, VIEW_CONTAINER} from "./AppTypes";
import Controller from "./Controller";
import {StateChangeListener} from "../framework/state/StateChangeListener";


const logger = debug('appointment-controller');

export class AppointmentController implements StateChangeListener {
    private static _instance: AppointmentController;

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }

    private static datePicker: any | null = null;
    private static calendar: any | null = null;
    private static appointmentTypes: any[] | null = null;
    private static clinicConfig: any | null = null;

    private static popup:any|null = null;
    private static range:any|null = null;
    private static oldEvent:any|null = null;
    private static tempEvent:any = {};

    private static deleteEvent:boolean = false;
    private static restoreEvent:boolean = false;

    private static titleInput:any|null = null;
    private static descriptionTextarea:any|null = null;
    private static allDaySwitch:any|null = null;
    private static freeSegmented:any|null = null;
    private static busySegmented:any|null = null;
    private static deleteButton:any|null = null;

    private static datePickerResponsive = {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    }
    private static datetimePickerResponsive = {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    }

    private constructor() {
        this.handleNewDatePicked = this.handleNewDatePicked.bind(this);
        this.onPageLoading = this.onPageLoading.bind(this);
        this.onAppointmentEditRequested = this.onAppointmentEditRequested.bind(this);
        this.onAppointmentDeleting = this.onAppointmentDeleting.bind(this);
        this.onAppointmentDeleted = this.onAppointmentDeleted.bind(this);
        this.onAppointmentCreated = this.onAppointmentCreated.bind(this);
        this.onAppointmentContext = this.onAppointmentContext.bind(this);
        this.onAppointmentUpdated = this.onAppointmentUpdated.bind(this);

        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.clinicConfig,this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTypes,this);

    }

    public handleNewDatePicked(event: any, inst: any): void {
        logger(`Handling new date picked`);
        logger(event);
    }

    protected getColourForAppointment(appointment: any) {
        let result = `rgba(10, 100, 100, 50)`;
        if (AppointmentController.appointmentTypes) {
            let foundIndex = AppointmentController.appointmentTypes.findIndex((type) => type.name === appointment.type);
            if (foundIndex >= 0) result = AppointmentController.appointmentTypes[foundIndex].colour;
        }
        return result;
    }

    public onPageLoading(event: any, inst: any): void {
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        const loadDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        logger(`Need to load date ${loadDate}`);

        let canEdit = (loadDate < today);

        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results: any[] = [];
        appointments.forEach((appointment: any) => {
            if ((appointment.start === loadDate)) {
                logger('Found appointment');
                logger(appointment);

                // convert the start and end time into the format for the calendar
                const time = parseInt(appointment.time); // HHMMSS as a time
                const duration = appointment.duration; // seconds

                const startTimeHours = Math.floor(appointment.time / 10000);
                const startTimeMinutes = Math.floor((time - (startTimeHours * 10000)) / 100);
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
                    start: moment(`${loadDate}${appointment.time}`, 'YYYYMMDDHHmmss'),
                    end: moment(`${loadDate}${timeString}`, 'YYYYMMDDHHmm'),
                    title: appointment.name,
                    color: this.getColourForAppointment(appointment),
                    allDay: false,
                    editable: canEdit,
                    resource: appointment.provider
                }
                logger('Converted to event');
                logger(result);
                results.push(result);
            }

        });

        inst.setEvents(results);


    }

    public onAppointmentEditRequested(event: any, inst: any): void {
        logger(event);

    }

    public onAppointmentDeleting(event: any, inst: any): boolean {
        logger(event);
        return false;
    }

    public onAppointmentDeleted(event: any, inst: any): void {
        logger(event);

    }

    public onAppointmentCreated(event: any, inst: any): void {
        logger(event);

    }

    public onAppointmentContext(event: any, inst: any): void {

        logger(event);
    }

    public onAppointmentUpdated(event: any, inst: any): void {

        logger(event);
    }

    public onDocumentLoaded() {
        // setup the scheduler
        // @ts-ignore
        AppointmentController.datePicker = mobiscroll5.datepicker(document.getElementById(VIEW_CONTAINER.calendarControl), {
            controls: ['calendar'],
            display: "inline",
            dateFormat: 'YYYYMMDD',
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showWeekNumbers: true,
            onChange: (event: any, inst: any) => {
                AppointmentController.calendar?.navigate(event.value);
                AppointmentController.getInstance().handleNewDatePicked(event.value, inst)
            }
        });

        let options: any;
        if (AppointmentController.clinicConfig) {
            logger('Using clinic config options');
            options = {
                clickToCreate: AppointmentController.clinicConfig.clickToCreate,
                dragTimeStep: AppointmentController.clinicConfig.dragTimeStep,
                dragToCreate: AppointmentController.clinicConfig.dragToCreate,
                dragToMove: AppointmentController.clinicConfig.dragToMove,
                dragToResize: AppointmentController.clinicConfig.dragToResize,
                min: moment().subtract(AppointmentController.clinicConfig.min, "months"),
                controls: AppointmentController.clinicConfig.controls,
                showControls: AppointmentController.clinicConfig.showControls,
                view: AppointmentController.clinicConfig.view,
                invalidateEvent: AppointmentController.clinicConfig.invalidateEvent,
                invalid: AppointmentController.clinicConfig.invalid,
            }
        } else {
            logger('Using DEFAULT config options');
            options = {
                clickToCreate: 'double',
                dragTimeStep: 5,
                dragToCreate: true,
                dragToMove: true,
                dragToResize: true,
                min: moment().subtract(3, "months"),
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
                },
                    {
                        start: '12:00',
                        end: '13:00',
                        title: 'Lunch Break',
                        recurring: {
                            repeat: 'weekly',
                            weekDays: 'MO,TU,WE,TH,FR'
                        }
                    }
                ]

            }
        }
        options.onSelectedDateChange = (event: any, inst: any) => {
            AppointmentController.getInstance().handleNewDatePicked(event.date, inst);
            AppointmentController.datePicker?.setVal(event.date);
        };
        options.onPageLoading = (event: any, inst: any) => {
            AppointmentController.getInstance().onPageLoading(event, inst);
        };
        options.onEventCreated = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentCreated(event, inst);
            AppointmentController.popup.close();
            // store temporary event
            AppointmentController.tempEvent = event.event;
            console.log(event.event);
            this.createAddPopup(event.target);
        };
        options.onEventDelete = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentDeleting(event, inst);
        };
        options.onEventDeleted = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentDeleted(event, inst);
            // @ts-ignore
            mobiscroll5.snackbar({
                button: {
                    action: function () {
                        // @ts-ignore
                        AppointmentController.calendar.addEvent(event.event);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        };
        options.onEventRightClick = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentContext(event, inst);
        };
        options.onEventUpdated = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentUpdated(event, inst);
        };
        options.onEventDoubleClick = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentEditRequested(event, inst);
        };
        options.onEventClick = (args:any) => {
            AppointmentController.oldEvent = Object.assign({}, args.event);
            AppointmentController.tempEvent = args.event;

            if (!AppointmentController.popup.isVisible()) {
                console.log(args);
                this.createEditPopup(args);
            }
        }

        options.calendar = {labels: true}

        AppointmentController.titleInput = document.getElementById('event-title');
        AppointmentController.descriptionTextarea = document.getElementById('event-desc');
        AppointmentController.allDaySwitch = document.getElementById('event-all-day');
        AppointmentController.freeSegmented = document.getElementById('event-status-free');
        AppointmentController.busySegmented = document.getElementById('event-status-busy');
        AppointmentController.deleteButton = document.getElementById('event-delete');


        // @ts-ignore
        AppointmentController.popup = mobiscroll5.popup('#demo-add-popup', {
            display: 'bottom',
            contentPadding: false,
            fullScreen: true,
            onClose: function () {
                if (AppointmentController.deleteEvent) {
                    // @ts-ignore
                    AppointmentController.calendar.removeEvent(AppointmentController.tempEvent);
                } else if (AppointmentController.restoreEvent) {
                    // @ts-ignore
                    AppointmentController.calendar.updateEvent(AppointmentController.oldEvent);
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

        AppointmentController.titleInput.addEventListener('input', function (ev:any) {
            // update current event's title
            AppointmentController.tempEvent.title = ev.target.value;
        });

        AppointmentController.descriptionTextarea.addEventListener('change', function (ev:any) {
            // update current event's title
            AppointmentController.tempEvent.description = ev.target.value;
        });

        AppointmentController.allDaySwitch.addEventListener('change', function () {
            let checked = AppointmentController.allDaySwitch.checked
            // change range settings based on the allDay
            AppointmentController.range.setOptions({
                controls: checked ? ['date'] : ['datetime'],
                responsive: checked ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
            });

            // update current event's allDay property
            AppointmentController.tempEvent.allDay = checked;
        });

        // @ts-ignore
        AppointmentController.range = mobiscroll5.datepicker('#event-date', {
            controls: ['date'],
            select: 'range',
            startInput: '#start-input',
            endInput: '#end-input',
            showRangeLabels: false,
            touchUi: true,
            responsive: AppointmentController.datePickerResponsive,
            onChange: function (args:any) {
                var date = args.value;
                // update event's start date
                AppointmentController.tempEvent.start = date[0];
                AppointmentController.tempEvent.end = date[1];
            }
        });

        document.querySelectorAll('input[name=event-status]').forEach(function (elm) {
            elm.addEventListener('change', function () {
                // update current event's free property
                // @ts-ignore
                AppointmentController.tempEvent.free = mobiscroll5.getInst(AppointmentController.freeSegmented).checked;
            });
        });

        AppointmentController.deleteButton.addEventListener('click', function () {
            // delete current event on button click
            // @ts-ignore
            AppointmentController.calendar.removeEvent(AppointmentController.tempEvent);
            AppointmentController.popup.close();

            // save a local reference to the deleted event
            let deletedEvent = AppointmentController.tempEvent;

            // @ts-ignore
            mobiscroll5.snackbar({
                button: {
                    action: function () {
                        // @ts-ignore
                        AppointmentController.calendar.addEvent(deletedEvent);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });

        // @ts-ignore
        AppointmentController.calendar = mobiscroll5.eventcalendar(document.getElementById(VIEW_CONTAINER.calendarDetail), options);

    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName():string {
        return "Appointment Manager";
    }

    stateChanged(managerName:string, name:string, newValue:any):void {
        logger(`Handling state changed ${name}`);

        switch (name) {
            case STATE_NAMES.appointmentTypes: {
                AppointmentController.appointmentTypes = newValue;
                break;
            }
            case STATE_NAMES.clinicConfig: {
                AppointmentController.clinicConfig = newValue[0];
                if (AppointmentController.calendar) {
                    logger('State changed, using clinic config options');

                    AppointmentController.calendar.setOptions({
                        clickToCreate: AppointmentController.clinicConfig.clickToCreate,
                        dragTimeStep: AppointmentController.clinicConfig.dragTimeStep,
                        dragToCreate: AppointmentController.clinicConfig.dragToCreate,
                        dragToMove: AppointmentController.clinicConfig.dragToMove,
                        dragToResize: AppointmentController.clinicConfig.dragToResize,
                        min: moment().subtract(AppointmentController.clinicConfig.min, "months"),
                        controls: AppointmentController.clinicConfig.controls,
                        showControls: AppointmentController.clinicConfig.showControls,
                        view: AppointmentController.clinicConfig.view,
                        invalidateEvent: AppointmentController.clinicConfig.invalidateEvent,
                        invalid: AppointmentController.clinicConfig.invalid,
                    });
                }
                break;
            }
        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
    }

    private createAddPopup(elm:HTMLElement) {
        // hide delete button inside add popup
        AppointmentController.deleteButton.style.display = 'none';

        AppointmentController.deleteEvent = true;
        AppointmentController.restoreEvent = false;

        // set popup header text and buttons for adding
        AppointmentController.popup.setOptions({
            headerText: 'New event',
            buttons: [
                'cancel',
                {
                    text: 'Add',
                    keyCode: 'enter',
                    handler: function () {
                        // @ts-ignore
                        AppointmentController.calendar.updateEvent(AppointmentController.tempEvent);
                        // @ts-ignore
                        AppointmentController.deleteEvent = false;

                        // navigate the calendar to the correct view
                        // @ts-ignore
                        AppointmentController.calendar.navigate(AppointmentController.tempEvent.start);

                        // @ts-ignore
                        AppointmentController.popup.close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with a new event data
        // console.log(AppointmentController.titleInput);
        // // @ts-ignore
        // console.log(mobiscroll5.getInst(AppointmentController.titleInput));
        // AppointmentController.popup.getInst().refresh;
        // console.log(AppointmentController.popup.getInst());
        //
        // AppointmentController.titleInput.value = AppointmentController.tempEvent.title;
        //
        // AppointmentController.descriptionTextarea.value = '';
        // AppointmentController.allDaySwitch.checked = AppointmentController.tempEvent.allDay;
        // AppointmentController.range.setVal([AppointmentController.tempEvent.start, AppointmentController.tempEvent.end]);
        // AppointmentController.busySegmented.checked = true;
        // AppointmentController.range.setOptions({
        //     controls: AppointmentController.tempEvent.allDay ? ['date'] : ['datetime'],
        //     responsive: AppointmentController.tempEvent.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
        // });
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.titleInput).value = AppointmentController.tempEvent.title;
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.descriptionTextarea).value = '';
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.allDaySwitch).checked = AppointmentController.tempEvent.allDay;
        AppointmentController.range.setVal([AppointmentController.tempEvent.start, AppointmentController.tempEvent.end]);
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.busySegmented).checked = true;
        AppointmentController.range.setOptions({
            controls: AppointmentController.tempEvent.allDay ? ['date'] : ['datetime'],
            responsive: AppointmentController.tempEvent.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
        });
        // set anchor for the popup
        AppointmentController.popup.setOptions({ anchor: elm});

        AppointmentController.popup.open();
    }

    private createEditPopup(args:any) {
        let ev = args.event;

        // show delete button inside edit popup
        AppointmentController.deleteButton.style.display = 'block';

        AppointmentController.deleteEvent = false;
        AppointmentController.restoreEvent = true;

        // set popup header text and buttons for editing
        AppointmentController.popup.setOptions({
            headerText: 'Edit event',
            buttons: [
                'cancel',
                {
                    text: 'Save',
                    keyCode: 'enter',
                    handler: function () {
                        let date = AppointmentController.range.getVal();
                        // update event with the new properties on save button click
                        // @ts-ignore
                        let updatedEvent = {
                            id: ev.id,
                            title: mobiscroll5.getInst(AppointmentController.titleInput).value,
                            description: mobiscroll5.getInst(AppointmentController.descriptionTextarea).value,
                            allDay: mobiscroll5.getInst(AppointmentController.allDaySwitch).checked,
                            start: date[0],
                            end: date[1],
                            free: mobiscroll5.getInst(AppointmentController.freeSegmented).checked,
                            color: ev.color,
                        };
                        console.log('updated');
                        console.log(updatedEvent)
                        AppointmentController.calendar.updateEvent(updatedEvent);

                        // navigate the calendar to the correct view
                        // @ts-ignore
                        AppointmentController.calendar.navigate(date[0]);;

                        AppointmentController.restoreEvent = false;
                        AppointmentController.popup.close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with the selected event data

        // AppointmentController.titleInput.value = ev.title || '';
        // AppointmentController.descriptionTextarea.value = ev.description || '';
        // AppointmentController.allDaySwitch.checked = ev.allDay || false;
        // AppointmentController.range.setVal([ev.start, ev.end]);
        // fill popup with the selected event data
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.titleInput).value = ev.title || '';
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.descriptionTextarea).value = ev.description || '';
        // @ts-ignore
        mobiscroll5.getInst(AppointmentController.allDaySwitch).checked = ev.allDay || false;
        AppointmentController.range.setVal([ev.start, ev.end]);

        if (ev.free) {
            // @ts-ignore
            mobiscroll5.getInst(AppointmentController.freeSegmented).checked = true;
        } else {
            // @ts-ignore
            mobiscroll5.getInst(AppointmentController.busySegmented).checked = true;
        }


        // change range settings based on the allDay
        AppointmentController.range.setOptions({
            controls: ev.allDay ? ['date'] : ['datetime'],
            responsive: ev.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
        });

        // set anchor for the popup
        AppointmentController.popup.setOptions({ anchor: args.domEvent.currentTarget ,theme:'ios'});
        AppointmentController.popup.open();
    }


}
