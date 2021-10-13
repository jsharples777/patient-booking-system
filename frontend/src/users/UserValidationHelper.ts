import {
    ComparisonType,
    ConditionResponse,
    Form,
    FormMode,
    ValidationCondition,
    ValidationManager
} from "ui-framework-jps";

export class UserValidationHelper {
    private static _instance: UserValidationHelper;

    public static getInstance(): UserValidationHelper {
        if (!(UserValidationHelper._instance)) {
            UserValidationHelper._instance = new UserValidationHelper();
        }
        return UserValidationHelper._instance;
    }

    private constructor() {}

    public setupValidationForDetailsForm(form:Form) {


        let rule = {
            formMode: FormMode.create,
            targetDataFieldId: 'resetPassword',
            response: ConditionResponse.hide,
            conditions: [
                {
                    comparison: ComparisonType.hasValue,
                    values:'x'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);

        rule = {
            formMode: FormMode.create,
            targetDataFieldId: 'isProvider',
            response: ConditionResponse.hide,
            conditions: [
                {
                    comparison: ComparisonType.hasValue,
                    values:'x'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);


        rule = {
            formMode: FormMode.create,
            targetDataFieldId: 'password',
            response: ConditionResponse.invalid,
            conditions: [
                {
                    comparison: ComparisonType.isNotNull,
                    values: 'x'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);
    }

}