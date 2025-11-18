const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access denied, Please login to continue.",
    });
  }

  // decode the token to get user info
  try {
    const decodeTokenInfo = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(decodeTokenInfo)
    req.userInfo = decodeTokenInfo;

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Token has expired, Please login to continue.",
    });
  }

  next();
};

module.exports = authMiddleware;
