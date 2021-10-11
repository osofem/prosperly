import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup"
import { MessageEntity } from "../messageEntity"
import { InputMessageContent } from "./inputMessageContent"

export type InlineQueryResultDocument = {
    type: 'document' //Type of the result, must be document
    id: string //Unique identifier for this result, 1-64 bytes
    title: string //Title for the result
    caption?: string //Caption of the document to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the document caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    document_url: string //A valid URL for the file
    mime_type: 'application/pdf' | 'application/zip' //Mime type of the content of the file, either “application/pdf” or “application/zip”
    description?: string //Short description of the result
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the file
    thumb_url?: string //URL of the thumbnail (jpeg only) for the file
    thumb_width?: number //Thumbnail width
    thumb_height?: number //Thumbnail height
}