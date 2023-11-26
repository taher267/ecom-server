const { User } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return User.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return User.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return User.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return User.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return User.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return User.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return User.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return User.deleteMany(qry);
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
