export declare type EditMessageCaptionParams = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
};
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
