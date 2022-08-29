const 
    { EmbedBuilder, Colors } = require('discord.js'),
    { db } = require('../../../index')

module.exports = async (inter, codes) => {
    inter.reply({content: `<@&${inter.options.getRole('role').id}>`, ephemeral: true})
}