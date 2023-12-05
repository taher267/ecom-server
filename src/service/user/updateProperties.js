const userRepo = require("../../repo/user");
const { notFound } = require("../../utils/error");
const updateProperties = async (id, { status, roles }) => {

  const updateDate={

  }
  if(status){
    updateDate.status=status
  }
  if(roles){
    updateDate.roles=roles
  }
  const updated = await userRepo.updateItemById({
    id,
    updateDate,
  });
  if (!updated) {
    throw notFound();
  }
  const copy = { ...updated };
  // delete copy.password;
  return { ...copy };
};

module.exports = updateProperties;
