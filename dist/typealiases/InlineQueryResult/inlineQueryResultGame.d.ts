import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";
export declare type InlineQueryResultGame = {
    type: 'game';
    id: string;
    game_short_name: string;
    reply_markup?: InlineKeyboardMarkup;
};
