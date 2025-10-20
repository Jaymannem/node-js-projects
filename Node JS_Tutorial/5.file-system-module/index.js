const path = require("path");
const fs = require("fs")

const dataFolder = path.join(__dirname, "data");
// C:\Users\v-jayamannem\Desktop\TechStack\Node JS\5.file-system-module\data

// folder creating - sync way
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('data folder created')
};

// write data to file - sync way
const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath, "Welcome to Node JS Tutorial");
console.log("File created successfully!")

// read content from file - sync way
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log('Content: ', readContentFromFile);

// append data to file - sync way
fs.appendFileSync(filePath, '\n This is a best tutorial');
console.log('Content appended successfully!')

// creating file - async way 
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Async node js', (err)=> {
    if(err) throw err;
    console.log("Async file is created successfully!")

    fs.readFile(asyncFilePath, 'utf8', (err, data)=> {
        if(err) throw err; 
        console.log('Async file content: ', data)

        fs.appendFile(asyncFilePath, '\nThis is another line added', (err)=> {
            if(err) throw err; 
            console.log('data appended async');

            fs.readFile(asyncFilePath, 'utf8', (err, updatedData)=> {
                if(err) throw err; 
                console.log('Updated content: ', updatedData)
            })
        })
    })
})

