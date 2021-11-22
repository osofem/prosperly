const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken
});

bot.getUpdates().then((data)=>{
    //do something with the array of objects
}).catch((err)=>{
    //catch some errors
});