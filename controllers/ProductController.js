const productModel = require('../models/product');

class ProductController{
  
  async get(req, res){
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.json(product);
  }

  async put(req, res){
    const body = req.body;
    const product = await productModel.create(body);
    res.json(product);
  }

  async post(req, res){
    const { id } = req.params;
    const body = req.body;
    const product = await productModel.findByIdAndUpdate(id, req.body, {new: true});
    res.json(product);
  }

  async delete(req, res){
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    res.json({msg: "Esse produto foi deletetado"});
  }

}

module.exports = new ProductController();