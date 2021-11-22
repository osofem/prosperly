# Prosperly
A wrapper for the telegram bot API.

## DOCUMENTATION
Check the [here](https://github.com/osofem/prosperly/tree/master/documentations) for documentations.

## EXAMPLES
Check the [examples folder](https://github.com/osofem/prosperly/tree/master/examples) for usage examples.

## SIMPLE USAGE
How to simply initialize prosperly

```javascript
const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: 'YOUR-BOT-TOKEN'});
```

You can also set your webhook

```javascript
//Initiating prosperly
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';
const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL
    }
});

//listen for message
bot.on('message', (data)=>{
    //check if it's /start command
    if(data['message']['text'] === '/start'){
        //send hello back
        bot.sendMessage({
            chat_id: data['message']['from']['id'],
            text: "Hello, " + data['message']['from']['first_name'] + "! Nice to meet you. 😀"
        }).then((data)=>{
            //message sent
            console.log(data);
        }).catch((err)=>{
            //an error occurred, message not sent
            console.log(err);
        });
    }
});

//listen for edited message
bot.on('editedMessage', (data)=>{
    console.log('A message was edited: ', data);
});

/**
* You can listen for message, editedMessage, channelPost, editedChannelPost, inlineQuery, 
* chosenInlineResult, callbackQuery, shippingQuery, preCheckoutQuery, poll, pollAnswer, 
* myChatMember, chatMember, chatJoinRequest, and error
*/

//listen for join request
bot.on('chatJoinRequest', (data)=>{
    console.log('Just received a join request: ', data);
});

//listen for error
bot.on('error', (error)=>{
    console.log('An error occurred: ', error);
});
```