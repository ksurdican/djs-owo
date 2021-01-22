const Discord = require('discord.js')
const cfg = require('./config.json')
const bot = new Discord.Client()
bot.on('ready', () => {
    bot.user.setActivity('owo')
})
bot.on('message', message => {
    if (message.author.id == bot.user.id) return console.log('f')
    if (message.author.bot) return;
    message.channel.send('owo')
})
bot.login(cfg.token)