import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultMpeg4Gif = {
    type: 'mpeg4_gif' //Type of the result, must be mpeg4_gif
    id: string //Unique identifier for this result, 1-64 bytes
    mpeg4_url: string //A valid URL for the MP4 file. File size must not exceed 1MB
    mpeg4_width?: number //Video width
    mpeg4_height?: number //Video height
    mpeg4_duration?: number //Video duration
    thumb_url: string //URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
    thumb_mime_type?: string //MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
    title?: string //Title for the result
    caption?: string //Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the video animation
}