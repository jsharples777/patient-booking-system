import {SidebarLocation, SidebarPrefs} from "ui-framework-jps";


export enum Decorator {
    Incomplete,
    Complete,
    Persisted,
    PersistedLocally = 3
}

export const STATE_NAMES = {
    users: 'user',
    chatLogs: 'chatLog',
    exerciseTypes: 'exerciseType',
    workouts: 'workout',
    recentUserSearches: 'recentUserSearch',
    patientSearch: 'fastSearchNames',
    recentPatientSearches: 'recentPatientSearches',
    appointments: 'appointment',
    appointmentTypes: 'appointmentType',
    clinicConfig:'clinicConfig',
    providers:'provider',
    appointmentTemplates:'appointmentTemplate',
    patientDemographics:'patientDemographics'
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
    patientRecords: 'navigationItemPatientRecords',
    logout: 'navigationItemLogout'
}

export const DRAGGABLE = {
    typeUser: 'user',
    fromUserSearch: 'userSearch',
    typePatientSummary:'patientSummary',
    fromPatientSearch: 'patientSearch'
}

export const VIEW_NAME = {
    blockedUsers: 'blockedUsers',
    chatLog: 'chatLog',
    chatLogs: 'chatLogs',
    favouriteUsers: 'favouriteUsers',
    userSearch: 'userSearch',
    patientSearch: 'patientSearch'
}

export const VIEW_CONTAINER = {
    calendarControl: 'calendarControl',
    calendarDetail:'calendarDetail'
}



export const  PatientSearchSidebarPrefs: SidebarPrefs = {
    id: 'patientSearchSideBar',
    expandedSize: '40%',
    location: SidebarLocation.left
}

export const  PatientSearchSidebarContainers = {
    container: 'recentPatientSearches',
}

export const SELECT = {
    appointmentType : 'event-appt-type',
    patientSearch : 'event-patient'
}

