const cheerio = require('cheerio')
const fetch = require('node-fetch')

async function fb(url){
		let data = new URLSearchParams({"URLz" : url})
		
		var response = await fetch('https://fdown.net/download.php', { method: 'POST', body: data })
        var html = await response.text()
        var $ = cheerio.load(html)
        return {
        title : $('div[class="lib-row lib-header"]').text().replace(/\n/gi  , '') , 
         thumb : $('div.col-md-6 > img').attr('src') ,
		hd : $('body').find('a[id="hdlink"]').attr('href') , 
		sd  : $('body').find('a[id="sdlink"]').attr('href')}
        }