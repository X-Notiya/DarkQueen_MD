const { tlang,cmd,fethJson,getBuffer,prefix,Config } = require('../lib')
const { fb1,fb2} = require('darkqueen-fbdl')
//---------------------------------------------------------------------------
cmd({
          pattern: 'fb',
          desc: 'Fb down',
          category: 'downloder',
          filename: _filename,
          use: '<ad fb url.>'
     },

    async(Void, citel, text) => {
if(!text) return citle.reply(`*Give me fb url*`);
fbInfoVideo.getInfo(text)
  then(info =>{
let vurl=info.video.url_video;
  
      let data  ="*Video Name:* "+  info.video.title;
          data +="\n*Video Views:* "+  info.video.view;
          data +="\n*Video Commen:* "+  info.video.comment;
          data +="\n*Video Likes    :* "+info.video.reaction.Like ;
  
                        let buttonMessage = {
                        video: {url:vurl},
                        mimetype: 'video/mp4',
                        fileName: info.video.title+`.mp4`,
                        caption :"     *FACEBOOK DOWNLOADER*  \n"+data
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });



})
  .catch(err =>{
            citel.reply("Error, Video Not Found\n *Please Give Me A Valid Url*");
            console.error(err);
          })
 })
