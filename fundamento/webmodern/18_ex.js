/* 
Você está trabalhando numa aplicação pessoal de controle de despesas.
Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome,
 categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o
total das despesas.
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89

*/
const deps1 = [
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]
function totaDesp(arr) {
  let total = arr
    .map(desp => desp.preco)
    .reduce((acc, curr) => {
      return acc + curr
    })

  return total;
}
console.log(totaDesp(deps1))
//
function depsReduce(items) {
  return items.reduce((acc, valorAtual) => acc + valorAtual.preco, 0)
}
console.log(depsReduce(deps1));
function depsTotais(itens) {
  let total = 0;
  for (let item of itens) {
    total += item.preco
  }
  return total;
}
console.log(depsTotais(deps1));