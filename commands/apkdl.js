/**🎭𝑫𝑨𝑹𝑲 𝑸𝑼𝑬𝑬𝑵 𝑴𝑫🎭
🎩𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑯𝑨𝑴𝑶𝑫𝑯🎩
* @version 0.0.1
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

cmd({ category: "fmmods", desc: "Fouad-whatsapp mods downloader", category: "download", react: "🧚‍♂️" }, (async (amdiWA) => {
    let { footerTXT, input, prefix, react, reply, sendDocument, sendListMsg } = amdiWA.msgLayout;

    const fmmods = await fmmod_com();
    var listInfo = {}
    listInfo.title = '❍══❲Fouad-whatsapp mods downloadeʀ❳══❍'
    listInfo.text = `
        Download FMWA latest version apk from here.

        By original FM Mods site:
        https://fmmods.com/fouad-whatsapp/
    `
    listInfo.buttonTXT = 'Choose a package'

    if (!input) {
        return await sendListMsg(listInfo, fmmods_packages(prefix));
    }

    await react("⬇️");
    try {
        switch (input) {
            case '1':
                await react("⬆️");
                await sendDocument({ url: fmmods['com.whatsapp'].link }, { mimetype: 'application/vnd.android.package-archive', fileName: fmmods['com.whatsapp'].name, caption: footerTXT, quoted: true });
                await react("✔️");
                break;

            case '2':
                await react("⬆️");
                await sendDocument({ url: fmmods['com.fmwhatsapp'].link }, { mimetype: 'application/vnd.android.package-archive', fileName: fmmods['com.fmwhatsapp'].name, caption: footerTXT, quoted: true });
                await react("✔️");
                break;

            case '3':
                await react("⬆️");
                await sendDocument({ url: fmmods['com.gbwhatsapp'].link }, { mimetype: 'application/vnd.android.package-archive', fileName: fmmods['com.gbwhatsapp'].name, caption: footerTXT, quoted: true });
                await react("✔️");
                break;

            case '4':
                await react("⬆️");
                await sendDocument({ url: fmmods['com.yowhatsapp'].link }, { mimetype: 'application/vnd.android.package-archive', fileName: fmmods['com.yowhatsapp'].name, caption: footerTXT, quoted: true });
                await react("✔️");
                break;
        }
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    });
