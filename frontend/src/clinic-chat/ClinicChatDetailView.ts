import debug from 'debug';
import {
    ChatEventListener,
    ChatLog,
    ChatManager,
    CollectionView,
    CollectionViewListener, DRAGGABLE_KEY_ID, DRAGGABLE_TYPE,
    Invitation,
    Message,
    Modifier,
    NotificationController,
    Priority,
    STATE_NAMES,
    StateChangeListener,
    StateManager,
    View,
    VIEW_NAME,
    ViewDOMConfig
} from "ui-framework-jps";
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {SimpleAttachment} from "ui-framework-jps/dist/framework/socket/Types";
import moment from "moment";

import {DRAGGABLE as APP_DRAGGABLE, STATE_NAMES as APP_STATE_NAMES} from '../AppTypes'
import Controller from "../Controller";
import {AttachmentListener} from "./AttachmentListener";


const logger = debug('clinic-chat-detail-view');

export class ClinicChatDetailView implements View, ChatEventListener, CollectionViewListener, StateChangeListener {
    private static _instance: ClinicChatDetailView;

    public static getInstance(stateManager: StateManager): ClinicChatDetailView {
        if (!(ClinicChatDetailView._instance)) {
            ClinicChatDetailView._instance = new ClinicChatDetailView(stateManager);
        }
        return ClinicChatDetailView._instance;
    }


    private static newFormId: string = "newMessage";
    private static commentId: string = "message";
    private static submitCommentId: string = "submitMessage";
    private static chatLogId: string = 'chatLog';
    private static chatLogRoomId: string = 'chatLogRoom';
    private static priorityId: string = 'priority';
    private static clinicChatFastPatientSearch: string = 'clinicChatFastPatientSearch';


    // @ts-ignore
    protected chatRoomDiv: HTMLDivElement;
    // @ts-ignore
    protected chatLogDiv: HTMLDivElement;
    // @ts-ignore
    protected chatForm: HTMLFormElement;
    // @ts-ignore
    protected priorityEl: HTMLSelectElement;
    // @ts-ignore
    protected commentEl: HTMLInputElement;
    // @ts-ignore
    protected sendMessageButton: HTMLButtonElement;
    // @ts-ignore
    protected fastPatientSearch: HTMLInputElement;

    protected stateManager: StateManager;

    protected selectedChatLog: ChatLog | null;
    protected currentlySelectedPatient: any | null;

    private listeners:AttachmentListener[] = [];




    private constructor(stateManager: StateManager) {
        this.stateManager = stateManager;
        this.selectedChatLog = null;

        // handler binding
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.handleChatLogsUpdated = this.handleChatLogsUpdated.bind(this);
        this.handleChatLogUpdated = this.handleChatLogUpdated.bind(this);
        this.handleChatStarted = this.handleChatStarted.bind(this);
        this.handlePatientDrop = this.handlePatientDrop.bind(this);
        this.handlePatientSelected = this.handlePatientSelected.bind(this);
        this.handleAttachmentClicked = this.handleAttachmentClicked.bind(this);

        NotificationController.getInstance().addListener(this);
        this.stateManager.addChangeListenerForName(STATE_NAMES.users, this);
        this.stateManager.addChangeListenerForName(APP_STATE_NAMES.patientSearch, this);
    }

    onDocumentLoaded() {
        // @ts-ignore
        this.chatLogDiv = document.getElementById(ClinicChatDetailView.chatLogId);
        // @ts-ignore
        this.commentEl = document.getElementById(ClinicChatDetailView.commentId);
        // @ts-ignore
        this.chatForm = document.getElementById(ClinicChatDetailView.newFormId);
        // @ts-ignore
        this.sendMessageButton = document.getElementById(ClinicChatDetailView.submitCommentId);
        // @ts-ignore
        this.priorityEl = document.getElementById(ClinicChatDetailView.priorityId);
        // @ts-ignore
        this.chatRoomDiv = document.getElementById(ClinicChatDetailView.chatLogRoomId);
        // @ts-ignore
        this.fastPatientSearch = document.getElementById(ClinicChatDetailView.clinicChatFastPatientSearch);


        this.chatRoomDiv.addEventListener('dragover', (event) => {
            logger('Dragged over');
            if (this.selectedChatLog) event.preventDefault();
        });
        this.chatRoomDiv.addEventListener('drop', this.handlePatientDrop);


        this.chatForm.addEventListener('submit', this.handleAddMessage);

        this.checkCanComment();

        const fastSearchEl = $(this.fastPatientSearch);
        // @ts-ignore
        fastSearchEl.on('autocompleteselect', this.handlePatientSelected);
    }

    hasActionPermission(actionName: string, from: string, item: any): boolean {
        return true;
    }

    getListenerName(): string {
        return 'Chat Log Details';
    }

    canSelectItem(view: CollectionView, selectedItem: any): boolean {
        return true;
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        return true;
    }

    hasPermissionToUpdateItemInNamedCollection(name: string, item: any): boolean {
        return true;
    }

    hasChanged(): boolean {
        return false;
    }

    setContainedBy(container: HTMLElement): void {
    }

    addEventListener(listener: CollectionViewListener): void {
    }

    getIdForItemInNamedCollection(name: string, item: any): string {
        throw new Error('Method not implemented.');
    }

    getDisplayValueForItemInNamedCollection(name: string, item: any): string {
        throw new Error('Method not implemented.');
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        throw new Error('Method not implemented.');
    }

    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        throw new Error('Method not implemented.');
    }

    getSecondaryModifierForItemInNamedCollection(name: string, item: any): Modifier {
        throw new Error('Method not implemented.');
    }

    getBadgeValueForItemInNamedCollection(name: string, item: any): number {
        throw new Error('Method not implemented.');
    }

    getBackgroundImageForItemInNamedCollection(name: string, item: any): string {
        throw new Error('Method not implemented.');
    }

    updateViewForNamedCollection(name: string, newState: any): void {
        throw new Error('Method not implemented.');
    }

    itemDeselected(view: View, selectedItem: any): void {
        logger(`Chat Log with id ${selectedItem.roomName} deselected`);
        if (this.selectedChatLog && (selectedItem.roomName === this.selectedChatLog.roomName)) {
            this.selectedChatLog = null;
            this.checkCanComment();
            this.clearChatLog();
        }
    }


    itemSelected(view: View, selectedItem: ChatLog): void {
        this.selectedChatLog = selectedItem;
        if (this.selectedChatLog) {
            logger(`Chat Log with id ${selectedItem.roomName} selected`);
            this.checkCanComment();
            this.renderChatLog(this.selectedChatLog);
        }
    }

    canDeleteItem(view: View, selectedItem: any): boolean {
        return true;
    }

    itemDeleted(view: View, selectedItem: any): void {
        logger(`Chat Log with ${selectedItem.roomName} deleting`);
        if (this.selectedChatLog && (this.selectedChatLog.roomName === selectedItem.roomName)) {
            this.checkCanComment();
            this.renderChatLog(this.selectedChatLog);
        }
    }

    hideRequested(view: View): void {
        this.selectedChatLog = null;
        this.checkCanComment();
        this.clearChatLog();
    }

    handlePatientDrop(event: Event) {
        logger('drop event on current chat room');
        if (this.selectedChatLog) {
            // @ts-ignore
            const draggedObjectJSON = event.dataTransfer.getData(DRAGGABLE_KEY_ID);
            const draggedObject = JSON.parse(draggedObjectJSON);
            logger(draggedObject);

            if (draggedObject[DRAGGABLE_TYPE] === APP_DRAGGABLE.typePatientSummary) {
                // send the patient as an attachment
                const roomName = this.selectedChatLog.roomName;
                const simpleAttachment: SimpleAttachment = {
                    identifier: draggedObject._id,
                    type: APP_DRAGGABLE.typePatientSummary,
                    displayText: `${draggedObject.name.firstname} ${draggedObject.name.surname}`,
                    iconClasses: 'fas fa-male'
                }
                let sentMessage: Message | null = ChatManager.getInstance().sendMessage(roomName, simpleAttachment.displayText, Priority.Normal, simpleAttachment, {});
                if (sentMessage) {
                    // add the message to our display
                    let messageEl = this.addChatMessage(sentMessage);
                    // scroll to bottom
                    if (messageEl) browserUtil.scrollSmoothTo(messageEl);
                }

            }
        }

    }

    handleChatLogUpdated(log: ChatLog): void {
        logger(`Handling chat log updates`);
        this.checkCanComment();
        this.renderChatLog(log);
    }

    handleAddMessage(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        logger(`Handling message event`);
        if (this.selectedChatLog) {
            if (this.commentEl && this.commentEl.value.trim().length === 0) return;
            const messageContent = this.commentEl.value.trim();
            this.commentEl.value = '';

            let priority = parseInt(this.priorityEl.value);
            if (isNaN(priority)) priority = Priority.Normal;

            let simpleAttachment: SimpleAttachment = {identifier: '', type: '', displayText: ''};
            if (this.currentlySelectedPatient) {
                simpleAttachment.identifier = this.currentlySelectedPatient._id;
                simpleAttachment.type = APP_DRAGGABLE.typePatientSummary;
                simpleAttachment.displayText = `${this.currentlySelectedPatient.name.firstname} ${this.currentlySelectedPatient.name.surname}`;
                simpleAttachment.iconClasses = 'fas fa-male';
            }

            let sentMessage: Message | null = ChatManager.getInstance().sendMessage(this.selectedChatLog.roomName, messageContent, priority, simpleAttachment, {});
            logger(sentMessage);
            if (sentMessage) {
                // add the message to our display
                let messageEl = this.addChatMessage(sentMessage);
                // scroll to bottom
                if (messageEl) browserUtil.scrollSmoothTo(messageEl);
            }

            this.currentlySelectedPatient = null;
            this.fastPatientSearch.value = '';
        }
    }


    addChatMessage(message: Message): HTMLElement | null {
        let chatMessageEl: HTMLElement | null = null;

        // ignore "join"/"exit" message?
        if (message.from.trim().length !== 0) {
            chatMessageEl = document.createElement('div');
            browserUtil.addRemoveClasses(chatMessageEl, "message");
            if (message.from === ChatManager.getInstance().getCurrentUser()) {
                browserUtil.addRemoveClasses(chatMessageEl, 'my-message');
            }

            // create and display a time stamp
            let messageSenderEl = document.createElement('div');
            browserUtil.addRemoveClasses(messageSenderEl, 'message-sender');
            messageSenderEl.innerText = message.from + '   ' + moment(message.created, 'YYYYMMDDHHmmss').format('DD/MM/YYYY HH:mm');
            chatMessageEl.appendChild(messageSenderEl);
            // message content
            let contentEl = document.createElement('div');


            // just a text message
            let classesTextAppend = '';
            switch (message.priority) {
                case Priority.High: {
                    classesTextAppend = '-high';
                    break;
                }
                case Priority.Urgent: {
                    classesTextAppend = '-urgent';
                    break;
                }
            }
            if (message.from === ChatManager.getInstance().getCurrentUser()) {
                browserUtil.addRemoveClasses(contentEl, `my-message-content${classesTextAppend}`);
            } else {
                browserUtil.addRemoveClasses(contentEl, `message-content${classesTextAppend}`);
            }
            contentEl.innerText = message.message;
            chatMessageEl.appendChild(contentEl);
            this.chatLogDiv.appendChild(chatMessageEl);




            // do we have a simple attachement?
            if (message.simpleAttachment.identifier.trim().length > 0) {
                chatMessageEl = document.createElement('div');
                browserUtil.addRemoveClasses(chatMessageEl, "message");
                if (message.from === ChatManager.getInstance().getCurrentUser()) {
                    browserUtil.addRemoveClasses(chatMessageEl, 'my-message');
                }

                // message content
                let contentEl = document.createElement('div');

                const attachment = message.simpleAttachment;
                // simple attachment - should be a patient summary
                let attachmentLinkEl = document.createElement('a');
                browserUtil.addAttributes(attachmentLinkEl, [{
                    name: 'data-type',
                    value: `${attachment.type}`
                }, {name: 'data-id', value: `${attachment.identifier}`}]);
                let buffer = '';
                if (attachment.iconClasses) {
                    buffer += `<i class="${attachment.iconClasses}"></i>`;
                }
                buffer += `&nbsp;&nbsp;${attachment.displayText}`;
                attachmentLinkEl.innerHTML = buffer;
                if (message.from === ChatManager.getInstance().getCurrentUser()) {
                    browserUtil.addRemoveClasses(contentEl, `my-message-content-${attachment.type}`);
                } else {
                    browserUtil.addRemoveClasses(contentEl, `message-content-${attachment.type}`);
                }
                contentEl.appendChild(attachmentLinkEl);
                attachmentLinkEl.addEventListener('click',this.handleAttachmentClicked);
                chatMessageEl.appendChild(contentEl);
                this.chatLogDiv.appendChild(chatMessageEl);
            }

        }

        return chatMessageEl;
    }

    reRenderChatMessages(chatLog: ChatLog) {
        browserUtil.removeAllChildren(this.chatLogDiv);
        let messageEl: HTMLElement | null = null;
        chatLog.messages.forEach((message: Message) => {
            messageEl = this.addChatMessage(message);
        });
        // scroll to the last message (if any)
        if (messageEl) browserUtil.scrollTo(messageEl);
    }

    renderChatLog(chatLog: ChatLog) {
        logger(`Chat Log ${chatLog.roomName} rendering`);
        if (this.selectedChatLog) {
            if (this.selectedChatLog.roomName === chatLog.roomName) {
                this.selectedChatLog = chatLog;
                ChatManager.getInstance().touchChatLog(chatLog.roomName);
                // render the chat conversation
                this.reRenderChatMessages(chatLog);
            }
        }
    }


    handleChatLogsUpdated(): void {
        if (this.selectedChatLog) {
            ChatManager.getInstance().touchChatLog(this.selectedChatLog.roomName);
            // render the chat conversation
            this.reRenderChatMessages(this.selectedChatLog);
        }
        this.checkCanComment();
    }

    handleChatStarted(log: ChatLog): void {
        this.selectedChatLog = log;
        this.renderChatLog(log);
    }

    stateChanged(managerName: string, name: string, newState: any): void {
        if (name === APP_STATE_NAMES.patientSearch) {
            logger(`Handling patient search results`);
            logger(newState);
            // load the search names into the search field
            const fastSearchEl = $(this.fastPatientSearch);
            // for each name, construct the patient details to display and the id referenced
            const fastSearchValues: any = [];
            newState.forEach((item: any) => {
                const searchValue = {
                    label: `${item.name.firstname} ${item.name.surname}`,
                    value: item._id,
                };
                fastSearchValues.push(searchValue);
            });
            fastSearchEl.autocomplete({source: fastSearchValues});
            fastSearchEl.autocomplete('option', {disabled: false, minLength: 1});
        }

    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {
        this.stateChanged(managerName, name, this.stateManager.getStateByName(name));
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
    }

    handleOfflineMessagesReceived(messages: Message[]): void {
    }

    handleInvitationDeclined(room: string, username: string): void {
    }

    handleNewInviteReceived(invite: Invitation): boolean {
        return true;
    }

    itemDragStarted(view: View, selectedItem: any): void {
    }

    itemAction(view: View, actionName: string, selectedItem: any): void {
    }

    documentLoaded(view: View): void {
    }

    showRequested(view: View): void {
    }

    itemDropped(view: View, droppedItem: any): void {
    }

    getName(): string {
        return VIEW_NAME.chatLog;
    }

    hidden(): void {
        this.hideRequested(this);
    }

    getDataSourceKeyId(): string {
        return "";
    }

    getUIConfig(): ViewDOMConfig {
        // @ts-ignore
        return undefined;
    }

    render(): void {
    }

    show(): void {
    }

    getItemDescription(from: string, item: any): string {
        return "";
    }

    getItemId(from: string, item: any): string {
        return "";
    }

    filterResults(managerName: string, name: string, filterResults: any): void {
    }

    private checkCanComment() {
        if (this.selectedChatLog) {
            if (this.commentEl) this.commentEl.removeAttribute("readonly");
            if (this.commentEl) this.commentEl.removeAttribute("disabled");
            if (this.sendMessageButton) this.sendMessageButton.removeAttribute("disabled");
            if (this.fastPatientSearch) this.fastPatientSearch.removeAttribute("disabled");
            if (this.priorityEl) this.priorityEl.removeAttribute("disabled");
        } else {
            if (this.commentEl) this.commentEl.setAttribute("readonly", "true");
            if (this.commentEl) this.commentEl.setAttribute("disabled", "true");
            if (this.sendMessageButton) this.sendMessageButton.setAttribute("disabled", "true");
            if (this.fastPatientSearch) this.fastPatientSearch.setAttribute("disabled", "true");
            if (this.priorityEl) this.priorityEl.setAttribute("disabled", "true");
        }

    }

    private clearChatLog() {
        browserUtil.removeAllChildren(this.chatLogDiv);
    }

    handlePatientSelected(event: Event, ui: any) {
        event.preventDefault();
        event.stopPropagation();
        logger(`Patient ${ui.item.label} with id ${ui.item.value} selected`);
        // @ts-ignore
        event.target.value = ui.item.label;
        this.currentlySelectedPatient = Controller.getInstance().getStateManager().findItemInState(APP_STATE_NAMES.patientSearch, {_id: ui.item.value});
        logger(this.currentlySelectedPatient);
    }

    handleAttachmentClicked(event:Event) {
        event.preventDefault();
        event.stopPropagation();
        const dataType = (<HTMLElement>event.target).getAttribute("data-type");
        const dataId = (<HTMLElement>event.target).getAttribute("data-id");
        logger(`Handling attachment clicked of type ${dataType} with identifier ${dataId}`);
        this.listeners.forEach((listener) => {
            listener.attachmentClicked(dataType,dataId);
        });

    }

    public addAttachmentListener(listener:AttachmentListener) {
        this.listeners.push(listener);
    }

}


