export declare type EditMessageMediaParams = {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
    media: InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;
    reply_markup?: InlineKeyboardMarkup;
};
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { InputMediaAnimation } from "./inputMediaAnimation";
import { InputMediaAudio } from "./inputMediaAudio";
import { InputMediaDocument } from "./inputMediaDocument";
import { InputMediaPhoto } from "./inputMediaPhoto";
import { InputMediaVideo } from "./inputMediaVideo";
