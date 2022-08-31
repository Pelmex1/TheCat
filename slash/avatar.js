const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = new ContextMenuCommandBuilder()
	.setName('Avatar')
    .setNameLocalization('ru', 'Аватар')
    .setNameLocalization('ua', 'Аватар')
	.setType(ApplicationCommandType.User);
