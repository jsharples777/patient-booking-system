import {FieldRenderer} from "../form/FormUITypeDefs";
import {FieldDefinition} from "../../model/DataObjectTypeDefs";
import debug from 'debug';

const rlogger = debug('limited-choice-text-renderer');


export class LimitedChoiceTextRenderer implements FieldRenderer {

    public constructor() {
    }

    renderValue(field: FieldDefinition, currentValue: string): string | null {
        rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue}`);
        // find the current value in the data source and convert to text for display
        let result = currentValue;
        if (field.dataSource) {
            const valueOptions = field.dataSource.getOptions();
            const foundIndex = valueOptions.findIndex((option) => option.value === currentValue);
            if (foundIndex >= 0) {
                result = valueOptions[foundIndex].name;
            }
        }
        return result;

    }


    generate(field: FieldDefinition, isCreate: boolean): string {
        return '';
    }

    setSubElements(elements: HTMLInputElement[]): void {
    }
}