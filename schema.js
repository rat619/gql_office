var resolvers    = require('./resolvers');
var gpltools    = require('graphql-tools');

const schemaDefinition = `
  type Profile {
    id : Int!
    name: String!
  }
  type User {
    id: Int!
    name: String!
    surname: String
    email: String!
    profile : Profile!
    createdAt: String
    updatedAt: String 
  }
  type Query {
    allUsers: [User!]!
    me: User
    userProfile: Profile
  }
  type Mutation {
    updateUser(name: String!, newName: String!): [Int!]!
    deleteUser(id: Int!): Int!
    register(name: String!, surname: String, email: String!, password: String!,profile:Int!): User!
    createProfile(name: String!) : Profile!
    login(email: String!, password: String!): String!
  }
`;

module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
