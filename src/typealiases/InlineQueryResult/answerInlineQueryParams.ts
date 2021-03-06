export type AnswerInlineQueryParams = {
    inline_query_id: string //Unique identifier for the answered query
    results: InlineQueryResult[] //A JSON-serialized array of results for the inline query
    cache_time?: number //The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
    is_personal?: boolean //Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
    next_offset?: string //Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
    switch_pm_text?: string //If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter
    switch_pm_parameter?: string //Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.
    
    //Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
}


export type InlineQueryResult = (InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice)

import { InlineQueryResultArticle } from "./inlineQueryResultArticle"
import { InlineQueryResultAudio } from "./inlineQueryResultAudio"
import { InlineQueryResultCachedAudio } from "./inlineQueryResultCachedAudio"
import { InlineQueryResultCachedDocument } from "./inlineQueryResultCachedDocument"
import { InlineQueryResultCachedGif } from "./inlineQueryResultCachedGif"
import { InlineQueryResultCachedMpeg4Gif } from "./inlineQueryResultCachedMpeg4Gif"
import { InlineQueryResultCachedPhoto } from "./inlineQueryResultCachedPhoto"
import { InlineQueryResultCachedSticker } from "./inlineQueryResultCachedSticker"
import { InlineQueryResultCachedVideo } from "./inlineQueryResultCachedVideo"
import { InlineQueryResultCachedVoice } from "./inlineQueryResultCachedVoice"
import { InlineQueryResultContact } from "./inlineQueryResultContact"
import { InlineQueryResultDocument } from "./inlineQueryResultDocument"
import { InlineQueryResultGame } from "./inlineQueryResultGame"
import { InlineQueryResultGif } from "./inlineQueryResultGif"
import { InlineQueryResultLocation } from "./inlineQueryResultLocation"
import { InlineQueryResultMpeg4Gif } from "./inlineQueryResultMpeg4Gif"
import { InlineQueryResultPhoto } from "./inlineQueryResultPhoto"
import { InlineQueryResultVenue } from "./inlineQueryResultVenue"
import { InlineQueryResultVideo } from "./inlineQueryResultVideo"
import { InlineQueryResultVoice } from "./inlineQueryResultVoice"

