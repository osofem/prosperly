export declare type SendVideoNoteParams = {
    chat_id: number | string;
    video_note: string;
    duration?: number;
    length?: number;
    thumb?: string;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
};
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "./replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "./replyKeyboardRemove";
import { ForceReply } from "./forceReply";
