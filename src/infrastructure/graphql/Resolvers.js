const executeInsert = require('../../application/usecases/executeInsert');
const executeUpdate = require('../../application/usecases/executeUpdate');
const executeDelete = require('../../application/usecases/executeDelete');
const executeSelect = require('../../application/usecases/executeSelect');

module.exports = {
  select: (_, args) => executeSelect(args),
  insert: (_, args) => executeInsert(args),
  update: (_, args) => executeUpdate(args),
  delete: (_, args) => executeDelete(args)
};