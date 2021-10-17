
import debug from 'debug';
import {
    DefaultItemView,
    AttributeFieldMapItem,
    ColourInputField,
    DATA_ID_ATTRIBUTE,
    DataObjectDefinition,
    DisplayOrder,
    Field,
    FieldDefinition,
    FieldType,
    FieldUIConfig,
    InputField,
    ItemViewConfigHelper,
    ItemViewElementFactory,
    RadioButtonGroupField,
    SelectField,
    TextAreaField,
    UIFieldType,
    ViewFieldPermissionChecker, ItemFactoryResponse, ValidatableView
} from "ui-framework-jps";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {FormUIDefinition} from "ui-framework-jps/dist/framework/ui/form/FormUITypeDefs";


const logger = debug('basic-table-row');
const dlogger = debug('basic-table-row-detail');

export class BasicTableRowImplementation extends DefaultItemView {
    protected idField:string;


    public constructor(idField:string, containerId: string, dataObjDef: DataObjectDefinition, configHelper: ItemViewConfigHelper, permissionChecker: ViewFieldPermissionChecker, hasExternalControl: boolean = false) {
        super(containerId, dataObjDef, configHelper, permissionChecker, hasExternalControl);
        this.idField = idField;
    }

    protected __buildUIElements() {
        // do nothing here, we build our ui element just before display
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