export type User = {
    id: number; //Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
    is_bot: boolean; //True, if this user is a bot
    first_name: string; //User's or bot's first name
    last_name?: string; //User's or bot's last name
    username?: string; //User's or bot's username
    language_code?: string; //IETF language tag of the user's language
    can_join_groups?: boolean; //True, if the bot can be invited to groups. Returned only in getMe.
    can_read_all_group_messages?: boolean; //True, if privacy mode is disabled for the bot. Returned only in getMe.
    supports_inline_queries?: boolean; //True, if the bot supports inline queries. Returned only in getMe.
};
