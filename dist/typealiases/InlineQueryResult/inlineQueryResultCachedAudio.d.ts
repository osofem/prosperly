import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultCachedAudio = {
    type: 'audio';
    id: string;
    audio_file_id: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
