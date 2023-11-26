const { Category } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Category.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Category.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Category.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Category.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Category.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Category.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Category.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Category.deleteMany(qry);
};

module.exports = {
  findAllItems,
  findItem,
  findItemById,
  updateItem,
  updateItemById,
  deleteItem,
  deleteItemById,
  deleteManyItem,
};
