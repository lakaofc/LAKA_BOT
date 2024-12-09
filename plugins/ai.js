const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
  pattern: 'readmore',
  desc: 'Send a Readmore message',
  category: 'convert',
  react: '📝',
  filename: __filename
}, async (message, from, quoted, body, isCmd, command, args, q, isGroup, sender) => {
  try {
    let messageText = q ? q : 'No text provided';
    let separator = '​';  // Invisible character
    let readmoreMessage = 'Readmore' + separator + messageText;

    // Send the readmore message
    await message.sendMessage(from, { text: readmoreMessage }, { quoted });
    await message.sendMessage(from, { react: { text: '', key: quoted.key } });
  } catch (error) {
    console.log(error);
    message.reply('Error: ' + error.message);
  }
});

cmd({
    pattern: "ai",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://www.dark-yasiya-api.site/ai/gemini?q={q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
