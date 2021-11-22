# Initializing prosperly

You can initialize `prosperly` in various ways:

## Simple initialization

Simple initializing, this method simply initializes `prosperly`. NOTE with this method, bot cannot listen for emitted events and your webhook (where telegram finds you) is not set.

Use this method if you have previously set your webhook and do not want to reset it each time you initialize `prosperly`. You can set your webhook later with `setWebhook()`, if you have not set one before.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';

const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});
```

## Initialization with webhook

You can initialize `prosperly` and set your webhook URL at the same time. With this method, `prosperly` automatically start listening for emitted events on the port you specified on your webhook URL *or port 80 if none is specified*.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL
    }
});
```

If you initialize with this method, you can then listen for emitted events like:

```javascript
bot.on('message', (data)=>{
    //Do something with the messge data
});

bot.on('chatJoinRequest', (data)=>{
    //Do something with the chat_join_request data
});
```

See [here](https://github.com/osofem/prosperly/tree/master/documentations/events.md) for all the events you can listen to.

## Initialization with webhook (advance)

You can also upload your self-signed certificate and some other variables of [webhookParams](https://github.com/osofem/prosperly/tree/master/dist/typealiases/setWebhookParams.d.ts) object.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';
const certificateFile = 'PATH-TO-YOUR-CERTIFICATE';
const ip = 'YOUR-IP';
const maxConnectionToAllow = 1000;

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL,
        //everything below here is optional
        certificate: certificateFile,
        ip_address: ip,
        max_connections: maxConnectionToAllow,
        //Specify the updates you want to receive, if you do not want to receive all updates
        allowed_updates: ["message", "edited_channel_post", "callback_query"], 
        drop_pending_updates: "false"
    }
});

bot.on('message', (data)=>{
    //Do something with the messge data
});
```

## Serverless Initialization

With webhook initialization, `prosperly` starts a server and commence listening for incoming events on the port you specify in your webhook URL. To use `prosperly` in a serverless environment *(e.g. AWS Lambda function, Microsoft Azure Functions, etc)*, then you can tell `prosperly` not to start a server when you set your webhook by setting `serverless` to `true`.

With this, you cannot listen to emitted events.

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL
    },
    //For serverless environment, set serverless to true
    serverless: true
});
```