export declare type EditMessageLiveLocationParams = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
};
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
