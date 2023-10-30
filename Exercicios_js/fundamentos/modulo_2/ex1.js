/*  crie uma função que some  2 valores */

function sum(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return 'Os argumentos tem que ser numeros'
  }
  let somar = a + b
  return `A Soma do valor A: ${a} com B: ${b} é ${somar} `
}
let a = 2
let b = 7
console.log(sum(a, b));