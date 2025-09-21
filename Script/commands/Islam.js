module.exports.config = {
    name: "islam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Islamic Chat",
    description: "ইসলামিক ও মোটিভেশনাল ভিডিও",
    commandCategory: "CYBER ☪️ -BOT ⚠️ TEAM ☪️",
    usages: "islam",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];

    // সুন্দর ইসলামিক মেসেজ, Rakib Vai
    var hi = [
`🕌 আল্লাহর যিকিরে অন্তর শান্ত হয় 🌸  
💖 কুরআন পড়, জীবন সুন্দর হবে  
🤲 প্রতিটি দোয়া আল্লাহ কবুল করেন যদি তুমি ধৈর্য ধরো  
🌿 হারাম থেকে বাঁচো, হালালকে আঁকড়ে ধরো  
✨ তোমার হাসি অন্যকে অনুপ্রেরণা দিক`
    ];

    var know = hi[Math.floor(Math.random() * hi.length)];

    // ভিডিও লিঙ্ক (তুমি চাইলে আরো যোগ করতে পারো)
    var link = [
        "https://drive.google.com/uc?id=1u0rRrXj2Xy7d7Q9W9L-mizanur1", 
        "https://drive.google.com/uc?id=1Azharivideo2", 
        "https://drive.google.com/uc?id=1Azharivideo3", 
        "https://drive.google.com/uc?id=1MotivationalBangla1", 
        "https://drive.google.com/uc?id=1MotivationalBangla2"
    ];

    var callback = () => api.sendMessage(
        `${know}\n\n🌸 ইসলামিক ও মোটিভেশনাল ভিডিও 🌸`, 
        event.threadID, 
        event.messageID
    );

    return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
};
