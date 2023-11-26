const { findItem } = require("../../repo/user");
const { badRequest } = require("../../utils/error");
// const { generateToken } = require("../token");
/**
 *
 * @param {email, password} param0
 * @returns {accessToken, refreshToken}
 */
const login = async ({ email, password }) => {
  const user = await findItem({
    qry: { email },
    select: "+password +refreshToken",
  });
  if (!user) {
    throw badRequest("Invalid Credentials");
  }

  const matched = await hashMatched(password, user.password);
  if (!matched) {
    throw badRequest("Invalid Credentials");
  }
  const common = { id: user.id, email: user.email };
  const payload = {
    ...common,
    name: user.name,
    role: user.roles,
  };
  const accessToken = generateToken({ payload });
  let refreshToken = user.refreshToken;
  if (!refreshToken) {
    refreshToken = generateToken({
      payload: common,
      secret: REFRESH_TOKEN_SECRET,
      expiresIn: "1y",
    });
  } else if (true) {
  }
  return {
    accessToken,
    refreshToken,
  };
};

module.exports = login;
