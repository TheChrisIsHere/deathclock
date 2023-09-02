const { Client, GatewayIntentBits } = require("discord.js")

const token = ""

let user_id = "1093182296644915201"
let channel_id = "1147440528997236757"
let guild_id = "1111185481749766154"
let time = 1000 * 60 * 60 * 24 * 2
let timeout = null
let msg = "Chris is Dead"

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.Guilds
    ]
})

client.on("ready", () => {
    console.log(`${client.user.username} is ready`)
    timeout = setTimeout(() => {
        client.guilds.fetch(guild_id).then(guild => {
            guild.channels.fetch(channel_id).then(channel => {
                channel.send(msg)
            })
        })
    }, time)
})

client.on("messageCreate", (message) => {
    if (message.author.id == user_id)
    {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            client.guilds.fetch(guild_id).then(guild => {
                guild.channels.fetch(channel_id).then(channel => {
                    channel.send(msg)
                })
            })
        }, time)
    }
})

client.login(token)
