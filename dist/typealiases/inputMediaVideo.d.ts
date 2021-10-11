export declare type InputMediaVideo = {
    type: 'video';
    media: string;
    thumb?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
};
import { MessageEntity } from "./messageEntity";
