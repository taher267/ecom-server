const { Variation } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Variation.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Variation.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Variation.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Variation.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Variation.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Variation.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Variation.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Variation.deleteMany(qry);
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
