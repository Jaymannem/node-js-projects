const fs = require("fs");

const files = fs.readdirSync('myFolder');
console.log('Files in folder', files)
// [ 'file.txt', 'file1.js', 'file2.js' ]