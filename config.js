const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ᴍᴀʟᴀᴋᴀ-ᴍᴅ=u3oHxAgY#BhLLA1w3LFZjgfFxtOVByusEWkDQpMk3vr4gxHcnTcA",
MONGODB: process.env.MONGODB || "mongodb://mongo:CBBGzbzcwFbozEuPjhWkoXmzJRZxdsMz@autorack.proxy.rlwy.net:46461",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/QNwLWTN/20241201-230018.jpg",
BOT_NAME: process.env.BOT_NAME || "LAKA BOT",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
