import {AppointmentController} from "./AppointmentController";
import {datepicker, Datepicker, eventcalendar, Eventcalendar, snackbar} from "@mobiscroll/javascript";
import debug from "debug";
import {STATE_NAMES, VIEW_CONTAINER} from "../AppTypes";
import moment from "moment";
import Controller from "../Controller";
import {AppointmentDetailModal} from "./AppointmentDetailModal";

const logger = debug('appointment-view');

type AppointmentViewElements = {
    datePicker: Datepicker | null,
    calendar: Eventcalendar | null,
}

export class AppointmentView {
    private static _instance: AppointmentView;

    public static getInstance(): AppointmentView {
        if (!(AppointmentView._instance)) {
            AppointmentView._instance = new AppointmentView();
        }
        return AppointmentView._instance;
    }

    private constructor() {
        this.handleAppointmentRendering = this.handleAppointmentRendering.bind(this);
    }


    private viewElements: AppointmentViewElements = {
        datePicker: null,
        calendar: null,
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
                AppointmentView.getInstance().viewElements.calendar?.navigate(event.value);
            }
        });
    }

    getCalender(): Eventcalendar {
        return this.viewElements.calendar;
    }

    handleAppointmentRendering(data: any) {
        logger(`Rendering event`);
        logger(data);
        const icons = AppointmentController.getInstance().getIconsForEvent(data.original);
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


    public onDocumentLoaded() {

        this.setupDatePicker();
        AppointmentDetailModal.getInstance().onDocumentLoaded();


        let options: any;
        if (AppointmentController.getInstance().getModel().clinicConfig) {
            logger('Using clinic config options');
            options = {
                clickToCreate: AppointmentController.getInstance().getModel().clinicConfig.clickToCreate,
                dragTimeStep: AppointmentController.getInstance().getModel().clinicConfig.dragTimeStep,
                dragToCreate: AppointmentController.getInstance().getModel().clinicConfig.dragToCreate,
                dragToMove: AppointmentController.getInstance().getModel().clinicConfig.dragToMove,
                dragToResize: AppointmentController.getInstance().getModel().clinicConfig.dragToResize,
                min: moment().subtract(AppointmentController.getInstance().getModel().clinicConfig.min, "months"),
                controls: AppointmentController.getInstance().getModel().clinicConfig.controls,
                showControls: AppointmentController.getInstance().getModel().clinicConfig.showControls,
                view: AppointmentController.getInstance().getModel().clinicConfig.view,
                invalidateEvent: AppointmentController.getInstance().getModel().clinicConfig.invalidateEvent,
                invalid: AppointmentController.getInstance().getModel().clinicConfig.invalid,
            }
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
                        type: 'day',
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


        options.onSelectedDateChange = (event: any, inst: any) => {
            AppointmentView.getInstance().viewElements.datePicker?.setVal(event.date);
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
                        AppointmentView.getInstance().viewElements.calendar.addEvent(event.event);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(event.event),
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
        options.renderScheduleEvent = this.handleAppointmentRendering;


        if (AppointmentController.getInstance().getModel().providers) {
            let providers: any[] = [];

            AppointmentController.getInstance().getModel().providers.forEach((provider: any) => {
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


}