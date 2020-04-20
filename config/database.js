const mongoose = require('mongoose');

// Conectando ao Banco de dados MongoDb
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-8wpn6.mongodb.net:27017,cluster0-shard-00-01-8wpn6.mongodb.net:27017,cluster0-shard-00-02-8wpn6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

module.exports = mongoose;