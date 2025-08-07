require('dotenv').config();

const config = {
  port: process.env.PORT || 4000,
  dbType: process.env.DB_TYPE || 'mysql', // mysql | sqlite | sqlserver

  sqlite: {
    path: process.env.SQLITE_PATH || './database/example.db'
  },

  mysql: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'flexiquery'
  },

  sqlserver: {
    server: process.env.DB_SERVER || 'localhost',
    port: parseInt(process.env.DB_SQLSERVER_PORT || '1433'),
    user: process.env.DB_SQLSERVER_USER || 'sa',
    password: process.env.DB_SQLSERVER_PASSWORD || '',
    database: process.env.DB_SQLSERVER_NAME || 'flexiquery',
    encrypt: process.env.DB_SQLSERVER_ENCRYPT === 'true'
  },

  apiKey: process.env.API_KEY || ''
};

module.exports = config;