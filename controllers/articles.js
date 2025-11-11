const Article = require('../models/Article');

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image
    } = req.body;

    const article = await Article.create({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner: req.user._id
    });

    res.status(201).json(article);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(error => error.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;

    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: 'Artículo no encontrado' });
    }

    if (article.owner.toString() !== req.user._id) {
      return res.status(403).json({ message: 'No autorizado para eliminar este artículo' });
    }

    await Article.findByIdAndDelete(articleId);

    res.json({ message: 'Artículo eliminado exitosamente' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'ID de artículo inválido' });
    }
    next(err);
  }
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle
};
