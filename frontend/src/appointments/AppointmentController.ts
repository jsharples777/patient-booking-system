import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";

import {AppointmentBookView} from "./AppointmentBookView";
import {AppointmentFilterView} from "./AppointmentFilterView";
import {AppointmentDetailModal} from "./AppointmentDetailModal";
import {v4} from "uuid";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";
import {ScheduleListener} from "../helper/ScheduleListener";


const logger = debug('appointment-controller');


type AppointmentDataElements = {
    oldEvent: any | null,
    tempEvent: any,
    loadDate: number,
    loadDateFinish: number,
}

export class AppointmentController implements StateChangeListener, ScheduleListener {

    private static _instance: AppointmentController;
    private dataElements: AppointmentDataElements = {
        oldEvent: null,
        tempEvent: {},
        loadDate: 0,
        loadDateFinish: 0
    };

    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointments, this);
        AppointmentControllerHelper.getInstance().addListener(this);
    }

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }

    public getModel(): AppointmentDataElements {
        return this.dataElements;
    }

    public onDocumentLoaded() {
        AppointmentBookView.getInstance().onDocumentLoaded();
        AppointmentFilterView.getInstance().onDocumentLoaded();
    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        this.dataElements.loadDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        const loadDateDayNumber = parseInt(moment(event.firstDay).format('d'));
        this.dataElements.loadDateFinish = parseInt(moment(event.lastDay).format('YYYYMMDD'));
        logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        const results: any[] = [];
        const appointmentsForTheDay: any[] = [];
        appointments.forEach((appointment: any) => {
            if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {
                appointmentsForTheDay.push(appointment);

                const result = AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
                results.push(result);
            }

        });


        inst.setEvents(results);

        // add template appointments as events where an appointment doesn't already exist in the same time slot, they will need unique _ids
        if (this.dataElements.loadDate >= today) this.addTemplateEvents(this.dataElements.loadDate, loadDateDayNumber, appointmentsForTheDay);

    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Appointment Manager";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        logger(`Handling state changed ${name}`);

        switch (name) {

            case (STATE_NAMES.appointments): {

                this.dataElements.loadDate = parseInt(moment().format('YYYYMMDD'));
                this.dataElements.loadDateFinish = parseInt(moment().add(1, 'days').format('YYYYMMDD'));
                logger(`Need to load date range (${this.dataElements.loadDate},${this.dataElements.loadDateFinish})`);


                const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
                const results: any[] = [];
                appointments.forEach((appointment: any) => {
                    if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {
                        logger('Found appointment');
                        logger(appointment);

                        const result = AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);


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

                const result = AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
                logger('Converted to event');
                logger(result);

                if (result) {
                    AppointmentBookView.getInstance().getCalender().removeEvent(result);
                    AppointmentBookView.getInstance().getCalender().addEvent(result);
                    this.refreshDisplay();
                }
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
        if ((name === STATE_NAMES.appointments) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('Appointment updated by another user');
            logger(appointment);

            if ((appointment.start >= this.dataElements.loadDate) && (appointment.start < this.dataElements.loadDateFinish)) {

                const result = AppointmentControllerHelper.getInstance().getEventForAppointment(this.dataElements.loadDate, appointment);
                logger('Converted to event');
                logger(result);

                if (result) {
                    AppointmentBookView.getInstance().getCalender().removeEvent(result);
                    AppointmentBookView.getInstance().getCalender().addEvent(result);
                    this.refreshDisplay();
                }
            }
        }
    }

    loadedAppointmentTypes(appointmentTypes: any[]): void {
        AppointmentDetailModal.getInstance().setupAppointmentTypeDropDown(appointmentTypes);
        const appointments = AppointmentBookView.getInstance().getCalender().getEvents();
        appointments.forEach((appointment) => {
            appointment.color = AppointmentControllerHelper.getInstance().getColourForAppointment(appointment);
        });
        AppointmentBookView.getInstance().getCalender().updateEvent(appointments);
    }

    loadedClinicAppointmentBookConfig(clinicConfig: any): void {
        AppointmentBookView.getInstance().applyClinicConfig(clinicConfig);
    }

    loadedPatientSearch(patientSearch: any[]): void {
        AppointmentDetailModal.getInstance().setupPatientSearchDropDown(patientSearch);
    }

    loadedProviders(providers: any[]): void {
        AppointmentFilterView.getInstance().populateProviders(providers);
        AppointmentBookView.getInstance().setupProviders(providers);
    }

    private addTemplateEvents(loadDate: number, day: number, currentAppointments: any[]) {
        logger('Loading templated events for day ' + day);
        const appointmentTemplates = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointmentTemplates);
        appointmentTemplates.forEach((template: any) => {
            logger(template);
            if (template.day === day) { // only template appointments for the day number
                // is there already an appointment on display that matches the template?
                const foundIndex = currentAppointments.findIndex((appt) => appt.time === template.time);
                if (foundIndex < 0) {
                    logger(`appointment for time ${template.time} not found, creating new appointment`)
                    // don't already have an appointment for that time
                    const templatedAppt = AppointmentControllerHelper.getInstance().getEventForAppointmentTemplateForDate(loadDate, day, template);
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
                    templatedAppt.color = AppointmentControllerHelper.getInstance().getColourForAppointment(templatedAppt);

                    logger(templatedAppt);

                    // add the templated appointment to the persistence
                    Controller.getInstance().getStateManager().addNewItemToState(
                        STATE_NAMES.appointments,
                        AppointmentControllerHelper.getInstance().getAppointmentFromEvent(templatedAppt),
                        false);
                    AppointmentBookView.getInstance().getCalender().addEvent(templatedAppt);
                }
            }
        });
    }

    refreshDisplay(): void {

        //AppointmentBookView.getInstance().getCalender().refresh();
    }

    foundResult(managerName: string, name: string, foundItem: any): void {
    }


}
