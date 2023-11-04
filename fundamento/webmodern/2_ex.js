/* 
Escreva uma função que receba a idade de
uma pessoa em anos e retorne a mesma 
idade em dias
*/

function convertIdade(age) {
  const diasDoAnos = 365;
  return diasDoAnos * age;
}

console.log(convertIdade(20));