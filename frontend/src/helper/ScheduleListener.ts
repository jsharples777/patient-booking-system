export interface ScheduleListener {
    loadedPatientSearch(patientSearch: any[]): void;

    loadedProviders(providers: any[]): void;

    loadedClinicAppointmentBookConfig(clinicConfig: any): void;

    loadedAppointmentTypes(appointmentTypes: any[]): void;

    refreshDisplay():void;
}
