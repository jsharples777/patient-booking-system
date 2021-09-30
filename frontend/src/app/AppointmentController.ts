import debug from "debug";
import moment from "moment";
import {SELECT, STATE_NAMES, VIEW_CONTAINER} from "./AppTypes";
import Controller from "./Controller";
import {v4} from "uuid";
import {StateChangeListener} from "ui-framework-jps";


const logger = debug('appointment-controller');

type AppointmentViewElements = {
    datePicker: any | null,
    calendar: any | null,
    popup:any|null,
    range:any|null,
    titleInput:HTMLInputElement|null,
    descriptionTextarea:HTMLTextAreaElement|null,
    deleteButton:HTMLButtonElement|null,
    patientCancelledButton:HTMLButtonElement|null,
    patientDNAButton:HTMLButtonElement|null,
    patientSearchEl:HTMLSelectElement|null,
    appointmentTypeEl:HTMLSelectElement|null
    patientSearchDropdown:any|null
    appointmentTypeDropdown:any|null
}

type AppointmentDataElements = {
    appointmentTypes: any[] | null,
    clinicConfig: any | null,
    oldEvent:any|null,
    tempEvent:any,
    isDeletingEvent:boolean,
    isRestoringEvent:boolean
}

export class AppointmentController implements StateChangeListener {
    private static _instance: AppointmentController;

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }

    private viewElements:AppointmentViewElements = {
        datePicker:  null,
        calendar: null,
        popup: null,
        range: null,
        titleInput: null,
        descriptionTextarea:null,
        deleteButton:null,
        patientCancelledButton:null,
        patientDNAButton:null,
        patientSearchEl:null,
        appointmentTypeEl:null,
        appointmentTypeDropdown:null,
        patientSearchDropdown:null
    }

    private dataElements:AppointmentDataElements = {
        appointmentTypes: null,
        clinicConfig: null,
        oldEvent:null,
        tempEvent:{},
        isDeletingEvent:false,
        isRestoringEvent:false

    }

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
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch,this);

    }

    public handleNewDatePicked(event: any, inst: any): void {
        logger(`Handling new date picked`);
        logger(event);
    }

    protected getColourForAppointmentType(appointmentType: string) {
        let result = `rgba(10, 100, 100, 50)`;
        if (this.dataElements.appointmentTypes) {
            let foundIndex = this.dataElements.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) result = this.dataElements.appointmentTypes[foundIndex].colour;
        }
        return result;
    }

    protected getColourForAppointment(appointment: any) {
        return this.getColourForAppointmentType(appointment.type);
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
                    description:appointment.note,
                    color: this.getColourForAppointment(appointment),
                    allDay: false,
                    editable: canEdit,
                    resource: appointment.provider,
                    patientId:appointment._patient,
                    isDNA:appointment.isDNA,
                    isCancelled:appointment.isCancelled,
                    createdBy:appointment.createdBy,
                    createdOn:appointment.created,
                    modifiedOn:appointment.modified,
                    arrivalTime:appointment.arrivalTime,
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
                AppointmentController.getInstance().viewElements.calendar?.navigate(event.value);
                AppointmentController.getInstance().handleNewDatePicked(event.value, inst)
            }
        });

        let options: any;
        if (this.dataElements.clinicConfig) {
            logger('Using clinic config options');
            options = {
                clickToCreate: this.dataElements.clinicConfig.clickToCreate,
                dragTimeStep: this.dataElements.clinicConfig.dragTimeStep,
                dragToCreate: this.dataElements.clinicConfig.dragToCreate,
                dragToMove: this.dataElements.clinicConfig.dragToMove,
                dragToResize: this.dataElements.clinicConfig.dragToResize,
                min: moment().subtract(this.dataElements.clinicConfig.min, "months"),
                controls: this.dataElements.clinicConfig.controls,
                showControls: this.dataElements.clinicConfig.showControls,
                view: this.dataElements.clinicConfig.view,
                invalidateEvent: this.dataElements.clinicConfig.invalidateEvent,
                invalid: this.dataElements.clinicConfig.invalid,
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
            AppointmentController.getInstance().viewElements.datePicker?.setVal(event.date);
        };
        options.onPageLoading = (event: any, inst: any) => {
            AppointmentController.getInstance().onPageLoading(event, inst);
        };
        options.onEventCreated = (event: any, inst: any) => {
            AppointmentController.getInstance().onAppointmentCreated(event, inst);
            AppointmentController.getInstance().viewElements.popup.close();
            // store temporary event
            AppointmentController.getInstance().dataElements.tempEvent = event.event;
            logger('Creating event');
            logger(event);

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
                        AppointmentController.getInstance().viewElements.calendar.addEvent(event.event);
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
            AppointmentController.getInstance().dataElements.oldEvent = Object.assign({}, args.event);
            AppointmentController.getInstance().dataElements.tempEvent = args.event;

            if (!AppointmentController.getInstance().viewElements.popup.isVisible()) {
                logger(args);
                this.createEditPopup(args);
            }
        }

        this.viewElements.titleInput = <HTMLInputElement>document.getElementById('event-title');
        this.viewElements.descriptionTextarea = <HTMLTextAreaElement>document.getElementById('event-desc');
        this.viewElements.deleteButton = <HTMLButtonElement>document.getElementById('event-delete');
        this.viewElements.patientCancelledButton = <HTMLButtonElement>document.getElementById('event-cancelled');
        this.viewElements.patientDNAButton = <HTMLButtonElement>document.getElementById('event-dna');
        this.viewElements.patientSearchEl = <HTMLSelectElement>document.getElementById(SELECT.patientSearch);
        this.viewElements.appointmentTypeEl =<HTMLSelectElement>document.getElementById(SELECT.appointmentType);


        // @ts-ignore
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

        this.viewElements.titleInput.addEventListener('input', function (ev:any) {
            // update current event's title
            AppointmentController.getInstance().dataElements.tempEvent.title = ev.target.value;
        });

        this.viewElements.descriptionTextarea.addEventListener('change', function (ev:any) {
            // update current event's title
            AppointmentController.getInstance().dataElements.tempEvent.description = ev.target.value;
        });

        // @ts-ignore
        this.viewElements.range = mobiscroll5.datepicker('#event-date', {
            controls: ['date'],
            select: 'range',
            startInput: '#start-input',
            endInput: '#end-input',
            showRangeLabels: false,
            touchUi: true,
            stepMinute:15,
            maxTime:'17:00',
            responsive: AppointmentController.datePickerResponsive,
            onChange: function (args:any) {
                var date = args.value;
                // update event's start date
                AppointmentController.getInstance().dataElements.tempEvent.start = date[0];
                AppointmentController.getInstance().dataElements.tempEvent.end = date[1];
            }
        });


        this.viewElements.deleteButton.addEventListener('click', function () {
            // delete current event on button click
            // @ts-ignore
            AppointmentController.getInstance().viewElements.calendar.removeEvent(AppointmentController.getInstance().dataElements.tempEvent);
            AppointmentController.getInstance().viewElements.popup.close();

            // save a local reference to the deleted event
            let deletedEvent = AppointmentController.getInstance().dataElements.tempEvent;

            // @ts-ignore
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
        });

        // @ts-ignore
        this.viewElements.calendar = mobiscroll5.eventcalendar(document.getElementById(VIEW_CONTAINER.calendarDetail), options);

    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName():string {
        return "Appointment Manager";
    }

    stateChanged(managerName:string, name:string, newValue:any):void {
        logger(`Handling state changed ${name}`);

        switch (name) {
            case STATE_NAMES.clinicConfig: {
                this.dataElements.clinicConfig = newValue[0];
                if (this.viewElements.calendar) {
                    logger('State changed, using clinic config options');

                    this.viewElements.calendar.setOptions({
                        clickToCreate: this.dataElements.clinicConfig.clickToCreate,
                        dragTimeStep: this.dataElements.clinicConfig.dragTimeStep,
                        dragToCreate: this.dataElements.clinicConfig.dragToCreate,
                        dragToMove: this.dataElements.clinicConfig.dragToMove,
                        dragToResize: this.dataElements.clinicConfig.dragToResize,
                        min: moment().subtract(this.dataElements.clinicConfig.min, "months"),
                        controls: this.dataElements.clinicConfig.controls,
                        showControls: this.dataElements.clinicConfig.showControls,
                        view: this.dataElements.clinicConfig.view,
                        invalidateEvent: this.dataElements.clinicConfig.invalidateEvent,
                        invalid: this.dataElements.clinicConfig.invalid,
                    });

                    this.viewElements.range.setOptions( {
                        stepMinute:this.dataElements.clinicConfig.dragTimeStep
                    });
                }
                break;
            }
            case (STATE_NAMES.patientSearch): {
                let patients:any[] = [];

                newValue.forEach((patient:any) => {
                    patients.push({text:`${patient.name.surname}, ${patient.name.firstname}`,value:patient._id});
                });

                // add the patient search values to the data of the select dropdown
                // @ts-ignore
                AppointmentController.patientSearchDropdown = mobiscroll5.select('#' + SELECT.patientSearch ,{
                    filter:true,
                    data: patients,
                    onChange: (event:any, inst:any) => {
                        // @ts-ignore
                        mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value = event.valueText;
                        console.log(event.value);
                        AppointmentController.getInstance().dataElements.tempEvent.patientId = event.value;
                    }
                });
                break;
            }
            case (STATE_NAMES.appointmentTypes): {
                this.dataElements.appointmentTypes = newValue;

                let types:any[] = [];

                newValue.forEach((type:any) => {
                    types.push(type.name);
                });

                // add the patient search values to the data of the select dropdown
                // @ts-ignore
                this.viewElements.appointmentTypeDropdown = mobiscroll5.select('#' + SELECT.appointmentType ,{
                    data: types,
                    onChange: (event:any, inst:any) => {
                        // @ts-ignore
                        mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value = event.valueText;
                    }
                });
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
        this.viewElements.deleteButton.style.display = 'none';
        this.viewElements.patientCancelledButton.style.display = 'none';
        this.viewElements.patientDNAButton.style.display = 'none';
        // show the dropdowns
        this.viewElements.patientSearchEl.style.display = 'block';
        this.viewElements.appointmentTypeEl.style.display = 'block';

        this.dataElements.isDeletingEvent = true;
        this.dataElements.isRestoringEvent = false;

        // set popup header text and buttons for adding
        this.viewElements.popup.setOptions({
            headerText: 'New event',
            buttons: [
                'cancel',
                {
                    text: 'Add',
                    keyCode: 'enter',
                    handler: function () {
                        let date = AppointmentController.getInstance().viewElements.range.getVal();
                        // store the event created by the UI
                        let mobiId = AppointmentController.getInstance().dataElements.tempEvent.id;
                        // generate a new UUID
                        let appointmentId = v4();
                        // get the colour for the event type
                        // @ts-ignore
                        let colour = AppointmentController.getInstance().getColourForAppointmentType(mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value);

                        // @ts-ignore
                        let updatedEvent = {id: appointmentId, title: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value, description: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value, allDay: false, start: date[0], end: date[1], free: false, color: colour,patientId:AppointmentController.getInstance().dataElements.tempEvent.patientId};
                        logger('inserting');
                        logger(updatedEvent);

                        // remove the original event
                        AppointmentController.getInstance().viewElements.calendar.removeEvent([mobiId]);
                        AppointmentController.getInstance().viewElements.calendar.addEvent(updatedEvent);
                        // @ts-ignore
                        AppointmentController.getInstance().dataElements.isDeletingEvent = false;

                        // navigate the calendar to the correct view
                        // @ts-ignore
                        AppointmentController.getInstance().viewElements.calendar.navigate(updatedEvent.start);

                        // @ts-ignore
                        AppointmentController.getInstance().viewElements.popup.close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with a new event data
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.titleInput).value = this.dataElements.tempEvent.title;
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = '';

        this.viewElements.range.setVal([this.dataElements.tempEvent.start, this.dataElements.tempEvent.end]);
        this.viewElements.range.setOptions({
            controls: this.dataElements.tempEvent.allDay ? ['date'] : ['datetime'],
            responsive: this.dataElements.tempEvent.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
        });
        // set anchor for the popup
        this.viewElements.popup.setOptions({ anchor: elm});

        this.viewElements.popup.open();
    }

    private createEditPopup(args:any) {
        let ev = args.event;

        console.log(ev.patientId);

        // show delete button inside edit popup
        this.viewElements.deleteButton.style.display = 'block';
        this.viewElements.patientCancelledButton.style.display = 'block';
        this.viewElements.patientDNAButton.style.display = 'block';
        // show the dropdowns
        this.viewElements.patientSearchEl.style.display = 'none';
        this.viewElements.appointmentTypeEl.style.display = 'none';


        this.dataElements.isDeletingEvent = false;
        this.dataElements.isRestoringEvent = true;

        // set popup header text and buttons for editing
        this.viewElements.popup.setOptions({
            headerText: 'Edit event',
            buttons: [
                'cancel',
                {
                    text: 'Save',
                    keyCode: 'enter',
                    handler: function () {
                        let date = AppointmentController.getInstance().viewElements.range.getVal();
                        // update event with the new properties on save button click
                        // @ts-ignore
                        let updatedEvent = {id: ev.id, title: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.titleInput).value, description: mobiscroll5.getInst(AppointmentController.getInstance().viewElements.descriptionTextarea).value, allDay: false, start: date[0], end: date[1], free: false,color: ev.color,};
                        logger('updated');
                        logger(updatedEvent)
                        AppointmentController.getInstance().viewElements.calendar.updateEvent(updatedEvent);

                        // navigate the calendar to the correct view
                        // @ts-ignore
                        AppointmentController.getInstance().viewElements.calendar.navigate(date[0]);

                        AppointmentController.getInstance().dataElements.isRestoringEvent= false;
                        AppointmentController.getInstance().viewElements.popup.close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with the selected event data
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.titleInput).value = ev.title || '';
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = ev.description || '';
        this.viewElements.range.setVal([ev.start, ev.end]);

        // change range settings based on the allDay
        this.viewElements.range.setOptions({
            controls: ev.allDay ? ['date'] : ['datetime'],
            responsive: ev.allDay ? AppointmentController.datePickerResponsive : AppointmentController.datetimePickerResponsive
        });

        // set anchor for the popup
        this.viewElements.popup.setOptions({ anchor: args.domEvent.currentTarget});
        this.viewElements.popup.open();
    }


}
