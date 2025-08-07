const executeInsert = require('../../../application/usecases/executeInsert');
const executeUpdate = require('../../../application/usecases/executeUpdate');
const executeDelete = require('../../../application/usecases/executeDelete');
const executeSelect = require('../../../application/usecases/executeSelect');

const insert = async (req, res) => {
  try {
    const affectedRows = await executeInsert(req.body);
    res.json({ affectedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const affectedRows = await executeUpdate(req.body);
    res.json({ affectedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const del = async (req, res) => {
  try {
    const affectedRows = await executeDelete(req.body);
    res.json({ affectedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const select = async (req, res) => {
  try {
    const result = await executeSelect(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  insert,
  update,
  delete: del,
  select
};