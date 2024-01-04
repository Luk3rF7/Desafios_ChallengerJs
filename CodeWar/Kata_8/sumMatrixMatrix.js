/* 
? https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
todo : array
*/
function arrayPlusArray(arr1, arr2) {
  const sum = array => array.reduce((Acc, curr) => Acc + curr, 0);
  const result1 = sum(arr1)
  const result2 = sum(arr2)
  return result1 + result2

}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));