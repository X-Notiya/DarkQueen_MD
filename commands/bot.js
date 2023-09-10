/**
🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭
🎩𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑯𝑨𝑴𝑶𝑫𝑯🎩
**/


const { Module } = require("..lib/");
const Jimp = require("jimp");

DarkQueencmd({
        pattern: "setpp",
        alias :['plist'],
        category: "info",
        react: "💱"
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(message,match,m) => {
       if (!message.reply_message.image)
          return await message.reply("*𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐬 𝐩𝐡𝐨𝐭𝐨*")
       let buff = await m.quoted.download();
       await message.setPP(message.user,buff);
       return await message.reply("*𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐔𝐩𝐝𝐚𝐭𝐞𝐝*");
      }
    );