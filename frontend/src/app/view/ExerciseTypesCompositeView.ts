

import {BUTTON, ExerciseTypesSidebarContainers, STATE_NAMES, VIEW_CONTAINER, VIEW_NAME} from "../AppTypes";

import {CreatedByPermissionChecker} from "../CreatedByPermissionChecker";

import Controller from "../Controller";
import debug from "debug";
import {ValidationHelper} from "../helper/ValidationHelper";
import {ExerciseTabularViewUsingContext} from "./ExerciseTabularViewUsingContext";
import {SidebarViewContainer} from "../../framework/ui/container/SidebarViewContainer";
import {DataObjectDefinition} from "../../framework/model/DataObjectTypeDefs";
import {ObjectDefinitionRegistry} from "../../framework/model/ObjectDefinitionRegistry";
import {FormDetailViewRenderer} from "../../framework/ui/view/renderer/FormDetailViewRenderer";
import {DetailViewImplementation} from "../../framework/ui/view/implementation/DetailViewImplementation";
import {DetailView} from "../../framework/ui/view/interface/DetailView";
import {LinkedCollectionDetailController} from "../../framework/ui/helper/LinkedCollectionDetailController";
import {BasicObjectDefinitionFactory} from "../../framework/model/BasicObjectDefinitionFactory";
import {Form} from "../../framework/ui/form/Form";

const logger = debug('exercise-types-composite-view');

export class ExerciseTypesCompositeView {
    private sideBar: SidebarViewContainer;

    constructor(sideBar: SidebarViewContainer) {
        this.sideBar = sideBar;
    }

    onDocumentLoaded() {
        const exerciseTypes = new ExerciseTabularViewUsingContext(Controller.getInstance().getStateManager());
        this.sideBar.addView(exerciseTypes, {containerId: ExerciseTypesSidebarContainers.container});

        const exerciseTypeDefinition: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.exerciseTypes);

        if (exerciseTypeDefinition) {
            let exerciseTypeDetailRenderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.exerciseTypeDetail, exerciseTypeDefinition, new CreatedByPermissionChecker());

            let exerciseTypeDetailView: DetailView = new DetailViewImplementation(
                {
                    resultsContainerId: VIEW_CONTAINER.exerciseTypeDetail,
                    dataSourceId: VIEW_NAME.exerciseTypes
                }, exerciseTypeDetailRenderer);
            let viewLinker: LinkedCollectionDetailController = new LinkedCollectionDetailController(STATE_NAMES.exerciseTypes, exerciseTypes);
            viewLinker.addLinkedDetailView(exerciseTypeDetailView);
            this.sideBar.onDocumentLoaded();
            let startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(exerciseTypeDefinition);
            exerciseTypeDetailView.initialise(startingDisplayOrder, false, true);

            const detailForm: Form | null = exerciseTypeDetailRenderer.getForm();

            if (detailForm) {
                logger(`Setting up validation rules for ${detailForm.getId()}`);
                logger(detailForm);
                ValidationHelper.getInstance().setupValidationForExerciseTypeDetailsForm(detailForm);
            }

            // setup the event handling for the create new exercise type button
            let createExerciseType = <HTMLButtonElement>document.getElementById(BUTTON.createNewExerciseType);
            logger(`Setting up button for creating exercise types`);
            logger(createExerciseType);
            if (createExerciseType) {
                createExerciseType.addEventListener('click', (event) => {
                    logger(`Asking view linker to start a new object`);
                    viewLinker.startNewObject();
                });

            }

            viewLinker.addListener(Controller.getInstance());
        }
    }


}