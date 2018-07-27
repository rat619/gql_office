var resolvers    = require('../resolvers/resolverProduct');
var gpltools    = require('graphql-tools');

const schemaDefinition = `
type Product {
  id : Int!
  name: String!
}
type Query {
  allProduct: [Product]
}
type Mutation {
  createProduct(name: String!) : Product!
}
`;

module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
