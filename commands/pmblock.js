const { cmd,sleep } = require('../lib')

cmd({
pattern: 'pmblocker ?(.*)', 
desc: 'pm blocker', 
caregory: 'misc'}, async (Void,citel,match) => {return});
cmd({ on: "text" }, async(Void, citel) => {
  if(citel.text && !citel.key.fromMe && !citel.isGroup) {
    citel.reply('🧜‍♀️ *Blocking you for pm.* 🧜‍♂️')
    await sleep(2000)
    return await Void.updateBlockStatus(citel.sender, "block")
  }
})