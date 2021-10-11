export type RevokeChatInviteLinkParams = {
    chat_id: number | string //Unique identifier of the target chat or username of the target channel (in the format @channelusername)
    invite_link: string //The invite link to revoke
}