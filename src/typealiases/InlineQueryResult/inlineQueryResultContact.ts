import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultContact = {
    type: 'contact' //Type of the result, must be contact
    id: string //Unique identifier for this result, 1-64 Bytes
    phone_number: string //Contact's phone number
    first_name: string //Contact's first name
    last_name?: string //Contact's last name
    vcard?: string //Additional data about the contact in the form of a vCard, 0-2048 bytes
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the contact
    thumb_url?: string //Url of the thumbnail for the result
    thumb_width?: number //Thumbnail width
    thumb_height?: number //Thumbnail height
}