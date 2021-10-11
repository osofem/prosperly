export type EditChatInviteLinkParams = {
    chat_id: number | string //Unique identifier for the target chat or username of the target channel (in the format @channelusername)
    invite_link: string //The invite link to edit
    expire_date?: number //Point in time (Unix timestamp) when the link will expire
    member_limit?: number //Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
}