const { User } = require("../../models");

const findAllItems = async ({
  qry = {},
  populate,
  sortStr = "-createdAt",
  skip = 0,
  limit = 10,
  select = "",
}) => {
  let users = [];
  if (populate) {
    users = await User.find(qry)
      .populate({ ...populate })
      .select(select)
      .sort(sortStr)
      .skip(skip)
      .limit(limit);
  } else {
    users = await User.find(qry)
      .select(select)
      .sort(sortStr)
      .skip(skip)
      .limit(limit);
  }
  return users.map((user) => ({
    ...user._doc,
    id: user.id,
  }));
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
const createNewItem = async ({ ...data }) => {
  const newData = new User(data);
  await newData.save();
  return { ...newData._doc, id: newData.id };
};
const count = ({ filter }) => {
  return User.countDocuments(filter);
};

module.exports = {
  createNewItem,
  count,
  findAllItems,
  findItem,
  findItemById,
  updateItem,
  updateItemById,
  deleteItem,
  deleteItemById,
  deleteManyItem,
};
