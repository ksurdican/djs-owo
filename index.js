const Discord = require('discord.js')
const cfg = require('./config.json')
const bot = new Discord.Client()
const db = require('quick.db')
bot.on('ready', () => {
    bot.user.setActivity('owo')
})
bot.on('message', message => {
    if (message.author.id == bot.user.id) return console.log('f')
    if (message.author.bot) return;
    if (!message.content.includes('owo')) return;
    message.channel.send('owo')
})
bot.login(cfg.token)