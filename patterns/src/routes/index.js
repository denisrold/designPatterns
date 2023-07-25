const { Router } = require("express");
const UsersControllers = require("../controllers/UsersControllers");

const router = Router(require("../services/usersServices"));
//Creo una instancia de controlador de usuario
const controller = new UsersControllers();

router.get("/users", controller.getUsers);

router.get("/users/:id", controller.getUsersById);

router.post("/userss", controller.createUsers);

module.exports = router;
