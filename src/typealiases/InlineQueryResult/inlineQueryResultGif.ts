import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultGif = {
    type: 'gif' //Type of the result, must be gif
    id: string //Unique identifier for this result, 1-64 bytes
    gif_url: string //A valid URL for the GIF file. File size must not exceed 1MB
    gif_width?: number //Width of the GIF
    gif_height?: number //Height of the GIF
    gif_duration?: number //Duration of the GIF
    thumb_url?: string //URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
    thumb_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4' //MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
    title?: string //Title for the result
    caption?: string //Caption of the GIF file to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the GIF animation
}