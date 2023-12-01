const subCategoryService = require("../../../../service/subCategory");

const create = async (req, res, next) => {
  const { name, description } = req.body;

  try {
    const subCategories = await subCategoryService.createItem({
      name,
      description,
    });

    const response = {
      code: 201,
      message: "Sub Categories Created Successfully",
      data: { ...subCategories },
      links: {
        self: `/sub-categories/${subCategories.id}`,
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = create;
