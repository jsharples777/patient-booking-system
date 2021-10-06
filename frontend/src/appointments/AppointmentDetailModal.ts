import {SELECT, STATE_NAMES} from "../AppTypes";
import {datepicker, getInst, Popup, popup, select, snackbar} from "@mobiscroll/javascript";
import {AppointmentController} from "./AppointmentController";
import Controller from "../Controller";
import moment from "moment";
import {AppointmentBookView} from "./AppointmentBookView";
import {v4} from "uuid";
import {SecurityManager} from "ui-framework-jps";
import debug from "debug";
import {AppointmentTemplateView} from "../appointment-templates/AppointmentTemplateView";
import {AppointmentTemplateController} from "../appointment-templates/AppointmentTemplateController";

const logger = debug('appointment-detail-view');

type AppointmentDetailViewElements = {
    popup: Popup | null,
    range: any | null,
    titleInput: HTMLInputElement | null,
    descriptionTextarea: HTMLTextAreaElement | null,
    deleteButton: HTMLButtonElement | null,
    patientArrivedButton: HTMLButtonElement | null,
    patientCancelledButton: HTMLButtonElement | null,
    patientDNAButton: HTMLButtonElement | null,
    readyForBillingButton: HTMLButtonElement | null,
    billingCompleteButton: HTMLButtonElement | null,
    patientSearchEl: HTMLSelectElement | null,
    appointmentTypeEl: HTMLSelectElement | null,
    patientSearchDropdown: any | null
    appointmentTypeDropdown: any | null,
    providersDropdown: any | null,
    warningsEl: HTMLTextAreaElement | null
}


export class AppointmentDetailModal {

    private static _instance: AppointmentDetailModal;

    public static getInstance(): AppointmentDetailModal {
        if (!(AppointmentDetailModal._instance)) {
            AppointmentDetailModal._instance = new AppointmentDetailModal();
        }
        return AppointmentDetailModal._instance;
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

    private viewElements: AppointmentDetailViewElements = {
        popup: null,
        range: null,
        titleInput: null,
        descriptionTextarea: null,
        deleteButton: null,
        patientArrivedButton: null,
        patientCancelledButton: null,
        patientDNAButton: null,
        readyForBillingButton: null,
        billingCompleteButton: null,
        patientSearchEl: null,
        appointmentTypeEl: null,
        appointmentTypeDropdown: null,
        patientSearchDropdown: null,
        providersDropdown: null,
        warningsEl: null
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

        this.viewElements.titleInput = <HTMLInputElement>document.getElementById('event-title');
        this.viewElements.descriptionTextarea = <HTMLTextAreaElement>document.getElementById('event-desc');
        this.viewElements.patientArrivedButton = <HTMLButtonElement>document.getElementById('event-arrived');
        this.viewElements.deleteButton = <HTMLButtonElement>document.getElementById('event-delete');
        this.viewElements.patientCancelledButton = <HTMLButtonElement>document.getElementById('event-cancelled');
        this.viewElements.patientDNAButton = <HTMLButtonElement>document.getElementById('event-dna');
        this.viewElements.readyForBillingButton = <HTMLButtonElement>document.getElementById('event-readyforbilling');
        this.viewElements.billingCompleteButton = <HTMLButtonElement>document.getElementById('event-billingcompleted');

        this.viewElements.patientSearchEl = <HTMLSelectElement>document.getElementById(SELECT.patientSearch);
        this.viewElements.appointmentTypeEl = <HTMLSelectElement>document.getElementById(SELECT.appointmentType);

        this.viewElements.warningsEl = <HTMLTextAreaElement>document.getElementById("patient-warning");


        // @ts-ignore
        this.viewElements.popup = popup('#add-appointment-popup', {
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

        this.viewElements.titleInput.addEventListener('input', function (ev: any) {
            // update current event's title
            AppointmentController.getInstance().getModel().tempEvent.title = ev.target.value;
        });

        this.viewElements.descriptionTextarea.addEventListener('change', function (ev: any) {
            // update current event's title
            AppointmentController.getInstance().getModel().tempEvent.description = ev.target.value;
        });

        this.viewElements.range = datepicker('#event-date', {
            controls: ['date'],
            select: 'range',
            startInput: '#start-input',
            endInput: '#end-input',
            showRangeLabels: false,
            touchUi: true,
            stepMinute: 15,
            maxTime: '17:00',
            responsive: AppointmentDetailModal.datePickerResponsive,
            onChange: function (args: any) {
                let date = args.value;
                // update event's start date
                AppointmentController.getInstance().getModel().tempEvent.start = date[0];
                AppointmentController.getInstance().getModel().tempEvent.end = date[1];
            }
        });


        this.setupActionButtons();
        logger('Completed setup of detail modal for appointments');
    }

    public setupAppointmentTypeDropDown(appointmentTypes: any[]) {

        let types: any[] = [];

        appointmentTypes.forEach((type: any) => {
            if (!(type.isStatus)) types.push(type.name);
        });

        // add the patient search values to the data of the select dropdown
        this.viewElements.appointmentTypeDropdown = select('#' + SELECT.appointmentType, {
            data: types,
            onChange: (event: any, inst: any) => {
                // @ts-ignore
                getInst(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value = event.valueText;
                AppointmentController.getInstance().getModel().tempEvent.type = event.valueText;
            }
        });
    }

    public setupProviderDropdown(providers: any[]) {
        // add the patient search values to the data of the select dropdown
        this.viewElements.providersDropdown = select('#event-provider', {
            data: providers,
            onChange: (event: any, inst: any) => {
                AppointmentController.getInstance().getModel().tempEvent.provider = event.valueText;
                AppointmentController.getInstance().getModel().tempEvent.resource = event.value;

            }
        });

    }

    public startCreateAppointment(elm: HTMLElement) {
        // hide delete button inside add popup
        this.viewElements.deleteButton.style.display = 'none';
        this.viewElements.patientCancelledButton.style.display = 'none';
        this.viewElements.patientDNAButton.style.display = 'none';
        this.viewElements.patientArrivedButton.style.display = 'none';
        this.viewElements.readyForBillingButton.style.display = 'none';
        this.viewElements.billingCompleteButton.style.display = 'none';
        // show the dropdowns
        this.viewElements.patientSearchEl.style.display = 'block';
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
                        let date = AppointmentDetailModal.getInstance().viewElements.range.getVal();
                        // store the event created by the UI
                        let mobiId = AppointmentController.getInstance().getModel().tempEvent.id;
                        // generate a new UUID
                        let appointmentId = v4();
                        // get the colour for the event type
                        let colour = AppointmentController.getInstance().getColourForAppointmentType('Consulting');

                        let createdOn = parseInt(moment().format('YYYYDDMMHHmmss'));

                        let updatedEvent = {
                            id: appointmentId,
                            title: getInst<any>(AppointmentDetailModal.getInstance().viewElements.titleInput).value,
                            description: getInst<any>(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value,
                            allDay: false,
                            start: date[0],
                            end: date[1],
                            free: false,
                            color: colour,
                            patientId: AppointmentController.getInstance().getModel().tempEvent.patientId,
                            editable: true,
                            resource: AppointmentController.getInstance().getModel().tempEvent.resource,
                            isDNA: false,
                            isCancelled: false,
                            createdBy: SecurityManager.getInstance().getLoggedInUsername(),
                            created: createdOn,
                            modified: createdOn,
                            arrivalTime: '',
                            type: AppointmentController.getInstance().getModel().tempEvent.type,
                            provider: AppointmentController.getInstance().getModel().tempEvent.provider
                        };
                        logger('inserting');
                        logger(updatedEvent);

                        // remove the original event
                        AppointmentBookView.getInstance().getCalender().removeEvent([mobiId]);
                        AppointmentBookView.getInstance().getCalender().addEvent(updatedEvent);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(updatedEvent),
                            false);

                        // navigate the calendar to the correct view
                        AppointmentBookView.getInstance().getCalender().navigate(updatedEvent.start);
                        AppointmentDetailModal.getInstance().close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with a new event data

        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.titleInput).value = AppointmentController.getInstance().getModel().tempEvent.title;
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = '';

        this.viewElements.range.setVal([AppointmentController.getInstance().getModel().tempEvent.start, AppointmentController.getInstance().getModel().tempEvent.end]);
        this.viewElements.range.setOptions({
            controls: AppointmentController.getInstance().getModel().tempEvent.allDay ? ['date'] : ['datetime'],
            responsive: AppointmentController.getInstance().getModel().tempEvent.allDay ? AppointmentDetailModal.datePickerResponsive : AppointmentDetailModal.datetimePickerResponsive
        });

        this.viewElements.appointmentTypeDropdown.setVal('');
        this.viewElements.patientSearchDropdown.setVal('');
        this.viewElements.providersDropdown.setVal(AppointmentController.getInstance().getModel().tempEvent.resource);

        // set anchor for the popup
        this.viewElements.popup.setOptions({anchor: elm});

        this.viewElements.popup.open();
    }

    public updateAppointment(args: any) {
        let ev = args.event;

        // show delete button inside edit popup
        this.viewElements.patientArrivedButton.style.display = 'block';
        this.viewElements.deleteButton.style.display = 'block';
        this.viewElements.patientCancelledButton.style.display = 'block';
        this.viewElements.patientDNAButton.style.display = 'block';
        this.viewElements.readyForBillingButton.style.display = 'block';
        this.viewElements.billingCompleteButton.style.display = 'block';
        // show the dropdowns
        this.viewElements.patientSearchEl.style.display = 'none';
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
                        let date = AppointmentDetailModal.getInstance().viewElements.range.getVal();
                        // update event with the new properties on save button click
                        let createdOn = parseInt(moment().format('YYYYDDMMHHmmss'));
                        //
                        let updatedEvent = {
                            id: ev.id,
                            title: getInst<any>(AppointmentDetailModal.getInstance().viewElements.titleInput).value,
                            description: getInst<any>(AppointmentDetailModal.getInstance().viewElements.descriptionTextarea).value,
                            allDay: false,
                            start: date[0],
                            end: date[1],
                            free: false,
                            patientId: ev.patientId,
                            editable: true,
                            resource: ev.resource,
                            isDNA: ev.isDNA,
                            isCancelled: ev.isCancelled,
                            createdBy: SecurityManager.getInstance().getLoggedInUsername(),
                            created: ev.created,
                            modified: createdOn,
                            arrivalTime: '',
                            type: ev.type,
                            provider: ev.provider
                        };
                        // @ts-ignore
                        updatedEvent.color = AppointmentController.getInstance().getColourForAppointment(updatedEvent);
                        logger('updated');
                        logger(updatedEvent)
                        AppointmentBookView.getInstance().getCalender().updateEvent(updatedEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(updatedEvent),
                            false);
                        // navigate the calendar to the correct view

                        AppointmentBookView.getInstance().getCalender().navigate(date[0]);
                        AppointmentDetailModal.getInstance().close();
                    },
                    cssClass: 'mbsc-popup-button-primary'
                }
            ]
        });

        // fill popup with the selected event data
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.titleInput).value = ev.title || '';
        // @ts-ignore
        mobiscroll5.getInst(this.viewElements.descriptionTextarea).value = ev.description || '';
        this.viewElements.range.setVal([ev.start, ev.end]);

        // change range settings based on the allDay
        this.viewElements.range.setOptions({
            controls: ev.allDay ? ['date'] : ['datetime'],
            responsive: ev.allDay ? AppointmentDetailModal.datePickerResponsive : AppointmentDetailModal.datetimePickerResponsive
        });

        // set the appointment type and patient
        this.viewElements.appointmentTypeDropdown.setVal(ev.type);
        this.viewElements.patientSearchDropdown.setVal(ev.patientId);
        this.viewElements.providersDropdown.setVal(ev.resource);

        let warningsText = this.getPatientWarnings(ev.patientId);
        // @ts-ignore
        mobiscroll5.getInst(AppointmentDetailModal.getInstance().viewElements.warningsEl).value = warningsText;

        // set anchor for the popup
        this.viewElements.popup.setOptions({anchor: args.domEvent.currentTarget});
        this.viewElements.popup.open();
    }

    protected setupActionButtons() {
        this.viewElements.deleteButton.addEventListener('click', function () {
            // delete current event on button click
            //
            AppointmentBookView.getInstance().getCalender().removeEvent(AppointmentController.getInstance().getModel().tempEvent);
            Controller.getInstance().getStateManager().removeItemFromState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(AppointmentController.getInstance().getModel().tempEvent),
                false);

            AppointmentDetailModal.getInstance().close();

            // save a local reference to the deleted event
            let deletedEvent = AppointmentController.getInstance().getModel().tempEvent;

            //
            snackbar({
                button: {
                    action: function () {
                        //
                        AppointmentBookView.getInstance().getCalender().addEvent(deletedEvent);
                        Controller.getInstance().getStateManager().addNewItemToState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(deletedEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Event deleted'
            });
        });

        this.viewElements.patientCancelledButton.addEventListener('click', function () {
            // update the event to cancelled and set to non-editable
            // save a local reference to the deleted event
            let originalEvent = AppointmentController.getInstance().getModel().tempEvent;

            let originalType = originalEvent.type;
            let originalNote = originalEvent.note;

            originalEvent.isCancelled = true;
            originalEvent.type = AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED;
            originalEvent.note = AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED;
            originalEvent.editable = false;
            originalEvent.color = AppointmentController.getInstance().getColourForAppointmentType(AppointmentController.APPOINTMENT_TYPE_PATIENT_CANCELLED);

            //
            AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                false);

            AppointmentDetailModal.getInstance().close();


            //
            snackbar({
                button: {
                    action: function () {
                        originalEvent.isCancelled = false;
                        originalEvent.type = originalType;
                        originalEvent.note = originalNote;
                        originalEvent.editable = true;
                        originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);
                        AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Patient Cancelled'
            });
        });

        this.viewElements.patientArrivedButton.addEventListener('click', function () {
            // update the event to arrived
            // save a local reference to the deleted event
            let originalEvent = AppointmentController.getInstance().getModel().tempEvent;

            originalEvent.arrivalTime = moment().format('HHmmss');
            originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);

            AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                false);

            AppointmentDetailModal.getInstance().close();


            //
            snackbar({
                button: {
                    action: function () {
                        originalEvent.arrivalTime = '';
                        originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);
                        AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Patient Arrived'
            });
        });

        this.viewElements.patientDNAButton.addEventListener('click', function () {
            // update the event to cancelled and set to non-editable
            // save a local reference to the deleted event
            let originalEvent = AppointmentController.getInstance().getModel().tempEvent;
            let originalNote = originalEvent.note;
            let originalType = originalEvent.type;

            originalEvent.isDNA = true;
            originalEvent.type = AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA;
            originalEvent.note = AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA;
            originalEvent.editable = false;
            originalEvent.color = AppointmentController.getInstance().getColourForAppointmentType(AppointmentController.APPOINTMENT_TYPE_PATIENT_DNA);

            //
            AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                false);

            AppointmentDetailModal.getInstance().close();

            snackbar({
                button: {
                    action: function () {
                        originalEvent.isDNA = false;
                        originalEvent.type = originalType;
                        originalEvent.note = originalNote;
                        originalEvent.editable = true;
                        originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);
                        AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Patient DNA'
            });
        });
        this.viewElements.readyForBillingButton.addEventListener('click', function () {
            // update the event to cancelled and set to non-editable
            // save a local reference to the deleted event
            let originalEvent = AppointmentController.getInstance().getModel().tempEvent;


            originalEvent.readyForBilling = true;
            originalEvent.color = AppointmentController.getInstance().getColourForAppointmentType(AppointmentController.APPOINTMENT_STATUS_READY_FOR_BILLING);

            //
            AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                false);

            AppointmentDetailModal.getInstance().close();

            snackbar({
                button: {
                    action: function () {
                        originalEvent.readyForBilling = false;
                        originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);
                        AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Ready For Billing'
            });
        });
        this.viewElements.billingCompleteButton.addEventListener('click', function () {
            // update the event to cancelled and set to non-editable
            // save a local reference to the deleted event
            let originalEvent = AppointmentController.getInstance().getModel().tempEvent;


            originalEvent.isBilled = true;
            originalEvent.editable = false;
            originalEvent.color = AppointmentController.getInstance().getColourForAppointmentType(AppointmentController.APPOINTMENT_STATUS_BILLING_COMPLETE);

            //
            AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
            Controller.getInstance().getStateManager().updateItemInState(
                STATE_NAMES.appointments,
                AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                false);

            AppointmentDetailModal.getInstance().close();

            snackbar({
                button: {
                    action: function () {
                        originalEvent.isBilled = false;
                        originalEvent.editable = true;
                        originalEvent.color = AppointmentController.getInstance().getColourForAppointment(originalEvent);
                        AppointmentBookView.getInstance().getCalender().updateEvent(originalEvent);
                        Controller.getInstance().getStateManager().updateItemInState(
                            STATE_NAMES.appointments,
                            AppointmentController.getInstance().getAppointmentFromEvent(originalEvent),
                            false);
                    },
                    text: 'Undo'
                },
                message: 'Billing Complete'
            });
        });
    }

    private getPatientWarnings(patientId:string) {
        let patientBasicDetails: any = Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientSearch, {_id: patientId});
        let warningsText = '';
        if (patientBasicDetails && patientBasicDetails.flags) {
            if (patientBasicDetails.flags.hasWarnings) {
                patientBasicDetails.warnings.warnings.forEach((warning: any) => {
                    warningsText += warning + '\r\n';
                });
                logger('Patient has warnings');
                logger(patientBasicDetails);
                logger(warningsText);
            }

        }
        return warningsText;

    }

    public setupPatientSearchDropDown(patientsCollection: any[]) {
        this.patients = [];

        patientsCollection.forEach((patient: any) => {
            this.patients.push({text: `${patient.name.surname}, ${patient.name.firstname}`, value: patient._id});
        });

        // add the patient search values to the data of the select dropdown
        //
        this.viewElements.patientSearchDropdown = select('#' + SELECT.patientSearch, {
            filter: true,
            data: AppointmentDetailModal.getInstance().patients,
            onChange: (event: any, inst: any) => {
                // @ts-ignore
                getInst(AppointmentDetailModal.getInstance().viewElements.titleInput).value = event.valueText;

                let warningsText = this.getPatientWarnings(event.value);
                // @ts-ignore
                getInst(AppointmentDetailModal.getInstance().viewElements.warningsEl).value = warningsText;

                AppointmentController.getInstance().getModel().tempEvent.patientId = event.value;
                AppointmentController.getInstance().getModel().tempEvent.warnings = warningsText;
            }
        });

    }


}
