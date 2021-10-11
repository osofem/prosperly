import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
import { MessageEntity } from "../messageEntity";
import { InputMessageContent } from "./inputMessageContent";

export type InlineQueryResultCachedVoice = {
    type: 'voice' //Type of the result, must be voice
    id: string //Unique identifier for this result, 1-64 bytes
    voice_file_id: string //A valid file identifier for the voice message
    title: string //Voice message title
    caption?: string //Caption, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the voice message caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
    input_message_content?: InputMessageContent //Content of the message to be sent instead of the voice message
}