const { ShoppingCartItem } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return ShoppingCartItem.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return ShoppingCartItem.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return ShoppingCartItem.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return ShoppingCartItem.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return ShoppingCartItem.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return ShoppingCartItem.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return ShoppingCartItem.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return ShoppingCartItem.deleteMany(qry);
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
