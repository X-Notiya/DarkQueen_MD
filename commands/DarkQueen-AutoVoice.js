const { tlang,cmd } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.githubusercontent.com/X-Notiya/cb99be100d09b54679b715d1763c6364/raw/80b194e649a91ced626964007af4003317567d96/gistfile1.txt'

/**

 cmd({

            pattern: "bgmnsew",

            category: "owner",

            use: '',

        },

**/ 

cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
