import {
    ComparisonType,
    ConditionResponse,
    FieldDefinition,
    Form,
    FormFieldValidator,
    FormMode,
    ValidationManager,
    ValidationRule
} from "ui-framework-jps";
import {RuleCheck} from "ui-framework-jps/dist/framework/ui/form/validation/ValidationManager";
import {STATE_NAMES} from "../AppTypes";
import debug from 'debug';

const logger = debug('user-validation-helper');

export class UserValidationHelper implements FormFieldValidator {
    private static _instance: UserValidationHelper;

    public static getInstance(): UserValidationHelper {
        if (!(UserValidationHelper._instance)) {
            UserValidationHelper._instance = new UserValidationHelper();
        }
        return UserValidationHelper._instance;
    }

    private constructor() {
    }

    public setupValidationForDetailsForm(form: Form) {
        /*
        *
        * Create user rules
        *
         */


        let rule: ValidationRule = {
            formMode: FormMode.create,
            targetDataFieldId: 'resetPassword',
            response: ConditionResponse.hide,
            conditions: []
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);

        rule = {
            formMode: FormMode.create,
            targetDataFieldId: 'isProvider',
            response: ConditionResponse.hide,
            conditions: []
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);


        rule = {
            formMode: FormMode.create,
            targetDataFieldId: 'password',
            response: ConditionResponse.invalid,
            conditions: [
                {
                    comparison: ComparisonType.isNotNull
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
                    values: 'true'
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
                    values: 'false'
                }
            ]
        }
        ValidationManager.getInstance().addRuleToForm(form, rule);

        ValidationManager.getInstance().addFormValidator(this);
    }

    applyRulesToTargetField(form: Form, formMode: FormMode, fieldDef: FieldDefinition, onlyRulesOfType: ConditionResponse | null): RuleCheck {
        let result: RuleCheck = {
            ruleFailed: false
        }

        // are we dealing with the form for users?
        if (form.getDataObjectDefinition().id === STATE_NAMES.users) {
            // we are only checking for invalid state
            if (((onlyRulesOfType) && (onlyRulesOfType === ConditionResponse.invalid)) || (!(onlyRulesOfType))) {
                // are we dealing with the reset password field?
                if (fieldDef.id === 'password') {
                    logger('User form, password field, invalid check');
                    // what is the value of the field reset password
                    let resetField = form.getFieldFromDataFieldId('resetPassword');
                    if (resetField) {
                        let resetValue = resetField.getValue();
                        logger(`User form, password field, invalid check - reset is ${resetValue}`);
                        if (resetValue && (resetValue === 'true')) {
                            // check the password value
                            let passwordField = form.getFieldFromDataFieldId(fieldDef.id);
                            if (passwordField) {
                                let passwordValue = passwordField.getValue();
                                logger(`User form, password field, invalid check - reset is ${resetValue}, password is "${passwordValue}"`);
                                if (passwordValue) {
                                    if (passwordValue.trim().length === 0) {
                                        logger(`User form, password field, invalid check - FAILED`);
                                        result.ruleFailed = true;
                                        result.message = 'Password must be supplied.';
                                    }
                                } else {
                                    logger(`User form, password field, invalid check - FAILED`);
                                    result.ruleFailed = true;
                                    result.message = 'Password must be supplied.';
                                }
                            }
                        }
                    }
                }


            }
        }

        return result;
    }

}
