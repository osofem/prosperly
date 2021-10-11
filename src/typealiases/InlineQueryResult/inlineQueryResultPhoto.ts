import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultPhoto = {
    type: 'photo' //Type of the result, must be photo
    id: string //Unique identifier for this result, 1-64 bytes
    photo_url: string //A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
    thumb_url: string //URL of the thumbnail for the photo
    photo_width?: number //Width of the photo
    photo_height?: number //Height of the photo
    title?: string //Title for the result
    description?: string //Short description of the result
    caption?: string //Caption of the photo to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the photo caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the photo
}