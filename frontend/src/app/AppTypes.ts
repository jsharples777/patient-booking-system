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
    recentUserSearches: 'recentUserSearch'
}

export const API_Config = {
    login: '/login',
    users: '/api/users',
    exerciseTypes: '/api/exercise-types',
    workouts: '/api/workouts'
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
    exerciseDropZone: 'exerciseDropZone'
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


