/* 
Elabore uma função que receba um 
array de números e retorne um array
que tenha todos os números que são
pares e que também tenham índices pares.
*/

function receberSomentePares(num) {
  let result = [];
  for (let i = 0; i < num.length; i += 2) {
    const numPAr = num[i] % 2 === 0
    if (numPAr) {
      result.push(num[i])
    }
  }
  return result;
}

function numPArIndice(nums) {
  return num.filter((num, index) => {
    const numPAr = num % 2 === 0
    const indicePar = index % 2 === 0

    return numPAr && indicePar
  })
}
const arrnum = [10, 20, 20, 30, 30, 10, 15, 1, 2, 3, 4]
console.log(receberSomentePares(arrnum))