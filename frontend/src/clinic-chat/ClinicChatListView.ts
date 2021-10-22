import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    ChatEventListener,
    ChatLog,
    ChatManager,
    ChatUserEventListener,
    CollectionView,
    CollectionViewDOMConfig,
    CollectionViewListener,
    CollectionViewListenerForwarder,
    ComparisonType,
    FilterItem,
    Invitation,
    isSameRoom,
    KeyType,
    ListViewRenderer,
    MemoryBufferStateManager,
    Message,
    Modifier,
    NotificationController,
    SecurityManager,
    STATE_NAMES,
    View,
    VIEW_NAME
} from "ui-framework-jps";
import Controller from "../Controller";


const logger = debug('clinic-chat-list-view');
const dLogger = debug('clinic-chat-list-view:detail');

export class ClinicChatListView extends AbstractStatefulCollectionView implements ChatEventListener, CollectionViewListener, ChatUserEventListener {
    private static _instance: ClinicChatListView;
    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'chatLogs',
            dataSourceId: VIEW_NAME.chatLogs,
        },
        resultsElement: {
            type: 'a',
            attributes: [{name: 'href', value: '#'}],
            classes: 'list-group-item my-list-item truncate-notification list-group-item-action'
        },
        keyId: 'roomName',
        keyType: KeyType.string,
        modifiers: {
            normal: '',
            inactive: 'list-group-item-dark',
            active: 'list-group-item-primary',
            warning: ''
        },
        detail: {
            containerClasses: 'd-flex w-100 justify-content-between',
            textElement: {
                type: 'span',
                classes: 'mb-1'
            },
            select: true,
            delete: {
                classes: 'btn bg-danger text-white btn-circle btn-sm',
                iconClasses: 'text-black fas fa-sign-out-alt',
            },
            badge: {
                type: 'span',
                classes: 'badge badge-pill badge-primary mr-1',
            },
            secondBadge: {
                type: 'span',
                classes: 'badge badge-pill badge-warning mr-1',
            },
            thirdBadge: {
                type: 'span',
                classes: 'badge badge-pill badge-danger mr-1',
            },
            icons: (name: string, item: any) => {
                const results: string[] = [];
                if (item.users.length == 2) {
                    const filter: FilterItem = {
                        attributeName: 'username',
                        value: item.users[1],
                        comparison: ComparisonType.equals,
                    }
                    // find the user in the state
                    const users = Controller.getInstance().getStateManager().findItemsInState(STATE_NAMES.users, [filter]);
                    dLogger(`Found users with filter`);
                    dLogger(users);
                    if (users && users.length > 0) {
                        const user = users[0];
                        dLogger(`Getting icons for user`);
                        dLogger(user);
                        if (user.isAdmin) {
                            results.push("fas fa-user-cog");
                        }
                        if (user.providerNo.trim().length > 0) {
                            results.push("fas fa-user-md");
                        }
                    }
                }
                return results;
            }
        },
        sorter: ClinicChatListView.sort
    };
    protected selectedChatLog: ChatLog | null = null;
    private doNotDisturbEl: HTMLInputElement | null = null;

    private static sort(item1:any, item2:any):number {
        let result = -1;
        if (item1.name > item2.name) result = 1;
        return result;
    }

    private constructor() {
        super(ClinicChatListView.DOMConfig, new MemoryBufferStateManager(isSameRoom), STATE_NAMES.chatLogs);

        this.renderer = new ListViewRenderer(this, this);


        // handler binding
        this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
        this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
        this.handleChatStarted = this.handleChatStarted.bind(this);
        this.stateChanged = this.stateChanged.bind(this);
        this.toggleDoNotDisturb = this.toggleDoNotDisturb.bind(this);

        NotificationController.getInstance().addListener(this);
        NotificationController.getInstance().addUserListener(this);

        // load all users into the list view
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.users, this);
    }

    public static getInstance(): ClinicChatListView {
        if (!(ClinicChatListView._instance)) {
            ClinicChatListView._instance = new ClinicChatListView();
        }
        return ClinicChatListView._instance;
    }

    toggleDoNotDisturb(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.doNotDisturbEl) {
            logger(`Toggling Do Not Disturb ${this.doNotDisturbEl.checked}`)
            const doNotDisturb = !this.doNotDisturbEl.checked;

            NotificationController.getInstance().setOptions({
                showNormalPriorityMessageNotifications: doNotDisturb,
                showHighPriorityMessageNotifications: doNotDisturb,
                showUrgentPriorityMessageNotifications: true,
                showInvitationDeclinedNotifications: false,
                showInvitedNotifications: false,
                showOfflineMessageNotification: true,
                showFavouriteUserLoggedInNotification: false,
                showFavouriteUserLoggedOutNotification: false,
                showUserJoinLeaveChatNotification: false

            });
        }
    }

    handleLoggedInUsersUpdated(usernames: string[]): void {
        logger(`Handling logged in users changed`);
        this.updateStateManager();
    }

    handleFavouriteUserLoggedIn(username: string): void {
        logger(`Handling logged in users changed`);
        this.updateStateManager();
    }

    handleFavouriteUserLoggedOut(username: string): void {
        logger(`Handling logged in users changed`);
        this.updateStateManager();
    }

    handleFavouriteUsersChanged(usernames: string[]): void {
    }

    handleBlockedUsersChanged(usernames: string[]): void {
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameRoom(item1, item2);
    }

    handleNewInviteReceived(invite: Invitation): boolean {
        return true;
    }

    handleChatLogUpdated(log: ChatLog): void {
        logger(`Handling chat log updates`);
        this.updateStateManager();
    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
        this.doNotDisturbEl = <HTMLInputElement>document.getElementById('doNotDisturb');
        // if (this.doNotDisturbEl) {
        //     // @ts-ignore
        //     mobiscroll5.enhance(this.doNotDisturbEl);
        // }
        this.doNotDisturbEl.addEventListener('change', this.toggleDoNotDisturb)

        this.addEventCollectionListener(this);
        this.updateStateManager();
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item.roomName;
    }

    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        const chatLog = <ChatLog>item;
        if (chatLog.users.length > 1) {
            containerEl.innerHTML = chatLog.users[1] + "&nbsp;&nbsp;&nbsp;";
        } else {
            containerEl.innerHTML = 'Chat closed by other user';
        }
    }

    getModifierForItemInNamedCollection(name: string, item: any) {
        dLogger('Checking modifiers for item');
        dLogger(item);
        let result = Modifier.inactive;
        if (item.users.length == 2) {
            // if the user is currently logged out make the item inactive
            dLogger(`user ${item.users[1]} is logged in? ${ChatManager.getInstance().isUserLoggedIn(item.users[1])}`);
            if (ChatManager.getInstance().isUserLoggedIn(item.users[1])) {
                result = Modifier.active;
            }
        }
        if (this.selectedChatLog) {
            if (this.selectedChatLog.roomName === item.roomName) {
                result = Modifier.normal;
            }

        }
        return result;
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any) {
        return this.getModifierForItemInNamedCollection(name, item);
    }

    selectChatRoom(roomName: string) {
        const room = ChatManager.getInstance().getChatLog(roomName);
        this.selectedChatLog = room;
        (<CollectionViewListenerForwarder>this.eventForwarder).itemSelected(this, this.selectedChatLog);
        this.updateStateManager();
    }

    handleChatLogsUpdated(): void {
        if (this.selectedChatLog) {
            ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName);
        }
        this.updateStateManager();
    }

    handleChatStarted(log: ChatLog): void {
        this.selectedChatLog = log;
        (<CollectionViewListenerForwarder>this.eventForwarder).itemSelected(this, this.selectedChatLog);
        this.updateStateManager();
    }

    getBadgeValueForItemInNamedCollection(name: string, item: any): number {
        return item.unreadMessages;
    }

    getSecondaryBadgeValueForItemInNamedCollection(name: string, item: any): number {
        return item.unreadHighMessages;
    }

    getTertiaryBadgeValueForItemInNamedCollection(name: string, item: any): number {
        return item.unreadUrgentMessages;
    }

    canDeleteItem(view: View, selectedItem: any): boolean {
        return true;
    }

    itemDeleted(view: View, selectedItem: any): void {
        logger(`Deleting chat ${selectedItem.roomName}`);
        ChatManager.getInstance().leaveChat(selectedItem.roomName);
        if (this.selectedChatLog && (this.selectedChatLog.roomName === selectedItem.roomName)) {
            (<CollectionViewListenerForwarder>this.eventForwarder).itemDeselected(this, this.selectedChatLog);
            this.selectedChatLog = null;
        }
        this.updateStateManager();
    }

    hideRequested(view: View): void {
        if (this.selectedChatLog) {
            (<CollectionViewListenerForwarder>this.eventForwarder).itemDeselected(this, this.selectedChatLog);
            this.selectedChatLog = null;
        }
    }

    hidden() {
        this.hideRequested(this);
    }

    documentLoaded(view: View): void {
    }

    itemAction(view: View, actionName: string, selectedItem: any): void {
    }

    itemDragStarted(view: View, selectedItem: any): void {
    }

    itemDropped(view: View, droppedItem: any): void {
    }

    itemSelected(view: View, selectedItem: any): void {
        this.selectedChatLog = selectedItem;
        this.updateStateManager();
    }

    itemDeselected(view: View, selectedItem: any): void {
        this.selectedChatLog = null;
        this.updateStateManager();
    }

    showRequested(view: View): void {
    }

    handleOfflineMessagesReceived(messages: Message[]): void {
    }

    handleInvitationDeclined(room: string, username: string): void {
    }

    canSelectItem(view: CollectionView, selectedItem: any): boolean {
        return true;
    }

    public stateChanged(managerName: string, name: string, newValue: any) {
        logger(`Updating state for ${name}`);
        logger(newValue);
        if (name === STATE_NAMES.users) {
            // load a chat room for each other user
            newValue.forEach((user: any) => {
                if (user.username !== SecurityManager.getInstance().getLoggedInUsername()) {
                    ChatManager.getInstance().addUserToFavouriteList(user.username);
                    ChatManager.getInstance().startChatWithUser(user.username);
                }
            })
        }
        if (name === STATE_NAMES.chatLogs) {
            super.stateChanged(managerName, name, newValue);
        }

    }

    private updateStateManager() {
        logger(`Updating state with chat manager`);
        const newState = ChatManager.getInstance().getChatLogs();
        logger(newState);
        this.stateManager.setStateByName(STATE_NAMES.chatLogs, newState, true);
    }
}

