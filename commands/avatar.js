const { EmbedBuilder, Colors } = require('discord.js')

module.exports = async (inter, codes) => {
    inter.reply({ embeds: [ new EmbedBuilder()
        .setColor(Colors.Blurple)
        .setTitle(`${codes.avatar} ${inter.targetUser.username}`)
        .setImage(inter.targetUser.displayAvatarURL({size: 2048}))
    ] })
}