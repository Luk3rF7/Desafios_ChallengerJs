/* 
Dado um número inteiro  n, retorne uma counterfunção. Esta counterfunção retorna inicialmente  n e depois retorna 1 a mais que o valor anterior sempre que for chamada ( n, n + 1, n + 2, etc).

 

Exemplo 1:

Entrada: 
n = 10
["ligar","ligar","ligar"]
Saída: [10,11,12]
 Explicação: 
 counter() = 10 // Na primeira vez que counter() é chamado, ele retorna n.
counter() = 11 // Retorna 1 a mais que na vez anterior.
counter() = 12 // Retorna 1 a mais que na vez anterior.
*/
let createCounter = function (num) {
  let count = num
  return function () {
    return count++
  }
}

const count = createCounter(10);
console.log(count())
console.log(count())
console.log(count())
