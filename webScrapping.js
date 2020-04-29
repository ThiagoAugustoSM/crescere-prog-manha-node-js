const axios = require('axios');
const cheerio = require('cheerio');

const submarinoUrl = 'https://www.submarino.com.br/busca/sapato';

const fetchData = async () => {
  const result = await axios.get(submarinoUrl)
  return cheerio.load(result.data);
}

const parseHtml = async () => {
  const $ = await fetchData();

  let nomeProdutos = [];
  let precoProdutos = [];

  const nodeTitles = $('.TitleUI-bwhjk3-15').get();
  for(let nodeTitle of nodeTitles){
    nomeProdutos.push(nodeTitle.children[0].data)
  }

  const nodePrices = $('.PriceUI-bwhjk3-11').get();
  for(let nodePrice of nodePrices){
    let preco = parseFloat(nodePrice.children[2].data.replace(',', '.'));
    precoProdutos.push(preco);
  }

  for(let i = 0; i < nomeProdutos.length; i++){
    const item = {
      nome: nomeProdutos[i],
      cor: 'Vermelho',
      preco: precoProdutos[i]
    }

    if(item.preco != undefined){
      axios.put(
        'https://crescere-sapataria.herokuapp.com/', 
        JSON.stringify(item), 
        {
          headers:{
            'Content-Type': 'application/json'
          }
        })
      console.log('Produto: ', item, ' Criado!')
    }
  }
}

// PriceUI-bwhjk3-11 jtJOff PriceUI-sc-1q8ynzz-0 inNBs TextUI-sc-12tokcy-0 CIZtP
// PriceUI-bwhjk3-11 jtJOff PriceUI-sc-1q8ynzz-0 inNBs TextUI-sc-12tokcy-0 CIZtP

parseHtml();