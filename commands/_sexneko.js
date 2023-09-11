const axios = require("axios");

module.exports = {
  name: "sexneko",
  description: "Ambitious ki rider waves",
  category: "Anime",
  start: async(vorterx, m, { prefix, toReact }) => {

  await toReact("😎");
    let vorterxi = await axios.get('https://waifu.pics/api/nsfw/waifu');
        vorterx.sendMessage(m.from, {image:{url:vorterxi.data.url}, caption: `🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭`}, {
            quoted: m
        })
  }
  };
