const fs = require("fs-extra");
const path = require("path");
const request = require("request");

module.exports = {
  config: {
    name: "emonvideo",
    aliases: ["emon", "ভিডিও", "randomvideo"],
    permission: 0,
    prefix: true,
    categorie: "video",
    credit: "Developed & Styled by Emon",
    description: "র‍্যান্ডম ভিডিও অথবা আপনার দেওয়া নাম অনুযায়ী ভিডিও পাঠাবে।",
    usages: [
      `${global.config.PREFIX}emonvideo - র‍্যান্ডম ভিডিও পেতে।`,
      `${global.config.PREFIX}emonvideo <নাম> - নির্দিষ্ট নাম অনুযায়ী ভিডিও পেতে।`,
    ],
  },

  start: async ({ event, api, args }) => {
    const msg = args.join(" ");
    const cacheDir = path.join(__dirname, "cache");
    await fs.ensureDir(cacheDir);

    const getJSON = (url) =>
      new Promise((resolve, reject) => {
        request({ url, json: true }, (err, res, body) => {
          if (err) return reject(err);
          resolve(body);
        });
      });

    try {
      // এখানে তোমার api.json দেওয়া আছে (তুমি চাইলে নিজেরটা বসিয়ে দিও)
      const apiData = await getJSON("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiBaseURL = apiData.api;

      const fetchAndSend = async (videoData, res) => {
        const { url: videoURL, name, cp } = videoData;
        let ln = res ? res.length : (videoData.length || 1);

        const fileName = `video_${Date.now()}.mp4`;
        const filePath = path.join(cacheDir, fileName);

        await new Promise((resolve, reject) => {
          request(videoURL)
            .pipe(fs.createWriteStream(filePath))
            .on("finish", resolve)
            .on("error", reject);
        });

        await api.sendMessage(event.threadId, {
          video: { stream: fs.createReadStream(filePath) },
          caption: `🌸✨ *Emon ভিডিও সার্ভার* ✨🌸
          
🎬 টাইটেল: ${cp}
📂 যুক্ত করেছেন: ${name}
📊 মোট ভিডিও সংখ্যা: [${ln}]

🔥 Enjoy Your Video!  
– Developed by *Emon*`,
        });

        fs.unlinkSync(filePath);
      };

      if (!msg) {
        // র‍্যান্ডম ভিডিও
        try {
          const res = await getJSON(`${apiBaseURL}/video/mixvideo`);
          await fetchAndSend(res.url, res);
        } catch (randomError) {
          console.error("Error fetching random video:", randomError);
          await api.sendMessage(event.threadId, {
            text: "❌ দুঃখিত! র‍্যান্ডম ভিডিও আনা যায়নি। আবার চেষ্টা করুন।",
          });
        }
      } else {
        // সার্চ ভিডিও
        try {
          const res = await getJSON(`${apiBaseURL}/random?name=${encodeURIComponent(msg)}`);
          await fetchAndSend(res.data);
        } catch (searchError) {
          console.error("Error fetching video based on query:", searchError);
          await api.sendMessage(event.threadId, {
            text: `❌ দুঃখিত! "${msg}" এর জন্য কোনো ভিডিও খুঁজে পাওয়া যায়নি।`,
          });
        }
      }
    } catch (mainError) {
      console.error("Error fetching API base URL or processing request:", mainError);
      await api.sendMessage(event.threadId, {
        text: "❌ একটি অপ্রত্যাশিত সমস্যা হয়েছে। অনুগ্রহ করে পরে চেষ্টা করুন।",
      });
    }
  },
};
