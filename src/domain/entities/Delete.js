class Delete {
  constructor(table, where = {}) {
    if (!table || typeof table !== 'string') {
      throw new Error('Table must be a non-empty string');
    }
    if (typeof where !== 'object') {
      throw new Error('Where must be a valid object');
    }

    this.table = table;
    this.where = where;
  }
}

module.exports = Delete;