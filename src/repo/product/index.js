const { Product } = require("../../models");

const findAllItems = async ({
  qry = {},
  populate,
  sortStr = "-createdAt",
  skip = 0,
  limit = 10,
  select = "",
}) => {
  let products = [];
  if (populate) {
    products = await Product.find(qry)
      .populate({ ...populate })
      .select(select)
      .sort(sortStr)
      .skip(skip)
      .limit(limit);
  } else {
    products = await Product.find(qry)
      .select(select)
      .sort(sortStr)
      .skip(skip)
      .limit(limit);
  }
  return products.map((product) => ({
    ...product._doc,
    id: product.id,
  }));
};

const findItem = ({ qry = {}, select = "" }) => {
  return Product.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Product.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Product.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Product.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Product.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Product.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Product.deleteMany(qry);
};
const createItem = async ({ ...data }) => {
  const newData = await Product.create(data);
  return { ...newData._doc, id: newData.id };
};
const createNewItem = async ({ ...data }) => {
  const newData = new Product(data);
  await newData.save();
  return { ...newData._doc, id: newData.id };
};
/**
 * Count all article
 * @param {*} param0
 * @returns
 */
const count = ({ search = "" }) => {
  const filter = {
    title: { $regex: search, $options: "i" },
  };

  return Product.countDocuments(filter);
};
module.exports = {
  count,
  createItem,
  createNewItem,
  findAllItems,
  findItem,
  findItemById,
  updateItem,
  updateItemById,
  deleteItem,
  deleteItemById,
  deleteManyItem,
};

// findAllItems({ select: "_id" }).then(console.log).catch(console.error);
