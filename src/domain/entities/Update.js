class Update {
  constructor(table, set = {}, where = {}) {
    if (!table || typeof table !== 'string') {
      throw new Error('Table must be a non-empty string');
    }
    if (typeof set !== 'object' || typeof where !== 'object') {
      throw new Error('Set and Where must be valid objects');
    }

    this.table = table;
    this.set = set;
    this.where = where;
  }
}

module.exports = Update;