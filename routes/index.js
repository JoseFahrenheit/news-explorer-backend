const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const articleRoutes = require('./articles');

const router = express.Router();

router.use('/', authRoutes);
router.use('/users', userRoutes);
router.use('/articles', articleRoutes);

module.exports = router;
