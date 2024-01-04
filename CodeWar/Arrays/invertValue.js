/* 
?https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
*/

function invert(array) {
  const checkPos = pos => pos == 0 ? 0 : -pos
  return array.map(checkPos);
}

console.log(invert([1, 2, 3, 4, -5, -6]))
console.log(invert([]))
console.log(invert([0]))