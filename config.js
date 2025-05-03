const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=LQsUnTgT#5Tx1pt7kcYBhlDq40ECj_PEPjriNjbtgJSL_u7PwD80", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "Anuga123", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "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", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
