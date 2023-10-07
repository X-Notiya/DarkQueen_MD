const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')

//---------------------------------------------------------------------------

cmd({

            pattern: "gbwhatsapp",

            desc: "(menu cmdlist).",

            category: "list",

            react: "✅",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    document: '"Redirect page" https://tr-bouncer.com/r?zid=4733&uid=178&c_from=https://gbapps.net&pubid=976022&psubid=7867811769568195028&s1=&s2=&s3=&s4=&s5=&c_inif=n&c_key=4%7C1%7C24%7C24%7C1.2%7C5%7C413%7C826%7C18%7C39%7C5.5%7C5.5%7CAsia%2FColombo%7Cen-IN%7CLinux%20armv7l%7CImagination%20Technologies%7CPowerVR%20SGX%20Auckland%7C-1%7C16%7C1024%7C16%7C15%7C1%7C16%7C1%7C511%7C1024%7C16%7C8192%7C4096%7C4096%7C96%7C1%7C0%7C4096%7C64%7C60%7C4096%7C12%7C60%7C7%7C8%7C8%7C4%7C2048%7C2048%7C15%7C72%7C134217728%7C72%7C402657280%7C402657280%7C128%7C4%7C4&c_r=bb&c_round=1',

                },

                caption: `
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------

///////////--------------------------------------------------\\\\\\\\\\\\\\\\/\/
