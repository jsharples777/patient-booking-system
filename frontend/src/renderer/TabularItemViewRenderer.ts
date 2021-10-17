
import debug from "debug";
import {
    CollectionView,
    CollectionViewDOMConfig,
    CollectionViewEventHandler,
    CollectionViewRenderer,
    ContextualInformationHelper,
    DataObjectDefinition, DefaultFieldPermissionChecker,
    FieldType,
    ItemViewConfigHelper,
    Modifier,
    ObjectDefinitionRegistry,
    TableUIConfig, ViewFieldPermissionChecker
} from "ui-framework-jps";
import {EXTRA_ACTION_ATTRIBUTE_NAME} from "ui-framework-jps/dist/framework/ui/ConfigurationTypes";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {BasicTableRowImplementation} from "../framework/table/BasicTableRowImplementation";


const logger = debug('tabular-view-renderer-with-context');

export class TabularItemViewRenderer implements CollectionViewRenderer {
    protected view: CollectionView;
    protected eventHandler: CollectionViewEventHandler;
    protected tableConfig: TableUIConfig;
    protected tableRowViews: BasicTableRowImplementation[] = [];
    protected dataObjDef:DataObjectDefinition|null = null;
    protected idField:string|null;
    protected configHelper:ItemViewConfigHelper;
    protected permissionCheck:ViewFieldPermissionChecker;

    constructor(view: CollectionView, eventHandler: CollectionViewEventHandler, tableConfig: TableUIConfig,configHelper:ItemViewConfigHelper,permissionCheck:ViewFieldPermissionChecker|null = new DefaultFieldPermissionChecker()) {
        this.view = view;
        this.eventHandler = eventHandler;
        this.tableConfig = tableConfig;
        this.configHelper = configHelper;
        this.permissionCheck = permissionCheck;
    }


    public createDisplayElementForCollectionItem(collectionName: string, item: any): HTMLElement {
        let result = document.createElement('tr');
        if (this.dataObjDef && this.idField) {
            let rowView = new BasicTableRowImplementation(this.idField, this.view.getCollectionUIConfig().viewConfig.resultsContainerId, this.dataObjDef, this.configHelper, this.permissionCheck, false);
            rowView.startUpdate(item);
            this.tableRowViews.push(rowView);
            result = rowView.getRowElement();
        }
        return result;
    }

    onDocumentLoaded(): void {
    }

    public setDisplayElementsForCollectionInContainer(containerEl: HTMLElement, collectionName: string, newState: any): void {
        if (this.dataObjDef) {
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
        let tableEl = document.createElement(this.tableConfig.table.type);
        browserUtil.addRemoveClasses(tableEl, this.tableConfig.table.classes);
        browserUtil.addAttributes(tableEl, this.tableConfig.table.attributes);

        // create the headers
        let tableHeaderEl = document.createElement(this.tableConfig.header.type);
        browserUtil.addRemoveClasses(tableHeaderEl, this.tableConfig.header.classes);
        browserUtil.addAttributes(tableHeaderEl, this.tableConfig.header.attributes);


        // create the column headers
        this.tableConfig.headerColumns.forEach((header) => {
            let thEl = document.createElement(header.element.type);
            browserUtil.addRemoveClasses(thEl, header.element.classes);
            browserUtil.addAttributes(thEl, header.element.attributes);
            if (header.element.innerHTML) thEl.innerHTML = header.element.innerHTML;
            tableHeaderEl.appendChild(thEl);
        });

        // create the action column header (if one)
        if (this.tableConfig.actionColumn) {
            let thEl = document.createElement(this.tableConfig.actionColumn.element.type);
            browserUtil.addRemoveClasses(thEl, this.tableConfig.actionColumn.element.classes);
            browserUtil.addAttributes(thEl, this.tableConfig.actionColumn.element.attributes);
            if (this.tableConfig.actionColumn.element.innerHTML) thEl.innerHTML = this.tableConfig.actionColumn.element.innerHTML;
            tableHeaderEl.appendChild(thEl);
        }
        tableEl.appendChild(tableHeaderEl);


        // create the table body
        let tableBodyEl = document.createElement(this.tableConfig.body.type);
        browserUtil.addRemoveClasses(tableBodyEl, this.tableConfig.body.classes);
        browserUtil.addAttributes(tableBodyEl, this.tableConfig.body.attributes);

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

        tableEl.appendChild(tableBodyEl);
        containerEl.appendChild(tableEl);
    }
}