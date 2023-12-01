const { badRequest, customError } = require("../../utils/error");
const categoryRepo = require("../../repo/category");
const createItem = async ({ name, description }) => {
  if (!name) {
    throw badRequest(`Invalid parameters!`);
  }
  const newObj = {
    name,
  };
  if (description) {
    newObj.description = description;
  }

  const existCategory = await categoryRepo.findItem({
    qry: { name: { $regex: name, $options: "i" } },
  });
  if (existCategory) {
    throw customError({ errors: [{ name: `Category name already exist!` }] });
  }
  return await categoryRepo.createNewItem(newObj);
};

module.exports = createItem;
