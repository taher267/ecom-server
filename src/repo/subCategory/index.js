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
