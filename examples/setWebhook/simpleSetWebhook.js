const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.setWebhook({
    url: webhookURL
}).then((data)=>{
    //set webhook successful, do something
}).catch((err)=>{
    //catch some errors
});