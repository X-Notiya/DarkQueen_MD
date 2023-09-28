const { tlang, botpic, cmd, prefix, runtime } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
*┏╼[ _🧚‍♂️DARK-QUEEN-MD-V1🧚‍♂️_]╾❋*
┃        『ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ』
┣⃞❑⃝🌿⃟➤ *𝙾𝚆𝙽𝙴𝚁* _ᴍᴇ.ᴄʜᴀᴍᴏᴅʜ_
┣⃞❑⃝🧞‍♀️⃟➤ *𝚂𝙿𝙴𝙴𝙳* ${latensie.toFixed(4)} 
┣⃞❑⃝🦸⃟➤ *𝚄𝙿𝚃𝙸𝙼𝙴* ${runtime(process.uptime())}
┣⃞❑⃝🦹⃟➤ *𝚅𝙴𝚁𝚂𝙸𝙾𝙽* ❶
┣⃞❑⃝👥⃟➤ *𝙼𝙾𝙳𝙴* _ᴘᴜʙʟɪᴄ_
┃
┃🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
┃🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀɴ_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋
`;
        let buttonMessaged = {
            video: {
                url: 'https://telegra.ph/file/f9ba2e7d35c662194e45b.mp4',
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: 'ＤＡＲＫ ＱＵＥＥＮ ＭＤ-Ｖ1',
                    body: `🍁ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ🍁`,
                    thumbnail: 'https://telegra.ph/file/3580e4bfbc324e93918ad.jpg',
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
