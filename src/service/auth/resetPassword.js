const { badRequest, notFound } = require("../../utils/error");
const strToCryptoHash = require("./strToCryptoHash");
const userRepo = require("../../repo/user");
const bcrypt = require("bcrypt");

const resetPassword = async ({ hashToken, newPassword, confirmPassword }) => {
  if (!hashToken || !newPassword || !confirmPassword) {
    throw badRequest(`Please provide required parameters!`);
  } else if (newPassword !== confirmPassword) {
    throw badRequest("Password does not password", 400);
  }
  const forgetPasswordToken = strToCryptoHash({ str: hashToken });
  const user = await userRepo.findItem({
    qry: { forgetPasswordToken },
    select: "+forgetPasswordToken +tokenExpiry +refreshToken",
  });

  if (!user) {
    throw notFound(`User doesn't exist!`);
  } else if (user.status !== "active") {
    user.forgetPasswordToken = null;
    user.tokenExpiry = null;
    await user.save();
    throw badRequest(
      `Inactive account, Contact us with support to active your account!`
    );
  } else if (!user.tokenExpiry || user.tokenExpiry < Date.now()) {
    user.forgetPasswordToken = null;
    user.tokenExpiry = null;
    await user.save();
    throw badRequest(`Reset Password Token is invalid or has been expired`);
  }
  // const hash = await bcrypt.hash(newPassword, await bcrypt.genSalt(10));
  // console.log(hash);
  user.password = newPassword;
  user.refreshToken = await user.getRefreshToken({ save: false });
  user.forgetPasswordToken = null;
  user.tokenExpiry = null;

  await user.save();
  return {
    code: 200,
  };
};
module.exports = resetPassword;
