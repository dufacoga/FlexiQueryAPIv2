class IQueryBuilder {
  buildInsert(insertModel) {
    throw new Error('buildInsert not implemented');
  }

  buildUpdate(updateModel) {
    throw new Error('buildUpdate not implemented');
  }

  buildDelete(deleteModel) {
    throw new Error('buildDelete not implemented');
  }

  buildSelect(selectModel) {
    throw new Error('buildSelect not implemented');
  }
}

module.exports = IQueryBuilder;