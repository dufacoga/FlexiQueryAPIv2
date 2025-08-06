const IQueryBuilder = require('../../../domain/repositories/IQueryBuilder');

class QueryBuilderSQLite extends IQueryBuilder {
  buildInsert(insert) {
    const keys = Object.keys(insert.values);
    const placeholders = keys.map(() => '?').join(', ');
    const sql = `INSERT INTO ${insert.table} (${keys.join(', ')}) VALUES (${placeholders})`;
    const parameters = Object.values(insert.values);
    return { sql, parameters };
  }

  buildUpdate(update) {
    const setKeys = Object.keys(update.set);
    const setClause = setKeys.map(key => `${key} = ?`).join(', ');
    const whereClause = Object.keys(update.where).map(key => `${key} = ?`).join(' AND ');

    const sql = `UPDATE ${update.table} SET ${setClause} WHERE ${whereClause}`;
    const parameters = [...Object.values(update.set), ...Object.values(update.where)];
    return { sql, parameters };
  }

  buildDelete(del) {
    const whereClause = Object.keys(del.where).map(key => `${key} = ?`).join(' AND ');
    const sql = `DELETE FROM ${del.table} WHERE ${whereClause}`;
    const parameters = Object.values(del.where);
    return { sql, parameters };
  }

  buildSelect(select) {
    const columns = (select.columns && select.columns.length > 0) 
    ? select.columns.join(', ') 
    : '*';

    const whereClause = Object.keys(select.where || {}).map(key => `${key} = ?`).join(' AND ');

    const sql = whereClause
      ? `SELECT ${columns} FROM ${select.table} WHERE ${whereClause}`
      : `SELECT ${columns} FROM ${select.table}`;
      
    const parameters = Object.values(select.where || {});
    return { sql, parameters };
  }
}

module.exports = QueryBuilderSQLite;