const router = require("express").Router();
const users_controller = require("./users-controller");

router.get("/login", users_controller.getUser);

module.exports = router;
