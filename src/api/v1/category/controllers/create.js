const categoryService = require("../../../../service/category");

const create = async (req, res, next) => {
  const { name, description } = req.body;

  try {
    const category = await categoryService.createItem({
      name,
      description,
    });

    const response = {
      code: 201,
      message: "category Created Successfully",
      data: { ...category },
      links: {
        self: `/categories/${category.id}`,
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = create;
