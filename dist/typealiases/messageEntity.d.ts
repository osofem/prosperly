export declare type MessageEntity = {
    type: 'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'code' | 'pre' | 'text_link' | 'text_mention';
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;
};
import { User } from "./user";
