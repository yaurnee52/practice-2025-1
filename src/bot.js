import { Telegraf } from 'telegraf'
import navigationHandler from './handlers/navigationHandler.js'
import mainMenu from './keyboard/mainMenu.js'

const bot = new Telegraf('7964875174:AAGnFGtQSfWeIte3e1LbgH-E2sTArC5SUB4')

bot.start(ctx => {
	ctx.reply('Добро пожаловать! Выберите раздел:', mainMenu())
})

bot.on('callback_query', navigationHandler)

bot.launch()
console.log('Бот запущен')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
