const SqlExecutorFactory = require('../../infrastructure/factories/SqlExecutorFactory');
const QueryBuilderFactory = require('../../infrastructure/factories/QueryBuilderFactory');

async function executeUpdate(updateDto) {
  const executor = SqlExecutorFactory.create();
  const builder = QueryBuilderFactory.create();

  const { sql, parameters } = builder.buildUpdate(updateDto);
  const affectedRows = await executor.executeNonQuery(sql, parameters);

  return { affectedRows };
}

module.exports = executeUpdate;