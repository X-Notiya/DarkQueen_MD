const { tlang, botpic, cmd, prefix, runtime, sleep } = require('../lib')

//---------------------------------------------------------------------------
cmd({
        pattern: "1",
        alias: ["1.newscmmands", "1.newscmd", "1.news"],
        desc: "bot news cmmands.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let cap = `*┏═[ _🧚‍♂️DARK QUEEN MD-V1🧚‍♂️_ ]═❋*
┃ *『𝐍𝐄𝐖𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒』*
┣❑ɴᴀꜱᴀ
┣❑ʜɪʀᴜɴᴇᴡꜱ
┣❑ꜱɪʀᴀꜱᴀ
┣❑ᴇꜱᴀɴᴀ
┣❑ɪᴏꜱ
┗╼═╾╼═╾╼═╾╼═╾╼═╾❋`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "ＤＡＲＫ ＱＵＥＥＮ ＭＤ-Ｖ1",
                    body: "🍁ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ🍁",
                    thumbnail: 'https://telegra.ph/file/2410f13a9a02224c996af.jpg',
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
        pattern: "2",
        alias: ["2.downloder commands"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let ter = `┏═[ _🧚‍♂️DARK QUEEN MD-V1🧚‍♂️_ ]═❋
┃ *『𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒』*
┣❑ꜱᴛɪᴄᴋᴇʀ
┣❑ꜱᴜᴘᴘᴏʀᴛ
┣❑ᴡᴀʀɴ
┣❑ᴛᴀɢᴀʟʟ
┣❑ʀᴇϙᴜᴇꜱᴛ
┣❑ʀᴇᴛʀɪᴠᴇ
┣❑ʀᴡᴀʀɴ
┣❑ᴘᴏʟʟ
┣❑ᴘʀᴏꜰɪʟᴇ
┣❑ʀᴀɴᴋ
┣❑ᴘʀᴏᴍᴏᴛᴇ
┣❑ᴋɪᴄᴋ
┣❑ᴍᴇᴍᴇɢᴇɴ
┣❑ɢʀᴏᴜᴘ
┣❑ɢʀᴏᴜᴘᴘɪᴄ
┣❑ʜɪᴅᴇᴛᴀɢ
┣❑ᴀᴅᴅ
┣❑ɢᴇᴛᴊɪᴅꜱ
┣❑ᴅᴇᴍᴏᴛᴇ
┣❑ᴅᴇʟ
┣❑ᴄʜᴇᴄᴋᴡᴀʀɴ
┣❑ʙʀᴏᴀᴅᴄᴀꜱᴛ
┣❑ᴀɴᴛɪʟɪɴᴋ
┣❑ᴀᴄᴛ
┣❑ᴅᴇᴀᴄᴛ
┗╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋
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
                    title: "ＤＡＲＫ ＱＵＥＥＮ ＭＤ-Ｖ1
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
