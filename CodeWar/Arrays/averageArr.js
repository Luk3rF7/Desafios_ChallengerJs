/* 
?https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
todo array
*/

function findAverage(array) {
  const averageArr = (a, b) => a == 0 ? 0 : a / b


  const sumArr = array.reduce((a, c) => a + c, 0)
  return averageArr(sumArr, array.length);
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
console.log(findAverage([41, 44, 26, 36, 79, 98, 41, 25, 87, 33, 80, 45, 18, 24, 51]), 48.53333333333333);
console.log(findAverage([]), 0);