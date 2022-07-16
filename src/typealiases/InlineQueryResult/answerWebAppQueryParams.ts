export type AnswerWebAppQueryParams = {
    web_app_query_id: string //Unique identifier for the query to be answered
    result: InlineQueryResult //A JSON-serialized object describing the message to be sent
}

import { InlineQueryResult } from "./answerInlineQueryParams"