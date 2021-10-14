import {
    ComparisonType,
    ConditionResponse,
    Form,
    FormMode,
    MultipleConditionLogic,
    ValidationManager,
    ValidationRule
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
        /*
        *
        * Create user rules
        *
         */


        let rule:ValidationRule = {
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

        rule = {
            formMode: FormMode.update,
            targetDataFieldId: 'password',
            response: ConditionResponse.show,
            conditions: [
                {
                    comparison: ComparisonType.hasValue,
                    sourceDataFieldId: 'resetPassword',
                    values: 'false'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);
        rule = {
            formMode: FormMode.update,
            targetDataFieldId: 'password',
            response: ConditionResponse.hide,
            conditions: [
                {
                    comparison: ComparisonType.hasValue,
                    sourceDataFieldId: 'resetPassword',
                    values: 'true'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);
        rule = {
            formMode: FormMode.any,
            targetDataFieldId: 'password',
            response: ConditionResponse.invalid,
            multipleConditionLogic: MultipleConditionLogic.failOnlyIfFinalConditionIsAFailAndPreviousConditionsAreNotFails,
            conditions: [
                {
                    comparison: ComparisonType.hasValue,
                    sourceDataFieldId: 'resetPassword',
                    values: 'true'
                },
                {
                    comparison: ComparisonType.isNotNull,
                    values:'x'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);
    }

}
