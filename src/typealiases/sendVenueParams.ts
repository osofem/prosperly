export type SendVenueParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    latitude: number //Latitude of the venue
    longitude: number //Longitude of the venue
    title: string //Name of the venue
    address: string //Address of the venue
    foursquare_id?: string //Foursquare identifier of the venue
    foursquare_type?: string //Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
    google_place_id?: string //Google Places identifier of the venue
    google_place_type?: string //Google Places type of the venue. (See supported types.)
    disable_notification?: boolean //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    reply_to_message_id?: number //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?:	InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";