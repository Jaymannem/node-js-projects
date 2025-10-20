const fs = require("fs");

fs.readdir('myFolder', (err, files) => {
    if(err) throw err;
    console.log("Files in folder", files) // [ 'file.txt', 'file1.js', 'file2.js' ]
})