import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {StateChangeListener} from "ui-framework-jps";

import {AppointmentView} from "./AppointmentView";
import {AppointmentFilterView} from "./AppointmentFilterView";
import {AppointmentDetailModal} from "./AppointmentDetailModal";


const logger = debug('appointment-controller');


type AppointmentDataElements = {
    appointmentTypes: any[] | null,
    clinicConfig: any | null,
    providers: any[] | null,
    oldEvent: any | null,
    tempEvent: any,
    isDeletingEvent: boolean,
    isRestoringEvent: boolean,
    provider: string
}

export class AppointmentController implements StateChangeListener {
    private static _instance: AppointmentController;

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }


    private dataElements: AppointmentDataElements = {
        appointmentTypes: null,
        clinicConfig: null,
        providers: null,
        oldEvent: null,
        tempEvent: {},
        isDeletingEvent: false,
        isRestoringEvent: false,
        provider: ''
    };

    public getModel(): AppointmentDataElements {
        return this.dataElements;
    }

    public onDocumentLoaded() {
        AppointmentView.getInstance().onDocumentLoaded();
        AppointmentFilterView.getInstance().onDocumentLoaded();
    }


    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);

        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.clinicConfig, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTypes, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.providers, this);

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
                buffer += '<i class="md-custom-event-icon fas fa-chair"></i>';
            }
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
        return this.getColourForAppointmentType(appointment.type);
    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        const loadDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        const loadDateFinish = parseInt(moment(event.lastDay).format('YYYYMMDD'));
        logger(`Need to load date range (${loadDate},${loadDateFinish})`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results: any[] = [];
        appointments.forEach((appointment: any) => {
            if ((appointment.start >= loadDate) && (appointment.start <= loadDateFinish)) {
                logger('Found appointment');
                logger(appointment);
                let canEdit = ((loadDate >= today) && (!appointment.isDNA && !appointment.isCancelled));
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
                    description: appointment.note,
                    color: this.getColourForAppointment(appointment),
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
                    provider: appointment.provider
                }

                this.dataElements.provider = appointment.provider;

                logger('Converted to event');
                logger(result);
                results.push(result);
            }

        });

        inst.setEvents(results);


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
                AppointmentView.getInstance().applyClinicConfig(this.dataElements.clinicConfig);
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

                AppointmentView.getInstance().setupProviders(newValue);

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
            provider: event.provider
        };
        return appointment;
    }


}
