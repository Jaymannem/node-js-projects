const fs = require("fs");

fs.mkdir('myFolder', (err)=> {
    if(err) {
        if(err.code === "EEXIST") {
            console.log('Folder is already exist')
        } else {
            throw err;
        }
    } else {
        console.log('Folder created')
    }
})