export declare type InputMediaDocument = {
    type: 'document';
    media: string;
    thumb?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
};
import { MessageEntity } from "./messageEntity";
