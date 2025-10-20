const fs = require("fs");

fs.writeFile("writeAsync.txt", "Best node js course", (err)=> {
    if(err) throw err;
    console.log('Async write: File created successfully!')
})