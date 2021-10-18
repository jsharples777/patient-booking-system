import Controller from "../Controller";
import {STATE_NAMES} from "../AppTypes";
import {StateChangeListener} from "ui-framework-jps";
import debug from 'debug';
import moment from "moment";
import {computeTimeStringFromStartTimeAndDurationInSeconds} from "../DurationFunctions";
import {ScheduleLoadedListener} from "./ScheduleLoadedListener";


const logger = debug('appointment-controller-helper');

export class AppointmentControllerHelper implements StateChangeListener {
    public static APPOINTMENT_STATUS_ARRIVED = 'Patient Arrived';
    public static APPOINTMENT_STATUS_READY_FOR_BILLING = 'Ready For Billing';
    public static APPOINTMENT_STATUS_BILLING_COMPLETE = 'Billing Complete';
    public static APPOINTMENT_TYPE_PATIENT_CANCELLED = 'Patient Cancelled';
    public static APPOINTMENT_TYPE_PATIENT_DNA = 'Did Not Arrive';
    private static _instance: AppointmentControllerHelper;
    private appointmentTypes: any[] = [];
    private clinicConfig: any | null = null;
    private patientSearch: any[] = [];
    private providers: any[] = [];
    private listeners: ScheduleLoadedListener[] = [];

    private constructor() {
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.clinicConfig, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointmentTypes, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.providers, this)

        this.handleAppointmentTemplateRendering = this.handleAppointmentTemplateRendering.bind(this);
        this.handleAppointmentRendering = this.handleAppointmentRendering.bind(this);
    }

    public static getInstance(): AppointmentControllerHelper {
        if (!(AppointmentControllerHelper._instance)) {
            AppointmentControllerHelper._instance = new AppointmentControllerHelper();
        }
        return AppointmentControllerHelper._instance;
    }

    public addListener(listener: ScheduleLoadedListener) {
        this.listeners.push(listener);
    }

    public haveAppointentTypesLoaded() {
        return (this.appointmentTypes.length > 0);
    }

    public havePatientSearchesLoaded() {
        return (this.patientSearch.length > 0);
    }

    public haveProvidersLoaded() {
        return (this.providers.length > 0);
    }

    public hasClinicConfigLoaded() {
        return (this.clinicConfig);

    }

    public getAppointmentTypes(): any[] {
        return this.appointmentTypes;
    }

    public getPatientSearch(): any[] {
        return this.patientSearch;
    }

    public getProviders(): any[] {
        return this.providers;
    }

    public getClinicConfig(): any {
        if (this.clinicConfig) {
            const config = JSON.parse(JSON.stringify(this.clinicConfig));
            return config;
        } else {
            let options = {
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
                        type: 'week',
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
            return options;
        }
    }


    public getIconForAppointmentType(appointmentType: string) {
        logger(`Getting icon for appoint type ${appointmentType}`);
        let result = ``;
        if (this.appointmentTypes) {
            let foundIndex = this.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) {
                if (this.appointmentTypes[foundIndex].icon) {
                    result = `<i class="md-custom-event-icon ${this.appointmentTypes[foundIndex].icon}"></i>`;
                }

            }
        }
        return result;
    }


    public getIconsForEvent(event: any): string {
        let buffer = '';
        if (event.arrivalTime) {
            if (event.arrivalTime.trim().length > 0) {
                buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_ARRIVED);
            }
        }
        if (event.readyForBilling) {
            buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_READY_FOR_BILLING);
        }
        if (event.isBilled) {
            buffer += this.getIconForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_BILLING_COMPLETE);
        }
        buffer += this.getIconForAppointmentType(event.type);

        return buffer;
    }

    public getColourForAppointmentType(appointmentType: string) {
        let result = `rgba(10, 100, 100, 50)`;
        if (this.appointmentTypes) {
            let foundIndex = this.appointmentTypes.findIndex((type) => type.name === appointmentType);
            if (foundIndex >= 0) result = this.appointmentTypes[foundIndex].colour;
        }
        return result;
    }

    public getColourForAppointmentTemplate(appointment: any) {
        return this.getColourForAppointmentType(appointment.type);

    }

    public getColourForAppointment(appointment: any) {
        let colour = this.getColourForAppointmentType(appointment.type);

        if (appointment.arrivalTime) {
            if (appointment.arrivalTime.trim().length > 0) {
                colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_ARRIVED);
            }
        }
        if (appointment.readyForBilling || appointment.isBilled || appointment.isCancelled || appointment.isDNA) {
            if (appointment.readyForBilling) {
                colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_READY_FOR_BILLING);
            }
            if (appointment.isBilled) {
                colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_STATUS_BILLING_COMPLETE);
            }
            if (appointment.isCancelled) {
                colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_CANCELLED);
            }
            if (appointment.isDNA) {
                colour = this.getColourForAppointmentType(AppointmentControllerHelper.APPOINTMENT_TYPE_PATIENT_DNA);
            }
        }
        return colour;
    }

    public getEventForAppointment(loadDate: number, appointment: any): any {
        const today = parseInt(moment().format('YYYYMMDD'));

        let canEdit = ((loadDate >= today) && (!appointment.isDNA && !appointment.isCancelled) && (!appointment.isBilled));
        const timeString = computeTimeStringFromStartTimeAndDurationInSeconds(appointment.time, appointment.duration);

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
            isBilled: appointment.isBilled
        }
        // @ts-ignore
        result.color = this.getColourForAppointment(appointment);


        return result;
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
            createdBy: Controller.getInstance().getLoggedInUsername(),
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


    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Appointment Controller Helper";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        logger(`Handling state changed ${name}`);

        switch (name) {
            case STATE_NAMES.clinicConfig: {
                this.clinicConfig = newValue[0];
                this.listeners.forEach((listener) => {
                    const config = JSON.parse(JSON.stringify(this.clinicConfig));
                    listener.loadedClinicAppointmentBookConfig(config);
                });
                break;
            }
            case (STATE_NAMES.patientSearch): {
                this.patientSearch = newValue;
                this.listeners.forEach((listener) => listener.loadedPatientSearch(this.patientSearch));
                break;
            }
            case (STATE_NAMES.appointmentTypes): {
                this.appointmentTypes = newValue;
                this.listeners.forEach((listener) => listener.loadedAppointmentTypes(this.appointmentTypes));
                break;

            }
            case (STATE_NAMES.providers): {
                this.providers = newValue;
                this.listeners.forEach((listener) => listener.loadedProviders(this.providers));
                break;

            }

        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
        switch (name) {
            case (STATE_NAMES.appointmentTypes): {
                this.appointmentTypes = Controller.getInstance().getStateManager().getStateByName(name);
                this.listeners.forEach((listener) => listener.loadedAppointmentTypes(this.appointmentTypes));
                break;

            }
        }
    }

    public getEventForAppointmentTemplateForDate(startDate: number, dayNumber: number, template: any): any {
        logger(`Creating event for appointment template on date ${startDate} with ${dayNumber}`);
        logger(template);
        if (template.day < dayNumber) return null;
        const loadDate = startDate + (template.day - dayNumber);

        const timeString = computeTimeStringFromStartTimeAndDurationInSeconds(template.time, template.duration);


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

    handleAppointmentTemplateRendering(data: any) {
        logger(`Rendering event`);
        logger(data);
        const icons = AppointmentControllerHelper.getInstance().getIconForAppointmentType(data.original.type);
        logger(`Applicable icons`);
        logger(icons);

        let buffer = '' +
            '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' +
            '  <div class="md-custom-event-wrapper">' +
            '    <div class="container-fluid">' +
            '    <div class="row ">' +
            `      <div style="background:${data.color}" class="col-12 md-custom-event-template-type">${data.original.type}</div>` +
            '      <div class="col-12 d-flex w-100 justify-content-between md-custom-event-time">' +
            `        <span>${data.start} - ${data.end}</span>`;
        if (icons.trim().length > 0) {
            buffer += '' +
                `        <span class="md-custom-event-img-cont">${icons}</span>` +
                '      </div>' +
                '  </div>' +
                '</div>';
        } else {
            buffer += '' +
                '  </div>' +
                '</div>';
        }
        return buffer;
    }

    handleAppointmentRendering(data: any) {
        logger(`Rendering event`);
        logger(data);
        const icons = AppointmentControllerHelper.getInstance().getIconsForEvent(data.original);
        logger(`Applicable icons`);
        logger(icons);

        let buffer = '' +
            '<div class="md-custom-event-cont" style="border-left: 5px solid ' + data.color + ';background:' + data.color + '">' +
            '  <div class="md-custom-event-wrapper">' +
            '    <div class="container-fluid">' +
            '    <div class="row ">' +
            `      <div style="background:${data.color}" class="col-sm-12 col-md-2 md-custom-event-type">${data.original.type}</div>` +
            `      <div class="col-sm-4 col-md-6 md-custom-event-title">${data.title}</div>` +
            '      <div class="col-sm-6 col-md-4 d-flex w-100 justify-content-between md-custom-event-time">' +
            `        <span>${data.start} - ${data.end}</span>`;
        if (icons.trim().length > 0) {
            buffer += '' +
                `        <span class="md-custom-event-img-cont">${icons}</span>` +
                '      </div>' +
                '  </div>' +
                '</div>';
        } else {
            buffer += '' +
                '  </div>' +
                '</div>';
        }
        return buffer;
    }


}
