export type UnbanChatMemberParams = {
    chat_id: number | string //Unique identifier for the target group or username of the target supergroup or channel (in the format @username)
    user_id: number //Unique identifier of the target user
    only_if_banned?: boolean //Do nothing if the user is not banned
}