import debug from 'debug';


import Controller from "./Controller";

import {STATE_NAMES} from "./AppTypes";
import {DataChangeType, SecurityManager, SocketListener} from "ui-framework-jps";

const slLogger = debug('socket-listener');

export default class SocketListenerDelegate implements SocketListener {

    public constructor() {
    }

    public handleDataChangedByAnotherUser(message: any) {
        slLogger(`Handling data change ${message.type} on object type ${message.stateName} made by user ${message.user}`);
        const stateObj = message.data;
        slLogger(stateObj);

        // are we the same user that made the changes?
        if (message.user === SecurityManager.getInstance().getLoggedInUsername()) {
            slLogger(`changes made by the current user, no need to do anything`);
        }
        // ok lets work out where this change belongs
        try {
            switch (message.type) {
                case DataChangeType.create: {
                    switch (message.stateName) {
                        case STATE_NAMES.users: {
                            Controller.getInstance().getStateManager().addNewItemToState(STATE_NAMES.users, stateObj, true);
                            break;
                        }
                        case STATE_NAMES.appointments: {
                            Controller.getInstance().getStateManager().addNewItemToState(STATE_NAMES.appointments, stateObj, true);
                            break;
                        }
                        case STATE_NAMES.appointmentTypes: {
                            Controller.getInstance().getStateManager().addNewItemToState(STATE_NAMES.appointmentTypes, stateObj, true);
                            break;
                        }
                    }
                    break;
                }
                case DataChangeType.update: {
                    switch (message.stateName) {
                        case STATE_NAMES.appointmentTypes: {
                            Controller.getInstance().getStateManager().updateItemInState(STATE_NAMES.appointmentTypes, stateObj, true);
                            break;
                        }
                        case STATE_NAMES.appointments: {

                            Controller.getInstance().getStateManager().updateItemInState(STATE_NAMES.appointments, stateObj, true);
                            break;
                        }
                    }
                    break;
                }
                case DataChangeType.delete: {
                    switch (message.stateName) {
                        case STATE_NAMES.appointmentTypes: {
                            Controller.getInstance().getStateManager().removeItemFromState(STATE_NAMES.appointmentTypes, stateObj, true);
                            break;
                        }
                        case STATE_NAMES.appointments: {
                            Controller.getInstance().getStateManager().removeItemFromState(STATE_NAMES.appointments, stateObj, true);
                            break;
                        }
                    }
                    break;
                }
            }
        } catch (err) {
            slLogger(err);
        }

    }

    handleMessage(message: string): void {
        slLogger(`Received message: ${message}`);
    }

    getCurrentUser(): string {
        return Controller.getInstance().getLoggedInUserId();
    }

}
