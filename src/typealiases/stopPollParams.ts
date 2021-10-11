export type StopPollParams = {
    chat_id: number | string //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    message_id: number //Identifier of the original message with the poll
    reply_markup?: InlineKeyboardMarkup //A JSON-serialized object for a new message inline keyboard.
}

import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";