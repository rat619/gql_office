var resolvers    = require('../resolvers/resolverProduct');
var gpltools    = require('graphql-tools');

const schemaDefinition = `
type Product {
  id : Int!
  name: String!
  selling_price : Float
}
type Color {
  id : Int!
  name: String
  description : String
  hexa: String
  R: String
  G: String
  B: String
}
type Query {
  allProduct: [Product]
  allColor: [Color]
}
type Mutation {
  createProduct(name: String!) : Product!
  createColor(name: String, hexa: String, description: String, R: String, G: String, B: String) : Color! 
}
`;

module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
