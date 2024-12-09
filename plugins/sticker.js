//Created by malaka DARK_ALFHA_MD 🧑🏻‍💻

const axios = require('axios')
const {cmd , commands} = require('../command')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const googleTTS = require('google-tts-api')
const { getRandom } = require('../lib/functions')

var imgmsg = 'ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ!'
var descg = 'ᴍᴀʟᴀᴋᴀ-ᴍᴅ.'
//__________________________sticker____________________
cmd({
    pattern: 'sticker',
    react: '🤹‍♀️',
    alias: ['s', 'stic'],
    desc: descg,
    category: 'convert',
    use: '.sticker <Reply to image>',
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'))
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage'

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg')
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download()
            await require('fs').promises.writeFile(nameJpg, imageBuffer)

            let sticker = new Sticker(nameJpg, {
                pack: pushname, // The pack name
                author: 'Sadeesha Coder', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer()
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek })
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp')
            const stickerBuffer = await m.quoted.download()
            await require('fs').promises.writeFile(nameWebp, stickerBuffer)

            let sticker = new Sticker(nameWebp, {
                pack: pushname, // The pack name
                author: 'Sadeesha Coder', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek })
        } else {
            return await reply(imgmsg)
        }
    } catch (e) {
        reply('Error !!')
        console.error(e)
    }
})

//____________________________TTS___________________________
cmd({
    pattern: "tts",
    desc: "download songs",
    category: "download",
    react: "👧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Need some text.")
    const url = googleTTS.getAudioUrl(q, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
})
await conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek })
    }catch(a){
reply(`${a}`)
}
})
