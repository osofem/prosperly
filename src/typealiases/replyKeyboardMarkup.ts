export type ReplyKeyboardMarkup = {
    keyboard: KeyboardButton[][]; //Array of button rows, each represented by an Array of KeyboardButton objects
    resize_keyboard?: boolean; //Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
    one_time_keyboard?: boolean; //Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
    input_field_placeholder?: string; //The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
    selective?: boolean; //Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
};

export type KeyboardButton = {
    text: string; //Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
    request_contact?: boolean; //If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
    request_location?: boolean; //If True, the user's current location will be sent when the button is pressed. Available in private chats only
    request_poll?: KeyboardButtonPollType; //If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
    web_app?: WebAppInfo //Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
};

export type KeyboardButtonPollType = {
    type?: string; //If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
};


import { WebAppInfo } from "./webAppInfo";