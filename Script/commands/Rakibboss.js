const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "rakibboss",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "rakibboss info",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, Threads, Users }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  const { threadID, messageID, senderID, body } = event;
  const name = await Users.getNameUser(senderID);

  const tl = [
    "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
    "শুনবো না😼তুমি আমার বস রাকিব কে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
    "আমি আবাল দের সাথে কথা বলি না,ok😒",
    "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
    "Bolo Babu, তুমি কি আমার রাকিব বসকে ভালোবাসো? 🙈💋",
    "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
    "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
    "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
    "I love you janu🥰",
    "আরে Bolo আমার জান ,কেমন আছো?😚",
    "Bot বলে অসম্মান করছি,😰😿",
    "Hop beda😾,Boss বল boss😼",
    "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু"
    // এখানে চাইলে আরও মেসেজ যোগ করতে পারো
  ];

  // Random message pick
  const rand = tl[Math.floor(Math.random() * tl.length)];

  // যদি ইউজার "ami Rakib" বা "kire" লিখে
  if (body && (body.toLowerCase() === "ami rakib" || body.toLowerCase() === "kire")) {
    return api.sendMessage(`হ্যা বস কেমন আছেন..?☺️`, threadID, messageID);
  }

  // যদি ইউজার /Bot বা /bot লিখে
  if (body && (body.startsWith("/Bot") || body.startsWith("/bot"))) {
    return api.sendMessage(`${name}, ${rand}`, threadID, messageID);
  }

  // এখানে নপ্যাক্স কমান্ড না দিলে অন্য কাজ করলে
  // উদাহরণ: শুধু ইউজার কিছু লিখল
  // যদি চাইলে এখানে আরও নন-কমান্ড মেসেজ handle করা যাবে
};

module.exports.run = function({ api, event, client, __GLOBAL }) { };
