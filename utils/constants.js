module.exports = {
  ERROR_MESSAGES: {
    USER_NOT_FOUND: 'Usuario no encontrado',
    ARTICLE_NOT_FOUND: 'Artículo no encontrado',
    UNAUTHORIZED: 'No autorizado',
    FORBIDDEN: 'Acceso prohibido',
    VALIDATION_ERROR: 'Error de validación',
    CONFLICT: 'El recurso ya existe',
    SERVER_ERROR: 'Error interno del servidor',
  },

  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SERVER_ERROR: 500,
  },

  VALIDATION: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
  },
};
