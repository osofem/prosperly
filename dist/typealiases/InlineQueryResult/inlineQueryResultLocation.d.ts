import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultLocation = {
    type: 'location';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
