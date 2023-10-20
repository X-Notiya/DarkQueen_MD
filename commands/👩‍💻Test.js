/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs')
var videotime = 6000 // 100 min
var dlsize = 100 // 100mb
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "testvideo",
            alias: ["වීඩියෝ"],
            desc: "Downloads video from yt.",
            category: "downloader",
            react: "📽️",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Example :* ${prefix} ලෙලෙනා`)
            let yts = require("secktor-pack")
            citel.reply("*Seaching Videos.* 🔎 ");
            let search = await yts(text)
            listSerch = []
            teskd = `\n *Searched For* ${text}. *Select & Send*\n`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `*~Dark Queen MD~*👨‍💻 / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "All request★ 🔎 / Total Search 🔎" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: `${tlang().title}.*`,
                buttonText: "Select Video",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            alias: ["ගීතය"],
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            react: "🎵",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Use ${command} Back in Black`);
            let yts = require("secktor-pack");
            citel.reply("*Searching Songs. 🔎*");
            let search = await yts(text);
            let anu = search.videos[0];
            let buttons = [{
                    buttonId: `${prefix}ytmp4 ${anu.url}`,
                    buttonText: {
                        displayText: "VIDEO",
                    },
                    type: 1,
                },
                {
                    buttonId: `${prefix}ytmp3 ${anu.url}`,
                    buttonText: {
                        displayText: "AUDIO",
                    },
                    type: 1,
                },
                  {
                    buttonId: `${prefix}ytdoc ${anu.url}`,
                    buttonText: {
                        displayText: "DOCUMENT",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `

        ${tlang().title} 
╭────────────────❖
│ ℹ️ *INFORMATION* ⬇️
│
│☍ ⦁ *Title:* ${anu.title}
│☍ ⦁ *Duration:* ${anu.timestamp}
│☍ ⦁ *Viewers:* ${anu.views}
│☍ ⦁ *Uploaded:* ${anu.ago}
│☍ ⦁ *Author:* ${anu.author.name}
╰────────────────❖
⦿ *𝗨𝗥𝗟* : ${anu.url}
`,
                footer: tlang().footer,
                buttons: buttons,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
