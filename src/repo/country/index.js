const { Country } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return Country.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return Country.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return Country.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return Country.updateOne(qry, updateDate);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return Country.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return Country.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return Country.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return Country.deleteMany({});
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
