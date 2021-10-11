export type EditMessageCaptionParams = {
    chat_id?: number | string //Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number //Required if inline_message_id is not specified. Identifier of the message to edit
    inline_message_id?: string //Required if chat_id and message_id are not specified. Identifier of the inline message
    caption?: string //New caption of the message, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the message caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?:	InlineKeyboardMarkup //A JSON-serialized object for an inline keyboard.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";