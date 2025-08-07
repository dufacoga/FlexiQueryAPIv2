const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    select(table: String!, columns: [String!], where: String): [Result]
  }

  type Mutation {
    insert(table: String!, values: JSONInput!): Int
    update(table: String!, values: JSONInput!, where: String!): Int
    delete(table: String!, where: String!): Int
  }

  type Result {
    key: String
    value: String
  }

  input JSONInput {
    key: String
    value: String
  }
`);

module.exports = schema;