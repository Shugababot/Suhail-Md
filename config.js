const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049202495";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_54_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkYyZTRLaFhDTk5UOHdLZGxwK3FZdXBQUk1PU2JMcEIwZTRtdUtFcEtIckU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlp0NzB3SjdMU00yMmtRZ1JPLVpRSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQ4YmY1NDUtNmZkNi00ODMxLTlhNmEtYzE5NjQ1ODc0ZDdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjYsXG4gICAgICAxMjYsXG4gICAgICAxMzMsXG4gICAgICA5OCxcbiAgICAgIDM3LFxuICAgICAgMTkzLFxuICAgICAgMTYyLFxuICAgICAgMTgxLFxuICAgICAgMTYsXG4gICAgICAxMTIsXG4gICAgICA0MCxcbiAgICAgIDE5MixcbiAgICAgIDcsXG4gICAgICAzOSxcbiAgICAgIDEwMyxcbiAgICAgIDIwOSxcbiAgICAgIDE4NCxcbiAgICAgIDMwLFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgNTMsXG4gICAgICAxMTYsXG4gICAgICAxNzgsXG4gICAgICAxMDUsXG4gICAgICAxOTcsXG4gICAgICAxMjQsXG4gICAgICAyMjMsXG4gICAgICAxMjksXG4gICAgICAyMzMsXG4gICAgICAxNzcsXG4gICAgICA5MCxcbiAgICAgIDEwMSxcbiAgICAgIDEzMixcbiAgICAgIDI0MyxcbiAgICAgIDEwMixcbiAgICAgIDY0LFxuICAgICAgNTAsXG4gICAgICAyLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlZZMjJOREVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDkyMDI0OTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFpc2hhIFNodWdhYmFcIixcbiAgICBcImxpZFwiOiBcIjI0NzM0MzAwNTg3MjM0NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lLTXQ3b0hFSUtWZ0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMU9rMHdFRlJxcFc0eTA4UEo3T1JTeW0xK3ZndTAxeGtTYzJnL05KWjlGND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNaVV0T1RhMFhJTktEVmEreVJ1QU1tazNGVlRtaDV0RTV2YkVVaW9oUXdDbVptMHNxKzFBc01Nd1g5TkpUUDRWMW4rakF1a2FVcHBZVGswcVhNK21Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzMGpyeWt1QmJ4VTZnM3JKQUtxSmJTbEtlQzdHT1pST3A5VE9XUmNVa2VtSXYrcHdFZDd3UHVWMDUzTHNYWC9PUFJndUtaNW5qVlExMHZ4UzlhZFNpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ5MjAyNDk1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2NDQ4OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
