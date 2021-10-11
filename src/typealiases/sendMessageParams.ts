export type SendMessageParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    text: string; //Text of the message to be sent, 1-4096 characters after entities parsing
    parse_mode?: 'MarkdownV2' | 'Markdown' | 'HTML'; //Mode for parsing entities in the message text. See formatting options for more details.
    entities?: MessageEntity[]; //List of special entities that appear in message text, which can be specified instead of parse_mode
    disable_web_page_preview?: boolean; //Disables link previews for links in this message
    disable_notification?: boolean; //Sends the message silently. Users will receive a notification with no sound.
    reply_to_message_id?: number; //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean; //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply; //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
};

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";
