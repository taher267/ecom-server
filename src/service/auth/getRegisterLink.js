const jwt = require("jsonwebtoken");
const { REGISTER_LINK_SECRET, REGISTER_LINK_EXPIRY } = process.env;
const getRegisterLink = ({ payload = {} }) => {
  const iat = Math.trunc(Date.now() / 1000);
  const exp = iat + Number(REGISTER_LINK_EXPIRY);
  const sign = jwt.sign({ ...payload, iat, exp }, REGISTER_LINK_SECRET);
  return {
    sign,
    exp,
  };
};

module.exports = getRegisterLink;
