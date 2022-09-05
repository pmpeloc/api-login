const express = require('express');
const router = express.Router();

// SingIn y SignUp
router.post('/api/signin', (req, res) => {
  res.send({ msg: 'Iniciar sesión' });
});
router.post('/api/signup', (req, res) => {
  res.send({ msg: 'Crear cuenta' });
});

module.exports = router;
