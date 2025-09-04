module.exports = {
  event: 'remove',
  handle: async ({ api, event }) => {
    const removedMembers = event.participants;

    // ২০+ Stylish Goodbye Template
    const templates = [
      (username) => `
━━━━━━━━━━━━━━━
👋 Goodbye ${username} 
💔 We will miss you from this family!
━━━━━━━━━━━━━━━`,

      (username) => `
😢 ${username} has left the chat...
💬 Group won’t feel the same without you 💖`,

      (username) => `
━━━━━━━━━━━━
🌹 Farewell, ${username} 🌹
💫 Stay happy & blessed always ✨
━━━━━━━━━━━━`,

      (username) => `
📢 Announcement: ${username} left us 😭
💔 "Good friends never truly leave, they stay in heart" 💕`,

      (username) => `
💖 ${username}, Goodbye 💖
✨ May your journey be full of happiness 🌈`,

      (username) => `
🚪 ${username} walked out...
👋 Best wishes for the future 🙏`,

      (username) => `
😞 ${username} left the group
💌 "Memories will stay forever with us" ✨`,

      (username) => `
━━━━━━━━━━━━━━━
💔 ${username} is no longer with us 💔
We hope to see you again someday 👋
━━━━━━━━━━━━━━━`,

      (username) => `
🌟 ${username}, Goodbye 🌟
Stay safe, stay strong, always shine ✨`,

      (username) => `
😢 ${username}, leaving hurts 💔
But your memories remain in ${event.id}`,

      (username) => `
💌 ${username} left 💌
🕊️ Wishing peace & love on your way 🙏`,

      (username) => `
🎭 ${username} exited 🎭
But this stage will always remember you 💕`,

      (username) => `
👋 ${username}, goodbye!
🎉 May life bless you with new adventures 🌎`,

      (username) => `
⚡ ${username} is gone ⚡
🌸 Stay positive, stay blessed ✨`,

      (username) => `
😭 ${username} left
💖 "A chapter ends, but story continues..."`,

      (username) => `
🍂 Goodbye ${username} 🍂
🌟 Thank you for being part of us 💕`,

      (username) => `
🚀 ${username}, you left the ship 🛳️
👋 Bon Voyage & Good Luck!`,

      (username) => `
🖤 ${username}, left our family 🖤
💌 Always stay in our hearts 💕`,

      (username) => `
🎤 Mic Drop: ${username} left 🎶
💫 But echo of love remains ✨`,

      (username) => `
🌈 Farewell ${username} 🌈
💞 Keep smiling, keep shining always 💖`
    ];

    for (const member of removedMembers) {
      const username = `@${member.split('@')[0]}`;
      const randomTemplate =
        templates[Math.floor(Math.random() * templates.length)];
      const goodbyeMessage = randomTemplate(username);

      await api.sendMessage(event.id, {
        text: goodbyeMessage,
        mentions: [member]
      });
    }
  }
};
