export type BanChatMemberParams = {
    chat_id: number | string; //Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
    user_id: number; //Unique identifier of the target user
    until_date?: number //Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
    revoke_messages?: boolean //Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
}