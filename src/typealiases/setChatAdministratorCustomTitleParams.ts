export type SetChatAdministratorCustomTitleParams = {
    chat_id: number | string //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number //Unique identifier of the target user
    custom_title: string //New custom title for the administrator; 0-16 characters, emoji are not allowed
}