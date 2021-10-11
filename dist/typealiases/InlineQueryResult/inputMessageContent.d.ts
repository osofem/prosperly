import { MessageEntity } from "../messageEntity";
export declare type InputMessageContent = {
    message_text: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
};
