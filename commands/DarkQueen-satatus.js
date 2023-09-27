const { tlang, botpic, cmd, prefix, runtime, sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//💓ᴅᴀʀᴋQᴜᴇᴇɴ•ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ💓
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "darkqueen",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let msg = `*┏╼[ _🧚‍♂️DARK QUEEN MD-V1🧚‍♂️_]╾❋*
┣❑🐉➤ *𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* 『ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ』
┣❑🎩➤ *𝙱𝙾𝚃 𝙾𝚆𝙽* 『ᴍʀ.ᴄʜᴀᴍᴏᴅʜ』
┣❑🧣➤ *𝙱𝙾𝚃 𝚂𝙿𝙴𝙴𝙳* 『${latensie.toFixed(4)}』
┣❑😈➤ *𝙱𝙾𝚃 𝚄𝙿𝚃𝙸𝙼𝙴* 『${runtime(process.uptime())}』
┗╼═╾╼═╾╼═╾╼═╾╼═╾❋
`;
        let buttonMessaged = {
            mp4: {
                url: 'https://telegra.ph/file/f9ba2e7d35c662194e45b.mp4',
            },
            caption: msg,
            footer: '『ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ ʙᴏᴛ』',
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: 'ＤＡＲＫ ＱＵＥＥＮ ＭＤ-Ｖ1',
                    body: `🍁ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀɴ🍁`,
                    thumbnail: 'https://telegra.ph/file/1838ab37751cf02e063a8.jpg',
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
