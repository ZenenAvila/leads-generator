const router = require("express").Router();
const users_controller = require("./users-controller");

router.post("/login", users_controller.getUser);

module.exports = router;
