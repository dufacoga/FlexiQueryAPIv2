class Insert {
  constructor(table, values = {}) {
    if (!table || typeof table !== 'string') {
      throw new Error('Table name must be a non-empty string');
    }

    if (!values || typeof values !== 'object') {
      throw new Error('Values must be a valid object');
    }

    this.table = table;
    this.values = values;
  }
}

module.exports = Insert;