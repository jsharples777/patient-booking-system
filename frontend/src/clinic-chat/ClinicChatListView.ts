import debug from 'debug';
import {
    AbstractStatefulCollectionView,
    ChatEventListener,
    ChatLog,
    ChatManager, ChatUserEventListener,
    CollectionView,
    CollectionViewDOMConfig,
    CollectionViewListener,
    CollectionViewListenerForwarder,
    Invitation,
    isSameRoom,
    KeyType,
    ListViewRenderer,
    MemoryBufferStateManager,
    Message,
    Modifier, NotificationController, SecurityManager, STATE_NAMES,
    View, VIEW_NAME
} from "ui-framework-jps";
import Controller from "../Controller";



const logger = debug('clinic-chat-list-view');

export class ClinicChatListView extends AbstractStatefulCollectionView implements ChatEventListener, CollectionViewListener, ChatUserEventListener {
    private static _instance: ClinicChatListView;

    public static getInstance(): ClinicChatListView {
        if (!(ClinicChatListView._instance)) {
            ClinicChatListView._instance = new ClinicChatListView();
        }
        return ClinicChatListView._instance;
    }


    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'chatLogs',
            dataSourceId: VIEW_NAME.chatLogs,
        },
        resultsElement:{
            type:'a',
            attributes:[{name: 'href', value: '#'}],
            classes:'list-group-item my-list-item truncate-notification list-group-item-action'
        } ,
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
            }
        },
    };
    protected selectedChatLog: ChatLog | null = null;

   private constructor() {
        super(ClinicChatListView.DOMConfig, new MemoryBufferStateManager(isSameRoom), STATE_NAMES.chatLogs);

        this.renderer = new ListViewRenderer(this, this);


        // handler binding
        this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
        this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
        this.handleChatStarted = this.handleChatStarted.bind(this);
        this.stateChanged = this.stateChanged.bind(this);

        NotificationController.getInstance().addListener(this);

        // load all users into the list view
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.users,this);
    }

    handleLoggedInUsersUpdated(usernames: string[]): void {
        logger(`Handling logged in users changed`);
        this.updateStateManager();
    }
    handleFavouriteUserLoggedIn(username: string): void {}
    handleFavouriteUserLoggedOut(username: string): void {}
    handleFavouriteUsersChanged(usernames: string[]): void {}
    handleBlockedUsersChanged(usernames: string[]): void {}

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
        this.addEventCollectionListener(this);
        this.updateStateManager();
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item.roomName;
    }

    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        let chatLog = <ChatLog>item;
        containerEl.innerHTML = chatLog.users[1];
    }

    getModifierForItemInNamedCollection(name: string, item: any) {
        let result = Modifier.normal;
        // if the user is currently logged out make the item inactive
        if (!ChatManager.getInstance().isUserLoggedIn(item.username)) {
            result = Modifier.inactive;
        }
        if (this.selectedChatLog) {
            if (this.selectedChatLog.roomName === item.roomName) {
                result = Modifier.active;
            }

        }
        return result;
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any) {
        return this.getModifierForItemInNamedCollection(name, item);
    }

    selectChatRoom(roomName: string) {
        let room = ChatManager.getInstance().getChatLog(roomName);
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

    private updateStateManager() {
        logger(`Updating state with chat manager`);
        let newState = ChatManager.getInstance().getChatLogs();
        logger(newState);
        this.stateManager.setStateByName(STATE_NAMES.chatLogs, newState, true);
    }

    public stateChanged(managerName: string, name: string, newValue: any) {
        logger(`Updating state for ${name}`);
        logger(newValue);
        if (name === STATE_NAMES.users) {
            // load a chat room for each other user
            newValue.forEach((user:any) => {
                if (user.username !== SecurityManager.getInstance().getLoggedInUsername()) {
                    ChatManager.getInstance().startChatWithUser(user.username);
                }
            })
        }
        if (name === STATE_NAMES.chatLogs) {
            super.stateChanged(managerName,name,newValue);
        }

    }
}

