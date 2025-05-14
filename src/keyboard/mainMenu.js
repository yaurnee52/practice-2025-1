import { Markup } from 'telegraf'

export default function mainMenu() {
	return Markup.inlineKeyboard([
		[Markup.button.callback('О проекте', 'about')],
		[Markup.button.callback('Участники', 'participants')],
		[Markup.button.callback('Журнал прогресса', 'progress')],
		[Markup.button.callback('Ресурсы', 'resources')],
	])
}
