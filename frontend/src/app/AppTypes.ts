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
    clinicConfig:'clinicConfig'
}

export const API_Config = {
    login: '/login',
    graphQL: '/graphQL',
    users: '/api/users',
    clinicConfig: '/api/clinic-config'
};

export const NAVIGATION = {
    showMyWorkouts: 'navigationItemMyWorkouts',
    userSearchId: 'navigationItemUserSearch',
    exerciseTypesId: 'navigationItemExerciseTypes',
    chatId: 'navigationItemChat',
    workoutSummary: 'navigationItemWorkoutSummary',
    currentWorkout: 'navigationItemCurrentWorkout',
    logout: 'navigationItemLogout'
}

export const DRAGGABLE = {
    typeUser: 'user',
    typeExerciseType: 'exerciseType',
    fromUserSearch: 'userSearch',
    fromFavourites: 'favourites',
    fromExerciseTypes: 'exerciseTypes',
}

export const VIEW_NAME = {
    blockedUsers: 'blockedUsers',
    chatLog: 'chatLog',
    chatLogs: 'chatLogs',
    favouriteUsers: 'favouriteUsers',
    exerciseTypes: 'exerciseTypes',
    userSearch: 'userSearch',
    workouts: 'workouts',
    workoutSummary: 'workoutSummary',
    exercises: 'exercises'
}

export const VIEW_CONTAINER = {
    exerciseTypeDetail: "exerciseTypeDetail",
    currentWorkoutDetail: 'workoutDetail',
    exerciseDropZone: 'exerciseDropZone',
    calendarControl: 'calendarControl',
    calendarDetail:'calendarDetail'
}

export const BUTTON = {
    createNewExerciseType: 'addNewExerciseType',
    completeWorkout: 'completeWorkout'
}

export const INPUT = {
    workoutName: 'workoutName'
}

export const CurrentWorkoutSidebarPrefs: SidebarPrefs = {
    id: 'currentWorkoutSidebar',
    expandedSize: '50%',
    location: SidebarLocation.right
}

export const CurrentWorkoutContainers = {
    list: 'exercises',
    detail: 'workoutDetail'
}

export const ExerciseTypesSidebarPrefs: SidebarPrefs = {
    id: 'exerciseTypesSidebar',
    expandedSize: '50%',
    location: SidebarLocation.left
}

export const ExerciseTypesSidebarContainers = {
    container: 'exerciseTypesContainer',
}

export const  WorkoutSummarySidebarPrefs: SidebarPrefs = {
    id: 'workoutSummarySidebar',
    expandedSize: '100%',
    location: SidebarLocation.bottom
}

export const  WorkoutSummarySidebarContainers = {
    container: 'workoutSummary',
}

export enum Day {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

export type ClinicDailyPref = {
    day:Day,
    startTime:string,
    endTime:string,
    lunchStart:string,
    lunchEnd:string
}

export type ClinicPrefs = {
    dailypref:ClinicDailyPref[],
    timestep:number,
}



