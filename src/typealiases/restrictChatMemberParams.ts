export type RestrictChatMemberParams = {
    chat_id: number | string; //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    user_id: number; //Unique identifier of the target user
    permissions: ChatPermissions; //A JSON-serialized object for new user permissions
    until_date?: number; //Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
}

import {ChatPermissions} from "./chatPermissions";