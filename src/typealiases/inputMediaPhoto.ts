export type InputMediaPhoto = {
    type: 'photo' //Type of the result, must be photo
    media: string //Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files »
    caption?: string //Caption of the photo to be sent, 0-1024 characters after entities parsing
    parse_mode?: string //Mode for parsing entities in the photo caption. See formatting options for more details.
    caption_entities?: MessageEntity[] //List of special entities that appear in the caption, which can be specified instead of parse_mode
}

import {MessageEntity} from "./messageEntity";