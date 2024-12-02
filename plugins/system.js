const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
───────────────────
_*⚙️ 𝙼𝙰𝙻𝙰𝙺𝙰 𝙱𝚈 𝙳𝙰𝚁𝙺-𝙰𝙻𝙵𝙷𝙰-𝙱𝙾𝚃 ⚙️*_
───────────────────

┌────────────────
│❖ *Uptime:*  ${runtime(process.uptime())}
│❖ *Ram usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│❖ *HostName:* ${os.hostname()}
│❖ *Owner:* 𝘔𝘢𝘭𝘢𝘬𝘢 & 𝘋𝘈𝘙𝘒-𝘈𝘓𝘍𝘏𝘈-𝘔𝘋
└────────────────

> 𝘔𝘢𝘭𝘢𝘬𝘢 ʙʏ 𝘋𝘈𝘙𝘒-𝘈𝘓𝘍𝘏𝘈-𝘔𝘋  
`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
