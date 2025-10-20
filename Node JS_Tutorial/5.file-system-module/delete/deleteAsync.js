const fs = require("fs");

fs.unlink('file1.txt', (err)=> {
    if(err) throw err;
    console.log('Delete Async: File deleted!', )
})