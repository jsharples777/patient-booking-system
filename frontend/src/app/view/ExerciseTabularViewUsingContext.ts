import {
    AbstractStatefulCollectionView,
    BootstrapTableConfigHelper,
    CollectionViewDOMConfig,
    CollectionViewEventHandlerDelegateUsingContext,
    CollectionViewListener,
    CollectionViewListenerForwarder,
    ContextDefinition,
    ContextualInformationHelper,
    DataObjectDefinition,
    DisplayOrder,
    FIELD_CreatedBy,
    KeyType,
    Modifier,
    ObjectDefinitionRegistry,
    StateManager,
    TableUIConfig,
    TabularViewRendererUsingContext,
    View
} from 'ui-framework-jps';


import {DRAGGABLE, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";
import debug from 'debug';
import {isSameMongo} from "../EqualityFunctions";


const logger = debug('exercise-types-view');

export class ExerciseTabularViewUsingContext extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'exerciseTypes',
            dataSourceId: VIEW_NAME.exerciseTypes,
        },
        resultsElementType: 'tr',
        resultsElementAttributes: [{name: 'href', value: '#'}],
        resultsClasses: '',
        keyId: '_id',
        keyType: KeyType.string,
        modifiers: {
            normal: 'table-primary',
            inactive: 'table-secondary',
            active: 'table-success',
            warning: 'table-danger'
        },
        icons: {
            normal: '',
            inactive: '',
            active: '',
            warning: ''
        },
        detail: {
            containerClasses: 'd-flex w-100 justify-content-between',
            textElementType: 'span',
            textElementClasses: 'mb-1',
            select: true,
            icons: (name: string, item: any) => {
                if (item.type) {
                    if (item.type === 'cardio') {
                        return ['fas fa-running ml-2'];
                    } else {
                        return ['fas fa-dumbbell ml-2'];
                    }
                }
                return [];
            },
            delete: {
                buttonClasses: 'btn bg-danger text-white btn-circle btn-md',
                iconClasses: 'text-black fas fa-trash-alt',
                attributes: [{name: 'data-toggle', value: "tooltip"}, {
                    name: 'data-placement',
                    value: "right"
                }, {name: 'title', value: "Delete this exercise type."}]
            },
            drag: {
                type: DRAGGABLE.typeExerciseType,
                from: DRAGGABLE.fromExerciseTypes
            }
        },
        extraActions: [{
            name: 'addToWorkout',
            buttonClasses: 'btn bg-primary text-white btn-circle btn-md mr-1',
            iconClasses: 'fas fa-arrow-alt-circle-right',
            attributes: [{name: 'data-toggle', value: "tooltip"}, {
                name: 'data-placement',
                value: "right"
            }, {name: 'data-html', value: 'true'}, {
                name: 'title',
                value: "Add this <strong>exercise</strong> to the current workout."
            }]
        }]
    };


    constructor(stateManager: StateManager) {
        super(ExerciseTabularViewUsingContext.DOMConfig, stateManager, STATE_NAMES.exerciseTypes);

        let exerciseTypeDef: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.exerciseTypes);
        if (exerciseTypeDef) {
            let displayOrders: DisplayOrder[] = [];
            displayOrders.push({fieldId: 'name', displayOrder: 1});
            displayOrders.push({fieldId: 'type', displayOrder: 2});
            displayOrders.push({fieldId: 'duration', displayOrder: 3});
            displayOrders.push({fieldId: 'sets', displayOrder: 4});
            displayOrders.push({fieldId: 'reps', displayOrder: 5});
            displayOrders.push({fieldId: 'weight', displayOrder: 6});
            displayOrders.push({fieldId: 'distance', displayOrder: 7});
            let tableUIConfig: TableUIConfig = BootstrapTableConfigHelper.getInstance().generateTableRowConfig(exerciseTypeDef, displayOrders, 1, true, true);
            // change the text alignment for the exercise type, duration, sets, reps, and weight
            tableUIConfig.headerColumns[1].element.elementClasses += ' text-center';
            tableUIConfig.columns[1].elementClasses += ' text-center';
            tableUIConfig.headerColumns[2].element.elementClasses += ' text-right';
            tableUIConfig.columns[2].elementClasses += ' text-right';
            tableUIConfig.headerColumns[3].element.elementClasses += ' text-right';
            tableUIConfig.columns[3].elementClasses += ' text-right';
            tableUIConfig.headerColumns[4].element.elementClasses += ' text-right';
            tableUIConfig.columns[4].elementClasses += ' text-right';
            tableUIConfig.headerColumns[5].element.elementClasses += ' text-right';
            tableUIConfig.columns[5].elementClasses += ' text-right';
            tableUIConfig.headerColumns[6].element.elementClasses += ' text-right';
            tableUIConfig.headerColumns[6].element.innerHTML += ' (km)';
            tableUIConfig.columns[6].elementClasses += ' text-right';

            this.renderer = new TabularViewRendererUsingContext(this, this, tableUIConfig);
            this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);
            this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
            this.getItemId = this.getItemId.bind(this);

            let context: ContextDefinition = ContextualInformationHelper.getInstance().addContextFromView(this, STATE_NAMES.exerciseTypes, 'Exercise Types');
            ContextualInformationHelper.getInstance().addActionToContext(context, 'addToWorkout', 'Add To Workout', this.eventHandlerDelegate.eventActionClicked, 'fas fa-arrow-alt-circle-right');
        }
    }


    getItemDescription(from: string, item: any): string {
        let buffer = '';
        buffer += '<strong>' + item.name + '</strong>: ';
        if (item.type === 'cardio') {
            buffer += item.distance + ' km in ' + item.duration;
        } else {
            buffer += item.sets + ' sets of ' + item.reps + ' reps in ' + item.duration;
        }
        buffer += '<br/>';
        return buffer;
    }


    canDeleteItem(view: View, selectedItem: any): boolean {
        logger(`Can Delete ${selectedItem}`);
        logger(selectedItem[FIELD_CreatedBy]);
        if (selectedItem[FIELD_CreatedBy]) {
            if (selectedItem[FIELD_CreatedBy] === Controller.getInstance().getLoggedInUsername()) {
                return true;
            }
        }
        return false;
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }

    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        containerEl.innerHTML = item.name;
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        logger(`Has delete permission ${item}`);
        logger(item[FIELD_CreatedBy]);
        if (item[FIELD_CreatedBy]) {
            if (item[FIELD_CreatedBy] === Controller.getInstance().getLoggedInUsername()) {
                return true;
            }
        }
        return false;
    }

    itemAction(view: View, actionName: string, selectedItem: any) {
        super.itemAction(view, actionName, selectedItem);
        // @ts-ignore
        if (actionName === ExerciseTabularViewUsingContext.DOMConfig.extraActions[0].name) {
            // add the exercise type the current workout
            Controller.getInstance().addExerciseToCurrentWorkout(selectedItem);
        }
    }

    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        if (item.type) {
            if (item.type === 'cardio') {
                return Modifier.warning;
            } else {
                return Modifier.inactive;
            }
        }
        return Modifier.normal
    }


}

