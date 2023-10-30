/* 
Calcule o fatorial passado pelo usuario:
*/

function calcFatorial(num) {
  // caso usuario passe valor de string
  if (typeof num === 'string') {
    return 'isso e um texto!'
  } else if (num < 0) {
    return 'esse e valor negativo !'
  }

  if (num == 1 || num == 0) {
    return 1;
  }
  return num * calcFactorial(num - 1);
}


console.log(calcFatorial(-1))