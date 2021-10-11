import { MessageEntity } from "../messageEntity"

export type InputMessageContent = {
    message_text: string //Text of the message to be sent, 1-4096 characters
    parse_mode?: string //Mode for parsing entities in the message text. See formatting options for more details.
    entities?: MessageEntity[] //List of special entities that appear in message text, which can be specified instead of parse_mode
    disable_web_page_preview?: boolean //Disables link previews for links in the sent message
}