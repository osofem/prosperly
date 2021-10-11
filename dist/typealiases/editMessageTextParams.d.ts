export declare type EditMessageTextParams = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    text: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
};
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
