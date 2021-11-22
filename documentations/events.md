# Events You Can Listen For

If `prosperly` is initialized with webhook integration or the `setWebhook()` function is called, `prosperly` automatically start listening for emitted events on the port you specified on your webhook URL *or port 80 if none is specified*. 

Below are events you can listen for:

```javascript
const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';

//Init prosperly with webhook integration
const Prosperly = require('prosperly');
const bot = new Prosperly({
    botToken: myBotToken, 
    webhookParams: {
        url: webhookURL
    }
});

//listen for message events
bot.on('message', (data)=>{
    //Send back "hello world!"
    bot.sendMessage({
        chat_id: data['message']['from']['id'],
        text: 'Hello World'
    });
});

//listen for edited_message events
bot.on('editedMessage', (data)=>{
    //Do something with data
});

//listen for channel_post events
bot.on('channelPost', (data)=>{
    //Do something with data
});

//listen for edited_channel_post events
bot.on('editedChannelPost', (data)=>{
    //Do something with data
});
    
//listen for inline_query events
bot.on('inlineQuery', (data)=>{
    //Do something with data
});   

//listen for chosen_inline_result events
bot.on('chosenInlineResult', (data)=>{
    //Do something with data
});

//listen for callback_query events
bot.on('callbackQuery', (data)=>{
    //Do something with data
});
    
//listen for shipping_query events
bot.on('shippingQuery', (data)=>{
    //Do something with data
});   

//listen for pre_checkout_query events
bot.on('preCheckoutQuery', (data)=>{
    //Do something with data
});

//listen for poll events
bot.on('poll', (data)=>{
    //Do something with data
});
    
//listen for poll_answer events
bot.on('pollAnswer', (data)=>{
    //Do something with data
});   
    
//listen for my_chat_member events
bot.on('myChatMember', (data)=>{
    //Do something with data
});   

//listen for chat_member events
bot.on('chatMember', (data)=>{
    //Do something with data
});

//listen for chat_join_request events
bot.on('chatJoinRequest', (data)=>{
    //Do something with data
});

//listen for error
bot.on('error', (data)=>{
    //Do something with data
});
```