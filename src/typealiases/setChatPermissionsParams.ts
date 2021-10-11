export type SetChatPermissionsParams = {
    chat_id: number | string //Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
    permissions: ChatPermissions //New default chat permissions
}

import {ChatPermissions} from "./chatPermissions";