/** @jsx jsxCreateElement */
/*** @jsxFrag jsxCreateFragment */
import debug from "debug";
import Controller from "../Controller";
import {Decorator} from "../AppTypes";
import {isSameMongo,jsxCreateFragment,jsxCreateElement} from "ui-framework-jps";
import moment from "moment";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {PatientController} from "../patients/PatientController";
import React from "react";

const logger = debug('todays-patients-view');

export class TodaysPatientsView {
    private static _instance: TodaysPatientsView;
    private currentProviderNo: string = '';
    private containerEl: HTMLElement;
    private patients:any[] = [];

    private constructor() {
        this.handleOpenPatient = this.handleOpenPatient.bind(this);
    }

    public static getInstance(): TodaysPatientsView {
        if (!(TodaysPatientsView._instance)) {
            TodaysPatientsView._instance = new TodaysPatientsView();
        }
        return TodaysPatientsView._instance;
    }

    public addPatientSummary(patientSummary:any):void {
        // make sure we don't add duplicates
        const foundIndex = this.patients.findIndex((patient) => isSameMongo(patient,patientSummary));
        if (foundIndex === 0) {
            patientSummary.decorator = Decorator.Incomplete;
            this.patients.push(patientSummary);
            this.render();
        }

    }

    public replacePatientSummaryWithPatient(patient:any):void {
        // replace the current patient
        const foundIndex = this.patients.findIndex((patientObj) => isSameMongo(patientObj,patient));
        if (foundIndex >= 0) {
            patient.decorator = Decorator.Complete;
            this.patients.splice(foundIndex,1, patient);
        }
        else {
            this.patients.push(patient);
        }
        this.render();
    }

    public removePatient(patient:any):void {
        const foundIndex = this.patients.findIndex((patientObj) => isSameMongo(patientObj,patient));
        if (foundIndex >= 0) {
            this.patients.splice(foundIndex,1);
            this.render();
        }
    }

    public onDocumentLoaded():void {
        this.currentProviderNo = Controller.getInstance().getLoggedInUsername();
        this.containerEl = document.getElementById('todays-patients');
    }

    protected handleOpenPatient(event:MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        // @ts-ignore
        const patientId = event.target.getAttribute('data-id');
        if (patientId) {
            PatientController.getInstance().openPatientRecord(patientId);
        }
    }

    protected render():void {
        browserUtil.removeAllChildren(this.containerEl);

        const address = (patient:any) => {
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

        const incompletePatientCard = (patient:any) => {
           // @ts-ignore
            return (<div className="card" ><img className="card-img-top" src="/img/spinner.gif" alt="Card image cap"></img><div className="card-body"><h5 className="card-title"><a href={"#"} onClick={this.handleOpenPatient}>{patient.name.firstname} {patient.name.surname}</a></h5><h6 className="card-subtitle mb-2 text-muted">DOB: {moment(patient.dob).format('DD/MM/YYYY')}</h6><p className="card-text">{address(patient)}</p></div></div>);
        };


        const patientCard = (patient:any) => {
            // @ts-ignore
            return (<div className="card col-sm-12" ><div className="card-body"><h5 className="card-title"><a href={"#"} data-id={patient._id} onClick={this.handleOpenPatient}>{patient.name.firstname} {patient.name.surname}</a></h5><h6 className="card-subtitle mb-2 text-muted">DOB: {moment(patient.dob).format('DD/MM/YYYY')}</h6><p className="card-text">{address(patient)}</p></div></div>);
        };

        this.patients.forEach((patient) => {
            if (patient.decorator === Decorator.Incomplete) {
                // @ts-ignore
                this.containerEl.appendChild(incompletePatientCard(patient));
            }
            else {
                // @ts-ignore
                this.containerEl.appendChild(patientCard(patient));
            }

        });

    }


}
