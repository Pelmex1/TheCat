const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName('info')
    .setNameLocalization('ru', 'инфо')

    .setDescription('Information about this bot')
    .setDescriptionLocalization('ru', 'Информация об этом боте');