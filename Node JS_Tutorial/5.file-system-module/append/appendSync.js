const fs = require("fs");

fs.appendFileSync('notes2.txt', "\nWelcome to the Node JS Course");
console.log('Append Sync: Data appended successfully!')