const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = new ContextMenuCommandBuilder()
	.setName('User info')
    .setNameLocalization('ru', 'Информация о пользователе')
    .setNameLocalization('ua', 'Дані про користувача')
	.setType(ApplicationCommandType.User);
