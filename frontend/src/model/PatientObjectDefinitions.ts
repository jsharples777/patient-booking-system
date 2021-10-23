import {
    BasicObjectDefinitionFactory,
    DataObjectDefinition,
    FieldType,
    ObjectDefinitionRegistry,
    SimpleValueDataSource
} from "ui-framework-jps";
import {STATE_NAMES} from "../AppTypes";
import debug from 'debug';

const logger = debug('patient-defs');

export class PatientObjectDefinitions {


    public static loadPatientDefinitions() {
        // Patient name details
        const nameDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.name, 'Name', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "title", "Title", FieldType.choice, false, "Name", new SimpleValueDataSource([
            {name: '', value: ''},
            {name: 'Master', value: 'Master'},
            {name: 'Miss', value: 'Miss'},
            {name: 'Ms', value: 'Ms'},
            {name: 'Mr', value: 'Mr'},
            {name: 'Mrs', value: 'Mrs'}
        ]));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "firstname", "First Name", FieldType.text, true, "First name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "middlename", "Middle Name", FieldType.text, false, "Middle name(s)");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "surname", "Surname", FieldType.text, true, "Surname");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(nameDef, "aka", "AKA", FieldType.text, false, "Also known as");

        logger(`Name type data object definition`);
        logger(nameDef);

        // Patient contact details
        const contactDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.contact, 'Contact', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line1", "Line 1", FieldType.text, true, "Address line 1");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "line2", "Line 2", FieldType.text, false, "Address line 2");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "suburb", "Suburb", FieldType.text, true, "Suburb");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "postcode", "Post Code", FieldType.integer, true, "Post code");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "state", "State", FieldType.choice, true, "State", new SimpleValueDataSource(
            [
                {name: 'Australia Capital Territory', value: 'ACT'},
                {name: 'Queensland', value: 'QLD'},
                {name: 'South Australia', value: 'SA'},
                {name: 'Tasmania', value: 'TAS'},
                {name: 'Victoria', value: 'VIC'},
                {name: 'Western Australia', value: 'WA'},
            ]
        ));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "country", "Country", FieldType.text, true, "Country");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "home", "Home Phone", FieldType.text, true, "Home phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "work", "Work Phone", FieldType.text, false, "Work phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "mobile", "Mobile Phone", FieldType.text, true, "Mobile phone");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokname", "NOK Name", FieldType.text, false, "Next of kin name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(contactDef, "nokphone", "NOK Phone", FieldType.text, false, "Next of kin phone");

        logger(`Contact type data object definition`);
        logger(contactDef);

        // Patient identifiers details
        const identifiersDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.identifiers, 'Contact', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicare", "Medicare", FieldType.text, false, "Medicare number");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "medicareRef", "Medicare Ref", FieldType.text, false, "Medicare reference number");
        let fieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "legacyId", "Legacy Id", FieldType.id, false, "Legacy Id");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dva", "DVA", FieldType.text, false, "DVA number");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "dvaColour", "DVA Colour", FieldType.choice, false, "DVA colour", new SimpleValueDataSource(
            [
                {name: '', value: ''},
                {name: 'White', value: 'white'},
                {name: 'Gold', value: 'gold'},
            ]
        ));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "hcc", "HCC", FieldType.text, false, "Health Care Card");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(identifiersDef, "ihi", "IHI", FieldType.integer, false, "Individual health identifier");

        logger(`Identifiers type data object definition`);
        logger(identifiersDef);

        // Patient identifiers details
        const basicsDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.basics, 'Basics', true, true, true, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "dob", "DOB", FieldType.date, true, "Date of birth");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "dod", "DOD", FieldType.date, false, "Date of death");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "gender", "Gender", FieldType.choice, true, "Gender", new SimpleValueDataSource(
            [
                {name: 'Female', value: 'F'},
                {name: 'Male', value: 'M'},
                {name: 'Non-binary', value: 'N'},
                {name: 'Not stated', value: 'S'},
            ]
        ));
        fieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "lastSeen", "Last Seen", FieldType.date, false, "Last seen");
        fieldDef.displayOnly = true;
        fieldDef = BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "lastSeenBy", "Last Seen By", FieldType.text, false, "Last seen by");
        fieldDef.displayOnly = true;
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "ethnicity", "Ethnicity", FieldType.text, false, "Ethnicity");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(basicsDef, "countryofbirth", "Birth Country", FieldType.text, false, "Country of birth");

        logger(`Basics type data object definition`);
        logger(basicsDef);

    }
}