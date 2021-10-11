import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultContact = {
    type: 'contact';
    id: string;
    phone_number: string;
    first_name: string;
    last_name?: string;
    vcard?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
