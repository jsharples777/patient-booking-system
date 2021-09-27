//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';

import {
    ChatLogsView,
    ChatRoomsSidebar,
    ContextualInformationHelper,
    SecurityManager,
    UnreadMessageCountListener,
    UserSearchSidebar
} from 'ui-framework-jps';


import debug from 'debug';
import Controller from './app/Controller';

import {
    API_Config,
    NAVIGATION,
    VIEW_CONTAINER,
} from "./app/AppTypes";
import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {setOptions, Datepicker, datepicker, eventcalendar, Eventcalendar} from "@mobiscroll/javascript";
import {AppointmentController} from "./app/AppointmentController";
import moment from 'moment';






const logger = debug('app');

export default class App extends React.Component implements UnreadMessageCountListener {

    // @ts-ignore
    private userSearchSidebar: UserSearchSidebar;
    // @ts-ignore
    private chatSidebar: ChatRoomsSidebar;
    // @ts-ignore
    private chatView: ChatLogsView;

    private thisEl: HTMLDivElement | null = null;
    private chatNavigationItem: HTMLAnchorElement | null = null;

    private datePicker:Datepicker|null = null;
    private calendar:Eventcalendar|null = null;

    public constructor() {
        // @ts-ignore
        super();
        // event handlers
        this.handleShowUserSearch = this.handleShowUserSearch.bind(this);
        this.handleShowChat = this.handleShowChat.bind(this);

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

        // setup the scheduler
        // @ts-ignore
        this.datePicker = datepicker(document.getElementById(VIEW_CONTAINER.calendarControl),{
            controls: ['calendar'],
            display: "inline",
            dateFormat: 'YYYYMMDD',
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            showWeekNumbers:true,
            onChange: (event:any, inst:any) => {
                this.calendar?.navigate(event.value);
                AppointmentController.getInstance().handleNewDatePicked(event.value, inst)
            }
        });


        // @ts-ignore
        this.calendar = eventcalendar(document.getElementById(VIEW_CONTAINER.calendarDetail),{
            clickToCreate:'double',
            dragTimeStep:5,
            dragToCreate:true,
            dragToMove:true,
            dragToResize:true,
            min:moment().subtract(3,"months"),
            controls:['calendar'],
            showControls:true,
            view: {
                schedule: {
                    type:'day',
                    startDay:1,
                    endDay:5,
                    startTime:'09:00',
                    endTime:'16:00',
                    timeCellStep:10,
                    timeLabelStep:60
                }
            },
            invalidateEvent:'strict',
            invalid: [{
                recurring: {
                    repeat:'weekly',
                    weekDays:'SA,SU'
                }
                },
                {
                    start:'12:15',
                    end:'16:00',
                    title:'Close Early',
                    recurring: {
                        repeat:'weekly',
                        weekDays:'FR'
                    }
                },
                {
                    start:'12:00',
                    end:'13:00',
                    title:'Lunch Break',
                    recurring: {
                        repeat: 'weekly',
                        weekDays: 'MO,TU,WE,TH'
                    }
                }
            ],
            onSelectedDateChange:(event: any, inst: any) => {
                AppointmentController.getInstance().handleNewDatePicked(event.date,inst);
                this.datePicker?.setVal(event.date);
            },
            onPageLoading:(event: any, inst: any) => {
                AppointmentController.getInstance().onPageLoading(event,inst);
            },
            onEventCreated:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentCreated(event,inst);
            },
            onEventDelete:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentDeleting(event,inst);
            },
            onEventDeleted:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentDeleted(event,inst);
            },
            onEventRightClick:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentContext(event,inst);
            },
            onEventUpdated:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentUpdated(event,inst);
            },
            onEventDoubleClick:(event: any, inst: any) => {
                AppointmentController.getInstance().onAppointmentEditRequested(event,inst);
            },


        });

        if (this.calendar && this.datePicker) AppointmentController.getInstance().setViewObjects(this.datePicker,this.calendar);



        ContextualInformationHelper.getInstance().onDocumentLoaded();
        SecurityManager.getInstance().onDocumentLoaded(NAVIGATION.logout);
        Controller.getInstance().onDocumentLoaded();

    }

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    hideAllSideBars() {
        this.chatSidebar.eventHide(null);
        this.userSearchSidebar.eventHide(null);
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


    handleShowChat(roomName: string | null) {
        logger('Handling Show Chat');
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


    private setupNavigationItemHandling() {
        // @ts-ignore
        document.getElementById(NAVIGATION.userSearchId).addEventListener('click', this.handleShowUserSearch);
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

localStorage.debug = 'state-manager-graphql api-ts app controller-ts appointment-controller';
localStorage.plugin = 'chat';

debug.log = console.info.bind(console);

$(function () {



    setOptions( {
        theme: 'ios',
        themeVariant: 'light'
    });
    //datepicker("#calendarControl",{display:'inline'});
    // @ts-ignore
    const element = <App className="container-fluid justify-content-around"/>;
    ReactDOM.render(element, document.getElementById('root'));

});