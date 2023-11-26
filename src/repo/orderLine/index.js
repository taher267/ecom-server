const { OrderLine } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return OrderLine.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return OrderLine.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return OrderLine.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return OrderLine.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return OrderLine.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return OrderLine.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return OrderLine.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return OrderLine.deleteMany({});
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
