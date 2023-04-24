const jwt = require("jsonwebtoken");
// process.env.JWT_SECRET
const generateToken = (id) => {
  return jwt.sign({ id }, "narayan", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;