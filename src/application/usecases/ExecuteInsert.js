const getQueryBuilder = require('../../infrastructure/factories/QueryBuilderFactory');
const getSqlExecutor = require('../../infrastructure/factories/SqlExecutorFactory');

async function executeInsert(dto) {
  const executor = SqlExecutorFactory.create();
  const builder = QueryBuilderFactory.create();

  const { sql, parameters } = builder.buildInsert(dto);
  const affectedRows = await executor.executeNonQuery(sql, parameters);
  return { affectedRows };
}

module.exports = executeInsert;