const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "1admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐑𝐚𝐤𝐢𝐛
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞
┃ 🎂 𝐀𝐠𝐞       : 18
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐈𝐧𝐭𝐞𝐫 𝟐𝐧𝐝 𝐘𝐞𝐚𝐫
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐍𝐢𝐥𝐩𝐡𝐚𝐦𝐚𝐫𝐢, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/Rakibislam.5075
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/profile.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/profile.png"));
  
    // তোমার ফেসবুক প্রোফাইল ছবি অটো ডাউনলোড করবে
    return request(encodeURI(`https://graph.facebook.com/Rakibislam.5075/picture?width=720&height=720`))
        .pipe(fs.createWriteStream(__dirname + '/cache/profile.png'))
        .on('close', () => callback());
};
