const jwt = require("jsonwebtoken");
const secret = "jwt_secret_atharva"; 

exports.createToken = (payload) => jwt.sign(payload, secret, { expiresIn: "1h" });

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};