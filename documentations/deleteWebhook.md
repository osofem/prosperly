# deleteWebhook

Use this method to remove webhook integration if you decide to switch back to getUpdates.

## delete webhook

You can delete your webhook integration but keep your pending updates.
```javascript
const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

//Delete webhook
bot.deleteWebhook().then((data)=>{
    //delete webhook successful, do something
}).catch((err)=>{
    //catch some errors
});
```

## delete webhook and also drop all pending updates

You cam also delete your webhook integration and drop all your pending updates up to that point.
```javascript
const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

//Delete webhook and drop all pending updates
bot.deleteWebhook({
    drop_pending_updates: true
}).then((data)=>{
    //delete webhook successful, do something
}).catch((err)=>{
    //catch some errors
});

```