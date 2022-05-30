export type MessageEntity = {
    type: 'mention' |'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'code' | 'pre' | 'text_link' | 'text_mention'; //Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames)
    offset: number; //Offset in UTF-16 code units to the start of the entity
    length: number; //Length of the entity in UTF-16 code units
    url?: string; //For “text_link” only, url that will be opened after user taps on the text
    user?: User; //For “text_mention” only, the mentioned user
    language?: string; //For “pre” only, the programming language of the entity text
};

import {User} from "./user";