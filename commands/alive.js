/**
🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭
🎩𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑯𝑨𝑴𝑶𝑫𝑯🎩

**/
const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            react: "👋"
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭*`
            const alivtxt = `
*Hello, ${citel.pushName},*
_This is  DarkQueen

*Version:-* _0.0.6_
*Uptime:-* _${runtime(process.uptime())}_
*Owner:-* _${Config.ownername}_
*Branch:-* _${Config.BRANCH}_

🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )