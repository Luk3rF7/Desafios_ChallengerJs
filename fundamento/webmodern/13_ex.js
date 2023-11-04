/* 
Crie uma função que receba um array de
elementos e retorne um array somente
com os números presentes no array recebido 
como parâmetro.
*/
function arrNum(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i])
    }
  }
  return result
}
function forOfNum(arr) {
  let result = []
  for (let item of arr) {
    if (typeof item === 'number') {
      result.push(item)
    }
  }
  return result
}

function forEachFilterNum(arr) {
  let result = []
  const arrNum = arr.forEach(element => {
    if (typeof element === 'number') {
      result.push(element)
    }
  });
  return result;
}
function filterNum(arr) {
  return arr.filter(num => typeof num === 'number')
}
const arr = ["javascript", 1, "3", true, "web", 20];
console.log('Filter com forEach = ', forEachFilterNum(arr));
console.log('filter For Of =', forOfNum(arr));
console.log('for normal filter =', arrNum(arr));
console.log('utilizando filter =', filterNum(arr));