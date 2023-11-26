const { ProductItem } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return ProductItem.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return ProductItem.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return ProductItem.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return ProductItem.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return ProductItem.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return ProductItem.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return ProductItem.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return ProductItem.deleteMany({});
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
