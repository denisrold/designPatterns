class UsersControllers {
  //inyeccion de dependencias: Le digo al controlador cuando creo la instancia, con que serivicio de usuario va a trabajar.
  constructor(usersServices) {
    this.usersService = usersServices;
  }

  getUsers = (req, res) => {
    const users = this.usersService.getUsers();
    res.status(200).json(users);
  };

  getUsersById = (req, res) => {
    const { id } = req.params;
    const user = this.usersService.getUsersById(id);
    res.status(200).json(user);
  };

  createUsers = (req, res) => {
    const { username, mail, address } = req.body;
    //matriz de middleWare:
    this.usersService.createUser({ username, mail, address });
    res.status(200).json({ created: "Ok" });
  };
}

module.exports = UsersControllers;

/* Forma Sin class
module.exports = {
  getUsers: (req, res) => {
    res.send("Respondo con todos los usuarios");
  },
  getUsersById: (req, res) => {
    res.send("Respondo con un usuario");
  },
  createUsers: (req, res) => {
    res.send("creo un usuario");
  },
};*/
