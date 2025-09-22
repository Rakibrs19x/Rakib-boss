module.exports.config = {
    name: "adminUpdate",
    eventType: [
        "log:thread-admins",
        "log:thread-name",
        "log:user-nickname",
        "log:thread-icon",
        "log:thread-call",
        "log:thread-color"
    ],
    version: "1.0.2",
    credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️ (edited by rakib)",
    description: "Update team information quickly",
    envConfig: {
        sendNoti: true,
    }
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const fs = require("fs");
    var iconPath = __dirname + "/emoji.json";
    if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                const userID = logMessageData.TARGET_ID;
                const name = await Users.getNameUser(userID);

                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: userID });
                    if (global.configModule[this.config.name].sendNoti) {
                        api.sendMessage({
                            body: `»» NOTICE ««\n${name} এই নে বলদ তোরে গ্রুপে এড়মিন দিলাম 😁🫵🏾`,
                            mentions: [{ tag: name, id: userID }]
                        }, threadID);
                    }
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != userID);
                    if (global.configModule[this.config.name].sendNoti) {
                        api.sendMessage({
                            body: `»» NOTICE ««\n${name} তুই পাগল ছাগল এড়মিন হওয়ার যোগ্য না 🤣\nতাই তোকে এড়মিন থেকে লাথি মেরে নামিয়ে দেওয়া হলো, এটা মহারাজা রাকিব এর আদেশ 😏`,
                            mentions: [{ tag: name, id: userID }]
                        }, threadID);
                    }
                }
                break;
            }

            case "log:thread-icon": {
                let preIcon = JSON.parse(fs.readFileSync(iconPath));
                dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`» [ GROUP UPDATE ]\n» Original icon: ${preIcon[threadID] || "unknown"}`, threadID, async (error, info) => {
                    preIcon[threadID] = dataThread.threadIcon;
                    fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                });
                break;
            }

            case "log:thread-call": {
                if (logMessageData.event === "group_call_started") {
                    const name = await Users.getNameUser(logMessageData.caller_id);
                    api.sendMessage(`[ GROUP UPDATE ]\n❯ ${name} STARTED A ${(logMessageData.video) ? 'VIDEO ' : ''}CALL.`, threadID);
                } else if (logMessageData.event === "group_call_ended") {
                    const callDuration = logMessageData.call_duration;
                    const hours = Math.floor(callDuration / 3600);
                    const minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    const seconds = callDuration - (hours * 3600) - (minutes * 60);
                    const timeFormat = `${hours}:${minutes}:${seconds}`;
                    api.sendMessage(`[ GROUP UPDATE ]\n❯ ${(logMessageData.video) ? 'Video' : ''} call has ended.\n❯ Call duration: ${timeFormat}`, threadID);
                } else if (logMessageData.joining_user) {
                    const name = await Users.getNameUser(logMessageData.joining_user);
                    api.sendMessage(`❯ [ GROUP UPDATE ]\n❯ ${name} Joined the ${(logMessageData.group_call_type == '1') ? 'Video' : ''} call.`, threadID);
                }
                break;
            }

            case "log:thread-color": {
                dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`» [ GROUP UPDATE ]\n» ${event.logMessageBody.replace("Theme", "color")}`, threadID);
                break;
            }

            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`»» NOTICE «« Update user nicknames ${logMessageData.participant_id} to: ${(logMessageData.nickname.length == 0) ? "original name": logMessageData.nickname}`, threadID);
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || "No name";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`»» NOTICE «« Update the group name to ${dataThread.threadName}`, threadID);
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}
