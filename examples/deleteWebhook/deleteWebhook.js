const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

//Delete webhook
bot.deleteWebhook().then((data)=>{
    //delete webhook successful, do something
}).catch((err)=>{
    //catch some errors
});


//Delete webhook and drop all pending updates
bot.deleteWebhook({
    drop_pending_updates: true
}).then((data)=>{
    //delete webhook successful, do something
}).catch((err)=>{
    //catch some errors
});