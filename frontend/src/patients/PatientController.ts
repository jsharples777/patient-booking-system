import {
    AlertEvent,
    AlertListener,
    AlertManager,
    AlertType,
    CollectionView,
    CollectionViewListener,
    copyObject,
    isSameMongo,
    MemoryBufferStateManager,
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
        logger(`patient ${patient.firstname} with id ${patient.id} closing - closing`);
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
        logger(`saving patient ${patient.name.firstname} with id ${patient._id}`);


        let patientRecord = copyObject(patient);
        delete patientRecord.decorator;
        delete patient.oldContact;
        patientRecord.modified = parseInt(moment().format('YYYYMMDDHHmmss'));
        patientRecord.modifiedBy = Controller.getInstance().getLoggedInUsername();

        Controller.getInstance().getStateManager().updateItemInState(STATE_NAMES.patients, patientRecord, false);


        patientRecord.decorator = Decorator.Complete;
        PatientController.getInstance().getStateManager().updateItemInState(STATE_NAMES.openPatients, patientRecord, true);
        logger(patientRecord);

    }

    public onDocumentLoaded(): void {

        OpenPatientsView.getInstance().addEventCollectionListener(this);
        ClinicChatDetailView.getInstance().addAttachmentListener(this);

    }

    stateChanged(managerName: string, name: string, newValue: any) {
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any) {
        switch (name) {
            case STATE_NAMES.patients: {
                logger(`patient loaded - adding to open patients`);
                logger(itemAdded);
                // found new patient to add to buffer
                if (this.isPatientInOpenList(itemAdded._id)) {
                    this.stateManager.updateItemInState(STATE_NAMES.openPatients, itemAdded, true);
                } else {
                    this.stateManager.addNewItemToState(STATE_NAMES.openPatients, itemAdded, true);
                }
                break;
            }
            case STATE_NAMES.openPatients: {
                // found new patient in buffer, let listeners know
                logger(`patient loaded - added to open patients - informing listeners`);
                logger(itemAdded);
                this.listeners.forEach((listener) => listener.patientLoaded(itemAdded));
                break;
            }
        }
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any) {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any) {
        switch (name) {
            case STATE_NAMES.openPatients: {
                // found new patient in buffer, let listeners know
                if (itemNewValue.decorator !== Decorator.Modified) {
                    logger(`patient loaded`);
                    logger(itemNewValue);
                    this.listeners.forEach((listener) => listener.patientLoaded(itemNewValue));
                }
                else {
                    this.listeners.forEach((listener) => listener.patientChanged(itemNewValue));
                }
                break;
            }
        }
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

    documentLoaded(view: View): void {
    }

    hideRequested(view: View): void {
    }

    showRequested(view: View): void {
    }

    itemDeleted(view: View, selectedItem: any): void {
    }

    itemDeselected(view: CollectionView, selectedItem: any): void {
    }

    itemDragStarted(view: CollectionView, selectedItem: any): void {
    }

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
