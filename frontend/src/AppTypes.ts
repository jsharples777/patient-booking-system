import {SidebarLocation, SidebarPrefs} from "ui-framework-jps";


export enum Decorator {
    Incomplete,
    Complete,
    Persisted,
    PersistedLocally = 3,
    Modified
}

export const STATE_NAMES = {
    users: 'user',
    chatLogs: 'chatLog',
    exerciseTypes: 'exerciseType',
    workouts: 'workout',
    recentUserSearches: 'recentUserSearch',
    patientSearch: 'fastSearchNames',
    recentPatientSearches: 'recentPatientSearches',
    openPatients:'openPatients',
    appointments: 'appointment',
    appointmentTypes: 'appointmentType',
    clinicConfig: 'clinicConfig',
    providers: 'provider',
    appointmentTemplates: 'appointmentTemplate',
    patients: 'patient',
    name: 'name',
    contact: 'contact',
    identifiers:'identifiers',
    flags:'flags',
    warnings:'warnings',
    allergies:'allergy',
    consults:'consult',
    history:'history',
    results:'result',
    scripts:'script',
    scriptHistory:'scriptHistory',
    scriptArchive:'scriptArchive',
    recalls:'recall',
    tasks:'task',
    documents:'documents',
    letters:'letter',
    vaccinations:'vaccination',
    wcc:'wcc',
    modifiedDates:'modifiedDate',
    loadedPatients:'loadedPatients'

}

export const API_Config = {
    login: '/login',
    graphQL: '/graphQL',
    users: '/api/users',
    clinicConfig: '/api/clinic-config',
    patients: '/api/patients',
    patientDemographics: '/api/demographics'
};

export const NAVIGATION = {
    appointmentBook: 'navigationItemAppointmentBook',
    patientSearch: 'navigationItemPatientSearch',
    appointmentTemplates: 'navigationItemAppointmentTemplating',
    clinicChat: 'navigationItemChat',
    patientRecord: 'navigationItemPatientRecord',
    logout: 'navigationItemLogout',
    appointmentTypes: 'navigationItemAppointmentTypes',
    users: 'navigationItemUsers',
    today: 'navigationItemToday'
}

export const DRAGGABLE = {
    typeUser: 'user',
    fromUserSearch: 'userSearch',
    typePatientSummary: 'patientSummary',
    fromPatientSearch: 'patientSearch'
}

export const VIEW_NAME = {
    blockedUsers: 'blockedUsers',
    chatLog: 'chatLog',
    chatLogs: 'chatLogs',
    favouriteUsers: 'favouriteUsers',
    userSearch: 'userSearch',
    patientSearch: 'patientSearch',
    appointmentTypes: 'appointmentTypes',
    appointmentTypeDetail: 'appointmentTypeDetail',
    users: 'usersList',
    userDetail: 'userDetail',
    openPatients: 'Open Patients'
}

export const VIEW_CONTAINER = {
    calendarControl: 'calendarControl',
    calendarDetail: 'calendarDetail'
}


export const PatientSearchSidebarPrefs: SidebarPrefs = {
    id: 'patientSearchSideBar',
    expandedSize: '40%',
    location: SidebarLocation.left
}

export const PatientSearchSidebarContainers = {
    container: 'patientSearchZone',
    openRecords: 'openPatientZone'
}

export const AppointmentTypesSidebarPrefs: SidebarPrefs = {
    id: 'appointmentTypesSideBar',
    expandedSize: '50%',
    location: SidebarLocation.left
}

export const AppointmentTypesSidebarContainers = {
    list: 'appointmentTypes',
    detail: 'appointmentTypeDetail',
    colourPicker: 'appointmentTypeColour'
}

export const UsersSidebarPrefs: SidebarPrefs = {
    id: 'usersSideBar',
    expandedSize: '40%',
    location: SidebarLocation.right
}

export const UsersSidebarContainers = {
    list: 'usersList',
    detail: 'userDetail'
}

export const SELECT = {
    appointmentType: 'event-appt-type',
    patientSearch: 'event-patient'
}

