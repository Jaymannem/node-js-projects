const express = require("express");
const data = require("./courses.json");

const app = express();
const PORT = 3000;

// get home page
app.get("/", (req, res) => {
  res.send("Home Page");
});

// get all courses
app.get("/courses", (req, res) => {
  res.json(data);
});

// get specific course
app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const getSinglecourse = data.courses.find((course) => course.id === courseId);

  if (getSinglecourse) {
    res.json(getSinglecourse);
  } else {
    res.status(404).send("Course is not found! please try with other id");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
