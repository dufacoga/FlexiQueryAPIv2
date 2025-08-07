const config = require('../../config');
const SqlExecutorMySQL = require('../db/mysql/SqlExecutorMySQL');
const SqlExecutorSQLite = require('../db/sqlite/SqlExecutorSQLite');
const SqlExecutorSQLServer = require('../db/sqlserver/SqlExecutorSQLServer');

class SqlExecutorFactory {
  static create() {
    const dbType = config.dbType;

    switch (dbType) {
      case 'mysql':
        return new SqlExecutorMySQL(config.mysql);

      case 'sqlite':
        return new SqlExecutorSQLite(config.sqlite.path);

      case 'sqlserver':
        return new SqlExecutorSQLServer(config.sqlserver);

      default:
        throw new Error(`Unsupported DB_TYPE: ${dbType}`);
    }
  }
}

module.exports = SqlExecutorFactory;