const userRepo = require("../../repo/user");
const { badRequest } = require("../../utils/error");
const bcrypt = require("bcrypt");

const updatePassword = async ({
  oldPassword,
  newPassword,
  confirmPassword,
  _id,
}) => {
  if (!oldPassword || !newPassword || !_id || !confirmPassword) {
    throw badRequest(`Please provide parameters!`);
  }
  if (newPassword !== confirmPassword) {
    throw badRequest(`Password & confirm password does not match`);
  }
  const user = await userRepo.findItem({
    qry: {
      _id,
    },
    select: "+password",
  });
  if (!user.password) {
    throw badRequest(`You can not able to change password`);
  }
  const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordMatched) {
    throw badRequest(`Old password is incorrect`);
  }

  user.password = newPassword;
  const refreshToken = await user.getRefreshToken({ save: false });
  user.refreshToken = refreshToken;
  await user.save();
  return { code: 200, refreshToken };
};

module.exports = updatePassword;
