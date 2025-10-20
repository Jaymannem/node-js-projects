const fs = require("fs");

try {
    fs.mkdirSync('myFolder');
    console.log("Folder created!")
} catch(error) {
    if(error.code === "EEXIST") {
        console.log("Folder is already exist")
    } else {
        throw error
    }
}