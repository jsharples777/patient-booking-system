import {PatientSearchSidebarPrefs} from "../AppTypes";
import {SidebarViewContainer, StateManager} from "ui-framework-jps";

export class PatientSearchSidebar extends SidebarViewContainer {

    private static _instance: PatientSearchSidebar;

    public static getInstance(stateManager:StateManager): PatientSearchSidebar {
        if (!(PatientSearchSidebar._instance)) {
            PatientSearchSidebar._instance = new PatientSearchSidebar(stateManager);
        }
        return PatientSearchSidebar._instance;
    }


    private logSB:SidebarViewContainer;

    private constructor(stateManager:StateManager) {
        super(PatientSearchSidebarPrefs);
        //const recentSearches = UserSearchView.getInstance(stateManager);
        //this.addView(recentSearches, {containerId: UserSearchSidebar.SidebarContainers.recentSearches});
    }
}


