const axios = require('axios')
const { cmd, commands } = require('../command');
const fs = require('fs-extra');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { exec } = require('child_process')

cmd({
    pattern: "vv",
    alias : ['viewonce','retrive'],
    desc: "Flips given text.",
    category: "convert",
    use: '<query>',
    filename: __filename
},
async(Void, citel, text) => {
try {
const quot = citel.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
let cap =quot.message.imageMessage.caption;
let anu = await Void.downloadAndSaveMediaMessage(quot.message.imageMessage)
return Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
let cap =quot.message.videoMessage.caption;
let anu = await Void.downloadAndSaveMediaMessage(quot.message.videoMessage)
return Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}

}
//else citel.reply("```This is Not A ViewOnce Message```") 
  
}  

catch(e) {  console.log("error" , e ) }     

  
if(!citel.quoted) return citel.reply("```Uh Please Reply A ViewOnce Message```")           
if(citel.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
if(citel.quoted.message.imageMessage )
{ 
let cap =citel.quoted.message.imageMessage.caption;
let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage)
Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
else if(citel.quoted.message.videoMessage )
{
let cap =citel.quoted.message.videoMessage.caption;
let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage)
Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}

}
else return citel.reply("```This is Not A ViewOnce Message```")

})


//---------------------------------------------------------------------------
cmd({
pattern: "circle",
alias: ["circlestic","circlesticker","cs"],
desc: "Makes sticker of replied image/video.",
category: "convert",
filename: __filename,
use: '<reply to any image/video.>'
},
async(Void, citel, text) => {
if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
//console.log("Quoted Data here : ",citel.quoted);
let mime = citel.quoted.mtype
pack = Config.packname
author = Config.author
if (mime =="imageMessage" || mime =="stickerMessage") {
    let media = await citel.quoted.download();
    //citel.reply("*Processing Your request*");
    let sticker = new Sticker(media, {
        pack: pack, // The pack name
        author: author, // The author name
        type: StickerTypes.CIRCLE ,
        categories: ["🤩", "🎉"], // The sticker category
        id: "12345", // The sticker id
        quality: 75, // The quality of the output file
    });
    const buffer = await sticker.toBuffer();
    return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}else return citel.reply("*Uhh,Please reply to any image*");

}
)
//---------------------------------------------------------------------------
cmd({
pattern: "crop",
alias: ["cropstic","csticker","cropsticker"],
desc: "Makes sticker of replied image/video.",
category: "convert",
filename: __filename,
use: '<reply to any image/video.>'
},
async(Void, citel, text) => {
if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
//console.log("Quoted Data here : ",citel.quoted);
let mime = citel.quoted.mtype
pack = Config.packname
author = Config.author
if (mime =="imageMessage"  || mime =="stickerMessage") {
    let media = await citel.quoted.download();
    //citel.reply("*Processing Your request*");
    let sticker = new Sticker(media, {
        pack: pack, // The pack name
        author: author, // The author name
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"], // The sticker category
        id: "12345", // The sticker id
        quality: 75, // The quality of the output file
    });
    const buffer = await sticker.toBuffer();
    return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}else return citel.reply("*Uhh,Please reply to any image*");

}
)
//---------------------------------------------------------------------------
cmd({
pattern: "round",
alias: ["roundstic","roundsticker"],
desc: "Makes sticker of replied image/video.",
category: "convert",
filename: __filename,
use: '<reply to any image/video.>'
},
async(Void, citel, text) => {
if (!citel.quoted) return citel.reply(`*Reply To any Image or video Sir.*`);
//console.log("Quoted Data here : ",citel.quoted);
let mime = citel.quoted.mtype
pack = Config.packname
author = Config.author
if (mime =="imageMessage" || mime =="stickerMessage") {
    let media = await citel.quoted.download();
    //citel.reply("*Processing Your request*");
    let sticker = new Sticker(media, {
        pack: pack, // The pack name
        author: author, // The author name
        type: StickerTypes.ROUNDED ,
        categories: ["🤩", "🎉"], // The sticker category
        id: "12345", // The sticker id
        quality: 75, // The quality of the output file
    });
    const buffer = await sticker.toBuffer();
    return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}else return citel.reply("*Uhh,Please reply to any image*");

}
)
cmd({
pattern: "toaudio",
alias:['mp3','tomp3'],
desc: "changes type to audio.",
category: "convert",
use: '<reply to any Video>',
filename: __filename
},
async(Void, citel, text) => {
if (!citel.quoted) return citel.reply(`_Reply to Any Video_`);
let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
const { toAudio } = require('../lib');
let buffer = fs.readFileSync(media);
let audio = await toAudio(buffer);
Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });


fs.unlink(media, (err) => {
if (err) { return console.error('File Not Deleted from From TOAUDIO AT : ' , media,'\n while Error : ' , err);  }
else return console.log('File deleted successfully in TOAUDIO MP3 at : ' , media);
});

}
else return citel.reply ("```Uhh Please, Reply To A video Message```")
}
)
