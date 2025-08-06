class ISqlExecutor {
  async executeQuery(sql, parameters) {
    throw new Error('executeQuery not implemented');
  }

  async executeNonQuery(sql, parameters) {
    throw new Error('executeNonQuery not implemented');
  }
}

module.exports = ISqlExecutor;