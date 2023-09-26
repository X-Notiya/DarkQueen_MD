const { addnote, cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, sleep} = require('../lib') 
//---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivetext = `
┏╼❲𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿❳╾❋
┃ʜᴇʟʟᴏᴡ {citel.pushName}
┃ɪᴀᴍ ᴅᴀʀᴋ Qᴜᴇᴇɴ ʙᴏᴛ
┣❑ᴏᴡɴᴇʀ: 𝙲𝙷𝙰𝙼𝙾𝙳𝙷
┣❑ᴏᴡɴᴇʀ ɴᴏ: 94715491788
┣❑ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}
┣❑ᴠᴇʀꜱɪᴏɴ: 0.1
┣❑ʙʀᴀɴᴄʜ: 𝙼𝙰𝙸𝙽
┃
┃🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
┃🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾❋
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivetext,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
/**👋හායි.....?**/
