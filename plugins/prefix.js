module.exports = {
  config: {
    name: "prefix",
    aliases: ["currentprefix"],
    permission: 0,
    prefix: 'both',
    categorie: "Utility",
    credit: "Developed by EMon-BHai",
    description: "Displays the bot's current prefix with style.",
    usages: [
      `${global.config.PREFIX}prefix - Shows the current bot prefix.`,
      `${global.config.PREFIX}currentprefix - Alias for displaying the bot prefix.`,
    ],
  },

  start: async ({ event, api }) => {
    const currentPrefix = global.config.PREFIX;

    const message = 
`╔════════ ❖ ✦ ❖ ════════╗
       🤖 *BOT PREFIX INFO* 🤖
╚════════ ❖ ✦ ❖ ════════╝

🔰 *Current Prefix:* \`${currentPrefix}\`

📌 *Example Commands:*
   ${currentPrefix}help   → Show help menu
   ${currentPrefix}info   → Bot information
   ${currentPrefix}ping   → Check speed

💡 *Tip:* You can use either symbol or word depending on bot setup!
━━━━━━━━━━━━━━━━━━━━━
✨ Developed with ❤️ by *EMon-BHai*`;

    await api.sendMessage(event.threadId, { text: message });
  },
};
