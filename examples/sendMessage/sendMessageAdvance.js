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

//Make some keyboard
let inline_keyboard = [
    [{text:'Holy Writ Bot', url:'https://t.me/HolyWritBot'}], 
    [{text:'Share', callback_data:'some-callback-data'}]
];

let inlineKeyboard  = {inline_keyboard}

//Send the message
bot.sendMessage({
    chat_id: chatID,
    text: "<b>Hello</b> <i>world!</i>",
    parse_mode: "HTML",
    reply_markup: inlineKeyboard
    //and other parameters
}).then((resp)=>{
    //sendMessage successful, do something
}).catch((err)=>{
    //error occurred, do something
});