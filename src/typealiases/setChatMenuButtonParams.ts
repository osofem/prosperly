export type SetChatMenuButtonParams = {
    chat_id?: number | string //Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
    menu_button?: MenuButton //A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
}

import { MenuButton } from "./menuButton"