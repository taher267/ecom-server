const login = require("./login");
const register = require("./register");
// const registerWithLink = require("./registerWithLink");
const registerValificationWithLink = require("./registerValificationWithLink");
const resendRegisterLink = require("./resendRegisterLink");
const updatePassword = require("./updatePassword");
const forgetPassword = require("./forgotPassword");
const resetPassword = require("./resetPassword");
const setPassword = require("./setPassword");
const registerWithLinkLocalCache = require("./registerWithLinkLocalCache");

module.exports = {
  login,
  register,
  // registerWithLink,
  registerValificationWithLink,
  resendRegisterLink,
  updatePassword,
  forgetPassword,
  resetPassword,
  setPassword,
  registerWithLinkLocalCache,
};
