var resolvers    = require('../resolvers/resolverProduct');
var gpltools    = require('graphql-tools');

const modelProduct = `type Product {
  id : Int!
  name: String!
  selling_price : Float
  color : Color
}
type Color {
  id : Int!
  name: String
  description : String
  hexa: String
  R: String
  G: String
  B: String
}`;

const QueryProduct = `
type Query {
  allProduct(id: Int,name: String): [Product]
  OneProduct(id: Int,name: String) : Product
  allColor: [Color]
}`;

const MutationProduct =`
type Mutation {
  createProduct(name: String!,selling_price: Float, color: Int ) : Product!
  createColor(name: String, hexa: String, description: String, R: String, G: String, B: String) : Color! 
}
`;
//console.log(modelProduct + QueryProduct + MutationProduct );

schemaDefinition = modelProduct + QueryProduct + MutationProduct
module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
