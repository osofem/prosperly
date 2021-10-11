export declare type InlineKeyboardMarkup = {
    inline_keyboard: InlineKeyboardButton[][];
};
export declare type InlineKeyboardButton = {
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    pay?: boolean;
};
