const userRepo = require("../../repo/user");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const generateHashLink = require("./generateHashLink");
const getRegisterLink = require("./getRegisterLink");
const sendEmail = require("../../utils/sendEmail");
// const { accountVarificationTemplate } = require("../template");
const { badRequest, customError } = require("../../utils/error");

const genHash = async (str) => await bcrypt.hash(str, await bcrypt.genSalt(10));

const registerWithLink = async ({ name, email, password, _id, url }) => {

  if (!name || !email || !password) {
    throw badRequest(`Invalid parameters!`);
  } else if (!url) {
    throw customError(`Something Went Wrong!`);
  }
  if (_id) {
    const str = `${crypto.randomBytes(20).toString("hex")}.${_id}`;
    const { token: registerToken } = generateHashLink({
      str,
    });
    const payload = { _id, email, hash: str };
    const { sign, exp } = getRegisterLink({ payload }); //exp in seconds

    const hash = await genHash(password);
    console.log({ sign, password, hash });

    await userRepo.updateItem({
      qry: { _id },
      updateDate: { registerToken, password: hash, tokenExpiry: exp * 1000 },
    });
    const link = `${url}/${sign}`;
    const template = accountVarificationTemplate({ username: name, link });
    await sendEmail({
      html: template,
      sendTo: email,
      subject: "Register Varificaton",
    });
    return { code: 200 };
  }
  const newUser = await userRepo.createItem({
    data: {
      status: "pending",
      name,
      email,
      password,
      createWith: "user_pass",
    },
  });
  const str = `${crypto.randomBytes(20).toString("hex")}.${newUser.id}`;
  const { token: registerToken } = generateHashLink({
    str,
  });
  const payload = { _id, email, hash: str };
  const { sign, exp } = getRegisterLink({ payload });
  console.log({ sign, password });
  newUser.registerToken = registerToken;
  newUser.tokenExpiry = exp * 1000;
  await newUser.save();
  const link = `${url}/${sign}`;
  const template = accountVarificationTemplate({ username: name, link });
  await sendEmail({
    html: template,
    sendTo: email,
    subject: "Register Varificaton",
  });
  return { code: 201 };
};

module.exports = registerWithLink;
