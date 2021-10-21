import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    CollectionViewDOMConfig,
    CollectionViewEventHandlerDelegateUsingContext,
    CollectionViewListenerForwarder,
    ContextualInformationHelper,
    isSameMongo,
    KeyType,
    ListViewRenderer,
    ListViewRendererUsingContext,
    MemoryBufferStateManager,
    Modifier,
    StateManager,
    View
} from "ui-framework-jps";
import {Decorator, DRAGGABLE, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";
import {PatientController} from "./PatientController";



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
                acceptFrom: [DRAGGABLE.fromPatientSearch],
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

        ],
        sorter: OpenPatientsView.sortPatients
        
    };

    private static sortPatients(item1: any, item2: any) {
        let result = -1;
        if (item1.name > item2.name) result = 1;
        return result;
    }

    constructor() {
        super(OpenPatientsView.DOMConfig, PatientController.getInstance().getStateManager(), STATE_NAMES.openPatients);
        OpenPatientsView._instance = this;

        this.renderer = new ListViewRendererUsingContext(this, this);
        this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);


        this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
        this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
        this.getItemInNamedCollection = this.getItemInNamedCollection.bind(this);
        this.getItemId = this.getItemId.bind(this);

        ContextualInformationHelper.getInstance().addContextFromView(this, STATE_NAMES.openPatients, 'Open Patient Records');

    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }

    public getItemInNamedCollection(name: string, compareWith: any): any {
        console.log(name);
        console.log(compareWith);
        let result = this.stateManager.findItemInState(name, compareWith);
        console.log(result);
        return result;
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





}

