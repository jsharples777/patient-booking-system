import {STATE_NAMES, UsersSidebarContainers, VIEW_NAME} from "../AppTypes";

import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    BootstrapTableConfigHelper,
    CollectionViewDOMConfig,
    CollectionViewEventHandlerDelegateUsingContext,
    CollectionViewListener,
    CollectionViewListenerForwarder,
    ContextualInformationHelper,
    DataObjectDefinition,
    DisplayOrder,
    isSameMongo,
    KeyType,
    Modifier,
    ObjectDefinitionRegistry,
    StateManager,
    TableUIConfig,
    TabularViewRendererUsingContext,
    View
} from "ui-framework-jps";


const logger = debug('users-view');

export class UsersCollectionView extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: UsersSidebarContainers.list,
            dataSourceId: VIEW_NAME.users,
        },
        resultsElement: {
            type: 'tr',
            attributes: [{name: 'href', value: '#'}],
            classes: '',
        },
        keyId: '_id',
        keyType: KeyType.string,
        modifiers: {
            normal: '',
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
            textElement: {
                type: 'span',
                classes: 'mb-1',
            },
            select: true,
            icons: (name: string, item: any) => {
                const results: string[] = [];

                if (item.isAdmin) {
                    results.push("fas fa-user-cog");
                }
                if (item.isProvider) {
                    results.push("fas fa-user-md");
                }


                return results;
            },
        },
        sorter: UsersCollectionView.sortUsers
    };

    constructor(stateManager: StateManager) {
        super(UsersCollectionView.DOMConfig, stateManager, STATE_NAMES.users);

        const userDef: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.users);
        if (userDef) {
            const displayOrders: DisplayOrder[] = [];
            displayOrders.push({fieldId: 'username', displayOrder: 1});
            displayOrders.push({fieldId: 'isCurrent', displayOrder: 2});
            displayOrders.push({fieldId: 'isAdmin', displayOrder: 3});
            displayOrders.push({fieldId: 'isProvider', displayOrder: 4});
            displayOrders.push({fieldId: 'providerNo', displayOrder: 5});

            const tableUIConfig: TableUIConfig = BootstrapTableConfigHelper.getInstance().generateTableConfig(userDef, displayOrders, 1, false, true);

            tableUIConfig.headerColumns[1].element.classes += ' text-center';
            tableUIConfig.headerColumns[2].element.classes += ' text-center';
            tableUIConfig.headerColumns[3].element.classes += ' text-center';
            tableUIConfig.headerColumns[4].element.classes += ' text-center';

            this.renderer = new TabularViewRendererUsingContext(this, this, tableUIConfig);
            this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);
            this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
            this.getItemId = this.getItemId.bind(this);

            ContextualInformationHelper.getInstance().addContextFromView(this, STATE_NAMES.users, 'Users');

        }
    }

    private static sortUsers(item1: any, item2: any) {
        let result = -1;
        if (item1.username > item2.username) result = 1;
        return result;
    }

    getItemDescription(from: string, item: any): string {
        let buffer = '';
        buffer += `<strong style="text-colour:${item.colour}">` + item.username + '</strong> ';
        buffer += '<br/>';
        return buffer;
    }


    canDeleteItem(view: View, selectedItem: any): boolean {
        logger(`Can Delete ${selectedItem}`);
        return false;
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }

    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        containerEl.innerHTML = item.username;
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        logger(`Has delete permission ${item}`);
        return false;
    }


    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        if (item.isCurrent) {
            return Modifier.normal;
        }
        return Modifier.inactive
    }


}

