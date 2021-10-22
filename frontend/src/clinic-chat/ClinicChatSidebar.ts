import {ClinicChatListView} from "./ClinicChatListView";
import {ClinicChatDetailView} from "./ClinicChatDetailView";
import {SidebarLocation, SidebarPrefs, SidebarViewContainer, StateManager} from "ui-framework-jps";

export class ClinicChatSidebar extends SidebarViewContainer {
    static SidebarPrefs: SidebarPrefs = {
        id: 'chatSideBar',
        expandedSize: '35%',
        location: SidebarLocation.right
    }
    static SidebarContainers = {
        chatLogs: 'chatLogs',
        chatLog: 'chatLogRoom'
    }
    private static _instance: ClinicChatSidebar;

    private constructor() {
        super(ClinicChatSidebar.SidebarPrefs);
        const chatView = ClinicChatListView.getInstance();
        this.addView(chatView, {containerId: ClinicChatSidebar.SidebarContainers.chatLogs});

        const chatLogView = ClinicChatDetailView.getInstance();
        this.addView(chatLogView, {containerId: ClinicChatSidebar.SidebarContainers.chatLog});
        chatView.addEventListener(chatLogView);
    }

    public static getInstance(): ClinicChatSidebar {
        if (!(ClinicChatSidebar._instance)) {
            ClinicChatSidebar._instance = new ClinicChatSidebar();
        }
        return ClinicChatSidebar._instance;
    }
}


