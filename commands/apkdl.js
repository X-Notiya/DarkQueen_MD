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

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

AMDI({ cmd: "fmmods", desc: "Fouad-whatsapp mods downloader", type: "download", react: "🧚‍♂️" }, (async (amdiWA) => {
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
    }
}));


AMDI({ cmd: "apk", desc: Lang.APKDL_DESC, type: "download", react: "🧚‍♂️" }, (async (amdiWA) => {
    let { input, isPlaystore, sendCustomButton, sendListMsg, prefix, react, reply } = amdiWA.msgLayout;

    if (!input) return await reply(Lang.APK_EXAMPLE, "❓");

    try {
        if (input && isPlaystore(input)) {
            const psAPI = await blackamda_API("playstore", `package=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data

            if (json.status.error) return await reply("Error".fetchError({ message: json.status.message }), "❌", 1);
            if (json.size.isLarge) return await reply(Lang.OVER_WA_FILE);

            await react("⬇️");
            const buttons = [
                { buttonId: `${prefix}ps ${input}`, buttonText: { displayText: 'ℹ️ App Info' }, type: 1 }
            ]

            const text = `${Lang.APK_TITLE}
        ╔══════❍
        ║📚 App name: ${json.app_name}
        ║🧰 Version: ${json.version}
        ╚══════❍`

            await react("⬆️");
            await sendCustomButton(buttons, text, true, "apk", json.dl_link, `${json.app_name}.apk`);
            return await react("✔️");
        } else if (input) {
            const psAPI = await blackamda_API("search", `platform=playstore&name=${input}`, amdiWA.botNumberJid);
            const response = await axios.get(psAPI);
            const json = response.data

            if (json.status.error) return await reply("Error".fetchError({ message: json.status.message }), "❌", 1);

            var listInfo = {}
            listInfo.title = Lang.APK_TITLE
            listInfo.text = Lang.APK_TXT
            listInfo.buttonTXT = 'Select app'

            const sections = apkDL_List(prefix, json.data);

            return await sendListMsg(listInfo, sections)
        }
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));