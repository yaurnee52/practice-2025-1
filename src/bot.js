import { Telegraf } from 'telegraf'
import navigationHandler from './handlers/navigationHandler.js'
import mainMenu from './keyboard/mainMenu.js'

const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => {
	ctx.reply('Добро пожаловать! Выберите раздел:', mainMenu())
})

bot.on('callback_query', navigationHandler)

bot.launch()
console.log('Бот запущен')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
