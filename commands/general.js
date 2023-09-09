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

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

cmd({
        pattern: "settings",
        alias: ["setting", "seettings", "setting menu"],
        desc: "Sends info about settings",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://github.com/X-Notiya/-)
        let cap = `DarkQueen MD
❍━SETTINGS━❍
🧜‍♀️setvar THEME: eg: DARK QUEEN
🧜‍♂️setvar OWNER_NAME eg: CHAMODH `
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="*All available themes in Secktor*"
str+=`1. SECKTOR\n2. ADAM\n3. AYANOKOJI\n4. EDITH\n5. FRIDAY\n6. GENOS\n7. GIDEON\n8. GOKU\n9. LUFFY\n10. NARUTO\n11. NEZUKO\n12. PARKER\n13. ZEROTWO\n14. Eren Jeager(Coming Soon)\n\n these are the themes of Secktor Userbot.\_Reply ${prefix}setvar THEME:ZEROTWO`
return citel.reply(str)
    
}
)
