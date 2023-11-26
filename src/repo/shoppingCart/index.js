const { ShoppingCart } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return ShoppingCart.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return ShoppingCart.findOne(qry).select(select).exec();
};

const findItemById = ({ id, select = "" }) => {
  return ShoppingCart.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return ShoppingCart.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return ShoppingCart.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return ShoppingCart.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return ShoppingCart.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return ShoppingCart.deleteMany(qry);
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
