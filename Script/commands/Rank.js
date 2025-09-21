module.exports.config = {
	name: "rank",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Rakib-vai_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "View Member Rankings",
	commandCategory: "Group",
	usages: "[user] or [tag]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": "",
		"canvas": "",
		"node-superfetch": ""
	}
};

const fs = require("fs-extra");
const path = require("path");
const Canvas = require("canvas");

module.exports.makeRankCard = async (data) => {
	const __root = path.resolve(__dirname, "cache");

	try {
		Canvas.registerFont(__root + "/regular-font.ttf", { family: "Manrope" });
	} catch (e) {}

	const { id, name, rank, level, expCurrent, expNextLevel } = data;

	const canvas = Canvas.createCanvas(800, 250);
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = "#0f1724";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(120, 125, 80, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = "#111827";
	ctx.fill();

	ctx.fillStyle = "#ffffff";
	ctx.font = "28px Manrope";
	ctx.fillText(`👤 ${name}`, 230, 95);

	ctx.font = "22px Manrope";
	ctx.fillText(`📊 Rank: ${rank}`, 230, 135);
	ctx.fillText(`🎯 Level: ${level}`, 230, 165);
	ctx.fillText(`⚡ Exp: ${expCurrent} / ${expNextLevel}`, 230, 195);

	ctx.font = "16px Manrope";
	ctx.fillStyle = "#9CA3AF";
	ctx.fillText(`Powered by ${module.exports.config.credits}`, 20, canvas.height - 12);

	return canvas.toBuffer();
};

module.exports.run = async ({ event, api }) => {
	try {
		const userData = {
			id: event.senderID,
			name: "User Name",
			rank: "#1",
			level: 10,
			expCurrent: 1500,
			expNextLevel: 2000
		};

		const imageBuffer = await module.exports.makeRankCard(userData);

		const imgPath = __dirname + "/cache/rank.png";
		await fs.ensureDir(__dirname + "/cache");
		fs.writeFileSync(imgPath, imageBuffer);

		return api.sendMessage(
			{
				body: `📊 Hey ${userData.name}, here is your Rank Card 🚀`,
				attachment: fs.createReadStream(imgPath)
			},
			event.threadID,
			event.messageID
		);
	} catch (e) {
		return api.sendMessage(`❌ Error: ${e.message}`, event.threadID, event.messageID);
	}
};
