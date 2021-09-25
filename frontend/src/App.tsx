//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';

import {
    ChatLogsView,
    ChatRoomsSidebar,
    ContextualInformationHelper,
    SecurityManager,
    SidebarViewContainer,
    UnreadMessageCountListener,
    UserSearchSidebar
} from 'ui-framework-jps';


import debug from 'debug';
import Controller from './app/Controller';

import {
    API_Config, CurrentWorkoutSidebarPrefs, ExerciseTypesSidebarPrefs,
    NAVIGATION,
    STATE_NAMES,
    WorkoutSummarySidebarContainers,
    WorkoutSummarySidebarPrefs
} from "./app/AppTypes";
import {ExerciseTypesCompositeView} from "./app/view/ExerciseTypesCompositeView";
import {WorkoutSummaryView} from "./app/view/WorkoutSummaryView";
import {CurrentWorkoutCompositeView} from "./app/view/CurrentWorkoutCompositeView";
import {WorkoutsViewUsingContext} from "./app/view/WorkoutsViewUsingContext";
import React, {ReactNode} from "react";
import ReactDOM from "react-dom";



localStorage.debug = 'state-manager-graphql api-ts';
localStorage.plugin = 'chat';

debug.log = console.info.bind(console);


const logger = debug('app');

export default class App extends React.Component implements UnreadMessageCountListener {

    // @ts-ignore
    private exerciseTypesSidebar: ExerciseTypesSidebar;
    // @ts-ignore
    private userSearchSidebar: UserSearchSidebar;
    // @ts-ignore
    private chatSidebar: ChatRoomsSidebar;
    // @ts-ignore
    private workoutSummarySidebar: WorkoutSummarySidebar;
    // @ts-ignore
    private currentWorkoutSidebar: CurrentWorkoutSidebar;
    // @ts-ignore
    private currentWorkoutView: CurrentWorkoutCompositeView;
    // @ts-ignore
    private chatView: ChatLogsView;
    // @ts-ignore
    private thisEl: HTMLDivElement | null;
    // @ts-ignore
    private chatNavigationItem: HTMLAnchorElement | null;

    public constructor() {
        // @ts-ignore
        super();
        // event handlers
        this.handleShowUserSearch = this.handleShowUserSearch.bind(this);
        this.handleShowExerciseTypes = this.handleShowExerciseTypes.bind(this);
        this.handleShowChat = this.handleShowChat.bind(this);
        this.handleShowWorkoutSummary = this.handleShowWorkoutSummary.bind(this);
        this.handleShowCurrentWorkout = this.handleShowCurrentWorkout.bind(this);

        Controller.getInstance().connectToApplication(this, window.localStorage);
    }

    render(): ReactNode {
        logger("Rendering App");
        return (
            <div></div>
        )
    }


    componentDidMount(): void {
        logger('component Did Mount');
        logger('document loaded');
        // @ts-ignore
        this.thisEl = document.getElementById('root');

        this.setupUserSearchViews();
        this.setupChatViews();
        this.setupNavigationItemHandling();

        this.exerciseTypesSidebar = new SidebarViewContainer(ExerciseTypesSidebarPrefs);
        new ExerciseTypesCompositeView(this.exerciseTypesSidebar).onDocumentLoaded();

        //new WorkoutsView().onDocumentLoaded(); // carousel view
        new WorkoutsViewUsingContext().onDocumentLoaded();

        this.workoutSummarySidebar = new SidebarViewContainer(WorkoutSummarySidebarPrefs);
        this.workoutSummarySidebar.addView(new WorkoutSummaryView(), {containerId: WorkoutSummarySidebarContainers.container});
        this.workoutSummarySidebar.onDocumentLoaded();

        this.currentWorkoutSidebar = new SidebarViewContainer(CurrentWorkoutSidebarPrefs);
        this.currentWorkoutView = new CurrentWorkoutCompositeView(this.currentWorkoutSidebar);
        this.currentWorkoutView.onDocumentLoaded();

        ContextualInformationHelper.getInstance().onDocumentLoaded();
        SecurityManager.getInstance().onDocumentLoaded(NAVIGATION.logout);
        Controller.getInstance().onDocumentLoaded();

        const text: string = 'Fluffy';
        const cipher = SecurityManager.getInstance().encryptString(text);
        const decipher = SecurityManager.getInstance().decryptString(cipher);
        console.log(text);
        console.log(cipher);
        console.log(decipher);
    }

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    hideAllSideBars() {
        this.chatSidebar.eventHide(null);
        this.userSearchSidebar.eventHide(null);
        this.exerciseTypesSidebar.eventHide(null);
        this.currentWorkoutSidebar.eventHide(null);
    }

    handleShowUserSearch(event: Event) {
        logger('Handling Show User Search');
        event.preventDefault();
        //this.hideAllSideBars();
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        this.userSearchSidebar.eventShow(event);
    }

    handleShowWorkoutSummary(event: Event) {
        logger('Handling Show Workout Summary');
        event.preventDefault();
        //this.hideAllSideBars();
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        this.hideAllSideBars();
        this.workoutSummarySidebar.eventShow(event);
    }

    handleShowCurrentWorkout(event: Event) {
        logger('Handling Show Current Workout');
        event.preventDefault();
        //this.hideAllSideBars();
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        this.currentWorkoutSidebar.eventShow(event);
    }

    handleShowExerciseTypes(event: Event) {
        logger('Handling Show Exercise Types');
        event.preventDefault();
        //this.hideAllSideBars();
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        this.exerciseTypesSidebar.eventShow(event);
    }

    handleShowChat(roomName: string | null) {
        logger('Handling Show Chat');
        //event.preventDefault();
        //this.hideAllSideBars();
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        this.chatSidebar.eventShow(null);
        if (roomName) {
            this.chatView.selectChatRoom(roomName);
        }
    }

    countChanged(newCount: number): void {
        //
        let buffer = 'Chat <i class="fas fa-inbox"></i>';
        if (newCount > 0) {
            buffer += ` <span class="badge badge-pill badge-primary">&nbsp;${newCount}&nbsp;</span>`;
        }
        if (this.chatNavigationItem) this.chatNavigationItem.innerHTML = `${buffer}`;
    }

    addingExerciseToCurrentWorkout(exerciseType: any) {
        this.exerciseTypesSidebar.eventHide(null);
        this.currentWorkoutSidebar.eventShow(null);
        this.currentWorkoutView.getStateManager().addNewItemToState(STATE_NAMES.exerciseTypes, exerciseType, false);
    }

    showCurrentWorkout() {
        this.currentWorkoutSidebar.eventShow(null);
    }

    private setupNavigationItemHandling() {
        // @ts-ignore
        document.getElementById(NAVIGATION.userSearchId).addEventListener('click', this.handleShowUserSearch);
        // @ts-ignore
        document.getElementById(NAVIGATION.exerciseTypesId).addEventListener('click', this.handleShowExerciseTypes);
        // @ts-ignore
        document.getElementById(NAVIGATION.workoutSummary).addEventListener('click', this.handleShowWorkoutSummary);
        // @ts-ignore
        document.getElementById(NAVIGATION.currentWorkout).addEventListener('click', this.handleShowCurrentWorkout);
        // @ts-ignore
        this.chatNavigationItem = document.getElementById(NAVIGATION.chatId);

        // @ts-ignore
        this.chatNavigationItem.addEventListener('click', this.handleShowChat);
    }

    private setupUserSearchViews() {
        // add the subviews for the user search
        this.userSearchSidebar = UserSearchSidebar.getInstance(Controller.getInstance().getStateManager());
        this.userSearchSidebar.onDocumentLoaded();
    }

    private setupChatViews() {
        // add the views to the chat side bar
        this.chatSidebar = ChatRoomsSidebar.getInstance(Controller.getInstance().getStateManager());
        this.chatSidebar.onDocumentLoaded();
    }
}


$(function () {
    // @ts-ignore
    const element = <App className="container-fluid justify-content-around"/>;

    ReactDOM.render(element, document.getElementById('root'));

    $(function(){
        $('#datepicker').datepicker({
            //nextText: '&rarr;',
            //prevText: '&larr;',
            showOtherMonths: true,
            weekHeader:'WEEK',
            showWeek:true,
            firstDay:1,
            // numberOfMonths:1,
            showButtonPanel:false,
            dateFormat: 'dd/MM/yyyy',
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            //showOn: "button",
            //buttonImage: "img/calendar-blue.png",
            //buttonImageOnly: true,
        });
    });
});