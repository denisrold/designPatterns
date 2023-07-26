//Esto sera un middleWare
const initValidations = (req, res, next) => {
  req.errors = [];
  next();
};
const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username) req.errors.push("Falta el username");
  if (username && username.length < 6) req.errors.push("El username es corto");
  next();
};
const validateEmail = (req, res, next) => {
  const { mail } = req.body;
  if (!mail) req.errors.push("Falta email");
  if (mail && !mail.includes("@")) req.errors.push("Esto no es un email");
  next();
};
const validateAddress = (req, res, next) => {
  const { address } = req.body;
  if (!address) req.errors.push("Falta el Address");
  next();
};
const validateErrors = (req, res, next) => {
  if (req.errors.length) res.status(400).json(req.errors);
  else {
    next();
  }
};
//Envio un Array de middlewares. Voy pasando la misma request por cada middleware
module.exports = [
  initValidations,
  validateUsername,
  validateEmail,
  validateAddress,
  validateErrors,
];
