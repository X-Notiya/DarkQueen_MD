Skip to content
SuhailTechInfo/whois.js
Last active 5 months ago • Report abuse
Code
Revisions
10
whois.js

const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd , Config} = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')

    //---------------------------------------------------------------------------
cmd({
            pattern: "whois",
            desc: "Makes photo of replied sticker.",
            category: "converter",
            use: '<reply to any gif>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`Please Reply To A Person`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try 
            {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } 
            catch (e) 
            {
                pfp = 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;
            }
            
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) 
            {
                tname = username.name
            }
            else 
            {
                tname = Void.getName(citel.quoted.sender)
            }
            
           await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
╔════◇
║ *『Person's  Information』*
║ 
║ *🍫Name :* ${tname}
║ *👤Num :* ${num}
║ *🎐Bio    :*  ${bioo}
║ *🌟SetAt :* ${setAt}
║    *Keep Calm Dude🥳*    ◇
╚════════════════╝
`,
            });

        }
    )

Leave a comment
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
whois.js