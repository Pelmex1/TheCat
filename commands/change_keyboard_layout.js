const
    { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = async (inter, codes) => {
    if (!inter.targetMessage.content) {
        inter.reply({ embeds: [
            new EmbedBuilder()
                .setTitle(codes.empty_message)
                .setColor(Colors.Red)
        ], ephemeral: true });
        return;
    }
    const
        ru = `йцукенгшщзхъфывапролджэ\\ячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭ/ЯЧСМИТЬБЮ,`.split(''),
        en = `qwertyuiop[]asdfghjkl;'\\zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?`.split('');
    text = inter.targetMessage.content;
    
    for (i in ru) {
        text = text.replaceAll(en[i], ru[i]);
    }
     
    inter.reply({ embeds: [
        new EmbedBuilder()
            .addFields([{
                name: codes.before,
                value: inter.targetMessage.content,
                inline: true
            }, {
                name: codes.after,
                value: text,
                inline: true
            }])
            .setColor(Colors.Blurple)
            .setAuthor({ name: inter.targetMessage.author.username, iconURL: inter.targetMessage.author.avatarURL() })
    ], components: [ new ActionRowBuilder()
    .addComponents(
		new ButtonBuilder()
			.setLabel(codes.message_jump)
			.setStyle(ButtonStyle.Link)
            .setURL(inter.targetMessage.url)
		)]
    });
}