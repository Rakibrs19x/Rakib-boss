const axios = require('axios');

module.exports = {

  config: {
    name: 'ai_sms_bot',
    version: '1.0',
    credit: 'Powered by ChatGPT',
    description: 'AI SMS/Message responder bot',
    cooldowns: 5,
    hasPermssion: 0,
    commandCategory: 'AI',
    usages: {
      en: 'Send any message or SMS, AI will reply beautifully.'
    }
  },

  // =========================
  // মূল রান ফাংশন
  // =========================
  run: async ({ api, args, event }) => {
    const threadID = event.threadID;
    const text = args.join(' ');
    const image = event.messageReply?.attachments?.[0]?.url;

    try {
      const aiResponse = await generateAIResponse(text, image);
      api.sendMessage(aiResponse, threadID);
    } catch (error) {
      console.error('AI processing error:', error);
      api.sendMessage(`Error: ${error.message}`, threadID);
    }
  },

  // =========================
  // বাইরের জায়গা থেকে AI মেসেজ পাঠানোর ফাংশন
  // =========================
  sendAIMessage: async (api, userText, threadID, image = null) => {
    try {
      const aiResponse = await generateAIResponse(userText, image);
      api.sendMessage(aiResponse, threadID);
    } catch (error) {
      console.error('AI sending error:', error);
      api.sendMessage(`Error: ${error.message}`, threadID);
    }
  }

};

// =========================
// AI Response Generator
// =========================
async function generateAIResponse(text, image = null) {
  const AI_API_URL = 'https://gemini.ai/api';  // তোমার AI API
  const MODEL_TEXT_ONLY = 'text_only';
  const MODEL_TEXT_AND_IMAGE = 'text_and_image';

  try {
    let response;

    if (image) {
      response = await axios.post(AI_API_URL, {
        modelType: MODEL_TEXT_AND_IMAGE,
        prompt: text,
        imageParts: [image]
      });
    } else {
      response = await axios.post(AI_API_URL, {
        modelType: MODEL_TEXT_ONLY,
        prompt: text
      });
    }

    // AI জেনারেটেড সুন্দর রিপ্লাই
    return response.data.result;

  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
}
