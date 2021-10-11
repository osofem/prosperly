import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultCachedSticker = {
    type: 'sticker';
    id: string;
    sticker_file_id: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
