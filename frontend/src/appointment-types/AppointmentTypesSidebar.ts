import {SidebarViewContainer} from "ui-framework-jps";
import {AppointmentTypesSidebarPrefs} from "../AppTypes";

export class AppointmentTypesSidebar extends SidebarViewContainer {

    private static _instance: AppointmentTypesSidebar;

    public static getInstance(): AppointmentTypesSidebar {
        if (!(AppointmentTypesSidebar._instance)) {
            AppointmentTypesSidebar._instance = new AppointmentTypesSidebar();
        }
        return AppointmentTypesSidebar._instance;
    }


    private constructor() {
        super(AppointmentTypesSidebarPrefs);
    }
}


