import debug from "debug";
import {datepicker, Datepicker, eventcalendar, Eventcalendar} from "@mobiscroll/javascript";
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

    private datePicker: Datepicker | null = null;
    private calendar: Eventcalendar | null = null;
    private appointmentTypes: any[] | null = null;
    private clinicConfig: any | null = null;

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

    public setViewObjects(datePicker: Datepicker, calendar: Eventcalendar): void {
        this.datePicker = datePicker;
        this.calendar = calendar;
    }

    protected getColourForAppointment(appointment: any) {
        let result = `rgba(10, 100, 100, 50)`;
        if (this.appointmentTypes) {
            let foundIndex = this.appointmentTypes.findIndex((type) => type.name === appointment.type);
            if (foundIndex >= 0) result = this.appointmentTypes[foundIndex].colour;
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
        this.datePicker = datepicker(document.getElementById(VIEW_CONTAINER.calendarControl), {
            controls: ['calendar'],
            display: "inline",
            dateFormat: 'YYYYMMDD',
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showWeekNumbers: true,
            onChange: (event: any, inst: any) => {
                this.calendar?.navigate(event.value);
                AppointmentController.getInstance().handleNewDatePicked(event.value, inst)
            }
        });

        let options: any;
        if (this.clinicConfig) {
            logger('Using clinic config options');
            options = {
                clickToCreate: this.clinicConfig.clickToCreate,
                dragTimeStep: this.clinicConfig.dragTimeStep,
                dragToCreate: this.clinicConfig.dragToCreate,
                dragToMove: this.clinicConfig.dragToMove,
                dragToResize: this.clinicConfig.dragToResize,
                min: moment().subtract(this.clinicConfig.min, "months"),
                controls: this.clinicConfig.controls,
                showControls: this.clinicConfig.showControls,
                view: this.clinicConfig.view,
                invalidateEvent: this.clinicConfig.invalidateEvent,
                invalid: this.clinicConfig.invalid,
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
            this.datePicker?.setVal(event.date);
        };
        options.onPageLoading = (event: any, inst: any) => {
            AppointmentController.getInstance().onPageLoading(event, inst);
        };
        options.onEventCreated = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentCreated(event, inst);
        };
        options.onEventDelete = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentDeleting(event, inst);
        };
        options.onEventDeleted = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentDeleted(event, inst);
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

        options.calendar = {labels: true}

        var calendar,
            popup,
            range,
            oldEvent,
            tempEvent = {},
            deleteEvent,
            restoreEvent,
            titleInput = document.getElementById('event-title'),
            descriptionTextarea = document.getElementById('event-desc'),
            allDaySwitch = document.getElementById('event-all-day'),
            freeSegmented = document.getElementById('event-status-free'),
            busySegmented = document.getElementById('event-status-busy'),
            deleteButton = document.getElementById('event-delete'),
            datePickerResponsive = {
                medium: {
                    controls: ['calendar'],
                    touchUi: false
                }
            },
            datetimePickerResponsive = {
                medium: {
                    controls: ['calendar', 'time'],
                    touchUi: false
                }
            },

        function createAddPopup(elm) {
            // hide delete button inside add popup
            deleteButton.style.display = 'none';

            deleteEvent = true;
            restoreEvent = false;

            // set popup header text and buttons for adding
            popup.setOptions({
                headerText: 'New event',
                buttons: [
                    'cancel',
                    {
                        text: 'Add',
                        keyCode: 'enter',
                        handler: function () {
                            calendar.updateEvent(tempEvent);
                            deleteEvent = false;

                            // navigate the calendar to the correct view
                            calendar.navigate(tempEvent.start);

                            popup.close();
                        },
                        cssClass: 'mbsc-popup-button-primary'
                    }
                ]
            });

            // fill popup with a new event data
            mobiscroll.getInst(titleInput).value = tempEvent.title;
            mobiscroll.getInst(descriptionTextarea).value = '';
            mobiscroll.getInst(allDaySwitch).checked = tempEvent.allDay;
            range.setVal([tempEvent.start, tempEvent.end]);
            mobiscroll.getInst(busySegmented).checked = true;
            range.setOptions({
                controls: tempEvent.allDay ? ['date'] : ['datetime'],
                responsive: tempEvent.allDay ? datePickerResponsive : datetimePickerResponsive
            });

            // set anchor for the popup
            popup.setOptions({ anchor: elm });

            popup.open();
        }

        function createEditPopup(args) {
            var ev = args.event;

            // show delete button inside edit popup
            deleteButton.style.display = 'block';

            deleteEvent = false;
            restoreEvent = true;

            // set popup header text and buttons for editing
            popup.setOptions({
                headerText: 'Edit event',
                buttons: [
                    'cancel',
                    {
                        text: 'Save',
                        keyCode: 'enter',
                        handler: function () {
                            var date = range.getVal();
                            // update event with the new properties on save button click
                            calendar.updateEvent({
                                id: ev.id,
                                title: titleInput.value,
                                description: descriptionTextarea.value,
                                allDay: mobiscroll.getInst(allDaySwitch).checked,
                                start: date[0],
                                end: date[1],
                                free: mobiscroll.getInst(freeSegmented).checked,
                                color: ev.color,
                            });

                            // navigate the calendar to the correct view
                            calendar.navigate(date[0]);;

                            restoreEvent = false;
                            popup.close();
                        },
                        cssClass: 'mbsc-popup-button-primary'
                    }
                ]
            });

            // fill popup with the selected event data
            mobiscroll.getInst(titleInput).value = ev.title || '';
            mobiscroll.getInst(descriptionTextarea).value = ev.description || '';
            mobiscroll.getInst(allDaySwitch).checked = ev.allDay || false;
            range.setVal([ev.start, ev.end]);

            if (ev.free) {
                mobiscroll.getInst(freeSegmented).checked = true;
            } else {
                mobiscroll.getInst(busySegmented).checked = true;
            }

            // change range settings based on the allDay
            range.setOptions({
                controls: ev.allDay ? ['date'] : ['datetime'],
                responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive
            });

            // set anchor for the popup
            popup.setOptions({ anchor: args.domEvent.currentTarget });
            popup.open();
        }

        calendar = mobiscroll.eventcalendar('#demo-add-delete-event', {
            clickToCreate: 'double',
            dragToCreate: true,
            dragToMove: true,
            dragToResize: true,
            view: {
                schedule: { type: 'week' }
            },
            data: myData,
            onEventClick: function (args) {
                oldEvent = Object.assign({}, args.event);
                tempEvent = args.event;

                if (!popup.isVisible()) {
                    createEditPopup(args);
                }
            },
            onEventCreated: function (args) {
                popup.close();
                // store temporary event
                tempEvent = args.event;
                createAddPopup(args.target);
            },
            onEventDeleted: function (args) {
                mobiscroll.snackbar({            button: {
                        action: function () {
                            calendar.addEvent(args.event);
                        },
                        text: 'Undo'
                    },
                    message: 'Event deleted'
                });
            }
        });

        popup = mobiscroll.popup('#demo-add-popup', {
            display: 'bottom',
            contentPadding: false,
            fullScreen: true,
            onClose: function () {
                if (deleteEvent) {
                    calendar.removeEvent(tempEvent);
                } else if (restoreEvent) {
                    calendar.updateEvent(oldEvent);
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

        titleInput.addEventListener('input', function (ev) {
            // update current event's title
            tempEvent.title = ev.target.value;
        });

        descriptionTextarea.addEventListener('change', function (ev) {
            // update current event's title
            tempEvent.description = ev.target.value;
        });

        allDaySwitch.addEventListener('change', function () {
            var checked = this.checked
            // change range settings based on the allDay
            range.setOptions({
                controls: checked ? ['date'] : ['datetime'],
                responsive: checked ? datePickerResponsive : datetimePickerResponsive
            });

            // update current event's allDay property
            tempEvent.allDay = checked;
        });

        range = mobiscroll.datepicker('#event-date', {
            controls: ['date'],
            select: 'range',
            startInput: '#start-input',
            endInput: '#end-input',
            showRangeLabels: false,
            touchUi: true,
            responsive: datePickerResponsive,
            onChange: function (args) {
                var date = args.value;
                // update event's start date
                tempEvent.start = date[0];
                tempEvent.end = date[1];
            }
        });

        document.querySelectorAll('input[name=event-status]').forEach(function (elm) {
            elm.addEventListener('change', function () {
                // update current event's free property
                tempEvent.free = mobiscroll.getInst(freeSegmented).checked;
            });
        });

        deleteButton.addEventListener('click', function () {
            // delete current event on button click
            calendar.removeEvent(tempEvent);
            popup.close();

            // save a local reference to the deleted event
            var deletedEvent = tempEvent;

            mobiscroll.snackbar({        button: {
                    action: function () {
                        calendar.addEvent(deletedEvent);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });

        // @ts-ignore
        this.calendar = eventcalendar(document.getElementById(VIEW_CONTAINER.calendarDetail), options);

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
                this.appointmentTypes = newValue;
                break;
            }
            case STATE_NAMES.clinicConfig: {
                this.clinicConfig = newValue[0];
                if (this.calendar) {
                    logger('State changed, using clinic config options');
                    this.calendar.setOptions({
                        clickToCreate: this.clinicConfig.clickToCreate,
                        dragTimeStep: this.clinicConfig.dragTimeStep,
                        dragToCreate: this.clinicConfig.dragToCreate,
                        dragToMove: this.clinicConfig.dragToMove,
                        dragToResize: this.clinicConfig.dragToResize,
                        min: moment().subtract(this.clinicConfig.min, "months"),
                        controls: this.clinicConfig.controls,
                        showControls: this.clinicConfig.showControls,
                        view: this.clinicConfig.view,
                        invalidateEvent: this.clinicConfig.invalidateEvent,
                        invalid: this.clinicConfig.invalid,
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

}
