const { generateHash } = require("../../utils/hashing");
const { findItem, createUser } = require("../../repo/user");
const { badRequest } = require("../../utils/error");
/**
 *
 * @param { name, email, password} param0
 * @returns user
 */
const register = async ({ name, email, password }) => {
  
  const hasUser = await findItem({ qry: { email } });
  if (hasUser) {
    throw badRequest("User already exist");
  }

  password = await generateHash(password);
  const user = await createUser({ name, email, password });

  return user;
};

module.exports = register;
