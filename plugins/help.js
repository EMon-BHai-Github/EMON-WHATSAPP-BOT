const axios = require("axios");

module.exports = {
  config: {
    name: 'help',
    aliases: ['commands', 'menu', 'cmd', 'হেল্প'],
    permission: 0,
    prefix: true,
    description: 'সমস্ত কমান্ড সুন্দরভাবে দেখাবে ক্যাটাগরি অনুযায়ী।',
    category: 'Utility',
    credit: 'Styled in Bangla by Emon',
    usages: ['help', 'help [কমান্ড নাম]'],
  },

  start: async ({ event, api, args, loadcmd }) => {
    const { threadId } = event;

    const getAllCommands = () => loadcmd.map((plugin) => plugin.config);
    const commands = getAllCommands();

    // একীভূত ক্যাটাগরি
    const mergedCategories = {
      "🛡️ বট কন্ট্রোল": ["Administration", "Admin", "Owner", "Bot Management", "System"],
      "🛠️ ইউটিলিটি": ["Utility", "Utilities", "system"],
      "🎬 মিডিয়া": ["Media", "media", "video", "image"],
      "👥 গ্রুপ ম্যানেজমেন্ট": ["Group Management", "group"],
      "🤖 এআই কমান্ড": ["AI", "AI Chat"],
      "🎉 ফান": ["Fun", "Games", "greetings"],
      "🔧 টুলস": ["Tools", "Information"]
    };

    const categories = {};

    commands.forEach((cmd) => {
      let cat = cmd.category || cmd.categorie || cmd.categories || "📦 আনক্যাটাগরাইজড";

      for (const merged in mergedCategories) {
        if (mergedCategories[merged].includes(cat)) {
          cat = merged;
          break;
        }
      }

      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(cmd);
    });

    // যদি নির্দিষ্ট কোনো কমান্ড চাই
    if (args[0]) {
      const command = commands.find((cmd) => cmd.name.toLowerCase() === args[0].toLowerCase());
      if (command) {
        await api.sendMessage(threadId, {
          text: `╭━━━━━〔 *📖 কমান্ড তথ্য* 〕━━━━━╮
┃ 🔹 নাম: ${command.name}
┃ 🔹 ডাকনাম: ${command.aliases.join(", ") || "নেই"}
┃ 🔹 ভার্সন: ${command.version || "1.0.0"}
┃ 🔹 বিবরণ: ${command.description || "কোনো বর্ণনা নেই"}
┃ 🔹 ব্যবহার: ${command.usage ? command.usage : command.usages.join("\n┃   ")}
┃ 🔹 পারমিশন: ${command.permission}
┃ 🔹 ক্যাটাগরি: ${command.category || "আনক্যাটাগরাইজড"}
┃ 🔹 ক্রেডিট: ${command.credits || command.credit || "Emon"}
╰━━━━━━━━━━━━━━━━━━━━━━━╯`,
        });
      } else {
        await api.sendMessage(threadId, { text: `⚠️ "${args[0]}" নামে কোনো কমান্ড খুঁজে পাওয়া যায়নি!` });
      }
      return;
    }

    // Main UI (stylish header)
    let responseText = `
╔══════════════════════╗
   ✨ 『 *${global.config.botName || 'বাংলা WhatsApp Bot'}* 』 ✨
╚══════════════════════╝

👑 মালিক: ${global.config.botOwner || 'অজানা মালিক'}
🔑 Prefix: ${global.config.PREFIX || '.'}

━━━━━━━━━━━━━━━━━━━━━━━
💡 *Type:* ${global.config.PREFIX}help [কমান্ড নাম]
━━━━━━━━━━━━━━━━━━━━━━━
`;

    // ক্যাটাগরি অনুযায়ী সাজানো
    for (const category in categories) {
      const categoryCommands = categories[category]
        .map(cmd => `   ⤷ ${global.config.PREFIX}${cmd.name}`)
        .join("\n");

      responseText += `

╔═✦ ${category} ✦═╗
${categoryCommands}
╚══════════════════════╝
`;
    }

    try {
      // যদি helpPic সেট করা থাকে
      if (global.config.helpPic) {
        const response = await axios.get(global.config.helpPic, { responseType: 'stream' });

        if (global.config.helpPic.endsWith(".mp4")) {
          await api.sendMessage(threadId, {
            video: { stream: response.data },
            caption: responseText
          });
        } else if (global.config.helpPic.endsWith(".gif")) {
          await api.sendMessage(threadId, {
            gif: { stream: response.data },
            caption: responseText
          });
        } else {
          await api.sendMessage(threadId, {
            image: { stream: response.data },
            caption: responseText
          });
        }
      } else {
        await api.sendMessage(threadId, { text: responseText });
      }
    } catch (error) {
      console.error('❌ মিডিয়া লোড করতে সমস্যা:', error.message);
      await api.sendMessage(threadId, { text: responseText });
    }
  },
};
