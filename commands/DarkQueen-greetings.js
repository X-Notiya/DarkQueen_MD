const { AMDI, amdiDB, Language } = require('queen_amdi_core/dist/scripts')
let { img2url } = require('@blackamda/telegram-image-url')
const { writeFile } = require('fs/promises');
const { setWelcome, removeWelcome, getWelcome, setBye, removeBye, getBye } = amdiDB.greetingsDB
const Lang = Language.getString('greetings');

const getFileName = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };


AMDI({ pattern: "setwelcome", desc: Lang.setwelDesc, example: Lang.setwelEx, category: "admin", react: "➕" }, (async (amdiWA) => {
    let { clearMedia, downloadMedia, isGroup, isReply, reply, reply_message, replied_text } = amdiWA.msgLayout;

    if (!isGroup) return reply(Lang.notGrp)

    if (!isReply) return reply(Lang.needReplymsg)

    if (reply_message.imageMessage) {
        if (!reply_message.imageMessage.caption) return reply(Lang.needCaption)

        const filename = await downloadMedia();
        const imgURL = await img2url(filename.file)

        var note = ''
        if (!reply_message.imageMessage.caption.includes('#')) {
            note = reply_message.imageMessage.caption
        } else if (reply_message.imageMessage.caption.includes('#')) {
            note = reply_message.imageMessage.caption.replace(/#/g, '\n')
        }
        await setWelcome(amdiWA.clientJID, note, imgURL)
        await reply(Lang.WelcomSetted, "✅");
        return clearMedia(filename.file);
    } else {
        const imgURL = 'https://telegra.ph/file/3580e4bfbc324e93918ad.jpg'
        const note = replied_text
        await setWelcome(amdiWA.clientJID, note, imgURL)
        return await reply(Lang.WelcomSetted, "✅");
    }
}));


AMDI({ pattern: "getwelcome", desc: Lang.getwelDesc, category: "admin", react: "📘" }, (async (amdiWA) => {
    let { isGroup, reply, sendImage } = amdiWA.msgLayout;

    if (!isGroup) return;
    let weldata = await getWelcome(amdiWA.clientJID)
    if (weldata == -1 || weldata.welnote == 'blank') return reply(Lang.nowelset)

    return await sendImage({ url: weldata.welpicurl }, {caption: '🔗 *Image URL :* \n' + weldata.welpicurl + '\n\n📄 *Welcome note :* \n' + weldata.welnote, quoted: true, reactEmoji: "📖"});
}));


AMDI({ pattern: "delwelcome", desc: Lang.delwelDesc, category: "admin", react: "🚮" }, (async (amdiWA) => {
    let { isGroup, reply, react } = amdiWA.msgLayout;

    if (!isGroup) return;
    let weldata = await getWelcome(amdiWA.clientJID)
    if (weldata == -1 || weldata.welnote == 'blank') return reply(Lang.nowelset)

    await removeWelcome(amdiWA.clientJID)
    return await reply(Lang.WelcomeDeleted, "✅");
}));


AMDI({ pattern: "setbye", desc: Lang.setbyeDesc, example: Lang.setbyeEx, category: "admin", react: "➕" }, (async (amdiWA) => {
    let { clearMedia, downloadMedia, isGroup, isReply, reply, reply_message, replied_text } = amdiWA.msgLayout;

    if (!isGroup) return reply(Lang.notGrp)

    if (!isReply) return reply(Lang.needReplymsg)

    if (reply_message.imageMessage) {
        if (!reply_message.imageMessage.caption) return reply(Lang.needCaption_)

        const filename = await downloadMedia();
        const imgURL = await img2url(filename.file)
        
        var note = ''
        if (!reply_message.imageMessage.caption.includes('#')) {
            note = reply_message.imageMessage.caption
        } else if (reply_message.imageMessage.caption.includes('#')) {
            note = reply_message.imageMessage.caption.replace(/#/g, '\n')
        }
        await setBye(amdiWA.clientJID, note, imgURL)
        await reply(Lang.ByeSetted, "✅");
        return clearMedia(filename.file);
    } else {
        const imgURL = 'https://telegra.ph/file/2410f13a9a02224c996af.jpg'
        const note = replied_text
        await setBye(amdiWA.clientJID, note, imgURL)
        return await reply(Lang.ByeSetted, "✅");
    }
}));


AMDI({ pattern: "getbye", desc: Lang.getbyeDesc, category: "admin", react: "📘" }, (async (amdiWA) => {
    let { isGroup, reply } = amdiWA.msgLayout;

    if (!isGroup) return
    let byedata = await getBye(amdiWA.clientJID)
    if (byedata == -1 || byedata.byenote == 'blank') return reply(Lang.nobyeset)

    return await sendImage({ url: byedata.byepicurl }, {caption: '🔗 *Image URL :* \n' + byedata.byepicurl + '\n\n📄 *Bye note :* \n' + byedata.byenote, quoted: true, reactEmoji: "📖"});
}));


AMDI({ pattern: "delbye", desc: Lang.delbyeDesc, category: "admin", react: "🚮" }, (async (amdiWA) => {
    let { isGroup, reply } = amdiWA.msgLayout;

    if (!isGroup) return
    let byedata = await getBye(amdiWA.clientJID)
    if (byedata == -1 || byedata.welnote == 'blank') return reply(Lang.nobyeset)

    await removeBye(amdiWA.clientJID)
    return await reply(Lang.ByeDeleted, "✅");
}));
