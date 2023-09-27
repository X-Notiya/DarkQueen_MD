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
                    url: 'https://telegra.ph/file/3580e4bfbc324e93918ad.jpg',
                },
                caption: alivetext,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });
            
            await Void.sendMessage(citel.chat, { audio: {url: "https://github.com/X-Notiya/DarkQueen_MD/blob/main/DarkQueen/%E0%B6%85%E0%B6%A9%E0%B7%9D.mp3" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
                return await Void.sendMessage(citel.chat, buttonMessaged);
        }
    )
/**👋හායි.....?**/
