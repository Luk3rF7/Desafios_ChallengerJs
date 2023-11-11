/* 
Criar uma função que receba um array de 
números e retorne o menor número desse array.
*/

function minNumber(arr) {
  let min = arr[0];

  for (let index in arr) {
    if (arr[index] < min) min = arr[index];
  }
  return min;
}
const arr = [1, -2, 5, 34, 5, 5]
console.log(minNumber(arr));

// 
function minNumReduce(arr) {
  return arr.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

// 

function menorNum(arr) {
  return Math.min(...arr);
}