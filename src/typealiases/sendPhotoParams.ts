export type SendPhotoParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    photo: string; //Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More info on Sending Files »
    caption?: string; //Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
    parse_mode?: string; //Mode for parsing entities in the photo caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //List of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    reply_to_message_id?: number; //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean; //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";