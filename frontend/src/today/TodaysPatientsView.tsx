import debug from "debug";
import Controller from "../Controller";
import {Decorator, STATE_NAMES} from "../AppTypes";
import {isSameMongo, StateChangeListener} from "ui-framework-jps";
import moment from "moment";
import {PatientController} from "../patients/PatientController";
import React, {ReactNode} from "react";

const logger = debug('todays-patients-view');

export class TodaysPatientsView extends React.Component implements StateChangeListener {
    private static _instance: TodaysPatientsView;
    private currentProviderNo = '';
    private containerEl: HTMLElement;
    private patients: any[] = [];
    private patientIdsNotYetLoaded: string[] = [];
    private patientsNotYetLoaded: string[] = [];
    private applicationView: any | null = null;

    constructor(props: any) {
        super(props);
        TodaysPatientsView._instance = this;
        this.handleOpenPatient = this.handleOpenPatient.bind(this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch, this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patients, this);
    }

    public static getInstance(): TodaysPatientsView {
        if (!(TodaysPatientsView._instance)) {
            TodaysPatientsView._instance = new TodaysPatientsView({});
        }
        return TodaysPatientsView._instance;
    }

    public addPatientSummary(patientSummary: any): void {
        logger(`Adding patient summary`);
        logger(patientSummary);
        // make sure we don't add duplicates
        const foundIndex = this.patients.findIndex((patient) => patient._id === patientSummary._id);
        logger(`Adding patient summary ${foundIndex}`);
        if (foundIndex < 0) {
            logger(`Adding NON-DUPLICATE patient summary`);
            patientSummary.decorator = Decorator.Incomplete;
            this.patients.push(patientSummary);
            // this.render();
            this._render();

            // ask the controller to find the full patient record
            this.patientsNotYetLoaded.push(patientSummary._id);
            Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patients, patientSummary);
        }
    }

    public addPatientSummaryById(patientId: string): void {
        logger(`Adding patient summary by Id ${patientId}`);

        const patientSummary: any = Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientSearch, {_id: patientId});
        logger(patientSummary);
        if (patientSummary && patientSummary._id) {
            this.addPatientSummary(patientSummary)
        } else {
            this.patientIdsNotYetLoaded.push(patientId);
        }

    }

    public replacePatientSummaryWithPatient(patient: any): void {
        logger(`Replacing patient summary with patient ${patient._id}`);
        // replace the current patient
        const foundIndex = this.patients.findIndex((patientObj) => isSameMongo(patientObj, patient));
        if (foundIndex >= 0) {
            patient.decorator = Decorator.Complete;
            this.patients.splice(foundIndex, 1, patient);
        } else {
            this.patients.push(patient);
        }
        // this.render();
        this._render();
    }

    public removePatient(patient: any): void {
        logger(`Removing patient with id ${patient._id}`);
        const foundIndex = this.patients.findIndex((patientObj) => isSameMongo(patientObj, patient));
        if (foundIndex >= 0) {
            this.patients.splice(foundIndex, 1);
            // this.render();
            this._render();
        }
    }

    public onDocumentLoaded(applicationView: any): void {
        logger(`on document loaded`);
        this.applicationView = applicationView;
        this.currentProviderNo = Controller.getInstance().getLoggedInUsername();
        this.containerEl = document.getElementById('todays-patients');
    }

    public render(): ReactNode {
        logger(`render`);

        //browserUtil.removeAllChildren(this.containerEl);

        const address = (patient: any) => {
            let buffer = '';
            if (patient.contact) {
                buffer = patient.contact.line1;
                if (patient.contact.line2.trim().length > 0) {
                    buffer += ', ' + patient.contact.line2;
                }
                buffer += ', ' + patient.contact.suburb;
                buffer += ', ' + patient.contact.state;
                buffer += ' ' + patient.contact.postcode;

            }
            return buffer;
        }

        const incompletePatientCard = (patient: any) => {
            return (
                <div className="shadow card col-sm-12 col-md-4 mr-1 mt-2">
                    <img className="card-img-top" src="/img/spinner.gif" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title"><a href={"#"} data-id={patient._id}
                                                      onClick={this.handleOpenPatient}>{patient.name.firstname} {patient.name.surname}</a>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">DOB: {moment(patient.dob).format('DD/MM/YYYY')}</h6>
                        <p className="card-text">{address(patient)}</p>
                    </div>
                </div>
            );
        };


        const patientCard = (patient: any) => {
            return (
                <div className="shadow card col-sm-12 col-md-4 mr-1 mt-2 w-100">
                    <div className="card-body">
                        <h5 className="card-title"><a href={"#"} data-id={patient._id}
                                                      onClick={this.handleOpenPatient}>{patient.name.firstname} {patient.name.surname}</a>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">DOB: {moment(patient.dob).format('DD/MM/YYYY')}</h6>
                        <p className="card-text">{address(patient)}</p>
                    </div>
                </div>);
        };

        // this.patients.forEach((patient) => {
        //     if (patient.decorator === Decorator.Incomplete) {
        //         // @ts-ignore
        //         this.containerEl.appendChild(incompletePatientCard(patient));
        //     }
        //     else {
        //         // @ts-ignore
        //         this.containerEl.appendChild(patientCard(patient));
        //     }
        //
        // });
        const patientMap = this.patients.map((patient) => {
            return (
                <React.Fragment>
                    {(patient.decorator === Decorator.Incomplete) ? incompletePatientCard(patient) : patientCard(patient)}
                </React.Fragment>
            );
        });

        return (
            <React.Fragment>
                {patientMap}
            </React.Fragment>
        );

    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    getListenerName(): string {
        return "Todays Patients View";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        if (name === STATE_NAMES.patientSearch) {
            logger(`loading patient ids from fast patient search that we couldn't find yet`);
            // load the patients we couldn't find yet
            this.patientIdsNotYetLoaded.forEach((patientId) => {
                this.addPatientSummaryById(patientId);
            });
            this.patientIdsNotYetLoaded = [];
        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {

    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
    }

    // @ts-ignore
    protected handleOpenPatient(event: MouseEvent<HTMLAnchorElement>) {
        console.log('blah');
        event.preventDefault();
        event.stopPropagation();
        // @ts-ignore
        const patientId = event.target.getAttribute('data-id');
        logger(`Handling open patient with patient id ${patientId}`)
        if (patientId) {
            const foundIndex = this.patients.findIndex((patient) => isSameMongo(patient, {_id: patientId}));
            if (foundIndex >= 0) {
                PatientController.getInstance().openPatientRecord(this.patients[foundIndex]);
            }
        }
    }

    private _render() {
        if (this.applicationView) this.applicationView.setState({todaysPatients: this.patients});
    }

    foundResult(managerName: string, name: string, foundItem: any): void {
        if (name === STATE_NAMES.patients) {
            // was this a patient we asked for?
            const foundIndex = this.patientsNotYetLoaded.findIndex((patientId) => patientId === foundItem._id);
            if (foundIndex >= 0) {
                logger(`Patient loaded from state with id ${foundItem._id} - updating current patient summary`);
                // remove from our internal queue
                this.patientsNotYetLoaded.splice(foundIndex, 1);
                this.replacePatientSummaryWithPatient(foundItem);
            }
        }
    }


}
