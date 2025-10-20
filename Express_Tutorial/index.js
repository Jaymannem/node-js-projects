const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express JS Tutorial")
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running at port: " + PORT)
})