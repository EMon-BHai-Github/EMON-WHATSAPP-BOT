module.exports = {
  event: 'add',
  handle: async ({ api, event }) => {
    const newMembers = event.participants;
    const groupInfo = await api.groupMetadata(event.id);
    const groupName = groupInfo.subject;
    const totalMembers = groupInfo.participants.length;

    // ২০+ stylish template
    const templates = [
      (username, total) => `
━━━━━━━━━━━━━━━━━━
🎉✨ Welcome To ${groupName} ✨🎉
━━━━━━━━━━━━━━━━━━
👤 Member: ${username}
👥 Total Members: ${total}
💫 "A new star has joined our galaxy 🌌" 
Stay active, respect everyone & shine bright! 🌟`,

      (username, total) => `
◢◤◢◤◢◤◢◤◢◤
💖 ${groupName} 💖
◢◤◢◤◢◤◢◤◢◤
🥳 Hey ${username},
Welcome to our lovely family 💕
👥 Now we are *${total}* strong 💪
📌 Rule: Be kind & Enjoy 💫`,

      (username, total) => `
🌺 ━━━━━━━━━━━━━━━━━━ 🌺
✨ ${groupName} ✨
🌺 ━━━━━━━━━━━━━━━━━━ 🌺
👤 ${username}, স্বাগতম আমাদের গ্রুপে 🌸
👥 আমরা এখন ${total} Members 
💬 "হাসুন, খেলুন আর Enjoy করুন!"`,

      (username, total) => `
💎━━━━━━━━━━━━━━━━━━💎
⚡ ${groupName} ⚡
💎━━━━━━━━━━━━━━━━━━💎
👋 ${username} ভাই/আপু, স্বাগতম 🚀
👥 Family এখন: ${total} সদস্য 💞
🎯 Rule: Active থাকুন, Respect করুন 🙏`,

      (username, total) => `
🔥🔥🔥🔥🔥🔥🔥🔥🔥
${username} এসে গেছে! 🥳
🔥🔥🔥🔥🔥🔥🔥🔥🔥
🚀 Welcome to ${groupName}
👥 মোট সদস্য: ${total}  
⚡ আসুন মজা করি, family vibe উপভোগ করি 🎶`,

      (username, total) => `
💚 ${username}, Welcome! 💚
🏡 গ্রুপ: ${groupName}
👥 ${total} জনের ভালোবাসার আড্ডা ❤️
👉 Rule: Active থাকুন, respect করুন 🙌`,

      (username, total) => `
🌸 ${username} 🌸
স্বাগতম আমাদের ${groupName}-এ 💞
👥 Family এখন ${total} strong 💪
🌼 "আসুন একসাথে হাসি, শিখি, Enjoy করি!"`,

      (username, total) => `
✨ ${groupName} ✨
🥳 Hey ${username},
তুমি এলে গ্রুপ আরও রঙিন হলো 🎨
👥 ${total} জন একসাথে এক পরিবার 💕
📌 Rule: মজা করুন, ঝগড়া নয় ❌`,

      (username, total) => `
━━━━━━━━━━━━━━━
🦋 ${username} Joined 🦋
━━━━━━━━━━━━━━━
💎 ${groupName} Family এখন ${total} strong ✨
💌 "Stay Positive, Spread Love 💖"`,

      (username, total) => `
🎊 ${username} ভাই/আপু আসছে 🎊
🚀 Welcome to ${groupName}
👥 Group Size: ${total}
🔥 Rule: Be Respectful & Be Active`,

      (username, total) => `
🖤 ${groupName} 🖤
👑 ${username} এসে গেছে 🎉
👥 Total: ${total}
🌟 "হাসুন, ভালো থাকুন, Enjoy করুন"`,

      (username, total) => `
💎 ${username} 💎
স্বাগতম ${groupName}-এ ✨
👥 Family: ${total}
⚡ Life is better together 🌈`,

      (username, total) => `
🌹 ${username}, Welcome 🌹
🎊 ${groupName} is now ${total} strong
💌 Rule: Respect Everyone, Spread Smile 😊`,

      (username, total) => `
🎤 মাইকে ঘোষণা: ${username} জয়েন করেছে! 🎶
🚀 ${groupName} Family: ${total}
🎯 Rule: Only Fun, No Drama 🔥`,

      (username, total) => `
💫 Welcome ${username}! 💫
🏠 ${groupName} Family: ${total}
🌼 "ভালোবাসা ভাগ করলে বাড়ে 💕"`,

      (username, total) => `
🎉 ${username} is Here 🎉
👥 Total Members: ${total}
📌 Group: ${groupName}
🚀 "Stay Strong, Stay Happy"`,

      (username, total) => `
⚡ ${username} 🚀
Joined ${groupName} 
👥 ${total} জন এখন এক পরিবার  
🌟 "ভালোবাসাই সবার আগে 💖"`,

      (username, total) => `
🌈 ${groupName} 🌈
👤 ${username}, Welcome 🎊
👥 Total: ${total}
💬 Rule: Spread Positivity ✨`,

      (username, total) => `
🎶 ${username}, Welcome 🎶
🚀 ${groupName} Family ${total} strong
💌 "Together আমরা অজেয় 💪"`,

      (username, total) => `
🌟 ${username} আসছে 🌟
🏡 Group: ${groupName}
👥 Total: ${total}
💖 Rule: Respect, Love, Fun`,

      (username, total) => `
👑 ${username} 👑
Welcome to ${groupName}
👥 Members: ${total}
✨ "Enjoy Every Moment 🌸"`,

      (username, total) => `
📢 ${username} ভাই/আপু জয়েন করেছে!
🎊 ${groupName} Family ${total} strong
🔥 "আসুন সবাই মিলে পরিবার হই" 💖`
    ];

    for (const member of newMembers) {
      let profilePicUrl;
      try {
        profilePicUrl = await api.profilePictureUrl(member, 'image');
      } catch (error) {
        profilePicUrl = null;
      }

      const username = `@${member.split('@')[0]}`;
      // Random template select
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      const welcomeMessage = randomTemplate(username, totalMembers);

      if (profilePicUrl) {
        await api.sendMessage(event.id, {
          image: { url: profilePicUrl },
          caption: welcomeMessage,
          mentions: [member]
        });
      } else {
        await api.sendMessage(event.id, {
          text: welcomeMessage,
          mentions: [member]
        });
      }
    }
  }
};
