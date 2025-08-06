class Select {
  constructor(table, columns = ['*'], where = {}) {
    if (!table || typeof table !== 'string') {
      throw new Error('Table must be a non-empty string');
    }
    if (!Array.isArray(columns)) {
      throw new Error('Columns must be an array');
    }
    if (typeof where !== 'object') {
      throw new Error('Where must be a valid object');
    }

    this.table = table;
    this.columns = columns;
    this.where = where;
  }
}

module.exports = Select;