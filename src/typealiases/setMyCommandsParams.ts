export type SetMyCommandsParams = {
    commands: BotCommand[] //A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
    scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember; //A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
    language_code?: string //A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
}

export type BotCommand = {
    command: string //Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
    description: string //Description of the command, 3-256 characters.
}


import { BotCommandScopeDefault, BotCommandScopeAllPrivateChats, BotCommandScopeAllGroupChats, BotCommandScopeAllChatAdministrators, BotCommandScopeChat, BotCommandScopeChatAdministrators, BotCommandScopeChatMember  } from "./botCommandScope"