/// <reference types="node" />
import {Server} from 'socket.io';
import {Server as httpServer} from 'http';
import {ChatMessage, ChatRoom, ChatUser, DataMessage, InviteMessage, QueuedMessages} from "./SocketTypes";

declare class SocketManager {
    protected io: Server | null;
    protected rooms: ChatRoom[];
    protected users: ChatUser[];
    private getUserList;
    private checkForExpiredRooms;
    private touchRoom;

    constructor();

    connectToServer(httpServer: httpServer): void;

    listen(): void;

    sendDataMessage(message: DataMessage): void;

    protected findUser(username: string): ChatUser | undefined;

    protected findUserBySocket(socketId: any): ChatUser | undefined;

    protected removeUserBySocket(socketId: any): void;

    protected removeUser(username: any): void;

    protected login(socketId: any, username: string): ChatUser;

    protected findOrCreateRoom(roomName: string, type: number): ChatRoom;

    protected getUserListForRoom(roomName: string, type: number): string[];

    protected inviteUserToRoom(inviteFrom: string, inviteTo: string, roomName: string, type: number, requiresAcceptDecline?: boolean, subject?: string, attachment?: any): void;

    protected sendInviteMessageToUser(receiver: ChatUser, message: InviteMessage): void;

    protected sendQueuedItemsToUser(user: ChatUser, queuedItems: QueuedMessages): void;

    protected createMessageForRoom(author: string, roomName: string, message: string, created: number, type: number, priority?: number, attachment?: any): ChatMessage | null;

    protected addUserToRoom(socketId: string, username: string, roomName: string, type: number): void;

    protected removeUserFromRoom(username: string, roomName: string, type: number): void;

    protected removeRoom(room: ChatRoom): void;

    protected logout(socketId: any): ChatUser | undefined;

    protected queueMessagesForOfflineRoomUsers(message: ChatMessage): void;
}

declare let socketManager: SocketManager;
export = socketManager;
