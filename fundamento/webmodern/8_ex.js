/*
Desenvolva uma função que recebe dois números inteiros 
não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador 
de mutiplicação.
*/

function mult(num1, num2) {
  let result = 0

  let numA = parseInt(num1)
  let numB = parseInt(num2)
  /* 
  A otimização feita p/ diminui a qntd
  realizada aqui p/ diminui a quantidade de loop
  */

  for (let i = 0; i < Math.abs(numA); i++) {
    result += Math.abs(numB)
  }
  return result

}

console.log(mult("5", "-5"));

function mult2(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0

  let numA = Math.abs(parseInt(num1))
  let numB = Math.abs(parseInt(num2))
  // fazemos recursao
  return numB === 1 ? numA : numA + mult2(numA, numB - 1)
}

console.log(mult2(-5, "5"))



function multiplicar(numeroA, numeroB) {
  if (numeroA === 0 || numeroB === 0) return 0
  const maiorNumero = Math.max(numeroA, numeroB)
  const menorNumero = Math.min(numeroA, numeroB)
  function multiplicarRecursivamente(numero, multiplicador) {
    return (
      multiplicador === 1 ?
        numero :
        numero + multiplicarRecursivamente(numero, multiplicador - 1)
    )
  }
  // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
  return multiplicarRecursivamente(maiorNumero, menorNumero)
}
console.log(multiplicar(5, 5))
