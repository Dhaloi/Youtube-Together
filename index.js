const client = new (require("discord.js").Client);
const keepAlive = require("./server");

const express = require('express');
const server = express()
const {
    MessageEmbed
} = require('discord.js');
const fetch = require('node-fetch')
const {
    Slash
} = require("discord-slash-commands");
const slash = new Slash({
    client: client
})
const embed = new MessageEmbed();

slash.on("create", (d) => {
    console.log(`Created slash command: ${JSON.parse(d.config.data).name}`)
})

client.on('guildCreate', guild => {
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Im added to a Server')
        .setDescription(`Bot joined to **${guild.name}**. Server member count: [**${guild.memberCount}** Member]!`)
        .setFooter(`${client.user.username}`, client.user.avatarURL)
        .setTimestamp()
    client.channels.cache.get('865566313467478062').send(embed);
});

client.on('guildDelete', guild => {
    const embed = new MessageEmbed()
        .setTitle('I left a server')
        .setDescription(`Bot left the server named **${guild.name}**. Member count: [${guild.memberCount} member]!`)
        .setFooter(`${client.user.username}`, client.user.avatarURL)
        .setColor('RED')
        .setTimestamp()
    client.channels.cache.get('865566313467478063').send(embed);
});

slash.on("command", async (command) => {
    if (command.name === "invite") {
        const invEmbed = new MessageEmbed()
            .setTitle("Invite me to your **Server**")
            .setDescription(`Invite me by pressing **[this link!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=3073&scope=bot%20applications.commands)** and watch YouTube with your crewmates <:amogus:854330669223247884>`)
            .setColor("#2f3136")
        command.callback({
            embeds: invEmbed
        });
    }
    if (command.name === "activity") {
        let channel = client.channels.cache.get(command.options.find(m => m.name === "channel").value);
        if (channel.type !== "voice") return command.callback("**Channel should be a voice channel.**")
               if (command.options.find(m => m.name === "type").value === "yt") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity: ")
                    embed.setDescription(`Press [${channel.name}](https://discord.gg/${invite.code}) and watch YouTube Together.`)
                    embed.setTimestamp()
                    embed.setFooter(`Made by XcaliberRuler#0002`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "cit") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "832012774040141894",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity: ")
                    embed.setDescription(`Press [${channel.name}](https://discord.gg/${invite.code}) and play Chess in the Park!`)
                    embed.setTimestamp()
                    embed.setFooter(`Made by XcaliberRuler#0002`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "pn") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "755827207812677713",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity: ")
                    embed.setDescription(`Press [${channel.name}](https://discord.gg/${invite.code}) and play Poker Night!  `)
                    embed.setTimestamp()
                    embed.setFooter(`Made by XcaliberRuler#0002`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "bio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "773336526917861400",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity: ")
                    embed.setDescription(`Press [${channel.name}](https://discord.gg/${invite.code}) and play Betrayal.io!`)
                    embed.setTimestamp()
                    embed.setFooter(`Made by XcaliberRuler#0002`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "fio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "814288819477020702",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity: ")
                    embed.setDescription(`Press [${channel.name}](https://discord.gg/${invite.code}) and play Fishington.io!`)
                    embed.setTimestamp()
                    embed.setFooter(`Made by XcaliberRuler#0002`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
    }
})



client.on("ready", () => {
    client.user.setActivity("for /activity", {
        type: "WATCHING",
    });
  console.log(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=3073&scope=bot%20applications.commands`)
    slash.create({
        guildOnly: false,
        data: {
            name: "activity",
            description: "Voice channel activities",
            options: [{
                name: "channel",
                description: "Choose any voice channel",
                required: true,
                type: 7,
            },
            {
                name: "type",
                description: "Activity Types:",
                required: true,
                type: 3,
                choices: [{
                    name: "YouTube Together",
                    value: "yt"
                },
                {
                    name: "Betrayal.io",
                    value: "bio"
                },
                {
                    name: "Poker Night",
                    value: "pn"
                },
                {
                    name: "Chess in the Park",
                    value: "cit"
                },
                {
                    name: "Fishington.io",
                    value: "fio"
                }
                ]
            }
            ]
        }
    })

    slash.create({
        guildOnly: false,
        data: {
            name: "invite",
            description: "Invite the bot to your server!",

        }
    })
})


client.login(process.env.TOKEN)
keepAlive();
