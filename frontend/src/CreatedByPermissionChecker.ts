import Controller from "./Controller";
import {ObjectPermissionChecker} from "ui-framework-jps";

export class CreatedByPermissionChecker implements ObjectPermissionChecker {
    hasPermissionToUpdateItem(item: any): boolean {
        let result = false;
        if (item.createdBy) {
            result = (item.createdBy === Controller.getInstance().getLoggedInUsername());
        }
        return result;
    }

    hasPermissionToDeleteItem(item: any): boolean {
        let result = false;
        if (item.createdBy) {
            result = (item.createdBy === Controller.getInstance().getLoggedInUsername());
        }
        return result;
    }
}