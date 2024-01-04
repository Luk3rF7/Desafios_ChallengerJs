/* 
?https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
todo : Array
*/
function positiveSum(arr) {
  const numPositive = num => num > 0 || num == '' ? num : 0
  const checkArr = num => arr.filter(numPositive).reduce((a, c) => a + c, 0);
  return checkArr(arr);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
