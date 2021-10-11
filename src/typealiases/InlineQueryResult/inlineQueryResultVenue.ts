import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultVenue = {
    type: 'venue' //Type of the result, must be venue
    id: string //Unique identifier for this result, 1-64 Bytes
    latitude: number //Latitude of the venue location in degrees
    longitude: number //Longitude of the venue location in degrees
    title: string //Title of the venue
    address: string //Address of the venue
    foursquare_id?: string //Foursquare identifier of the venue if known
    foursquare_type?: string //Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
    google_place_id?: string //Google Places identifier of the venue
    google_place_type?: string //Google Places type of the venue. (See supported types.)
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the venue
    thumb_url?: string //Url of the thumbnail for the result
    thumb_width?: number //Thumbnail width
    thumb_height?: number //Thumbnail height
}