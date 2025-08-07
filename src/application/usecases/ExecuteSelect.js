const SqlExecutorFactory = require('../../infrastructure/factories/SqlExecutorFactory');
const QueryBuilderFactory = require('../../infrastructure/factories/QueryBuilderFactory');

async function executeSelect(selectDto) {
  const executor = SqlExecutorFactory.create();
  const builder = QueryBuilderFactory.create();

  const { sql, parameters } = builder.buildSelect(selectDto);
  const result = await executor.executeQuery(sql, parameters);
  return result;
}

module.exports = executeSelect;