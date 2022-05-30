export declare type SendMediaGroupParams = {
    chat_id: number | string;
    media: InputMediaAudio[] | InputMediaDocument[] | InputMediaPhoto[] | InputMediaVideo[];
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
};
import { InputMediaAudio } from "./inputMediaAudio";
import { InputMediaDocument } from "./inputMediaDocument";
import { InputMediaPhoto } from "./inputMediaPhoto";
import { InputMediaVideo } from "./inputMediaVideo";
