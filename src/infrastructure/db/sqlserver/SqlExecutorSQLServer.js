const ISqlExecutor = require('../../../domain/repositories/ISqlExecutor');
const sql = require('mssql');
const SqlSecurityValidator = require('../../../shared/security/SqlSecurityValidator');

class SqlExecutorSQLServer extends ISqlExecutor {
  constructor(config) {
    super();
    this.poolPromise = sql.connect(config);
  }

  async executeQuery(query, parameters = {}) {
    SqlSecurityValidator.validate(sql);
    const pool = await this.poolPromise;
    const request = pool.request();

    for (const [key, value] of Object.entries(parameters)) {
      request.input(key, value);
    }

    const result = await request.query(query);
    return result.recordset;
  }

  async executeNonQuery(query, parameters = {}) {
    SqlSecurityValidator.validate(sql);
    const pool = await this.poolPromise;
    const request = pool.request();

    for (const [key, value] of Object.entries(parameters)) {
      request.input(key, value);
    }

    const result = await request.query(query);
    return result.rowsAffected[0];
  }
}

module.exports = SqlExecutorSQLServer;