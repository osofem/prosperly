export declare type InputMediaAudio = {
    type: 'audio';
    media: string;
    thumb?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
};
import { MessageEntity } from "./messageEntity";
