const os = require('os');

module.exports = {
  config: {
    name: 'info',
    aliases: ['about', 'admininfo', 'serverinfo'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    credit: 'Developed by Mohammad Nayan',
    usages: [`${global.config.PREFIX}info - Show admin and server information.`],
  },
  start: async ({ event, api, message }) => {
    try {
      const uptimeSeconds = process.uptime();
      const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

      const adminListText =
        global.config.admin.length > 0
          ? global.config.admin
              .map((id, i) => `${i + 1}. @${id.split('@')[0]}`)
              .join('\n')
          : 'No admins found.';

      const infoMessage = `
--------------------------------------------

╔══════════════════════════════════╗
       ✨ ＰＥＲＳＯＮＡＬ ＩＮＦＯ ✨
╚══════════════════════════════════╝
👤 𝙉𝙖𝙢𝙚        : 𝐄𝐌𝐎𝐍 𝐇𝐀𝐖𝐋𝐀𝐃𝐀𝐑  
🎭 𝙉𝙞𝙘𝙠𝙣𝙖𝙢𝙚    : 𝐄𝐌𝐨𝐧-𝐁𝐇𝐚𝐢  
🧑‍🦱 𝙂𝙚𝙣𝙙𝙚𝙧     : 𝑴𝒂𝒍𝒆  
🎂 𝘼𝙜𝙚         : 𝟐𝟑+  

╔══════════════════════════════════╗
     🕌 ＲＥＬＩＧＩＯＮ ＆ ＲＥＬＡＴＩＯＮＳＨＩＰ 🕌
╚══════════════════════════════════╝
☪️ 𝙍𝙚𝙡𝙞𝙜𝙞𝙤𝙣   : 𝐈𝐬𝐥𝐚𝐦  
💔 𝙎𝙩𝙖𝙩𝙪𝙨     : 𝑺𝒊𝒏𝒈𝒍𝒆  

╔══════════════════════════════════╗
          📍 ＡＤＤＲＥＳＳ 📍
╚══════════════════════════════════╝
🏠 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩  : 𝘿𝙝𝙖𝙠𝙖, 𝙈𝙖𝙙𝙖𝙧𝙞𝙥𝙪𝙧  
📌 𝘾𝙪𝙧𝙧𝙚𝙣𝙩    : 𝙈𝙖𝙙𝙖𝙧𝙞𝙥𝙪𝙧, 𝙆𝙖𝙡𝙞𝙠𝙞𝙣𝙞  

╔══════════════════════════════════╗
           💼 ＷＯＲＫ 💼
╚══════════════════════════════════╝
🌏 𝙅𝙤𝙗        : 𝙈𝙖𝙡𝙖𝙮𝙨𝙞𝙖  

╔══════════════════════════════════╗
          📱 ＣＯＮＴＡＣＴＳ 📱
╚══════════════════════════════════╝
📧 𝙂𝙢𝙖𝙞𝙡      : 𝙚𝙢𝙤𝙣𝙝𝙖𝙬𝙡𝙖𝙙𝙖𝙧311@gmail.com  
💬 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥   : wa.me/+881309991724  
📨 𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢   : t.me/@emonhowlader  

╔══════════════════════════════════╗
          📘 ＦＡＣＥＢＯＯＫ 📘
╚══════════════════════════════════╝
🔹 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝙉𝙖𝙢𝙚 : 𝐄𝐌𝐎𝐍 𝐇𝐀𝐖𝐋𝐀𝐃𝐀𝐑  
🔹 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝙇𝙞𝙣𝙠 : facebook.com/EMon.BHai.FACEBOOK


--------------------------------------------
\`\`\`
🖥️ Server Info:
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
\`\`\``;

      await api.sendMessage(
            event.threadId,
            { image: { url: "https://i.postimg.cc/2y9bTqv6/retouch-2025071913433217.jpg" }, caption: infoMessage || '' },
            { quoted: event.message }
          );;
    } catch (error) {
      console.error(error);
      await api.sendMessage(event.threadId, '❌ An error occurred while fetching info.', { quoted: event.message });
    }
  },
};
