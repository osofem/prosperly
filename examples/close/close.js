const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.close().then((data)=>{
    //close successful, do something
}).catch((err)=>{
    //catch some errors
});