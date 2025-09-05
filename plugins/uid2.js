module.exports = {
  config: {
    name: 'uid2',
    aliases: ['uidpp', 'id2'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    description: 'নিজের বা উল্লেখ/রিপ্লাই করা ইউজারের UID, নাম এবং প্রোফাইল পিকচার দেখায়।',
    usages: [
      `${global.config.PREFIX}uid2 - আপনার তথ্য দেখুন।`,
      `${global.config.PREFIX}uid2 @mention - উল্লেখ করা ইউজারের তথ্য দেখুন।`,
      `${global.config.PREFIX}uid2 (reply) - রিপ্লাই করা ইউজারের তথ্য দেখুন।`
    ],
    credit: 'Developed by Mohammad Nayan',
  },

  start: async ({ event, api }) => {
    try {
      let targetIds = [];

      // mentions handle
      const mentions = event.message?.extendedTextMessage?.contextInfo?.mentionedJid;
      if (mentions && mentions.length > 0) {
        targetIds = mentions;
      } 
      // reply handle
      else if (event.message?.extendedTextMessage?.contextInfo?.participant) {
        targetIds = [event.message.extendedTextMessage.contextInfo.participant];
      } 
      // default sender
      else {
        targetIds = [event.senderId];
      }

      for (let id of targetIds) {
        const uid = id.split('@')[0];

        // নাম fetch
        let userName = uid;
        try { userName = await api.getUserName(id); } catch(e){}

        // প্রোফাইল পিকচার fetch
        let profileUrl = null;
        try {
          const urls = await api.getProfilePictureUrls([id]);
          profileUrl = urls[id] && !urls[id].includes('Error') ? urls[id] : null;
        } catch(e){ profileUrl = null; }

        // Hacker-style Fancy ASCII Caption
        const caption = `
╔════════════════════╗
║ 🛡️  EMon UID CARD  🛡️ ║
╠════════════════════╣
║ 👤 নাম : ${userName}
║ 🆔 UID : @${uid}
╠════════════════════╣
║ 🚀 By EMon-BHai
╚════════════════════╝
`;

        if (profileUrl) {
          await api.sendMessage(event.threadId, {
            image: { url: profileUrl },
            caption: caption,
            mentions: [id]
          });
        } else {
          await api.sendMessage(event.threadId, {
            text: caption,
            mentions: [id]
          });
        }
      }

    } catch (error) {
      console.error("UID2 কমান্ডে সমস্যা:", error);
      await api.sendMessage(event.threadId, { 
        text: '⚠️ UID এবং প্রোফাইল পিকচার আনার সময় সমস্যা হয়েছে।' 
      }, { quoted: event.message });
    }
  }
};
