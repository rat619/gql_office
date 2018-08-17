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
    if (args.id && args.name) 
    {
      var conditions = {
        id: args.id,
        name: args.name
      };
    }
    else 
    {
      var conditions = {};
    }
      return models.Product.findAll({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: conditions
        });

      //return models.Product.findAll({});

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