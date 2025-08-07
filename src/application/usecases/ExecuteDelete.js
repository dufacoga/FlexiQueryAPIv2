const SqlExecutorFactory = require('../../infrastructure/factories/SqlExecutorFactory');
const QueryBuilderFactory = require('../../infrastructure/factories/QueryBuilderFactory');

async function executeDelete(deleteDto) {
  const executor = SqlExecutorFactory.create();
  const builder = QueryBuilderFactory.create();

  const { sql, parameters } = builder.buildDelete(deleteDto);
  const affectedRows = await executor.executeNonQuery(sql, parameters);

  return { affectedRows };
}

module.exports = executeDelete;