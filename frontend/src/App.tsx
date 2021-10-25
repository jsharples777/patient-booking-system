import debug from 'debug';
import Controller from './Controller';

import {API_Config, AppointmentTypesSidebarPrefs, NAVIGATION, UsersSidebarPrefs,} from "./AppTypes";
import React, {ReactNode} from "react";
import ReactDOM from "react-dom";
import {AppointmentController} from "./appointments/AppointmentController";
import {
    ContextualInformationHelper,
    NotificationController,
    SecurityManager,
    SidebarViewContainer,
    UnreadMessageCountListener
} from "ui-framework-jps";
import {setOptions} from "@mobiscroll/javascript";
import {AppointmentTemplateController} from "./appointment-templates/AppointmentTemplateController";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {PatientSearchSidebar} from "./patients/PatientSearchSidebar";
import {AppointmentTypesCompositeView} from "./appointment-types/AppointmentTypesCompositeView";
import {ClinicChatSidebar} from "./clinic-chat/ClinicChatSidebar";
import {ClinicChatListView} from "./clinic-chat/ClinicChatListView";
import {TodayController} from "./today/TodayController";
import {PatientRecordTabularView} from "./patients/PatientRecordTabularView";
import {PatientDemographicsCompositeView} from "./patients/PatientDemographicsCompositeView";
import {TodaysPatientsView} from "./today/TodaysPatientsView";
import {PatientController} from "./patients/PatientController";
import {UsersCompositeView} from "./users/UsersCompositeView";
import {AppointmentBookReact} from "./appointments/AppointmentBookReact";
import {AppointmentTemplatesReact} from "./appointment-templates/AppointmentTemplatesReact";
import {PatientRecordReact} from "./patients/PatientRecordReact";


const logger = debug('app');

export default class App extends React.Component implements UnreadMessageCountListener {
    private static _instance:App;

    public static getInstance(): App {
        return App._instance;
    }

    private thisEl: HTMLDivElement | null = null;
    private chatNavigationItem: HTMLAnchorElement | null = null;
    private apptTypeSidebar: SidebarViewContainer | null = null;
    private usersSidebar: SidebarViewContainer | null = null;


    public constructor() {
        // @ts-ignore
        super();
        App._instance = this;

        let todaysPatients: any[] = [];

        this.state = {
            todaysPatients: todaysPatients
        };


        // event handlers
        this.handleShowChat = this.handleShowChat.bind(this);
        this.handleShowAppointmentBook = this.handleShowAppointmentBook.bind(this);
        this.handleShowAppointmentTemplates = this.handleShowAppointmentTemplates.bind(this);
        this.handleShowPatientRecord = this.handleShowPatientRecord.bind(this);
        this.handleShowPatientSearch = this.handleShowPatientSearch.bind(this);
        this.handleShowAppointmentTypes = this.handleShowAppointmentTypes.bind(this);
        this.handleShowUsers = this.handleShowUsers.bind(this);
        this.handleShowToday = this.handleShowToday.bind(this);

        Controller.getInstance().connectToApplication(this, window.localStorage);
    }

    render(): ReactNode {
        logger("Rendering App");
        return (
            <React.Fragment>
                <div id="today" className="container-fluid d-none">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div id="todayDetail">
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <div className="container-fluid">
                                <div className="row" id="todays-patients">
                                    <TodaysPatientsView/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppointmentBookReact/>
                <AppointmentTemplatesReact/>
                <PatientRecordReact/>
            </React.Fragment>
        )
    }


    componentDidMount(): void {
        logger('component Did Mount');
        logger('document loaded');
        // @ts-ignore
        this.thisEl = document.getElementById('root');


        this.apptTypeSidebar = new SidebarViewContainer(AppointmentTypesSidebarPrefs);
        new AppointmentTypesCompositeView(this.apptTypeSidebar).onDocumentLoaded();

        this.usersSidebar = new SidebarViewContainer(UsersSidebarPrefs);
        new UsersCompositeView(this.usersSidebar).onDocumentLoaded();

        PatientSearchSidebar.getInstance().onDocumentLoaded();
        ClinicChatSidebar.getInstance().onDocumentLoaded();

        TodaysPatientsView.getInstance().onDocumentLoaded(this);


        this.setupNavigationItemHandling();

        // AppointmentTemplateController.getInstance().onDocumentLoaded();
        TodayController.getInstance().onDocumentLoaded();
        ContextualInformationHelper.getInstance().onDocumentLoaded();
        SecurityManager.getInstance().onDocumentLoaded(NAVIGATION.logout);
        NotificationController.getInstance().setOptions({
            showNormalPriorityMessageNotifications: true,
            showHighPriorityMessageNotifications: true,
            showUrgentPriorityMessageNotifications: true,
            showNormalPriorityMessageNotificationsInOS: true,
            showHighPriorityMessageNotificationsInOS: true,
            showUrgentPriorityMessageNotificationsInOS: true,
            showInvitationDeclinedNotifications: false,
            showInvitedNotifications: false,
            showOfflineMessageNotification: true,
            showFavouriteUserLoggedInNotification: false,
            showFavouriteUserLoggedOutNotification: false,
            showUserJoinLeaveChatNotification: false
        });
        NotificationController.getInstance().onDocumentLoaded();
        PatientController.getInstance().onDocumentLoaded();
        Controller.getInstance().onDocumentLoaded();

        if (Controller.getInstance().isProvider()) {
            this.handleShowToday(null);
        } else {
            this.handleShowAppointmentBook(null);
        }


    }

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    hideAllSideBars() {
        ClinicChatSidebar.getInstance().eventHide(null);
        PatientSearchSidebar.getInstance().eventHide(null);
        this.usersSidebar.eventHide(null);
        this.apptTypeSidebar.eventHide(null);
    }


    handleShowChat(roomName: string | null) {
        logger('Handling Show Chat');
        // prevent anything from happening if we are not logged in
        if (!Controller.getInstance().isLoggedIn()) {
            // @ts-ignore
            window.location.href = API_Config.login;
            return;
        }
        ClinicChatSidebar.getInstance().eventShow(null);
        if (roomName) {
            ClinicChatListView.getInstance().selectChatRoom(roomName);
        }
    }

    countChanged(unreadNormalMessages: number, unreadHighMessages: number, unreadUrgentMessages: number): void {
        //
        let buffer = 'Chat <i class="fas fa-inbox"></i>';
        if (unreadNormalMessages > 0) {
            buffer += ` <span class="badge badge-pill badge-primary">&nbsp;${unreadNormalMessages}&nbsp;</span>`;
        }
        if (unreadHighMessages > 0) {
            buffer += ` <span class="badge badge-pill badge-warning">&nbsp;${unreadHighMessages}&nbsp;</span>`;
        }
        if (unreadUrgentMessages > 0) {
            buffer += ` <span class="badge badge-pill badge-danger">&nbsp;${unreadUrgentMessages}&nbsp;</span>`;
        }
        if (this.chatNavigationItem) this.chatNavigationItem.innerHTML = `${buffer}`;
    }

    protected handleShowAppointmentBook(event: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        logger(`Showing appointment book`);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', false);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('today'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);
    }

    protected handleShowAppointmentTemplates(event: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        logger(`Showing appointment templates`);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', false);
        browserUtil.addRemoveClasses(document.getElementById('today'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);

    }

    protected handleShowToday(event: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        logger(`Showing today`);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('today'), 'd-none', false);
        browserUtil.addRemoveClasses(document.getElementById('patientRecord'), 'd-none', true);

    }

    public handleShowPatientRecord(event: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        logger(`Showing patient record`);
        browserUtil.addRemoveClasses(document.getElementById('appointmentBook'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('appointmentTemplates'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('today'), 'd-none', true);
        browserUtil.addRemoveClasses(document.getElementById('patientRecord'), 'd-none', false);
    }

    protected handleShowPatientSearch(event: Event): void {
        logger(`Showing patient search`);
        PatientSearchSidebar.getInstance().eventShow(null);

    }

    protected handleShowAppointmentTypes(event: Event): void {
        logger(`Showing appointment types`);
        if (this.apptTypeSidebar) this.apptTypeSidebar.eventShow(null);

    }

    protected handleShowUsers(event: Event): void {
        logger(`Showing users`);
        if (this.usersSidebar) this.usersSidebar.eventShow(null);

    }


    private setupNavigationItemHandling() {
        document.getElementById(NAVIGATION.appointmentBook).addEventListener('click', this.handleShowAppointmentBook);
        const templateEl = document.getElementById(NAVIGATION.appointmentTemplates);
        if (templateEl) {
            templateEl.addEventListener('click', this.handleShowAppointmentTemplates);
        }
        const apptTypesEl = document.getElementById(NAVIGATION.appointmentTypes);
        if (apptTypesEl) {
            apptTypesEl.addEventListener('click', this.handleShowAppointmentTypes);
        }
        document.getElementById(NAVIGATION.patientRecord).addEventListener('click', this.handleShowPatientRecord);
        document.getElementById(NAVIGATION.patientSearch).addEventListener('click', this.handleShowPatientSearch);
        const usersEl = document.getElementById(NAVIGATION.users);
        if (usersEl) {
            usersEl.addEventListener('click', this.handleShowUsers);
        }
        const todayEl = document.getElementById(NAVIGATION.today);
        if (todayEl) {
            todayEl.addEventListener('click', this.handleShowToday);
        }

        // @ts-ignore
        this.chatNavigationItem = document.getElementById(NAVIGATION.clinicChat);

        // @ts-ignore
        this.chatNavigationItem.addEventListener('click', this.handleShowChat);
    }


}

localStorage.debug = 'notification-controller app api-ts-results  patient-controller';// today-controller todays-patients-view today-view';//tabular-view-container';//default-item-view default-item-view-detail default-item-view-detail-validation';// basic-table-row basic-table-row-detail abstract-field colour-editor colour-input-field editing-event-listener';// tabular-item-view-renderer default-item-view default-item-view-detail';   //tabular-view-container';//user-validation-helper validation-manager validation-manager-multiple-condition-rule-results validation-helper-functions validation-manager-rule-failure';
//localStorage.debug = 'socket-listener';
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
