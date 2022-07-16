export type InlineKeyboardMarkup = {
    inline_keyboard: InlineKeyboardButton[][]
};

export type InlineKeyboardButton = {
    text: string //Label text on the button
    url?: string //HTTP or tg:// url to be opened when button is pressed
    web_app?: WebAppInfo //Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot.
 //TODO   login_url?: LoginUrl //An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
    callback_data?: string //Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
    switch_inline_query?: string //If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.
    switch_inline_query_current_chat?: string //If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.
 //TODO   callback_game?: CallbackGame //Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row.
    pay?: boolean //Specify True, to send a Pay button. NOTE: This type of button must always be the first button in the first row.
};

import { WebAppInfo } from "./webAppInfo";