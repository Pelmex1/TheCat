const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
	.setName('settings')
    .setNameLocalization('ru', 'настройки')

    .setDescription('Settings')

    .setDefaultPermission(false)

    .addSubcommand(sub => sub
            .setName('language')
            .setNameLocalization('ru', 'язык')

            .setDescription('Change bot language for this server')
            .setDescriptionLocalization('ru', 'Поменять язык бота для этого сервера')

        .addStringOption(op => op
                .setName('language')
                .setNameLocalization('ru', 'язык')

                .setDescription('New bot\'s language')
                .setDescriptionLocalization('ru', 'Новый язык бота')

                .addChoices(
                    { name: 'English', value: 'en' },
                    { name: 'Русский', value: 'ru' }
                )

                .setRequired(true)
            )
    )
    .addSubcommandGroup(group => group
        .setName('auto-role')
        .setNameLocalization('ru', 'авто-роль')

        .setDescription('d')

        .addSubcommand(sub => sub
            .setName('join')
            .setNameLocalization('ru', 'заход')
            
            .setDescription('Give role to members when they joined')
            .setDescriptionLocalization('ru', 'Давать роль участникам когда они заходят')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')

                .setDescription('This role will be given to new members')
                .setDescriptionLocalization('ru', 'Эту роль получат новые участники')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-add')
            .setNameLocalization('ru', 'кнопки-добавить')

            .setDescription('Add role to buttons')
            .setDescriptionLocalization('ru', 'Добавить роль в кнопки')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')

                .setDescription('Members are able to get this role via buttons')
                .setDescriptionLocalization('ru', 'Участники смогут получить эту роль через кнопки')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-remove')
            .setNameLocalization('ru', 'кнопки-убрать')

            .setDescription('Remove role from buttons')
            .setDescriptionLocalization('ru', 'Убрать роль из кнопки')
        )
    )
    .addSubcommand(sub => sub
        .setName('show')
        .setNameLocalization('ru', 'показать')

        .setDescription('Shows current bot settings')
        .setDescriptionLocalization('ru', 'Показывает текущие настройки бота')
    )
    .addSubcommandGroup(group => group
        .setName('verify')
        .setNameLocalization('ru', 'верефикация')

        .setDescription('Verification is used to prevent raids using self-bots')
        .setDescriptionLocalization('ru', 'Верефикация предотвращает рейды через селф-ботов')   
        
        .addSubcommand(sub => sub
            .setName('toggle')
            .setNameLocalization('ru', 'переключить')

            .setDescription('Enable verification to prevent raids using self-bots')
            .setDescriptionLocalization('ru', 'Включите верефикацию, чтобы предотвратить рейды через селф-ботов')   
        )
        .addSubcommand(sub => sub
            .setName('length')
            .setNameLocalization('ru', 'длина')

            .setDescription('Change length of captcha')
            .setDescriptionLocalization('ru', 'Сменить длину капчи')

            .addIntegerOption(option => option
                .setMinValue(1)
                .setMaxValue(10)

                .setName('lenght')
                .setNameLocalization('ru', 'длина')

                .setDescription('Amount of numbers in captcha')
                .setDescriptionLocalization('ru', 'Количество цифр в капче')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('send')
            .setNameLocalization('ru', 'отправить')

            .setDescription('Sends messsage with button for verifycation')
            .setDescriptionLocalization('ru', 'Отправляет сообщение с кнопкой для верефикации')
        )
    )
