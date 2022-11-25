const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); //generate a path directly to the inbox.sol file (work in many platform)
const source = fs.readFileSync(inboxPath, "utf8");

// console.log("---------------------------------------------------");
// console.log(solc.compile(source, 1));
// console.log("---------------------------------------------------");

module.exports = solc.compile(source,1).contracts[':Inbox'];