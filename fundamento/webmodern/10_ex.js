/* 
Elabore uma função que recebe um número
como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
*/
function convertNum(n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += '+'
  }
  return result
}

function convertNumArray(qtd) {
  const convertNum = Array(qtd).fill('+').join('')
  return convertNum
}
function convertNumBase(quantidade) {
  return '+'.repeat(quantidade)
}
console.log(convertNumBase(4))
console.log(convertNum(5))
console.log(convertNumArray(10))