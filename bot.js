const Telegraf = require('telegraf');
const express = require('express');
const expressApp = express();
const API_TOKEN = process.env.API_TOKEN || '664045614:AAEFU0lkCBn2UMom3SnCOdY2VNmDSEIR-VA';
const PORT = process.env.PORT || 8443;
const URL = process.env.URL || 'https://ali-super-bot.herokuapp.com/';
const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/664045614:AAEFU0lkCBn2UMom3SnCOdY2VNmDSEIR-VA`);
expressApp.use(bot.webhookCallback(`664045614:AAEFU0lkCBn2UMom3SnCOdY2VNmDSEIR-VA`));
//Create new bot
bot.start((ctx) => ctx.reply('Hello, friends!Here I am!\nPress /go to talk to God\nPress /location to know the location\nPress /place if you need the map\nPress /video and watch the cool video from me\nWanna see me? So send this message"Show me our Queen"\nAsk me to send a sticker by sending this message"Send me a sticker, babe"\nYou can also send a sticker to me\nAnd have a nice day,guys! Forever yours, your Queen, your Dream, Ali telegram bot:*'));
bot.command('go', function(context){
    context.reply('Hahaha sure I am runnin, stupid bitch');
});
bot.hears(/\b(\w*bitch\w*)\b/g, function(context){
    context.reply('What the fuck');
});
bot.command('location', function(context){
    context.reply('Vegas, Babe');
});
bot.on('sticker',function(context){
    context.reply('Wow');
});
 bot.command('place',function(context){
     context.replyWithLocation(36.1699,-115.1338);  
});
bot.hears('suka',function(context){
    context.reply('Sam takoy');  
});
bot.hears('Show me our Queen',function(context){
    context.replyWithPhoto('https://www.instagram.com/p/BpHmXSonxsG/?utm_source=ig_web_copy_link'); 
});
bot.command('video',function(replyWithVideo){
           replyWithVideo.reply('https://www.youtube.com/watch?v=oA-LWJ9Fghc');
});
bot.hears('Send me a sticker, babe',function (context){
    context.replyWithSticker('CAADAgADOQADfyesDlKEqOOd72VKAg');
});
        expressApp.get('/', (req, res) => {
  res.send('Hello World!');
});
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
