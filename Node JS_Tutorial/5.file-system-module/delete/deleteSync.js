const fs = require("fs");

try {
    fs.unlinkSync('file2.txt');
    console.log('Delete Sync: File deleted!')
} catch(error) {
    if(error.code === "ENOENT") {
        console.log("File does not exist")
    } else {
        throw error;
    }
}