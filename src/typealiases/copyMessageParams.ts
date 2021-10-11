export type CopyMessageParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    from_chat_id: number | string; //Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
    message_id: number; //Message identifier in the chat specified in from_chat_id
    caption?: string; //New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
    parse_mode?: string; //Mode for parsing entities in the new caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //List of special entities that appear in the new caption, which can be specified instead of parse_mode
    disable_notification?: boolean //Sends the message silently. Users will receive a notification with no sound.
    reply_to_message_id?: number //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {MessageEntity} from './messageEntity';
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";