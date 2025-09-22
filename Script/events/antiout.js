module.exports.config = {
  name: "antiout",
  eventType: ["log:unsubscribe"],
  version: "1.0.1",
  credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "Prevent members from leaving the group"
};

module.exports.run = async ({ event, api, Threads, Users }) => {
  let data = (await Threads.getData(event.threadID)).data || {};
  if (data.antiout == false) return;
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) 
            || await Users.getNameUser(event.logMessageData.leftParticipantFbId);

  // যদি ইউজার নিজে লিভ করে
  if (event.author == event.logMessageData.leftParticipantFbId) {
    api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error) => {
      if (error) {
        // ❌ ফেইল হলে শুধু এই মেসেজ
        return api.sendMessage(
          `❌ ${name} কে আবার এড করতে পারলাম না! \n👉 হয়তো সে বটকে ব্লক করেছে অথবা গ্রুপে এড অপশন বন্ধ রেখেছে।`,
          event.threadID
        );
      } else {
        // ✅ সফল হলে শুধু এই মেসেজ
        return api.sendMessage(
          `😏 ${name}, গ্রুপ ছেড়ে পালাইতে চাইলি? \nএইটা গ্যাং গ্রুপ —রাকিব মহারাজার পারমিশন ছাড়া লিভ নাই! 🔥\n\nতাই তোকে আবার এড করলাম 😎`,
          event.threadID
        );
      }
    });
  }
};
