import { InlineKeyboardMarkup } from "../inlineKeyboardMarkup";

export type InlineQueryResultGame = {
    type: 'game' //String 	Type of the result, must be game
    id: string //Unique identifier for this result, 1-64 bytes
    game_short_name: string //Short name of the game
    reply_markup?: InlineKeyboardMarkup //Inline keyboard attached to the message
}