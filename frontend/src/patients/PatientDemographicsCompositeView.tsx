/** @jsx jsxCreateElement */
/*** @jsxFrag jsxCreateFragment */
import {AbstractView, DataObjectController, DataObjectListener, isSameMongo,jsxCreateElement,jsxCreateFragment} from "ui-framework-jps";
import {PatientListener} from "./PatientListener";
import {Decorator} from "../AppTypes";

import debug from 'debug';
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {PatientController} from "./PatientController";

const logger = debug('patient-demographic-view');

export class PatientDemographicsCompositeView extends AbstractView implements DataObjectListener, PatientListener {

    private currentPatient: any | null = null;

    constructor() {
        super({resultsContainerId: '', dataSourceId: 'patientDemographics'});
    }

    hidden(): void {
    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
        this.render();
        PatientController.getInstance().addListener(this);
    }

    render(): void {
        logger('render');

        browserUtil.removeAllChildren(this.containerEl);

        const demographicsView =
            <div id={"demographics-view"} className={"container-fluid"}>
                <div className={"row"}>
                    <div id={"patient-name"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Name Details</h5>
                                <div className="card-text" id={"patient-name-details"}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-basics"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Basics</h5>
                                <div className="card-text" id={"patient-basics-details"}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div id={"patient-contact"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Details</h5>
                                <div className="card-text" id={"patient-contact-details"}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-identifiers"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Identifiers</h5>
                                <div className="card-text" id={"patient-contact-details"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;

        // @ts-ignore
        this.containerEl.append(demographicsView)
    }

    show(): void {
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    patientClosed(patient: any): void {
        logger(`handling patient closed`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient closed - is the current patient`);
                this.currentPatient = null;
                //this.render();
            }
        }
    }

    patientLoaded(patient: any): void {
        logger(`handling patient loaded`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient loaded - is the current patient`);
                if ((this.currentPatient.decorator) && (this.currentPatient.decorator === Decorator.Incomplete)) {
                    this.currentPatient = patient;
                    //this.render();
                }
            }
        }
    }

    patientSaved(patient: any): void {
        logger(`handling patient saved`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient saved - is the current patient`);
                this.currentPatient = patient;
                //this.render();
            }
        }

    }

    patientSelected(patient: any): void {
        logger(`handling patient selected`);
        this.currentPatient = patient;
        this.render();

    }
}
