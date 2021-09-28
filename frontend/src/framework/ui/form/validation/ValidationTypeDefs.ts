import {ComparisonType} from "../../../CommonTypes";

export enum ConditionResponse {
    show,
    hide,
    invalid,
    valid
}

export type ValidationCondition = {
    comparison: ComparisonType,
    sourceDataFieldId?: string,
    values?: string
}

export type ValidationRule = {
    targetDataFieldId: string,
    response: ConditionResponse,
    conditions: ValidationCondition[]
}
