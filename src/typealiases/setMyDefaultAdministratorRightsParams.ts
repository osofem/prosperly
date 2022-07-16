export type SetMyDefaultAdministratorRightsParams = {
    rights?: ChatAdministratorRights //A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
    for_channels?: boolean //Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
}

import { ChatAdministratorRights } from "./chatAdministratorRights"