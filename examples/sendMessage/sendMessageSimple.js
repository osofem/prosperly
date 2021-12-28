const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL
    }
});

const chatID = "CHAT-ID";

bot.sendMessage({
    chat_id: chatID,
    text: 'Hello world!',
}).then((resp)=>{
    //sendMessage successful, do something
}).catch((err)=>{
    //error occurred, do something
});