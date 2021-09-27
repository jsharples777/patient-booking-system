import debug from "debug";
import {Datepicker, Eventcalendar} from "@mobiscroll/javascript";
import moment from "moment";
import {STATE_NAMES} from "./AppTypes";
import Controller from "./Controller";


export enum AppointmentType {
    Urgent = 'Urgent Appointment',
    Appointment = 'Appointment',
    Review = 'Review/Recall',
    Telehealth = 'TeleHealth Call',
    Consulting = 'Consulting',
    Fluvax = 'Fluvax',




}

const logger = debug('appointment-controller');

export class AppointmentController {
    private static _instance: AppointmentController;

    public static getInstance(): AppointmentController {
        if (!(AppointmentController._instance)) {
            AppointmentController._instance = new AppointmentController();
        }
        return AppointmentController._instance;
    }

    private datePicker:Datepicker|null = null;
    private calendar:Eventcalendar|null = null;
    private constructor() {
        this.handleNewDatePicked = this.handleNewDatePicked.bind(this);
        this.onPageLoading = this.onPageLoading.bind(this);
        this.onAppointmentEditRequested = this.onAppointmentEditRequested.bind(this);
        this.onAppointmentDeleting = this.onAppointmentDeleting.bind(this);
        this.onAppointmentDeleted = this.onAppointmentDeleted.bind(this);
        this.onAppointmentCreated = this.onAppointmentCreated.bind(this);
        this.onAppointmentContext = this.onAppointmentContext.bind(this);
        this.onAppointmentUpdated = this.onAppointmentUpdated.bind(this);
    }

    public handleNewDatePicked(event:any, inst:any):void {
        logger(`Handling new date picked`);
        logger(event);
    }

    public setViewObjects(datePicker:Datepicker,calendar:Eventcalendar):void {
        this.datePicker = datePicker;
        this.calendar = calendar;
    }

    protected getColourForAppointment(appointment:any) {
        switch (appointment.type) {
            case AppointmentType.Urgent: {
                return `rgba(200,100,10,50)`;
            }
            default: {
                return `rgba(10,100,100,50)`;
            }
        }
    }

    public onPageLoading(event:any,inst:any):void {
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        const loadDate = parseInt(moment(event.firstDay).format('YYYYMMDD'));
        logger(`Need to load date ${loadDate}`);

        let canEdit = (loadDate < today);

        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results:any[] = [];
        appointments.forEach((appointment:any) => {
            if ((appointment.start === loadDate)) {
                logger('Found appointment');
                logger(appointment);

                // convert the start and end time into the format for the calendar
                const time = parseInt(appointment.time); // HHMMSS as a time
                const duration = appointment.duration; // seconds

                const startTimeHours = Math.floor(appointment.time/10000);
                const startTimeMinutes = Math.floor((time - (startTimeHours*10000))/100);
                const appointmentDuration = Math.floor(duration/60);

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
                    start:moment(`${loadDate}${appointment.time}`,'YYYYMMDDHHmmss'),
                    end:moment(`${loadDate}${timeString}`,'YYYYMMDDHHmm'),
                    title:appointment.name,
                    color: this.getColourForAppointment(appointment),
                    allDay:false,
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

    public onAppointmentEditRequested(event:any, inst:any):void {
        logger(event);

    }

    public onAppointmentDeleting(event:any,inst:any):boolean {
        logger(event);
        return false;
    }

    public onAppointmentDeleted(event:any,inst:any):void {
        logger(event);

    }

    public onAppointmentCreated(event:any, inst:any):void {
        logger(event);

    }

    public onAppointmentContext(event:any, inst:any):void {

        logger(event);
    }

    public onAppointmentUpdated(event:any,inst:any):void {

        logger(event);
    }

}
