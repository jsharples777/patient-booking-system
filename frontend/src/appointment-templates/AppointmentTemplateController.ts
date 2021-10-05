import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";

import {AppointmentTemplateView} from "./AppointmentTemplateView";
import {AppointmentTemplateFilterView} from "./AppointmentTemplateFilterView";
import {AppointmentTemplateDetailModal} from "./AppointmentTemplateDetailModal";


const logger = debug('appointment-template-controller');


type AppointmentTemplateDataElements = {
    appointmentTypes: any[] | null,
    clinicConfig: any | null,
    providers: any[] | null,
    oldEvent: any | null,
    tempEvent: any,
    isDeletingEvent: boolean,
    isRestoringEvent: boolean,
    currentFirstDate:number,
    currentFirstDateDayNumber:number,
    currentLastDate:number
}

export class AppointmentTemplateController implements StateChangeListener {
    private static _instance: AppointmentTemplateController;

    public static getInstance(): AppointmentTemplateController {
        if (!(AppointmentTemplateController._instance)) {
            AppointmentTemplateController._instance = new AppointmentTemplateController();
        }
        return AppointmentTemplateController._instance;
    }



    private dataElements: AppointmentTemplateDataElements = {
        appointmentTypes: null,
        clinicConfig: null,
        providers: null,
        oldEvent: null,
        tempEvent: {},
        isDeletingEvent: false,
        isRestoringEvent: false,
        currentFirstDate:0,
        currentLastDate:0,
        currentFirstDateDayNumber:1
    };

    public getModel(): AppointmentTemplateDataElements {
        return this.dataElements;
    }

    public onDocumentLoaded() {
        AppointmentTemplateView.getInstance().onDocumentLoaded();
        AppointmentTemplateFilterView.getInstance().onDocumentLoaded();
    }


    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);

        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.clinicConfig, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTypes, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.providers, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTemplates, this);

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


    public getIconsForEventTemplate(event: any): string {
        return this.getIconForAppointmentType(event.type);
    }

    public getColourForAppointmentType(appointmentType: string) {
        let result = `rgba(10, 100, 100, 50)`;
        if (this.dataElements.appointmentTypes) {
            let foundIndex = this.dataElements.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) result = this.dataElements.appointmentTypes[foundIndex].colour;
        }
        return result;
    }

    public getColourForAppointmentTemplate(appointment: any) {
        return this.getColourForAppointmentType(appointment.type);;
    }

    public getEventForAppointmentTemplate(appointment:any):any {
        if (appointment.day < this.dataElements.currentFirstDateDayNumber) return null;
        const loadDate = this.dataElements.currentFirstDate + (appointment.day - this.dataElements.currentFirstDateDayNumber);
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
            color: this.getColourForAppointmentTemplate(appointment),
            allDay: false,
            editable: true,
            repeat:'weekly',
            resource: appointment.provider,
            createdBy: appointment.createdBy,
            created: appointment.created,
            modified: appointment.modified,
            type: appointment.type,
            provider: appointment.provider
        }

        return result;

    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        this.dataElements.currentFirstDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        this.dataElements.currentFirstDateDayNumber = parseInt(moment(event.firstDay).format('d'));
        this.dataElements.currentLastDate = parseInt(moment(event.lastDay).format('YYYYMMDD')) - 1;
        logger(`Need to load date range (${this.dataElements.currentFirstDate},${this.dataElements.currentLastDate }) starting with day ${this.dataElements.currentFirstDateDayNumber}`);


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
            case STATE_NAMES.clinicConfig: {
                this.dataElements.clinicConfig = newValue[0];
                AppointmentTemplateView.getInstance().applyClinicConfig(this.dataElements.clinicConfig);
                break;
            }
            case (STATE_NAMES.appointmentTypes): {
                this.dataElements.appointmentTypes = newValue;
                AppointmentTemplateDetailModal.getInstance().setupAppointmentTypeDropDown(newValue);
                break;

            }
            case (STATE_NAMES.providers): {
                this.dataElements.providers = newValue;

                AppointmentTemplateFilterView.getInstance().populateProviders(newValue);

                AppointmentTemplateView.getInstance().setupProviders(newValue);

                break;

            }
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

    public getAppointmentTemplateFromEvent(event: any): any {
        let day = parseInt(moment(event.start).format('d'));
        let time = moment(event.start).format('HHmmss');
        let duration = moment(event.end).diff(moment(event.start), 'seconds');


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
