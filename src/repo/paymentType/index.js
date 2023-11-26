const { PaymentType } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return PaymentType.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return PaymentType.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return PaymentType.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return PaymentType.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return PaymentType.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return PaymentType.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return PaymentType.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return PaymentType.deleteMany({});
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
