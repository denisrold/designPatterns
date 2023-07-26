const { Router } = require("express");
const UsersControllers = require("../controllers/UsersControllers");
//mi middleware validator
const createUserValidator = require("../middleWare/createUserValidation");

const router = Router(require("../services/usersServices"));
const userServices = require("../services/usersServices");
//Creo una instancia de controlador de usuario
//Las instancias pueden trabajar con el servicio que yo le inyecte.
const controller = new UsersControllers(userServices);

router.get("/users", controller.getUsers);

router.get("/users/:id", controller.getUsersById);

//Se lo paso por parametros
router.post("/users", createUserValidator, controller.createUsers);

module.exports = router;
