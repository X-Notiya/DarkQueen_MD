const YT = require("../lib/ytdl-core.js");
const  ytdl  = require("aztec-md-ytdl");
const fs = require("fs");
const yts = require("youtube-yts");

module.exports = {
  name: "video",
  description: "To play a video from youtube",
  category: "Download",
  start: async (vorterx, m, { text, prefix, args, toReact  }) => {
    try {
      if (!args[0]) { await toReact("🚫"); return m.reply(`*Please give me a video name..*`);
    }
      const songSearchTerm = args.join(" ");
      const songInfo = await yts(songSearchTerm);
      const song = songInfo.videos[0];
      let videoUrl = song.url;
      let videoId = videoUrl.split("v=")[1];      
      const result = await yts(videoId);
      const length = result.seconds;

      if (length >= 1800) {
        return m.reply(
          "The video is more than 30 minutes long "
        );
      } else {
        let infoYt = await ytdl.getlnfo(videoUrl);
        await toReact("💠");
        vorterx.sendMessage(
          m.from,
          {
            video: { url: ytaud.videoUrl },
            caption:`  *┌───⭓『* V I D O - D O W N *』*\n
 *❒Name*: ${song.title}\n
 *❒Size*: atc\n
 *❒BotName*: ${process.env.BOTNAME}
 *└────────────⭓*`,
          },
          { quoted: m }
        );
      }
    } catch (err) {
      console.error(err);
     vorterx.sendMessage(
        m.from,
        { text: `*Failed to play the video*: ${err.message}` },
        { quoted: m }
      );
    }
  },
};
