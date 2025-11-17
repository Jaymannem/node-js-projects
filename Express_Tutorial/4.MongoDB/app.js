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
    // const newUser = await User.create({
    //   name: "Jaya Mannem",
    //   email: "jaymannem21@gmail.com",
    //   age: 30,
    //   isActive: true,
    //   tags: ["developer", "designer", "tester"],
    // });

    // console.log('created new user', newUser)

    const newUser = new User({
      name: "updated user",
      email: "updateuser@gmail.com",
      age: 75,
      isActive: true,
      tags: ["update", "user"],
    });

    // const getAllUsers = await User.find();
    // console.log("All users: ", getAllUsers)

    const userCreated = await newUser.save();
    console.log("created user", userCreated)

    // const sortedUsers = await User.find().sort({age: 1});
    // console.log(sortedUsers)

    // const totalUsers = await User.countDocuments({});
    // console.log(totalUsers); // 4

    // const olderUsers = await User.countDocuments({ age: { $gt: 25 } });
    // console.log(olderUsers) // 2

    // const inActiveUsers = await User.countDocuments({isActive: false});
    // console.log(inActiveUsers) // 2

    // const deleteUser = await User.findByIdAndDelete(userCreated._id);
    // console.log('deleteUser -> ', deleteUser)

    const updatedUser = await User.findByIdAndUpdate(userCreated._id, {
      $set: {age: 100},
      $push: {tags: 'updated-user'}
    }, {new: true});

    console.log('updatedUser -->', updatedUser)

  } catch (e) {
    console.log("Error-->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
