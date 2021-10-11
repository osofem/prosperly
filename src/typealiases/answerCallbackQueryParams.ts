export type AnswerCallbackQueryParams = {
    callback_query_id: string //Unique identifier for the query to be answered
    text?: string //Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
    show_alert?: boolean //If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
    url?: string //URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game — note that this will only work if the query comes from a callback_game button.
}

