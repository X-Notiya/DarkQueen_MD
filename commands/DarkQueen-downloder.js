/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 3600 // 30 min
var dlsize = 100 // 100mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
	    react: '🧚‍♂️'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: Config.packname, author: "MR-KALINDU"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  
		}


 

//---------------------------------------------------------------------------

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};




//---------------------------------------------------------------------------

cmd({
            pattern: "tiktok",
	    alias :  ['tt','ttdl'],
            desc: "Downloads Tiktok Videos Via Url.",
            category: "downloader",
            filename: __filename,
            use: '<add tiktok url.>'
        },

        async(Void, citel, text) => {
 if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`);
 let txt = text ? text.split(" ")[0]:'';
 if (!/tiktok/.test(txt)) return await citel.send(`*Uhh Please, Give me Valid Tiktok Video Url!*`);
 const { status ,thumbnail, video, audio } = await tiktokdl(txt)
 //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
 if (status) return await Void.sendMessage(citel.chat, {video : {url : video } , caption : Config.caption } , {quoted : citel });
 else return await citel.send("Error While Downloading Your Video") 
})
//---------------------------------------------------------------------------

cmd({
        pattern: "facebook",
	    alias :  ['fb','fbdl'],
        desc: "Downloads fb videos.",
        category: "downloader",
        filename: __filename,
        use: '<add fb url.>'
},
async(Void, citel, text) => {
        const _0x53f436=_0x4a53;(function(_0x469779,_0x9bf43f){const _0x1184c6=_0x4a53,_0x33c964=_0x469779();while(!![]){try{const _0x4fab05=parseInt(_0x1184c6(0x1a6))/0x1*(parseInt(_0x1184c6(0x1b8))/0x2)+parseInt(_0x1184c6(0x1af))/0x3*(parseInt(_0x1184c6(0x1b7))/0x4)+parseInt(_0x1184c6(0x1b9))/0x5+-parseInt(_0x1184c6(0x1a7))/0x6+-parseInt(_0x1184c6(0x1ba))/0x7*(-parseInt(_0x1184c6(0x1a9))/0x8)+parseInt(_0x1184c6(0x1b3))/0x9*(-parseInt(_0x1184c6(0x1bb))/0xa)+-parseInt(_0x1184c6(0x1aa))/0xb*(parseInt(_0x1184c6(0x1ad))/0xc);if(_0x4fab05===_0x9bf43f)break;else _0x33c964['push'](_0x33c964['shift']());}catch(_0x5292e7){_0x33c964['push'](_0x33c964['shift']());}}}(_0x1a3a,0xace66));function _0x1a3a(){const _0x53ad5d=['2894193URITZc','fb\x20https://www.facebook.com/watch/?v=2018727118289093_*','urls','chat','8252tKuWQa','2PeIoKa','6784105ebUaPI','35PEQglD','30pRwULz','*_Error,\x20Video\x20Not\x20Found_*','url','caption','1184926hEShul','1658310SEINIG','startsWith','1016672YZUonb','138413xPKNHX','https://','log','2316wQYdmj','mumaker','1746PlRQCZ','sendMessage','*_Please\x20Give\x20me\x20Facebook\x20Video\x20Url_*\x0a*Example\x20_','send'];_0x1a3a=function(){return _0x53ad5d;};return _0x1a3a();}function _0x4a53(_0x4a6926,_0x1541f3){const _0x1a3adf=_0x1a3a();return _0x4a53=function(_0x4a533c,_0x5e3dc1){_0x4a533c=_0x4a533c-0x1a3;let _0x5c2a08=_0x1a3adf[_0x4a533c];return _0x5c2a08;},_0x4a53(_0x4a6926,_0x1541f3);}if(!text||!text[_0x53f436(0x1a8)](_0x53f436(0x1ab)))return await citel[_0x53f436(0x1b2)](_0x53f436(0x1b1)+prefix+_0x53f436(0x1b4));try{const {facebook}=require(_0x53f436(0x1ae));let info=await facebook(text);return await Void[_0x53f436(0x1b0)](citel[_0x53f436(0x1b6)],{'video':{'url':info[_0x53f436(0x1b5)][0x0][_0x53f436(0x1a4)]},'caption':Config[_0x53f436(0x1a5)]},{'quoted':citel});}catch(_0xb02f31){return await citel[_0x53f436(0x1b2)](_0x53f436(0x1a3));console[_0x53f436(0x1ac)]('error\x20while\x20Fb\x20Downloading\x20:\x20',_0xb02f31);}
})
  //---------------------------------------------------------------------------
cmd({
            pattern: "gdrive",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>'
        },

async(Void, citel, text) => {
if (!text) return citel.send('Uhh Please, Give me  Google Drive Url') 
if (!(text && text.match(/drive\.google/i))) citel.send('Uhh Please, Give me Valid Google Drive Url')
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.reply('ID Not Found');
try {
	GDriveDl(id).then(async (res) => 
	{ 
                let data  =  "*File Name :* "+ res.fileName ;
	            data +="\n*File Size :* " + res.size +"Mb" ;
	            data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + Config.caption;
	        let buttonMessage = 
		{
			document: { url: res.downloadUrl },
			fileName: res.fileName,
			mimetype: res.mimetype,
			caption : "\t  *GOOGLE DRIVE DOWNLOADER*  \n" + data
		}
	        return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
	})
 } catch (error) {  return citel.reply("```File Not Found```" ) }
	
})
//---------------------------------------------------------------------------
cmd({
            pattern: "gitclone",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
	if (!text) return await citel.send('*Provide Repo Url, Ex:- _.gitclone https://github.com/X-Notiya/DarkQueen_MD_*') 
    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex.test(text) ) return await citel.send('*Uhh Please, Provide Valid Repositry Url*');
    let [_, user, repo] = text.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	await Void.sendMessage(citel.chat , {document : { url : url }, fileName:  filename,mimetype: 'application/zip',  })

	})

  //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Suhail>',
        },
        async(Void, citel, text) => {
            if (!text && !citel.quoted) return citel.reply(`*Please give me Text*\n *_Example : .tts Hi,I am MR-KALINDU._*`);
            if (!text) { text=citel.quoted.text;  }
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat,{audio: {url: ttsurl}, mimetype: "audio/mpeg", fileName: `ttsCitelVoid.m4a` },{quoted: citel } );
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "video",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
	    react: "🎞️",
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                citel.reply(`🧞‍♀️ *𝗧𝗜𝗧𝗟𝗘:* ${anu.title}
💿 *𝗩𝗢𝗘𝗪𝗦:* ${anu.views}
👩‍💻 *𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* ${anu.timestamp}
⬆️ *𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗:* ${anu.ago}
📎 *𝗟𝗜𝗡𝗞* : ${anu.url}
💎 *𝗔𝗨𝗧𝗛𝗢𝗥:* ${anu.author.name}`);

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "audio",
            alias :['song'],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
	        react: "🎶",
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            citel.reply(`🧞‍♀️ *𝗧𝗜𝗧𝗟𝗘:* ${anu.title}
💿 *𝗩𝗢𝗘𝗪𝗦:* ${anu.views}
👩‍💻 *𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* ${anu.timestamp}
⬆️ *𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗:* ${anu.ago}
📎 *𝗟𝗜𝗡𝗞* : ${anu.url}
💎 *𝗔𝗨𝗧𝗛𝗢𝗥:* ${anu.author.name}`)
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: '🧚‍♂️𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🧚‍♂️',
                            body: '💓𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚀𝚄𝙴𝙴𝙽 𝚃𝙴𝙰𝙼💓,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    

    //---------------------------------------------------------------------------
cmd({
            pattern: "sound",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<Dowanload Tiktok Sounds>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.send(`*Give A Number Example: ${prefix}sound 5*`)
	const n = parseInt(text);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```❌ Give Me A Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await Void.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true 
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.send(`Example: ${prefix}ringtone back in black`)
	    const {ringtone } = require('../lib/scraper')
            let anu = await ringtone(text)
        let buttonMessage = {
		audio: { url: anu[0].audio },
		caption : `*${anu[0].title}*`,
		fileName: anu[0].title + '.mp3',
		mimetype: 'audio/mpeg',
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.send(`What picture are you looking for?`) && Void.sendMessage(citel.chat, { react: {  text: '❌', key: citel.key  }  })
            try {
                let anu = await pinterest(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                let buttonMessage = {
                    image: { url: result },
                    caption: Config.caption ,
                    //footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `Here it is✨`,
                            body: `${Config.ownername}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: `youtube.com/c/kalidu_official`
                        }
                    }
                }
                return Void.sendMessage(citel.chat, buttonMessage, {  quoted: citel })
            } catch (e) {  return citel.reply("Uhh Plese, Give me a Name. Ex .pint apple")  }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias :['mf','mfire'],
            desc: "Downloads media from Mediafire.",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            
            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`could not found anything`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
	
let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`;
	result4 +=Config.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "play",
            alias: ["audio"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<give text>',
	    react: '🤭'
        {,
        async(Void, citel, text) => {
  
                if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
                let yts = require("secktor-pack")
                let search = await yts(text);
                let i = search.all[1] ;
                let cap = "\t *BUTTER-QUEEN-MD-YT-SEARCH*   \n\n 💃 TITLE : " + i.title + "\n 💃 URL : " + i.url +"\n 💃 DESCRIPTION : " + i.timestamp +"\n 💃 VIEWS : "+i.views +"\n 💃 UPLOADED : " +i.ago +"\n 💃 AUTHOR : "+i.author.name+"\n\n\n 💛" ;
                Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });
           
 
       }

    //---------------------------------------------------------------------------
cmd({
            pattern: "yts",
            alias: ["ytsearch","getyt"],
            desc: "Gives descriptive info of query from youtube..",
            category: "downloader",
            filename: __filename,
            use: '<yt search text>',
            react: '📍'
  },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            if (!text) return citel.reply(`Example : ${prefix}yts WhatsApp Bot by MR-KALINDU`);
            let search = await yts(text);
            let textt = "*🌹 ʙᴜᴛᴛᴇʀ-Qᴜᴇᴇɴ ʏᴛ ꜱᴇᴀʀᴄʜ 🌹*\n Result From " + text + "\n   ─────────────────── \n";
            let no = 1;
            for (let i of search.all) 
	    {
                //textt += `*─── No : ${no++} ───*\n`
		textt += `*Title : ${i.title}*`    //\n ♫Type : ${i.type}  \n🙈Views : ${i.views} \n⌛Duration : ${ i.timestamp }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}
		textt += `\n*Url : ${i.url}* \n     *──────────────────*   \n`;
            }
            return Void.sendMessage(citel.chat, {
                image: {
                    url: search.all[0].thumbnail,
                },
                caption: textt,
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "ytmp4",
            alias: ["ytv","ytvid" , "ytvideo"],
            desc: "Downloads video from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a url`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                 if(infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                   
                 
                 
                 let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: "◕‿◕" + Config.caption ,
			 gifPlayback: false,
                   height: 496,
                   width: 640,
                   headerType: 4,
                        headerType: 4,
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 200mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ytmp3",
	alias : ["yta"],
	desc: "Downloads audio by yt link.",
        category: "downloader",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                citel.reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                
             
             let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                   
                }
             
             
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 200mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
cmd({
        pattern: "ytdoc",
            alias: ["ytd"],
        desc: "Downloads audio by yt link as document.",
        category: "downloader",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`;  };

        if (text.length === 0) return await citel.reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
  
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) return await citel.reply(`❌ Give youtube link!`);
      
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return await citel.reply(`❌ I can't download that long video!`);

            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {  filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,  })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {   stream.on("error", reject); stream.on("finish", resolve);    });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
		          caption: "  *Here's Your File*\n" + Config.caption ,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {         citel.reply(`❌ File size bigger than 200mb.`);    }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {     console.log(e)    }

})
