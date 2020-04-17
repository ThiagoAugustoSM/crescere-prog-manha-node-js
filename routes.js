const routes = require('express').Router()
const ProductController = require('./controllers/ProductController');

routes.get('/:id', ProductController.get)
routes.post('/:id', ProductController.post)
routes.put('/', ProductController.put)
routes.delete('/:id', ProductController.delete)

module.exports = routes;