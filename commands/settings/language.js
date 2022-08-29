const
    { EmbedBuilder, Colors } = require('discord.js'),
    { db } = require('../../index'),
    { getLocalisation } = require('../../utils')

module.exports = async (inter) => {
    await db
        .from('servers')
        .update({ language: inter.options.getString('language') })
        .match({ id: inter.guildId })

    codes = getLocalisation(inter.options.getString('language'))
    inter.reply({ embeds: [ new EmbedBuilder()
        .setColor(Colors.Blurple)
        .setTitle(`${codes.settings_changed}`)] })
}