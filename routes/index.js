const router = require('express').Router();
const authRouter = require('./auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');

router.use('/', authRouter);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

module.exports = router;
