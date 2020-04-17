const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

// Código do Pug
// app.set('view engine', 'pug');

// Renderização do Pug
// app.get('/', function(req, res){
//   res.render('index', {titleProduto: 'Sapataria Peter', message: 'Compre sapatos!'})
// })

app.listen(3000, function(){
  console.log('Opa! O Servidor da Sapataria de Peter começou!')
})