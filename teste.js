
class Animal{
  constructor(nome, cor, sexo, barulho){
    this.cor = cor;
    this.idade = 10;
    this.nome = nome;
    this.dieta = ['08:00', '16:00'];
    this.sexo = sexo;
    this.tipoBarulho = barulho;
  }

  barulho(){
    console.log(this.tipoBarulho)
  }
}

function foo(a = 2){
  console.log(a);
}

foo(3);

class Cachorro extends Animal{
  constructor(nome, cor, sexo, barulho, latido){
    super(nome, cor, sexo, barulho);
    this.latido = latido;
  }
}

let corAnimal = 'Preta';
let idadeAnimal = 10;
let nomeAnimal = 'Jorge';
let dietaAnimal = ['08:00', '16:00'];
let sexoAnimal = 'F';
// let racaAnimal = '';

let animal = {
  cor: 'Preta',
  idade: 10,
  nome: 'Jorge',
  dieta: ['08:00', '16:00'],
  sexo: 'F'
}

let novoAnimal = new Animal('Pedro', 'Preta', 'M', 'OH!');
let novoAnimal2 = new Animal('Jorge', 'Preta', 'F', 'AU AU!');

let novoCachorro = new Cachorro('Cachorrinho', 'Preta', 'F', 'AU AU!', 'AUUUUU!');
console.log(novoCachorro);

// console.log(novoAnimal, novoAnimal2);

// novoAnimal.barulho();
// novoAnimal2.barulho();