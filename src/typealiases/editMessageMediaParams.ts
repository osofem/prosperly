export type EditMessageMediaParams = {
    chat_id?: number | string //Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number //Required if inline_message_id is not specified. Identifier of the message to edit
    inline_message_id?: string //Required if chat_id and message_id are not specified. Identifier of the inline message
    media: InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo //A JSON-serialized object for a new media content of the message
    reply_markup?: InlineKeyboardMarkup //A JSON-serialized object for a new inline keyboard.
}

import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {InputMediaAnimation} from "./inputMediaAnimation";
import {InputMediaAudio} from "./inputMediaAudio";
import {InputMediaDocument} from "./inputMediaDocument";
import {InputMediaPhoto} from "./inputMediaPhoto";
import {InputMediaVideo} from "./inputMediaVideo";