const
    { EmbedBuilder, Colors } = require('discord.js');

module.exports = async (inter, codes) => {
    if (inter.targetMember.presence) {
        s = inter.targetMember.presence.clientStatus
        platforms = `${s.web ? ':globe_with_meridians:' : ''} ${s.desktop ? ':desktop:' : ''} ${s.mobile ? ':mobile_phone:' : ''} `
    } else { platforms = '' }
    inter.reply({ embeds: [ new EmbedBuilder()
        .setAuthor({ name: inter.targetUser.username, iconURL: inter.targetUser.avatarURL() })
        .setColor(inter.targetMember.accentColor || Colors.Blurple)
        .setDescription(`
${codes.status}: ${platforms}${codes[inter.targetMember.presence ? inter.targetMember.presence.status : 'offline']}
${codes.joined} <t:${Math.round(inter.targetMember.joinedTimestamp/1000)}:R>
${codes.created} <t:${Math.round(inter.targetUser.createdTimestamp/1000)}:R>
`)
    ]})
}