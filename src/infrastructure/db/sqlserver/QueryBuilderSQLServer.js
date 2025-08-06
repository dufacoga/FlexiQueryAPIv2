const IQueryBuilder = require('../../../domain/repositories/IQueryBuilder');

class QueryBuilderSQLServer extends IQueryBuilder {
  buildInsert(insert) {
    const keys = Object.keys(insert.values);
    const placeholders = keys.map(() => '@' + keys.shift()).join(', ');
    const sql = `INSERT INTO [${insert.table}] (${keys.map(k => `[${k}]`).join(', ')}) VALUES (${placeholders})`;
    const parameters = Object.fromEntries(keys.map(k => [k, insert.values[k]]));
    return { sql, parameters };
  }

  buildUpdate(update) {
    const setKeys = Object.keys(update.set);
    const setClause = setKeys.map(k => `[${k}] = @set_${k}`).join(', ');
    const whereKeys = Object.keys(update.where);
    const whereClause = whereKeys.map(k => `[${k}] = @where_${k}`).join(' AND ');

    const sql = `UPDATE [${update.table}] SET ${setClause} WHERE ${whereClause}`;
    const parameters = {
      ...Object.fromEntries(setKeys.map(k => [`set_${k}`, update.set[k]])),
      ...Object.fromEntries(whereKeys.map(k => [`where_${k}`, update.where[k]])),
    };

    return { sql, parameters };
  }

  buildDelete(del) {
    const whereKeys = Object.keys(del.where);
    const whereClause = whereKeys.map(k => `[${k}] = @${k}`).join(' AND ');
    const sql = `DELETE FROM [${del.table}] WHERE ${whereClause}`;
    const parameters = Object.fromEntries(whereKeys.map(k => [k, del.where[k]]));
    return { sql, parameters };
  }

  buildSelect(select) {
    const columns = (select.columns && select.columns.length > 0)
      ? select.columns.map(k => `[${k}]`).join(', ')
      : '*';

    const whereKeys = Object.keys(select.where || {});
    const whereClause = whereKeys.map(k => `[${k}] = @${k}`).join(' AND ');

    const sql = whereClause
      ? `SELECT ${columns} FROM [${select.table}] WHERE ${whereClause}`
      : `SELECT ${columns} FROM [${select.table}]`;

    const parameters = Object.fromEntries(whereKeys.map(k => [k, select.where[k]]));
    return { sql, parameters };
  }
}

module.exports = QueryBuilderSQLServer;