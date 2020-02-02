import { GraphQLObjectType, GraphQLString ,GraphQLSchema } from 'graphql';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from Query!'
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from Mutation!'
    }
  }
});

export const schema = new GraphQLSchema({query, mutation});
