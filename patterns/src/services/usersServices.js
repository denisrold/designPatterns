const data = [
  {
    id: "1",
    username: "tukin",
    mail: "tukin@mail.com",
  },
  {
    id: "2",
    username: "rambo",
    mail: "rambo@mail.com",
  },
  {
    id: "3",
    username: "miko",
    mail: "miko@mail.com",
  },
];

const getUsers = () => {
  return data;
};

const getUsersById = (id) => {
  return data.filter((e) => e.id === id);
};

module.exports = { getUsers, getUsersById };

/*
class usersService {
  //Aca le inyectaria el modelo con el que trabajaria en la BDD 
  constructor(){}
   y manejaria todas loser serivicios de user de la bdd
}*/
