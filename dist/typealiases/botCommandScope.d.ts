export declare type BotCommandScopeDefault = {
    type: 'default';
};
export declare type BotCommandScopeAllPrivateChats = {
    type: 'all_private_chats';
};
export declare type BotCommandScopeAllGroupChats = {
    type: 'all_group_chats';
};
export declare type BotCommandScopeAllChatAdministrators = {
    type: 'all_chat_administrators';
};
export declare type BotCommandScopeChat = {
    type: 'chat';
    chat_id: number | string;
};
export declare type BotCommandScopeChatAdministrators = {
    type: 'chat_administrators';
    chat_id: number | string;
};
export declare type BotCommandScopeChatMember = {
    type: 'chat_member';
    chat_id: number | string;
    user_id: number;
};
