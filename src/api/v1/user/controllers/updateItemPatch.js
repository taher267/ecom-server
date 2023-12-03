const userService = require('../../../../service/user');

const updateItemPatch = async (req, res, next) => {
	const { id } = req.params;

	try {
		const user = await userService.updateProperties(id, req.body);

		const response = {
			code: 200,
			message: 'user updated successfully',
			data: user,
			links: {
				self: `/users/${user.id}`,
			},
		};

		res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};

module.exports = updateItemPatch;
