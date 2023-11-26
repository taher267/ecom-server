const router = require("express").Router();
const { controllers: authControllers } = require("../api/v1/auth");

const v1 = `/api/v1`;
// AUTH
router.post(`${v1}/auth/login`, authControllers.login);

module.exports = router;
