/* 
Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, 
o usuário fornece o número 875 e a função mostra na tela o número 578. 
*/

function invertNum(num) {
  let inverso = 0
  while (num !== 0) {
    inverso *= 10;
    inverso = inverso + num % 10

    num = Math.trunc(num / 10);
  }
  return inverso
}

console.log(invertNum(123456789))