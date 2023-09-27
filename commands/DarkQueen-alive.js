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
*┏╼[ _🧚‍♂️DARK QUEEN MD-V1_]╾❋*
┣❑🐉➤ *𝙾𝚆𝙽𝙴𝚁* 『ᴍʀ.ᴄʜᴀᴍᴏᴅʜ』
┣❑🦩➤ *𝙾𝚆𝙽 𝙽𝙱* 『94715491788』
┣❑🍁➤ *𝚄𝙿𝚃𝙸𝙼𝙴* ${runtime(process.uptime())}
┣❑💕➤ *𝙱𝚁𝙰𝙽𝙲* 『ᴍᴀɪɴ』
┣❑🎩➤ *𝚅𝙴𝚁𝚂𝙸𝙾𝙽* 0.1
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
            
            await Void.sendMessage(citel.chat, { audio: {url: "https://github.com/X-Notiya/MD/blob/main/1695782789736spcxkj4e-voicemaker.in-speech.mp3" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
                return await Void.sendMessage(citel.chat, buttonMessaged);
        }
    )
/**👋හායි.....?**/
