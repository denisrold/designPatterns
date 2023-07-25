class UsersControllers {
  //inyeccion de dependencias: Le digo al controlador cuando creo la instancia, con que serivicio de usuario va a trabajar.
  constructor(usersServices) {
    this.usersService = usersServices;
  }

  getUsers = (req, res) => {
    res.send("Respondo con todos los usuarios");
  };
  getUsersById = (req, res) => {
    res.send("Respondo con un usuario");
  };
  createUsers = (req, res) => {
    res.send("creo un usuario");
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
