require('dotenv').config();
const
    { IntentsBitField, Client } = require('discord.js'),
    fs = require('fs'),
    { handleError, getLocalisation, refreshGuild } = require('./utils.js'),
    { createClient } = require('@supabase/supabase-js'),

    bot = new Client({
        intents: new IntentsBitField(32767),
        ws: { 
            properties: {
                    $os: process.platform,
                    $browser: "Discord Android",
                    $device: "discord.js" 
                }
            }
    }),
    db = createClient(
        process.env.db_url,
        process.env.db_key
    );
module.exports = {bot: bot, startTime: Math.round(Date.now()/1000), db: db}
black_list = []
if (process.argv.includes('--refresh-slash')) {
    require('./slash/init.js');
}

interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
selectMenus = {};

console.log('')
start = Date.now();
bot.on('ready', async ()=>{
    await bot.user.setPresence({ activities: [{ name: 'поедании вискаса', type: 5 }]});
    duration = Date.now() - start;
    bot.guilds.cache.each(g=>{ refreshGuild(g) })
    console.log(`${bot.user.username} is ready for ${duration}ms`);
})

bot.on('interactionCreate', async (inter)=>{
    data = (await db
        .from('servers')
        .select('*')
        .match({ id: inter.guildId })).data[0]

    path = './'
    try {
        if (inter.isCommand()) { path += 'commands/'; }
        if (inter.isAutocomplete()) { path += 'autocomplete/'; }
        path += inter.commandName + '/'
        try {
            sub = inter.options.getSubcommand()
            group = inter.options.getSubcommandGroup()
        }
        catch(a) { sub = null; group = null }
        if (inter.options && sub) {
            if (group) {
                path += group + '/'
            }
            path += sub
        }
        path = (path
            .replaceAll('-', '_')
            .replaceAll(' ', '_')
            .toLowerCase() + '.js')
            .replaceAll('/.js', '.js')
        console.log(path)
        path = require(path)
        path(inter, getLocalisation(data.language))
                .catch((err) => handleError(inter, err, getLocalisation(data.language)));
    } catch(err) { handleError(inter, err, getLocalisation(data.language)); }
});

bot.on('guildMemberAdd', member => {
    data = (await db
        .from('servers')
        .select('*')
        .match({ id: member.guildId })).data[0]

    role= member.guild.roles.cache.find(role => role.id === data['role-join'])
    if (role) { 
        member.roles.add(role);
    }
});

client.on("guildCreate", refreshGuild)

bot.login(process.env.token);
