import {AppointmentController} from "./AppointmentController";
import {datepicker, Datepicker, eventcalendar, Eventcalendar, snackbar} from "@mobiscroll/javascript";
import debug from "debug";
import {STATE_NAMES, VIEW_CONTAINER} from "../AppTypes";
import moment from "moment";
import Controller from "../Controller";
import {AppointmentDetailModal} from "./AppointmentDetailModal";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";

const logger = debug('appointment-view');

type AppointmentViewElements = {
    datePicker: Datepicker | null,
    calendar: Eventcalendar | null,
}

export class AppointmentBookView {
    private static _instance: AppointmentBookView;
    private viewElements: AppointmentViewElements = {
        datePicker: null,
        calendar: null,
    }

    private constructor() {}

    public static getInstance(): AppointmentBookView {
        if (!(AppointmentBookView._instance)) {
            AppointmentBookView._instance = new AppointmentBookView();
        }
        return AppointmentBookView._instance;
    }

    getCalender(): Eventcalendar {
        return this.viewElements.calendar;
    }


    public onDocumentLoaded() {

        this.setupDatePicker();
        AppointmentDetailModal.getInstance().onDocumentLoaded();


        let options = AppointmentControllerHelper.getInstance().getClinicConfig();
        logger('Using clinic config options');



        options.onSelectedDateChange = (event: any, inst: any) => {
            AppointmentBookView.getInstance().viewElements.datePicker?.setVal(event.date);
        };
        options.onPageLoading = (event: any, inst: any) => {
            AppointmentController.getInstance().onPageLoading(event, inst);
        };
        options.onEventCreated = (event: any, inst: any) => {
            AppointmentDetailModal.getInstance().close();
            // store temporary event
            AppointmentController.getInstance().getModel().tempEvent = event.event;
            logger('Creating event');
            logger(event);

            AppointmentDetailModal.getInstance().startCreateAppointment(event.target);
        };

        options.onEventDeleted = (event: any, inst: any) => {
            snackbar({
                button: {
                    action: function () {
                        // @ts-ignore
                        AppointmentBookView.getInstance().viewElements.calendar.addEvent(event.event);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointments,
                            AppointmentControllerHelper.getInstance().getAppointmentFromEvent(event.event),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        };
        options.onEventClick = (args: any) => {
            logger(args.event);
            if (args.event.editable) {
                AppointmentController.getInstance().getModel().oldEvent = Object.assign({}, args.event);
                AppointmentController.getInstance().getModel().tempEvent = args.event;

                if (!AppointmentDetailModal.getInstance().isVisible()) {
                    logger(args);
                    AppointmentDetailModal.getInstance().updateAppointment(args);
                }
            }
        }
        options.renderScheduleEvent = AppointmentControllerHelper.getInstance().handleAppointmentRendering;
        options.onEventUpdated = (args: any) => {
            // user has dragged event - update the appointment
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentControllerHelper.getInstance().getAppointmentFromEvent(args.event),
                false);

        }

        if (AppointmentControllerHelper.getInstance().haveProvidersLoaded()) {
            let providers: any[] = [];

            AppointmentControllerHelper.getInstance().getProviders().forEach((provider: any) => {
                if (provider.isCurrent) providers.push({
                    text: provider.name,
                    value: provider.name,
                    id: provider.name,
                    name: provider.name
                });
            });

            if (this.viewElements.calendar) this.viewElements.calendar.setOptions(
                {
                    resources: providers,
                    groupBy: 'date'
                }
            );

        }

        // @ts-ignore
        this.viewElements.calendar = eventcalendar(document.getElementById(VIEW_CONTAINER.calendarDetail), options);
    }

    public applyClinicConfig(clinicConfig: any) {
        if (this.viewElements.calendar) {
            logger('State changed, using clinic config options');

            this.viewElements.calendar.setOptions({
                clickToCreate: clinicConfig.clickToCreate,
                dragTimeStep: clinicConfig.dragTimeStep,
                dragToCreate: clinicConfig.dragToCreate,
                dragToMove: clinicConfig.dragToMove,
                dragToResize: clinicConfig.dragToResize,
                min: moment().subtract(clinicConfig.min, "months"),
                showControls: clinicConfig.showControls,
                view: clinicConfig.view,
                invalidateEvent: clinicConfig.invalidateEvent,
                invalid: clinicConfig.invalid,
            });


        }
        AppointmentDetailModal.getInstance().applyClinicConfig(clinicConfig);

    }

    public setupProviders(providersCollection: any[]) {
        let providers: any[] = [];

        providersCollection.forEach((provider: any) => {
            if (provider.isCurrent) providers.push({
                text: provider.name,
                value: provider.name,
                id: provider.name,
                name: provider.name
            });
        });


        if (this.viewElements.calendar) this.viewElements.calendar.setOptions(
            {
                resources: providers,
                groupBy: 'date'
            }
        );

        AppointmentDetailModal.getInstance().setupProviderDropdown(providers);
    }

    protected setupDatePicker() {
        // @ts-ignore
        this.viewElements.datePicker = datepicker(document.getElementById(VIEW_CONTAINER.calendarControl), {
            controls: ['calendar'],
            display: "inline",
            dateFormat: 'YYYYMMDD',
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showWeekNumbers: true,
            onChange: (event: any, inst: any) => {
                AppointmentBookView.getInstance().viewElements.calendar?.navigate(event.value);
            }
        });
    }


}