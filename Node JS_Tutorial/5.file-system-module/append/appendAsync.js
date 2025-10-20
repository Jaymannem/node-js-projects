const fs = require("fs");

fs.appendFile('notes1.txt', "\nWelcome to the Node JS Course", (err)=> {
    if(err) throw err;
    console.log('Append Async: Data appended successfully!')
})