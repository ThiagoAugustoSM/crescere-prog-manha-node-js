const mongoose = require('../config/database');

const ProductSchema = mongoose.Schema(
  {
    nome:{
      type: String,
      required: true
    },
    cor:{
      type: String
    },
    preco:{
      type: Number
    }
  }
);

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;