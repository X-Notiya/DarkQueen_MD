const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Ping!!!```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '💓𝐃𝐀𝐑𝐊 𝐐𝐔𝐄𝐄𝐍 𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃\n ' + (final - inital) + ' 𝐌𝐒💓 ', edit: key});
    }
);
