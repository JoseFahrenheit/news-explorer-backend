const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const { ERROR_MESSAGES, STATUS_CODES } = require('../utils/constants');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(STATUS_CODES.UNAUTHORIZED).json({
        message: ERROR_MESSAGES.UNAUTHORIZED,
      });
    }

    const token = authorization.replace('Bearer ', '');

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(payload._id).select('-password');

      if (!user) {
        return res.status(STATUS_CODES.UNAUTHORIZED).json({
          message: ERROR_MESSAGES.UNAUTHORIZED,
        });
      }

      req.user = user;
      next();
    } catch (err) {
      return res.status(STATUS_CODES.UNAUTHORIZED).json({
        message: ERROR_MESSAGES.UNAUTHORIZED,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
