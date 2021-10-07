import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";

import {AppointmentTemplateView} from "./AppointmentTemplateView";
import {AppointmentTemplateFilterView} from "./AppointmentTemplateFilterView";
import {AppointmentTemplateDetailModal} from "./AppointmentTemplateDetailModal";
import {computeTimeStringFromStartTimeAndDurationInSeconds} from "../DurationFunctions";


const logger = debug('appointment-template-controller');


type AppointmentTemplateDataElements = {
    appointmentTypes: any[] | null,
    clinicConfig: any | null,
    providers: any[] | null,
    oldEvent: any | null,
    tempEvent: any,
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

    public getEventForAppointmentTemplateForDate(startDate:number, dayNumber:number, template:any):any {
        logger(`Creating event for appointment template on date ${startDate} with ${dayNumber}`);
        logger(template);
        if (template.day < dayNumber) return null;
        const loadDate = startDate + (template.day - dayNumber);

        const timeString = computeTimeStringFromStartTimeAndDurationInSeconds(template.time,template.duration);


        let result = {
            id: template._id,
            start: moment(`${startDate}${template.time}`, 'YYYYMMDDHHmmss'),
            end: moment(`${startDate}${timeString}`, 'YYYYMMDDHHmm'),
            color: this.getColourForAppointmentTemplate(template),
            allDay: false,
            editable: true,
            resource: template.provider,
            createdBy: template.createdBy,
            created: template.created,
            modified: template.modified,
            type: template.type,
            provider: template.provider
        }
        logger('Converted to event');
        logger(result);

        return result;

    }


    public getEventForAppointmentTemplate(template:any):any {
        logger(`Creating event for appointment template with first day number of ${this.dataElements.currentFirstDateDayNumber}`);
        logger(template);
        if (template.day < this.dataElements.currentFirstDateDayNumber) return null;
        const loadDate = this.dataElements.currentFirstDate + (template.day - this.dataElements.currentFirstDateDayNumber);



        let result = this.getEventForAppointmentTemplateForDate(loadDate,template.day,template);
        logger('Converted to template event');
        logger(result);

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
