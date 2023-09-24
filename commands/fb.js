const { facebook, cmd, generateList, isUrl } = require('../lib')
    cmd({
                  pattern: "fbplay",
                  desc: "Fb down",
                  category: "facebook",
                  filename:  _filename
             },

             async (message, math) => {
                   match = isUrl ||
      message.reply_message.text)
                   if (!match) return await
      message.send('මට facebook link එකක් දෙන්න...💭')
                  const result = await facebook(match)
                   if (!result.length)
                        return await message.send('මට සොයාගත නොහැහ💭', {
                              quoted: message.quoted,
                        })
                   if (result.length == 1) return await
message.sendFromUrl(result[0].url)
                   return await message.send(
                         generateList(
                               result.map((e) => ({
                                      id: ` upload $(e.url}`,
                                      text: e.quality,
                               })),
                               `Choose Video Quality`,
                               message.jid
                         )
                   )
                   // return await message.send(
		           // 	await genButtonMessage(
		           // 		result.map((e) => ({
		           // 			id: `upload ${e.url}`,
		           // 			text: e.quality,
		           // 		})),
		           // 		'Choose Video Quality'
	         	   // 	),
		           // 	{},
		           // 	'button'
		           // )
	          }
          
         )
