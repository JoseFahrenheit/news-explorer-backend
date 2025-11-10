require('dotenv').config();

const {
  NODE_ENV,
  PORT = 3000,
  JWT_SECRET = 'super-secret-key-dev',
  DB_URL = 'mongodb://localhost:27017/news-explorer'
} = process.env;

module.exports = {
  NODE_ENV,
  PORT,
  JWT_SECRET,
  DB_URL,
};
