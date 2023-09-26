const { tlang, botpic,cmd, prefix } = require('../lib')
//---------------------------------------------------------------------------

cmd({
        pattern: "git",
        react: "🍁",
        desc: "Sends info about repo.",
        category: "darkqueen",
        filename: __filename,
    },
    async(Void, citel) => {
        let DarkQueen = `𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿
❑⃝●⃟➤𝙶𝙸𝚃𝙷𝚄𝙱: https://github.com/X-Notiya/DarkQueen_MD

❑⃝●⃟➤𝚂𝚄𝙿𝙿𝙾𝚁𝚃: https://chat.whatsapp.com/IDAh8TFlvXv06EmNNALSq3

❑⃝●⃟➤𝙾𝚆𝙽𝙴𝚁: wa.me/+94715491788?text=Hi..👋


🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋQᴜᴇᴇɴ ᴛᴍ_*🎭`
        let buttonMessaged = {
            image: 'https://telegra.ph/file/3580e4bfbc324e93918ad.jpg',
            caption: DarkQueen,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "ＤＡＲＫ ＱＵＥＥＮ ＭＤ Ｖ1",
                    body: "🧚‍♂️𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚀𝚄𝙴𝙴𝙽 𝚃𝙴𝙰𝙼🧚‍♂️",
                    thumbnail: "https://telegra.ph/file/2410f13a9a02224c996af.jpg",
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
