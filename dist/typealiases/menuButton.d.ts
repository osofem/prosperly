export declare type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;
export declare type MenuButtonCommands = {
    type: "commands";
};
export declare type MenuButtonWebApp = {
    type: "web_app";
    text: string;
    web_app: WebAppInfo;
};
export declare type MenuButtonDefault = {
    type: "default";
};
import { WebAppInfo } from "./webAppInfo";
