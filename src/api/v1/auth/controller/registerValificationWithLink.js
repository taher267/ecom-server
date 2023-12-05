const userService = require("../../../../service/auth");

const registerValificationWithLink = async (req, res, next) => {
  try {
    const { name, hashToken, email, password, username, phone_number } =
      req.body;
    const newUser = await userService.registerValificationWithLink({
      name,
      hashToken,
      email,
      password,
      username,
      phone_number,
    });

    return res.status(201).json({
      code: 201,
      message: `Alhamdu lillah, Account has been varified successfully!`,
      ...newUser,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = registerValificationWithLink;
