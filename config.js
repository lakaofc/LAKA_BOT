const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ᴍᴀʟᴀᴋᴀ-ᴍᴅ=u3oHxAgY#BhLLA1w3LFZjgfFxtOVByusEWkDQpMk3vr4gxHcnTcA",
MONGODB: process.env.MONGODB || "mongodb://mongo:cHFiHYhpIseEzFASKPHztzSRXPXKHFXO@junction.proxy.rlwy.net:43040",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/8DKVHKN/989f5b3ba02c6ae4a494537c8dad9cdb.jpg",
BOT_NAME: process.env.BOT_NAME || "LAKA BOT",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
