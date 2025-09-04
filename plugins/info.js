const os = require('os');

module.exports = {
  config: {
    name: 'info',
    aliases: ['about', 'admininfo', 'serverinfo'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    credit: 'Developed by Emon',
    usages: [`${global.config.PREFIX}info - Show admin and server information.`],
  },

  start: async ({ event, api }) => {
    try {
      const uptimeSeconds = process.uptime();
      const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

      const infoMessage = `
◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☠️ আ্ঁমা্ঁর্ঁ প্ঁরি্ঁচ্ঁয়্ঁ ☠️
◥◢▔▔▔▔⭕▔▔▔▔◣◤   
   🌸 Assalamualaikum 🌸

👤 ব্যক্তিগত তথ্য  
━━━━━━━━━━━━━━━━━━━
নাম             : ইমন 🥰  
ধর্ম              : ইসলাম ❤️  
বাড়ি             : মাদারিপুর 😌  
বর্তমান ঠিকানা   : মালয়েশিয়া 🇲🇾  
পেশা            : মালায়সিয়ান প্রবাসি 😁  
বয়স             : ২১ 🤭  
উচ্চতা          : জানিনা 😔  
ওজন            : জানিনা 😔  
রক্ত             : O+ 😔  
গায়ের রং      : কালো 🤗  
বেয়াদবি        : করি না ☺️  
ধন সম্পদ      : নাই ☺️  
শখ              : নাই 😊  
ভালোবাসা     : একা 😊  

📞 যোগাযোগ  
━━━━━━━━━━━━━━━━━━━
📱 Number    : +8801309991724  
📧 Gmail     : barisahmedemon@gmail.com  
💬 WhatsApp  : wa.me/+8801309991724  
🌐 Facebook  : facebook.com/barisahmedemon  
✈️ Telegram  : t.me/+8801309991724  

     🥀🥀🥀 ধন্যবাদ 😍😍😍

━━━━━━━━━━━━━━━━━━━
🖥️ 𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨
━━━━━━━━━━━━━━━━━━━
• Platform        : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
━━━━━━━━━━━━━━━━━━━
🔰 By: 𝐄𝐦𝐨𝐧
`;

      await api.sendMessage(
        event.threadId,
        {
          image: { url: "https://i.postimg.cc/SNm9B2p1/IMG-20250902-WA0048.jpg" },
          caption: infoMessage
        },
        { quoted: event.message }
      );
    } catch (error) {
      console.error(error);
      await api.sendMessage(event.threadId, '❌ একটি ত্রুটি ঘটেছে।', { quoted: event.message });
    }
  },
};
