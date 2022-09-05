const express = require('express');
const router = express.Router();

// Controllers
const AuthController = require('../controllers/AuthController');

// SingIn y SignUp
router.post('/api/signin', (req, res) => {
  res.send({ msg: 'Iniciar sesión' });
});
router.post('/api/signup', AuthController.signup);

module.exports = router;
