const express = require("express");
const app = express();

const appLevelMiddleWare = (req, res, next)=> {
    console.log("This middleware will run on every request");

    next();
};

app.use(appLevelMiddleWare);

app.get("/", (req, res)=> {
    res.send('Home Page')
});

app.get("/about", (req, res)=> {
    res.send('About Page')
});

app.listen(3000, ()=> {
    console.log("Server is running successfully!")
})