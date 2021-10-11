export type EditMessageTextParams = {
    chat_id?: number | string //Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number //Required if inline_message_id is not specified. Identifier of the message to edit
    inline_message_id?: string //Required if chat_id and message_id are not specified. Identifier of the inline message
    text: string //New text of the message, 1-4096 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the message text. See formatting options for more details.
    entities?: MessageEntity[] //List of special entities that appear in message text, which can be specified instead of parse_mode
    disable_web_page_preview?: boolean //Disables link previews for links in this message
    reply_markup?: InlineKeyboardMarkup //A JSON-serialized object for an inline keyboard.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
