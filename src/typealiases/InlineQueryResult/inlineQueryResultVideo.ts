import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup"
import { MessageEntity } from "../messageEntity"
import { InputMessageContent } from "./inputMessageContent"

export type InlineQueryResultVideo ={
    type: 'video' //Type of the result, must be video
    id: string //Unique identifier for this result, 1-64 bytes
    video_url: string //A valid URL for the embedded video player or video file
    mime_type: 'text/html' | 'video/mp4' //Mime type of the content of video url, “text/html” or “video/mp4”
    thumb_url: string //URL of the thumbnail (jpeg only) for the video
    title: string //Title for the result
    caption?: string //Caption of the video to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the video caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    video_width?: number //Video width
    video_height?: number //Video height
    video_duration?: number //Video duration in seconds
    description?: string //Short description of the result
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
}