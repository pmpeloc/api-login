const { User } = require('../models/index');

module.exports = {
  // SignUp
  signup(req, res) {
    // TODO: Encriptar la contraseña
    // Crear un usuario
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        // TODO: Crear el token
        res.json({
          user,
          token: 'TEST',
        });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
