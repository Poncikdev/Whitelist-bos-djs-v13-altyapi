const Discord = require("discord.js")
const { intents } = Discord;
const client = new Discord.Client({
    "intents":[intents.FLAGS.GUILDS]
})

// Config Dosyası
const { token } = require("./config.json")

client.once("ready", () => {
    console.log("WhiteList Bot Aktif")
})

client.login(token) // Tokeni Config.json dosaysına atın.
