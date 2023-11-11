/* 
uma aplicação Web de investimento financeiro da qual você
faz parte da equipe de desenvolvimento, pretende-se
adicionar a funcionalidade de calcular a média de um 
conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função 
que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
*/
const number = [0, 10]
const number2 = [1, 2, 3, 4, 5]
function mediaConj(arr) {
  const qtdsNumber = arr.length;

  let sumTotal = 0;

  for (num of arr) {
    sumTotal += num
  }

  return sumTotal / qtdsNumber;
}
console.log(mediaConj(number));

function calcMedia(arrNum) {
  const qtdsArr = arrNum.length;
  const sumTotal = arrNum.reduce(
    (numA, numB) => numA + numB)
  const divisor = sumTotal / qtdsArr;
  return divisor
}
console.log(calcMedia(number2))