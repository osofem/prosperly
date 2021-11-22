const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';
const certificateFile = 'PATH-TO-YOUR-CERTIFICATE';
const ip = 'YOUR-IP';
const maxConnectionToAllow = 1000;

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL,
        //everything below here is optional
        certificate: certificateFile,
        ip_address: ip,
        max_connections: maxConnectionToAllow,
        //Specify the updates you want to receive, if you dont want to receive all updates
        allowed_updates: ["message", "edited_channel_post", "callback_query"], 
        drop_pending_updates: "false"
    }
});