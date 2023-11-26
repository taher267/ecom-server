const { ProductConfiguration } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return ProductConfiguration.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return ProductConfiguration.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return ProductConfiguration.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return ProductConfiguration.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return ProductConfiguration.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return ProductConfiguration.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return ProductConfiguration.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return ProductConfiguration.deleteMany(qry);
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
