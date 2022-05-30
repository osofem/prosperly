export type SendPollParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    question: string //Poll question, 1-300 characters
    options: string[] //A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
    is_anonymous?: boolean //True, if the poll needs to be anonymous, defaults to True
    type?: string //Poll type, “quiz” or “regular”, defaults to “regular”
    allows_multiple_answers?: boolean //True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
    correct_option_id?: number // 0-based identifier of the correct answer option, required for polls in quiz mode
    explanation?: string //Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
    explanation_parse_mode?: string //Mode for parsing entities in the explanation. See formatting options for more details.
    explanation_entities?: MessageEntity[] //List of special entities that appear in the poll explanation, which can be specified instead of parse_mode
    open_period?: number //Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
    close_date?: number //Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
    is_closed?: boolean //Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
    disable_notification?: boolean //Sends the message silently. Users will receive a notification with no sound.
    protect_content?: boolean; //Protects the contents of the sent message from forwarding and saving
    reply_to_message_id?: number //If the message is a reply, ID of the original message
    allow_sending_without_reply?: boolean //Pass True, if the message should be sent even if the specified replied-to message is not found
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply //Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
}

import {MessageEntity} from "./messageEntity";
import {InlineKeyboardMarkup} from "./inlineKeyboardMarkup";
import {ReplyKeyboardMarkup} from "./replyKeyboardMarkup";
import {ReplyKeyboardRemove} from "./replyKeyboardRemove";
import {ForceReply} from "./forceReply";