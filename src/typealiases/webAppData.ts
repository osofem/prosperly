export type WebAppData = {
    data: string //The data. Be aware that a bad client can send arbitrary data in this field.
    button_text: string //Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
}