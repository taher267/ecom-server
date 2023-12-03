const userRepo = require("../../repo/user");
const { sendEmail } = require("../../utils");
const { onlyError } = require("../../utils/error");
const { randomBytes } = require("crypto");
const bcrypt = require("bcrypt");

const updateOrCreate = async ({
  id,
  updateData: { name, email, phone_number, username, lastLogin, roles, status },
}) => {
  let newUser;
  try {
    const updateObj = {
      name,
    };
    const user = await userRepo.updateItemById({
      id,
      updateDate: updateObj,
      options: { new: true },
    });

    if (!user) {
      const raw = randomBytes(8).toString("hex").toUpperCase();
      const password = await bcrypt.hash(raw, await bcrypt.genSalt(10));
      const newObj = {
        name,
        email,
        password,
      };
      const qry = [{ email }];

      if (phone_number) {
        qry.push({ phone_number });
        newObj.phone_number = phone_number;
      }
      if (username) {
        qry.push({ username });
        newObj.username = username;
      }
      if (roles) {
        newObj.roles = roles;
      }
      if (status) {
        newObj.status = status;
      }

      if (qry?.length) {
        const existUser = await userRepo.findItem({ qry: { $or: qry } });
        if (existUser || existUser.id !== id) {
          throw badRequest();
        }
      }

      const user = await userRepo.create(newObj);
      newUser = user.id;
      await sendEmail({
        to: email,
        subject: `user credentials`,
        html: `email:${email}, password:${raw}`,
      });
      return {
        user,
        code: 201,
      };
    }
    return { user: { ...user._doc, id: user.id }, code: 200 };
  } catch (e) {
    if (newUser) {
      await userRepo.deleteItemById({ id });
    }
    throw onlyError(e.message);
  }
};

module.exports = updateOrCreate;
