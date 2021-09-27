import debug from "debug";
import {Datepicker, Eventcalendar} from "@mobiscroll/javascript";


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
        console.log(`Handling new date picked`);
        console.log(event);
    }

    public setViewObjects(datePicker:Datepicker,calendar:Eventcalendar):void {
        this.datePicker = datePicker;
        this.calendar = calendar;
    }

    public onPageLoading(event:any,inst:any):void {
        console.log('Need to load date ');
        console.log(event);

    }

    public onAppointmentEditRequested(event:any, inst:any):void {
        console.log(event);

    }

    public onAppointmentDeleting(event:any,inst:any):boolean {
        console.log(event);
        return false;
    }

    public onAppointmentDeleted(event:any,inst:any):void {
        console.log(event);

    }

    public onAppointmentCreated(event:any, inst:any):void {
        console.log(event);

    }

    public onAppointmentContext(event:any, inst:any):void {

        console.log(event);
    }

    public onAppointmentUpdated(event:any,inst:any):void {

        console.log(event);
    }

}
