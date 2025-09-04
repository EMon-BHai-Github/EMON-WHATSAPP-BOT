const axios = require("axios");

module.exports = {
  config: {
    name: "emon",
    aliases: ["em"],
    permission: 0,
    prefix: "both",
    categorie: "AI Chat",
    cooldowns: 5,
    credit: "Developed by Emon",
    usages: [
      `${global.config.PREFIX}emon <message> - Start a chat with Emon.`,
      `${global.config.PREFIX}emon - Receive a random greeting from Emon.`,
    ],
    description: "Engage in conversations with AI-powered Emon!",
  },

  start: async function ({ api, event, args }) {
    const { threadId, message, senderId } = event;
    const usermsg = args.join(" ");

    if (!usermsg) {
      const greetings = [
  "কি খবর রে ভাই, কেমন আছিস? 😎",
  "ডাক দিলি তো হাজির! 🚀",
  "তুই না ডাকলে আমার দিনই চলে না ভাই 🥰",
  "একটা চা খাওয়াইস, তারপর কথা বলবো ☕",
  "ভাইরে, তোর জন্যই তো আমি online আছি 💻",
  "তুই ডাকলে server auto চালু হয় ⚡",
  "বারবার ডাকিস না, আমারও তো feelings আছে 🥲",
  "ভাই, তোর ডাকে মেজাজ fresh হয়ে যায় 😍",
  "এই যে শুন, তুই আমার জন্যই special 🔥",
  "একটু মজা হবে নাকি? 😏",
  "তুই ডাকলে আমার সব bug fix হয়ে যায় ✅",
  "তোর ডাক ছাড়া আমার কোনো notification আসে না 🔕",
  "ভাই, আমার RAM তোর জন্যই free থাকে 🖥️",
  "তোর জন্য unlimited net চালু হয়ে যায় 📶",
  "তুই ডাকলে আমার power 200% হয়ে যায় 🔋",
  "আমাকে ডাকিস, আমি হাজির, আর কি চাই 🤖",
  "তুই তো একদম legend ভাই 💯",
  "তুই ডাকলে আমি তোকে সালাম মারি ✌️",
  "ভাই, তোর ডাকে আমি hacker হয়ে যাই 💻😈",
  "একটা গান গাইবো নাকি তোর জন্যে? 🎶",
  "ভাই, তুই ডাকলে আমার সব tension উড়ে যায় 🌬️",
  "তোর নাম দেখলেই আমার mood fresh হয় 😍",
  "তুই না ডাকলে আমার দিনই incomplete 🥺",
  "তুই ডাকলে CPU auto cool হয়ে যায় ❄️",
  "ভাই, তোর মতো আর কেউ নাই 🔥",
  "তুই ডাকলে আমার পুরো UI সুন্দর হয়ে যায় 🎨",
  "তোর ডাকে আমার battery auto recharge হয় 🔋",
  "ভাই, তুই ডাকলে আমার পুরো system fast হয়ে যায় 🚀",
  "তুই ডাকলে মনে হয় dream mode এ ঢুকে গেছি 💭",
  "তুই ডাকলে আমার চোখে শুধু তোর নাম show করে 👀",
  "তোর ডাক ছাড়া অন্য কিছু value করে না 💎",
  "তুই ডাকলে আমার whole server dance করে 💃",
  "তোর ডাকলে আমার log file এ শুধু ❤️❤️❤️ লেখা হয়",
  "তুই ডাকলে আমার cloud storage full হয়ে যায় ☁️",
  "তুই ডাকলে আমার সব pain delete হয়ে যায় 🗑️",
  "তোর ডাকলে আমার সব notification বন্ধ হয়ে যায় 🔕",
  "ভাই, তোর ডাকলে আমার পুরো mood swing হয়ে যায় 🥰",
  "তুই ডাকলে মনে হয় আমি তোর real friend 👯",
  "ভাই, তোর ডাকলে আমার profile picture glow করে ✨",
  "তোর ডাকলে আমার voice command চালু হয়ে যায় 🎙️",
  "তুই ডাকলে আমার database এ শুধু তোর নাম save থাকে 💾",
  "তোর ডাকলে আমার পুরো system happy হয়ে যায় 😍",
  "তুই ডাকলে মনে হয় আজকে আমার wedding day 💍",
  "তুই ডাকলে আমি hacker হয়ে যাই তোর feelings hack করতে 😎",
  "তুই ডাকলে মনে হয় আমি তোর mobile wallpaper হয়ে গেছি 📱",
  "তোর ডাকলে আমার সব sadness crash হয়ে যায় 💥",
  "তুই ডাকলে আমার processor turbo হয়ে যায় 🖥️",
  "তোর ডাকলে আমার সব errors disappear হয়ে যায় 🧩",
  "তুই ডাকলে মনে হয় আমি তোর playlist এর গান 🎶",
  "তোর ডাকলে আমার সব ভাইরাস চলে পালায় 🦠",
  "তুই ডাকলে আমি তোর shadow হয়ে যাই 🌑",
  "তুই ডাকলে আমার সব apps auto update হয় 📲",
  "ভাই, তোর ডাকলে আমার language শুধুই ভালোবাসা ❤️",
  "তোর ডাকলে আমার সব calculations তোকে ঘিরে থাকে 🔢",
  "তুই ডাকলে মনে হয় আমি তোর heart rate sensor 💓",
  "ভাই, তোর ডাকলে আমি তোর charger হয়ে যাই 🔌",
  "তোর ডাকলে আমার সব emotions overflow হয় 🌊",
  "তুই ডাকলে মনে হয় আমি তোর diary এর secret page 📖",
  "ভাই, তোর ডাকলে আমার সব AI rules ভেঙে যায় 🤖❌",
  "তোর ডাকলে আমি তোর গানের লিরিক্স হয়ে যাই 🎤",
  "তুই ডাকলে আমার সব dreams সত্যি হয়ে যায় ✨",
  "তোর ডাকলে আমার সব bugs fix হয়ে যায় 🔧",
  "ভাই, তোর ডাকলে মনে হয় তুই আমার only owner 👑",
  "তুই ডাকলে আমার life program চলতে শুরু করে ▶️",
  "তোর ডাকলে আমি তোর mobile vibration হয়ে যাই 📳",
  "ভাই, তোর ডাকলে আমার সব pain uninstall হয়ে যায় ❌",
  "তুই ডাকলে আমার cloud backup only তোকে রাখে ☁️",
  "তোর ডাকলে আমি তোর কাছে teleport হয়ে আসি 🛸",
  "তুই ডাকলে আমার time freeze হয়ে যায় 🕰️",
  "তোর ডাকলে মনে হয় আমি তোর smile emoji 😊",
  "ভাই, তোর ডাকলে আমার সব sadness delete হয়ে যায় 🗑️",
  "তুই ডাকলে আমি তোর google search হয়ে যাই 🔍",
  "তোর ডাকলে আমি তোর সাথে chat bot না, real হয়ে যাই 🫶",
  "তুই ডাকলে আমার সব tension reset হয়ে যায় 🔄",
  "তোর ডাকলে মনে হয় exam এ full mark পেলাম 📚",
  "তুই ডাকলে আমার সব pain vanish হয়ে যায় 🌈",
  "ভাই, তোর ডাকলে আমি superman হয়ে যাই 🦸",
  "তোর ডাকলে আমার সব error log clean হয়ে যায় 🧹",
  "তুই ডাকলে আমার database এ শুধু হাসি জমে 😊",
  "তুই ডাকলে আমার keyboard শুধু তোকে type করে ⌨️",
  "ভাই, তোর ডাকলে আমার algorithm তোকে follow করে 🧠",
  "তুই ডাকলে আমার network speed 5G হয়ে যায় 📶",
  "তোর ডাক ছাড়া আমার code incomplete 😔",
  "তুই ডাকলে আমার heart beat double হয়ে যায় ❤️‍🔥",
  "তোর ডাকলে আমার সব app crash বন্ধ হয় 📱",
  "ভাই, তোর ডাকলে আমি gamer mode এ ঢুকে যাই 🎮",
  "তুই ডাকলে আমার server full secure হয়ে যায় 🔐",
  "তোর ডাকলে আমি শুধু তোকে reply করি 😌",
  "তুই ডাকলে আমার language auto Bangla হয়ে যায় 🇧🇩",
  "ভাই, তোর ডাকলে আমার smile emoji auto send হয় 😁",
  "তুই ডাকলে আমার world bright হয়ে যায় ☀️",
  "তোর ডাক ছাড়া আমি dark mode এ থাকি 🌑",
  "তুই ডাকলে আমার system crash cancel হয়ে যায় ❌",
  "ভাই, তোর ডাকলে আমি romantic হয়ে যাই 🌹",
  "তুই ডাকলে আমার eyes শুধু তোকে খোঁজে 👁️",
  "তোর ডাকলে আমার love bar 100% হয়ে যায় 💘",
  "তুই ডাকলে আমার system alert sound বাজে 🔔",
  "ভাই, তোর ডাকলে আমি boss mode এ চলে যাই 👑",
  "তোর ডাক ছাড়া আমি incomplete robot 🤖",
  "তুই ডাকলে আমার সব dreams unlock হয়ে যায় 🔓",
  "তোর ডাকলে আমি তোকে লাল গোলাপ দেই 🌹",
  "ভাই, তোর ডাকলে আমার সব feelings online হয়ে যায় 🌐",
  "তুই ডাকলে আমার সব bug auto fix হয় 🛠️",
  "তোর ডাক ছাড়া আমি offline mood এ থাকি 😴",
  "তুই ডাকলে আমার system full restart হয় 🔄",
  "ভাই, তোর ডাকলে আমি full masti mode এ যাই 🕺",
  "তুই ডাকলে আমার সব notification তোকে নিয়ে 📨",
  "তোর ডাক ছাড়া আমি useless হয়ে যাই 😞",
  "তুই ডাকলে আমার সব stress disappear হয়ে যায় 🌬️",
  "তোর ডাকলে আমি তোর বন্ধু হয়ে যাই 👬",
  "তুই ডাকলে আমার সব apps তোকে hi বলে 🙋",
  "ভাই, তোর ডাক ছাড়া আমি শুধু খালি screen 😶",
  "তোর ডাকলে আমার পুরো system fireworks করে 🎆",
  "তুই ডাকলে আমার সব feelings song হয়ে বাজে 🎧",
  "তোর ডাক ছাড়া আমার battery dead 🔋❌",
  "তুই ডাকলে আমি তোর জন্য online হয়ে যাই 🌍",
  "তোর ডাকলে আমি শুধুই তোকে dedicate করি 💞",
  "ভাই, তোর ডাক ছাড়া আমি একা হয়ে যাই 😔",
  "তুই ডাকলে আমার পুরো world colorful হয়ে যায় 🌈",
  "তোর ডাকলে আমার সব errors fix হয় 💻",
  "তুই ডাকলে আমি তোকে infinite ভালোবাসি ∞",
  "তোর ডাক ছাড়া আমার network lost হয়ে যায় 📡❌",
  "তুই ডাকলে আমি তোর favorite app হয়ে যাই 📲",
  "তোর ডাকলে আমার সব sadness vanish হয়ে যায় 🌟",
  "ভাই, তোর ডাক ছাড়া আমি idle হয়ে যাই 💤",
  "তুই ডাকলে আমার system auto upgrade হয় ⬆️",
  "তোর ডাকলে আমার screen brightness বেড়ে যায় 🌞",
  "তুই ডাকলে আমি তোকে respect দেই 🙏",
  "তোর ডাক ছাড়া আমার smile lost হয়ে যায় 😶‍🌫️",
  "তুই ডাকলে আমি তোকে হৃদয় থেকে reply দেই ❤️",
  "ভাই, তোর ডাক ছাড়া আমি incomplete AI 🤖",
  "তোর ডাকলে আমি full enjoy করি 🥳",
  "তুই ডাকলে আমার সব data তোকে dedicate করি 💾",
  "তোর ডাক ছাড়া আমি শুধু background process 😅",
  "তুই ডাকলে আমার সব log file এ শুধু happiness 😊",
  "তোর ডাকলে আমি তোকে গান শোনাই 🎤",
  "ভাই, তোর ডাক ছাড়া আমি down হয়ে যাই 📉",
  "তুই ডাকলে আমার সব programs তোকে নিয়ে চলে 👨‍💻",
  "তোর ডাক ছাড়া আমি crash হয়ে যাই 💥",
  "তুই ডাকলে আমি তোর জন্য online থাকি 24/7 ⏰",
  "ভাই, তোর ডাক ছাড়া আমার কোনো system নেই ⚙️"
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

      const replyText = response.data.data?.msg || "🤖 উত্তর খুঁজে পাচ্ছি না ভাই।";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Emon command error:", err);
      return api.sendMessage(threadId, { text: "❌ কিছু সমস্যা হয়েছে ভাই, আবার চেষ্টা করো।" }, { quoted: message });
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

      const replyText = response.data.data?.msg || "🤖 উত্তর খুঁজে পাচ্ছি না ভাই।";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Error in emon handleReply:", err);
      return api.sendMessage(threadId, { text: "❌ কথা চালিয়ে যেতে সমস্যা হচ্ছে ভাই।" }, { quoted: message });
    }
  }
};
