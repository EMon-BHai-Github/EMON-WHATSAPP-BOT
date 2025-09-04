const axios = require('axios');

module.exports = {
  config: {
    name: 'rndmadd',
    aliases: ['randomadd', 'add'],
    version: '1.1',
    permission: 0,
    prefix: true,
    description: 'Reply দিয়ে ভিডিওকে mix এ add করার command',
    usages: 'rndmadd <name> (reply to video)',
    category: 'Utilities',
    credit: 'Modified by Emon',
  },

  run: async ({ api, event, args }) => {
    try {
      // নাম দেওয়া হয়েছে কিনা চেক
      if (args.length < 1) {
        return api.sendMessage("❌ ভাই, একটা নাম দেন।", event.threadID, event.messageID);
      }

      const targetName = args.join(" ");

      // reply করা হয়েছে কিনা চেক
      if (!event.messageReply || !event.messageReply.attachments || event.messageReply.attachments.length === 0) {
        return api.sendMessage("📹 ভাই, একটা ভিডিওতে reply দেন।", event.threadID, event.messageID);
      }

      const attachment = event.messageReply.attachments[0];
      if (attachment.type !== "video") {
        return api.sendMessage("❌ শুধু ভিডিও ফাইল reply দিন।", event.threadID, event.messageID);
      }

      const videoUrl = attachment.url;

      // GitHub API থেকে base url নাও
      const apis = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiUrl = apis.data.api;

      // API তে ভিডিও পাঠাও
      const response = await axios.get(
        `${apiUrl}/mixadd?name=${encodeURIComponent(targetName)}&url=${encodeURIComponent(videoUrl)}`
      );

      const resMsg = response?.data?.msg || "কোন মেসেজ নাই।";
      const name = response?.data?.data?.name || "Unknown";
      const resUrl = response?.data?.data?.url || "কোন URL নাই।";

      const finalMsg = 
        `✅ Successfully Added!\n\n` +
        `📩 MESSAGE: ${resMsg}\n` +
        `📛 NAME: ${name}\n` +
        `🖇 URL: ${resUrl}`;

      return api.sendMessage(finalMsg, event.threadID, event.messageID);

    } catch (error) {
      console.error("Error during execution:", error);
      return api.sendMessage("⚠️ Error: কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন!", event.threadID, event.messageID);
    }
  }
};
