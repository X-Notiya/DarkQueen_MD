const { tlang,cmd } = require('../lib')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.githubusercontent.com/X-Notiya/cb99be100d09b54679b715d1763c6364/raw'

/**

 cmd({

            pattern: "bgmnsew",

            category: "owner",

            use: '',

        },

**/ 

cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
