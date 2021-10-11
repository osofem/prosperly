import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultCachedSticker = {
    type: 'sticker' //Type of the result, must be sticker
    id: string //Unique identifier for this result, 1-64 bytes
    sticker_file_id: string //A valid file identifier of the sticker
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the sticker
}