const
   { EmbedBuilder, Colors } = require('discord.js')
   
   module.exports = async (inter) => {
   inter.reply({ embeds: [ new EmbedBuilder()
        .setColor('131fdb')
        .setTitle('Доступные команды:')
        setDescription('**Информация:**' + \n + '/help /info
