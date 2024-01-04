/* 
? https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
todo: Grasshoper Array - lista - matrix
*/
var findAverage = function (nums) {
  // Code here 
  const length = nums.length
  const total = nums.reduce((acc, curr) => acc + curr, 0)
  const AverageResult = (a, b) => a / b
  return AverageResult(total, length)
}

console.log(findAverage([1, 3, 5, 7]))