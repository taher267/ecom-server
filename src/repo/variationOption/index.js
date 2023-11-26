const { VariationOption } = require("../../models");

const findAllItems = ({ qry = {}, select = "" }) => {
  return VariationOption.find(qry).select(select).exec();
};

const findItem = ({ qry = {}, select = "" }) => {
  return VariationOption.findOne(qry).select(select).exec();
};
const findItemById = ({ id, select = "" }) => {
  return VariationOption.findById(id).select(select).exec();
};

const updateItem = ({ qry = {}, updateDate = {}, options = {} }) => {
  return VariationOption.updateOne(qry, updateDate, options);
};

const updateItemById = ({ id, updateDate = {}, options = {} }) => {
  return VariationOption.findByIdAndUpdate(id, updateDate, options);
};

const deleteItem = ({ qry = {} }) => {
  return VariationOption.deleteOne(qry);
};

const deleteItemById = ({ id }) => {
  return VariationOption.findByIdAndDelete(id);
};

const deleteManyItem = ({ qry = {} }) => {
  return VariationOption.deleteMany(qry);
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
