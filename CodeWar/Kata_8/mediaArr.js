/* 
? https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
todo array
*/
function getAverage(marks) {
  const media = (a, b) => Math.floor(a / b);
  const sumNota = marks.reduce((a, c) => a + c, 0);
  return media(sumNota, marks.length)

}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5,]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))