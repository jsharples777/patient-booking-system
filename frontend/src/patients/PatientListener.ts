export interface PatientListener {
    patientSelected(patient:any):void;
    patientClosed(patient:any):void;
    patientSaved(patient:any):void;
    patientLoaded(patient:any):void;
}