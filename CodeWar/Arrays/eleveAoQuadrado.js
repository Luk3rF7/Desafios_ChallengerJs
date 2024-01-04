/* 
? https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
todo array 
*/
const isSquareRootInteger = num => Number.isInteger(Math.sqrt(num))

const squareOrSquareRoot = array =>
  array.map(num => (isSquareRootInteger(num) ? Math.sqrt(num) : num ** 2))

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
