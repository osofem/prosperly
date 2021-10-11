export type SendMediaGroupParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    media: InputMediaAudio[] | InputMediaDocument[] | InputMediaPhoto[] | InputMediaVideo[]; //A JSON-serialized array describing messages to be sent, must include 2-10 items
    disable_notification?: boolean; //Sends messages silently. Users will receive a notification with no sound.
    reply_to_message_id?: number; //If the messages are a reply, ID of the original message
    allow_sending_without_reply?: boolean; //Pass True, if the message should be sent even if the specified replied-to message is not found
}

import {InputMediaAudio} from "./inputMediaAudio";
import {InputMediaDocument} from "./inputMediaDocument";
import {InputMediaPhoto} from "./inputMediaPhoto";
import {InputMediaVideo} from "./inputMediaVideo";