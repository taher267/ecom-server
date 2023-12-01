const { SubCategory } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return SubCategory.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return SubCategory.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return SubCategory.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return SubCategory.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return SubCategory.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return SubCategory.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return SubCategory.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return SubCategory.deleteMany(qry);
};
const createNewItem = async ({ ...data }) => {
  const newData = new SubCategory(data);
  await newData.save();
  return { ...newData._doc, id: newData.id };
};
const count = ({ search = "" }) => {
  const filter = {
    title: { $regex: search, $options: "i" },
  };
  return SubCategory.countDocuments(filter);
};
module.exports = {
  createNewItem,
  count,
  findAllItems,
  findItem,
  findItemById,
  updateItem,
  updateItemById,
  deleteItem,
  deleteItemById,
  deleteManyItem,
};
