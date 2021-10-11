import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultAudio = {
    type: 'audio';
    id: string;
    audio_url: string;
    title: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    performer?: string;
    audio_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
