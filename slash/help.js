const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName("help")
    .setNameLocalization('ru', 'хелп')
    .setNameLocalization('uk', 'хелп')

    .setDescription('Help in finding commands and using them')
    .setDescriptionLocalization('ru', 'Помощь в поиске команд и их использывании')
    .setDescriptionLocalization('uk', 'Допомога в пошуку команд та їх використовуванні');
