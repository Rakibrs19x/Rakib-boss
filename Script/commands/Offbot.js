module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Funny off bot message",
  commandCategory: "system",
  cooldowns: 0,
};

module.exports.run = ({ event, api }) => {
  api.sendMessage(
    "👑 ভিআইপি এডমিন মহারাজ Rakib-vai শুধু আমাকে ঘুম পাড়াতে পারে বা অফ করতে পারে!\n\n⚠️ তোরা হচ্ছিস প্রজা... এই কমান্ড ব্যবহার করার যোগ্যতা নাই! মুড়ি খা 😂",
    event.threadID,
    event.messageID
  );
};
