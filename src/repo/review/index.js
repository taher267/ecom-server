const { Review } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Review.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Review.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Review.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Review.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Review.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Review.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Review.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Review.deleteMany(qry);
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
