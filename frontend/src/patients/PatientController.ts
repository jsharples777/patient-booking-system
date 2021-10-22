import {
    CollectionView,
    CollectionViewListener,
    copyObject,
    isSameMongo,
    MemoryBufferStateManager,
    StateChangeListener,
    StateManager,
    View
} from "ui-framework-jps";
import {Decorator, STATE_NAMES} from "../AppTypes";
import debug from 'debug';
import Controller from "../Controller";
import {OpenPatientsView} from "./OpenPatientsView";
import {PatientRecordTabularView} from "./PatientRecordTabularView";
import {PatientListener} from "./PatientListener";
import {PatientObjectDefinitions} from "../model/PatientObjectDefinitions";
import App from "../App";

const logger = debug('patient-controller');

export class PatientController implements StateChangeListener, CollectionViewListener {
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
        }
        App.getInstance().handleShowPatientRecord(null);
        this.listeners.forEach((listener) => listener.patientSelected(patient));
    }

    public closePatientRecord(patient: any): void {
        logger(`patient ${patient.firstname} with id ${patient.id} closing - closing`);
        PatientController.getInstance().getStateManager().removeItemFromState(STATE_NAMES.openPatients, patient, true);
        this.listeners.forEach((listener) => listener.patientClosed(patient));
    }

    public savePatientRecord(patient: any): void {
        logger(`saving patient ${patient.firstname} with id ${patient.id}`);
        patient.decorator = Decorator.Complete;
        PatientController.getInstance().getStateManager().updateItemInState(STATE_NAMES.openPatients, patient, true);
        this.listeners.forEach((listener) => listener.patientSaved(patient));

        let patientRecord = JSON.parse(JSON.stringify(patient));
        delete patientRecord.decorator;
        Controller.getInstance().getStateManager().updateItemInState(STATE_NAMES.patients, patientRecord, false);
    }

    public onDocumentLoaded(): void {
        PatientObjectDefinitions.loadPatientDefinitions();
        OpenPatientsView.getInstance().addEventCollectionListener(this);

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
                logger(`patient loaded - added to open patients`);
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
                logger(`patient loaded`);
                logger(itemNewValue);
                this.listeners.forEach((listener) => listener.patientLoaded(itemNewValue));
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

    }

    protected isPatientInOpenList(patientId: string): boolean {
        let patient = this.stateManager.findItemInState(STATE_NAMES.openPatients, {_id: patientId});
        return (patient._id);
    }

}
