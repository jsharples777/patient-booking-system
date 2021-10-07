import {PatientSearchSidebarContainers, PatientSearchSidebarPrefs} from "../AppTypes";
import {SidebarViewContainer, StateManager} from "ui-framework-jps";
import {PatientSearchView} from "./PatientSearchView";
import Controller from "../Controller";

export class PatientSearchSidebar extends SidebarViewContainer {

    private static _instance: PatientSearchSidebar;

    public static getInstance(): PatientSearchSidebar {
        if (!(PatientSearchSidebar._instance)) {
            PatientSearchSidebar._instance = new PatientSearchSidebar();
        }
        return PatientSearchSidebar._instance;
    }


    private constructor() {
        super(PatientSearchSidebarPrefs);
        const recentSearches = new PatientSearchView(Controller.getInstance().getStateManager());
        this.addView(recentSearches, {containerId: PatientSearchSidebarContainers.container});
    }
}


