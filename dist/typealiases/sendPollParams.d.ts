export declare type SendPollParams = {
    chat_id: number | string;
    question: string;
    options: string[];
    is_anonymous?: boolean;
    type?: string;
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_parse_mode?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
    is_closed?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
};
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "./replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "./replyKeyboardRemove";
import { ForceReply } from "./forceReply";
