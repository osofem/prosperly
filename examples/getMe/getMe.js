const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.getMe().then((data)=>{
    //getMe successful, do something
}).catch((err)=>{
    //catch some errors
});