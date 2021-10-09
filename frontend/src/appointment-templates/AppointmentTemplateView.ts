import {AppointmentTemplateController} from "./AppointmentTemplateController";
import {eventcalendar, Eventcalendar, snackbar} from "@mobiscroll/javascript";
import debug from "debug";
import {STATE_NAMES} from "../AppTypes";
import moment from "moment";
import Controller from "../Controller";
import {AppointmentTemplateDetailModal} from "./AppointmentTemplateDetailModal";

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
        this.handleAppointmentTemplateRendering = this.handleAppointmentTemplateRendering.bind(this);
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

    handleAppointmentTemplateRendering(data: any) {
        logger(`Rendering event`);
        logger(data);
        const icons = AppointmentTemplateController.getInstance().getIconsForEventTemplate(data.original);
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


    public onDocumentLoaded() {

        AppointmentTemplateDetailModal.getInstance().onDocumentLoaded();


        let options: any;
        if (AppointmentTemplateController.getInstance().getModel().clinicConfig) {
            logger('Using clinic config options');
            options = {
                clickToCreate: AppointmentTemplateController.getInstance().getModel().clinicConfig.clickToCreate,
                dragTimeStep: AppointmentTemplateController.getInstance().getModel().clinicConfig.dragTimeStep,
                dragToCreate: AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToCreate,
                dragToMove: AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToMove,
                dragToResize: AppointmentTemplateController.getInstance().getModel().clinicConfig.dragToResize,
                min: moment().subtract(AppointmentTemplateController.getInstance().getModel().clinicConfig.min, "months"),
                controls: AppointmentTemplateController.getInstance().getModel().clinicConfig.controls,
                showControls: AppointmentTemplateController.getInstance().getModel().clinicConfig.showControls,
                view: AppointmentTemplateController.getInstance().getModel().clinicConfig.view,
                invalidateEvent: AppointmentTemplateController.getInstance().getModel().clinicConfig.invalidateEvent,
                invalid: AppointmentTemplateController.getInstance().getModel().clinicConfig.invalid,
            }
            options.view.schedule.type = 'week';
        } else {
            logger('Using DEFAULT config options');
            options = {
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
        }


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
                            AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(event.event),
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
        options.renderScheduleEvent = this.handleAppointmentTemplateRendering;
        options.onEventUpdated = (args: any) => {

            // user has dragged event - update the appointment
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointmentTemplates,
                AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(args.event),
                false);
        }

        if (AppointmentTemplateController.getInstance().getModel().providers) {
            let providers: any[] = [];

            AppointmentTemplateController.getInstance().getModel().providers.forEach((provider: any) => {
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
            const config = JSON.parse(JSON.stringify(clinicConfig));
            config.view.schedule.type = 'week';

            this.viewElements.calendar.setOptions({
                clickToCreate: config.clickToCreate,
                dragTimeStep: config.dragTimeStep,
                dragToCreate: config.dragToCreate,
                dragToMove: config.dragToMove,
                dragToResize: config.dragToResize,
                showControls: config.showControls,
                view: config.view,
                invalidateEvent: config.invalidateEvent,
                invalid: config.invalid,
            });


        }
        AppointmentTemplateDetailModal.getInstance().applyClinicConfig(clinicConfig);

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

        AppointmentTemplateDetailModal.getInstance().setupProviderDropdown(providers);
    }


}
