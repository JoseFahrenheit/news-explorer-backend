const { celebrate, Joi } = require('celebrate');
const { VALIDATION } = require('../utils/constants');

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().message('El formato del email no es válido'),
    password: Joi.string().required().min(8).message('La contraseña debe tener al menos 8 caracteres'),
    name: Joi.string().required().min(2).max(30).message('El nombre debe tener entre 2 y 30 caracteres'),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().uri(),
    image: Joi.string().required().uri(),
  }),
});

const validateArticleId = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().hex().length(24).message('ID de artículo inválido'),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateArticle,
  validateArticleId,
};
