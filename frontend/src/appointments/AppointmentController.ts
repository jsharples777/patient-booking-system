import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";

import {AppointmentBookView} from "./AppointmentBookView";
import {AppointmentFilterView} from "./AppointmentFilterView";
import {AppointmentDetailModal} from "./AppointmentDetailModal";
import {AppointmentTemplateController} from "../appointment-templates/AppointmentTemplateController";
import {v4} from "uuid";
import {computeTimeStringFromStartTimeAndDurationInSeconds} from "../DurationFunctions";


const logger = debug('appointment-controller');


type AppointmentDataElements = {
    appointmentTypes: any[] | null,
    clinicConfig: any | null,
    providers: any[] | null,
    oldEvent: any | null,
    tempEvent: any,
    loadDate:number,
    loadDateFinish:number,
}

export class AppointmentController implements StateChangeListener {
    private static _instance: AppointmentController;

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }

    public static APPOINTMENT_STATUS_ARRIVED = 'Patient Arrived';
    public static APPOINTMENT_STATUS_READY_FOR_BILLING = 'Ready For Billing';
    public static APPOINTMENT_STATUS_BILLING_COMPLETE = 'Billing Complete';
    public static APPOINTMENT_TYPE_PATIENT_CANCELLED = 'Patient Cancelled';
    public static APPOINTMENT_TYPE_PATIENT_DNA = 'Did Not Arrive';


    private dataElements: AppointmentDataElements = {
        appointmentTypes: null,
        clinicConfig: null,
        providers: null,
        oldEvent: null,
        tempEvent: {},
        loadDate:0,
        loadDateFinish:0
    };

    public getModel(): AppointmentDataElements {
        return this.dataElements;
    }

    public onDocumentLoaded() {
        AppointmentBookView.getInstance().onDocumentLoaded();
        AppointmentFilterView.getInstance().onDocumentLoaded();
    }


    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);

        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.clinicConfig, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTypes, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.providers, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointments, this);

    }

    public getIconForAppointmentType(appointmentType: string) {
        logger(`Getting icon for appoint type ${appointmentType}`);
        let result = ``;
        if (this.dataElements.appointmentTypes) {
            let foundIndex = this.dataElements.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) {
                if (this.dataElements.appointmentTypes[foundIndex].icon) {
                    result = `<i class="md-custom-event-icon ${this.dataElements.appointmentTypes[foundIndex].icon}"></i>`;
                }

            }
        }
        return result;
    }


    public getIconsForEvent(event: any): string {
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

    public getColourForAppointmentType(appointmentType: string) {
        let result = `rgba(10, 100, 100, 50)`;
        if (this.dataElements.appointmentTypes) {
            let foundIndex = this.dataElements.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) result = this.dataElements.appointmentTypes[foundIndex].colour;
        }
        return result;
    }

    public getColourForAppointment(appointment: any) {
        let colour = this.getColourForAppointmentType(appointment.type);;
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

    public getEventForAppointment(loadDate:number, appointment:any):any {
        const today = parseInt(moment().format('YYYYMMDD'));

        let canEdit = ((loadDate >= today) && (!appointment.isDNA && !appointment.isCancelled) && (!appointment.isBilled));
        const timeString = computeTimeStringFromStartTimeAndDurationInSeconds(appointment.time,appointment.duration);

        let result = {
            id: appointment._id,
            start: moment(`${loadDate}${appointment.time}`, 'YYYYMMDDHHmmss'),
            end: moment(`${loadDate}${timeString}`, 'YYYYMMDDHHmm'),
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
            isBilled:appointment.isBilled
        }
        // @ts-ignore
        result.color = this.getColourForAppointment(appointment);


        return result;

    }


    private addTemplateEvents(day:number, currentAppointments:any[]) {
        logger('Loading templated events for day ' + day);
        const appointmentTemplates = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointmentTemplates);
        appointmentTemplates.forEach((template:any) => {
            logger(template);
            if (template.day === day) { // only template appointments for the day number
                // is there already an appointment on display that matches the template?
                const foundIndex = currentAppointments.findIndex((appt) => appt.time === template.time);
                if (foundIndex < 0) {
                    logger(`appointment for time ${template.time} not found, creating new appointment`)
                    // don't already have an appointment for that time
                    let templatedAppt = AppointmentTemplateController.getInstance().getEventForAppointmentTemplate(template);
                    templatedAppt.id = v4();
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

                    logger(templatedAppt);

                    // add the templated appointment to the persistence
                    Controller.getInstance().getStateManager().addNewItemToState(
                        STATE_NAMES.appointments,
                        AppointmentController.getInstance().getAppointmentFromEvent(templatedAppt),
                        false);
                    AppointmentBookView.getInstance().getCalender().addEvent(templatedAppt);


                }
            }

        });

    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        this.dataElements.loadDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        const loadDateDayNumber = parseInt(moment(event.firstDay).format('d'));
        this.dataElements.loadDateFinish = parseInt(moment(event.lastDay).format('YYYYMMDD'));
        logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results: any[] = [];
        let appointmentsForTheDay:any[] = [];
        appointments.forEach((appointment: any) => {
            if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {
                appointmentsForTheDay.push(appointment);

                let result = this.getEventForAppointment(this.dataElements.loadDate,appointment);
                results.push(result);
            }

        });



        inst.setEvents(results);

        // add template appointments as events where an appointment doesn't already exist in the same time slot, they will need unique _ids
        if (this.dataElements.loadDate >= today) this.addTemplateEvents(loadDateDayNumber, appointmentsForTheDay);

    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Appointment Manager";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        logger(`Handling state changed ${name}`);

        switch (name) {
            case STATE_NAMES.clinicConfig: {
                this.dataElements.clinicConfig = newValue[0];
                AppointmentBookView.getInstance().applyClinicConfig(this.dataElements.clinicConfig);
                break;
            }
            case (STATE_NAMES.patientSearch): {
                AppointmentDetailModal.getInstance().setupPatientSearchDropDown(newValue);
                break;
            }
            case (STATE_NAMES.appointmentTypes): {
                this.dataElements.appointmentTypes = newValue;
                AppointmentDetailModal.getInstance().setupAppointmentTypeDropDown(newValue);
                break;

            }
            case (STATE_NAMES.providers): {
                this.dataElements.providers = newValue;

                AppointmentFilterView.getInstance().populateProviders(newValue);

                AppointmentBookView.getInstance().setupProviders(newValue);

                break;

            }
            case (STATE_NAMES.appointments): {

                this.dataElements.loadDate = parseInt(moment().format('YYYYMMDD'));
                this.dataElements.loadDateFinish = parseInt(moment().add(1,'days').format('YYYYMMDD'));
                logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);


                const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
                let results: any[] = [];
                appointments.forEach((appointment: any) => {
                    if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {
                        logger('Found appointment');
                        logger(appointment);

                        let result = this.getEventForAppointment(this.dataElements.loadDate,appointment);


                        logger('Converted to event');
                        logger(result);
                        results.push(result);
                    }

                });

                AppointmentBookView.getInstance().getCalender().setEvents(results);

                break;

            }

        }
    }

    stateChangedItemAdded(managerName: string, name: string, appointment: any): void {
        if ((name === STATE_NAMES.appointments) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('New Appointment inserted by another user');
            logger(appointment);

            if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {

                let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
                logger('Converted to event');
                logger(result);

                AppointmentBookView.getInstance().getCalender().addEvent(result);
            }
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, appointment: any): void {
        if (name === STATE_NAMES.appointments) {
            logger('Appointment deleted by another user');
            logger(appointment);

            AppointmentBookView.getInstance().getCalender().removeEvent([appointment._id]);
        }
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, appointment: any): void {
        if ((name === STATE_NAMES.appointmentTemplates) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('Appointment updated by another user');
            logger(appointment);

            if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {

                let result = this.getEventForAppointment(this.dataElements.loadDate, appointment);
                logger('Converted to event');
                logger(result);

                AppointmentBookView.getInstance().getCalender().updateEvent(result);
            }
        }
    }

    public getAppointmentFromEvent(event: any): any {
        let start = parseInt(moment(event.start).format('YYYYMMDD'));
        let time = moment(event.start).format('HHmmss');
        let duration = moment(event.end).diff(moment(event.start), 'seconds');


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


}
