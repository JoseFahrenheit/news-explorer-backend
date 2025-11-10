const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, 'La palabra clave es obligatoria'],
  },
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
  },
  text: {
    type: String,
    required: [true, 'El texto es obligatorio'],
  },
  date: {
    type: String,
    required: [true, 'La fecha es obligatoria'],
  },
  source: {
    type: String,
    required: [true, 'La fuente es obligatoria'],
  },
  link: {
    type: String,
    required: [true, 'El enlace es obligatorio'],
    validate: {
      validator: (url) => validator.isURL(url),
      message: 'El formato del enlace no es válido',
    },
  },
  image: {
    type: String,
    required: [true, 'La imagen es obligatoria'],
    validate: {
      validator: (url) => validator.isURL(url),
      message: 'El formato de la imagen no es válido',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    select: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
