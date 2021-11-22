const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken
});

bot.getUpdates({
    offset: 0,
    limit: 10, //max is 100
    timeout: 10,
    allowed_updates: ["message", "edited_channel_post", "callback_query"]
}).then((data)=>{
    //do something with the array of objects
}).catch((err)=>{
    //catch some errors
});