const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.getWebhookInfo().then((data)=>{
    //get webhook info successful, do something
}).catch((err)=>{
    //catch some errors
});