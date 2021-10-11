export type EditMessageLiveLocationParams = {
    chat_id?: number | string; //Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id?: number; //Required if inline_message_id is not specified. Identifier of the message to edit
    inline_message_id?: string; //Required if chat_id and message_id are not specified. Identifier of the inline message
    latitude: number; //Latitude of new location
    longitude: number; //Longitude of new location
    horizontal_accuracy?: number; //The radius of uncertainty for the location, measured in meters; 0-1500
    heading?: number; //Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
    proximity_alert_radius?: number; //Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
    reply_markup?: 	InlineKeyboardMarkup; //A JSON-serialized object for a new inline keyboard.
}

import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";