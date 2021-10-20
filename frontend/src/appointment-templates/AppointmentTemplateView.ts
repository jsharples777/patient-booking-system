import {AppointmentTemplateController} from "./AppointmentTemplateController";
import {eventcalendar, Eventcalendar, snackbar} from "@mobiscroll/javascript";
import debug from "debug";
import {STATE_NAMES} from "../AppTypes";
import Controller from "../Controller";
import {AppointmentTemplateDetailModal} from "./AppointmentTemplateDetailModal";
import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";

const logger = debug('appointment-template-view');

type AppointmentTemplateViewElements = {
    calendar: Eventcalendar | null,
}

export class AppointmentTemplateView {
    private static _instance: AppointmentTemplateView;
    private viewElements: AppointmentTemplateViewElements = {
        calendar: null,
    }

    private constructor() {
    }

    public static getInstance(): AppointmentTemplateView {
        if (!(AppointmentTemplateView._instance)) {
            AppointmentTemplateView._instance = new AppointmentTemplateView();
        }
        return AppointmentTemplateView._instance;
    }

    getCalender(): Eventcalendar {
        return this.viewElements.calendar;
    }


    public onDocumentLoaded() {

        AppointmentTemplateDetailModal.getInstance().onDocumentLoaded();


        const options = AppointmentControllerHelper.getInstance().getClinicConfig();
        logger('Using clinic config options');
        options.view.schedule.type = 'week';


        options.onPageLoading = (event: any, inst: any) => {
            AppointmentTemplateController.getInstance().onPageLoading(event, inst);
        };
        options.onEventCreated = (event: any, inst: any) => {
            AppointmentTemplateDetailModal.getInstance().close();
            // store temporary event
            AppointmentTemplateController.getInstance().getModel().tempEvent = event.event;
            logger('Creating event');
            logger(event);

            AppointmentTemplateDetailModal.getInstance().startCreateAppointmentTemplate(event.target);
        };

        options.onEventDeleted = (event: any, inst: any) => {
            snackbar({
                button: {
                    action: function () {
                        // @ts-ignore
                        AppointmentTemplateView.getInstance().viewElements.calendar.addEvent(event.event);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointmentTemplates,
                            AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(event.event),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        };
        options.onEventClick = (args: any) => {
            logger(args.event);
            AppointmentTemplateController.getInstance().getModel().oldEvent = Object.assign({}, args.event);
            AppointmentTemplateController.getInstance().getModel().tempEvent = args.event;

            if (!AppointmentTemplateDetailModal.getInstance().isVisible()) {
                logger(args);
                AppointmentTemplateDetailModal.getInstance().updateAppointmentTemplate(args);
            }
        }
        options.renderScheduleEvent = AppointmentControllerHelper.getInstance().handleAppointmentTemplateRendering;
        options.onEventUpdated = (args: any) => {

            // user has dragged event - update the appointment
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointmentTemplates,
                AppointmentControllerHelper.getInstance().getAppointmentTemplateFromEvent(args.event),
                false);
        }

        if (AppointmentControllerHelper.getInstance().haveProvidersLoaded()) {
            const providers: any[] = [];

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
        this.viewElements.calendar = eventcalendar(document.getElementById('templateDetail'), options);
    }


    public applyClinicConfig(clinicConfig: any) {
        if (this.viewElements.calendar) {
            logger('State changed, using clinic config options');

            clinicConfig.view.schedule.type = 'week';

            this.viewElements.calendar.setOptions({
                clickToCreate: clinicConfig.clickToCreate,
                dragTimeStep: clinicConfig.dragTimeStep,
                dragToCreate: clinicConfig.dragToCreate,
                dragToMove: clinicConfig.dragToMove,
                dragToResize: clinicConfig.dragToResize,
                showControls: clinicConfig.showControls,
                view: clinicConfig.view,
                invalidateEvent: clinicConfig.invalidateEvent,
                invalid: clinicConfig.invalid,
            });
        }
        AppointmentTemplateDetailModal.getInstance().applyClinicConfig(clinicConfig);

    }


    public setupProviders(providersCollection: any[]) {
        const providers: any[] = [];

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

        AppointmentTemplateDetailModal.getInstance().setupProviderDropdown(providers);
    }


}
