import {TodayController} from "./TodayController";
import {eventcalendar, Eventcalendar} from "@mobiscroll/javascript";
import debug from "debug";

import {AppointmentControllerHelper} from "../helper/AppointmentControllerHelper";
import moment from "moment";
import Controller from "../Controller";

const logger = debug('today-view');

export class TodayView {
    private static _instance: TodayView;
    private calendar: Eventcalendar | null = null;
    private currentProviderNo: string = '';

    private constructor() {
    }

    public static getInstance(): TodayView {
        if (!(TodayView._instance)) {
            TodayView._instance = new TodayView();
        }
        return TodayView._instance;
    }

    getCalender(): Eventcalendar {
        return this.calendar;
    }


    public onDocumentLoaded() {
        this.currentProviderNo = Controller.getInstance().getLoggedInUsername();

        let options = AppointmentControllerHelper.getInstance().getClinicConfig();
        logger('Using clinic config options');
        const day = parseInt(moment().format('d'));
        options.view.startDay = day;
        options.view.endDay = day;
        options.clickToCreate = false;
        options.dragToCreate = false;
        options.dragToMove = false;
        options.dragToResize = false;
        options.min = new Date();
        options.showControls = false;
        options.resources = [this.currentProviderNo];
        options.groupBy = 'date';

        options.onPageLoading = (event: any, inst: any) => {
            TodayController.getInstance().onPageLoading(event, inst);
        };

        options.renderHeader = function () {
            return `<div class="my-custom-title"><strong>${moment().format('ddd DD')}</strong></div>`;
        }


        options.onEventClick = (args: any) => {
            logger(args.event);
        }
        options.renderScheduleEvent = AppointmentControllerHelper.getInstance().handleAppointmentRendering;

        // @ts-ignore
        this.calendar = eventcalendar(document.getElementById("todayDetail"), options);
    }

    public applyClinicConfig(clinicConfig: any) {
        if (this.calendar) {
            this.currentProviderNo = Controller.getInstance().getLoggedInUsername();
            logger('State changed, using clinic config options');
            const day = parseInt(moment().format('d'));
            clinicConfig.view.startDay = day;
            clinicConfig.view.endDay = day;
            clinicConfig.clickToCreate = false;
            clinicConfig.dragToCreate = false;
            clinicConfig.dragToMove = false;
            clinicConfig.dragToResize = false;
            clinicConfig.min = new Date();
            clinicConfig.showControls = false;
            clinicConfig.resources = [this.currentProviderNo];
            clinicConfig.groupBy = 'date';

            this.calendar.setOptions(clinicConfig);
        }
    }
}
