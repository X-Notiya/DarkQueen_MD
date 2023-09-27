const { cmd } = require('../lib');
//💓ᴅᴀʀᴋQᴜᴇᴇɴ•ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ💓
cmd({
    pattern: "img",
    desc: "Google Image search",
    category: "downloader",
  },
  async ( Void, text, citel ) => {
    if (!text) return await Void.sendMessage("*_නමක් ඇතුලත් කරන්න🧜‍♀️_*");
    let [query, amount] = text.plit(",");
    let result = await gimage(query, amount);
    await Void.sendMessage = `_Downloading ${amount || 5} images for ${query}_`
    );
    for (let i of result) {
      Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
    }
  }
);
