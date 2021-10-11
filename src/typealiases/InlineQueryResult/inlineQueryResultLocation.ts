import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup"
import { InputMessageContent } from "./inputMessageContent"

export type InlineQueryResultLocation = {
    type: 'location' //Type of the result, must be location
    id: string //Unique identifier for this result, 1-64 Bytes
    latitude: number //Location latitude in degrees
    longitude: number //Location longitude in degrees
    title: string //Location title
    horizontal_accuracy?: number //The radius of uncertainty for the location, measured in meters; 0-1500
    live_period?: number //Period in seconds for which the location can be updated, should be between 60 and 86400.
    heading?: number //For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
    proximity_alert_radius?: number //For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the location
    thumb_url?: string //Url of the thumbnail for the result
    thumb_width?: number //Thumbnail width
    thumb_height?: number //Thumbnail height
}