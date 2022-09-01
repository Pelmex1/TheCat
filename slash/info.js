const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName('info')
    .setNameLocalization('ru', 'инфо')
    .setNameLocalization('uk', 'інфо')

    .setDescription('Information about this bot')
    .setDescriptionLocalization('ru', 'Информация об этом боте')
    .setDescriptionLocalization('uk', 'Дані про цього бота');
