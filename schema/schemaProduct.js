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
`;

module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
