import {
    AlertEvent,
    AlertListener,
    AlertManager,
    AlertType,
    CollectionView,
    CollectionViewListener,
    copyObject,
    isSameMongo,
    MemoryBufferStateManager, RESTApiStateManager, SecurityManager,
    StateChangeListener,
    StateManager,
    View
} from "ui-framework-jps";
import {Decorator, DRAGGABLE, STATE_NAMES} from "../AppTypes";
import debug from 'debug';
import Controller from "../Controller";
import {OpenPatientsView} from "./OpenPatientsView";
import {PatientRecordTabularView} from "./PatientRecordTabularView";
import {PatientListener} from "./PatientListener";
import App from "../App";
import {AttachmentListener} from "../clinic-chat/AttachmentListener";
import {ClinicChatDetailView} from "../clinic-chat/ClinicChatDetailView";
import moment from "moment";

const logger = debug('patient-controller');

export class PatientController implements StateChangeListener, CollectionViewListener, AttachmentListener,AlertListener{
    private static _instance: PatientController;
    private stateManager: StateManager;
    private listeners: PatientListener[] = [];

    private constructor() {
        this.stateManager = new MemoryBufferStateManager(isSameMongo);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patients, this);
        this.stateManager.addChangeListenerForName(STATE_NAMES.openPatients, this);
    }

    public static getInstance(): PatientController {
        if (!(PatientController._instance)) {
            PatientController._instance = new PatientController();
        }
        return PatientController._instance;
    }

    public addListener(listener: PatientListener) {
        this.listeners.push(listener);
    }

    public getStateManager() {
        return this.stateManager;
    }

    public openPatientRecordWithPatientId(patientId: string): void {
        logger(`Handling opening patient record ${patientId}`);

        let patient = this.stateManager.findItemInState(STATE_NAMES.openPatients, {_id: patientId});
        if (!(patient._id)) { // not found
            patient = copyObject(Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientSearch, {_id: patientId}));
            patient.decorator = Decorator.Incomplete;
        }
        this.openPatientRecord(patient);

    }

    public openPatientRecord(patient: any): void {
        logger(`Handling opening patient record`);
        logger(patient);
        // previously opened
        if (patient.decorator === Decorator.Incomplete) {
            Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patients, patient);
        } else {
            // make a copy
            patient = copyObject(patient);
            patient.decorator = Decorator.Complete;
        }
        App.getInstance().handleShowPatientRecord(null);
        this.listeners.forEach((listener) => listener.patientSelected(patient));
    }

    private _closeRecord(patient:any):void {
        logger(`patient ${patient.name.firstname} with id ${patient._id} closing - closing`);
        PatientController.getInstance().getStateManager().removeItemFromState(STATE_NAMES.openPatients, patient, true);
        this.listeners.forEach((listener) => listener.patientClosed(patient));
    }

    public closePatientRecord(patient: any): void {
        // has the patient changed?
        if (patient.decorator) {
            if (patient.decorator === Decorator.Modified) {
                logger(`Patient marked as modified`);
                AlertManager.getInstance().startAlert(this,'Patient Records', `Patient ${patient.name.firstname} ${patient.name.surname} has changes.  Do you want to discard those changes?`,{patient:patient});
            }
            else {
                this._closeRecord(patient);
            }
        }
        else {
            this._closeRecord(patient);
        }

    }

    public savePatientRecord(patient: any): void {
        logger(`saving patient ${patient.name.firstname} ${patient.name.surname} with id ${patient._id}`);
        logger(copyObject(patient));


        delete patient.decorator;
        delete patient.oldContact;
        patient.modified = parseInt(moment().format('YYYYMMDDHHmmss'));
        patient.modifiedBy = SecurityManager.getInstance().getLoggedInUsername();

        const copyOfPatient = copyObject(patient);

        RESTApiStateManager.getInstance().updateItemInState(STATE_NAMES.patients, copyOfPatient, false);


        patient.decorator = Decorator.Complete;
        PatientController.getInstance().getStateManager().updateItemInState(STATE_NAMES.openPatients, patient, true);
        logger(patient);

    }

    public onDocumentLoaded(): void {

        OpenPatientsView.getInstance().addEventCollectionListener(this);
        ClinicChatDetailView.getInstance().addAttachmentListener(this);

    }

    stateChanged(managerName: string, name: string, newValue: any) {
    }


    foundResult(managerName: string, name: string, foundItem: any): void {
        switch (name) {
            case STATE_NAMES.patients: {
                foundItem.decorator = Decorator.Complete;
                logger(`Found Result - patient loaded - adding to open patients`);
                logger(foundItem);
                // found new patient to add to buffer
                if (this.isPatientInOpenList(foundItem._id)) {
                    this.stateManager.updateItemInState(STATE_NAMES.openPatients, foundItem, true);
                } else {
                    this.stateManager.addNewItemToState(STATE_NAMES.openPatients, foundItem, true);
                }
                break;
            }
        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any) {
        switch (name) {
            case STATE_NAMES.openPatients: {
                // found new patient in buffer, let listeners know
                logger(`Item Added - patient loaded - added to open patients - informing listeners`);
                logger(itemAdded);
                this.listeners.forEach((listener) => listener.patientLoaded(itemAdded));
                break;
            }
        }
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any) {
        switch (name) {
            case STATE_NAMES.openPatients: {
                switch(itemNewValue.decorator) {
                    case Decorator.Complete: {
                        logger('Item Updated - Patient is complete, sending patient loaded');
                        this.listeners.forEach((listener) => listener.patientLoaded(itemNewValue));
                        break;
                    }
                    case (Decorator.Modified): {
                        logger('Item Updated - Patient is modified, sending patient changed');
                        this.listeners.forEach((listener) => listener.patientChanged(itemNewValue));
                        break;
                    }
                }
            }
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any) {
    }



    getListenerName(): string {
        return 'Patient Controller';
    }

    filterResults(managerName: string, name: string, filterResults: any) {
    }

    canDeleteItem(view: View, selectedItem: any): boolean {
        return false;
    }

    canSelectItem(view: CollectionView, selectedItem: any): boolean {
        return true;
    }

    documentLoaded(view: View): void {}
    hideRequested(view: View): void {}
    showRequested(view: View): void {}
    itemDeleted(view: View, selectedItem: any): void {}
    itemDeselected(view: CollectionView, selectedItem: any): void {}
    itemDragStarted(view: CollectionView, selectedItem: any): void {}

    itemAction(view: View, actionName: string, selectedItem: any): void {
        logger(`Handling action ${actionName} selected item`);
        logger(selectedItem);
        if (actionName === OpenPatientsView.ACTION_CLOSE) {
            this.closePatientRecord(selectedItem);
        }
        if (actionName === OpenPatientsView.ACTION_SAVE) {
            this.savePatientRecord(selectedItem);
        }
    }

    itemDropped(view: View, droppedItem: any): void {
        logger(`Handling drop of item`);
        logger(droppedItem);
        this.openPatientRecordWithPatientId(droppedItem._id);
    }

    itemSelected(view: CollectionView, selectedItem: any): void {
        logger(`Handling selected item`);
        logger(selectedItem);
        PatientRecordTabularView.getInstance().selectTab(PatientRecordTabularView.TAB_DEMOGRAPHICS);
        this.openPatientRecord(selectedItem);
    }

    protected isPatientInOpenList(patientId: string): boolean {
        let patient = this.stateManager.findItemInState(STATE_NAMES.openPatients, {_id: patientId});
        return (patient._id);
    }

    attachmentClicked(dataType: string, dataIdentifier: string): void {
        if (dataType === DRAGGABLE.typePatientSummary) {
            this.openPatientRecordWithPatientId(dataIdentifier);
        }
    }

    completed(event: AlertEvent): void {
        if (event.outcome === AlertType.confirmed) {
            this._closeRecord(event.context.patient);
        }
    }



}
