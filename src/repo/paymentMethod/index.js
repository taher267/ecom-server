const { PaymentMethod } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return PaymentMethod.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return PaymentMethod.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return PaymentMethod.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return PaymentMethod.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return PaymentMethod.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return PaymentMethod.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return PaymentMethod.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return PaymentMethod.deleteMany({});
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
