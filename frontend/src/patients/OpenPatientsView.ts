import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    CollectionViewDOMConfig, ContextualInformationHelper,
    isSameMongo,
    KeyType,
    ListViewRenderer, ListViewRendererUsingContext, MemoryBufferStateManager,
    Modifier,
    StateManager,
    View
} from "ui-framework-jps";
import {Decorator, DRAGGABLE, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";


const vLogger = debug('open-patients');
const vLoggerDetail = debug('open-patients-details');

export class OpenPatientsView extends AbstractStatefulCollectionView {
    private static _instance: OpenPatientsView;

    public static getInstance(): OpenPatientsView {
        if (!(OpenPatientsView._instance)) {
            OpenPatientsView._instance = new OpenPatientsView();
        }
        return OpenPatientsView._instance;
    }

    static ACTION_CLOSE = 'Close Record';
    static ACTION_SAVE = 'Save';

    static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'openPatientRecords',
            dataSourceId: VIEW_NAME.openPatients,
            drop: {
                acceptFrom: [DRAGGABLE.fromUserSearch],
                acceptTypes: [DRAGGABLE.typePatientSummary]
            }
        },
        resultsElement: {
            type: 'a',
            attributes: [{name: 'href', value: '#'}],
            classes: 'list-group-item my-list-item truncate-notification list-group-item-action',
        },
        keyId: '_id',
        keyType: KeyType.string,
        modifiers: {
            normal: 'list-group-item-light',
            inactive: 'list-group-item-light',
            active: 'list-group-item-info',
            warning: 'list-group-item-danger'
        },
        icons: {
            normal: '',
            inactive: '',
            active: '',
            warning: 'fas fa-exclamation-circle'
        },
        detail: {
            containerClasses: 'd-flex w-100 justify-content-between',
            textElement: {
                classes: 'mb-1',
                type: 'span',
            },
            select: true,
        },
        extraActions: [
            {
                name: OpenPatientsView.ACTION_SAVE,
                button: {
                    classes: 'btn bg-primary text-white btn-circle btn-sm mr-1',
                    iconClasses: 'fas fa-save'
                },
                confirm:false
            },
            {
                name: OpenPatientsView.ACTION_CLOSE,
                button: {
                    classes: 'btn bg-warning text-white btn-circle btn-sm mr-1',
                    iconClasses: 'fas fa-door-closed'
                },
                confirm:true
            },

        ]
        
    };

    protected localisedSM: StateManager;

    constructor() {
        super(OpenPatientsView.DOMConfig, Controller.getInstance().getStateManager(), STATE_NAMES.patients);
        OpenPatientsView._instance = this;

        this.renderer = new ListViewRendererUsingContext(this, this);

        this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);

        // register state change listening
        this.localisedSM = new MemoryBufferStateManager(isSameMongo);
        this.localisedSM.addChangeListenerForName(STATE_NAMES.openPatients, this);

        ContextualInformationHelper.getInstance().addContextFromView(this, STATE_NAMES.patients, 'Open Patient Records');

    }

    updateViewForNamedCollection(name: string, newState: any) {
        if (name === STATE_NAMES.openPatients) {
            super.updateViewForNamedCollection('',newState);
        }

    }


    onDocumentLoaded() {
        super.onDocumentLoaded();
        super.updateViewForNamedCollection(STATE_NAMES.openPatients, this.localisedSM.getStateByName(STATE_NAMES.openPatients));
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }


    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        containerEl.innerHTML = `${item.name.firstname} ${item.name.surname}`;
    }

    getModifierForItemInNamedCollection(name: string, item: any) {
        let result = Modifier.normal;
        vLoggerDetail(`Checking for item modifiers`);
        vLoggerDetail(item);
        if ((item.decorator) && (item.decerator === Decorator.Modified)) result = Modifier.warning;
        return result;
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any): Modifier {
        return Modifier.normal;
    }


    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    itemAction(view: View, actionName: string, selectedItem: any) {
        vLoggerDetail(selectedItem);
        if (actionName === OpenPatientsView.ACTION_CLOSE) {
            vLogger(`open patient ${selectedItem.firstname} with id ${selectedItem.id} closing - removing`);
            this.localisedSM.removeItemFromState(STATE_NAMES.openPatients, selectedItem, true);
        }
        else {
            vLogger(`saving patient ${selectedItem.firstname} with id ${selectedItem.id}`);
            selectedItem.decorator = Decorator.Complete;
            this.localisedSM.updateItemInState(STATE_NAMES.openPatients, selectedItem, true);
            let patientRecord = JSON.parse(JSON.stringify(selectedItem));
            delete patientRecord.decorator;
            Controller.getInstance().getStateManager().updateItemInState(STATE_NAMES.patients,patientRecord,false);
        }
    }


}

