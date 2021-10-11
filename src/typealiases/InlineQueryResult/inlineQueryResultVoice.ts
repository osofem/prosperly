import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultVoice = {
    type: 'voice' //Type of the result, must be voice
    id: string //Unique identifier for this result, 1-64 bytes
    voice_url: string //A valid URL for the voice recording
    title: string //Recording title
    caption?: string //Caption, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the voice message caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    voice_duration?: number //Recording duration in seconds
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the voice recording
}