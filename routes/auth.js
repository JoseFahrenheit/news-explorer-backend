const express = require('express');
const { validateSignup, validateSignin } = require('../middleware/validation');

const router = express.Router();

router.post('/signup', validateSignup, (req, res) => {
  res.status(201).json({ message: 'Registro exitoso' });
});

router.post('/signin', validateSignin, (req, res) => {
  res.status(200).json({ message: 'Login exitoso' });
});

module.exports = router;
