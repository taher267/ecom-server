const jwt = require("jsonwebtoken");

const verifyJwt = ({ secret, token }) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      decoded,
      success: true,
    };
  } catch (e) {
    return {
      message: e.message,
      success: false,
    };
  }
};

module.exports = verifyJwt;
