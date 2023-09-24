const { facebook, bot, generateList, isUrl } = require('../lib/')

bot(
	{
		pattern: 'fbplay',
		fromMe: true,
		desc: 'Download facebook video',
		category: 'facebook',
	},
	async (message, match) => {
		match = isUrl(match || message.reply_message.text)
		if (!match) return await message.send('_Example : fb url_')
		const result = await facebook(match)
		if (!result.length)
			return await message.send('*Not found*', {
				quoted: message.quoted,
			})
		if (result.length == 1) return await message.sendFromUrl(result[0].url)
		return await message.send(
			generateList(
				result.map((e) => ({
					id: `upload ${e.url}`,
					text: e.quality,
				})),
				`*Choose Video Quality*`,
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
