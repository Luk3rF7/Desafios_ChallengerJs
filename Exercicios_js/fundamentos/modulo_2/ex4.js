/* 
Escreva uma função que receba dois números e
retorne true caso o primeiro seja múltiplo do segundo
*/

function firstISMultiply(a, b) {
  let checkRest = a % b ? 'não e multiplo' : 'e multiplo'
  return checkRest
}

console.log(firstISMultiply(6, 2)) // false
// 5 / 2  = 4 sobra 1
// 