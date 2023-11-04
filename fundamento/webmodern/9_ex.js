/* 
Escreva uma função que receba dois parâmetros.
O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que 
haverá repetição. Um array será retornado.
*/
function repeatElem(elem, repeat) {
  let arr = []
  for (let i = 0; i < repeat; i++) {
    arr.push(elem)
  }
  return arr
}

function repeatArray(elem, repeat) {
  let newArr = Array(repeat).fill(elem);
  return newArr
}
console.log(repeatArray(5, 4))
console.log(repeatElem(5, 4))