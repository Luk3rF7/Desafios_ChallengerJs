/* 
? https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
todo array
*/
function grow(x) {
  const orderArr = array => array.sort()
  const arrOrdenado = orderArr(x)
  return arrOrdenado.reduce((a, c) => a * c)
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
console.log(grow([2, 2, 2, 0, 2, 1]), 64); 