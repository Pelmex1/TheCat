const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = new ContextMenuCommandBuilder()
	.setName('Change keyboard layout')
    .setNameLocalization('ru', 'Сменить раскладку клавиатуры')
    .setNameLocalization('uk', 'Змінити розкладку клавіатури')
	.setType(ApplicationCommandType.Message);
