const { Address } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Address.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Address.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Address.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Address.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Address.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Address.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Address.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Address.deleteMany({});
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
