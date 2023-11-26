const userRepo = require("../../repo/user");
const { badRequest } = require("../../utils/error");

const setPassword = async ({ newPassword, confirmPassword, _id }) => {
  if (!newPassword || !_id || !confirmPassword) {
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
  if (user.password) {
    throw badRequest(`You can not able to set password!`);
  }

  user.password = newPassword;
  user.createWith = "user_pass";
  await user.save();
  return { code: 200 };
};

module.exports = setPassword;
