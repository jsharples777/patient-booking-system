import Controller from "../Controller";
import debug from "debug";
import {
    BasicObjectDefinitionFactory, BootstrapFormConfigHelper, DataObjectController,
    DataObjectDefinition, DataObjectListener,
    DetailView,
    DetailViewImplementation,
    FormDetailViewRenderer,
    LinkedCollectionDetailController,
    ObjectDefinitionRegistry,
    ObjectPermissionChecker,
    SidebarViewContainer
} from "ui-framework-jps";
import {AppointmentTypesSidebarContainers, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import {AppointmentTypesCollectionView} from "./AppointmentTypesCollectionView";
import {AppointmentTypesFormConfigHelper} from "./AppointmentTypesFormConfigHelper";


const logger = debug('exercise-types-composite-view');

export class ApptTypePermissionChecker implements ObjectPermissionChecker {
    hasPermissionToUpdateItem(item: any): boolean {
        if (item.isStatus) {
            return false;
        }
        return true;
    }

    hasPermissionToDeleteItem(item: any): boolean {
        if (item.isStatus) {
            return false;
        }
        return true;
    }
}

export class AppointmentTypesCompositeView implements DataObjectListener{
    private sideBar: SidebarViewContainer;

    constructor(sideBar: SidebarViewContainer) {
        this.sideBar = sideBar;
    }

    onDocumentLoaded() {
        const apptTypes = new AppointmentTypesCollectionView(Controller.getInstance().getStateManager());
        this.sideBar.addView(apptTypes, {containerId: AppointmentTypesSidebarContainers.list});

        const apptTypeDefinition: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.appointmentTypes);

        if (apptTypeDefinition) {
            let apptTypeDetailRenderer: FormDetailViewRenderer = new FormDetailViewRenderer(AppointmentTypesSidebarContainers.detail, apptTypeDefinition, new ApptTypePermissionChecker(),new AppointmentTypesFormConfigHelper(),false);

            let apptTypeDetailView: DetailView = new DetailViewImplementation(
                {
                    resultsContainerId: AppointmentTypesSidebarContainers.detail,
                    dataSourceId: VIEW_NAME.appointmentTypeDetail
                }, apptTypeDetailRenderer);
            let viewLinker: LinkedCollectionDetailController = new LinkedCollectionDetailController(STATE_NAMES.appointmentTypes, apptTypes);
            viewLinker.addLinkedDetailView(apptTypeDetailView);
            this.sideBar.onDocumentLoaded();
            let startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(apptTypeDefinition);
            apptTypeDetailView.initialise(startingDisplayOrder, false, true);

            // setup the event handling for the create new exercise type button
            let createApptType = <HTMLButtonElement>document.getElementById('addNewAppointmentType');
            logger(`Setting up button for creating appointment types`);
            logger(createApptType);
            if (createApptType) {
                createApptType.addEventListener('click', (event) => {
                    logger(`Asking view linker to start a new object`);
                    viewLinker.startNewObject();
                });

            }

            viewLinker.addListener(this);
        }
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.appointmentTypes: {
                logger(`Handling create new appointment type`);
                logger(dataObj);
                Controller.getInstance().getStateManager().addNewItemToState(typeName, dataObj, false);
                break;
            }
        }
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.appointmentTypes: {
                logger(`Handling delete appointment type - already managed by stateful collection view`);
                logger(dataObj);
                break;
            }
        }
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.appointmentTypes: {
                logger(`Handling update appointment type`);
                logger(dataObj);
                Controller.getInstance().getStateManager().updateItemInState(typeName, dataObj, false);
                break;
            }
        }
    }
}