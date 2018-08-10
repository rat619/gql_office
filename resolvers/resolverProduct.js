var bcrypt    = require('bcrypt');
var jwt  = require('../utils/jwt.utils');

module.exports = {
  Product: {
    color: ({ color }, args, { models }) =>
      models.ref_color.findOne({
        where: {
          id: color,
        },
      })
  },
  Query: {
    allProduct: (parent, args, { models}) => {
        return models.Product.findAll();
      },
    OneProduct: (parent, Product, { models}) => {
        return models.Product.findOne({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: { id: Product.id  }
          });        
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