module.exports.config = {
    name: "bio",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rakib-vai 🌀 -BOT ⚠️ TEAM☢️",
    description: "Show Rakib's bio",
    commandCategory: "info",
    usages: "bio",
    cooldowns: 5
}

module.exports.run = async ({ api, event }) => {
    const bio = `
🌟 𝗥𝗮𝗸𝗶𝗯 𝗜𝘀𝗹𝗮𝗺 🌟
━━━━━━━━━━━━━━━━━━
💠 পরিশ্রমী, আত্মবিশ্বাসী এবং সৃজনশীল একজন মানুষ  
💠 সবসময় ইতিবাচক চিন্তা করি এবং নতুন কিছু শিখতে ভালোবাসি  
💠 ডিজিটাল মার্কেটিং ও গ্রাফিক্স ডিজাইনে দক্ষ  
💠 সবার সঙ্গে বন্ধুত্বপূর্ণ আচরণে বিশ্বাসী  
💠 স্বপ্ন দেখি একদিন বড় কিছু করার 🌍✨
━━━━━━━━━━━━━━━━━━
    `;

    return api.sendMessage(bio, event.threadID, event.messageID);
}
