import {Field, FieldDefinition, FieldEditor, isHexValueDark} from "ui-framework-jps";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";

export class ColourEditor implements FieldEditor{
    protected colourPickerContainerId:string;
    protected field:Field|null = null;

    constructor(colourPickerContainerId:string) {
        this.colourPickerContainerId = colourPickerContainerId;
        this.editValue = this.editValue.bind(this);
        this.cbColourChange = this.cbColourChange.bind(this);
        browserUtil.addRemoveClasses(document.getElementById(this.colourPickerContainerId),'d-none');
        $(`#${this.colourPickerContainerId}`).farbtastic(this.cbColourChange);

    }

    editCompleted(field: Field, fieldDef: FieldDefinition): void {
        browserUtil.addRemoveClasses(document.getElementById(this.colourPickerContainerId),'d-none');
    }

    editValue(field:Field|null, fieldDef: FieldDefinition, currentValue: string): string {
        this.field = field;
        // do we have a valid value?
        if (/^#[0-9a-f]{6}$/.test(currentValue)) {
            $.farbtastic(`#${this.colourPickerContainerId}`).setColor(currentValue);
            browserUtil.addRemoveClasses(document.getElementById(this.colourPickerContainerId),'d-none',false);
        }
        return currentValue;
    }

    cbColourChange(colour:string) {
        console.log(colour);
        console.log(this.field);
        console.log(isHexValueDark('#9b8778'));
        // @ts-ignore
        if (this.field) this.field.setValue(colour);
        browserUtil.addRemoveClasses(document.getElementById(this.colourPickerContainerId),'d-none',true);

    }



}