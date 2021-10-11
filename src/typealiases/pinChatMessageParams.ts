export type PinChatMessageParams = {
    chat_id: number | string //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number //Identifier of a message to pin
    disable_notification?: boolean //Pass True, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
}