const { Router } = require("express");
const userControllers = require("../controllers/userControllers");

const router = Router();

router.get("/users", userControllers.getUsers);

router.get("/users/:id", userControllers.getUsersById);

router.post("/userss", userControllers.createUsers);

module.exports = router;
