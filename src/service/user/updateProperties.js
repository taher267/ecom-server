const userRepo = require("../../repo/user");
const updateProperties = async (id, { status }) => {
  const updated = await userRepo.updateItemById({
    id,
    updateDate: { status },
  });
  if (!updated) {
    throw notFound();
  }
  const copy = { ...updated };
  // delete copy.password;
  return { ...copy };
};

module.exports = updateProperties;
