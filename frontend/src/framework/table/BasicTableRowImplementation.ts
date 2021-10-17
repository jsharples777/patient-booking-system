import debug from 'debug';
import {
    DataObjectDefinition,
    DefaultItemView,
    Field,
    FieldDefinition,
    ItemFactoryResponse,
    ItemViewConfigHelper,
    ItemViewElementFactory,
    ValidatableView,
    ViewFieldPermissionChecker
} from "ui-framework-jps";


const logger = debug('basic-table-row');
const dlogger = debug('basic-table-row-detail');

export class BasicTableRowImplementation extends DefaultItemView {
    protected idField:string;


    public constructor(idField:string, containerId: string, dataObjDef: DataObjectDefinition, configHelper: ItemViewConfigHelper, permissionChecker: ViewFieldPermissionChecker, hasExternalControl: boolean = false) {
        super(containerId, dataObjDef, configHelper, permissionChecker, hasExternalControl);
        this.idField = idField;

        this.__buildUIElements = this.__buildUIElements.bind(this);
        this.__getFactoryElements = this.__getFactoryElements.bind(this);
        this.__preDisplayCurrentDataObject = this.__preDisplayCurrentDataObject.bind(this);
    }

    protected __buildUIElements() {
        // do nothing here, we build our ui element just before display
        console.log('not building');
        logger(`not loading ui elements yet, awaiting object`);
    }

    protected __getFactoryElements(): ItemFactoryResponse {
        return ItemViewElementFactory.getInstance().createTableRowElements(this.id,this, this.listeners,this.uiDef,this.fieldListeners);
    }

    protected buildTableRowElements() {
        logger(`loading ui elements now using the super class`);
        super.__buildUIElements();
        logger(`Add ourselves to the container`);
        super._visible();

    }


    protected __preDisplayCurrentDataObject(dataObj: any) {
        console.log(dataObj);
        this.id = dataObj[this.idField];
        logger(`pre-display data object id is ${this.id}`);
        this.buildTableRowElements();
    }

    valueChanged(view: ValidatableView, field: Field, fieldDef: FieldDefinition, newValue: string | null): void {
        super.valueChanged(view, field, fieldDef,newValue);
        logger(`values has changed - attempting save`);
    }

    getRowElement():HTMLTableRowElement|null {
        return <HTMLTableRowElement>this.factoryElements.top;
    }
}