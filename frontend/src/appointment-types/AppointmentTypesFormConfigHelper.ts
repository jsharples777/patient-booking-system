import {BootstrapFormConfigHelper, DataObjectDefinition, DisplayOrder, FormConfigHelper} from "ui-framework-jps";
import {FormUIDefinition} from "ui-framework-jps/dist/framework/ui/form/FormUITypeDefs";
import {ColourEditor} from "./ColourEditor";
import {AppointmentTypesSidebarContainers} from "../AppTypes";

export class AppointmentTypesFormConfigHelper implements FormConfigHelper {
    generateFormConfig(dataObjDef: DataObjectDefinition, displayOrders: DisplayOrder[], hasDeleteButton: boolean, hideModifierFields: boolean, hasExternalControl: boolean): FormUIDefinition {
        let formDef = BootstrapFormConfigHelper.getInstance().generateFormConfig(dataObjDef, displayOrders,hasDeleteButton,hideModifierFields,hasExternalControl);
        // need to modify how the colour is edited.
        const foundIndex = formDef.fieldGroups[0].fields.findIndex((field) => field.field.id === 'colour');
        if (foundIndex >= 0) {
            let fieldConfig = formDef.fieldGroups[0].fields[foundIndex];
            fieldConfig.editor = new ColourEditor(AppointmentTypesSidebarContainers.colourPicker,`${dataObjDef.id}.field.colour`);
        }
        return formDef;
    }

}