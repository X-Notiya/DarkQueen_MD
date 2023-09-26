const { tlang, cmd, fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
//=============================
cmd({
            pattern: "apk",
            desc: "Downloads apks.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },

        async(Void, citel, text) => {
        if(!text )return citel.reply("*_Give me App Name_*");

	const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
	let randomName = getRandom(".apk");
	const filePath = `./temp/${randomName}`;     // fs.createWriteStream(`./${randomName}`)
    const {  search , download } = require('aptoide-scraper')
	let searc = await search(text);          //console.log(searc);
	let data={};
	if(searc.length){ data = await download(searc[0].id); }
	else return citel.send("*_APP not Found, Try Other Name_*");
	
	
	const apkSize = parseInt(data.size);
	if(apkSize > 100) return citel.send(`*ඇප් ගොනුව ඉතා විශාල නිසා මට බාගත කිරීමට නොහැක🧜‍♂️*`);
    const url = data.dllink;
	 let  inf  ="*App Name :* " +data.name;
         inf +="\n*App id        :* " +data.package;
         inf +="\n*Last Up       :* " +data.lastup;
         inf +="\n*App Size     :* " +data.size;
        // inf +="\n*App Link     :* " +data.dllink;
	 inf +="\n\n "+ Config.caption
         

axios.get(url, { responseType: 'stream' })
  .then(response => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {writer.on('finish', resolve);writer.on('error', reject);});
  }).then(() => {	
	let buttonMessage = {document: fs.readFileSync(filePath),mimetype: 'application/vnd.android.package-archive',fileName: data.name+`.apk`,caption : inf}
    Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
    console.log(`🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ɴᴏᴛɪʏᴀ_*🎭`);  
    try{ fs.unlink(filePath); }catch{}
  }) .catch(error => {
	try{ fs.unlink(filePath); }catch{}
    return citel.send('*_Apk not Found, Sorry_*')//:', error.message);
  });
