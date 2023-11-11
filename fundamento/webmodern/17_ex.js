/* 
Escreva uma funcao que receba um array
de numero e retorna a soma de todos eles
*/

const arr = [10, 10, 10];
const arr2 = [15, 15, 15, 15];

function totalArr(arr) {

  let total = arr.reduce((acc, curr) => {
    return acc + curr
  })
  return total
}
console.log(totalArr(arr))
console.log(totalArr(arr2))
// 
function sumNum(num) {
  const qntdsDeNum = num.length

  return (qntdsDeNum === 0) ? 0 : num[0] + sumNum(num.slice(1));
}
console.log(sumNum(arr));

function sumForEach(num) {
  let sum = 0;
  num.forEach(num => sum += num);
  return sum;
}
sumForEach(arr2);

