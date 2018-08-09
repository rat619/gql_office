var bcrypt    = require('bcrypt');
var jwt  = require('../utils/jwt.utils');

module.exports = {
  Query: {
    allProduct: (parent, args, { models}) => {
        return models.Product.findAll();
      },
    allColor: (parent, args, { models}) => {
        return models.ref_color.findAll();
      }
    },
  Mutation: {
    createProduct:(parent, args, { models }) =>
    models.Product.create(args),
    createColor:(parent, args, { models }) =>
    models.ref_color.create(args)
  }
}; 