import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultDocument = {
    type: 'document';
    id: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    document_url: string;
    mime_type: 'application/pdf' | 'application/zip';
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
