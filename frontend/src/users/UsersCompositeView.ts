import Controller from "../Controller";
import debug from "debug";
import {
    BasicObjectDefinitionFactory,
    DataObjectController,
    DataObjectDefinition,
    DataObjectListener, DefaultFieldPermissionChecker,
    DetailView,
    DetailViewImplementation, Form,
    FormDetailViewRenderer,
    LinkedCollectionDetailController,
    ObjectDefinitionRegistry,
    SidebarViewContainer
} from "ui-framework-jps";
import {STATE_NAMES, UsersSidebarContainers, VIEW_NAME} from "../AppTypes";

import {BootstrapFormConfigHelper} from "ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper";
import {UsersCollectionView} from "./UsersCollectionView";
import {UserValidationHelper} from "./UserValidationHelper";


const logger = debug('users-composite-view');


export class UsersCompositeView implements DataObjectListener {
    private sideBar: SidebarViewContainer;

    constructor(sideBar: SidebarViewContainer) {
        this.sideBar = sideBar;
    }

    onDocumentLoaded() {
        const apptTypes = new UsersCollectionView(Controller.getInstance().getStateManager());
        this.sideBar.addView(apptTypes, {containerId: UsersSidebarContainers.list});

        const userDef: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.users);

        if (userDef) {
            let detailRenderer: FormDetailViewRenderer = new FormDetailViewRenderer(UsersSidebarContainers.detail, userDef, new DefaultFieldPermissionChecker(), BootstrapFormConfigHelper.getInstance(), false);

            let usersDetailView: DetailView = new DetailViewImplementation(
                {
                    resultsContainerId: UsersSidebarContainers.detail,
                    dataSourceId: VIEW_NAME.userDetail
                }, detailRenderer);
            let viewLinker: LinkedCollectionDetailController = new LinkedCollectionDetailController(STATE_NAMES.users, apptTypes);
            viewLinker.addLinkedDetailView(usersDetailView);
            this.sideBar.onDocumentLoaded();

            let startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(userDef);
            usersDetailView.initialise(startingDisplayOrder, false, true);

            const detailForm:Form|null = detailRenderer.getForm();
            if (detailForm) {
                logger(`Setting up validation rules for ${detailForm.getId()}`);
                logger(detailForm);
                UserValidationHelper.getInstance().setupValidationForDetailsForm(detailForm);
            }

            // setup the event handling for the create new exercise type button
            let createUser = <HTMLButtonElement>document.getElementById('addNewUser');
            logger(`Setting up button for creating users`);
            logger(createUser);
            if (createUser) {
                createUser.addEventListener('click', (event) => {
                    logger(`Asking view linker to start a new object`);
                    viewLinker.startNewObject();
                });

            }

            viewLinker.addListener(this);
        }
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
        logger(`Handling create`);
        switch (typeName) {
            case STATE_NAMES.users: {
                logger(`Handling create new user`);
                logger(dataObj);
                Controller.getInstance().getStateManager().addNewItemToState(typeName, dataObj, false);
                break;
            }
        }
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {}

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
        logger(`Handling update`);
        switch (typeName) {
            case STATE_NAMES.users: {
                logger(`Handling update user`);
                logger(dataObj);
                Controller.getInstance().getStateManager().updateItemInState(typeName, dataObj, false);
                break;
            }
        }
    }
}