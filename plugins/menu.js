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
│ *Creator* : Sadeesha Tharumin
│ *Version* : v2.0.0
│ *Uptime*  : ${runtime(process.uptime())}
│ *RAM Usage* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
│ *Host Name* : ${require('os').hostname()}
╘✦•··············•••••••••··············•✦
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
╭────────────●●►
│⛵ *LIST MENU*
│   ───────
│ _1_ *❂ᴅᴏᴡɴʟᴏᴀᴅ menu❂*
│ _2_ *❂ᴍᴀɪɴ menu❂*
│ _3_ *AI menu*
│ _4_ *❂ᴍᴀɪɴ menu❂*
│ _5_ *❂ᴏᴡɴᴇʀ menu❂*
│ _6_ *❂ᴄᴏɴᴠᴇʀᴛ menu❂*
│ _7_ *❂sᴇᴀʀᴄʜ menu❂*
╰─────────────●●►
*🌟 Reply the Number you want to select*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ 👧🏻
`;

    // Send Menu Message
    const sentMenuMessage = await bot.sendMessage(from, {
      image: { url: "https://i.ibb.co/QNwLWTN/20241201-230018.jpg" },
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
            image: { url: "https://i.ibb.co/QNwLWTN/20241201-230018.jpg" },
        switch (userReply) {
          case '1':
            responseText = `
 ♡︎*❂ ᴅᴏᴡɴʟᴏᴀᴅ menu ❂ 📥*♡︎

╭┈───────────────•
│  ✑ *.song*
│  
│ ♡︎_Download YouTube song_♡︎
╰┈───────────────●●►

╭┈───────────────•
│  ✑ *.video*
│       
│ ♡︎_Download YouTube video_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.fb*
│  
│ ♡︎_Download Facebook video_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.tiktok*
│  
│ ♡︎_Download TikTok video without watermark and audio_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.apk*
│  
│ ♡︎_Download APK_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.mfire*
│  
│ ♡︎_Download Mediafire link_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.gdrive*
│
│ ♡︎_Downloading google drive file_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.tg*    
│       
│ ♡︎_Downloading instagrm_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.movie*
│   
│ ♡︎_Downloading sinhala sub movie_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.xvdl*    
│       
│ ♡︎_Downloading xvideos videos_♡︎
╰┈───────────────•
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ 👧🏻
`;
            break;
          case '2':
            responseText = `
【 *🔎 ALEXA SEARCH COMMANDS 🔎* 】
- .img <query> : Search Google Images
- .githubstalk <username> : Search GitHub profile
- .movie <title> : Search movie details
- .yts <query> : Search YouTube links
`;
            break;
          case '3':
            responseText = `
【 *👯🏻 ALEXA ANIME COMMANDS 👯🏻* 】
- .loli : Random loli image
- .waifu : Random waifu image
- .neko : Random neko image
- .megumin : Random megumin image
- .maid : Random maid image
- .awoo : Random awoo image
`;
            break;
          case '4':
            responseText = `
【 *🧙🏻 ALEXA FUN COMMANDS 🧙🏻* 】
- .hack : Simulate a fun hacking animation
`;
            break;
          case '5':
            responseText = `
【 *🪄 ALEXA CONVERT COMMANDS 🪄* 】
- .sticker / .s : Convert photo to sticker
- .tts <text> : Text-to-speech conversion
`;
            break;
          case '6':
            responseText = `
【 *👾 ALEXA AI COMMANDS 👾* 】
- .ai <query> : Chat with AI
- .gpt <query> : ChatGPT-powered responses
`;
            break;
          case '7':
            responseText = `
【 *🧣 ALEXA GROUP COMMANDS 🧣* 】
- .mute : Close the group
- .unmute : Open the group
- .tagall <text> : Tag all group members
`;
            break;
          case '8':
            responseText = `
【 *🧑🏻‍💻 ALEXA OWNER COMMANDS 🧑🏻‍💻* 】
- .block : Block a user
- .unblock : Unblock a user
- .jid : Get chat JID
- .gjid : Get group JID
- .restart : Restart the bot
`;
            break;
          case '9':
            responseText = `
【 *⚙️ ALEXA SYSTEM COMMANDS ⚙️* 】
- .ping : Test bot speed
- .system : Check bot status
- .owner : Contact bot developer
- .repo : Bot GitHub repository
`;
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
