import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultCachedMpeg4Gif = {
    type: 'mpeg4_gif';
    id: string;
    mpeg4_file_id: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
