export declare type SendMessageParams = {
    chat_id: number | string;
    text: string;
    parse_mode?: 'MarkdownV2' | 'Markdown' | 'HTML';
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    protect_content?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
};
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { ReplyKeyboardMarkup } from "./replyKeyboardMarkup";
import { ReplyKeyboardRemove } from "./replyKeyboardRemove";
import { ForceReply } from "./forceReply";
