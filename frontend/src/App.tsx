import debug from 'debug';
import Controller from './Controller';

import {
    API_Config,
    NAVIGATION, STATE_NAMES,
} from "./AppTypes";
import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {AppointmentController} from "./appointments/AppointmentController";
import {
    ChatRoomsSidebar,
    ContextualInformationHelper,
    SecurityManager,
    UnreadMessageCountListener
} from "ui-framework-jps";
import {setOptions} from "@mobiscroll/javascript";
import {AppointmentTemplateController} from "./appointment-templates/AppointmentTemplateController";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {PatientSearchSidebar} from "./patients/PatientSearchSidebar";
import {PatientSearchView} from "./patients/PatientSearchView";






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
        this.handleShowAppointmentTemplates = this.handleShowAppointmentTemplates.bind(this);
        this.handleShowPatientRecords = this.handleShowPatientRecords.bind(this);
        this.handleShowPatientSearch = this.handleShowPatientSearch.bind(this);

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

        PatientSearchSidebar.getInstance().onDocumentLoaded();

        this.setupNavigationItemHandling();

        AppointmentController.getInstance().onDocumentLoaded();
        AppointmentTemplateController.getInstance().onDocumentLoaded();
        ContextualInformationHelper.getInstance().onDocumentLoaded();
        SecurityManager.getInstance().onDocumentLoaded(NAVIGATION.logout);
        Controller.getInstance().onDocumentLoaded();

        Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientDemographics,{_id:'2a8665a6-3580-4195-8ed7-0f81df551204'});

    }

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    hideAllSideBars() {
        this.chatSidebar.eventHide(null);
        PatientSearchSidebar.getInstance().eventHide(null);
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
        logger(`Showing appointment book`);
        logger(AppointmentController.getInstance().getModel().clinicConfig);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'),'d-none',false);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'),'d-none',true);


    }
    protected handleShowAppointmentTemplates(event:Event):void {
        logger(`Showing appointment templates`);
        logger(AppointmentController.getInstance().getModel().clinicConfig);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'),'d-none',true);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'),'d-none',false);

    }
    protected handleShowPatientRecords(event:Event):void {

    }
    protected handleShowPatientSearch(event:Event):void {
        logger(`Showing patient search`);
        PatientSearchSidebar.getInstance().eventShow(null);

    }


    private setupNavigationItemHandling() {
        document.getElementById(NAVIGATION.appointmentBook).addEventListener('click', this.handleShowAppointmentBook);
        let templateEl = document.getElementById(NAVIGATION.appointmentTemplates);
        if (templateEl) {
            templateEl.addEventListener('click', this.handleShowAppointmentTemplates);
        }
        document.getElementById(NAVIGATION.patientRecords).addEventListener('click',this.handleShowPatientRecords);
        document.getElementById(NAVIGATION.patientSearch).addEventListener('click',this.handleShowPatientSearch);


        // @ts-ignore
        this.chatNavigationItem = document.getElementById(NAVIGATION.clinicChat);

        // @ts-ignore
        this.chatNavigationItem.addEventListener('click', this.handleShowChat);
    }


}

localStorage.debug = 'app api-ts-results api-ts state-manager-api';
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
