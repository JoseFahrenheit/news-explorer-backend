const { ERROR_MESSAGES, STATUS_CODES } = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  const { statusCode = STATUS_CODES.SERVER_ERROR, message } = err;

  console.error('Error:', err);

  if (err.code === 11000) {
    return res.status(STATUS_CODES.CONFLICT).json({
      message: 'El recurso ya existe',
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      message: ERROR_MESSAGES.VALIDATION_ERROR,
      errors: Object.values(err.errors).map((error) => error.message),
    });
  }

  if (err.name === 'CastError') {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      message: 'ID inválido',
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(STATUS_CODES.UNAUTHORIZED).json({
      message: ERROR_MESSAGES.UNAUTHORIZED,
    });
  }

  res.status(statusCode).json({
    message: statusCode === STATUS_CODES.SERVER_ERROR
      ? ERROR_MESSAGES.SERVER_ERROR
      : message,
  });
};

module.exports = errorHandler;
