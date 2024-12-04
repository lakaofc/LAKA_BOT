const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ᴍᴀʟᴀᴋᴀ-ᴍᴅ=u3oHxAgY#BhLLA1w3LFZjgfFxtOVByusEWkDQpMk3vr4gxHcnTcA",
MONGODB: process.env.MONGODB || "mongodb://mongo:EdmkDTsYKtCkHvRZZYXVAkxmENsnjXbk@junction.proxy.rlwy.net:59101",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tXmKBx1/7e0cdce96cb909c48a5f73819a994dac.jpg",
BOT_NAME: process.env.BOT_NAME || "LAKA BOT",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
