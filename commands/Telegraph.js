/**
🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭
🎩𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑯𝑨𝑴𝑶𝑫𝑯🎩
 **/

//---------------------------------------------------------------------------
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "converter",
        filename: __filename,
    },
    async(Suhail, msg,text) => {
 if (!text) { text=msg.quoted.text;}
        if(!text) return msg.send('Please reply to any text to get link.');
        let data = await pastebin.createPaste(text, "DarkQueen-MD");
        return msg.send('_Here is your link._\n'+data+'\n*Click to Get Your Text*');
    }
);
//----------------------------------------------- ---------------------------
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "converter",
        filename: __filename,
    },
    async(Suhail, msg,text) => {
 let a = msg.quoted ? msg.quoted.text : msg.text;
   try{   
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=DarkQueen-MD+Bot&author_name=Dark-Queen&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return msg.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭`)

   }catch(e){return await msg.error(e)}
});
 