module.exports.config = {
    name: "join",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "Rakib",
    description: "Welcome new members with a nice text message"
};

module.exports.run = async function({ api, event }) {
    const { threadID, logMessageData } = event;
    const addedParticipants = logMessageData.addedParticipants;

    for (let user of addedParticipants) {
        let name = user.fullName || "New Member";
        let msg = `
━━━━━━━━━━━━━━━
🌟 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗧𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 🌟

👋 হ্যালো ${name}!
তুমি এখন আমাদের পরিবারের একজন সদস্য।  
এখানে মজা করো, শিখো আর সকলে মিলেমিশে থেকো ❤️

📌 দয়া করে গ্রুপের নিয়ম মেনে চলবে।  
গ্রুপটা রাকিব মহারাজার, এখানে জয়েন নিজে ইচ্ছায় করা যায় কিন্তু গ্রুপ থেকে লিভ নিতে মহারাজার অনুমতি লাগে। মহারাজার অনুমতি ছাড়া গ্রুপ থেকে কেউ বের হতে পারবেন না। 
━━━━━━━━━━━━━━━
✨ Enjoy your stay!
        `;

        api.sendMessage(msg, threadID);
    }
};
