var bcrypt    = require('bcrypt');
var jwt  = require('../utils/jwt.utils');

module.exports = {
  Product: {
    color: ({ color }, args, { models }) =>
      models.ref_color.findOne({
        where: {
          id: color,
        },
      }),
    provider: ({ provider }, args, { models }) =>
      models.Provider.findOne({
        where: {
          id: provider,
        },
      })
  },
  Query: {
    allProduct: (parent, args, { models}) => {
      return models.Product.findAll({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: args
        });
      },
   /* OneProduct: (parent, args, { models}) => {
        return models.Product.findOne({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: { 
              $or : {
                id: args.id, 
                name: args.name,
          }
        }        
      })
    },*/
    allColor: (parent, args, { models}) => {
        return models.ref_color.findAll({
          where: args
        });
      },
    OneColorId: (parent, args, { models}) => {
        return models.ref_color.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allProvider: (parent, args, { models}) => {
        return models.Provider.findAll();
      }
    },
  Mutation: {
    createProduct:(parent, args, { models }) =>
      models.Product.create(args),
    createColor:(parent, args, { models }) =>
    models.ref_color.create(args),
    createProvider:(parent, args, { models }) =>
    models.Provider.create(args)
  }
}; 