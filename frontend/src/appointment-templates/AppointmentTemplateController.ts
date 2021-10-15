import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";

import {AppointmentTemplateView} from "./AppointmentTemplateView";
import {AppointmentTemplateFilterView} from "./AppointmentTemplateFilterView";
import {AppointmentTemplateDetailModal} from "./AppointmentTemplateDetailModal";
import {computeTimeStringFromStartTimeAndDurationInSeconds} from "../DurationFunctions";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";
import {ScheduleLoadedListener} from "../helper/ScheduleLoadedListener";


const logger = debug('appointment-template-controller');


type AppointmentTemplateDataElements = {
    oldEvent: any | null,
    tempEvent: any,
    currentFirstDate: number,
    currentFirstDateDayNumber: number,
    currentLastDate: number
}

export class AppointmentTemplateController implements StateChangeListener,ScheduleLoadedListener {
    private static _instance: AppointmentTemplateController;
    private dataElements: AppointmentTemplateDataElements = {
        oldEvent: null,
        tempEvent: {},
        currentFirstDate: 0,
        currentLastDate: 0,
        currentFirstDateDayNumber: 1
    };

    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);

        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTemplates, this);
        AppointmentControllerHelper.getInstance().addListener(this);

    }

    loadedPatientSearch(patientSearch: any[]): void {}

    loadedProviders(providers: any[]): void {
        AppointmentTemplateFilterView.getInstance().populateProviders(providers);
        AppointmentTemplateView.getInstance().setupProviders(providers);
    }

    loadedClinicAppointmentBookConfig(clinicConfig: any): void {
        AppointmentTemplateView.getInstance().applyClinicConfig(clinicConfig);
    }

    loadedAppointmentTypes(appointmentTypes: any[]): void {
        AppointmentTemplateDetailModal.getInstance().setupAppointmentTypeDropDown(appointmentTypes);
    }

    public static getInstance(): AppointmentTemplateController {
        if (!(AppointmentTemplateController._instance)) {
            AppointmentTemplateController._instance = new AppointmentTemplateController();
        }
        return AppointmentTemplateController._instance;
    }

    public getModel(): AppointmentTemplateDataElements {
        return this.dataElements;
    }

    public onDocumentLoaded() {
        AppointmentTemplateView.getInstance().onDocumentLoaded();
        AppointmentTemplateFilterView.getInstance().onDocumentLoaded();
    }


    public getEventForAppointmentTemplate(template: any): any {
        logger(`Creating event for appointment template with first day number of ${this.dataElements.currentFirstDateDayNumber}`);
        logger(template);
        if (template.day < this.dataElements.currentFirstDateDayNumber) return null;
        const loadDate = this.dataElements.currentFirstDate + (template.day - this.dataElements.currentFirstDateDayNumber);


        let result = AppointmentControllerHelper.getInstance().getEventForAppointmentTemplateForDate(loadDate, template.day, template);
        logger('Converted to template event');
        logger(result);

        return result;

    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        this.dataElements.currentFirstDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        this.dataElements.currentFirstDateDayNumber = parseInt(moment(event.firstDay).format('d'));
        this.dataElements.currentLastDate = parseInt(moment(event.lastDay).format('YYYYMMDD')) - 1;
        logger(`Need to load date range (${this.dataElements.currentFirstDate},${this.dataElements.currentLastDate}) starting with day ${this.dataElements.currentFirstDateDayNumber}`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointmentTemplates);
        let results: any[] = [];
        appointments.forEach((appointment: any) => {
            let result = this.getEventForAppointmentTemplate(appointment);
            if (result) results.push(result);
        });

        inst.setEvents(results);
    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Appointment Template Manager";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        logger(`Handling state changed ${name}`);

        switch (name) {
            case (STATE_NAMES.appointmentTemplates): {
                const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointmentTemplates);
                let results: any[] = [];
                appointments.forEach((appointment: any) => {
                    let result = this.getEventForAppointmentTemplate(appointment);
                    if (result) results.push(result);
                });

                AppointmentTemplateView.getInstance().getCalender().setEvents(results);

                break;

            }

        }
    }

    stateChangedItemAdded(managerName: string, name: string, appointment: any): void {
        if ((name === STATE_NAMES.appointmentTemplates) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('New Appointment Template inserted by another user');
            logger(appointment);

            let result = this.getEventForAppointmentTemplate(appointment);
            if (result) AppointmentTemplateView.getInstance().getCalender().addEvent(result);
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, appointment: any): void {
        if (name === STATE_NAMES.appointmentTemplates) {
            logger('Appointment Template deleted by another user');
            logger(appointment);

            AppointmentTemplateView.getInstance().getCalender().removeEvent([appointment._id]);
        }
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, appointment: any): void {
        if ((name === STATE_NAMES.appointmentTemplates) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('Appointment updated by another user');
            logger(appointment);

            let result = this.getEventForAppointmentTemplate(appointment);
            if (result) AppointmentTemplateView.getInstance().getCalender().updateEvent(result);
        }
    }



}
