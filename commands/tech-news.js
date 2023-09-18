cmd({
            pattern: "hi",
            react: "💡",
            category: "general",
            filename: __filename,
        },
        await Void.sendMessage(citel.chat, { audio: {url: "https://raw.githubusercontent.com/kumarahimes/ANGEL-QUEEN-MD/main/AngelQueen/PTT-20230719-WA0068.m4a" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
                return await Void.sendMessage(citel.chat, buttonMessaged);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `All Available Notes are:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
