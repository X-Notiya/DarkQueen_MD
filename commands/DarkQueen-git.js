const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const speed = require('performance-now');
//---------------------------------------------------------------------------
cmd({
        pattern: "bot",
        react: "🍁",
        alias: ["about"],
        desc: "To check bot status",
        category: "darkqueen",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
┏❲𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿❳╾●
┣❑🄾🅆🄽🄴🅁 ❲𝙼𝚛.𝙲𝙷𝙰𝙼𝙾𝙳𝙷❳
┣❑🄱🄾🅃 🅂🄿🄴🄴🄳 ❲${latensie.toFixed(4)}❳
┣❑🄱🄾🅃 🅄🄿🅃🄸🄼🄴 ❲${runtime(process.uptime())}❳
┣❑🄾🅆🄽🄴🅁 🄽🄾: 94715491788
┃
┃🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
┃🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾●
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
                    title: "𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿",
                    body: `💓ᴅᴀʀᴋQᴜᴇᴇɴ•ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ💓`,
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

//---------------------------------------------------------------------------
cmd({
        pattern: "git",
        alias: ["about"],
        desc: "To check bot status",
        category: "darkqueen",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
    🧚‍♂️𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿🧚‍♂️
❑➥ɢɪᴛʜᴜʙ: https://github.com/X-Notiya/DarkQueen_MD

❑➥ꜱᴜᴘᴘᴏʀᴛ: https://chat.whatsapp.com/IDAh8TFlvXv06EmNNALSq3

❑➥ᴏᴡɴᴇʀ: wa.me/+94715491788?text=Hi....👋

🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
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
                    title: "𝘿𝘼𝙍𝙆 𝙌𝙐𝙀𝙀𝙉 𝙈𝘿",
                    body: `💓ᴅᴀʀᴋQᴜᴇᴇɴ•ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ💓`,
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

