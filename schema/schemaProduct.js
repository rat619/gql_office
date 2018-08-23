var resolvers    = require('../resolvers/resolverProduct');
var gpltools    = require('graphql-tools');


const scalar = `scalar Date
type MyType {
   created: Date
}`;


const modelProduct = `type Product {
  id : Int!
  name: String!
  selling_price : Float
  color : Color 
  provider : Provider
  range : Range
  code_vat: Code_VAT
  coefficient : Float
  purchasing_price : Float
  tax_free_rate : Float
  CUMP : Float
  weight : Float
  season : Season
  size : Size
  label: Label
  group : Group
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
type Provider {
  id: Int!
  name: String
  siret : String
}
type Range {
  id: Int!
  name: String
}
type Label {
  id: Int!
  code : String
  name: String

}
type Code_VAT {
  id: Int!
  code: String 
  name: String
}

type Season {
  id: Int!
  code: String 
  name: String
  enddate : Date
  startdate : Date
}
type Size {
  id: Int!
  code: String 
  name: String
}
type Group {
  id: Int!
  code: String 
  name: String
}
`;

const QueryProduct = `
type Query {
  allProduct(id: Int,name: String): [Product]
  OneProduct(id: Int,name: String) : Product
  allColor(id: Int,name: String): [Color]
  OneColor(id: Int,name: String): Color
  allProvider : [Provider]
  OneProvider(id: Int,name: String): Provider
  allRange : [Range]
  OneRange(id: Int,name: String): Range
  allCodeVAT : [Code_VAT]
  OneCodeVAT(id: Int, code: String, name: String): Code_VAT
  allGroup : [Group]
  OneGroup(id: Int, code: String, name: String): Group
  allSize : [Size]
  OneSize(id: Int, code: String, name: String): Size
  allLabel : [Label]
  OneLabel(id: Int, code: String, name: String): Label
  allSeason : [Season]
  OneSeason(id: Int, code: String, name: String): Season
}`;

const MutationProduct =`
type Mutation {
  createProduct(name: String!,selling_price: Float, color: Int!, provider : Int!, range : Int!,code_vat : Int!, group : Int!, size :Int!, season: Int!  ) : Product!
  createColor(name: String, hexa: String, description: String, R: String, G: String, B: String) : Color!
  createProvider(name: String!,siret : String) : Provider!
  createRange(name: String!) : Range!
  createCodeVAT(code: String!, name: String!) : Code_VAT!
  createGroup(code: String!, name: String!) : Group!
  createSize(code: String!, name: String!) : Size!
  createLabel(code: String!, name: String!) : Label!
  createSeason(code: String!, name: String!, enddate : Date, startdate : Date) : Season!
}
`;
//console.log(modelProduct + QueryProduct + MutationProduct );

schemaDefinition = scalar + modelProduct + QueryProduct + MutationProduct
module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
