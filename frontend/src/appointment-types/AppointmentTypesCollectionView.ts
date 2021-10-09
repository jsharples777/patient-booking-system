import {AppointmentTypesSidebarContainers, STATE_NAMES, VIEW_NAME} from "../AppTypes";

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


const logger = debug('appointment-types-view');

export class AppointmentTypesCollectionView extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: AppointmentTypesSidebarContainers.list,
            dataSourceId: VIEW_NAME.appointmentTypes,
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
                if (item.icon) {
                    return [item.icon];
                }
                return [];
            },
        },
        sorter: AppointmentTypesCollectionView.sortAppointmentTypes
    };

    constructor(stateManager: StateManager) {
        super(AppointmentTypesCollectionView.DOMConfig, stateManager, STATE_NAMES.appointmentTypes);

        let apptTypeDef: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.appointmentTypes);
        if (apptTypeDef) {
            let displayOrders: DisplayOrder[] = [];
            displayOrders.push({fieldId: 'name', displayOrder: 1});
            displayOrders.push({fieldId: 'colour', displayOrder: 2});
            displayOrders.push({fieldId: 'icon', displayOrder: 3});
            //displayOrders.push({ fieldId:'isStatus',displayOrder:4});
            let tableUIConfig: TableUIConfig = BootstrapTableConfigHelper.getInstance().generateTableRowConfig(apptTypeDef, displayOrders, 1, false, true);
            // tableUIConfig.headerColumns[0].element.classes += ' text-center';
            tableUIConfig.headerColumns[1].element.classes += ' text-center';
            tableUIConfig.headerColumns[2].element.classes += ' text-center';

            this.renderer = new TabularViewRendererUsingContext(this, this, tableUIConfig);
            //this.renderer = new ListViewRendererUsingContext(this,this);
            this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);
            this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
            this.getItemId = this.getItemId.bind(this);

            ContextualInformationHelper.getInstance().addContextFromView(this, STATE_NAMES.appointmentTypes, 'Appointment Types');

        }
    }

    private static sortAppointmentTypes(item1: any, item2: any) {
        let result = -1;
        if (item1.name > item2.name) result = 1;
        return result;
    }

    getItemDescription(from: string, item: any): string {
        let buffer = '';
        buffer += `<strong style="text-colour:${item.colour}">` + item.name + '</strong> ';
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
        containerEl.innerHTML = item.name;
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        logger(`Has delete permission ${item}`);
        return false;
    }


    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        if (item.isStatus) {
            return Modifier.inactive;
        }
        return Modifier.normal
    }


}

