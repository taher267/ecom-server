const userRepo = require("../../repo/user");
const updateProperties = async (id, { status }) => {
  const user = await userRepo.find({ id });
  if (!user) {
    throw notFound();
  }

  if (qry?.length) {
    const existUser = await userRepo.findItem({ qry: { $or: qry } });
    if (existUser || existUser.id !== id) {
      throw badRequest();
    }
  }
  // const payload = { name, username, phone_number, status };

  // Object.keys(payload).forEach((key) => {
  //   user[key] = payload[key] ?? user[key];
  // });

  // await user.save();
  return { ...user._doc, id: user.id };
};

module.exports = updateProperties;
