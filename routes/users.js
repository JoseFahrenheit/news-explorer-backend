const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, (req, res) => {
  res.status(200).json({
    email: req.user.email,
    name: req.user.name
  });
});

module.exports = router;
