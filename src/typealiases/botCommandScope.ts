export type BotCommandScopeDefault = {type: 'default'};
export type BotCommandScopeAllPrivateChats = {type: 'all_private_chats'};
export type BotCommandScopeAllGroupChats = {type: 'all_group_chats'};
export type BotCommandScopeAllChatAdministrators = {type: 'all_chat_administrators'};   
export type BotCommandScopeChat = {type: 'chat'; chat_id: number | string};
export type BotCommandScopeChatAdministrators = {type: 'chat_administrators'; chat_id: number | string};
export type BotCommandScopeChatMember = {type: 'chat_member'; chat_id: number | string; user_id: number};
