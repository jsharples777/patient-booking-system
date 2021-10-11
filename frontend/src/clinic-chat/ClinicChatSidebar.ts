
import {ClinicChatListView} from "./ClinicChatListView";
import {ClinicChatDetailView} from "./ClinicChatDetailView";
import {SidebarLocation, SidebarPrefs, SidebarViewContainer, StateManager} from "ui-framework-jps";

export class ClinicChatSidebar extends SidebarViewContainer {
    private static _instance: ClinicChatSidebar;

    public static getInstance(stateManager: StateManager): ClinicChatSidebar {
        if (!(ClinicChatSidebar._instance)) {
            ClinicChatSidebar._instance = new ClinicChatSidebar(stateManager);
        }
        return ClinicChatSidebar._instance;
    }

    static SidebarPrefs: SidebarPrefs = {
        id: 'chatSideBar',
        expandedSize: '35%',
        location: SidebarLocation.right
    }

    static SidebarContainers = {
        chatLogs: 'chatLogs',
        chatLog: 'chatLogRoom'
    }

    private constructor(stateManager: StateManager) {
        super(ClinicChatSidebar.SidebarPrefs);
        const chatView = ClinicChatListView.getInstance();
        this.addView(chatView, {containerId: ClinicChatSidebar.SidebarContainers.chatLogs});

        const chatLogView = ClinicChatDetailView.getInstance(stateManager);
        this.addView(chatLogView, {containerId: ClinicChatSidebar.SidebarContainers.chatLog});
        chatView.addEventListener(chatLogView);
    }
}


