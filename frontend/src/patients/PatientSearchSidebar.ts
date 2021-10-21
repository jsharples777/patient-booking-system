import {PatientSearchSidebarContainers, PatientSearchSidebarPrefs} from "../AppTypes";
import {SidebarViewContainer} from "ui-framework-jps";
import {PatientSearchView} from "./PatientSearchView";
import {OpenPatientsView} from "./OpenPatientsView";

export class PatientSearchSidebar extends SidebarViewContainer {

    private static _instance: PatientSearchSidebar;

    private constructor() {
        super(PatientSearchSidebarPrefs);
        const recentSearches = new PatientSearchView();
        this.addView(recentSearches, {containerId: PatientSearchSidebarContainers.container});
        const openPatients = new OpenPatientsView();
        this.addView(openPatients, {containerId: PatientSearchSidebarContainers.openRecords});
    }

    public static getInstance(): PatientSearchSidebar {
        if (!(PatientSearchSidebar._instance)) {
            PatientSearchSidebar._instance = new PatientSearchSidebar();
        }
        return PatientSearchSidebar._instance;
    }
}


