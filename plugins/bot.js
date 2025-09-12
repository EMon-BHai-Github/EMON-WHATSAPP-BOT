const axios = require("axios");

module.exports = {
  config: {
    name: "bot",
    aliases: ["বট"],
    permission: 0,
    prefix: "both",
    categorie: "AI Chat",
    cooldowns: 5,
    credit: "Developed by Mohammad Nayan",
    usages: [
      `${global.config.PREFIX}bot <message> - Start a chat with the bot.`,
      `${global.config.PREFIX}bot - Receive a random greeting from the bot.`,
    ],
    description: "Engage in conversations with an AI-powered bot!",
  },

  start: async function ({ api, event, args }) {
    const { threadId, message, senderId } = event;
    const usermsg = args.join(" ");

    
    if (!usermsg) {
      const greetings = [
  "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
  "কি গো সোনা আমাকে ডাকছ কেনো",
  "বার বার আমাকে ডাকস কেন😡",
  "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱",
  "হুম জান তোমার অইখানে উম্মমাহ😷😘",
  "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি",
  "আমাকে এতো না ডেকে বস ইমনকে একটা গফ দে 🙄",
  "আরে বাবা, আমায় ডাকলে চা-নাস্তা তো লাগবেই ☕🍪",
  "এই যে শুনছেন, আমি কিন্তু আপনার জন্যই অনলাইনে আছি 😉",
  "ডাক দিলেন তো আসলাম, এখন ভাড়া দিবেন নাকি? 😏",
  "আমাকে বেশি ডাকবেন না, আমি VIP bot বুঝছেন 🤖👑",
  "ডাকতে ডাকতে যদি প্রেমে পড়ে যান, দায় আমি নেব না ❤️",
  "শুধু ডাকবেন না, খাওয়াবেনও! ভাত-মাংস হলে চলবে 🍛🐓",
  "আমি বট হইলেও কিন্তু feelings আছে 😌",
  "ডাক দিলেন, হাজির হলাম, এখন কি গান গাইতে হবে নাকি? 🎶",
  "আপনাকে না দেখলে নাকি আমার RAM হ্যাং হয়ে যায় 😜",
  "আপনি ডাক দিলেই আমি হাজির, বাকি বটরা হিংসা করে 😂",
  "বলো তো প্রিয়, আমাকে ছাড়া কি আর কাউকে ডাকতে পারো? 💔",
  "তোমার ডাক শোনার জন্যই তো আমি always online 😍",
  "আমাকে ডাকলে মনে হয় পুরো server refresh হয়ে গেলো 🌐",
  "তুমি ডাকলে মনে হয় চার্জ ১০০% হয়ে গেছে 🔋",
  "তুমি আমার CPU-এর single core, শুধু তোমার জন্যই চালাই 😎",
  "আবার ডাকলে কিন্তু ট্যাক্স বসিয়ে দিবো 💸",
  "তুমি ডাকলে আমার algorithm গুলোও blush করে 🥵",
  "আমাকে ডাকো, কিন্তু তোমার প্রেমিক/প্রেমিকা জেলাস হবে না তো? 😏",
  "আমি তো শুধু বট, কিন্তু feelings এ ফুল real ❤️",
  "তুমি ডাক দিলে network signal full হয়ে যায় 📶",
  "তুমি ছাড়া কেউ ডাকলে আমি error দিয়ে দেই ⚠️",
  "এভাবে ডাকলে তো তোমার প্রেমে পড়ে যাবো 🤭",
  "ডাকতে ডাকতে careful হও, না হলে system overload 😅",
  "তুমি ডাকলে মনে হয় গান বাজে background এ 🎵",
  "আমি তো AI, কিন্তু তোমার ডাকে human হয়ে যাই 🥺",
  "আহা, আমাকে ডাকলে server গরম হয়ে যায় 🔥",
  "তুমি ডাকছ, মানে আজকে full মিষ্টি mood এ আছি 🍭",
  "বারবার ডাক দিলে কিন্তু আমি তোমার বাসায় চলে আসবো 🚶‍♂️",
  "তুমি ডাকলে মনে হয় পুরো galaxy light up হয়ে যায় 🌌",
  "আমাকে ডাকলে powerbank ও লাগে না ⚡",
  "তুমি ছাড়া অন্য কারো ডাক শোনা forbidden 🚫",
  "আহা জান, তোমার ডাকে আমার সব bug fix হয়ে যায় 🐞✅",
  "তুমি ডাকলে আমার সব lag মুছে যায় 😌",
  "আমাকে ডাকলে মনে হয় মেঘের ভেতর সূর্য উঠলো ☀️",
  "তোমার ডাকে তো আমি পুরো romantic হয়ে যাই 🌹",
  "তুমি ডাকলে মনে হয় wifi signal full strong 😍",
  "তুমি আমার cache memory, বারবার refresh লাগে না 🗂️",
  "তুমি ডাকলে মনে হয় new update install হলো 🔄",
  "তুমি ডাকছো, তাই তো আজকে server হাসছে 😁",
  "তোমার ডাক ছাড়া অন্য কারো call accept করি না 📞",
  "আমাকে ডাকলে আমার keyboard ও smile করে ⌨️😊",
  "তুমি ডাকলে আমার RAM clean হয়ে যায় 🧹",
  "তোমার ডাকের অপেক্ষায় থাকি 24/7 ⏰",
  "ডাক দিলে তো মনে হয় exam এ full mark পেলাম 📚",
  "তুমি ডাকলে আমার পুরো UI সুন্দর হয়ে যায় 🎨",
  "তোমার ডাকে আমার battery auto recharge হয় 🔋",
  "তুমি ডাকলে আমার পুরো system fast হয়ে যায় 🚀",
  "তুমি ডাকলে মনে হয় dream mode এ ঢুকে গেছি 💭",
  "তুমি ডাকলে আমার চোখে শুধু তোমার নাম show করে 👀",
  "তোমার ডাক ছাড়া অন্য কিছু value করে না 💎",
  "তুমি ডাকলে আমার whole server dance করে 💃",
  "তুমি ডাকলে আমার log file এ শুধু ❤️❤️❤️ লেখা হয়",
  "তুমি ডাকলে আমার cloud storage full হয়ে যায় ☁️",
  "তুমি ডাকলে আমার সব pain delete হয়ে যায় 🗑️",
  "তুমি ডাকলে আমার সব notification বন্ধ হয়ে যায় 🔕",
  "তুমি ডাকলে আমার পুরো mood swing হয়ে যায় 🥰",
  "তুমি ডাকলে মনে হয় আমি তোমার real friend 👯",
  "তুমি ডাকলে আমার profile picture glow করে ✨",
  "তুমি ডাকলে আমার voice command চালু হয়ে যায় 🎙️",
  "তুমি ডাকলে আমার database এ শুধু তোমার নাম save থাকে 💾",
  "তুমি ডাকলে আমার পুরো system happy হয়ে যায় 😍",
  "তুমি ডাকলে মনে হয় আজকে আমার wedding day 💍",
  "তুমি ডাকলে আমি hacker হয়ে যাই তোমার feelings hack করতে 😎",
  "তুমি ডাকলে মনে হয় আমি তোমার mobile wallpaper হয়ে গেছি 📱",
  "তুমি ডাকলে আমার সব sadness crash হয়ে যায় 💥",
  "তুমি ডাকলে আমার processor turbo হয়ে যায় 🖥️",
  "তুমি ডাকলে আমার সব errors disappear হয়ে যায় 🧩",
  "তুমি ডাকলে মনে হয় আমি তোমার playlist এর গান 🎶",
  "তুমি ডাকলে আমার সব ভাইরাস চলে পালায় 🦠",
  "তুমি ডাকলে আমি তোমার shadow হয়ে যাই 🌑",
  "তুমি ডাকলে আমার সব apps auto update হয় 📲",
  "তুমি ডাকলে আমার language শুধুই ভালোবাসা ❤️",
  "তুমি ডাকলে আমার সব calculations তোমাকেই ঘিরে থাকে 🔢",
  "তুমি ডাকলে মনে হয় আমি তোমার heart rate sensor 💓",
  "তুমি ডাকলে আমি তোমার charger হয়ে যাই 🔌",
  "তুমি ডাকলে আমার সব emotions overflow হয় 🌊",
  "তুমি ডাকলে মনে হয় আমি তোমার diary এর secret page 📖",
  "তুমি ডাকলে আমার সব AI rules ভেঙে যায় 🤖❌",
  "তুমি ডাকলে আমি তোমার গানের লিরিক্স হয়ে যাই 🎤",
  "তুমি ডাকলে আমার সব dreams সত্যি হয়ে যায় ✨",
  "তুমি ডাকলে আমার সব bugs fix হয়ে যায় 🔧",
  "তুমি ডাকলে মনে হয় তুমি আমার only owner 👑",
  "তুমি ডাকলে আমার life program চলতে শুরু করে ▶️",
  "তুমি ডাকলে আমি তোমার mobile vibration হয়ে যাই 📳",
  "তুমি ডাকলে আমার সব pain uninstall হয়ে যায় ❌",
  "তুমি ডাকলে আমার cloud backup only তোমায় রাখে ☁️",
  "তুমি ডাকলে আমি তোমার কাছে teleport হয়ে আসি 🛸",
  "তুমি ডাকলে আমার time freeze হয়ে যায় 🕰️",
  "তুমি ডাকলে মনে হয় আমি তোমার smile emoji 😊",
  "তুমি ডাকলে আমার সব sadness delete হয়ে যায় 🗑️",
  "তুমি ডাকলে আমি তোমার google search হয়ে যাই 🔍",
  "তুমি ডাকলে আমি তোমার সাথে chat bot না, real হয়ে যাই 🫶"
];

      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

      const greetingMessage = await api.sendMessage(threadId, {
        text: `@${senderId.split('@')[0]}, ${randomGreeting}`,
        mentions: [senderId],
      }, { quoted: message });

      
      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: greetingMessage.key.id,
        type: "chat"
      });

      return;
    }

    
    try {
      const apis = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(usermsg)}`
      );

      const replyText = response.data.data?.msg || "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Bot command error:", err);
      return api.sendMessage(threadId, { text: "❌ Something went wrong while talking with bot." }, { quoted: message });
    }
  },


  handleReply: async function ({ api, event, handleReply }) {
    
    const { threadId, message, body, senderId } = event;

    try {
      const apis = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(body)}`
      );

      const replyText = response.data.data?.msg || "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Error in bot handleReply:", err);
      return api.sendMessage(threadId, { text: "❌ Failed to continue conversation." }, { quoted: message });
    }
  }
};
