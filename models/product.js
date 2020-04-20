// Acessando ao nosso mongoose já conectado
const mongoose = require('../config/database');

// Criando um novo Schema para o nosso Produto
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

// Criando um novo modelo baseado 'Product' baseado no Schema do nosso Produto
const ProductModel = mongoose.model('Product', ProductSchema);

// Exportando o nosso Modelo do Produto
module.exports = ProductModel;