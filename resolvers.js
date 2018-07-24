var bcrypt    = require('bcrypt');
var jwt  = require('./utils/jwt.utils');

module.exports = {
 User: {
    profile: ({ profile }, args, { models }) =>
      models.Profile.findOne({
        where: {
          id: profile,
        },
      })
  },
Query: {
  allUsers: (parent, args, { models,user }) => {
    if (user){
      return models.User.findAll();
    }
    throw new Error('vous devez vous connecter'); 
  },
/*Exemple d'appel 
query
{
  allUsers
}*/
  me: (parent, args, { models, user }) => {
    if (user) {  
      // they are logged in
        return models.User.findOne({
        attributes: [ 'id', 'email', 'name', 'surname','profile','createdAt','updatedAt' ],
        where: { id: user.Id }
        });        
    }
    // not logged in user
    throw new Error('Vous devez vous connecter');
  },
/*Exemple d'appel *
query
{
  me
}
*/
  userProfile: (parent, args, { models, user }) => {
    if (user) {  
      // they are logged in
        return models.Profile.findOne({
        attributes: [ 'id', 'name' ],
        where: { id: user.ProfileId }
        });        
    }
    // not logged in user
    throw new Error('Vous devez vous connecter');
  },
},
/*Exemple d'appel *
query
{
  userProfile
}
*/
Mutation: {
    register: async (parent, args, { models }) => {
      const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;
      const user = args;
      if (!EMAIL_REGEX.test(user.email)) {
        throw new Error('Email non valide');
      }
      if (!PASSWORD_REGEX.test(user.password)) {
        throw new Error('Mot de passe entre 4 et 8 caractères avec au moins 1 chiffre');
      }
      user.password = await bcrypt.hash(user.password, 12);
      return models.User.create(user);
/*Exemple d'Appel d'inscription
mutation
{
  register(username:"thierry",email:"rat619@test.fr",password:"tita619")
}
*/
    },
    login: async (parent, { email, password }, { models, SECRET },context) => {
      const user = await models.User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Not user with that email');
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }
      // verify: needs secret | use me for authentication
      // decode: no secret | use me on the client side
      const token = jwt.generateTokenForUser(user,SECRET);
      return token;
/*Exemple d'Appel de connexion
mutation
{
  login(email:"rat619@test.fr",password:"tita619")
}
*/
      },
    updateUser: (parent, { name, newName }, { models }) =>
      models.User.update({ name: newName }, { where: { name } }),
/*Exemple de suppression
mutation
{
  updateUser(username:"thierry",newUsername:"antoni")
}
*/
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
/*Exemple de suppression
mutation
{
  deleteUser(username:"antoni")
}
*/
    createProfile:(parent, args, { models }) =>
      
      models.Profile.create(args),
      
}};