export type ForwardMessageParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    from_chat_id: number | string; //Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    disable_notification?: boolean //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    message_id: number //Message identifier in the chat specified in from_chat_id
}