import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";
export declare type InlineQueryResultVenue = {
    type: 'venue';
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
