# getMe

A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.getMe().then((data)=>{
    //getMe successful, do something
}).catch((err)=>{
    //catch some errors
});
```