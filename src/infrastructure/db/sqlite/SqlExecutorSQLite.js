const ISqlExecutor = require('../../../domain/repositories/ISqlExecutor');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const SqlSecurityValidator = require('../../../shared/security/SqlSecurityValidator');

class SqlExecutorSQLite extends ISqlExecutor {
  constructor(dbPath) {
    super();
    this.dbPath = dbPath;
  }

  async executeQuery(sql, parameters = []) {
    SqlSecurityValidator.validate(sql);
    const db = await this._openDb();
    const result = await db.all(sql, parameters);
    await db.close();
    return result;
  }

  async executeNonQuery(sql, parameters = []) {
    SqlSecurityValidator.validate(sql);
    const db = await this._openDb();
    const result = await db.run(sql, parameters);
    await db.close();
    return result.changes;
  }

  async _openDb() {
    return open({
      filename: this.dbPath,
      driver: sqlite3.Database
    });
  }
}

module.exports = SqlExecutorSQLite;