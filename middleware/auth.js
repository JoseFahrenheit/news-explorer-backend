const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'Se requiere autorización',
      });
    }

    const token = authorization.replace('Bearer ', '');

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(payload._id);

      if (!user) {
        return res.status(401).json({
          message: 'Token inválido',
        });
      }

      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({
        message: 'Token inválido',
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
