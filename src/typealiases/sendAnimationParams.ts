export type SendAnimationParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    animation: string; //Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More info on Sending Files »
    duration?: number; //Duration of sent animation in seconds
    width?: number; //Animation width
    height?: number; //Animation height
    thumb?: string; //Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
    caption?: string; //Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
    parse_mode?: string; //Mode for parsing entities in the animation caption. See formatting options for more details.
    caption_entities?: MessageEntity[]; //List of special entities that appear in the caption, which can be specified instead of parse_mode
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    reply_to_message_id?: number; //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean; //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";