/* 
?https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
todo arrays
*/

function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0])
  return Number.isInteger(result) ? result : null

}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6]));
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7]));
