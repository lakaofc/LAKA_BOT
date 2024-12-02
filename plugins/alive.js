const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname} I'm alive now*
*😉🇱🇰 I'm 𝗜 𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝗠𝗗 Whatsapp Bot* ✓

> *Version:* 8.0.0
> *Ram usage:* 43.46MB / 15981MB
> *Runtime:* 3 hours, 7 minutes, 35 seconds
> *HostName:* fv-az984-882

*🪀 𝙈𝘼𝙇𝘼𝙆𝘼 𝘽𝙔 𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿

`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



