import {
    AbstractStatefulCollectionView,
    CollectionViewDOMConfig,
    CollectionViewListener,
    KeyType,
    View
} from 'ui-framework-jps';

import {STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";


import {WorkoutSummaryRenderer} from "../renderer/WorkoutSummaryRenderer";
import {isSameMongo} from "../EqualityFunctions";


export class WorkoutSummaryView extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'workoutSummaryChart',
            dataSourceId: VIEW_NAME.workoutSummary,
        },
        resultsElementType: 'canvas',
        resultsClasses: '',
        keyId: '_id',
        keyType: KeyType.string,
        detail: {
            containerClasses: '',
            textElementType: '',
            textElementClasses: '',
            select: false,
        },
    }


    constructor() {
        super(WorkoutSummaryView.DOMConfig, Controller.getInstance().getStateManager(), STATE_NAMES.workouts);
        this.renderer = new WorkoutSummaryRenderer(this, this);
    }

    canDeleteItem(view: View, selectedItem: any): boolean {
        return false;
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }


    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        return false;
    }

    hasPermissionToActionItemInNamedCollection(actionName: string, name: string, item: any): boolean {
        return false;
    }

    renderBackgroundForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any) {
    }

}

