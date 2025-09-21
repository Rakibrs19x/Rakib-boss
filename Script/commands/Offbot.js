module.exports.config = {
    name: "offbot",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    description: "Turn the bot OFF 😴 (Admins only!)",
    commandCategory: "system",
    cooldowns: 0,
};

module.exports.run = ({ event, api }) => {
    const permission = ["100000478146113", "61552937378991"];
    if (!permission.includes(event.senderID)) {
        return api.sendMessage(
            "👑 ভিআইপি এডমিন মহারাজ Rakib-vai শুধু আমাকে ঘুম পাড়াতে পারে বা অফ করতে পারে!\n\n⚠️ তোরা হচ্ছিস প্রজা... এই কমান্ড ব্যবহার করার যোগ্যতা নাই! মুড়ি খা 😂",
            event.threadID,
            event.messageID
        );
    }
    api.sendMessage(
        `✅ [ OK ] Bot এখন আরামে ঘুমাচ্ছে... 💤\n\nPowered by 👉 Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️`,
        event.threadID,
        event.messageID
    );
    global.config.BOT_OFF = true;
};
