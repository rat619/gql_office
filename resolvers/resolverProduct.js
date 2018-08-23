var bcrypt    = require('bcrypt');
var jwt  = require('../utils/jwt.utils');

module.exports = {
  Date: {
    /*__parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value.getTime(); // value sent to the client
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    } */
    /// A AMELIORER
    __serialize(value) {

      return value; // value sent to the client
    },
  
    __parseValue(value) {
  
      return value;
    },
    __parseLiteral(ast) {
      return JSON.parse(JSON.stringify(ast)).value;
    }
  

  },
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
      }),
    range: ({ range }, args, { models }) =>
      models.Range.findOne({
        where: {
          id: range,
        },
      }),
    code_vat: ({ code_vat }, args, { models }) =>
      models.Code_VAT.findOne({
        where: {
          id: code_vat,
        },
      }),
    group: ({ group }, args, { models }) =>
      models.group.findOne({
        where: {
          id: group,
        },
      }),
    size: ({ size }, args, { models }) =>
      models.size.findOne({
        where: {
          id: size,
        },
      }),
    season: ({ season }, args, { models }) =>
      models.season.findOne({
        where: {
          id: season,
        },
      }),
  },
  Query: {
    allProduct: (parent, args, { models}) => {
      return models.Product.findAll({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: args
        });
      },
    OneProduct: (parent, args, { models}) => {
        return models.Product.findOne({
          attributes: [ 'id', 'name','selling_price','color','createdAt','updatedAt' ],
          where: args
          /*{ 
              $or : {
                id: args.id, 
                name: args.name,
                }
            }*/        
        });
      },
    allColor: (parent, args, { models}) => {
        return models.ref_color.findAll({
          where: args
        });
      },
    OneColor: (parent, args, { models}) => {
        return models.ref_color.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allProvider: (parent, args, { models}) => {
        return models.Provider.findAll();
      },
    OneProvider: (parent, args, { models}) => {
        return models.Provider.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allRange: (parent, args, { models}) => {
        return models.Range.findAll();
      },
    OneRange: (parent, args, { models}) => {
        return models.Range.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allCodeVAT: (parent, args, { models}) => {
        return models.Code_VAT.findAll();
      },
    OneCodeVAT: (parent, args, { models}) => {
        return models.Code_VAT.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allGroup: (parent, args, { models}) => {
        return models.group.findAll();
      },
    OneGroup: (parent, args, { models}) => {
        return models.group.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allSize: (parent, args, { models}) => {
        return models.size.findAll();
      },
    OneSize: (parent, args, { models}) => {
        return models.size.findOne({
          attributes: ['id'],
          where: args
        });
      },
    allSeason: (parent, args, { models}) => {
        return models.season.findAll();
      },
    OneSeason: (parent, args, { models}) => {
        return models.season.findOne({
          attributes: ['id'],
          where: args
        });
      },
    },
  Mutation: {
    createProduct:(parent, args, { models }) =>
    models.Product.create(args),
    createColor:(parent, args, { models }) =>
    models.ref_color.create(args),
    createProvider:(parent, args, { models }) =>
    models.Provider.create(args),
    createRange:(parent, args, { models }) =>
    models.Range.create(args),
    createCodeVAT:(parent, args, { models }) =>
    models.Code_VAT.create(args),
    createGroup:(parent, args, { models }) =>
    models.group.create(args),
    createSize:(parent, args, { models }) =>
    models.size.create(args),
    createSeason:(parent, args, { models }) =>
    models.season.create(args),
  },
}; 