export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault


export type MenuButtonCommands = {
    type: "commands" //Type of the button, must be commands
}

export type MenuButtonWebApp = {
    type: "web_app" //Type of the button, must be web_app
    text: string //Text on the button
    web_app: WebAppInfo //Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery.
}

export type MenuButtonDefault = {
    type: "default" //Type of the button, must be default
}

import { WebAppInfo } from "./webAppInfo"