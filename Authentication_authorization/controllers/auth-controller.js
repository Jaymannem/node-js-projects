const UserAuth = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registration controller
async function registerUser(req, res) {
  try {
    // extract user information from req body
    const { username, email, password, role } = req.body;

    // check if the user is already exist in our db
    const userExisting = await UserAuth.findOne({
      $or: [{ username }, { email }],
    });

    if (userExisting) {
      res.status(400).json({
        success: false,
        message:
          "User is already exists, please try with a different username or email",
      });
    }

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user and save in database
    const createUser = new UserAuth({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await createUser.save();

    if (createUser) {
      res.status(200).json({
        success: true,
        message: "User is registered successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register the user, please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

// login controller
async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    // check user is registered in db or not.
    const user = await UserAuth.findOne({ username });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // create a user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    res.status(200).json({
      success: true, 
      message: "Logged in successful!",
      accessToken
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
