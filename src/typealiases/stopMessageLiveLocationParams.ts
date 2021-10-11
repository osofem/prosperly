export type StopMessageLiveLocationParams = {
    chat_id?: number | string; //Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number; //Required if inline_message_id is not specified. Identifier of the message with live location to stop
    inline_message_id?: string; //Required if chat_id and message_id are not specified. Identifier of the inline message
    reply_markup?: InlineKeyboardMarkup; //A JSON-serialized object for a new inline keyboard.
}

import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";