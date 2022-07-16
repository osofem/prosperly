/// <reference types="node" />
import Events from 'events';
export default class Prosperly extends Events {
    #private;
    version: string;
    /**
     * Constructor. Declares bot token and start building API URL. Setup webhook if webhookParams is specified and server for listening if serverless is false
     * @param botToken bot token gotten from \@BotFather
     * @param webhookParams webhook parameter that specify url and other information. Object of type {@link SetWebhookParams}
     * @param serverless specify if the app is to be serverless. Default is false (that is a server will be initialiated). Note if true then app can't receive event messages
     *
     * @example
     * const myBotToken = 'YOUR-BOT-TOKEN';
     * const webhookURL = 'https://example.com:8080/some-path';
     *
     * const Prosperly = require('prosperly');
     * const bot = new Prosperly({
     *  //Bot token
     *  botToken: myBotToken,
     *  //webhook parameters
     *  webhookParams: {
     *    url: webhookURL
     *  },
     *  //for serverless environment, set serverless to true
     *  serverless: true
     * });
     */
    constructor(contents: {
        botToken: string;
        webhookParams?: SetWebhookParams;
        serverless?: boolean;
    });
    /**
    * Use this method to receive incoming updates using long polling
    * @param contents Objects to specify the update parameters to receive. Object of type {@link GetUpdateParams}
    * @return Promise of an Array of Update objects.
    *
    * @example
    * const myBotToken = 'YOUR-BOT-TOKEN';
    * const Prosperly = require('prosperly');
    * const bot = new Prosperly({
    *   botToken: myBotToken
    * });
    *
    * bot.getUpdates({
    *   offset: 0,
    *   limit: 10, //max is 100
    *   timeout: 10,
    *   //optionally set allowed updates
    *   allowed_updates: ["message", "edited_channel_post", "callback_query"]
    * }).then((data)=>{
    *   //do something with the array of objects
    * }).catch((err)=>{
    *   //catch some errors
    * });
    *
    * */
    getUpdates(contents?: GetUpdateParams): Promise<string>;
    /**
    * Use this method to specify a url and receive incoming updates via an outgoing webhook
    * @param contents Object to specify the webhook parameters. Object of type {@link SetWebhookParams}
    * @return Promise of True on success.
    *
    * @example
    * const myBotToken = 'YOUR-BOT-TOKEN';
    * const webhookURL = 'https://example.com:8080/some-path';
    *
    * const Prosperly = require('prosperly');
    * const bot = new Prosperly({botToken: myBotToken});
    *
    * bot.setWebhook({
    *   url: webhookURL,
    *   //everything from here is optional
    *   certificate: certificateFile,
    *   ip_address: ip,
    *   max_connections: maxConnectionToAllow,
    *   //Specify the updates you want to receive, if you dont want to receive all updates
    *   allowed_updates: ["message", "edited_channel_post", "callback_query"],
    *   drop_pending_updates: "false"
    * }, true).then((data)=>{
    *   //set webhook successful, do something
    * }).catch((err)=>{
    *   //catch some errors
    * });
    *
    * */
    setWebhook(contents: SetWebhookParams, serverless?: boolean): Promise<string | void>;
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates
     * @param contents Object of {drop_pending_updates?: boolean}
     * @return Promise of True on success.
     * */
    deleteWebhook(contents?: {
        drop_pending_updates?: boolean;
    }): Promise<string>;
    /**
     * Use this method to get current webhook status
     * @return Promise of WebhookInfo object
     * */
    getWebhookInfo(): Promise<string>;
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters.
     * @return Returns Promise of basic information about the bot in form of a User object.
     * */
    getMe(): Promise<string>;
    /**
     * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes
     * @return Returns Promise of true on success. Requires no parameters.
     * */
    logOut(): Promise<string>;
    /**
     * Requires no parameters. close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart
     * @return Returns Promise of true on success. Requires no parameters.
     * */
    close(): Promise<string>;
    /**
     * Use this method to send text messages.
     * @param contents Object of type SendMessageParams
     * @return On success Promise of the sent Message is returned.
     * */
    sendMessage(contents: SendMessageParams): Promise<string>;
    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded.
     * @param contents Object of type ForwardMessageParams
     * @return On success Promise of the sent Message is returned.
     * */
    forwardMessage(contents: ForwardMessageParams): Promise<string>;
    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied
     * @param contents Object of type CopyMessageParams
     * @return Returns Promise of the MessageId of the sent message on success.
     */
    copyMessage(contents: CopyMessageParams): Promise<string>;
    /**
     * Use this method to send photos.
     * @param contents Object of the type SendPhotoParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendPhoto(contents: SendPhotoParams): Promise<string>;
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format
     * @param contents Object of the type SendAudioParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendAudio(contents: SendAudioParams): Promise<string>;
    /**
     * Use this method to send general files
     * @param contents Object of the type SendDocumentParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendDocument(contents: SendDocumentParams): Promise<string>;
    /**
     * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document)
     * @param contents Object of the type SendVideoParam
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVideo(contents: SendVideoParams): Promise<string>;
    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound)
     * @param contents Object of the type SendAnimationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendAnimation(contents: SendAnimationParams): Promise<string>;
    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document)
     * @param contents Object of the type SendAnimationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVoice(contents: SendVoiceParams): Promise<string>;
    /**
     * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages.
     * @param contents Object of the type SendVideoNoteParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVideoNote(contents: SendVideoNoteParams): Promise<string>;
    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type.
     * @param contents Object of the type SendMediaGroupParams
     * @return On success, the Promise of an array of sent Messages is returned.
     */
    sendMediaGroup(contents: SendMediaGroupParams): Promise<string>;
    /**
     * Use this method to send point on the map.
     * @param contents Object of the type SendLocationParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendLocation(contents: SendLocationParams): Promise<string>;
    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation.
     * @param contents Object of the type EditMessageLiveLocationParams
     * @return On success, if the edited message is not an inline message, the Promise the edited Message is returned, otherwise Promise of True is returned.
     */
    editMessageLiveLocation(contents: EditMessageLiveLocationParams): Promise<string>;
    /**
     * Use this method to stop updating a live location message before live_period expires.
     * @param contents Object of the type StopMessageLiveLocationParams
     * @return On success, if the edited message is not an inline message, the Promise the edited Message is returned, otherwise Promise of True is returned.
     */
    stopMessageLiveLocation(contents: StopMessageLiveLocationParams): Promise<string>;
    /**
     * Use this method to send information about a venue.
     * @param contents Object of the type SendVenueParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendVenue(contents: SendVenueParams): Promise<string>;
    /**
     * Use this method to send phone contacts.
     * @param contents Object of the type SendContactParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendContact(contents: SendContactParams): Promise<string>;
    /**
     * Use this method to send a native poll.
     * @param contents Object of the type SendPollParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendPoll(contents: SendPollParams): Promise<string>;
    /**
     * Use this method to send an animated emoji that will display a random value.
     * @param contents Object of the type SendDiceParams
     * @return On success, the Promise of the sent Message is returned.
     */
    sendDice(contents: SendDiceParams): Promise<string>;
    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
     * @param contents Object of the type SendChatActionParams
     * @return Returns Promise of True on success.
     */
    sendChatAction(contents: SendChatActionParams): Promise<string>;
    /**
     * Use this method to get a list of profile pictures for a user.
     * @param contents Object of the type GetUserProfilePhotosParams
     * @return Returns Promise of a UserProfilePhotos object.
     */
    getUserProfilePhotos(contents: GetUserProfilePhotosParams): Promise<string>;
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size
     * @param contents Object {file_id: string}
     * @return On success, a Promise of File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot+token/file_path, where file_path is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     */
    getFile(contents: {
        file_id: string;
    }): Promise<string>;
    /**
     * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type BanChatMemberParams
     * @return Returns Promise of True on success.
     */
    banChatMember(contents: BanChatMemberParams): Promise<string>;
    /**
     * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned.
     * @param contents Object of the type UnbanChatMemberParams
     * @return Returns Promise of True on success.
     */
    unbanChatMember(contents: UnbanChatMemberParams): Promise<string>;
    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user.
     * @param contents Object of the type RestrictChatMemberParams
     * @return Returns Promise of True on success.
     */
    restrictChatMember(contents: RestrictChatMemberParams): Promise<string>;
    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
     * @param contents Object of the type PromoteChatMemberParams
     * @return Returns Promise of True on success.
     */
    promoteChatMember(contents: PromoteChatMemberParams): Promise<string>;
    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
     * @param contents Object of the type SetChatAdministratorCustomTitleParams
     * @return Returns Promise of True on success.
     */
    setChatAdministratorCustomTitle(contents: SetChatAdministratorCustomTitleParams): Promise<string>;
    /**
     * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights.
     * @param contents Object of {chat_id; sender_chat_id}
     * @returns Returns Promise of True on success.
     *
     * chat_id: string|number Unique identifier for the target chat or username of the target channel
     *
     * sender_chat_id: number Unique identifier of the target sender chat
     */
    banChatSenderChat(contents: {
        chat_id: string | number;
        sender_chat_id: number;
    }): Promise<string>;
    /**
     * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights.
     * @param contents Object of {chat_id; sender_chat_id}
     * @returns Returns Promise of True on success.
     *
     * chat_id: string|number Unique identifier for the target chat or username of the target channel
     *
     * sender_chat_id: number Unique identifier of the target sender chat
     */
    unbanChatSenderChat(contents: {
        chat_id: string | number;
        sender_chat_id: number;
    }): Promise<string>;
    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights.
     * @param contents Object of the type SetChatPermissionsParams
     * @return Returns Promise of True on success.
     */
    setChatPermissions(contents: SetChatPermissionsParams): Promise<string>;
    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param chatID Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @return Returns Promise of the new invite link as String on success.
     */
    exportChatInviteLink(chatID: number | string): Promise<string>;
    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. The link can be revoked using the method revokeChatInviteLink.
     * @param contents Object of the type CreateChatInviteLinkParams
     * @return Returns the new invite link as a Promise of ChatInviteLink object.
     */
    createChatInviteLink(contents: CreateChatInviteLinkParams): Promise<string>;
    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type EditChatInviteLinkParams
     * @return Returns the edited invite link as a Promise of ChatInviteLink object.
     */
    editChatInviteLink(contents: EditChatInviteLinkParams): Promise<string>;
    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents Object of the type RevokeChatInviteLinkParams
     * @returns Returns the revoked invite link as a Promise of ChatInviteLink object.
     */
    revokeChatInviteLink(contents: RevokeChatInviteLinkParams): Promise<string>;
    /**
     * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
     * @param contents Object of {chat_id: string|number; user_id: string|number}. chat_id: Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id: Unique identifier of the target user
     * @return Returns Promise of True on success
     */
    approveChatJoinRequest(contents: {
        chat_id: string | number;
        user_id: string | number;
    }): Promise<string>;
    /**
     * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
     * @param contents Object of {chat_id: string|number; user_id: string|number}. chat_id: Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id: Unique identifier of the target user
     * @returns Returns Promise of True on success
     */
    declineChatJoinRequest(contents: {
        chat_id: string | number;
        user_id: string | number;
    }): Promise<string>;
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: string | number; photo: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). photo - New chat photo, MUST be uploaded using multipart/form-data
     * @return  Returns Promise of True on success.
     */
    setChatPhoto(contents: {
        chat_id: string | number;
        photo: string;
    }): Promise<string>;
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    deleteChatPhoto(chatID: number | string): Promise<string>;
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: number | string; title: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). title - New chat title, 1-255 characters
     * @return Returns Promise of True on success.
     */
    setChatTitle(contents: {
        chat_id: number | string;
        title: string;
    }): Promise<string>;
    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * @param contents \{chat_id: number | string; description: string}. chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). description - New chat description, 0-255 characters
     * @return Returns Promise of True on success.
     */
    setChatDescription(contents: {
        chat_id: number | string;
        description: string;
    }): Promise<string>;
    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param contents Object of the type PinChatMessageParams
     * @return Returns Promise of True on success.
     */
    pinChatMessage(contents: PinChatMessageParams): Promise<string>;
    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param contents \{chat_id: number | string; message_id: number} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). message_id - Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
     * @return Returns Promise of True on success.
     */
    unpinChatMessage(contents: {
        chat_id: number | string;
        message_id: number;
    }): Promise<string>;
    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    unpinAllChatMessages(chatID: number | string): Promise<string>;
    /**
     * Use this method for your bot to leave a group, supergroup or channel.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    leaveChat(chatID: number | string): Promise<string>;
    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns the Promise of a Chat object on success.
     */
    getChat(chatID: number | string): Promise<string>;
    /**
     * Use this method to get a list of administrators in a chat.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return On success, returns Promise of an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
     */
    getChatAdministrators(chatID: number | string): Promise<string>;
    /**
     * Use this method to get the number of members in a chat.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of integer on success.
     */
    getChatMemberCount(chatID: number | string): Promise<string>;
    /**
     * Use this method to get information about a member of a chat.
     * @param contents \{chat_id: number | string; user_id: number} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). user_id - Unique identifier of the target user
     * @return Returns a ChatMember object on success.
     */
    getChatMember(contents: {
        chat_id: number | string;
        user_id: number;
    }): Promise<string>;
    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
     * @param contents contents \{chat_id: number | string; sticker_set_name: string} chat_id - Unique identifier for the target chat or username of the target channel (in the format \@channelusername). sticker_set_name - Name of the sticker set to be set as the group sticker set
     * @returns Returns Promise of True on success.
     */
    setChatStickerSet(contents: {
        chat_id: number | string;
        sticker_set_name: string;
    }): Promise<string>;
    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
     * @param chatID chatID Unique identifier for the target chat or username of the target channel (in the format \@channelusername)
     * @return Returns Promise of True on success.
     */
    deleteChatStickerSet(chatID: number | string): Promise<string>;
    /**
     * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
     * @param contents Object of the type AnswerCallbackQueryParams
     * @return Returns Promise of True on success.
     */
    answerCallbackQuery(contents: AnswerCallbackQueryParams): Promise<string>;
    /**
     * Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands.
     * @param contents Object of the type SetMyCommandsParams
     * @return Returns Promise of True on success.
     */
    setMyCommands(contents: SetMyCommandsParams): Promise<string>;
    /**
     * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users.
     * @param contents \{scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember; language_code?: string}
     * @return Returns Promise of True on success.
     */
    deleteMyCommands(contents: {
        scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;
        language_code?: string;
    }): Promise<string>;
    /**
     * Use this method to get the current list of the bot's commands for the given scope and user language.
     * @param contents \{scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember; language_code?: string}
     * @return Returns Promise of Array of BotCommand on success. If commands aren't set, an empty list is returned.
     */
    getMyCommands(contents: {
        scope?: BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;
        language_code?: string;
    }): Promise<string>;
    /**
     * Use this method to change the bot's menu button in a private chat, or the default menu button.
     * @param contents Object of the type SetChatMenuButtonParams
     * @return Returns True on success.
     */
    setChatMenuButton(contents: SetChatMenuButtonParams): Promise<string>;
    /**
     * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
     * @param contents chat_id Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
     * @return Returns MenuButton on success.
     */
    getChatMenuButton(contents: {
        chat_id?: number | string;
    }): Promise<string>;
    /**
     * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are are free to modify the list before adding the bot.
     * @param contents Object of the type SetMyDefaultAdministratorRightsParams
     * @return Returns True on success.
     */
    setMyDefaultAdministratorRights(contents: SetMyDefaultAdministratorRightsParams): Promise<string>;
    /**
     * Use this method to get the current default administrator rights of the bot.
     * @param contents for_channels Boolean Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
     * @return Returns ChatAdministratorRights on success.
     */
    getMyDefaultAdministratorRights(contents: {
        for_channels?: boolean;
    }): Promise<string>;
    /**
     * Use this method to edit text and game messages.
     * @param contents Object of type EditMessageTextParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageText(contents: EditMessageTextParams): Promise<string>;
    /**
     * Use this method to edit captions of messages.
     * @param contents Object of type EditMessageCaptionParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageCaption(contents: EditMessageCaptionParams): Promise<string>;
    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL.
     * @param contents Object of type EditMessageMediaParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageMedia(contents: EditMessageMediaParams): Promise<string>;
    /**
     * Use this method to edit only the reply markup of messages.
     * @param contents Object of type EditMessageReplyMarkupParams
     * @return On success, if the edited message is not an inline message, the Promise of the edited Message is returned, otherwise True is returned.
     */
    editMessageReplyMarkup(contents: EditMessageReplyMarkupParams): Promise<string>;
    /**
     * Use this method to stop a poll which was sent by the bot.
     * @param contents Object of type StopPollParams
     * @return On success, the Promise of the stopped Poll is returned.
     */
    stopPoll(contents: StopPollParams): Promise<string>;
    /**
     * Use this method to delete a message, including service messages, with the following limitations:
        - A message can only be deleted if it was sent less than 48 hours ago.
        - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
        - Bots can delete outgoing messages in private chats, groups, and supergroups.
        - Bots can delete incoming messages in private chats.
        - Bots granted can_post_messages permissions can delete outgoing messages in channels.
        - If the bot is an administrator of a group, it can delete any message there.
        - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.

     * @param contents \{chat_id: number | string; message_id: number}
     * @return Returns Promise of True on success.
     */
    deleteMessage(contents: {
        chat_id: number | string;
        message_id: number;
    }): Promise<string>;
    /**
     * Use this method to send answers to an inline query. No more than 50 results per query are allowed.
     * @param contents Object of type AnswerInlineQueryParams
     * @return On success, Promise of True is returned.
     */
    answerInlineQuery(contents: AnswerInlineQueryParams): Promise<string>;
    /**
     * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated.
     * @param contents Object of the type AnswerWebAppQueryParams
     * @return On success, a SentWebAppMessage object is returned.
     */
    answerWebAppQuery(contents: AnswerWebAppQueryParams): Promise<string>;
    /**
     * Use this method to send invoices.
     * @param contents Object of type SendInvoiceParams
     * @returns On success, promise of the sent Message is returned
     */
    sendInvoice(contents: SendInvoiceParams): Promise<string>;
    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries.
     * @param contents Object of type AnswerShippingQueryParams
     * @returns On success, promise of True is returned.
     */
    answerShippingQuery(contents: AnswerShippingQueryParams): Promise<string>;
    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries.
     * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     * @param contents Object of type AnswerPreCheckoutQueryParams
     * @returns On success, promise of True is returned.
     */
    answerPreCheckoutQuery(contents: AnswerPreCheckoutQueryParams): Promise<string>;
}
import { GetUpdateParams } from "./typealiases/getUpdateParams";
import { SetWebhookParams } from "./typealiases/setWebhookParams";
import { SendMessageParams } from "./typealiases/sendMessageParams";
import { ForwardMessageParams } from "./typealiases/forwardMessageParams";
import { CopyMessageParams } from "./typealiases/copyMessageParams";
import { SendPhotoParams } from "./typealiases/sendPhotoParams";
import { SendAudioParams } from "./typealiases/sendAudioParams";
import { SendDocumentParams } from "./typealiases/sendDocumentParams";
import { SendVideoParams } from "./typealiases/sendVideoParams";
import { SendAnimationParams } from "./typealiases/sendAnimationParams";
import { SendVoiceParams } from "./typealiases/sendVoiceParams";
import { SendVideoNoteParams } from "./typealiases/sendVideoNoteParams";
import { SendMediaGroupParams } from "./typealiases/sendMediaGroupParams";
import { SendLocationParams } from "./typealiases/sendLocationParams";
import { EditMessageLiveLocationParams } from "./typealiases/editMessageLiveLocationParams";
import { StopMessageLiveLocationParams } from "./typealiases/stopMessageLiveLocationParams";
import { SendVenueParams } from "./typealiases/sendVenueParams";
import { SendContactParams } from "./typealiases/sendContactParams";
import { SendPollParams } from "./typealiases/sendPollParams";
import { SendDiceParams } from "./typealiases/sendDiceParams";
import { SendChatActionParams } from "./typealiases/sendChatActionParams";
import { GetUserProfilePhotosParams } from "./typealiases/getUserProfilePhotosParams";
import { BanChatMemberParams } from "./typealiases/banChatMemberParams";
import { UnbanChatMemberParams } from "./typealiases/unbanChatMemberParams";
import { RestrictChatMemberParams } from './typealiases/restrictChatMemberParams';
import { PromoteChatMemberParams } from './typealiases/promoteChatMemberParams';
import { SetChatAdministratorCustomTitleParams } from './typealiases/setChatAdministratorCustomTitleParams';
import { SetChatPermissionsParams } from './typealiases/setChatPermissionsParams';
import { CreateChatInviteLinkParams } from './typealiases/createChatInviteLinkParams';
import { EditChatInviteLinkParams } from './typealiases/editChatInviteLinkParams';
import { RevokeChatInviteLinkParams } from './typealiases/revokeChatInviteLinkParams';
import { PinChatMessageParams } from './typealiases/pinChatMessageParams';
import { AnswerCallbackQueryParams } from './typealiases/answerCallbackQueryParams';
import { SetMyCommandsParams } from './typealiases/setMyCommandsParams';
import { BotCommandScopeDefault, BotCommandScopeAllPrivateChats, BotCommandScopeAllGroupChats, BotCommandScopeAllChatAdministrators, BotCommandScopeChat, BotCommandScopeChatAdministrators, BotCommandScopeChatMember } from "./typealiases/botCommandScope";
import { EditMessageTextParams } from './typealiases/editMessageTextParams';
import { EditMessageCaptionParams } from './typealiases/editMessageCaptionParams';
import { EditMessageMediaParams } from './typealiases/editMessageMediaParams';
import { EditMessageReplyMarkupParams } from './typealiases/editMessageReplyMarkupParams';
import { StopPollParams } from './typealiases/stopPollParams';
import { AnswerInlineQueryParams } from './typealiases/InlineQueryResult/answerInlineQueryParams';
import { SendInvoiceParams } from './typealiases/sendInvoiceParams';
import { AnswerShippingQueryParams } from './typealiases/answerShippingQueryParams';
import { AnswerPreCheckoutQueryParams } from './typealiases/answerPreCheckoutQueryParams';
import { AnswerWebAppQueryParams } from './typealiases/InlineQueryResult/answerWebAppQueryParams';
import { SetChatMenuButtonParams } from './typealiases/setChatMenuButtonParams';
import { SetMyDefaultAdministratorRightsParams } from './typealiases/setMyDefaultAdministratorRightsParams';
