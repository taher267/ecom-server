const { badRequest } = require("../../utils/error");
const categoryRepo = require("../../repo/subCategory");
const createItem = async ({ name, description, category_id }) => {
  if (!name) {
    throw badRequest(`Invalid parameters!`);
  }
  const newObj = {
    name,
  };
  if (description) {
    newObj.description = description;
  }
  if (category_id) {
    newObj.category_id = category_id;
  }

  // const existCategory = await categoryRepo.findItem({
  //   qry: { name: { $regex: name, $options: "i" } },
  // });
  // if (existCategory) {
  //   throw customError({ errors: [{ name: `Category name already exist!` }] });
  // }
  return await categoryRepo.createNewItem(newObj);
};

module.exports = createItem;
