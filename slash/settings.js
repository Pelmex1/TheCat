const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
	.setName('settings')
    .setNameLocalization('ru', 'настройки')

    .setDescription('Settings')

    .setDefaultPermission(false)

    .addSubcommand(sub => sub
            .setName('language')
            .setNameLocalization('ru', 'язык')
            .setNameLocalization('ua', 'мова')

            .setDescription('Change bot language for this server')
            .setDescriptionLocalization('ru', 'Поменять язык бота для этого сервера')
            .setDescriptionLocalization('ua', 'Змінити мову бота для цього серверу')

        .addStringOption(op => op
                .setName('language')
                .setNameLocalization('ru', 'язык')
                .setNameLocalization('ua','мова')

                .setDescription('New bot\'s language')
                .setDescriptionLocalization('ru', 'Новый язык бота')
                .setDescriptionLocalization('ua', 'Нова мова бота')

                .addChoices(
                    { name: 'English', value: 'en' },
                    { name: 'Русский', value: 'ru' },
	            { name: 'Українська, value: 'ua' }
                )

                .setRequired(true)
            )
    )
    .addSubcommandGroup(group => group
        .setName('auto-role')
        .setNameLocalization('ru', 'авто-роль')
        .setNameLocalization('ua', 'авто-роль')
			
        .setDescription('d')

        .addSubcommand(sub => sub
            .setName('join')
            .setNameLocalization('ru', 'заход')
            .setNameLocalization('ua', 'приєднування')
            
            .setDescription('Give role to members when they joined')
            .setDescriptionLocalization('ru', 'Давать роль участникам когда они заходят')
            .setDescriptionLocalization('ua', 'Давати роль учасникам коли вони заходять')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')
                .setNameLocalization('ua', 'роль')

                .setDescription('This role will be given to new members')
                .setDescriptionLocalization('ru', 'Эту роль получат новые участники')
		.setDescriptionLocalization('ua', 'Цю роль отримають нові учасники')	   

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-add')
            .setDescriptionLocalization('ru', 'кнопки-добавить')
            .setDescriptionLocalization('ua', 'кнопки-добавити')
		       

            .setDescription('Add role to buttons')
            .setDescriptionLocalization('ru', 'Добавить роль в кнопки')
            .setDescriptionLocalization('ua', 'Добавити роль в кнопки')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')
	        .setNameLocalization('ua', 'роль')

                .setDescription('Members are able to get this role via buttons')
                .setDescriptionLocalization('ru', 'Участники смогут получить эту роль через кнопки')
		.setDescriptionLocalization('ua', 'Учасники зможуть получити цю роль через кнопки')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-remove')
            .setNameLocalization('ru', 'кнопки-убрать')
            .setNameLocalization('ua', 'кнопки-прибрати')

            .setDescription('Remove role from buttons')
            .setDescriptionLocalization('ru', 'Убрать роль из кнопки')
	    .setDescriptionLocalization('ua', 'Прибрати роль з кнопки')
        )
    )
    .addSubcommand(sub => sub
        .setName('show')
        .setNameLocalization('ru', 'показать')
	.setNameLocalization('ua', 'показати')

        .setDescription('Shows current bot settings')
        .setDescriptionLocalization('ru', 'Показывает текущие настройки бота')
        .setDescriptionLocalization('ua', 'Показує настройки бота')
    )
    .addSubcommandGroup(group => group
        .setName('verify')
        .setNameLocalization('ru', 'верефикация')
        .setNameLocalization('ua', 'веріфікація')


        .setDescription('Verification is used to prevent raids using self-bots')
        .setDescriptionLocalization('ru', 'Верефикация предотвращает рейды через селф-ботов')
	.setDescriptionLocalization('ua', 'Веріфікація запобігає рейди селф-ботами')
        
        .addSubcommand(sub => sub
            .setName('toggle')
            .setNameLocalization('ru', 'переключить')
            .setNameLocalization('ua', 'переключити')

            .setDescription('Enable verification to prevent raids using self-bots')
            .setDescriptionLocalization('ru', 'Включите верефикацию, чтобы предотвратить рейды через селф-ботов')
            .setDescriptionLocalization('ua', 'Включіть веріфікацію щоб запобігти рейдам селф-ботами')
        )
        .addSubcommand(sub => sub
            .setName('length')
            .setNameLocalization('ru', 'длина')
	    .setNameLocalization('ua', 'довжина')

            .setDescription('Change length of captcha')
            .setDescriptionLocalization('ru', 'Сменить длину капчи')
	    .setDescriptionLocalization('ua', 'Змінити довжину капчі')


            .addIntegerOption(option => option
                .setMinValue(1)
                .setMaxValue(10)

                .setName('lenght')
                .setNameLocalization('ru', 'длина')
	        .setNameLocalization('ua', 'довжина')

                .setDescription('Amount of numbers in captcha')
                .setDescriptionLocalization('ua', 'Кількість цифр к капчі')
	        .setDescriptionLocalization('ru', 'Длина цифр в капче')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('send')
            .setNameLocalization('ru', 'отправить')
            .setNameLocalization('ua', 'відправити')

            .setDescription('Sends messsage with button for verifycation')
            .setDescriptionLocalization('ru', 'Отправляет сообщение с кнопкой для верефикации')
	    .setDescriptionLocalization('ua', 'Відправляє повідомлення з кнопкою для веріфікації')
        )
    )
