const myBotToken = 'YOUR-BOT-TOKEN';
const webhookURL = 'https://example.com:8080/some-path';


//Init prosperly
const Prosperly = require('prosperly');
const bot = new Prosperly({botToken: myBotToken});

//set webhook
bot.setWebhook({
    url: webhookURL
}).then((data)=>{
    
    //Set webhook successful, start listening
    
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

}).catch((err)=>{
    //An error occurred
    console.log(err);
}); 