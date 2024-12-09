const {

  cmd

} = require("../command");

const fs = require('fs');

cmd({

  'pattern': 'block',

  'desc': "Block a user.",

  'category': "owner",

  'react': '🚫',

  'filename': __filename

}, async (_0x5ce809, _0x40967d, _0x418036, {

  from: _0x417a53,

  isOwner: _0x18f6f4,

  quoted: _0x18edee,

  reply: _0x4d5a23

}) => {

  if (!_0x18f6f4) {

    return _0x4d5a23("*❌ You are not the owner!*");

  }

  if (!_0x18edee) {

    return _0x4d5a23("*❌ Please reply to the user you want to block.*");

  }

  const _0x3f43df = _0x18edee.sender;

  try {

    await _0x5ce809.updateBlockStatus(_0x3f43df, "block");

    _0x4d5a23("*🚫 User " + _0x3f43df + " blocked successfully.*");

  } catch (_0x12f3e8) {

    _0x4d5a23("*❌ Error blocking user: " + _0x12f3e8.message + '*');

  }

});

cmd({

  'pattern': 'unblock',

  'desc': "Unblock a user.",

  'category': "owner",

  'react': '✅',

  'filename': __filename

}, async (_0x2ff7ac, _0x494b1b, _0x2da403, {

  from: _0x3b5461,

  isOwner: _0x435f63,

  quoted: _0x169f26,

  reply: _0x55c71d

}) => {

  if (!_0x435f63) {

    return _0x55c71d("*❌ You are not the owner!*");

  }

  if (!_0x169f26) {

    return _0x55c71d("*❌ Please reply to the user you want to unblock.*");

  }

  const _0x138a96 = _0x169f26.sender;

  try {

    await _0x2ff7ac.updateBlockStatus(_0x138a96, "unblock");

    _0x55c71d("*✅ User " + _0x138a96 + " unblocked successfully.*");

  } catch (_0x4939da) {

    _0x55c71d("❌ Error unblocking user: " + _0x4939da.message);

  }

});

cmd({

  'pattern': 'clearchats',

  'desc': "Clear all chats from the bot.",

  'category': "owner",

  'react': '🧹',

  'filename': __filename

}, async (_0x1a1723, _0x851762, _0x5e0d5a, {

  from: _0x3c964c,

  isOwner: _0x14a154,

  reply: _0x169c16

}) => {

  if (!_0x14a154) {

    return _0x169c16("*❌ You are not the owner!*");

  }

  try {

    const _0x427c29 = _0x1a1723.chats.all();

    for (const _0x3d2a0f of _0x427c29) {

      await _0x1a1723.modifyChat(_0x3d2a0f.jid, "delete");

    }

    _0x169c16("*🧹 All chats cleared successfully!*");

  } catch (_0x18734c) {

    _0x169c16("*❌ Error clearing chats: " + _0x18734c.message + '*');

  }

});

cmd({

  'pattern': "jid",

  'desc': "Get the bot's JID.",

  'category': "owner",

  'react': '🤖',

  'filename': __filename

}, async (_0x5ca58e, _0xca6ae7, _0x19b809, {

  from: _0x8ca45b,

  isOwner: _0x3ad213,

  reply: _0x45dea7

}) => {

  if (!_0x3ad213) {

    return _0x45dea7("❌ You are not the owner!");

  }

  _0x45dea7("🤖 *Bot JID:* " + _0x5ca58e.user.jid);

});

cmd({

  'pattern': "gjid",

  'desc': "Get the list of JIDs for all groups the bot is part of.",

  'category': 'owner',

  'react': '📝',

  'filename': __filename

}, async (_0x29363a, _0x555b1f, _0x1df8ba, {

  from: _0x2f2813,

  isOwner: _0x359021,

  reply: _0x24075f

}) => {

  if (!_0x359021) {

    return _0x24075f("*❌ You are not the owner!*");

  }

  const _0x4db1a9 = await _0x29363a.groupFetchAllParticipating();

  const _0x2d7e67 = Object.keys(_0x4db1a9).join("\n");

  _0x24075f("📝 *Group JIDs:*\n\n" + _0x2d7e67);

});

cmd({

  'pattern': "fullpp",

  'desc': "full pp",

  'category': "owner",

  'react': '✅',

  'filename': __filename

}, async (_0x1a8c91, _0x4d8b40, _0xd06b0f, {

  from: _0xa626d3,

  isOwner: _0x75025a,

  reply: _0x118a4f,

  q: _0x449ac8

}) => {

  if (!_0x75025a) {

    return _0x118a4f("*❌ You are not the owner!*");

  }

  let _0x1ef624;

  if (_0x449ac8.imageMessage) {

    _0x1ef624 = _0x449ac8.imageMessage;

  } else {

    _0xd06b0f.reply("This is not an image...");

    return;

  }

  ;

  var _0x42d64c = await client.downloadAndSaveMediaMessage(_0x1ef624);

  var {

    img: _0x59e2c6

  } = await generateProfilePicture(_0x42d64c);

  await client.query({

    'tag': 'iq',

    'attrs': {

      'to': botNumber,

      'type': "set",

      'xmlns': "w:profile:picture"

    },

    'content': [{

      'tag': "picture",

      'attrs': {

        'type': "image"

      },

      'content': _0x59e2c6

    }]

  });

  fs.unlinkSync(_0x42d64c);

  _0xd06b0f.reply("*Bot Profile Picture Updated*");

});