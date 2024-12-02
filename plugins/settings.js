const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")


cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃⚙ DARK_ALFHA_MD BOT SETTINGS ⚙
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┣━💼 Work Mode : 𝙿𝚄𝙱𝙻𝙸𝙲🌎/𝙿𝚁𝙸𝚅𝙰𝚃𝙴/𝙸𝙽𝙱𝙾𝚇/𝙶𝚁𝙾𝚄𝙿
┣━🔊 Auto Voice : ♻ 𝙾𝙽/𝙾𝙵𝙵
┣━📝 Auto Status : ♻ 𝙾𝙽/𝙾𝙵𝙵
┣━📋 Auto sticker : ♻ 𝙾𝙽/𝙾𝙵𝙵
┣━⌨ Auto reply : ♻ 𝙾𝙽/𝙾𝙵𝙵
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┃🔗 CUSTOMIZE YOUR SETTINGS ⤵
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃     🔧 OPTIONS MENU 🔧
┃━━━━━━━━━━━━━━━━━━━━━━━┃

┣━ WORK MODE ⤵
┃   ┣ 1.1 🔹 Public Work
┃   ┣ 1.2 🔹 Private Work
┃   ┣ 1.3 🔹 Group Only
┃   ┗ 1.4 🔹 Inbox Only

┣━ AUTO VOICE ⤵
┃   ┣ 2.1 🔊 Auto Voice On
┃   ┗ 2.2 🔕 Auto Voice Off

┣━ AUTO STATUS SEEN ⤵
┃   ┣ 3.1 👁‍🗨 Auto Read Status On
┃   ┗ 3.2 👁❌ Auto Read Status Off

┣━ AUTO STICKER ⤵
┃   ┣ 4.1 📰 Auto sticker On
┃   ┗ 4.2 🛑 Auto sticker Off

┣━ AUTO REPLY ⤵
┃   ┣ 5.1 ✍ Auto reply On
┃   ┗ 5.2 ✍❌ Auto reply Off
┃
┗━━━━━━━━━━━━━━━━━━━━━━━┛
> *© ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/V2pdBTJ/20241111-195632.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;                    
                    case '4.1':    
                        reply(".update AUTO_STICKER:true");
                        reply(".restart");
                    break;
                    case '4.2':    
                        reply(".update AUTO_STICKER:false");
                        reply(".restart");
                    break;                                        
                    case '5.1':    
                        reply(".update AUTO_REPLY:true");
                        reply(".restart");
                    break;
                    case '5.2':    
                        reply(".update AUTO_REPLY:false");
                        reply(".restart");
                    break;                        
            
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
