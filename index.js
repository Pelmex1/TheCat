require('dotenv').config();
const
    { IntentsBitField, Client } = require('discord.js'),
    fs = require('fs'),
    { handleError, getLocalisation } = require('./utils.js'),
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
    bot.guilds.cache.each(g=>{
        db
            .from('servers')
            .select('*')
            .match({ id: g.id })
            .then(d=>{
                if (!d.data.length) {
                    db
                        .from('servers')
                        .insert([{ id: g.id, get_roles: [], audit: [], language: g.preferredLocale }])
                        .then(a=>{
                            console.log(`${g.id} was added to DB`)
                        })
                } else {
                    console.log(`${g.id} is already in DB`)
                }
            })
    })
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
                .catch((err) => handleError(inter, err, getLocalisation(data.language)))
    } catch(err) { handleError(inter, err, getLocalisation(data.language)) }
});

bot.login(process.env.token);
