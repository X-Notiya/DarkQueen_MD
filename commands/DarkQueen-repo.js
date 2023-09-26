const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------
cmd({
        pattern: "alive",
        react: "👋",
        desc: "Sends info about alive.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let cap = `┏╼❲𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿❳╼❋
┃👋𝙷𝙴𝙻𝙻𝙾𝚆  ${citel.pushName}
┃ ↱𝙸𝙰𝙼 𝙳𝙰𝚁𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳↲
┃❲𝚠𝚐𝚊𝚝𝚜𝚊𝚙𝚙 𝚞𝚜𝚎𝚛 𝚋𝚘𝚝❳
┃
┣❑𝙱𝙾𝚃 𝚂𝙿𝙴𝙴𝙳: ❲${latensie.toFixed(4)}❳
┣❑𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: ᴅᴀʀᴋ Qᴜᴇᴇɴ
┣❑𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁: ᴍʀ.ᴄʜᴀᴍᴏᴅʜ
┣❑𝙼𝙴𝙼𝙾𝚁𝚈
┣❑𝙳𝙰𝚃𝙴
┣❑𝚃𝙸𝙼𝙴
┣❑𝙱𝙾𝚃 𝚄𝙿𝚃𝙸𝙼𝙴 ❲${runtime(process.uptime())}❳
┃
┃🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
┃🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾❋`
        let buttonMessaged = {
            image: 'https://telegra.ph/file/2410f13a9a02224c996af.jpg',
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "ＤＡＲＫ ＱＵＥＥＮ ＭＤ Ｖ1",
                    body: "🍁ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴇᴍ🍁",
                    thumbnail: 'https://telegra.ph/file/3580e4bfbc324e93918ad.jpg',
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `wa.me/+94715491788?text=hi.....👋`,
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
        pattern: "botlist",
        ʀᴇᴀᴄᴛ: "🧚‍♂️",
        desc: "To check bot status",
        category: "darkqueen",
        filename: __filename,
    },
    async(Void, citel) => {
        let ter = `${tiny(category)}\n
🧜‍♀️⃝►● ${fancytext(plugins,1)}\n
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "ＤＡＲＫ ＱＵＥＥＮ ＭＤ Ｖ1",
                    body: `🍁ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴇᴍ🍁`,
                    thumbnail: log0,
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
