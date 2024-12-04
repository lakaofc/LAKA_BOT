const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  pattern: "menu",
  desc: "Commands panel",
  react: '📜',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, body, reply } = options;

  try {
    // Menu Text
    const menuText = `
╒✦•··············•••••••••··············•✦
│ *Creator* : Lasmitha Praveeth
│ *Version* : v0.1
│ *Uptime*  : ${runtime(process.uptime())}
│ *RAM Usage* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
│ *Host Name* : ${require('os').hostname()}
╘✦•··············•••••••••··············•✦
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
╭────────────●●►
│📃 *LIST MENU*
│   ───────
│ _1_ *❂ᴅᴏᴡɴʟᴏᴀᴅ menu❂*
│ _2_ *❂ᴏᴡɴᴇʀ menu❂*
│ _3_ *❂ɢʀᴏᴜᴘ ᴍᴇɴᴜ❂*
│ _4_ *❂ᴄᴏɴᴠᴇʀᴛ menu❂*
│ _5_ *❂ᴀɪ ᴍᴇɴᴜ❂*
│ _6_ *❂ꜱᴇᴀʀᴄʜ menu❂*
│ _7_ *❂ꜱᴛɪᴄᴋʀᴛ menu❂*
│ _8_ *❂ꜰᴜɴ menu❂*
│ _9_ *❂ʙᴜɢ menu❂*
╰─────────────●●►
*🌟 Reply the Number you want to select*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭
`;

    // Send Menu Message
    const sentMenuMessage = await bot.sendMessage(from, {
      image: { url: "https://i.ibb.co/8DKVHKN/989f5b3ba02c6ae4a494537c8dad9cdb.jpg" },
      caption: menuText
    }, { quoted: message });

    const menuMessageId = sentMenuMessage.key.id;

    // Listen for replies to the menu message
    bot.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === menuMessageId;

            if (isReplyToMenu) {
        let responseText = '';
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/8DKVHKN/989f5b3ba02c6ae4a494537c8dad9cdb.jpg" },
        switch (userReply) {
          case '1':
            responseText = `kk`;
            break;
          case '2':
            responseText = `kkk`;
            break;
          case '3':
            responseText = `kkkkk`;
            break;
          case '4':
            responseText = `kkk`;
            break;
          case '5':
            responseText = `kkk`;
            break;
          case '6':
            responseText = `kkk`;
            break;
          case '7':
            responseText = `kkkkk`;
            break;
          case '8':
            responseText = `kkkk`;
            break;
          case '9':
            responseText = `kkkk`;
            break;
          default:
            responseText = "Invalid option! Please reply with a number from 1 to 9.";
        }

        // Send the appropriate response
        await bot.sendMessage(from, { text: responseText }, { quoted: newMessage });
      }
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
