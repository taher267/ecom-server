const userRepo = require("../../repo/user");
const {
  badRequest,
  customError,
  notFound,
  serverError,
} = require("../../utils/error");
const generateHashLink = require("./generateHashLink");
const sendEmail = require("../../utils/sendEmail");
// const { AFTER_STATEMENT_CONVESION_MAIL_CONFIG } = require("../../config");
// const { Types } = require("mongoose");
const getSignLink = require("./getSignLink");
const cache = require("../../cache");
const template = require("../template");

const { FORGER_PASSWORD_LINK_EXPIRY, FORGER_PASSWORD_SECRET } = process.env;

const forgotPassword = async ({ email, url }) => {
  if (!FORGER_PASSWORD_LINK_EXPIRY || !FORGER_PASSWORD_SECRET) {
    throw serverError();
  }
  if (!email) {
    throw badRequest(`Please provide email address!`);
  } else if (!url) {
    throw customError(`Something going Wrong!`, 500);
  }
  const user = await userRepo.findItem({ qry: { email } }); //select: "+password"

  if (!user) {
    throw notFound("User not found!");
  } else if (user.status !== "active") {
    throw badRequest(`Please contact with us to active your account!`);
  }

  // else if (!user.password) {
  //   throw badRequest(`Forget password not illigible for this account!`);
  // }

  const str = `${crypto.randomBytes(20).toString("hex")}.${email}`;

  const expiryInMins = Number(FORGER_PASSWORD_LINK_EXPIRY) / 60;
  const { expiry } = generateHashLink({ isCache: true, str, expiryInMins });
  const { sign } = getSignLink({
    payload: { hash: str, email },
    expiry,
    secret: FORGER_PASSWORD_SECRET,
  });

  console.log(sign);

  cache.set(hash.token, email, expiry);

  const link = `${url}/${sign}`;
  const message = template.getForgetPasswordTemplate({ link, name: " XYZ" });

  await sendEmail({
    to: email,
    subject: `Password Recovery`,
    html: message,
  });
  //   console.log(resp);
  return {
    code: 200,
  };
};

module.exports = forgotPassword;
