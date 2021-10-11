import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultPhoto = {
    type: 'photo';
    id: string;
    photo_url: string;
    thumb_url: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
