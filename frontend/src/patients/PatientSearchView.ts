import debug from 'debug';
import {
    AbstractStatefulCollectionView, BrowserStorageStateManager,
    CollectionViewDOMConfig,
    KeyType,
    ListViewRenderer, Modifier,
    StateManager, View
} from "ui-framework-jps";
import {DRAGGABLE, STATE_NAMES, VIEW_NAME} from "../AppTypes";
import {isSameMongo} from "../EqualityFunctions";
import Controller from "../Controller";


const vLogger = debug('user-search');
const vLoggerDetail = debug('user-search-detail');

export class PatientSearchView extends AbstractStatefulCollectionView  {
    static fastSearchInputId: string = 'fastSearchUserNames';
    static dataLimit: number = 10;
    static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'recentUserSearches',
            dataSourceId: VIEW_NAME.patientSearch,
        },
        resultsElementType: 'a',
        resultsElementAttributes: [{name: 'href', value: '#'}],
        resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
        keyId: '_id',
        keyType: KeyType.string,
        modifiers: {
            normal: 'list-group-item-primary',
            inactive: 'list-group-item-light',
            active: 'list-group-item-info',
            warning: 'list-group-item-danger'
        },
        icons: {
            normal: 'fas fa-comment',
            inactive: 'fas fa-comment',
            active: 'fas fa-heart',
            warning: 'fas fa-exclamation-circle'
        },
        detail: {
            containerClasses: 'd-flex w-100 justify-content-between',
            textElementType: 'span',
            textElementClasses: 'mb-1',
            select: true,
            quickDelete: true,
            delete: {
                buttonClasses: 'btn bg-danger text-white btn-circle btn-sm',
                iconClasses: 'fas fa-trash-alt',
            },
            drag: {
                type: DRAGGABLE.typePatientSummary,
                from: DRAGGABLE.fromPatientSearch
            },
        },
    };
    protected loggedInUsers: string[];
    protected localisedSM: StateManager;

    constructor(stateManager: StateManager) {
        super(PatientSearchView.DOMConfig, stateManager, STATE_NAMES.patientSearch);

        this.loggedInUsers = [];

        this.renderer = new ListViewRenderer(this, this);


        // handler binding
        this.updateViewForNamedCollection = this.updateViewForNamedCollection.bind(this);
        this.eventUserSelected = this.eventUserSelected.bind(this);

        this.itemDeleted = this.itemDeleted.bind(this);

        // register state change listening
        this.localisedSM = new BrowserStorageStateManager(true,false,isSameMongo);
        this.localisedSM.addChangeListenerForName(STATE_NAMES.recentPatientSearches, this);

        vLogger(this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches));

    }



    onDocumentLoaded() {
        super.onDocumentLoaded();
        // @ts-ignore
        const fastSearchEl = $(`#${UserSearchView.fastSearchInputId}`);
        // @ts-ignore
        fastSearchEl.on('autocompleteselect', this.eventUserSelected);

    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }


    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        containerEl.innerHTML = item.username;
    }

    getModifierForItemInNamedCollection(name: string, item: any) {
        let result = Modifier.normal;
        vLoggerDetail(`Checking for item modifiers`);
        vLoggerDetail(item);
        return result;
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any) {
        let result = Modifier.normal;
        vLoggerDetail(`Checking for item secondary modifiers ${item.username}`);
        return result;
    }


    eventUserSelected(event: Event, ui: any) {
        event.preventDefault();
        event.stopPropagation();
        vLogger(`User ${ui.item.label} with id ${ui.item.value} selected`);
        // @ts-ignore
        event.target.innerText = '';

        // add the selected user to the recent user searches
        if (this.localisedSM.isItemInState(STATE_NAMES.recentUserSearches, {_id: ui.item.value})) return;

        const recentUserSearches = this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches);
        vLogger(`saved searches too long? ${STATE_NAMES.recentUserSearches}`);
        if (recentUserSearches.length >= PatientSearchView.dataLimit) {
            vLogger('saved searches too long - removing first');
            // remove the first item from recent searches
            const item = recentUserSearches.shift();
            this.localisedSM.removeItemFromState(STATE_NAMES.recentPatientSearches, item, true);
        }
        // save the searches
        this.localisedSM.addNewItemToState(STATE_NAMES.recentPatientSearches, {
            _id: ui.item.value,
            username: ui.item.label
        }, true);
    }


    updateViewForNamedCollection(name: string, newState: any) {
        if (name === STATE_NAMES.recentPatientSearches) {
            vLogger(`Updating for recent searches`);
            newState = this.localisedSM.getStateByName(STATE_NAMES.recentPatientSearches);
            vLogger(newState);
            super.updateViewForNamedCollection(name, newState);
        }
        if (name === STATE_NAMES.patientSearch) {
            // load the search names into the search field
            // what is my username?
            let myUsername = Controller.getInstance().getLoggedInUsername();
            // @ts-ignore
            const fastSearchEl = $(`#${PatientSearchView.fastSearchInputId}`);
            // for each name, construct the patient details to display and the id referenced
            const fastSearchValues: any = [];
            newState.forEach((item: any) => {
                const searchValue = {
                    label: item.username,
                    value: item._id,
                };
                if (myUsername !== item.username) fastSearchValues.push(searchValue); // don't search for ourselves
            });
            fastSearchEl.autocomplete({source: fastSearchValues});
            fastSearchEl.autocomplete('option', {disabled: false, minLength: 1});
        }
    }


    itemAction(view: View, actionName: string, selectedItem: any): void {
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    itemDeleted(view: View, selectedItem: any): void {
        vLoggerDetail(selectedItem);
        vLogger(`Recent search user ${selectedItem.username} with id ${selectedItem.id} deleted - removing`);
        this.localisedSM.removeItemFromState(STATE_NAMES.recentPatientSearches, selectedItem, true);
    }


    itemSelected(view: View, selectedItem: any): void {
    }


}

