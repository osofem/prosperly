export type SendVoiceParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    voice: string; //Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
    caption?: string; //Voice message caption, 0-1024 characters after entities parsing
    parse_mode?: string; //Mode for parsing entities in the voice message caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //List of special entities that appear in the caption, which can be specified instead of parse_mode
    duration?: number; //Duration of the voice message in seconds
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    reply_to_message_id?: number; //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean; //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";