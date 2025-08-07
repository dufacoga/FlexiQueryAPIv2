const config = require('../../config');

class QueryBuilderFactory  {
  static create() {
    const dbType = config.dbType;

    switch (dbType) {
      case 'mysql':
        return new (require('../db/mysql/QueryBuilderMySQL'))();
      case 'sqlite':
        return new (require('../db/sqlite/QueryBuilderSQLite'))();
      case 'sqlserver':
        return new (require('../db/sqlserver/QueryBuilderSQLServer'))();
      default:
        throw new Error(`Unsupported DB_TYPE: ${dbType}`);
    }
  }
}

module.exports = QueryBuilderFactory;