const userRepo = require("../../repo/user");
const { badRequest } = require("../../utils/error");
const verifyJwt = require("../../utils/verityJWT");
const strToCryptoHash = require("./strToCryptoHash");
const { REGISTER_LINK_SECRET } = process.env;
// const { Types } = require("mongoose");
// const hashTkn = ``;
// const dec= verifyJwt({ secret: REGISTER_LINK_SECRET, token: hashTkn });
// console.log(dec)
// console.log(new Date(1700474814*1000).toString())
// console.log(strToCryptoHash({str:hash}))
// creditRepo.createItem({data:{userId:new Types.ObjectId()}}).then(console.log).catch(console.error)

// this.isModified("password")
// userRepo
//   .createItem({ data: { name: "99999", email: "99999", password: "99999" } })
//   .then(console.log)
//   .catch(console.error);
// userRepo
//   .updateItem({ qry: { email: "99999"}, updateDate:{ password: "333333" }, options:{runValidators:true} })
//   .then(console.log)
//   .catch(console.error);
// userRepo
// .findItem({ qry: { email: "99999"},select:'+password'})
// .then(console.log)
// .catch(console.error);

/**
 *
 * @param {hashToken} param0
 * hashToken veriry by jwt
 * if pass, form decoded hash search in db after update crypto string
 * if get user check status active give success message and update register token and expiry
 * if get user as inactive message `contact with support` and update register token and expiry
 * if get use's tokenExpiry is valid || Date.now()>tokenExpiry throw error and update register token and expiry
 * if pass, create credit
 * @returns {accessToken, refreshToken, user, credits}
 */
const registerValificationWithLink = async ({ hashToken }) => {
  if (!hashToken) {
    throw badRequest(`Please provide validation token!`);
  }
  const verify = verifyJwt({ secret: REGISTER_LINK_SECRET, token: hashToken });
  console.log(verify);
  if (!verify.success) {
    throw badRequest(verify.message);
  }
  const {
    decoded: { hash },
  } = verify;

  const registerToken = strToCryptoHash({ str: hash });

  const user = await userRepo.findItem({
    qry: { registerToken },
    select: "+registerToken +tokenExpiry",
    // resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw badRequest(
      "Account varification token is invalid or has been expired!!"
    );
  }
  if (user.status === "active") {
    user.registerToken = null;
    user.tokenExpiry = null;
    await user.save();
    return { code: 302, message: `Account already activated!` };
  } else if (user.status === "inactive") {
    user.registerToken = null;
    user.tokenExpiry = null;
    await user.save();
    throw badRequest(`Please contact with out support!`);
  } else if (!user.tokenExpiry || Date.now() > user.tokenExpiry) {
    user.registerToken = null;
    user.tokenExpiry = null;
    await user.save();
    throw badRequest("Account varification token has been expired!");
  }
  user.registerToken = null;
  user.tokenExpiry = null;
  user.status = "active";
  await user.save();
  const newCredit = await creditRepo.createItem({
    data: { userId: user.id },
  });
  const credit = newCredit._doc;
  const accessToken = user.getJWToken();
  const refreshToken = await user.getRefreshToken({ save: true });
  const credits = {
    trial: credit.trial,
    premium: credit.premium,
    expiry: credit.expiry,
  };
  const userObj = {
    ...user._doc,
  };
  delete userObj.password;
  delete userObj.refreshToken;
  delete userObj.updatedAt;
  delete userObj.registerToken;
  delete userObj.tokenExpiry;

  return {
    credits,
    accessToken,
    refreshToken,
    user: userObj,
  };
};
module.exports = registerValificationWithLink;
