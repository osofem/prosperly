export declare type RestrictChatMemberParams = {
    chat_id: number | string;
    user_id: number;
    permissions: ChatPermissions;
    until_date?: number;
};
import { ChatPermissions } from "./chatPermissions";
