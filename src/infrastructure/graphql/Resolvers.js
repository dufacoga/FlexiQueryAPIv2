const executeInsert = require('../../application/usecases/executeInsert');
const executeUpdate = require('../../application/usecases/executeUpdate');
const executeDelete = require('../../application/usecases/executeDelete');
const executeSelect = require('../../application/usecases/executeSelect');

const resolvers = {
  select: ({ table, columns, where }) => executeSelect({ table, columns, where }),
  insert: ({ table, values }) => executeInsert({ table, values }),
  update: ({ table, values, where }) => executeUpdate({ table, values, where }),
  delete: ({ table, where }) => executeDelete({ table, where })
};

module.exports = resolvers;