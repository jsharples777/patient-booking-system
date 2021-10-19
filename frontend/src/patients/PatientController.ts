import {
    BasicObjectDefinitionFactory,
    DataObjectDefinition, FieldType, isSameMongo, MemoryBufferStateManager,
    ObjectDefinitionRegistry, SimpleValueDataSource, StateChangeListener,
    StateManager
} from "ui-framework-jps";
import {STATE_NAMES} from "../AppTypes";
import debug from 'debug';
import Controller from "../Controller";

const logger = debug('patient-controller');

export class PatientController implements StateChangeListener{
    private static _instance: PatientController;
    private stateManager: StateManager;

    private constructor() {
        this.stateManager = new MemoryBufferStateManager(isSameMongo);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patients,this);
    }

    public getStateManager() {
        return this.stateManager;
    }

    public static getInstance(): PatientController {
        if (!(PatientController._instance)) {
            PatientController._instance = new PatientController();
        }
        return PatientController._instance;
    }

    public openPatientRecord(patientId:string):void {
        logger(`Handling opening patient record`);
    }



    public onDocumentLoaded():void {
        // Patient name details
        let nameDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.name, 'Name', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "title", "Title", FieldType.choice, false, "Name",new SimpleValueDataSource([
            {name:'',value:''},
            {name:'Master',value:'master'},
            {name:'Miss',value:'miss'},
            {name:'Ms',value:'ms'},
            {name:'Mr',value:'mr'},
            {name:'Mrs',value:'mrs'}
        ]));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "firstname", "First Name", FieldType.text, true, "First name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "middlename", "Middle Name", FieldType.text, false, "Middle name(s)");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "surname", "Surname", FieldType.text, true, "Surname");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "aka", "AKA", FieldType.text, false, "Also known as");

        logger(`Name type data object definition`);
        logger(nameDef);

        // Patient contact details
        let contactDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.contact, 'Contact', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line1", "Line 1", FieldType.text, true, "Address line 1");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line2", "Line 2", FieldType.text, false, "Address line 2");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "suburb", "Suburb", FieldType.text, true, "Suburb");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "postcode", "Post Code", FieldType.integer, true, "Post code");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "state", "State", FieldType.choice, true, "State",new SimpleValueDataSource(
            [
                { name: 'Australia Capital Territory',value:'ACT'},
                { name: 'Queensland',value:'QLD'},
                { name: 'South Australia',value:'SA'},
                { name: 'Tasmania',value:'TAS'},
                { name: 'Victoria',value:'VIC'},
                { name: 'Western Australia',value:'WA'},
            ]
        ));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "country", "Country", FieldType.text, true, "Country");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "home", "Home Phone", FieldType.text, true, "Home phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "work", "Work Phone", FieldType.text, false, "Work phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "mobile", "Mobile Phone", FieldType.text, true, "Mobile phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokname", "NOK Name", FieldType.text, false, "Next of kin name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokphone", "NOK Phone", FieldType.text, true, "Next of kin phone");

        logger(`Contact type data object definition`);
        logger(nameDef);

        // Patient identifiers details
        let identifiersDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.identifiers, 'Contact', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicare", "Medicare", FieldType.text, false, "Medicare number");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicareRef", "Medicare Ref", FieldType.text, false, "Medicare reference number");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "legacyId", "Legacy Id", FieldType.text, false, "Legacy Id");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dva", "DVA", FieldType.text, false, "DVA number");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dvaColour", "DVA Colour", FieldType.choice, true, "DVA colour",new SimpleValueDataSource(
            [
                { name: '',value:''},
                { name: 'White',value:'white'},
                { name: 'Gold',value:'gold'},
            ]
        ));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "hcc", "HCC", FieldType.text, false, "Health Care Card");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "ihi", "IHI", FieldType.integer, false, "Individual health identifier");

        logger(`Identifiers type data object definition`);
        logger(nameDef);

    }


    stateChanged(managerName: string, name: string, newValue: any) {
    }
    stateChangedItemAdded(managerName: string, name: string, itemAdded: any) {
        switch (name) {
            case STATE_NAMES.patients: {
                // found new patient to add to buffer
                this.stateManager.addNewItemToState(name, itemAdded, true);
                break;
            }
        }
    }


    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any) {}
    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any) {
    }
    getListenerName(): string {
        return 'Patient Controller';
    }
    filterResults(managerName: string, name: string, filterResults: any) {}
}
