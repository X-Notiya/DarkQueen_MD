const { tlnag,cmd,getBuffer,prefix,Config} = require('../lib')
/**
================================================
*@text: Send text
===============================================
*//
cmd({
  pattern: 'text',
  desc: 'Sends text',
  category: 'gen',
  use: '<does this>',
}, async (Void,citel,text) => {
await citel.reply("*TEXT HERE*") 
});
/**
================================================
*@image: Send Image
===============================================
*//
cmd({
  pattern: 'image',
  desc: 'Sends image',
  category: 'gen',
  use:'<does this>',
}, async(Void,citel,text) => {
await Void.sendMessage(citel.chat,{image:{url: 'url here'}, caption: "YOUR CAPTION HERE"}) 
});
/**
================================================
*@video: Send Video
===============================================
*//
cmd({
  pattern: 'video',
  desc: 'Sends video',
  category: 'gen',
  use: '<option>',
}, async(Void,citel,text) => {
await Void.sendMessage(citel.chat,{image:{url: 'url here.'}, caption: "YOUR CAPTION HERE" }) 
});