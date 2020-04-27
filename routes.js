// Importamos o componente router do express
// Adicionamos controladores as diferentes tipos de rotas criadas
// Importamos o ProductController desenvolvido, que tem acesso ao nosso model

const routes = require('express').Router()
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

const passport = require('passport')

// Rotas de Auth
routes.post('/login', UserController.login)
routes.post('/register', UserController.register)

// Rota acessível com login
routes.use('/home', passport.authenticate('jwt', { session: false }), UserController.home);

routes.get('/getFiltered', ProductController.getFiltered)
routes.get('/:id', ProductController.get)
routes.post('/:id', ProductController.post)
routes.put('/', ProductController.put)
routes.delete('/:id', ProductController.delete)


// Exportamos as definições das rotas
module.exports = routes;