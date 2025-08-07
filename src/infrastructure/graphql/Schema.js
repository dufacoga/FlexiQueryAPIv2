const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');
const { GraphQLJSON } = require('graphql-type-json');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    select: {
      type: new GraphQLList(GraphQLJSON),
      args: {
        table: { type: new GraphQLNonNull(GraphQLString) },
        columns: { type: new GraphQLList(GraphQLString) },
        where: { type: GraphQLJSON }
      },
      resolve: (_, args) =>
        require('../../application/usecases/executeSelect')(args)
    }
  }
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    insert: {
      type: GraphQLInt,
      args: {
        table: { type: new GraphQLNonNull(GraphQLString) },
        values: { type: new GraphQLNonNull(GraphQLJSON) }
      },
      resolve: (_, args) =>
        require('../../application/usecases/executeInsert')(args)
    },
    update: {
      type: GraphQLInt,
      args: {
        table: { type: new GraphQLNonNull(GraphQLString) },
        values: { type: new GraphQLNonNull(GraphQLJSON) },
        where: { type: new GraphQLNonNull(GraphQLJSON) }
      },
      resolve: (_, args) =>
        require('../../application/usecases/executeUpdate')(args)
    },
    delete: {
      type: GraphQLInt,
      args: {
        table: { type: new GraphQLNonNull(GraphQLString) },
        where: { type: new GraphQLNonNull(GraphQLJSON) }
      },
      resolve: (_, args) =>
        require('../../application/usecases/executeDelete')(args)
    }
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});