var resolvers    = require('./resolvers');
var gpltools    = require('graphql-tools');

const schemaDefinition = `
  type Profile {
    id : Int!
    name: String!
  }
  type Permission {
    id : Int!
    name: String
    description : String
    read: Boolean
    write : Boolean
  }
  type Rel_profile_permission {
    id : Int!
    profile: Int!
    permission : Int!
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
    profilePermission: [Rel_profile_permission]
  }
  type Mutation {
    updateUser(name: String!, newName: String!): [Int!]!
    deleteUser(id: Int!): Int!
    register(name: String!, surname: String, email: String!, password: String!,profile:Int!): User!
    createProfile(name: String!) : Profile!
    createPermission(name : String!, description: String,read: Boolean, write: Boolean) : Permission!
    createProfilePermission(profile:Int!,permission:Int!): Rel_profile_permission!
    login(email: String!, password: String!): String!
  }
`;

module.exports = gpltools.makeExecutableSchema({
  typeDefs:schemaDefinition,
  resolvers,
});
