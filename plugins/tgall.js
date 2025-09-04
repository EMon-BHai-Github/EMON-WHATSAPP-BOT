module.exports = {
    config: {
        name: 'tall',
        aliases: ['tgall', 'every1'],
        permission: 3,
        prefix: true,
        description: 'Mentions all members of a group with stylish hacker vibes.',
        categories: 'group',
        usages: [`${global.config.PREFIX}tagall [optional message]`],
        credit: 'Developed by Emon'
    },

    start: async ({ event, api, args }) => {
        const { threadId, message } = event;

        const groupMetadata = await api.groupMetadata(threadId);
        const participants = groupMetadata.participants || [];

        if (participants.length === 0) {
            return await api.sendMessage(threadId, { 
                text: '⚠️ No participants found in this group.' 
            });
        }

        // 🔥 Stylish greetings list (you can add 150+ here)
        const greetings = [
            "👋 Hey everyone! Ready for some fun today?",
            "🌟 Hello legends! Keep shining bright!",
            "😎 Yo fam! Let’s make today awesome!",
            "🎉 Party mode ON! Who’s in?",
            "💖 Spread love, stay positive always!",
            "🔥 Attention hackers! Group alert 🚨",
            "🥳 Vibes check: FULL ENERGY!",
            "⚡ Let’s light up this chat together!",
            "🌈 Shine bright like the stars you are!",
            "🖤 Brotherhood forever, unity always!"
        ];

        // Random decoration emojis
        const decoEmojis = ["🔥","💎","⚡","🌟","✨","🎯","🖤","🎉","🌈","🥷","👑","🚀","💥"];

        // Pick message
        let customMsg = args.join(' ');
        if (!customMsg) {
            customMsg = greetings[Math.floor(Math.random() * greetings.length)];
        }

        // Stylish header
        let mentionText = "━━━━━━━━━━━━━━━━━━━\n";
        mentionText += "💀  𝗧𝗔𝗚 𝗔𝗟𝗟 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗 💀\n";
        mentionText += "━━━━━━━━━━━━━━━━━━━\n\n";
        mentionText += `✨ *${customMsg}* ✨\n\n`;

        let mentions = [];
        participants.forEach((participant, index) => {
            const emoji = decoEmojis[Math.floor(Math.random() * decoEmojis.length)];
            mentionText += `${emoji} ${index + 1}. @${participant.id.split('@')[0]}\n`;
            mentions.push(participant.id);
        });

        mentionText += `\n━━━━━━━━━━━━━━━━━━━\n`;
        mentionText += `🔰 By: 𝐄𝐦𝐨𝐧\n`;

        await api.sendMessage(threadId, {
            text: mentionText,
            mentions: mentions
        }, { quoted: message });
    }
};
