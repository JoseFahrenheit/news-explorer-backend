const {
  JWT_SECRET = 'secret-key-development',
  NODE_ENV = 'development',
  PORT = 3000,
  DB_URL = 'mongodb://localhost:27017/news-explorer'
} = process.env;

module.exports = {
  JWT_SECRET,
  NODE_ENV,
  PORT,
  DB_URL
};
