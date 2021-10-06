import {SELECT, STATE_NAMES} from "../AppTypes";
import {datepicker, getInst, Popup, popup, select, snackbar} from "@mobiscroll/javascript";
import {AppointmentTemplateController} from "./AppointmentTemplateController";
import Controller from "../Controller";
import moment from "moment";
import {AppointmentTemplateView} from "./AppointmentTemplateView";
import {v4} from "uuid";
import {SecurityManager} from "ui-framework-jps";
import debug from "debug";

const logger = debug('appointment-template-detail-view');

type AppointmentTemplateDetailViewElements = {
    popup: Popup | null,
    range: any | null,
    deleteButton: HTMLButtonElement | null,
    appointmentTypeEl: HTMLSelectElement | null,
    appointmentTypeDropdown: any | null,
    providersDropdown: any | null,
}


export class AppointmentTemplateDetailModal {

    private static _instance: AppointmentTemplateDetailModal;

    public static getInstance(): AppointmentTemplateDetailModal {
        if (!(AppointmentTemplateDetailModal._instance)) {
            AppointmentTemplateDetailModal._instance = new AppointmentTemplateDetailModal();
        }
        return AppointmentTemplateDetailModal._instance;
    }


    private static datePickerResponsive = {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    }
    private static datetimePickerResponsive = {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    }

    private patients: any[];

    private constructor() {
        this.patients = [];
    }

    private viewElements: AppointmentTemplateDetailViewElements = {
        popup: null,
        range: null,
        deleteButton: null,
        appointmentTypeEl: null,
        appointmentTypeDropdown: null,
        providersDropdown: null
    }

    public close() {
        this.viewElements.popup.close();
    }

    public isVisible() {
        return this.viewElements.popup.isVisible();
    }

    public applyClinicConfig(clinicConfig: any) {
        this.viewElements.range.setOptions({
            stepMinute: clinicConfig.dragTimeStep
        });

    }


    public onDocumentLoaded() {

        this.viewElements.deleteButton = <HTMLButtonElement>document.getElementById('event-delete-template');
        this.viewElements.appointmentTypeEl = <HTMLSelectElement>document.getElementById('event-appt-type-template');

        
        // @ts-ignore
        this.viewElements.popup = popup('#add-appointment-template-popup', {
            display: 'bottom',
            contentPadding: true,
            fullScreen: true,
            responsive: {
                medium: {
                    display: 'anchored',
                    width: 400,
                    fullScreen: false,
                    touchUi: false
                }
            }
        });


        this.viewElements.range = datepicker('#event-date-template', {
            controls: ['date'],
            select: 'range',
            startInput: '#start-input-template',
            endInput: '#end-input-template',
            showRangeLabels: false,
            touchUi: true,
            stepMinute: 15,
            maxTime: '17:00',
            responsive: AppointmentTemplateDetailModal.datePickerResponsive,
            onChange: function (args: any) {
                let date = args.value;
                // update event's start date
                AppointmentTemplateController.getInstance().getModel().tempEvent.start = date[0];
                AppointmentTemplateController.getInstance().getModel().tempEvent.end = date[1];
            }
        });

        this.setupActionButtons();
        logger('Completed setup of detail modal for appointment templates');
    }

    public setupAppointmentTypeDropDown(appointmentTypes: any[]) {

        let types: any[] = [];

        appointmentTypes.forEach((type: any) => {
            if (!(type.isStatus)) types.push(type.name);
        });

        // add the patient search values to the data of the select dropdown
        this.viewElements.appointmentTypeDropdown = select('#event-appt-type-template', {
            data: types,
            onChange: (event: any, inst: any) => {
                AppointmentTemplateController.getInstance().getModel().tempEvent.type = event.valueText;
            }
        });
    }

    public setupProviderDropdown(providers: any[]) {
        // add the patient search values to the data of the select dropdown
        this.viewElements.providersDropdown = select('#event-provider-template', {
            data: providers,
            onChange: (event: any, inst: any) => {
                AppointmentTemplateController.getInstance().getModel().tempEvent.provider = event.valueText;
                AppointmentTemplateController.getInstance().getModel().tempEvent.resource = event.value;

            }
        });

    }

    public startCreateAppointmentTemplate(elm: HTMLElement) {
        // hide delete button inside add popup
        this.viewElements.deleteButton.style.display = 'none';
        this.viewElements.appointmentTypeEl.style.display = 'block';


        // set popup header text and buttons for adding
        this.viewElements.popup.setOptions({
            headerText: 'New event',
            buttons: [
                {
                    text: 'Cancel',
                    keyCode: 'esc',
                    handler: function() {
                        AppointmentTemplateView.getInstance().getCalender().removeEvent(AppointmentTemplateController.getInstance().getModel().tempEvent);
                    }
                },
                {
                    text: 'Add',
                    keyCode: 'enter',
                    handler: function () {
                        let date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal();
                        // store the event created by the UI
                        let mobiId = AppointmentTemplateController.getInstance().getModel().tempEvent.id;
                        // generate a new UUID
                        let appointmentId = v4();
                        // get the colour for the event type
                        let colour = AppointmentTemplateController.getInstance().getColourForAppointmentType('Consulting');

                        let createdOn = parseInt(moment().format('YYYYDDMMHHmmss'));

                        let updatedEvent = {
                            id: appointmentId,
                            allDay: false,
                            start: date[0],
                            end: date[1],
                            free: false,
                            color: colour,
                            editable: true,
                            resource: AppointmentTemplateController.getInstance().getModel().tempEvent.resource,
                            createdBy: SecurityManager.getInstance().getLoggedInUsername(),
                            created: createdOn,
                            modified: createdOn,
                            type: AppointmentTemplateController.getInstance().getModel().tempEvent.type,
                            provider: AppointmentTemplateController.getInstance().getModel().tempEvent.provider
                        };
                        logger('inserting');
                        logger(updatedEvent);

                        // remove the original event
                        AppointmentTemplateView.getInstance().getCalender().removeEvent([mobiId]);
                        AppointmentTemplateView.getInstance().getCalender().addEvent(updatedEvent);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointmentTemplates,
                            AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(updatedEvent),
                            false);

                        // navigate the calendar to the correct view
                        AppointmentTemplateView.getInstance().getCalender().navigate(updatedEvent.start);
                        AppointmentTemplateDetailModal.getInstance().close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with a new event data
        this.viewElements.range.setVal([AppointmentTemplateController.getInstance().getModel().tempEvent.start, AppointmentTemplateController.getInstance().getModel().tempEvent.end]);
        this.viewElements.range.setOptions({
            controls: AppointmentTemplateController.getInstance().getModel().tempEvent.allDay ? ['date'] : ['datetime'],
            responsive: AppointmentTemplateController.getInstance().getModel().tempEvent.allDay ? AppointmentTemplateDetailModal.datePickerResponsive : AppointmentTemplateDetailModal.datetimePickerResponsive
        });

        this.viewElements.appointmentTypeDropdown.setVal('');
        this.viewElements.providersDropdown.setVal(AppointmentTemplateController.getInstance().getModel().tempEvent.resource);

        // set anchor for the popup
        this.viewElements.popup.setOptions({anchor: elm});

        this.viewElements.popup.open();
    }

    public updateAppointmentTemplate(args: any) {
        let ev = args.event;

        // show delete button inside edit popup
        this.viewElements.deleteButton.style.display = 'block';
        this.viewElements.appointmentTypeEl.style.display = 'none';


        // set popup header text and buttons for editing
        this.viewElements.popup.setOptions({
            headerText: 'Edit event',
            buttons: [
                {
                    text: 'Cancel',
                    keyCode: 'esc',
                    handler: function() {
                        AppointmentTemplateView.getInstance().getCalender().updateEvent(AppointmentTemplateController.getInstance().getModel().oldEvent);
                    }
                },
                {
                    text: 'Save',
                    keyCode: 'enter',
                    handler: function () {
                        let date = AppointmentTemplateDetailModal.getInstance().viewElements.range.getVal();
                        // update event with the new properties on save button click
                        let createdOn = parseInt(moment().format('YYYYDDMMHHmmss'));
                        //
                        let updatedEvent = {
                            id: ev.id,
                            allDay: false,
                            start: date[0],
                            end: date[1],
                            free: false,
                            editable: true,
                            resource: ev.resource,
                            createdBy: SecurityManager.getInstance().getLoggedInUsername(),
                            created: ev.created,
                            modified: createdOn,
                            type: ev.type,
                            provider: ev.provider
                        };
                        
                        // @ts-ignore
                        updatedEvent.color = AppointmentTemplateController.getInstance().getColourForAppointmentTemplate(updatedEvent);
                        logger('updated');
                        logger(updatedEvent)
                        AppointmentTemplateView.getInstance().getCalender().updateEvent(updatedEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointmentTemplates,
                            AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(updatedEvent),
                            false);
                        // navigate the calendar to the correct view

                        AppointmentTemplateView.getInstance().getCalender().navigate(date[0]);
                        AppointmentTemplateDetailModal.getInstance().close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with the selected event data
        this.viewElements.range.setVal([ev.start, ev.end]);

        // change range settings based on the allDay
        this.viewElements.range.setOptions({
            controls: ev.allDay ? ['date'] : ['datetime'],
            responsive: ev.allDay ? AppointmentTemplateDetailModal.datePickerResponsive : AppointmentTemplateDetailModal.datetimePickerResponsive
        });

        // set the appointment type and patient
        this.viewElements.appointmentTypeDropdown.setVal(ev.type);
        this.viewElements.providersDropdown.setVal(ev.resource);

        // set anchor for the popup
        this.viewElements.popup.setOptions({anchor: args.domEvent.currentTarget});
        this.viewElements.popup.open();
    }

    protected setupActionButtons() {
        this.viewElements.deleteButton.addEventListener('click', function () {
            // delete current event on button click
            //
            AppointmentTemplateView.getInstance().getCalender().removeEvent(AppointmentTemplateController.getInstance().getModel().tempEvent);
            Controller.getInstance().getStateManager().removeItemFromState(
                STATE_NAMES.appointmentTemplates,
                AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(AppointmentTemplateController.getInstance().getModel().tempEvent),
                false);

            AppointmentTemplateDetailModal.getInstance().close();

            // save a local reference to the deleted event
            let deletedEvent = AppointmentTemplateController.getInstance().getModel().tempEvent;

            //
            snackbar({
                button: {
                    action: function () {
                        //
                        AppointmentTemplateView.getInstance().getCalender().addEvent(deletedEvent);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointmentTemplates,
                            AppointmentTemplateController.getInstance().getAppointmentTemplateFromEvent(deletedEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });

    }

}
