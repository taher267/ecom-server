const login = require("./login");
const register = require("./register");
// const registerWithLink = require("./registerWithLink");
const registerValificationWithLink = require("./registerValificationWithLink");
// const resendRegisterLink = require("./resendRegisterLink");

const forgetPassword = require("./forgotPassword");
const resetPassword = require("./resetPassword");

const registerWithLinkLocalCache = require("./registerWithLinkLocalCache");

module.exports = {
  login,
  register,
  // registerWithLink,
  registerValificationWithLink,
  // resendRegisterLink,
  forgetPassword,
  resetPassword,
  registerWithLinkLocalCache,
};
