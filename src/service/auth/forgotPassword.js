const userRepo = require("../../repo/user");
const { badRequest, customError, notFound } = require("../../utils/error");
const generateHashLink = require("./generateHashLink");
const sendEmail = require("../../utils/sendEmail");
// const { AFTER_STATEMENT_CONVESION_MAIL_CONFIG } = require("../../config");
const crypto = require("crypto");
const { Types } = require("mongoose");

const forgotPassword = async ({ email, url }) => {
  if (!email) {
    throw badRequest(`Please provide email address!`);
  } else if (!url) {
    throw customError(`Something going Wrong!`, 500);
  }
  const user = await userRepo.findItem({ qry: { email }, select: "+password" });

  if (!user) {
    throw notFound("User not found!");
  } else if (user.status !== "active") {
    throw badRequest(`Please contact with us to active your account!`);
  } else if (!user.password) {
    throw badRequest(`Forget password not illigible for this account!`);
  }

  // Get ResetPassword Token
  const str = crypto.randomBytes(20).toString("hex");
  const resetToken = `${str}.${new Types.ObjectId()}`;
  const { token, expiry } = generateHashLink({
    str: resetToken,
  });
  user.forgetPasswordToken = token;
  user.tokenExpiry = expiry;

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${url}/${resetToken}`;
  const message = `Click here to: \n\n <a target="_blank" href="${resetPasswordUrl}">Recovry password</a>. \n\nIf you have not requested this email then, please ignore it.`;
  //   const resp =
  await sendEmail({
    sendTo: email,
    subject: `Convert My Bank Statement Password Recovery`,
    html: message,
  });
  //   console.log(resp);
  return {
    code: 200,
  };
};

module.exports = forgotPassword;
