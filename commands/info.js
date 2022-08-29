const
    { EmbedBuilder, Colors } = require('discord.js'),
    { bot, startTime } = require('../index');

module.exports = async (inter, codes) => {
    inter.reply({ embeds: [ new EmbedBuilder()
        .setAuthor({
            name: bot.user.username,
            iconURL: bot.user.avatarURL()
        })
        .setColor(Colors.Blurple)
        .setDescription(`
${codes.ping}: ${bot.ws.ping}${codes.ms}
${bot.guilds.cache.size} ${codes.guilds}
${codes.start_time} <t:${startTime}:R>
`)
        ]})
    }