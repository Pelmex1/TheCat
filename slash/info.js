const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName('info')
    .setNameLocalization('ru', 'инфо')
    .setNameLocalization('ru', 'інфо')

    .setDescription('Information about this bot')
    .setDescriptionLocalization('ru', 'Информация об этом боте')
    .setDescriptionLocalization('ua', 'Інформація про цоьго бота')
