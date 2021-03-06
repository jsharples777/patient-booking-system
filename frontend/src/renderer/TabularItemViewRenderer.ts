import debug from "debug";
import {
    BasicTableRowImplementation,
    CollectionView,
    CollectionViewEventHandler,
    CollectionViewRenderer,
    ContextualInformationHelper,
    DataObjectDefinition,
    DefaultFieldPermissionChecker,
    DisplayOrder,
    ItemViewConfigHelper,
    ObjectDefinitionRegistry,
    TableUIConfig,
    ViewFieldPermissionChecker
} from "ui-framework-jps";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {v4} from "uuid";


const logger = debug('tabular-item-view-renderer');

export class TabularItemViewRenderer implements CollectionViewRenderer {
    protected view: CollectionView;
    protected eventHandler: CollectionViewEventHandler;
    protected tableConfig: TableUIConfig;
    protected tableRowViews: BasicTableRowImplementation[] = [];
    protected dataObjDef: DataObjectDefinition | null = null;
    protected idField: string | null;
    protected configHelper: ItemViewConfigHelper;
    protected permissionCheck: ViewFieldPermissionChecker;
    private displayOrders: DisplayOrder[];
    private tableBodyId: string;

    constructor(view: CollectionView, eventHandler: CollectionViewEventHandler, tableConfig: TableUIConfig, displayOrders: DisplayOrder[], configHelper: ItemViewConfigHelper, permissionCheck: ViewFieldPermissionChecker | null = new DefaultFieldPermissionChecker()) {
        this.view = view;
        this.eventHandler = eventHandler;
        this.tableConfig = tableConfig;
        this.configHelper = configHelper;
        this.permissionCheck = permissionCheck;
        this.displayOrders = displayOrders;
    }


    public createDisplayElementForCollectionItem(collectionName: string, item: any): HTMLElement {
        let result = document.createElement('tr');
        if (this.dataObjDef && this.idField) {
            const rowView = new BasicTableRowImplementation(this.idField, this.tableBodyId, this.dataObjDef, this.configHelper, this.permissionCheck, false);
            rowView.initialise(this.displayOrders, false, true);
            rowView.startUpdate(item);
            this.tableRowViews.push(rowView);
            result = rowView.getRowElement();
        }
        return result;
    }

    onDocumentLoaded(): void {
    }

    public setDisplayElementsForCollectionInContainer(containerEl: HTMLElement, collectionName: string, newState: any): void {
        if (!(this.dataObjDef)) {
            this.dataObjDef = ObjectDefinitionRegistry.getInstance().findDefinition(collectionName);
            if (this.dataObjDef) {
                // find the key field
                this.dataObjDef.fields.forEach((field) => {
                    if (field.isKey) {
                        this.idField = field.id;
                    }
                });
            }

        }
        logger(`view ${this.view.getName()}: creating Results`);
        logger(newState);
        // remove the previous items from list
        this.tableRowViews.forEach((view) => {
            view.setIsVisible(false);
        });

        browserUtil.removeAllChildren(containerEl);


        // create the table
        const tableEl = document.createElement(this.tableConfig.table.type);
        browserUtil.addRemoveClasses(tableEl, this.tableConfig.table.classes);
        browserUtil.addAttributes(tableEl, this.tableConfig.table.attributes);

        // create the headers
        const tableHeaderEl = document.createElement(this.tableConfig.header.type);
        browserUtil.addRemoveClasses(tableHeaderEl, this.tableConfig.header.classes);
        browserUtil.addAttributes(tableHeaderEl, this.tableConfig.header.attributes);


        // create the column headers
        this.tableConfig.headerColumns.forEach((header) => {
            const thEl = document.createElement(header.element.type);
            browserUtil.addRemoveClasses(thEl, header.element.classes);
            browserUtil.addAttributes(thEl, header.element.attributes);
            if (header.element.innerHTML) thEl.innerHTML = header.element.innerHTML;
            tableHeaderEl.appendChild(thEl);
        });

        // create the action column header (if one)
        if (this.tableConfig.actionColumn) {
            const thEl = document.createElement(this.tableConfig.actionColumn.element.type);
            browserUtil.addRemoveClasses(thEl, this.tableConfig.actionColumn.element.classes);
            browserUtil.addAttributes(thEl, this.tableConfig.actionColumn.element.attributes);
            if (this.tableConfig.actionColumn.element.innerHTML) thEl.innerHTML = this.tableConfig.actionColumn.element.innerHTML;
            tableHeaderEl.appendChild(thEl);
        }
        tableEl.appendChild(tableHeaderEl);


        // create the table body
        const tableBodyEl = document.createElement(this.tableConfig.body.type);
        this.tableBodyId = v4();
        browserUtil.addRemoveClasses(tableBodyEl, this.tableConfig.body.classes);
        browserUtil.addAttributes(tableBodyEl, this.tableConfig.body.attributes);
        browserUtil.addAttributes(tableBodyEl, [{name: 'id', value: this.tableBodyId}]);
        tableEl.appendChild(tableBodyEl);
        containerEl.appendChild(tableEl);

        // add the new children
        newState.map((item: any, index: number) => {
            const childEl = this.createDisplayElementForCollectionItem(collectionName, item);
            // add draggable actions
            logger(`view ${this.view.getName()}:  Adding child ${this.view.getIdForItemInNamedCollection(collectionName, item)}`);
            //tableBodyEl.appendChild(childEl);

            ContextualInformationHelper.getInstance().addContextToElement(this.view.getName(), collectionName, item, childEl, true);
            childEl.addEventListener('contextmenu', ContextualInformationHelper.getInstance().handleContextMenu);
        });
        $('[data-toggle="tooltip"]').tooltip();

    }
}
