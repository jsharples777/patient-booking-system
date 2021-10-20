import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    BrowserStorageStateManager,
    CollectionViewDOMConfig,
    isSameMongo,
    KeyType,
    ListViewRenderer,
    Modifier,
    StateManager,
    View
} from "ui-framework-jps";
import {DRAGGABLE, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";


const vLogger = debug('patient-search');
const vLoggerDetail = debug('patient-search-detail');

export class PatientSearchView extends AbstractStatefulCollectionView {
    static fastSearchInputId = 'fastPatientSearch';
    static dataLimit = 20;
    static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'recentPatientSearches',
            dataSourceId: VIEW_NAME.patientSearch,
        },
        resultsElement: {
            type: 'a',
            attributes: [{name: 'href', value: '#'}],
            classes: 'list-group-item my-list-item truncate-notification list-group-item-action',
        },
        keyId: '_id',
        keyType: KeyType.string,
        modifiers: {
            normal: 'list-group-item-primary',
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
            quickDelete: true,
            delete: {
                classes: 'btn bg-danger text-white btn-circle btn-sm',
                iconClasses: 'fas fa-trash-alt',
            },
            drag: {
                type: DRAGGABLE.typePatientSummary,
                from: DRAGGABLE.fromPatientSearch
            },
        },
    };
    protected localisedSM: StateManager;

    constructor(stateManager: StateManager) {
        super(PatientSearchView.DOMConfig, stateManager, STATE_NAMES.patientSearch);

        this.renderer = new ListViewRenderer(this, this);


        // handler binding
        this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
        this.eventPatientSelected = this.eventPatientSelected.bind(this);
        this.itemDeleted = this.itemDeleted.bind(this);

        // register state change listening
        this.localisedSM = new BrowserStorageStateManager(true, true, isSameMongo);
        this.localisedSM.addChangeListenerForName(STATE_NAMES.recentPatientSearches, this);

    }


    onDocumentLoaded() {
        super.onDocumentLoaded();
        const fastSearchEl = $(`#${PatientSearchView.fastSearchInputId}`);
        // @ts-ignore
        fastSearchEl.on('autocompleteselect', this.eventPatientSelected);

        super.updateViewForNamedCollection(STATE_NAMES.patientSearch, this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches));

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
        if (item.flags.isInactive) result = Modifier.inactive;
        return result;
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any): Modifier {
        let result = Modifier.normal;
        if (item.flags.hasWarnings) result = Modifier.warning;
        return result;

    }


    eventPatientSelected(event: Event, ui: any) {
        event.preventDefault();
        event.stopPropagation();
        vLogger(`User ${ui.item.label} with id ${ui.item.value} selected`);
        // @ts-ignore
        event.target.innerText = '';

        // add the selected user to the recent user searches
        if (this.localisedSM.isItemInState(STATE_NAMES.recentPatientSearches, {_id: ui.item.value})) return;

        const recentUserSearches = this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches);
        vLogger(`saved searches too long? ${STATE_NAMES.recentPatientSearches}`);
        if (recentUserSearches.length >= PatientSearchView.dataLimit) {
            vLogger('saved searches too long - removing first');
            // remove the first item from recent searches
            const item = recentUserSearches.shift();
            this.localisedSM.removeItemFromState(STATE_NAMES.recentPatientSearches, item, true);
        }

        const patient = Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientSearch, {_id: ui.item.value});
        // save the searches
        this.localisedSM.addNewItemToState(STATE_NAMES.recentPatientSearches, patient, true);
    }


    updateViewForNamedCollection(name: string, newState: any) {
        if (name === STATE_NAMES.recentPatientSearches) {
            vLogger(`Updating for recent searches`);
            newState = this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches);
            vLogger(newState);
            super.updateViewForNamedCollection(name, newState);
        }
        if (name === STATE_NAMES.patientSearch) {
            vLogger(`Handling patient search results`);
            vLogger(newState);
            // load the search names into the search field
            const fastSearchEl = $(`#${PatientSearchView.fastSearchInputId}`);
            // for each name, construct the patient details to display and the id referenced
            const fastSearchValues: any = [];
            newState.forEach((item: any) => {
                const searchValue = {
                    label: `${item.name.firstname} ${item.name.surname}`,
                    value: item._id,
                };
                fastSearchValues.push(searchValue);
            });
            fastSearchEl.autocomplete({source: fastSearchValues});
            fastSearchEl.autocomplete('option', {disabled: false, minLength: 1});
        }
    }


    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    itemDeleted(view: View, selectedItem: any): void {
        vLoggerDetail(selectedItem);
        vLogger(`Recent search patient ${selectedItem.firstname} with id ${selectedItem.id} deleted - removing`);
        this.localisedSM.removeItemFromState(STATE_NAMES.recentPatientSearches, selectedItem, true);
    }


}

