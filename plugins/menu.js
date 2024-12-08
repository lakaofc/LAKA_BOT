const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  pattern: "menu",
  desc: "Commands panel",
  react: '📃',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, body, reply } = options;

  try {
    // Menu Text
    const menuText = `╭═════════════════○
│ *Creator* : Lasmitha Praveeith
│ *Version* : v0.1
│ *Uptime*  : ${runtime(process.uptime())}
│ *RAM Usage* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
│ *Host Name* : ${require('os').hostname()}
╰═════════════════○
╭═════════════════○
│📃 *LIST MENU*
│   ───────
│ _1_ *❂ᴅᴏᴡɴʟᴏᴀᴅ menu❂*
│ _2_ *❂ᴏᴡɴᴇʀ menu❂*
│ _3_ *❂ɢʀᴏᴜᴘ ᴍᴇɴᴜ❂*
│ _4_ *❂ᴄᴏɴᴠᴇʀᴛ menu❂*
│ _5_ *❂ᴀɪ ᴍᴇɴᴜ❂*
│ _6_ *❂ꜱᴇᴀʀᴄʜ menu❂*
│ _7_ *❂ꜰᴜɴ menu❂*
│ _8_ *❂ʙᴜɢ menu❂*
╰═════════════════○

*🌟 Reply the Number you want to select*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭`;

    // Send Menu Message
    const sentMenuMessage = await bot.sendMessage(from, {
      image: { url: "https://i.ibb.co/N21xLgs/20241205-223523.jpg" },
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
        switch (userReply) {
          case '1':
            responseText = `╭═════════════════○
> ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 💐
╰═════════════════○
╭═════════════════○
*🎶 .ꜱᴏɴɢ*
> (ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ)

*❷ .ꜱᴏɴɢ2*
> (ʏᴏᴜᴛᴜʙᴇ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ)

*📽️ .ᴠɪᴅᴇᴏ*
> ( ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*❷ .ᴠɪᴅᴇᴏ2*
> ( ʏᴏᴜᴛᴜʙᴇ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*💸 .ꜰʙ*
> (ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*❷ .ꜰʙ2*
> (ꜰʙ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*💳 .ᴛɪᴋᴛᴏᴋ*
> (ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*❷ .ᴛɪᴋᴛᴏᴋ2*
> (ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*🕯️ .ɪɢ*
> (ɪɴᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*📚 .ɢᴅʀɪᴠᴇ*
> (ɢᴏᴏɢᴇʟ ꜰɪʟᴇ ᴅᴏᴡʟᴏᴀᴅ)

*👾 .ᴀᴘᴋ*
> (ᴀᴘᴘ ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅ)

*🏷️ .ᴍꜰɪʀᴇ*
> (ᴍɪᴅɪᴀꜰɪʟᴇ ꜰɪʟᴇ ᴅᴏᴡɴʟᴏᴀᴅ)

*🔞 .xᴠɪᴅᴇᴏ*
> (ꜱᴇx ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)

*🔞 .ᴘɪꜱꜱʏʙᴅʟ*
> (ꜱᴇx ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ)
╰═════════════════○

> > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭`;
            break;
          case '2':
            responseText = `╭═════════════════○
> ᴏᴡɴᴇʀ ᴍᴇɴᴜ 👨‍💻
╰═════════════════○
╭═════════════════○
*⚙️ .ꜱᴇᴛᴛɪɴɢꜱ*
> (ʙᴏᴛ ꜱᴇᴛᴛɪɴɢꜱ ᴄʜᴀɴɢʀ)

*🧬 .ʀᴇꜱᴛᴀʀᴛᴇ*
> (ʙᴏᴛ ʀᴇꜱᴛᴀʀᴛᴇ)

*🔒 .ʙʟᴏᴄʟ*
> (ʙʟᴏᴄᴋ ᴄʜᴀᴛ)

*🔓 .ᴜɴʙʟᴏᴄᴋ*
> (ᴜɴʙʟᴏᴄᴋ ᴄʜᴀᴛ)

*🪠 .ᴄʟᴇᴀʀᴄʜᴀᴛꜱ*
> (ᴄʜᴀᴛ ᴄʟᴇᴀʀ)

*🫧 .ᴊɪᴅ*
> (ᴄʜᴀᴛ ᴊɪᴅ)

*🪬 .ɢᴊɪᴅ*
> (ɢʀᴏᴜᴘ ᴊɪᴅꜱ)

*🪪 .ꜰᴜʟᴘᴘ*
> (ꜱᴇᴛ ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ)

*🕯️ .ʟᴇᴀᴠᴇ*
> (ɢʀᴏᴜᴘ ʟᴇᴀᴠᴇ)

╰═════════════════○

> > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭`;
            break;
          case '3':
            responseText = `╭═════════════════○
> ɢʀᴏᴜᴘ ᴍᴇɴᴜ 👥
╰═════════════════○
╭═════════════════○
*👤 .ᴀᴅᴅ*
> (ɢʀᴏᴜᴘ ᴍᴀᴍᴍʙᴜꜱ ᴀᴅᴅ)

*🚪 .ɪɴᴠɪᴛᴇ*
> (ɪɴᴠɪᴛᴇ ᴛᴏ ɢʀᴏᴜᴘ)

*🔫 .ᴋɪᴄᴋ*
> (ɢʀᴏᴜᴘ ᴍᴀᴍʙᴜꜱᴇ ᴋɪᴄᴋ)

*🎲 .ᴀᴘᴘʀᴏᴠᴇ*
> (ɢʀᴏᴜᴘ ᴍᴀᴍʙᴜꜱᴇ ᴀᴘᴘʀᴏᴠᴇ)

*❌ .ʀᴇᴊᴇᴄᴛ*
> (ɢʀᴏᴜᴘ ᴀᴘᴘʀᴏᴠᴇ ʀᴇᴊᴇᴄᴛ)

*🏆 .ᴘʀᴏᴍᴏᴛᴇ*
> (ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ꜱᴇᴛ)

*🎭 .ᴅᴇᴍᴏᴛᴇ*
> (ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ʀᴇᴍᴏᴠᴇ)

*🔕 .ᴍᴜᴛᴇ*
> (ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟɪ ꜱᴇᴛ)

*🔊 .ᴅᴇʟ*
> (ɢʀᴏᴜᴘ ᴍꜱɢ ᴅᴇʟ)

*🔊 .ᴜɴᴍᴜᴛᴇ*
> (ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴏᴘᴇɴ)

*👑 .ᴛᴀɢᴀᴅᴍɪɴ*
> (ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴛᴀɢ.)

*👁️ .ʀᴇQᴜᴇꜱᴛꜱ*
> (ɢʀᴏᴜᴘ ʀᴇQᴜᴇꜱᴛꜱ.)

*⚰️ .ᴇɴᴅ*
> (ɢʀᴏᴜᴘ ᴇɴᴅ.)

╰═════════════════○

> > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭`;
            break;
          case '4':
            responseText = `╭═════════════════○
> ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 🌀
╰═════════════════○
╭═════════════════○
*🚀 .ꜱᴛɪᴄᴋᴇʀ*
> (ɪᴍɢ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ꜱᴛɪᴄᴋᴇʀ)
╰═════════════════○

> > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋᴀ-ᴍᴅ 💭`;
            break;
          case '5':
            responseText = `kk`;
            break;
          case '6':
            responseText = `kk`;
            break;
          case '7':
            responseText = `kk`;
            break;
          case '8':
            responseText = `kk`;
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
