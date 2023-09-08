/**
🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭
🎩𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑯𝑨𝑴𝑶𝑫𝑯🎩
**/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "left",
            desc: "Left from the group",
            category: "group cmd",
            filename: __filename,
            use: 'group',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("Please reply to user");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "left")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));

        }
    )
    //---------------------------------------------------------------------------