const { badRequest, customError } = require("../../utils/error");
const productRepo = require("../../repo/product");
const createItem = async ({
  title,
  sub_category_id,
  SKU,
  price,
  author,
  description,
  html,
  qty_in_stock,
  thumb,
  images,
}) => {
  if (!title || !sub_category_id || !SKU || !price || !author) {
    throw badRequest(`Invalid parameters!`);
  }
  const newObj = {
    title,
    sub_category_id,
    SKU,
    price,
    author,
  };
  if (description) {
    newObj.description = description;
  }
  if (html) {
    newObj.html = html;
  }
  if (!isNaN(parseInt(qty_in_stock))) {
    newObj.description = description;
  }
  if (thumb) {
    newObj.thumb = thumb;
  }
  if (images?.length) {
    newObj.images = images;
  }
  const existProduct = await productRepo.findItem({
    qry: { SKU: { $regex: SKU, $options: "i" } },
  });
  if (existProduct) {
    throw customError({ errors: [{ SKU: `SKU already exist!` }] });
  }
  return await productRepo.createNewItem(newObj);
};

module.exports = createItem;
