/* 
Crie uma função que receba dois números 
e retorne se o primeiro é maior ou igual ao segundo.
 Deverá diferenciar números de strings.

*/

function maiorIgual(num1, num2) {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    return 'Esse argumentos são texto'
  }
  if (num1 >= num2) {
    return 'numero 1 é maior'
  } else {
    return 'numero 1 não e maior'
  }
  return
}

console.log(maiorIgual(4, 3))