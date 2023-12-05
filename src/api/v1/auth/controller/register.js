const authService = require("../../../../service/auth");

const register = async (req, res, next) => {
  try {
    const { name, email, password, username, phone_number } = req.body;
    const { ...rest } = await authService.register({
      name,
      email,
      password,
      username,
      phone_number,
    });
    res.status(201).json(rest);
  } catch (e) {
    next(e);
  }
};

module.exports = register;
