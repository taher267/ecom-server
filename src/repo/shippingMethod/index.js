const { ShippingMethod } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return ShippingMethod.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return ShippingMethod.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return ShippingMethod.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return ShippingMethod.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return ShippingMethod.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return ShippingMethod.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return ShippingMethod.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return ShippingMethod.deleteMany(qry);
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
