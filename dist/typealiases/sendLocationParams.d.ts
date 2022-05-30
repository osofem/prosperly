export declare type SendLocationParams = {
    chat_id: number | string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
};
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "./replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "./replyKeyboardRemove";
import { ForceReply } from "./forceReply";
