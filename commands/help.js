const { EmbedBuilder, Colors } = require('discord.js')

module.exports = async () => {
  inter.reply({ embeds: [ new EmbedsBuilder()
                         .setColor('2617db')
                         .setTitle( `${codes.rules}`)
                         .setThumbnail(bot.user.id)
                         .setDescription(` ${codes.avatar} \n ${codes.info} \n ${codes.InfoUser} \n ${codes.AutoRoleJoin} \n ${codes.settingsViev} \n 
                         ${codes.settingsLang} \n ${codes.settingsAutoRoleButtonsAdd} \n ${codes.settingsAutoRoleButtonsDelete} \n ${codes.settingsVerificatinSwitch} \n 
                         ${codes.settingsVerificationLength} \n ${codes.settingsVerificationSand}`)
                         ] });
