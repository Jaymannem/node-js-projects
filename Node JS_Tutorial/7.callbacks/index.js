const fs = require("fs");

function person(name, callbackFn) {
    console.log(`Hello ${name}`);
    callbackFn()
}

function address() {
    console.log("India")
}

person('Jay Mannem', address);

fs.readFile('input.txt', "utf8", (err, data)=> {
    if(err) throw err;
    console.log(data)
})