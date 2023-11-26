const { Order } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Order.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Order.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Order.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Order.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Order.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Order.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Order.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Order.deleteMany({});
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
