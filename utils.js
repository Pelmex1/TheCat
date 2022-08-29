const 
    fs = require('fs'),
    { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
    getLocalisation: (lang) => {
        lang_codes = require(`./localisation/${
            fs.readdirSync('./localisation/').includes(lang + '.json') ?
            lang : 'en'
        }.json`);

        return lang_codes || require('./localisation/en.json');
    },
    handleError: async (inter, err, codes) => {
        inter.reply({embeds: [
            new EmbedBuilder()
                .setTitle(codes.error_title)
                .setDescription(codes.error_text)
                .setColor(Colors.Red)
            ], ephemeral: true});
        console.error(err)
    }
};
getLocalisation = module.exports.getLocalisation;