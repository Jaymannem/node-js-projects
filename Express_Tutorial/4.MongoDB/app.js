const mongoose = require("mongoose");

const mongoDB_URL =
  "mongodb+srv://jaymannem21:jaymannem21@cluster0.xyrs4lw.mongodb.net/";

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((e) => {
    console.log("Error in Mongodb connection", e);
  });

// create user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    const newUser = await User.create({
      name: "Jaya Mannem",
      email: "jaymannem21@gmail.com",
      age: 30,
      isActive: true,
      tags: ["developer", "designer", "tester"],
    });

    console.log('created new user', newUser)
  } catch (e) {
    console.log("Error-->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples()