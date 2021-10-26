import {
    ComparisonType,
    ConditionResponse,
    FieldDefinition,
    Form,
    ValidationManager,
    ValidationRule,
    ViewFieldValidator,
    ViewMode
} from "ui-framework-jps";
import {STATE_NAMES} from "../AppTypes";
import debug from 'debug';
import {RuleCheck} from "ui-framework-jps/dist/framework/ui/validation/ValidationManager";

const logger = debug('user-validation-helper');

export class UserValidationHelper implements ViewFieldValidator {
    private static _instance: UserValidationHelper;

    private constructor() {
    }

    public static getInstance(): UserValidationHelper {
        if (!(UserValidationHelper._instance)) {
            UserValidationHelper._instance = new UserValidationHelper();
        }
        return UserValidationHelper._instance;
    }

    public setupValidationForDetailsForm(form: Form) {
        /*
        *
        * Create user rules
        *
         */


        let rule: ValidationRule = {
            viewMode: ViewMode.create,
            targetDataFieldId: 'resetPassword',
            response: ConditionResponse.hide,
            conditions: []
        }
        ValidationManager.getInstance().addRuleToView(form, rule);

        rule = {
            viewMode: ViewMode.any,
            targetDataFieldId: 'isProvider',
            response: ConditionResponse.hide,
            conditions: []
        }
        ValidationManager.getInstance().addRuleToView(form, rule);


        rule = {
            viewMode: ViewMode.create,
            targetDataFieldId: 'password',
            response: ConditionResponse.invalid,
            conditions: [
                {
                    comparison: ComparisonType.isNotNull
                }
            ]
        }
        ValidationManager.getInstance().addRuleToView(form, rule);

        rule = {
            viewMode: ViewMode.update,
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
        ValidationManager.getInstance().addRuleToView(form, rule);
        rule = {
            viewMode: ViewMode.update,
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
        ValidationManager.getInstance().addRuleToView(form, rule);

        ValidationManager.getInstance().addViewValidator(this);
    }

    applyRulesToTargetField(form: Form, viewMode: ViewMode, fieldDef: FieldDefinition, onlyRulesOfType: ConditionResponse | null): RuleCheck {
        const result: RuleCheck = {
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
                    const resetField = form.getFieldFromDataFieldId('resetPassword');
                    if (resetField) {
                        const resetValue = resetField.getValue();
                        logger(`User form, password field, invalid check - reset is ${resetValue}`);
                        if (resetValue && (resetValue === 'true')) {
                            // check the password value
                            const passwordField = form.getFieldFromDataFieldId(fieldDef.id);
                            if (passwordField) {
                                const passwordValue = passwordField.getValue();
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

        logger(result);

        return result;
    }

}
