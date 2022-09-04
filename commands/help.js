const { EmbedBuilder, Colors } = require('discord.js')

module.exports = async () => {
  inter.reply({ embeds: [ new EmbedsBuilder()
                         .setColor('2617db')
                         .setTitle( `${codes.rules}`)
                         .setThumbnail(bot.user.id)
                         .setDescription(` ${codes.help-help} \n ${codes.avatar-help} \n ${codes.info-help} \n ${codes.InfoUser-help} \n ${codes.AutoRoleJoin-help} \n ${codes.settingsViev-help} \n 
                         ${codes.settingsLang-help} \n ${codes.settingsAutoRoleButtonsAdd-help} \n ${codes.settingsAutoRoleButtonsDelete-help} \n ${codes.settingsVerificatinSwitch-help} \n 
                         ${codes.settingsVerificationLength-help} \n ${codes.settingsVerificationSand-help}`)
                         ] });
