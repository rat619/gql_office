// Imports
var express     = require('express');
var bodyParser  = require('body-parser');
var graphqlHTTP = require('express-graphql');
var expressjwt = require('express-jwt');
var schemaUser=require('./schema/schemaUser');
var schemaProduct=require('./schema/schemaProduct');
var models = require('./models');
//var { buildSchema } = require('graphql');
//var jwt  = require('./utils/jwt.utils');
// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static('public'));

const SECRET = 'say';

const auth = expressjwt({
    secret: SECRET,
    credentialsRequired: false,
  });

  server.get('/graphql', function (req, res) {

    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Welcome to SAY GRAPHQL !</title>'+
'    </head>'+ 
'    <body>'+
'      <h1>Welcome to SAY GraphQL</h1>'+
'      <h2><a href="http://localhost:4000/graphql/users"><strong>Users</strong></a></h2>'+
'      <div>createUser</div>'+
'      <h2><a href="http://localhost:4000/graphql/products"><strong>Products</strong></a></h2>'+
'    </body>'+
'</html>');
});
/*
const addUser = async (req) => {
    var Head = req.headers['authorization'];
    var userId = jwt.getUserId(Head);
    try {
        if (userId>0)
            return console.log('Utilisateur autorisé à se connecter Id : ' + userId);
        console.log('Utilisateur non autorisé');
    } catch (err) {
      console.log(err);
    }
    req.next();
  };
  server.use(addUser);

server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...');
    }
  });
*/
server.use(
    '/graphql/users',
    bodyParser.json(),
    auth,  // A utiliser pour la méthode automatique de gestion des autorisations
    graphqlHTTP(req => ({
        schema : schemaUser,
        context: {
          models,
          SECRET,
          user: req.user,
        },
        graphiql: true  
      })
    ));

server.use(
  '/graphql/products',
  bodyParser.json(),
  auth,  // A utiliser pour la méthode automatique de gestion des autorisations
  graphqlHTTP(req => ({
    schema: schemaProduct,
    context: {
      models,
      SECRET,
      user: req.user,
    },
    graphiql: true
  })
  ));

server.listen(4000, () => console.log('GraphQl on localhost:4000/graphql'));
