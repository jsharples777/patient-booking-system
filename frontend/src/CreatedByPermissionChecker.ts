import {ObjectPermissionChecker, SecurityManager} from "ui-framework-jps";

export class CreatedByPermissionChecker implements ObjectPermissionChecker {
    hasPermissionToUpdateItem(item: any): boolean {
        let result = false;
        if (item.createdBy) {
            result = (item.createdBy === SecurityManager.getInstance().getLoggedInUsername());
        }
        return result;
    }

    hasPermissionToDeleteItem(item: any): boolean {
        let result = false;
        if (item.createdBy) {
            result = (item.createdBy === SecurityManager.getInstance().getLoggedInUsername());
        }
        return result;
    }
}