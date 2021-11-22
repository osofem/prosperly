# setWebhook

Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot


## The simple way

You can use this method to change webhook set during initialization or set one if none was set before. With this method, `prosperly` automatically start listening for emitted events on the port you specified on your webhook URL *or port 80 if none is specified*.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.setWebhook({
    url: webhookURL
}).then((data)=>{
    //set webhook successful, do something
}).catch((err)=>{
    //catch some errors
});
```

## The advance way

You can also `setWebhook` with more options. With this method, `prosperly` automatically start listening for emitted events on the port you specified on your webhook URL *or port 80 if none is specified*.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';
const certificateFile = 'PATH-TO-YOUR-CERTIFICATE';
const ip = 'YOUR-IP';
const maxConnectionToAllow = 1000;

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.setWebhook({
    url: webhookURL,
    //everything from here is optional
    certificate: certificateFile,
    ip_address: ip,
    max_connections: maxConnectionToAllow,
    //Specify the updates you want to receive, if you dont want to receive all updates
    allowed_updates: ["message", "edited_channel_post", "callback_query"], 
    drop_pending_updates: "false"
}).then((data)=>{
    //set webhook successful, do something
}).catch((err)=>{
    //catch some errors
});
```

## Serverless way

With `setWebhook()`, `prosperly` starts a server and commence listening for incoming events on the port you specify in your webhook URL. To use `prosperly` in a serverless environment *(e.g. AWS Lambda function, Microsoft Azure Functions, etc)*, then you can tell `prosperly` not to start a server when you set your webhook by setting `serverless` to `true`. You do that by passing `true` as the second argument of `setWebhook()`.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

bot.setWebhook({
    url: webhookURL
}, true).then((data)=>{
    //set webhook successful, do something
}).catch((err)=>{
    //catch some errors
});
```