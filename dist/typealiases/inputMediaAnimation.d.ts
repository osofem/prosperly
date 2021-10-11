export declare type InputMediaAnimation = {
    type: 'animation';
    media: string;
    thumb?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    width?: number;
    height?: number;
    duration?: number;
};
import { MessageEntity } from "./messageEntity";
