const { JWT_SECRET = 'secret-key-development' } = process.env;
const { NODE_ENV = 'development' } = process.env;
const { PORT = 3000 } = process.env;
const { DB_URL = 'mongodb://localhost:27017/news-explorer' } = process.env;

module.exports = {
  JWT_SECRET,
  NODE_ENV,
  PORT,
  DB_URL
};
