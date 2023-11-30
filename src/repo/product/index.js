const { Product } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Product.find(qry).select(select).exec();
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
module.exports = {
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
