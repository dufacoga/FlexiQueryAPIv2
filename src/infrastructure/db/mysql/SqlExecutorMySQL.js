const ISqlExecutor = require('../../../domain/repositories/ISqlExecutor');
const mysql = require('mysql2/promise');
const SqlSecurityValidator = require('../../../shared/security/SqlSecurityValidator');

class SqlExecutorMySQL extends ISqlExecutor {
  constructor(config) {
    super();
    this.pool = mysql.createPool(config);
  }

  async executeQuery(sql, parameters = []) {
    SqlSecurityValidator.validate(sql);
    const [rows] = await this.pool.execute(sql, parameters);
    return rows;
  }

  async executeNonQuery(sql, parameters = []) {
    SqlSecurityValidator.validate(sql);
    const [result] = await this.pool.execute(sql, parameters);
    return result.affectedRows;
  }
}

module.exports = SqlExecutorMySQL;