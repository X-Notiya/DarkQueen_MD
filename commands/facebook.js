const { AMDI, blackamda_API, _default, igDownloader, Language, tiktok, web_scrapers } = require('cheerio')
const { fblogo } = _default
const { fbDownloader } = web_scrapers
const axios = require("axios")
const Lang = Language.getString('downloadSocialMedia');

cmd({ 
    pattern: ["fb", "facebook"],          
    desc: Lang.fbDesc, example: Lang.fbEXA, 
    category: "download", 
    react: "🎥" }, (async (amdiWA) => {
    let { input, isFBurl, reply, sendButtonsMsg } = amdiWA.msgLayout;

    if (!isFBurl(input)) return reply(Lang.needlink, '❓');

    const fbdl_data = await fbDownloader(amdiWA);

    if (!fbdl_data.hd && !fbdl_data.sd) return await reply(Lang.notfound, "❌");
    const thumb = fbdl_data.thumbnail ? fbdl_data.thumbnail : fblogo
    return await sendButtonsMsg([fbdl_data.hd, fbdl_data.sd], { text: `🎥 *Facebook video downloader*\n\n\`\`\`${fbdl_data.title}\`\`\``, image: { url: thumb }, tagMsg: true, noTemplate: 1 });
}));
