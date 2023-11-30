const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");
const { controllers: productControllers } = require("../api/v1/product");

const v1 = `/api/v1`;
// AUTH
router.route(`${v1}/auth/login`).post(authControllers.login);

// Product
router.route(`${v1}/products`).post(productControllers.create);

module.exports = router;
