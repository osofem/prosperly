import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultCachedVideo = {
    type: 'video' //Type of the result, must be video
    id: string //Unique identifier for this result, 1-64 bytes
    video_file_id: string //A valid file identifier for the video file
    title: string //Title for the result
    description?: string //Short description of the result
    caption?: string //Caption of the video to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the video caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the video
}