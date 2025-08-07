const executeInsert = require('../../application/usecases/ExecuteInsert');
const executeUpdate = require('../../application/usecases/ExecuteUpdate');
const executeDelete = require('../../application/usecases/ExecuteDelete');
const executeSelect = require('../../application/usecases/ExecuteSelect');

module.exports = {
  select: (_, args) => executeSelect(args),
  insert: (_, args) => executeInsert(args),
  update: (_, args) => executeUpdate(args),
  delete: (_, args) => executeDelete(args)
};