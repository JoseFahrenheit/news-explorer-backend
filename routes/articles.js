const express = require('express');
const auth = require('../middleware/auth');
const { validateArticle, validateArticleId } = require('../middleware/validation');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.status(200).json({ message: 'Artículos del usuario' });
});

router.post('/', auth, validateArticle, (req, res) => {
  res.status(201).json({ message: 'Artículo creado' });
});

router.delete('/:articleId', auth, validateArticleId, (req, res) => {
  res.status(200).json({ message: 'Artículo eliminado' });
});

module.exports = router;
