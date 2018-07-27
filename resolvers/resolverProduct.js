var bcrypt    = require('bcrypt');
var jwt  = require('../utils/jwt.utils');

module.exports = {
  Query: {
    allProduct: (parent, args, { models}) => {
        return models.Product.findAll();
      },
}}; 