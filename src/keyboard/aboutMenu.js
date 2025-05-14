import { Markup } from 'telegraf'

export default function aboutMenu() {
	return Markup.inlineKeyboard([
		[Markup.button.callback('Цель проекта', 'about.goal')],
		[Markup.button.callback('Актуальность проекта', 'about.relevance')],
		[Markup.button.callback('Проблематика проекта', 'about.problem')],
		[Markup.button.callback('Поставленные задачи', 'about.tasks')],
		[Markup.button.callback('Взаимодействие с заказчиком', 'about.customer')],
		[Markup.button.callback('Апробация проекта', 'about.approval')],
		[Markup.button.callback('⬅️ Назад', 'back')],
	])
}
