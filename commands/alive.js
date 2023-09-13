const { cmd, botpic, Config, tlang,getBuffer, prefix } = require('../lib')
const hrs = new Date().getHours({ timeZone: 'Asia/Karachi' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            desc: "Show Live Time Of Pakistan",
            category: "fun",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Karachi' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = '𝙂𝙊𝙊𝘿 𝙈𝙊𝙍𝙉𝙄𝙉𝙂💓'
if (hrs >= 12 && hrs <= 16) wish = '𝙂𝙊𝙊𝘿 𝘼𝙁𝙏𝙀𝙍𝙉𝙊𝙊𝙉𝙎🌞'
if (hrs >= 16 && hrs <= 20) wish = '𝙂𝙊𝙊𝘿 𝙀𝙒𝙀𝙉𝙄𝙉𝙂𝙎🌥'
if (hrs >= 20 && hrs <= 24) wish = '𝙂𝙊𝙊𝘿 𝙉𝙄𝙂𝙏 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const suhail= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : XNotiya[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❍━${Config.botname} 𝐰𝐡𝐚𝐭𝐬𝐚𝐩 𝐛𝐨𝐭━❍
           💓ᴅᴀʀᴋQᴜᴇᴇɴ•ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ💓`,
           "orderTitle": "alive",
           "sellerJid": '94765837695@s.whatsapp.net' 
        }
      }
}

let timenow =`
╭────────────────●
│   𝐃𝐚𝐫𝐤 𝐐𝐮𝐞𝐞𝐧 𝐌𝐃 𝐕1
│   𝐇𝐞𝐥𝐥𝐨𝐰 {citel.pushName} 🥀${wish}🥀
│   𝐓𝐢𝐦𝐞 ${time} ${am_pm}
│   𝐃𝐚𝐭𝐞    ${date} 
│   𝐒𝐩𝐞𝐞𝐝 ${latensie.toFixed(4)} 𝐌𝐒
│   𝐔𝐩𝐭𝐢𝐦𝐞 ${runtime(process.uptime())}
│   𝐎𝐰𝐧𝐞𝐫 𝐂𝐇𝐀𝐌𝐎𝐃𝐇
│  
│ 💓ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ💓
│
│🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
│🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭
╰────────────────●
`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})
