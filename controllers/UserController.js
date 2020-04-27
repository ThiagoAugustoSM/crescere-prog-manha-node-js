const userModel = require('../models/user');

const passport = require('../auth');

const bcrypt = require('bcrypt');

const saltRounds = 10;

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY

class UserController{
  home(req, res){
    res.send('Bem vindo a página inicial!')
  }

  login(req, res, next){
    passport.authenticate('local',
            { session: false },
            (err, user, info) => {
              if(err){
                return res.status(500).json({err})
              }

              if(!user) {
                const {message} = info
                return res.status(401).json({message})
              }

              // Se chegamos nesse ponto, significa que o usuário está correto

              const { _id } = user;
              const token = jwt.sign({ _id }, secretKey, { expiresIn: '1h' })

              res.cookie('jwt', token, {
                httpOnly: false,
                secure: false
              }).status(200).send({message: 'Login feito com sucesso!'})
            }
    )(req, res, next)
  }

  register(req, res){
    const { password, name, email } = req.body;

    bcrypt.hash(password, saltRounds)
      .then(async (hash) => {
        await userModel.create({ name, email, password: hash}, (err, newUser) => {
          if(err){
            console.log(err);
            return res.status(400).json({ error: 'O Usuário já existe!'})
          }

          return res.json({ message: 'Usuário foi criado!'})
        })
      })

  }
}

module.exports = new UserController();