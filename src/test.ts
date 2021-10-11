import  Prosperly  from "./prosperly";

const param = {botToken: '1785800327:AAFquZ3BKW-kUGtsXW4bkcfUQUNojSOzULw', serverless: true}

const bot = new Prosperly(param);

console.log(bot.version);
/*
//Send Message
bot.sendMessage({
    chat_id: '138316891', 
    text: 'Simple message'
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    err.text().then((d: any)=>{console.log(d)});
});*/