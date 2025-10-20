const fs = require("fs").promises;

async function processFile() {
    try {
        const readDataFromInput = await fs.readFile("input.txt", "utf8");

        const modifiedData = readDataFromInput.toUpperCase();

        await fs.writeFile("output.txt", modifiedData);
        console.log("Data written successfully!");

        const outputData = await fs.readFile("output.txt", "utf8");
        console.log(outputData)
    }
    catch(error) {
        console.error("Error: ", error)
    }
}

processFile()