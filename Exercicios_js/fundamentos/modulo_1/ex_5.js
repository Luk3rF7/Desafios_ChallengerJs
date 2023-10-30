/* 
. Escreva uma função que encontre a área e o perímetro de um círculo,
 de acordo com o raio fornecido.
*/
function calcCircle(raio) {
  let perimetro = 2 * Math.PI * raio
  let area = Math.PI * raio * raio
  return `Perimetro: ${perimetro} <br> Àrea : ${area}`
}

console.log(calcCircle(10))