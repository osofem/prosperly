# Prosperly
Wrapper for the telegram bot API. Full documentation coming soon!

## USAGE
    //Initiating prosperly
    const Prosperly = require('prosperly');
    const bot = new Prosperly({botToken: 'YOUR-BOT-TOKEN', {url: 'YOUR-WEBHOOK-URL'}, serverless: false});

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
				err.text().then((d: any)=>{console.log(d)});
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
	* myChatMember, chatMember, and error
	*/
	
	//listen for error
	bot.on('error', (error)=>{
		console.log('An error occurred: ', error);
	});
