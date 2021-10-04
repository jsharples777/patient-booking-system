import debug from 'debug';
import Controller from './app/Controller';

import {
    API_Config,
    NAVIGATION,
} from "./app/AppTypes";
import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {AppointmentController} from "./app/appointments/AppointmentController";
import {
    ChatRoomsSidebar,
    ContextualInformationHelper,
    SecurityManager,
    UnreadMessageCountListener,
    UserSearchSidebar
} from "ui-framework-jps";
import {setOptions} from "@mobiscroll/javascript";






const logger = debug('app');

export default class App extends React.Component implements UnreadMessageCountListener {


    // @ts-ignore
    private chatSidebar: ChatRoomsSidebar;
    // @ts-ignore
    private chatView: ChatLogsView;

    private thisEl: HTMLDivElement | null = null;
    private chatNavigationItem: HTMLAnchorElement | null = null;



    public constructor() {
        // @ts-ignore
        super();
        // event handlers
        this.handleShowChat = this.handleShowChat.bind(this);
        this.handleShowAppointmentBook = this.handleShowAppointmentBook.bind(this);
        this.handleShowAppointmentBook = this.handleShowAppointmentTemplates.bind(this);
        this.handleShowAppointmentBook = this.handleShowPatientRecords.bind(this);
        this.handleShowAppointmentBook = this.handleShowPatientSearch.bind(this);

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

        this.setupNavigationItemHandling();

        AppointmentController.getInstance().onDocumentLoaded();
        ContextualInformationHelper.getInstance().onDocumentLoaded();
        SecurityManager.getInstance().onDocumentLoaded(NAVIGATION.logout);
        Controller.getInstance().onDocumentLoaded();

    }

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    hideAllSideBars() {
        this.chatSidebar.eventHide(null);
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

    protected handleShowAppointmentBook(event:Event):void {

    }
    protected handleShowAppointmentTemplates(event:Event):void {

    }
    protected handleShowPatientRecords(event:Event):void {

    }
    protected handleShowPatientSearch(event:Event):void {

    }


    private setupNavigationItemHandling() {
        document.getElementById(NAVIGATION.appointmentBook).addEventListener('click', this.handleShowAppointmentBook);
        document.getElementById(NAVIGATION.appointmentTemplates).addEventListener('click', this.handleShowAppointmentTemplates);
        document.getElementById(NAVIGATION.patientRecords).addEventListener('click',this.handleShowPatientRecords);
        document.getElementById(NAVIGATION.patientSearch).addEventListener('click',this.handleShowPatientSearch);


        // @ts-ignore
        this.chatNavigationItem = document.getElementById(NAVIGATION.clinicChat);

        // @ts-ignore
        this.chatNavigationItem.addEventListener('click', this.handleShowChat);
    }


}

localStorage.debug = 'api-ts-results appointment-controller socket-listener';
localStorage.plugin = 'chat';

debug.log = console.info.bind(console);

$(function () {

    setOptions({
        theme: 'ios',
        themeVariant: 'light'
    });

    // @ts-ignore
    mobiscroll5.setOptions({
        theme: 'ios',
        themeVariant: 'light'
    });

    // @ts-ignore
    const element = <App className="container-fluid justify-content-around"/>;
    ReactDOM.render(element, document.getElementById('root'));

});
