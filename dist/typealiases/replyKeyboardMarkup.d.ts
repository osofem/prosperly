export declare type ReplyKeyboardMarkup = {
    keyboard: KeyboardButton[][];
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
};
export declare type KeyboardButton = {
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
    request_poll?: KeyboardButtonPollType;
    web_app?: WebAppInfo;
};
export declare type KeyboardButtonPollType = {
    type?: string;
};
import { WebAppInfo } from "./webAppInfo";
