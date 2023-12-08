const { badRequest } = require("../../utils/error");
const userConfig = require("../../config/user");
const fileExtension = require("../../utils/fileExtension");

const changeProfilePic = async ({ file = {} }) => {
  try {
    const { originalname, mimetype, buffer } = file;
    if (!originalname || !mimetype || !buffer) {
      throw badRequest(`Invalid parameters!`);
    }
    if (
      !userConfig.profilePicExtensions.includes(
        fileExtension({ fileName: originalname })
      )
    ) {
      throw badRequest(`Invalid file type!`);
    }
    require("fs").writeFileSync(`uploads/${originalname}`, buffer, "binary");
    return {
      code: 200,
    };
  } catch (e) {
    next(e);
  }
};

module.exports = changeProfilePic;
