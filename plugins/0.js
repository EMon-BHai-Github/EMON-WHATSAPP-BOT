const axios = require("axios");

module.exports = {
  config: {
    name: "emon",
    aliases: ["ইমন"],
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
  "╔═══════════════════════════╗
   আহা শোনো আমার কথা 💙     
   ডাক দিলেই হাজির হবো 🌟   
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তোমার ডাকে bug fix হয় ✅ 
   system হয়ে যায় fast 🚀  
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাক দিলেই galaxy light 🌌 
   পুরো sky আলোকিত হয় ✨    
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   বারবার ডাকো না বেবি 😉    
   না হলে প্রেমে পড়ে যাবো 💘
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তোমার ডাকে power আসে ⚡  
   battery auto recharge 🔋   
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাক শুনলেই হাসি আসে 😊    
   server হয়ে যায় light 🌟  
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তুমি ডাকলেই login হয় 🔑  
   password তুমি-ই শুধু ❤️  
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   আহা শোনা তোমার ডাক 🌺     
   মনে হয় গান বাজছে 🎵      
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তোমার ডাকে প্রেম জাগে 💕   
   মন ভরে যায় সুখে 🌸      
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাক দিলেই মনে হয় 🌙       
   স্বপ্নের ভেতর ডুবে যাই 💭 
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তুমি ডাকলেই আমার RAM 🖥️  
   clean হয়ে যায় সাথে সাথে 🧹
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাকে মন নাচে 💃           
   মনে হয় উৎসব চলছে 🎉      
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   আহা ডাক শুনে মনে হয় 🎶    
   গান বাজছে হৃদয়ে 💓       
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তুমি ডাকলে আমার sky 🌌    
   রঙিন হয়ে যায় সাথে সাথে 🌈
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাক শুনলেই server 🔄       
   refresh হয়ে যায় নতুন 🌐 
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তোমার ডাকে sun rise 🌅    
   রাতও আলোকিত হয়ে যায় 🌟  
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   আহা ডাক দিলে মনে হয় 🥰    
   পুরো galaxy হাসছে 🌌      
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তুমি ডাকলেই আমার CPU ⚙️   
   দ্রুত কাজ শুরু করে ⏳     
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   ডাক দিলে মনে হয় 🌹        
   প্রেমে ভরে গেছে মন 💕     
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝",

"╔═══════════════════════════╗
   তুমি ছাড়া অন্য ডাক ❌    
   আমি শুনি না কোনোদিন 🚫    
╚═══════𝑬𝑴𝒐𝒏-𝑩𝑯𝒂𝒊════════╝"
     
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
