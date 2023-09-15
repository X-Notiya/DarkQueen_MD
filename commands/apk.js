cmd({
            pattern: "apk",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },

        async(Suhail, citel, text) => {
        if(!text )return citel.reply("*_Give me App Name_*");

	const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
	let randomName = getRandom(".apk");
	const filePath = `./${randomName}`;     // fs.createWriteStream(`./${randomName}`)
        const {  search , download } = require('aptoide-scraper')
	let searc = await search(text);          //console.log(searc);
	let data={};
	if(searc.length){ data = await download(searc[0].id); }
	else return citel.send("*_APP not Found, Try Other Name_*");
	
	
	const apkSize = parseInt(data.size);
	if(apkSize > 100) return citel.send(`❌ File size bigger than 150mb.`);
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

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }).then(() => {
	
	let buttonMessage = {
                        document: fs.readFileSync(filePath),
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        caption : inf
                        
                    }
                  Suhail.bot.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    console.log('File downloaded successfully');

  
    fs.unlink(filePath, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
  }) .catch(error => {
	fs.unlink(filePath)
    return citel.send('*_Apk not Found, Sorry_*')//:', error.message);
  });
