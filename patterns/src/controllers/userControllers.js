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
};
