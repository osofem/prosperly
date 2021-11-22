# getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, it returns the [WebhookInfo object](https://core.telegram.org/bots/api#webhookinfo).

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.getWebhookInfo().then((data)=>{
    //delete webhook successful, do something
}).catch((err)=>{
    //catch some errors
});
```