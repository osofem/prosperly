export declare type CopyMessageParams = {
    chat_id: number | string;
    from_chat_id: number | string;
    message_id: number;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
};
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "./replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "./replyKeyboardRemove";
import { ForceReply } from "./forceReply";
