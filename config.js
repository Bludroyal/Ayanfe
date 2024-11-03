//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2348084088944";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNnRTdkZG5YL0dWZW9BRldyZlA1eGlUR202bVgweisyLytlMXpuQ2xYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlNZNFE3SC9tY2dxR3o3NFcvbFlsT3dORmFrYzlrLzJwdzJUb2lHQkszRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQzJpeE1zRjZPdDZwdW95ZE1KVnlFUUlvbXdpYytib2RvZHVwaUF4NFhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxQUNteVdnbUVhL1VNd1VUeWNObE4vSkg2WmxScStzcUZDV2VRcVkyd1VFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKMjd2enJDY0pIL3FRa0ttMytsM2hxL2w0aUJzcmxZN3V6OWFQbjVERzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBINEFRM0hNTk5qRW9BQVE4TEhWbkthN0RqYXgwbnozN0pJTFhJbi8xSGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0QxeTNqdTRnSUlseDVXR3U3MnVHaDdJeERqeDBzMm85ekJSRk5EeDBVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFJXK2JIK29tNXJSTHhIeE8xaDExZnk5dDNlTW43OE55R1poY2J0bnQybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgwYXJNZUxTenJMZ0RnM0RBZmtQTGZ5bkJGbmVlTVprSXMweFBkNXE3d2E4MUZPUVlWYm4yN05ZN2xzaVM2WUMrbDEwRlNreHczRGEvOEdmditoY2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IjA2ZU9ESzdVTDl4dk9zQjdSbzhBVFJJZW96VWhpSGFQQnBDMHpicERoZVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtFWDg3cmdGVF82Qzl0UnFpWTVmamciLCJwaG9uZUlkIjoiMjBhMzhhNTYtMTkxNy00N2JmLTlhMDQtNGEyY2U0ZWMzNjJmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU4Nnd4bitBN2tWVEo3TWtLZUFwMjYxeVNjWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVEhNQllibVdRckpiTTE2bkVxNVdLeUE5dTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzk5WFRWUEIiLCJtZSI6eyJpZCI6IjIzNDgwODQwODg5NDQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBeWFuZmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozVDlza0tFTGF4bjdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJNTzhIdDBLRjJvM2FCdU5uNm03SVQ4WStFQUYxaE9FbkRCcDJKZS9FU2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh6bkd2U3hWaTUrMCtpQ3I5b1VrMW5VZUc2dkZvOTdBaXNUTnBxcnI1cG56Vkd1NndRVGVoekx1Ti9UOVdKajNUN2tNWk5oN0dzbzlSYmhjU1hzUkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZWTFkQmd1dmZIb0NIVFlxRjRWaHVtTDEvMnN0NG92OUNKekV3SFd6YndvcmhqTEdNZjE4M0cyalRXd29WY3IyRHE2MzN0TVdaV3ltY0k3UEdvMlhqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODQwODg5NDQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkakR2QjdkQ2hkcU4yZ2JqWitwdXlFL0dQaEFCZFlUaEp3d2FkaVh2eEVwIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA2NjQ2NDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVcrIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎Ayanfe✌︎💨™`",
  author: process.env.PACK_AUTHER || "☯︎Ayanfe✌︎💨",
  packname: process.env.PACK_NAME || "☯︎Ayanfe✌︎💨",
  botname: process.env.BOT_NAME || "☯︎Ayanfe✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎Ayanfe✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎Ayanfe✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
