const { Promotion } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Promotion.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Promotion.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Promotion.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Promotion.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Promotion.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Promotion.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Promotion.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Promotion.deleteMany({});
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
