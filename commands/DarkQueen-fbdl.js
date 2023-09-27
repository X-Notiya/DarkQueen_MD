const { tlang, botpic, cmd, prefix, runtime, sleep } = require('../lib')
const {  fbdl1 } = require('vihangayt-fbdl')




cmd({
            pattern: "fbdl",
            desc: "Downloads fb videos.",
            category: "downloader",
            filename: __filename,
            use: '<add fb url.>'
        },

        async(Void, citel, text) => {
          if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`);

	      let res = await fbdl1(!text)
          let vurl=res.url[0].url;
              let buttonMessage = {
                        video: {url:vurl},
                        mimetype: 'video/mp4',
                        fileName: res.meta.title+`.mp4`,
                        caption : "*FACEBOOK DOWNLOADER*/n "
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });


    }
)
