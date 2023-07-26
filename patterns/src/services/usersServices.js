const data = [
  {
    id: 1,
    username: "tukin",
    mail: "tukin@mail.com",
    address: "Calle falsa 123",
  },
  {
    id: 2,
    username: "rambo",
    mail: "rambo@mail.com",
    address: "Calle falsa 123",
  },
  {
    id: 3,
    username: "miko",
    mail: "miko@mail.com",
    address: "Calle falsa 123",
  },
];

const getUsers = () => {
  return data;
};

const getUsersById = (id) => {
  return data.filter((e) => e.id == id);
};

const createUser = (user) => {
  const newUser = { id: data.length + 1, ...user };
  return data.push(newUser);
};

module.exports = { getUsers, getUsersById, createUser };

/*
class usersService {
  //Aca le inyectaria el modelo con el que trabajaria en la BDD 
  constructor(){}
   y manejaria todas loser serivicios de user de la bdd
}*/
