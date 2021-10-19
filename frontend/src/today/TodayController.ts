import debug from "debug";
import moment from "moment";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {SecurityManager, StateChangeListener} from "ui-framework-jps";
import {ScheduleLoadedListener} from "../helper/ScheduleLoadedListener";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";
import {TodayView} from "./TodayView";
import {TodaysPatientsView} from "./TodaysPatientsView";

const logger = debug('today-controller');

export class TodayController implements StateChangeListener, ScheduleLoadedListener {
    private static _instance: TodayController;

    private constructor() {
        this.onPageLoading = this.onPageLoading.bind(this);

        if (!Controller.getInstance().isProvider()) return;

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
        if (!Controller.getInstance().isProvider()) return;
        const today = parseInt(moment().format('YYYYMMDD'));
        logger(`Need to load today (${today})`);


        const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
        let results: any[] = [];
        let appointmentsForTheDay: any[] = [];
        appointments.forEach((appointment: any) => {
            if ((appointment.start === today) && (appointment.provider === Controller.getInstance().getProviderNo())) {
                appointmentsForTheDay.push(appointment);

                let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                results.push(result);
            }

        });


        inst.setEvents(appointmentsForTheDay);
    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Today";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        if (!Controller.getInstance().isProvider()) return;
        logger(`Handling state changed ${name}`);

        switch (name) {

            case (STATE_NAMES.appointments): {
                const today = parseInt(moment().format('YYYYMMDD'));
                const currentProvider = Controller.getInstance().getLoggedInUsername();
                logger(`Provider no is ${currentProvider}`);

                const appointments = Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.appointments);
                let results: any[] = [];
                appointments.forEach((appointment: any) => {
                    if (appointment.start === today) {
                        logger(appointment);

                        if (appointment.provider === currentProvider) {
                            logger(`Found appointment for today and provider ${currentProvider}`);

                            // add the patient in the appointment to the dashboard
                            if (appointment._patient) TodaysPatientsView.getInstance().addPatientSummaryById(appointment._patient);

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
        if (!Controller.getInstance().isProvider()) return;
        if ((name === STATE_NAMES.appointments) && (appointment.provider === Controller.getInstance().getLoggedInUsername())) {
            logger('New Appointment inserted by another user');
            logger(appointment);
            const today = parseInt(moment().format('YYYYMMDD'));
            if (appointment.start === today) {

                let result = AppointmentControllerHelper.getInstance().getEventForAppointment(today, appointment);
                logger('Converted to event');
                logger(result);

                // add the patient in the appointment to the dashboard
                if (appointment._patient) TodaysPatientsView.getInstance().addPatientSummaryById(appointment._patient);

                TodayView.getInstance().getCalender().addEvent(result);
            }
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, appointment: any): void {
        if (!Controller.getInstance().isProvider()) return;
        if ((name === STATE_NAMES.appointments) && (appointment.provider === Controller.getInstance().getLoggedInUsername())) {
            logger('Appointment deleted by another user');
            logger(appointment);
            const today = parseInt(moment().format('YYYYMMDD'));
            if (appointment.start === today) {
                TodayView.getInstance().getCalender().removeEvent([appointment._id]);
                // remove the patient in the appointment to the dashboard
                if (appointment._patient) TodaysPatientsView.getInstance().removePatient({_id:appointment._patient});
            }
        }
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, appointment: any): void {
        if (!Controller.getInstance().isProvider()) return;
        if ((name === STATE_NAMES.appointments) && (appointment.provider === Controller.getInstance().getLoggedInUsername())) {
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
