# getUpdates

Use this method to receive incoming updates using long polling.

### Notes

1. This method will not work if an outgoing webhook is set up. Use `deleteWebhook()` to remove the webhook setup first.
2. In order to avoid getting duplicate updates, recalculate offset after each server response.

## Simple getUpdates

You can retrieve all your updates (up to 100) with a simple `getUpdates()`

```javascript
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
```

## getUpdates with options

You can also specify some options like `offset`, `limit` and `allowed_updates` with `getUpdates`

```javascript
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
```