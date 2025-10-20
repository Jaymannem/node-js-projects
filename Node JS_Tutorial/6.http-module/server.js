const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received:");
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end("Welcome to node js")
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});