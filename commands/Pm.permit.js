const { sck1,cmd, tlang, prefix,botpic,Config,sleep } = require('../lib')
const util = require("util");
  cmd({
              pattern: "approve",
              alias: ['a'],
              desc: "Approves that person for pm",
              fromMe: true,
              category: "user",
              filename: __filename,
          },
          async(Void, citel, text,{isCreator}) => {
          if(!isCreator) return citel.reply('This command is only for my owner.');
          if(!citel.quoted) return citel.reply('Please quote a user for action.')
          let user = await sck1.findOne({id:citel.quoted.sender});
          if(user.permit==='true') return citel.reply(`_${user.name} has permission for pm alredy._`)
          await sck1.updateOne({ id: citel.quoted.sender }, { permit: "true",times: '0' })
          return citel.reply(`_Permitted ${user.name} for pm._`);
  
          }
      )
      //---------------------------------------------------------------------------
  cmd({
              pattern: "disapprove",
              alias: ['da'],
              desc: "Disapproves user for pm.",
              category: "user",
              filename: __filename,
          },
          async(Void, citel, text,{ isCreator }) => {
          if(!isCreator) return citel.reply('This command is only for my owner.');
          if(!citel.quoted) return citel.reply('Please quote a user for action.')
          let user = await sck1.findOne({id:citel.quoted.sender});
          if(user.permit==='false') return citel.reply(`_${user.name}\'s permission has been revoked for pm._`)
          await sck1.updateOne({ id: citel.quoted.sender }, { permit: "false" })
          return citel.reply(`_Revoked permission of ${user.name} for pm._`);
  
  
              })
  //---------------------------------------------------------------------------
  cmd({ on: "text" }, async(Void, citel,text,{isCreator}) => {
  if(isCreator) return
  let user = await sck1.findOne({id:citel.sender});
  if(!citel.isGroup && user.permit==='false' && !citel.key.fromMe){
  var text;
  if(user.times==='0') text = `*Hii this is ${tlang().title} a Personal Assistant of ${Config.ownername}.*\n*Please do not send message in pm else you will be blocked automatically.*\n_Please wait until my owner responds to you._`
  if (user.times>0 && user.times<=3 ) text = `*Please do not Spam,You have ${user.times} warning(s).*`
  if(user.times>3) text = `Hey ${citel.pushName}, blocking you for spamming in pm.`
          let ter = `🔰 *${tlang().title}* 🔰\n*Pm-Permit action of ${Config.ownername}*\n\n${text}\n\n*Powered by ${tlang().title}*`;
          let buttonMessaged = {
              image: {
                  url: await botpic(),
              },
              caption: ter,
              footer: tlang().footer,
              headerType: 4,
              contextInfo: {
                  externalAdReply: {
                      title: tlang().title,
                      body: `PM-PERMIT`,
                      thumbnail: log0,
                      mediaType: 2,
                      mediaUrl: '',
                      sourceUrl: 'https://secktorbot.me',
                  },
              },
          };
          let timess = parseInt(user.times)+1
            await sck1.updateOne({ id: citel.sender }, { times: util.format(timess) })
            if(user.times>3){
              await Void.sendMessage(citel.chat, buttonMessaged, {quoted: citel}) 
              await sleep(3000)
              return await Void.updateBlockStatus(citel.sender, "block")
  }
            return await Void.sendMessage(citel.chat, buttonMessaged, {quoted: citel}) 
  }
  })
  
