//Esto sera un middleWare
module.exports = (req, res, next) => {
  const { username, mail, address } = req.body;

  if (!username) throw Error("Falta el username");
};
