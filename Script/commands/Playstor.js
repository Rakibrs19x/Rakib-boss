module.exports.config = {
  name: "playstore",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Funny & Attractive Playstore Command",
  commandCategory: "User",
  usages: "playstore",
  dependencies: {
    "axios": "",
    "fs-extra": ""
  },
  cooldowns: 0,
};

module.exports.run = ({ event, api }) => {
  api.sendMessage(
    "📱✨ স্বাগতম রাজকীয় Playstore এ ✨📱\n\n" +
    "👑 এখানে আসল VIP এডমিন মহারাজ Rakib-vai এর অনুমতিতেই অ্যাপস ডাউনলোড করা যায়!\n\n" +
    "⚠️ তুমি যদি প্রজা হও 👉 তবে শুধু তাকিয়ে তাকিয়ে দেখো... 😏\n\n" +
    "😂 মুড়ি খা, আর চিন্তা করিস না! VIP হলে তোকে আমি বিশেষ অ্যাপস উপহার দিতাম 🎁",
    event.threadID,
    event.messageID
  );
};
