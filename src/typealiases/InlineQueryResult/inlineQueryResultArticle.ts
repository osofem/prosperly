import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultArticle = {
    type: 'article' //Type of the result, must be article
    id: string //Unique identifier for this result, 1-64 Bytes
    title: string //Title of the result
    input_message_content: InputMessageContent //Content of the message to be sent
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    url?: string //URL of the result
    hide_url?: boolean //Pass True, if you don't want the URL to be shown in the message
    description?: string //Short description of the result
    thumb_url?: string //Url of the thumbnail for the result
    thumb_width?: number //Thumbnail width
    thumb_height?: number //Thumbnail height
}