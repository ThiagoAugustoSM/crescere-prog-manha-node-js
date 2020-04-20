// Requisitando o modelo do nosso Produto, com já acesso ao banco de dados
const productModel = require('../models/product');

// Classe de Controller do Produto, com os controllers utilizados nas rotas
class ProductController{
  
  // Pega o parâmetro id da requisição get
  // Procura um Produto no nosso banco de dados com o id passado a função
  // Retorna o Produto como json para quem requisitou
  async get(req, res){
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.json(product);
  }

  // Recebe um produto no formato json via body da requisição
  // Cria um novo produto baseado no modelo do produto
  // Retorna o Produto criado, ou seja, o próprio req.body + uma nova propriedade de id gerada pelo MongoDB
  async put(req, res){
    const body = req.body;
    const product = await productModel.create(body);
    res.json(product);
  }

  // Rota para atualização de algum produto, baseado no id
  // Utiliza o id passado como parâmetro de rota
  // Pesquisa um produto por id e atualiza todo os seus valores pelo novo req.body
  async post(req, res){
    const { id } = req.params;
    const body = req.body;
    const product = await productModel.findByIdAndUpdate(id, req.body, {new: true});
    res.json(product);
  }

  // Remove um elemento do banco de dados, baseado no id passado
  async delete(req, res){
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    res.json({msg: "Esse produto foi deletetado"});
  }

}

// Exporta uma nova instância do produto
module.exports = new ProductController();