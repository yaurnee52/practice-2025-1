import aboutMenu from '../keyboard/aboutMenu.js'
import mainMenu from '../keyboard/mainMenu.js'


export default async function navigationHandler(ctx) {
	const action = ctx.callbackQuery.data
	await ctx.answerCbQuery()

	switch (action) {
		// Главные разделы
		case 'about':
			await ctx.editMessageText('Раздел "О проекте":', aboutMenu())
			break

		// Подменю "О проекте"
		case 'about.goal':
			await ctx.editMessageText('Улучшение и модернизация цифровой инфраструктуры проектной деятельности университета, расширение функциональных возможностей цифровых сервисов.', {
				reply_markup: {
					inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
				},
			})
			break
		case 'about.relevance':
			await ctx.editMessageText(
				'Каждый год в Московский Политех поступают новые студенты, и у них начинается дисциплина “Проектная деятельность”. Для неё им нужно выбрать проект, которым они будут заниматься в течение семестра. В то же время, те люди, которые уже занимаются конкретным проектом, стремятся подобрать людей, имеющих нужные им навыки, причём потребность в студентах с различными навыками может меняться с течением времени. Поэтому важно, чтобы сервисы проектной деятельности отвечали меняющимся потребностям и помогали этим двум группам людей найти друг друга.',
				{
					reply_markup: {
						inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
					},
				}
			)
			break
		case 'about.problem':
			await ctx.editMessageText(
				'Функция выбора проекта и возможность подать заявку на собственный проект пока не интегрированы в обновлённый интерфейс, что снижает удобство использования системы. А новый дизайн кабинетов кураторов проектов вообще отсутствует, из-за чего они не могут воспользоваться обновлённой версией личного кабинета',
				{
					reply_markup: {
						inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
					},
				}
			)
			break
		case 'about.tasks':
			await ctx.editMessageText(
				' ▪️Анализ цифровой инфраструктуры проектной деятельности Московского Политеха. \n ▪️Поиск и реализация путей модернизации и улучшения функционала цифровых сервисов Московского Политеха. \n ▪️Разработка дизайнов сервисов проектной деятельности с добавленным функционалом для их дальнейшего внедрения.',
				{
					reply_markup: {
						inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
					},
				}
			)
			break
		case 'about.customer':
			await ctx.editMessageText(
				'С помощью куратора проекта нам удалось узнать от сотрудников университета, работающих в области проектной деятельности, что улучшить цифровую инфраструктуру проектной деятельности можно, разработав новый дизайн личного кабинета руководителя проекта, т.к. у них отсутствует новая версия личного кабинета. Наша команда учла это и сделала разработку нового дизайна личного кабинета одной из основных задач проекта',
				{
					reply_markup: {
						inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
					},
				}
			)
			break
		case 'about.approval':
			await ctx.editMessageText(
				'Заказчик проекта: Московский политехнический Университет, центр проектной деятельности. В процессе деятельности проекта проводилась регулярная еженедельная отчетность перед заказчиком.',
				{
					reply_markup: {
						inline_keyboard: [[{ text: '⬅️ Назад', callback_data: 'about' }]],
					},
				}
			)
			break

		// Раздел "Участники"
		case 'participants':
			await ctx.editMessageText('Раздел "Участники":', {
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Яковлев Артур', callback_data: 'participants.artur' }],
						[
							{
								text: 'Обеднин Ярослав',
								callback_data: 'participants.yaroslav',
							},
						],
						[{ text: '⬅️ Назад', callback_data: 'mainMenu' }],
					],
				},
			})
			break
		case 'participants.artur':
			await ctx.editMessageText(
				'Яковлев Артур: \n Роль: Frontend-разработчик. \n Вклад: Артур занимается разработкой обновлённого дизайна цифровой инфраструктуры проектной деятельности Московского Политеха. В его задачи входило: \n▪️Создание интуитивно понятного и современного интерфейса для личного кабинета студента и куратора проекта. \n▪️Проектирование удобного механизма выбора проектов с учётом навыков студентов. \n▪️Разработка прототипов в Figma и их доработка на основе обратной связи от преподавателей и кураторов. \n Артур обеспечил визуальную и функциональную согласованность новых интерфейсов, что позволит студентам и руководителям проектов эффективнее взаимодействовать в рамках дисциплины «Проектная деятельность».',
				{
					reply_markup: {
						inline_keyboard: [
							[{ text: '⬅️ Назад', callback_data: 'participants' }],
						],
					},
				}
			)
			break
		case 'participants.yaroslav':
			await ctx.editMessageText(
				'Обеднин Ярослав: \n Роль: Аналитик \n Вклад: \n Ярослав провёл детальный анализ текущей цифровой инфраструктуры проектной деятельности и выявил ключевые проблемы, требующие решения: \n▪️Отсутствие интеграции функции выбора проекта и подачи заявок в обновлённый интерфейс. \n▪️Недостаточная адаптивность системы под меняющиеся потребности проектных команд. \n▪️Отсутствие нового дизайна личного кабинета куратора, что затрудняет их работу. \n На основе проведённого анализа он сформулировал задачи для модернизации системы, включая: \n▪️Оптимизацию процесса подбора студентов в проекты на основе их навыков. \n▪️Разработку требований к новому функционалу личного кабинета куратора. \n▪️Улучшение взаимодействия между студентами и руководителями проектов через цифровые сервисы.',
				{
					reply_markup: {
						inline_keyboard: [
							[{ text: '⬅️ Назад', callback_data: 'participants' }],
						],
					},
				}
			)
			break

		// Раздел "Журнал прогресса"
		case 'progress':
			await ctx.editMessageText('Журнал прогресса:', {
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Этапы работы', callback_data: 'progress.stages' }],
						[{ text: 'Диаграмма Ганта', callback_data: 'progress.gantt' }],
						[{ text: '⬅️ Назад', callback_data: 'mainMenu' }],
					],
				},
			})
			break
		case 'progress.stages':
			await ctx.editMessageText(
				'Этапы работы: \n 1. Анализ системы выбора студентами проектов по дисциплине “Проектная деятельность” \n 2. Поставка задач, которые должны привести к улучшению системы выбора проектов, исходя из навыков каждого студента \n 3. Разработка нового дизайна личного кабинета куратора проекта \n 4. Разработка прототипа конечного результата деятельности проекта в Figma под контролем преподавателя \n 5. Разработка пояснительной записки и презентации результатов деятельности проекта \n 6. Разработка видео-отчёта',
				{
					reply_markup: {
						inline_keyboard: [
							[{ text: '⬅️ Назад', callback_data: 'progress' }],
						],
					},
				}
			)
			break
		case 'progress.gantt':
			await ctx.editMessageText(
				'Диаграмма Ганта: визуальный план проекта с временными рамками.',
				{
					reply_markup: {
						inline_keyboard: [
							[{ text: '⬅️ Назад', callback_data: 'progress' }],
						],
					},
				}
			)
			break

		// Раздел "Ресурсы"
		case 'resources':
			await ctx.editMessageText('Ресурсы:', {
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Личный кабинет обучающегося и сотрудника Московского Политеха', url: 'https://e.mospolytech.ru/old/index.php' }],
						[{ text: 'Центр проектной деятельности Московского Политеха', url: 'https://projects.mospolytech.ru/cpd_mospolytech' }],
						[{ text: 'Прототип дизайна ЛК студента', url: 'https://www.figma.com/proto/ecPIgpE5Niel3luG2BaVlP/Untitled?node-id=1-169&t=Xz2Gsci4XjkG89RL-1' }],
						[{ text: 'Прототип дизайна ЛК преподавателя', url: 'https://www.figma.com/design/fbN2huWfAv2qIHHK0k20rd/Untitled?node-id=0-1&p=f&t=bUX0LqmpkJqvJ1xC-0' }],
						[{ text: 'Прототип дизайна Витрины проектов', url: 'https://www.figma.com/design/SLxRNW4j5pSbDEm3UZY54W/Проектная-деятельность?node-id=0-1&p=f&t=hSDh9zEjSxkuFFrl-0' }],
						[{ text: '⬅️ Назад', callback_data: 'mainMenu' }],
					],
				},
			})
			break

		case 'back':
			await ctx.editMessageText('Выберите раздел:', mainMenu())
			break

		case 'mainMenu':
			await ctx.editMessageText('Выберите раздел:', mainMenu())
			break

		default:
			await ctx.answerCbQuery('Неизвестная команда')
	}
}
