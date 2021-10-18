import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";
import {ScheduleLoadedListener} from "../helper/ScheduleLoadedListener";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";
import {TodayView} from "./TodayView";

const logger = debug('today-controller');

export class TodayController implements StateChangeListener, ScheduleLoadedListener {
    private static _instance: TodayController;

    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.appointments, this);
        AppointmentControllerHelper.getInstance().addListener(this);
    }

    public static getInstance(): TodayController {
        if (!(TodayController._instance)) {
            TodayController._instance = new TodayController();
        }
        return TodayController._instance;
    }


    public onDocumentLoaded() {
        TodayView.getInstance().onDocumentLoaded();
    }


    public onPageLoading(event: any, inst: any): void {  // load the events for the view
        logger(event);
        const today = parseInt(moment().format('YYYYMMDD'));
        logger(`Need to load today ${today})`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results: any[] = [];
        let appointmentsForTheDay: any[] = [];
        appointments.forEach((appointment: any) => {
            if (appointment.start === today) {
                appointmentsForTheDay.push(appointment);

                let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                results.push(result);
            }

        });


        inst.setEvents(results);
    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Today";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        logger(`Handling state changed ${name}`);

        switch (name) {

            case (STATE_NAMES.appointments): {
                const today = parseInt(moment().format('YYYYMMDD'));
                const currentProvider = Controller.getInstance().getLoggedInUsername();

                const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
                let results: any[] = [];
                appointments.forEach((appointment: any) => {
                    if (appointment.start === today) {


                        if (appointment.provider === currentProvider) {
                            logger(`Found appointment for today and provider ${currentProvider}`);
                            logger(appointment);

                            let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                            logger('Converted to event');
                            logger(result);
                            results.push(result);
                        }
                    }

                });

                TodayView.getInstance().getCalender().setEvents(results);
                break;

            }

        }
    }

    stateChangedItemAdded(managerName: string, name: string, appointment: any): void {
        if ((name === STATE_NAMES.appointments) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('New Appointment inserted by another user');
            logger(appointment);
            const today = parseInt(moment().format('YYYYMMDD'));
            if (appointment.start === today) {

                let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                logger('Converted to event');
                logger(result);

                TodayView.getInstance().getCalender().addEvent(result);
            }
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, appointment: any): void {
        if (name === STATE_NAMES.appointments) {
            logger('Appointment deleted by another user');
            logger(appointment);
            const today = parseInt(moment().format('YYYYMMDD'));
            if (appointment.start === today) {
                TodayView.getInstance().getCalender().removeEvent([appointment._id]);
            }
        }
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, appointment: any): void {
        if ((name === STATE_NAMES.appointments) && (appointment.createdBy !== SecurityManager.getInstance().getLoggedInUsername())) {
            logger('Appointment updated by another user');
            logger(appointment);

            const today = parseInt(moment().format('YYYYMMDD'));
            if (appointment.start === today) {

                let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                logger('Converted to event');
                logger(result);

                TodayView.getInstance().getCalender().updateEvent(result);
            }
        }
    }

    loadedAppointmentTypes(appointmentTypes: any[]): void {
    }

    loadedClinicAppointmentBookConfig(clinicConfig: any): void {
        TodayView.getInstance().applyClinicConfig(clinicConfig);
    }

    loadedPatientSearch(patientSearch: any[]): void {
    }

    loadedProviders(providers: any[]): void {
    }

}
