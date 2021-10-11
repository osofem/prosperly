export declare type InputMediaPhoto = {
    type: 'photo';
    media: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
};
import { MessageEntity } from "./messageEntity";
